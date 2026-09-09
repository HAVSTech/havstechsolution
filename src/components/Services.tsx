import {
  Headphones,
  AudioLines,
  Workflow,
  Code2,
  Globe,
  UsersRound,
  MonitorCog,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    { icon: Headphones, number: "01", title: "Amazon Connect", description: "Cloud contact center solutions covering IVR, contact flows, routing, integrations, automation, and optimization." },
    { icon: AudioLines, number: "02", title: "ElevenLabs Voice AI", description: "Natural AI voice experiences, conversational agents, voice automation, and custom integrations." },
    { icon: Workflow, number: "03", title: "n8n Automation", description: "Connected workflows that automate repetitive operations, move data, and integrate your business systems." },
    { icon: Code2, number: "04", title: "Custom Software", description: "Purpose-built applications designed around your processes, users, requirements, and growth plans." },
    { icon: Globe, number: "05", title: "Web Development", description: "Fast, responsive websites and web applications designed for modern customer experiences." },
    { icon: UsersRound, number: "06", title: "Technology Talent", description: "Flexible access to skilled technology professionals to strengthen teams and accelerate delivery." },
    { icon: MonitorCog, number: "07", title: "IT Consulting", description: "Technology strategy and integration support that connects the right systems to the right outcomes." },
    { icon: Users, number: "08", title: "HR Solutions", description: "Recruitment, workforce planning, talent management, and practical HR support for growing organizations." },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">What we build</p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            One technology partner for your next stage of growth.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Specialized capabilities across cloud, AI, automation, software, web, and talent—brought together around the problems your business actually needs to solve.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.number} className="group relative overflow-hidden rounded-3xl border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
                <CardHeader className="pb-3">
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-slate-300">{service.number}</span>
                  </div>
                  <CardTitle className="text-xl text-slate-950">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-slate-600">{service.description}</p>
                  <div className="mt-7 flex items-center gap-1 text-sm font-semibold text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                    Explore capability <ArrowUpRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#07111f] p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">How we work</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">Understand. Build. Improve.</h3>
            <p className="mt-3 leading-7 text-slate-400">We start with the business problem, choose the right technology, build with purpose, and stay close through implementation and improvement.</p>
          </div>
          <a href="#contact" className="mt-7 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-50 lg:mt-0">Talk to our team <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
};

export default Services;
