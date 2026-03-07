import { useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ShowcaseSection } from "./components/ShowcaseSection";
import { CTASection } from "./components/CTASection";
import { FormSection } from "./components/FormSection";
import { Footer } from "./components/Footer";

export function HomePage() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onNavigate={scrollToSection} />
      <main className="pt-24">
        <HeroSection onNavigate={scrollToSection} />
        <AboutSection />
        <ShowcaseSection />
        <CTASection onNavigate={scrollToSection} />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
}
