import clientsLogos from '@/assets/clients-logos.png';

const ClientsSection = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the growing list of successful businesses that trust HAVS Tech Solutions
          </p>
        </div>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          <div className="flex whitespace-nowrap">
            <div className="marquee flex items-center space-x-12">
              <img
                src={clientsLogos}
                alt="Our trusted clients"
                className="h-16 opacity-60 hover:opacity-100 transition-smooth"
              />
            </div>
            <div className="marquee flex items-center space-x-12">
              <img
                src={clientsLogos}
                alt="Our trusted clients"
                className="h-16 opacity-60 hover:opacity-100 transition-smooth"
              />
            </div>
          </div>
        </div>

        {/* Additional client testimonial */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl italic text-muted-foreground max-w-4xl mx-auto">
            "HAVS Tech Solutions transformed our digital presence completely. Their expertise 
            in web development and SEO helped us increase our online visibility by 300%. 
            Highly recommended for any business looking to grow digitally."
          </blockquote>
          <cite className="text-primary font-semibold mt-4 block">
            — Sarah Johnson, CEO of TechStart Inc.
          </cite>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;