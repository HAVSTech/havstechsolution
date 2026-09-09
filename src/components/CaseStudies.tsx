import { ArrowUpRight, CheckCircle2, Headphones, Workflow } from "lucide-react";

const cases = [
  {
    icon: Headphones,
    eyebrow: "Customer experience",
    title: "Cloud Contact Center Transformation",
    description: "A practical path from traditional calling processes to a scalable cloud contact center experience.",
    points: ["Amazon Connect implementation", "IVR, routing and contact flows", "Business-system integrations", "Operational visibility and optimization"],
  },
  {
    icon: Workflow,
    eyebrow: "Business automation",
    title: "Connected Operations & Workflow Automation",
    description: "Replace repetitive manual handoffs with connected workflows that move information between the tools teams already use.",
    points: ["Workflow discovery and mapping", "n8n automation", "API and system integrations", "Monitoring and continuous improvement"],
  },
];

const CaseStudies = () => (
  <section id="case-studies" className="bg-white py-24 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Selected solution stories</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">From business challenge to working solution.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">We focus on the outcome first, then design the technology around it. Here are the kinds of transformations HAVS is built to deliver.</p>
        </div>
        <a href="#contact" className="inline-flex shrink-0 items-center gap-2 font-semibold text-blue-600">Discuss a similar project <ArrowUpRight className="h-4 w-4" /></a>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {cases.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white"><Icon className="h-6 w-6" /></div>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">{item.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {item.points.map((point) => <div key={point} className="flex items-start gap-2 text-sm font-medium text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />{point}</div>)}
              </div>
            </article>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-slate-400">Solution examples are representative of the work we deliver; specific client details can be shared where permitted.</p>
    </div>
  </section>
);

export default CaseStudies;
