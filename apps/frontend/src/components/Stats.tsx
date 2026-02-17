export const Stats = () => {
    return (
      <section className="w-full max-w-6xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-primary-main/5 mx-auto">
        {[
          { label: "Neighbors", value: "2.5k+" },
          { label: "Areas", value: "180+" },
          { label: "Response", value: "95%" },
          { label: "Resolved", value: "500+" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-accent-main mb-1">{stat.value}</span>
            <span className="text-[11px] font-bold text-primary-main/40 uppercase tracking-widest text-center">{stat.label}</span>
          </div>
        ))}
      </section>
    );
  };
