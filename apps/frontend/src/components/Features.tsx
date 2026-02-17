import { MessageSquareText, ShoppingBag, TriangleAlert, Wrench } from "lucide-react";

export const Features = () => {
    return (
      <section className="w-full max-w-6xl px-6 py-24 flex flex-col items-center mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent-main text-[12px] font-bold uppercase tracking-[0.3em]">Features</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-main tracking-tight italic">
            Everything Your <br />
            <span className="not-italic">Neighborhood Needs</span>
          </h2>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          {/* Community Feed - Large */}
          <div className="md:col-span-7 p-10 rounded-[2.5rem] bg-[#F9E5D4] flex flex-col justify-end min-h-[320px] group hover:scale-[1.01] transition-transform duration-500">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:rotate-6 transition-transform">
              <MessageSquareText className="w-6 h-6 text-primary-main" />
            </div>
            <h3 className="text-2xl font-bold text-primary-main mb-3">Community Feed</h3>
            <p className="text-primary-main/70 text-lg leading-relaxed max-w-sm">Real-time neighborhood updates, discussions, and issue reports from your area.</p>
          </div>
  
          {/* Marketplace - Small Tall */}
          <div className="md:col-span-5 p-10 rounded-[2.5rem] bg-[#E8EDDB] flex flex-col justify-end min-h-[320px] group hover:scale-[1.01] transition-transform duration-500">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:rotate-6 transition-transform">
              <ShoppingBag className="w-6 h-6 text-primary-main" />
            </div>
            <h3 className="text-2xl font-bold text-primary-main mb-3">Marketplace</h3>
            <p className="text-primary-main/70 text-lg leading-relaxed">Buy, sell, or borrow items from trusted neighbors nearby.</p>
          </div>
  
          {/* Emergency SOS - Small */}
          <div className="md:col-span-5 p-10 rounded-[2.5rem] bg-[#F9ECE0] flex flex-col justify-end min-h-[320px] group hover:scale-[1.01] transition-transform duration-500">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:rotate-6 transition-transform">
              <TriangleAlert className="w-6 h-6 text-primary-main" />
            </div>
            <h3 className="text-2xl font-bold text-primary-main mb-3">Emergency SOS</h3>
            <p className="text-primary-main/70 text-lg leading-relaxed">One-tap alerts for medical, fire, or security emergencies.</p>
          </div>
  
          {/* Local Services - Large */}
          <div className="md:col-span-7 p-10 rounded-[2.5rem] bg-[#E1E5D5] flex flex-col justify-end min-h-[320px] group hover:scale-[1.01] transition-transform duration-500">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:rotate-6 transition-transform">
              <Wrench className="w-6 h-6 text-primary-main" />
            </div>
            <h3 className="text-2xl font-bold text-primary-main mb-3">Local Services</h3>
            <p className="text-primary-main/70 text-lg leading-relaxed">Find verified plumbers, doctors, tutors, and more — all within walking distance.</p>
          </div>
        </div>
      </section>
    );
  };
