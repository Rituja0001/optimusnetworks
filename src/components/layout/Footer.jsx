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
  ExternalLink,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import logoImg from '../../assets/logo/optimusnetworks-logo.png';

export default function Footer({ onOpenPortal, onOpenQuote }) {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer 
      className="relative overflow-hidden bg-gradient-to-b from-[#060A14] via-[#0A1628] to-[#040710] text-slate-300 rounded-t-[32px] sm:rounded-t-[40px] md:rounded-t-[48px] border-t border-cyan-500/20 shadow-[0_-15px_40px_rgba(2,6,23,0.35)] pt-14 sm:pt-16 pb-10 sm:pb-12"
      aria-label="Site Footer"
    >
      {/* Top subtle blue-teal gradient hairline glow along the rounded edge */}
      <div className="absolute top-0 left-8 right-8 sm:left-16 sm:right-16 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none"></div>

      {/* Ambient background glow orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Scroll-triggered entrance container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Footer Multi-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-14">
            
            {/* Column 1: Logo + Mission One-Liner + Contact Details Block (~5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Logo: Increased 1.4-1.6x size with breathing room */}
              <div className="pt-1">
                <img 
                  src={logoImg} 
                  alt="Optimus Networks" 
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain brightness-0 invert drop-shadow-[0_2px_12px_rgba(0,210,255,0.25)]" 
                />
              </div>

              {/* Mission Statement One-Liner with improved readability */}
              <p className="text-sm sm:text-[15px] text-slate-300/90 leading-relaxed font-normal max-w-md">
                Optimus Networks delivers carrier-grade, uncontended business connectivity, managed SD-WAN, and direct cloud cross-connects backed by a 99.999% SLA across the United Kingdom.
              </p>

              {/* Contact Details Block (Phone, Email, Address) */}
              <div className="space-y-4 pt-2">
                
                {/* Phone Link */}
                <a 
                  href="tel:+443330164050" 
                  className="group flex items-center gap-3 text-sm sm:text-[15px] text-slate-200 hover:text-cyan-300 transition-colors py-1 self-start"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-cyan-400/25 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-200 shadow-xs">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Customer Support &amp; NOC</span>
                    <span className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      +44 (0)333 016 4050
                    </span>
                  </div>
                </a>

                {/* Email Link */}
                <a 
                  href="mailto:info@optimusnetworks.co.uk" 
                  className="group flex items-center gap-3 text-sm sm:text-[15px] text-slate-200 hover:text-cyan-300 transition-colors py-1 self-start"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-cyan-400/25 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-200 shadow-xs">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Technical Inquiries</span>
                    <span className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      info@optimusnetworks.co.uk
                    </span>
                  </div>
                </a>

                {/* Address Block */}
                <div className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-300/90 pt-1">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-cyan-400/25 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="leading-snug">
                    <strong className="text-white block font-semibold mb-0.5">Optimus Networks</strong>
                    <span>Gawsworth Business Court, Shellow Lane,</span>
                    <span className="block text-slate-400">Congleton, Cheshire, CW12 2NX</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Column 2: "Company" Navigation Links (3 cols) */}
            <div className="lg:col-span-3 space-y-4 text-left">
              <h4 className="text-base sm:text-lg font-bold text-white tracking-wide border-b border-white/10 pb-2.5">
                Company
              </h4>
              <ul className="space-y-3 text-sm sm:text-[15px]">
                <li>
                  <button 
                    type="button"
                    onClick={() => scrollToSection('about')} 
                    className="group flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors min-h-[44px] sm:min-h-0 text-left focus:outline-none"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400/60 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                    <span>About Optimus</span>
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => scrollToSection('case-studies')} 
                    className="group flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors min-h-[44px] sm:min-h-0 text-left focus:outline-none"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400/60 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                    <span>Case Studies &amp; Results</span>
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => scrollToSection('partners')} 
                    className="group flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors min-h-[44px] sm:min-h-0 text-left focus:outline-none"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400/60 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                    <span>Technology Partners</span>
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => scrollToSection('faq')} 
                    className="group flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors min-h-[44px] sm:min-h-0 text-left focus:outline-none"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400/60 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                    <span>Frequently Asked Questions</span>
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => scrollToSection('testimonials')} 
                    className="group flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors min-h-[44px] sm:min-h-0 text-left focus:outline-none"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400/60 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                    <span>Client Testimonials</span>
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={onOpenQuote} 
                    className="group flex items-center gap-2 text-cyan-400 hover:text-white font-semibold transition-colors min-h-[44px] sm:min-h-0 text-left focus:outline-none pt-1"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                    <span>Speak with an Engineer</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: "Services & Solutions" Navigation Links (4 cols) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <h4 className="text-base sm:text-lg font-bold text-white tracking-wide border-b border-white/10 pb-2.5">
                Services &amp; Architecture
              </h4>
              <ul className="space-y-3 text-sm sm:text-[15px]">
                <li>
                  <button 
                    type="button"
                    onClick={() => scrollToSection('services')} 
                    className="group flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors min-h-[44px] sm:min-h-0 text-left focus:outline-none"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400/60 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                    <span>Dedicated Internet Access (DIA Leased Lines)</span>
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => scrollToSection('services')} 
                    className="group flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors min-h-[44px] sm:min-h-0 text-left focus:outline-none"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400/60 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                    <span>Managed SD-WAN &amp; Multi-Site Mesh</span>
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => scrollToSection('services')} 
                    className="group flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors min-h-[44px] sm:min-h-0 text-left focus:outline-none"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400/60 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                    <span>Cloud On-Ramps (Azure, AWS &amp; Google Cloud)</span>
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => scrollToSection('services')} 
                    className="group flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors min-h-[44px] sm:min-h-0 text-left focus:outline-none"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400/60 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                    <span>Ultrafast Business FTTP &amp; Ethernet</span>
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => scrollToSection('services')} 
                    className="group flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors min-h-[44px] sm:min-h-0 text-left focus:outline-none"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400/60 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                    <span>4G / 5G Rapid Emergency Failover</span>
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={onOpenPortal} 
                    className="group flex items-center gap-2 text-cyan-400 hover:text-white font-semibold transition-colors min-h-[44px] sm:min-h-0 text-left focus:outline-none pt-1"
                  >
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Optimus NOC Portal Login</span>
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Legal Links */}
          <div className="border-t border-slate-800/80 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
            <div className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Optimus Networks Ltd. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs sm:text-sm">
              <button 
                type="button"
                onClick={onOpenQuote} 
                className="hover:text-white transition-colors focus:outline-none"
              >
                Privacy Policy
              </button>
              <button 
                type="button"
                onClick={onOpenQuote} 
                className="hover:text-white transition-colors focus:outline-none"
              >
                Terms of Service
              </button>
              <button 
                type="button"
                onClick={onOpenQuote} 
                className="hover:text-white transition-colors focus:outline-none"
              >
                99.999% Master SLA
              </button>
              <button 
                type="button"
                onClick={onOpenQuote} 
                className="hover:text-white transition-colors focus:outline-none"
              >
                ISO 27001 Security
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                className="ml-0 sm:ml-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10 flex items-center gap-1.5 transition-colors focus:outline-none"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>Top</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
