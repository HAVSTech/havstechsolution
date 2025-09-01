import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import havsLogo from "@/assets/havs-logo.png";

const Footer = () => {
  const socialLinks = [
  
    { icon: Linkedin, href: "https://www.linkedin.com/company/havs-tech-solutions/", label: "LinkedIn" },
   
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img
              src={havsLogo}
              alt="HAVS Tech Solutions"
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Empowering businesses with innovative technology solutions 
              for digital transformation and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <hr className="border-gray-600 mb-8" />

        <div className="text-center text-gray-300">
          <p>&copy; 2025 HAVS Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

 export default Footer;
// import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
// import havsLogo from '@/assets/havs-logo.png';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-secondary text-secondary-foreground">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center space-x-3 mb-4">
//               <img 
//                 src={havsLogo} 
//                 alt="HAVS Tech Solutions Logo" 
//                 className="h-10 w-10 rounded-lg"
//               />
//               <span className="text-xl font-bold">HAVS Tech Solutions</span>
//             </div>
//             <p className="text-secondary-foreground/80 mb-6 max-w-md leading-relaxed">
//               Empowering businesses with innovative technology solutions. We specialize in 
//               web development, mobile apps, digital marketing, and IT consulting to drive 
//               your success in the digital world.
//             </p>
//             <div className="flex space-x-4">
//               <a 
//                 href="#" 
//                 className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
//                 aria-label="Facebook"
//               >
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
//                 aria-label="Twitter"
//               >
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Services</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#services" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
//                   Website Development
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
//                   App Development
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
//                   Social Media Management
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
//                   SEO Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
//                   IT Consulting
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-primary" />
//                 <span className="text-secondary-foreground/80">info@havstechsolutions.com</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-primary" />
//                 <span className="text-secondary-foreground/80">+1 (555) 123-4567</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-secondary-foreground/80 text-sm">
//               © {currentYear} HAVS Tech Solutions. All rights reserved.
//             </p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth text-sm">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth text-sm">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth text-sm">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;