import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientsSection from "@/components/ClientsSection";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import Clientstories from "@/components/Clientstories";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      {/* <ClientsSection /> */}
      {/* <Clientstories/> */}
      <AboutSection/>
      <FAQ />
      <Contact />
      
      <Footer />
    </div>
  );
};

export default Index;
