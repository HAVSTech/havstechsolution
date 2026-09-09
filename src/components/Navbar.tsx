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
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#06111f]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-8">
        <a href="#home" className="flex items-center" aria-label="HAVS Tech Solutions home">
          <span className="flex h-14 w-40 items-center overflow-hidden rounded-xl bg-white px-3 shadow-lg shadow-black/10 sm:h-16 sm:w-44">
            <img
              src="/favicon.ico"
              alt="HAVS Tech Solutions"
              className="h-full w-full object-contain"
            />
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative py-3 text-[15px] font-medium transition-colors hover:text-white ${
                index === 0 ? "text-blue-400" : "text-slate-300"
              }`}
            >
              {item.name}
              {index === 0 && (
                <span className="absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-12 rounded-full bg-blue-400" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-blue-500/30"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#06111f] px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-xl bg-blue-500 px-4 py-3 text-center font-semibold text-white"
            >
              Start a conversation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
