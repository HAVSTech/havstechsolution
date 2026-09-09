import { ArrowUpRight, Check } from "lucide-react";

const packages = [
  { title: "Contact Center Starter", text: "A focused starting point for businesses moving customer conversations to the cloud.", items: ["Discovery and requirements", "Amazon Connect foundation", "IVR and routing setup", "Launch guidance"] },
  { title: "Voice AI Automation", text: "Automate routine voice interactions with natural, intelligent customer experiences.", items: ["Conversation design", "AI voice integration", "Workflow automation", "Testing and optimization"] },
  { title: "Workflow Automation", text: "Remove repetitive operational work by connecting the systems your team already uses.", items: ["Process mapping", "n8n workflows", "API integrations", "Monitoring and handover"] },
];

const supportPlans = [
  { title: "Essential", text: "Ongoing technical support and maintenance for a stable solution." },
  { title: "Growth", text: "Support plus optimization, automation improvements and regular consultation." },
  { title: "Partner", text: "A closer technology relationship for continuous delivery and strategic improvements." },
];

const SolutionPackages = () => (
  <section className="bg-slate-50 py-24 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Ways to work with us</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Clear starting points. Flexible delivery.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">Choose a focused starting point or tell us what you need. Every engagement can be tailored to your systems, users, timeline and goals.</p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {packages.map((item, index) => (
          <article key={item.title} className={`rounded-[2rem] border bg-white p-7 sm:p-8 ${index === 1 ? "border-blue-300 shadow-xl shadow-blue-900/10" : "border-slate-200 shadow-sm"}`}>
            {index === 1 && <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">Popular starting point</span>}
            <h3 className={`${index === 1 ? "mt-5" : "mt-1"} text-2xl font-semibold text-slate-950`}>{item.title}</h3>
            <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">{item.text}</p>
            <div className="mt-6 space-y-3">
              {item.items.map((feature) => <div key={feature} className="flex gap-2 text-sm text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />{feature}</div>)}
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600">Discuss this package <ArrowUpRight className="h-4 w-4" /></a>
          </article>
        ))}
      </div>

      <div className="mt-20 rounded-[2rem] bg-[#07111f] p-8 text-white sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">HAVS Care</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Keep your technology improving after launch.</h3>
          <p className="mt-4 leading-7 text-slate-400">Turn one-time delivery into an ongoing technology partnership with support, maintenance, optimization and continuous improvements.</p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {supportPlans.map((plan) => <div key={plan.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><p className="font-semibold">{plan.title}</p><p className="mt-2 text-sm leading-6 text-slate-400">{plan.text}</p></div>)}
        </div>
        <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-blue-50">Explore support options <ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </div>
  </section>
);

export default SolutionPackages;
