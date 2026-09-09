import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProblemsSection from "@/components/ProblemsSection";
import CaseStudies from "@/components/CaseStudies";
import SolutionPackages from "@/components/SolutionPackages";
import TrustStats from "@/components/TrustStats";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustStats />
      <ProblemsSection />
      <Services />
      <CaseStudies />
      <SolutionPackages />
      <AboutSection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
