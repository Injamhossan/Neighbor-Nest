import Image from "next/image";
import heroImage from "@/assets/hero-community.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden relative pt-20">
      {/* Decorative Blur Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-main/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-main/10 rounded-full blur-[120px]" />

      <main className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-between px-6 py-16 sm:flex-row gap-16">
        {/* Left Content */}
        <div className="flex flex-col items-center sm:items-start gap-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-main/10 border border-accent-main/20 text-accent-main text-xs font-bold uppercase tracking-wider animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-accent-main"></span>
            Connecting Neighborhoods Across Bangladesh
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-bold leading-[1] tracking-tight text-primary-main italic">
            Your Neighborhood, <br />
            <span className="text-accent-main not-italic">Your Family</span>
          </h1>
          
          <p className="text-lg sm:text-xl leading-relaxed text-primary-main/80 max-w-lg">
            Connect with neighbors, solve local problems, trade items, and get emergency help — all in one hyper-local platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <button className="h-16 px-10 rounded-full bg-accent-main text-white font-bold text-lg shadow-2xl shadow-accent-main/30 hover:bg-accent-dark hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Join Your Area
              <ArrowRight className="w-5 h-5 text-current" />
            </button>
            <button className="h-16 px-10 rounded-full border-2 border-primary-main/20 text-primary-main font-bold text-lg hover:bg-primary-main/5 hover:border-primary-main/30 transition-all duration-300">
              Explore
            </button>
          </div>
        </div>

        {/* Right Image/Illustration */}
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-0 bg-accent-main/10 rounded-[3rem] rotate-2 blur-2xl" />
          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl shadow-primary-main/10 transform -rotate-1 transition-transform hover:rotate-0 duration-500">
            <Image 
              src={heroImage} 
              alt="Community" 
              className="w-full h-auto object-cover"
              placeholder="blur"
            />
            
            {/* Overlay Cards */}
            <div className="absolute top-6 right-6 glass px-4 py-2 rounded-2xl flex items-center gap-3 animate-float">
               <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
               <span className="text-xs font-bold text-primary-main">12 active in your area</span>
            </div>
            
            <div className="absolute bottom-6 left-6 glass p-4 rounded-3xl flex items-center gap-4 animate-fade-in-up">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-accent-main/20" />
                  ))}
               </div>
               <div>
                 <p className="text-sm font-bold text-primary-main">2,500+ neighbors</p>
                 <p className="text-[10px] text-primary-main/60 uppercase font-black">already connected</p>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
