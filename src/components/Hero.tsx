import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-brand text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Empowering Your Business with{" "}
            <span className="text-primary-blue">Innovative Tech Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
            We provide cutting-edge technology services including web development, 
            app development, SEO, social media management, and comprehensive IT consulting 
            to help your business thrive in the digital age.
          </p>
         <a href="#contact">
  <Button
    size="lg"
    className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 animate-fade-in group"
  >
    Get Started
    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
  </Button>
</a>

        </div>
      </div>
    </section>
  );
};

export default Hero;