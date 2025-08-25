
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import FeaturesSection from "@/components/FeaturesSection";
import AISection from "@/components/AISection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <AISection />
      <CapabilitiesSection />
      <TestimonialsSection />
      <ResourcesSection />
    </div>
  );
};

export default Index;
