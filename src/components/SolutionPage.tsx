import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

type Props = { eyebrow: string; title: string; description: string; capabilities: string[]; outcomes: string[] };

const SolutionPage = ({ eyebrow, title, description, capabilities, outcomes }: Props) => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <main>
      <section className="relative overflow-hidden bg-[#06111f] pb-24 pt-40 text-white sm:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(32,148,243,0.22),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white"><ArrowRight className="h-4 w-4 rotate-180" /> All solutions</a>
          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">{eyebrow}</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
            <a href="#contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400">Discuss your requirements <ArrowUpRight className="h-5 w-5" /></a>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">What we deliver</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Built around your workflow.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">{capabilities.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><CheckCircle2 className="h-5 w-5 text-blue-600" /><p className="mt-3 font-semibold text-slate-900">{item}</p></div>)}</div>
          </div>
          <div className="rounded-[2rem] bg-[#07111f] p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Business outcomes</p>
            <h2 className="mt-4 text-3xl font-semibold">Technology with a reason behind it.</h2>
            <div className="mt-8 space-y-5">{outcomes.map((item) => <div key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-300" /><p className="leading-7 text-slate-300">{item}</p></div>)}</div>
          </div>
        </div>
      </section>
      <Contact />
    </main>
    <Footer />
  </div>
);

export default SolutionPage;
