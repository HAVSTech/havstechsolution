import { ArrowUpRight, Bot, Code2, Headphones, Workflow } from "lucide-react";

const problems = [
  {
    icon: Headphones,
    title: "Too many repetitive customer calls?",
    text: "Modernize customer support with cloud contact centers, IVR, routing and automation.",
  },
  {
    icon: Bot,
    title: "Customers waiting for answers?",
    text: "Use intelligent voice experiences to handle routine conversations naturally and consistently.",
  },
  {
    icon: Workflow,
    title: "Teams repeating manual work?",
    text: "Connect your tools and automate repetitive workflows so people can focus on higher-value work.",
  },
  {
    icon: Code2,
    title: "Your systems don't fit the business?",
    text: "Build websites, applications and internal platforms around your actual process—not the other way around.",
  },
];

const ProblemsSection = () => (
  <section className="bg-[#f7f9fc] py-24 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Problems we solve</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Technology should remove friction from your business.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">Start with the challenge, not the technology. We help identify practical ways to improve customer experience, automate operations and build what your team actually needs.</p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem) => {
          const Icon = problem.icon;
          return (
            <article key={problem.title} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-7 text-xl font-semibold leading-7 text-slate-950">{problem.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{problem.text}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">Discuss it <ArrowUpRight className="h-4 w-4" /></a>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
