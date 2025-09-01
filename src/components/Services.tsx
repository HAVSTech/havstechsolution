import { 
  Globe, 
  Smartphone, 
  Share2, 
  Image, 
  Search, 
  Users, 
  Monitor ,
  CheckCircle
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies to establish your digital presence."
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategic social media campaigns to boost your brand visibility and engagement."
    },
    {
      icon: Image,
      title: "Poster Design",
      description: "Creative and professional poster designs for marketing, events, and promotional campaigns."
    },
    {
      icon: Search,
      title: "SEO",
      description: "Search engine optimization to improve your website's visibility and organic traffic."
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "HR consulting and management solutions to optimize your workforce and operations."
    },
    {
      icon: Monitor,
      title: "IT Consulting",
      description: "Expert IT consulting to help you make informed technology decisions and strategies."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to meet your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md group"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      {/* How Our Service works */}
      <section className="pt-10 pb-15 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How Our Service Works</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Comprehensive Business Transformation</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our consulting methodology is built on decades of experience across diverse industries. We begin with 
                  a thorough analysis of your current state, identify key opportunities, and develop a customized roadmap 
                  for sustainable growth.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  What sets us apart is our hands-on approach to implementation. We don't just provide recommendations – 
                  we work alongside your team to ensure successful execution and knowledge transfer.
                </p>
                
              </div>
              
              <div className="space-y-6">
                <Card className="border-border transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">Discovery & Assessment</h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive evaluation of your current operations, challenges, and opportunities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">Strategy Development</h4>
                    <p className="text-muted-foreground text-sm">
                      Custom strategic plan with clear objectives, timelines, and success metrics.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">Implementation Support</h4>
                    <p className="text-muted-foreground text-sm">
                      Hands-on guidance throughout execution with regular progress monitoring.
                    </p>
                  </CardContent>
                </Card>


              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;