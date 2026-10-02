import RainingStars from "@/components/RainingStars";
import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import BottomCapsule from "@/components/BottomCapsule";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0c0c0c] text-[#f5f5f5] overflow-x-hidden">
      {/* Background falling stars */}
      <RainingStars />

      {/* Top minimal navigation */}
      <TopNav />

      {/* Main hero section */}
      <Hero />

      {/* Floating bottom capsule dock */}
      <BottomCapsule />
    </div>
  );
}
