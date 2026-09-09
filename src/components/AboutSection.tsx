import aboutImage from "@/assets/about-image.jpg";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "Business-first technology decisions",
    "Modern cloud, AI and automation expertise",
    "Scalable solutions built for long-term use",
    "Hands-on implementation and support",
  ];

  const principles = [
    { title: "Understand the problem", label: "We start with your business objective, users, systems, and constraints." },
    { title: "Build the right solution", label: "We select practical technology and deliver a solution designed around your workflow." },
    { title: "Support the outcome", label: "We stay involved through implementation, optimization, and future improvements." },
  ];

  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-100/70 blur-2xl" />
            <img src={aboutImage} alt="HAVS Tech Solutions" className="relative h-[460px] w-full rounded-[2rem] object-cover shadow-2xl" />
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/30 bg-[#07111f]/90 px-5 py-4 text-white backdrop-blur-md">
              <p className="text-2xl font-semibold">Built for impact</p>
              <p className="mt-1 text-sm text-slate-300">Technology that solves real problems.</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">About HAVS</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Technology should make business simpler, not more complicated.</h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
              <p>HAVS Tech Solutions partners with organizations to turn business requirements into practical digital solutions. We bring together cloud contact centers, AI voice, workflow automation, custom software, web development, and technology talent.</p>
              <p>Our approach is deliberately hands-on: understand the outcome, choose the right technology, build with clarity, and support the solution beyond launch.</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  {highlight}
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-9 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700">Let's discuss your requirement <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Our way of working</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">A clear path from business challenge to measurable progress.</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item, index) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <span className="text-sm font-bold text-blue-600">0{index + 1}</span>
                <h4 className="mt-8 text-xl font-semibold text-slate-950">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
