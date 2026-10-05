import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Menu, 
  X, 
  PhoneCall,
  Phone
} from 'lucide-react';
// Real Optimus Networks logo asset
import logoImg from '../../assets/logo/optimusnetworks-logo.png';

export default function FloatingNavbar({ onOpenContact, onOpenSurvey, onNavigate, isHomePage1 = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  // Transition from translucent glass to dense frosted glass on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Exact navigation items specified:
  // Home | About Us | Business Broadband | Leased Lines | Connectivity | Contact Us
  const navItems = [
    { name: "Home", href: "#home", target: "home" },
    { name: "About Us", href: "#about", target: "about" },
    { name: "Business Broadband", href: "#services", target: "services" },
    { name: "Leased Lines", href: "#services", target: "services" },
    { name: "Connectivity", href: "#services", target: "services" },
    { name: "Contact Us", href: "#contact", target: "contact" }
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveItem(item.name);
    
    if (item.target === 'contact') {
      if (onOpenContact) onOpenContact();
      return;
    }
    
    const element = document.getElementById(item.target);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.target === 'home') {
      if (window.__lenis) {
        window.__lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-4 z-50 px-4 sm:px-6 md:px-8 pointer-events-none"
    >
      <div 
        className={`max-w-7xl mx-auto rounded-2xl pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between ${
          isScrolled 
            ? 'bg-white/92 backdrop-blur-xl border border-slate-200/80 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.08),0_2px_6px_-1px_rgba(15,23,42,0.04)]' 
            : 'bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_6px_24px_-4px_rgba(15,23,42,0.05),0_1px_3px_0_rgba(15,23,42,0.03)]'
        }`}
      >
        {/* Left Side: Real Logo with Good Spacing */}
        <a 
          href="#home"
          onClick={(e) => handleNavClick(e, { name: 'Home', target: 'home', href: '#home' })}
          className="flex items-center gap-3 shrink-0 py-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
          aria-label="Optimus Networks Homepage"
        >
          <img 
            src={logoImg} 
            alt="Optimus Networks" 
            className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] filter drop-shadow-[0_2px_8px_rgba(0,102,255,0.12)] contrast-[1.05]"
          />
        </a>

        {/* Center: Clean Specified Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-3 py-1.5 text-[13px] xl:text-[13.5px] font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive
                    ? isHomePage1 
                      ? 'text-[#0846E7] bg-[#0846E7]/10 font-bold' 
                      : 'text-blue-600 bg-blue-50 font-bold'
                    : isHomePage1
                      ? 'text-slate-600 hover:text-[#0846E7] hover:bg-[#0846E7]/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className={`absolute inset-0 rounded-xl -z-0 ${
                      isHomePage1 ? 'bg-[#0846E7]/10' : 'bg-blue-50'
                    }`}
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side: Desktop Actions (Direct Phone Number, Get in Touch CTA) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
          
          {/* Direct Telecom Phone Link (Desktop Only) */}
          <a
            href="tel:+443330164050"
            className={`inline-flex items-center gap-2 px-2 py-1.5 rounded-xl text-slate-700 transition-all duration-200 group ${
              isHomePage1 ? 'hover:text-[#0846E7] hover:bg-[#0846E7]/5' : 'hover:text-blue-600 hover:bg-blue-50/50'
            }`}
            aria-label="Call Optimus Networks at +44 (0)333 016 4050"
          >
            <div className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all duration-200 shadow-2xs ${
              isHomePage1 
                ? 'bg-[#0846E7]/10 border-[#0846E7]/25 text-[#0846E7] group-hover:bg-[#0846E7] group-hover:text-white group-hover:border-[#0846E7]' 
                : 'bg-blue-50 border-blue-200/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600'
            }`}>
              <Phone className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
            </div>
            <span className={`text-[13px] xl:text-[14px] font-medium text-slate-800 transition-colors whitespace-nowrap ${
              isHomePage1 ? 'group-hover:text-[#0846E7]' : 'group-hover:text-blue-600'
            }`}>
              +44 (0)333 016 4050
            </span>
          </a>

          {/* Primary "Get in Touch" CTA Button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenContact}
            className={`relative group overflow-hidden px-4 xl:px-5 py-2 xl:py-2.5 rounded-xl text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 focus:outline-none shrink-0 cursor-pointer ${
              isHomePage1 
                ? 'bg-[#0846E7] hover:bg-[#0639BC] shadow-[0_4px_16px_rgba(8,70,231,0.25)] hover:shadow-[0_6px_24px_rgba(8,70,231,0.4)] focus-visible:ring-2 focus-visible:ring-[#0846E7]' 
                : 'bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 shadow-[0_4px_16px_rgba(0,102,255,0.25)] hover:shadow-[0_6px_24px_rgba(0,102,255,0.4)] focus-visible:ring-2 focus-visible:ring-blue-500'
            }`}
          >
            {/* Sliding sheen wave */}
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            
            <span className="relative z-10">Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Tablet / Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors focus:outline-none cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile & Tablet Full-Height Glass Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden pointer-events-auto mt-2 max-w-7xl mx-auto rounded-3xl bg-white/98 backdrop-blur-2xl border border-slate-200/90 p-5 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto text-left"
          >
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = activeItem === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, item);
                    }}
                    className={`py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? isHomePage1 
                          ? 'text-[#0846E7] bg-[#0846E7]/10 font-bold' 
                          : 'text-blue-600 bg-blue-50 font-bold'
                        : isHomePage1
                          ? 'text-slate-700 hover:text-[#0846E7] hover:bg-[#0846E7]/5'
                          : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                  </a>
                );
              })}
            </nav>

            {/* Mobile Direct Phone & Primary Button */}
            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <a
                href="tel:+443330164050"
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                  isHomePage1 
                    ? 'bg-[#0846E7]/10 text-[#0846E7] hover:bg-[#0846E7]/20' 
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+44 (0)333 016 4050</span>
              </a>

              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); if (onOpenContact) onOpenContact(); }}
                className={`w-full py-3 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                  isHomePage1 
                    ? 'bg-[#0846E7] hover:bg-[#0639BC] shadow-[0_4px_16px_rgba(8,70,231,0.25)]' 
                    : 'bg-blue-600 hover:bg-blue-700 shadow-[0_4px_16px_rgba(0,102,255,0.25)]'
                }`}
              >
                <PhoneCall className="w-4 h-4" />
                <span>Get in Touch with an Engineer</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
