import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ArrowRight,
  ShieldCheck, 
  Lock, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import logoImg from '../../assets/logo/optimusnetworks-logo.png';

export default function Footer({ onOpenPortal, onOpenQuote, isHomePage1 = false }) {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id) => {
    if (id === 'contact') {
      if (onOpenQuote) onOpenQuote();
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (id === 'home') {
      scrollToTop();
    }
  };

  // User-requested exact navigation sequence:
  // Home | About Us | Business Broadband | Leased Lines | Connectivity | Contact Us
  const navItems = [
    { name: "Home", target: "home" },
    { name: "About Us", target: "about" },
    { name: "Business Broadband", target: "services" },
    { name: "Leased Lines", target: "services" },
    { name: "Connectivity", target: "services" },
    { name: "Contact Us", target: "contact" }
  ];

  return (
    <footer 
      className={`relative overflow-hidden rounded-t-[32px] sm:rounded-t-[40px] md:rounded-t-[48px] pt-14 sm:pt-16 pb-10 sm:pb-12 ${
        isHomePage1 
          ? 'bg-[#0846E7] text-white shadow-[0_-15px_40px_rgba(8,70,231,0.35)] border-t border-blue-400/30' 
          : 'bg-gradient-to-b from-[#060A14] via-[#0A1628] to-[#040710] text-slate-300 shadow-[0_-15px_40px_rgba(2,6,23,0.35)] border-t border-cyan-500/20'
      }`}
      aria-label="Site Footer"
    >
      {/* Top subtle hairline glow along the rounded edge */}
      <div className={`absolute top-0 left-8 right-8 sm:left-16 sm:right-16 h-[2px] bg-gradient-to-r from-transparent pointer-events-none ${
        isHomePage1 ? 'via-white/40 to-transparent' : 'via-cyan-400/60 to-transparent'
      }`}></div>

      {/* Ambient background glow accents */}
      {isHomePage1 ? (
        <>
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-white/[0.07] rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-blue-900/30 rounded-full blur-[130px] pointer-events-none"></div>
        </>
      ) : (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none"></div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Scroll-triggered entrance container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Rearranged 3-Column Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-14 items-start">
            
            {/* Column 1: Logo + Mission One-Liner (~4.5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Logo: Inverted white logo */}
              <div className="pt-1">
                <img 
                  src={logoImg} 
                  alt="Optimus Networks" 
                  className={`h-12 sm:h-14 md:h-16 w-auto object-contain brightness-0 invert ${
                    isHomePage1 ? 'drop-shadow-[0_2px_12px_rgba(0,0,0,0.2)]' : 'drop-shadow-[0_2px_12px_rgba(0,210,255,0.25)]'
                  }`} 
                />
              </div>

              {/* Mission Statement One-Liner with improved readability */}
              <p className={`text-sm sm:text-[15px] leading-relaxed font-normal max-w-md ${
                isHomePage1 ? 'text-white/85' : 'text-slate-300/90'
              }`}>
                Optimus Networks delivers carrier-grade, uncontended business connectivity, managed SD-WAN, and direct cloud cross-connects backed by a 99.999% SLA across the United Kingdom.
              </p>

              {/* Enterprise Trust Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  isHomePage1 
                    ? 'bg-white/10 text-white border border-white/20' 
                    : 'bg-blue-500/10 text-cyan-300 border border-cyan-400/20'
                }`}>
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>99.999% SLA Uptime</span>
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  isHomePage1 
                    ? 'bg-white/10 text-white border border-white/20' 
                    : 'bg-blue-500/10 text-cyan-300 border border-cyan-400/20'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>24/7/365 UK NOC</span>
                </span>
              </div>
            </div>

            {/* Column 2: Center - User-Requested Navigation (~3.5 cols) */}
            <div className="lg:col-span-3 space-y-4 text-left">
              <h4 className={`text-base sm:text-lg font-bold tracking-wide pb-2.5 border-b ${
                isHomePage1 ? 'text-white border-white/20' : 'text-white border-white/10'
              }`}>
                Navigation
              </h4>
              <ul className="space-y-3 text-sm sm:text-[15px]">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button 
                      type="button"
                      onClick={() => scrollToSection(item.target)} 
                      className={`group flex items-center gap-2 transition-colors min-h-[36px] sm:min-h-0 text-left focus:outline-none cursor-pointer ${
                        isHomePage1 
                          ? 'text-white/85 hover:text-white' 
                          : 'text-slate-300 hover:text-cyan-300'
                      }`}
                    >
                      <ArrowRight className={`w-3.5 h-3.5 transition-all group-hover:translate-x-1 ${
                        isHomePage1 ? 'text-white/60 group-hover:text-white' : 'text-cyan-400/60 group-hover:text-cyan-300'
                      }`} />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  </li>
                ))}

                {/* NOC Portal Login & Support action */}
                <li className="pt-2">
                  <button 
                    type="button"
                    onClick={onOpenPortal} 
                    className={`group flex items-center gap-2 font-semibold transition-colors min-h-[36px] sm:min-h-0 text-left focus:outline-none cursor-pointer ${
                      isHomePage1 
                        ? 'text-white hover:text-white/80' 
                        : 'text-cyan-400 hover:text-white'
                    }`}
                  >
                    <Lock className={`w-3.5 h-3.5 ${isHomePage1 ? 'text-white' : 'text-cyan-400'}`} />
                    <span>Optimus NOC Portal Login</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Right Side - Phone, Email & Address (~4 cols) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <h4 className={`text-base sm:text-lg font-bold tracking-wide pb-2.5 border-b ${
                isHomePage1 ? 'text-white border-white/20' : 'text-white border-white/10'
              }`}>
                Contact &amp; Headquarters
              </h4>
              
              <div className="space-y-3.5 pt-1">
                {/* Phone Link */}
                <a 
                  href="tel:+443330164050" 
                  className={`group flex items-start gap-3.5 p-2 rounded-2xl transition-all duration-200 ${
                    isHomePage1 ? 'hover:bg-white/10 text-white' : 'hover:bg-white/5 text-slate-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 shadow-xs ${
                    isHomePage1
                      ? 'bg-white/15 border border-white/25 text-white group-hover:bg-white group-hover:text-[#0846E7] group-hover:scale-105'
                      : 'bg-blue-500/10 border border-cyan-400/25 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 group-hover:scale-105'
                  }`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`text-xs block font-medium ${isHomePage1 ? 'text-white/70' : 'text-slate-400'}`}>
                      Customer Support &amp; NOC (24/7)
                    </span>
                    <span className={`text-sm sm:text-base font-bold transition-colors ${
                      isHomePage1 ? 'text-white' : 'text-white group-hover:text-cyan-300'
                    }`}>
                      +44 (0)333 016 4050
                    </span>
                  </div>
                </a>

                {/* Email Link */}
                <a 
                  href="mailto:info@optimusnetworks.co.uk" 
                  className={`group flex items-start gap-3.5 p-2 rounded-2xl transition-all duration-200 ${
                    isHomePage1 ? 'hover:bg-white/10 text-white' : 'hover:bg-white/5 text-slate-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 shadow-xs ${
                    isHomePage1
                      ? 'bg-white/15 border border-white/25 text-white group-hover:bg-white group-hover:text-[#0846E7] group-hover:scale-105'
                      : 'bg-blue-500/10 border border-cyan-400/25 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 group-hover:scale-105'
                  }`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`text-xs block font-medium ${isHomePage1 ? 'text-white/70' : 'text-slate-400'}`}>
                      Technical &amp; Sales Enquiries
                    </span>
                    <span className={`text-sm sm:text-base font-bold transition-colors ${
                      isHomePage1 ? 'text-white' : 'text-white group-hover:text-cyan-300'
                    }`}>
                      info@optimusnetworks.co.uk
                    </span>
                  </div>
                </a>

                {/* Address Block */}
                <div className={`flex items-start gap-3.5 p-2 rounded-2xl ${
                  isHomePage1 ? 'text-white' : 'text-slate-200'
                }`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 shadow-xs ${
                    isHomePage1
                      ? 'bg-white/15 border border-white/25 text-white'
                      : 'bg-blue-500/10 border border-cyan-400/25 text-cyan-400'
                  }`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="leading-snug text-xs sm:text-sm">
                    <strong className="text-white block font-bold mb-0.5">Optimus Networks</strong>
                    <span className={`block ${isHomePage1 ? 'text-white/85' : 'text-slate-300'}`}>
                      Gawsworth Business Court, Shellow Lane,
                    </span>
                    <span className={`block ${isHomePage1 ? 'text-white/70' : 'text-slate-400'}`}>
                      Congleton, Cheshire, CW12 2NX
                    </span>
                  </div>
                </div>

                {/* Speak with an Engineer CTA Pill */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer ${
                      isHomePage1
                        ? 'bg-white text-[#0846E7] hover:bg-white/90 shadow-md'
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Speak with an Engineer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Bar: Copyright & Legal Links */}
          <div className={`pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm border-t ${
            isHomePage1 ? 'border-white/20 text-white/75' : 'border-slate-800/80 text-slate-400'
          }`}>
            <div className="text-center md:text-left font-medium">
              &copy; {new Date().getFullYear()} Optimus Networks Ltd. All rights reserved.
            </div>

            <div className={`flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm ${
              isHomePage1 ? 'text-white/80' : 'text-slate-400'
            }`}>
              <button 
                type="button"
                onClick={onOpenQuote} 
                className="hover:text-white transition-colors focus:outline-none cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                type="button"
                onClick={onOpenQuote} 
                className="hover:text-white transition-colors focus:outline-none cursor-pointer"
              >
                Terms of Service
              </button>
              <button 
                type="button"
                onClick={onOpenQuote} 
                className="hover:text-white transition-colors focus:outline-none cursor-pointer"
              >
                99.999% Master SLA
              </button>
              <button 
                type="button"
                onClick={onOpenQuote} 
                className="hover:text-white transition-colors focus:outline-none cursor-pointer"
              >
                ISO 27001 Security
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                className={`ml-0 sm:ml-2 px-3 py-1.5 rounded-lg text-xs border flex items-center gap-1.5 transition-colors focus:outline-none cursor-pointer ${
                  isHomePage1 
                    ? 'bg-white/15 hover:bg-white/25 text-white border-white/25' 
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                }`}
                aria-label="Scroll back to top"
              >
                <ArrowUp className={`w-3.5 h-3.5 ${isHomePage1 ? 'text-white' : 'text-cyan-400'}`} />
                <span>Top</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
