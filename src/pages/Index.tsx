import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TrustedBySection from "@/components/landing/TrustedBySection";
import CTASection from "@/components/landing/CTASection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
        <TrustedBySection />
        <CTASection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
