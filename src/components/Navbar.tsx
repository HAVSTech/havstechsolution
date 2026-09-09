import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center" aria-label="HAVS Tech Solutions home">
          <img
            src="/favicon.ico"
            alt="HAVS Tech Solutions"
            className="h-14 w-auto min-w-[72px] object-contain"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
              {item.name}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/20">
            Start a conversation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button type="button" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#07111f] px-4 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white">
                {item.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-2 rounded-xl bg-blue-500 px-4 py-3 text-center font-semibold text-white">
              Start a conversation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
