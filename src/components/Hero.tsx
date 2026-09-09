import { ArrowRight, ArrowUpRight, Bot, Headphones, Workflow } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#07111f] pt-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(32,148,243,0.22),transparent_34%),radial-gradient(circle_at_10%_80%,rgba(14,165,233,0.12),transparent_30%)]" />
      <div className="absolute right-[-12rem] top-32 h-[28rem] w-[28rem] rounded-full border border-blue-400/10 bg-blue-500/5 blur-2xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)]" />
            Cloud • AI • Automation • Software
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Technology that moves your business
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
              forward.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            HAVS Tech Solutions builds practical digital solutions—from Amazon Connect contact centers and AI voice experiences to n8n automation, custom software, websites, and technology talent.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Explore our capabilities
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Discuss your project
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
            <span>Built around your requirements</span>
            <span>•</span>
            <span>Scalable by design</span>
            <span>•</span>
            <span>Hands-on delivery</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-8 rounded-[2rem] bg-blue-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-300">HAVS Technology Stack</p>
                <p className="mt-1 text-lg font-semibold">Connect • Automate • Build</p>
              </div>
              <div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Ready to scale</div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: Headphones, title: "Amazon Connect", text: "Cloud contact centers" },
                { icon: Bot, title: "ElevenLabs", text: "AI voice experiences" },
                { icon: Workflow, title: "n8n", text: "Workflow automation" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-400/5 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">From idea to implementation</p>
                  <p className="mt-1 text-xs text-slate-400">Discover → Design → Build → Support</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-blue-300" />
              </div>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
