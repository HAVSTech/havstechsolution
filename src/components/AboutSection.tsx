import aboutImage from '@/assets/about-image.jpg';
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
    const highlights = [
    "Expert team with 2+ years of experience",
    "Cutting-edge technology solutions",
    "24/7 customer support",
    "Proven track record of success"
  ];
  return (
<section id="about" className="pt-9 pb-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={aboutImage}
                alt="HAVS Tech Solutions team collaboration"
                className="w-full h-[500px] object-cover rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About HAVS Tech Solutions
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At HAVS Tech Solutions, we are passionate about transforming businesses 
                  through innovative technology. Founded with a vision to bridge the gap 
                  between cutting-edge technology and practical business solutions, we have 
                  become a trusted partner for companies seeking digital excellence.
                </p>
                
                <p>
                  Our team of experienced professionals brings together expertise in web 
                  development, mobile applications, digital marketing, and strategic consulting. 
                  We pride ourselves on delivering solutions that not only meet current needs 
                  but also scale with your business growth.
                </p>
                
                {/* <p>
                  With a client-first approach and commitment to quality, we've successfully 
                  helped numerous businesses establish their digital presence, streamline 
                  operations, and achieve sustainable growth in today's competitive marketplace.
                </p> */}
                  <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: "#2094F3" }}>3+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: "#2094F3" }}>2+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: "#2094F3" }}>1+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Process Steps */}
      <section className="pt-20 pb-10">

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Proven Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures consistent results and exceptional outcomes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "Free discovery call to understand your challenges and objectives"
                },
                {
                  step: "02", 
                  title: "Detailed Analysis",
                  description: "Comprehensive assessment of current state and opportunity mapping"
                },
                {
                  step: "03",
                  title: "Strategic Planning",
                  description: "Development of customized solution and implementation roadmap"
                },
                {
                  step: "04",
                  title: "Execution & Support",
                  description: "Implementation guidance with ongoing monitoring and optimization"
                }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {process.step}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border transform translate-x-2" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </section>
  );
};

export default AboutSection;