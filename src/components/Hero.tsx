import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Code2,
  FileText,
  Headphones,
  Search,
  Settings2,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";

const Hero = () => {
  const solutions = [
    { icon: Headphones, title: "Amazon Connect", text: "Modern cloud contact center solutions" },
    { icon: Bot, title: "ElevenLabs Voice AI", text: "Natural and intelligent voice experiences" },
    { icon: Workflow, title: "n8n Automation", text: "Connect, automate and streamline" },
    { icon: Code2, title: "Custom Software", text: "Websites, applications and digital platforms" },
  ];

  const process = [
    { icon: Search, title: "Understand", text: "Your goals" },
    { icon: FileText, title: "Design", text: "The right solution" },
    { icon: Settings2, title: "Implement", text: "With precision" },
    { icon: BarChart3, title: "Support", text: "For long-term growth" },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#06111f] pt-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(32,148,243,0.20),transparent_32%),radial-gradient(circle_at_45%_65%,rgba(14,165,233,0.08),transparent_34%)]" />
      <div className="pointer-events-none absolute -right-48 top-40 h-[42rem] w-[42rem] rounded-full bg-blue-500/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/[0.06] blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-7 sm:py-16 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-300/20 bg-blue-400/[0.08] px-5 py-2.5 text-sm font-medium text-blue-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.95)]" />
            Technology & Business Solutions
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.25rem]">
            Technology that
            <br />
            moves your
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              business forward.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            We build practical technology solutions — from cloud contact centers and AI voice to workflow automation and custom software — helping businesses operate smarter and grow faster.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-blue-500/35"
            >
              Start a conversation
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-400/60 bg-transparent px-7 py-3.5 font-semibold text-white transition hover:bg-blue-400/10"
            >
              Our services
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-slate-300 sm:gap-0">
            <div className="flex items-center gap-3 sm:pr-7">
              <ShieldCheck className="h-7 w-7 text-slate-100" />
              <span><strong className="block font-semibold text-white">Reliable</strong><span className="text-xs text-slate-400">and secure</span></span>
            </div>
            <span className="hidden h-10 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-3 sm:px-7">
              <UsersRound className="h-7 w-7 text-slate-100" />
              <span><strong className="block font-semibold text-white">Business</strong><span className="text-xs text-slate-400">focused solutions</span></span>
            </div>
            <span className="hidden h-10 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-3 sm:pl-7">
              <BarChart3 className="h-7 w-7 text-slate-100" />
              <span><strong className="block font-semibold text-white">Built for</strong><span className="text-xs text-slate-400">real impact</span></span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:pt-2">
          <div className="absolute -inset-10 rounded-[3rem] bg-blue-500/[0.08] blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-7">
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-blue-300">Our solutions</p>
                <p className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">Turning Ideas into Real Business Impact</p>
              </div>
              <div className="shrink-0 rounded-full border border-emerald-300/40 bg-emerald-400/[0.08] px-3.5 py-2 text-xs font-medium text-emerald-300">
                Tailored to your goals
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {solutions.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex min-h-[112px] items-center gap-4 rounded-2xl border border-white/10 bg-[#08172a]/80 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-[#0b1d34] sm:p-5"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/[0.12] text-blue-300 ring-1 ring-white/5 transition group-hover:bg-blue-500/20">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-5 text-slate-400">{item.text}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                );
              })}
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-2">
                {process.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="relative text-center">
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-400">{item.text}</p>
                      {index < process.length - 1 && (
                        <ArrowRight className="absolute -right-1 top-4 hidden h-4 w-4 text-slate-500 sm:block" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
