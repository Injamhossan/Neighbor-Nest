package main

import (
	"context"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5"
	"github.com/joho/godotenv"
)

func main() {
	// Load .env file
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, relying on environment variables")
	}

	// Connect to database
	dbURL := os.Getenv("DATABASE_URL")
	ctx := context.Background()

	config, err := pgx.ParseConfig(dbURL)
	if err != nil {
		log.Fatalf("Unable to parse DATABASE_URL: %v\n", err)
	}

	// Required for Supabase/PgBouncer transaction mode
	config.DefaultQueryExecMode = pgx.QueryExecModeExec

	conn, err := pgx.ConnectConfig(ctx, config)
	if err != nil {
		log.Fatalf("Unable to connect to database: %v\n", err)
	}
	defer conn.Close(ctx)

	// Test connection
	var version string
	if err := conn.QueryRow(ctx, "SELECT version()").Scan(&version); err != nil {
		log.Fatalf("Query failed: %v\n", err)
	}
	log.Println("Connected to Database:", version)

	// Initialize Gin router
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Welcome to Neighbor Nest API",
			"status":  "Backend is running and connected to Supabase",
		})
	})

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	log.Println("Server starting on :8080...")
	r.Run(":8080")
}


