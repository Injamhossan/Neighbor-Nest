import { MapPin, Heart, Zap } from "lucide-react";

export const HowItWorks = () => {
    return (
      <section className="w-full max-w-6xl px-6 py-24 flex flex-col items-center mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-accent-main text-[12px] font-bold uppercase tracking-[0.3em] block">How It Works</span>
          <h2 className="text-4xl sm:text-5xl font-black text-primary-main tracking-tight font-serif">
            Three Simple Steps
          </h2>
        </div>
  
        <div className="flex flex-col md:flex-row items-start justify-between w-full relative gap-12 md:gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center flex-1 relative group z-10">
                <div className="relative mb-8">
                    <div className="w-28 h-28 rounded-[2rem] bg-[#F5EFE0] border-2 border-primary-main/5 flex items-center justify-center shadow-lg shadow-primary-main/5 group-hover:-translate-y-2 transition-transform duration-500">
                        <MapPin className="w-10 h-10 text-accent-main" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-accent-main text-white flex items-center justify-center font-bold text-xs shadow-md border-4 border-[#F5EFE0]">01</div>
                </div>
                <h3 className="text-2xl font-bold text-primary-main mb-3">Pick Your Area</h3>
                <p className="text-primary-main/60 font-medium leading-relaxed max-w-[260px]">Select your neighborhood zone to join your local community.</p>
            </div>
  
            {/* Arrow 1 */}
            <div className="hidden md:block absolute top-[15%] left-[26%] w-[14%] text-primary-main/10 scale-x-[-1] scale-y-[0.8] rotate-12">
               <svg viewBox="0 0 100 20" fill="none" className="w-full"><path d="M0 10 C 30 20, 70 0, 100 10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none"></path><path d="M95 10 L 100 10 L 97 13" stroke="currentColor" strokeWidth="2" fill="none"></path></svg>
            </div>
  
             {/* Step 2 */}
            <div className="flex flex-col items-center text-center flex-1 relative group z-10">
                <div className="relative mb-8">
                    <div className="w-28 h-28 rounded-[2rem] bg-[#F5EFE0] border-2 border-primary-main/5 flex items-center justify-center shadow-lg shadow-primary-main/5 group-hover:-translate-y-2 transition-transform duration-500">
                         <Heart className="w-10 h-10 text-accent-main" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-accent-main text-white flex items-center justify-center font-bold text-xs shadow-md border-4 border-[#F5EFE0]">02</div>
                </div>
                <h3 className="text-2xl font-bold text-primary-main mb-3">Connect & Share</h3>
                <p className="text-primary-main/60 font-medium leading-relaxed max-w-[260px]">Post updates, ask for help, and engage with neighbors.</p>
            </div>
  
            {/* Arrow 2 */}
             <div className="hidden md:block absolute top-[15%] right-[26%] w-[14%] text-primary-main/10 scale-y-[0.8] -rotate-12">
               <svg viewBox="0 0 100 20" fill="none" className="w-full"><path d="M0 10 C 30 20, 70 0, 100 10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none"></path><path d="M95 10 L 100 10 L 97 13" stroke="currentColor" strokeWidth="2" fill="none"></path></svg>
            </div>
  
             {/* Step 3 */}
            <div className="flex flex-col items-center text-center flex-1 relative group z-10">
                <div className="relative mb-8">
                    <div className="w-28 h-28 rounded-[2rem] bg-[#F5EFE0] border-2 border-primary-main/5 flex items-center justify-center shadow-lg shadow-primary-main/5 group-hover:-translate-y-2 transition-transform duration-500">
                         <Zap className="w-10 h-10 text-accent-main" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-accent-main text-white flex items-center justify-center font-bold text-xs shadow-md border-4 border-[#F5EFE0]">03</div>
                </div>
                <h3 className="text-2xl font-bold text-primary-main mb-3">Grow Together</h3>
                <p className="text-primary-main/60 font-medium leading-relaxed max-w-[260px]">Report issues, trade items, and build a stronger community.</p>
            </div>
        </div>
      </section>
    );
  };
