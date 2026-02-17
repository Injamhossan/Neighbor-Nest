import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-bg-main relative">
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
    </div>
  );
}
