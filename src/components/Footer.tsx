import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import havsLogo from "@/assets/havs-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#07111f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.7fr_.9fr]">
          <div>
            <img src={havsLogo} alt="HAVS Tech Solutions" className="h-14 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-md leading-7 text-slate-400">Cloud, AI, automation, software, and technology solutions built around real business needs.</p>
          </div>

          <div>
            <h3 className="font-semibold">Explore</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Connect</h3>
            <a href="mailto:havstechsolutions@gmail.com" className="mt-5 flex items-center gap-2 text-sm text-slate-400 hover:text-white"><Mail className="h-4 w-4" /> havstechsolutions@gmail.com</a>
            <a href="https://www.linkedin.com/company/havs-tech-solutions/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3 w-3" /></a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7 text-sm text-slate-500">
          © {new Date().getFullYear()} HAVS Tech Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
