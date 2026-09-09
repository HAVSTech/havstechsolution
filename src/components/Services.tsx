import {
  Headphones,
  AudioLines,
  Workflow,
  Code2,
  Globe,
  UsersRound,
  MonitorCog,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Headphones,
      title: "Amazon Connect Solutions",
      description:
        "Design, development, and implementation of scalable cloud contact center solutions using Amazon Connect, including contact flows, IVR, call routing, integrations, and optimization.",
    },
    {
      icon: AudioLines,
      title: "ElevenLabs Voice AI",
      description:
        "Build natural and intelligent voice experiences using ElevenLabs, including AI voice agents, conversational workflows, voice automation, and custom voice integrations.",
    },
    {
      icon: Workflow,
      title: "n8n Workflow Automation",
      description:
        "Design and implement intelligent n8n workflows that connect applications, automate repetitive processes, orchestrate data, and streamline business operations.",
    },
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "Purpose-built software solutions designed around your business processes, requirements, and growth objectives—from concept and development to deployment.",
    },
    {
      icon: Globe,
      title: "Website Design & Development",
      description:
        "Modern, responsive, and high-performance websites designed to strengthen your digital presence and deliver seamless user experiences across devices.",
    },
    {
      icon: UsersRound,
      title: "Technology Staff Augmentation",
      description:
        "Access skilled technology professionals to strengthen your existing teams, fill critical skill gaps, and scale development capabilities based on project requirements.",
    },
    {
      icon: MonitorCog,
      title: "IT Consulting & Integration",
      description:
        "Technology consulting and system integration services that help businesses select, connect, optimize, and implement solutions aligned with their operational goals.",
    },
    {
      icon: Users,
      title: "HR Solutions",
      description:
        "Practical HR solutions supporting recruitment, talent management, workforce planning, and organizational needs to help businesses build and manage effective teams.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-blue-600 mb-3">
            What We Do
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technology & Business Solutions
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From cloud contact centers and AI-powered voice solutions to
            workflow automation, custom software, talent solutions, and HR
            support, we help businesses build the technology and teams they
            need to grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* How We Work */}
      <section className="pt-24 pb-16 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            {/* Approach Header */}
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-blue-600 mb-3">
                Our Approach
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                From Requirement to Real-World Solution
              </h2>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We combine technical expertise with a clear understanding of
                your business objectives to deliver solutions that are
                practical, scalable, and built for long-term value.
              </p>
            </div>

            {/* Approach Steps */}
            <div className="grid md:grid-cols-3 gap-8">

              {/* Step 1 */}
              <Card className="border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-5">
                    01
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Understand
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    We understand your business requirements, existing
                    systems, challenges, and desired outcomes before defining
                    the right solution.
                  </p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-5">
                    02
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Build
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Our team designs and develops the solution using the
                    technologies best suited to your project and business
                    needs.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-5">
                    03
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Deliver & Support
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    We support implementation, testing, optimization, and
                    ongoing improvements to ensure the solution continues to
                    deliver value.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
