"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Home } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2.5 bg-primary-main/98 backdrop-blur-xl shadow-xl border-b border-white/5"
          : "py-5 bg-primary-main"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-accent-main flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-bg-main tracking-tight transition-colors duration-300 group-hover:text-accent-main">
            NeighborNest
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/10 backdrop-blur-md">
          {[
            { name: "Feed", href: "#feed" },
            { name: "Marketplace", href: "#marketplace" },
            { name: "Services", href: "#services" },
            { name: "Emergency", href: "#emergency" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-5 py-2 rounded-full text-[13px] font-semibold text-bg-main/70 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="hidden sm:block text-sm font-semibold text-bg-main/70 hover:text-white transition-colors"
          >
            Log In
          </Link>
          <button className="px-6 py-2.5 rounded-full bg-accent-main text-white text-sm font-bold shadow-lg shadow-accent-main/20 hover:bg-accent-dark transition-all duration-300">
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
