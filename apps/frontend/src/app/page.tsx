import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg-main relative">
      {/* Decorative Blur Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-main/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-main/10 rounded-full blur-[120px]" />

      <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 py-20 text-center sm:text-left sm:flex-row sm:justify-between gap-12">
        <div className="flex flex-col items-center sm:items-start gap-8 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-main/5 border border-primary-main/10 text-primary-main text-sm font-medium animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-main opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-main"></span>
            </span>
            Neighbor Nest
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold leading-[1.1] tracking-tight text-primary-main">
            Building Stronger <br />
            <span className="text-accent-main">Communities</span> Together
          </h1>
          
          <p className="text-lg sm:text-xl leading-relaxed text-primary-main/70 max-w-lg">
            Connect with your neighbors, share resources, and create a safer, friendlier neighborhood for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="h-14 px-8 rounded-2xl bg-primary-main text-bg-main font-semibold text-lg shadow-xl shadow-primary-main/20 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              Get Started
            </button>
            <button className="h-14 px-8 rounded-2xl border-2 border-primary-main/10 text-primary-main font-semibold text-lg hover:bg-primary-main/5 hover:border-primary-main/20 transition-all duration-300">
              Learn More
            </button>
          </div>
          
          <div className="flex items-center gap-4 pt-4 animate-fade-in-up">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-bg-main bg-primary-main/10 flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-gradient-to-br from-primary-main/20 to-accent-main/20" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-primary-main/60">
              <span className="text-primary-main font-bold">500+</span> neighbors joined this week
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-md aspect-square sm:max-w-none sm:flex-1">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-main/20 to-transparent rounded-3xl rotate-3 scale-105 blur-sm" />
          <div className="relative h-full w-full rounded-[2.5rem] bg-primary-main/5 border border-primary-main/10 backdrop-blur-sm overflow-hidden flex items-center justify-center p-8 group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-main/5 via-transparent to-primary-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col items-center gap-6">
                <div className="w-24 h-24 rounded-3xl bg-accent-main flex items-center justify-center shadow-2xl shadow-accent-main/30 animate-float">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-primary-main">Neighbor Nest</h3>
                    <p className="text-primary-main/60 font-medium italic">"The heart of your community"</p>
                </div>
            </div>
            
            {/* Abstract UI Elements */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full border border-accent-main/20 animate-spin-slow" />
            <div className="absolute bottom-12 left-8 w-24 h-6 rounded-full bg-primary-main/10" />
          </div>
        </div>
      </main>

      {/* Adding custom animations via inline styles for simplicity since it's a single file */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
