import {
  Headphones,
  AudioLines,
  Workflow,
  Code2,
  Globe,
  UsersRound,
  MonitorCog,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { icon: Headphones, number: "01", title: "Amazon Connect", description: "Cloud contact center solutions covering IVR, contact flows, routing, integrations, automation, and optimization.", href: "/amazon-connect" },
  { icon: AudioLines, number: "02", title: "ElevenLabs Voice AI", description: "Natural AI voice experiences, conversational agents, voice automation, and custom integrations.", href: "/voice-ai" },
  { icon: Workflow, number: "03", title: "n8n Automation", description: "Connected workflows that automate repetitive operations, move data, and integrate your business systems.", href: "/automation" },
  { icon: Code2, number: "04", title: "Custom Software", description: "Purpose-built applications designed around your processes, users, requirements, and growth plans." },
  { icon: Globe, number: "05", title: "Web Development", description: "Fast, responsive websites and web applications designed for modern customer experiences." },
  { icon: UsersRound, number: "06", title: "Technology Talent", description: "Flexible access to skilled technology professionals to strengthen teams and accelerate delivery." },
  { icon: MonitorCog, number: "07", title: "IT Consulting", description: "Technology strategy and integration support that connects the right systems to the right outcomes." },
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
      <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Our solutions</p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">One technology partner for your next stage of growth.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">We start with the business challenge and bring together customer experience, AI voice, automation, software and technology expertise around the outcome you need.</p>
        </div>

        <div className="mt-14 grid gap-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_22px_70px_-42px_rgba(15,23,42,0.35)] md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.number} className={"group relative min-h-[250px] p-6 transition duration-300 hover:bg-slate-50 sm:p-7 " + (index !== 0 ? "border-t border-slate-200 md:border-t-0 md:border-l " : "") + (index > 1 ? "lg:border-t " : "") + (index === 4 ? "lg:border-l-0" : "")}>
                <div className="mb-12 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.22em] text-slate-300">{service.number}</span>
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl tracking-tight text-slate-950">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                  {service.href ? (
                    <a href={service.href} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:gap-2">Explore solution <ArrowUpRight className="h-4 w-4" /></a>
                  ) : (
                    <a href="#contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:gap-2">Discuss capability <ArrowUpRight className="h-4 w-4" /></a>
                  )}
                </CardContent>
              </div>
            );
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[#07111f] p-8 text-white shadow-[0_24px_70px_-40px_rgba(2,6,23,0.55)] sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">How we work</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">Discover. Design. Deliver. Improve.</h3>
            <p className="mt-3 leading-7 text-slate-400">We understand the business problem, choose the right technology, build with purpose, and stay involved through implementation and improvement.</p>
          </div>
          <a href="#contact" className="mt-7 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50 active:translate-y-0 lg:mt-0">Start with a discovery call <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
};

export default Services;
