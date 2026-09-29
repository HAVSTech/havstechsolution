import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/#services" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "About", href: "/#about" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/[0.08] bg-[#06111f]/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-8">
        <a href="/" className="flex h-16 w-36 items-center justify-start overflow-visible" aria-label="HAVS Tech Solutions home">
          <img
            src="/favicon.ico"
            alt="HAVS Tech Solutions"
            className="h-16 w-16 scale-x-[1.25] object-contain mix-blend-screen sm:h-[72px] sm:w-[72px]"
            style={{ filter: "invert(1) hue-rotate(180deg) saturate(1.1)" }}
          />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {menuItems.map((item, index) => (
            <a key={item.name} href={item.href} className={"relative py-3 text-sm font-medium transition-colors hover:text-white " + (index === 0 ? "text-blue-300" : "text-slate-300")}>
              {item.name}
              {index === 0 && <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-px w-8 bg-blue-400" />}
            </a>
          ))}
          <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/15 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-400 active:translate-y-0">
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button type="button" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-white transition hover:bg-white/[0.08] md:hidden">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/[0.08] bg-[#06111f] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1.5">
            {menuItems.map((item) => <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-lg px-4 py-3 text-base font-medium text-slate-300 transition hover:bg-white/[0.05] hover:text-white">{item.name}</a>)}
            <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="mt-2 rounded-lg bg-blue-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-400">Start a conversation</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
