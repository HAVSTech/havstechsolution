import { Boxes, FolderCheck } from "lucide-react";

const TrustStats = () => (
  <section className="border-y border-slate-200 bg-white py-10">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Built around real business needs</p>
        <p className="mt-2 text-slate-600">Practical delivery, thoughtful integrations and support beyond launch.</p>
      </div>
      <div className="flex flex-wrap gap-8 sm:gap-12">
        <div className="flex items-center gap-3"><FolderCheck className="h-7 w-7 text-blue-600" /><div><strong className="block text-2xl font-bold text-slate-950">3+</strong><span className="text-sm text-slate-500">Projects delivered</span></div></div>
        <div className="flex items-center gap-3"><Boxes className="h-7 w-7 text-blue-600" /><div><strong className="block text-2xl font-bold text-slate-950">10+</strong><span className="text-sm text-slate-500">Technology integrations</span></div></div>
      </div>
    </div>
  </section>
);

export default TrustStats;
