import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  Wifi, 
  Radio, 
  Zap, 
  Globe, 
  Network, 
  GitFork, 
  Sliders, 
  ShieldCheck, 
  Layers, 
  Activity, 
  Cloud, 
  Server, 
  Database, 
  Cpu,
  Sparkles,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
// Real Optimus Networks logo asset
import logoImg from '../../assets/logo/optimusnetworks-logo.png';

export default function FloatingNavbar({ onOpenContact, onOpenSurvey }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isConnectivityOpen, setIsConnectivityOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileConnectivityOpen, setMobileConnectivityOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const timeoutRef = useRef(null);
  const megaMenuContainerRef = useRef(null);

  // Transition from translucent glass to dense frosted glass on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega-menu on click outside or escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (megaMenuContainerRef.current && !megaMenuContainerRef.current.contains(e.target)) {
        setIsConnectivityOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsConnectivityOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
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

  // Anti-flicker hover timers
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsConnectivityOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsConnectivityOpen(false);
    }, 180);
  };

  // Structured 3-Column Mega-Menu Data matching exact client specification
  const connectivityColumns = [
    {
      id: "internet",
      title: "Internet",
      description: "High-speed enterprise access with guaranteed uptime SLAs",
      badge: "Pure Fiber",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
      items: [
        { name: "Leased Lines", desc: "1:1 uncontended symmetrical fiber up to 100Gbps", href: "#leased-lines", badge: "Up to 100G" },
        { name: "DIA", desc: "Dedicated Internet Access with 99.999% SLA", href: "#dia" },
        { name: "Ethernet", desc: "Ultra-low latency carrier-grade Layer-2 transit", href: "#ethernet" },
        { name: "Broadband", desc: "Ultrafast business FTTP full-fiber for branches", href: "#broadband" },
        { name: "Wireless", desc: "Instant deployment & hitless cellular failover", href: "#wireless", badge: "Backup" },
      ]
    },
    {
      id: "locations",
      title: "Connect Locations",
      description: "Private, deterministic multi-site WAN & secure fabrics",
      badge: "Private WAN",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
      items: [
        { name: "SD-WAN", desc: "Application-aware intelligent cloud routing", href: "#sd-wan", badge: "Popular" },
        { name: "MPLS", desc: "Deterministic QoS multi-protocol label switching", href: "#mpls" },
        { name: "Private WAN", desc: "Isolated sovereign corporate Layer-2/3 network", href: "#private-wan" },
        { name: "Point-to-Point", desc: "Dedicated unmetered dark fiber & wavelength pipes", href: "#point-to-point", badge: "< 1ms" },
      ]
    },
    {
      id: "cloud-dc",
      title: "Cloud & Data Centre",
      description: "Sub-millisecond interconnects to cloud hyperscalers & colocation",
      badge: "Zero Transit",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200/60",
      items: [
        { name: "Azure", desc: "Direct private bypass into Microsoft Azure UK South", href: "#azure" },
        { name: "AWS", desc: "Sub-millisecond dedicated VPC on-ramps in London", href: "#aws" },
        { name: "Cloud On-Ramps", desc: "Universal multi-cloud exchange fabric (GCP & Oracle)", href: "#cloud-onramps" },
        { name: "Colocation", desc: "Tier-3 carrier-neutral UK datacentre suites & power", href: "#colocation" },
        { name: "DCI", desc: "Terabit DWDM optical waves between UK facilities", href: "#dci", badge: "Terabit" },
      ]
    }
  ];

  // Full site navigation structure matching prompt
  const fullNavItems = [
    { name: "Home", href: "#home" },
    { name: "Connectivity", hasDropdown: true },
    { name: "Cloud & Data Centre", href: "#cloud-datacentre" },
    { name: "About", href: "#about" },
    { name: "Resources", href: "#resources" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-4 z-50 px-4 sm:px-6 md:px-8 pointer-events-none"
    >
      <div 
        ref={megaMenuContainerRef}
        className={`max-w-7xl mx-auto rounded-2xl pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between ${
          isScrolled 
            ? 'bg-white/92 backdrop-blur-xl border border-slate-200/80 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.08),0_2px_6px_-1px_rgba(15,23,42,0.04)]' 
            : 'bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_6px_24px_-4px_rgba(15,23,42,0.05),0_1px_3px_0_rgba(15,23,42,0.03)]'
        }`}
      >
        {/* Left Side: Real Logo with Good Spacing */}
        <a 
          href="#home"
          onClick={() => setActiveItem('Home')}
          className="flex items-center gap-3 shrink-0 py-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
          aria-label="Optimus Networks Homepage"
        >
          <img 
            src={logoImg} 
            alt="Optimus Networks" 
            className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] filter drop-shadow-[0_2px_8px_rgba(0,102,255,0.12)] contrast-[1.05]"
          />
        </a>

        {/* Center: Full Navigation Menu */}
        <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
          {fullNavItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setIsConnectivityOpen(!isConnectivityOpen)}
                    className={`px-3 py-1.5 text-[13.5px] font-medium rounded-xl transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      isConnectivityOpen || activeItem === 'Connectivity'
                        ? 'text-blue-600 bg-blue-50/80 font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                    aria-expanded={isConnectivityOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isConnectivityOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                  </button>

                  {/* 3-Column Frosted Glass Light Theme Mega-Menu */}
                  <AnimatePresence>
                    {isConnectivityOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[880px] xl:w-[920px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_24px_60px_-12px_rgba(15,23,42,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset] p-6 z-50 text-left"
                      >
                        {/* Top Sub-banner */}
                        <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-100 text-xs text-slate-500">
                          <div className="flex items-center gap-2">
                            <span className="flex h-2 w-2 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="font-semibold text-slate-700">British Optical Core Fabric</span>
                            <span className="text-slate-300">•</span>
                            <span>Direct Openreach & Neos Interconnects</span>
                          </div>

                          <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400">
                            <span className="flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> 99.999% SLA Uptime
                            </span>
                            <span className="flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> 24/7 UK NOC
                            </span>
                          </div>
                        </div>

                        {/* 3 Columns Grid */}
                        <div className="grid grid-cols-3 gap-6">
                          {connectivityColumns.map((col) => (
                            <div key={col.id} className="space-y-3">
                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                                    {col.title}
                                  </h4>
                                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${col.badgeColor}`}>
                                    {col.badge}
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-400 leading-tight">
                                  {col.description}
                                </p>
                              </div>

                              <div className="space-y-1 pt-1">
                                {col.items.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={() => {
                                      setIsConnectivityOpen(false);
                                      setActiveItem('Connectivity');
                                    }}
                                    className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-blue-50/60 transition-all border border-transparent hover:border-blue-100"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 group-hover:scale-125 transition-all"></div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                                          {subItem.name}
                                        </span>
                                        {subItem.badge && (
                                          <span className="text-[9px] font-bold uppercase px-1.5 py-0.2 rounded bg-blue-100/70 text-blue-700">
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-[11px] text-slate-400 group-hover:text-slate-500 leading-tight line-clamp-1">
                                        {subItem.desc}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Mega Menu Footer Callout */}
                        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between bg-gradient-to-r from-blue-50/60 via-slate-50/50 to-transparent p-3 rounded-2xl">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
                              <Sparkles className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-800">
                                Need custom multi-site architecture advice?
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Speak directly with a UK CCIE Lead Network Architect.
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setIsConnectivityOpen(false);
                              if (onOpenSurvey) onOpenSurvey();
                            }}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-xs group"
                          >
                            <span>Check Site Feasibility</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`relative px-3 py-1.5 text-[13.5px] font-medium rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'text-blue-600 bg-blue-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavPillLight"
                    className="absolute inset-0 bg-blue-50/80 rounded-xl -z-0"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side: CTA Button "Get in Touch" with Gradient Blue Style */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenContact}
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_16px_rgba(0,102,255,0.25)] hover:shadow-[0_6px_24px_rgba(0,102,255,0.4)] transition-all duration-300 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            {/* Sliding sheen wave */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            
            <span className="relative z-10">Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors focus:outline-none"
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
            className="xl:hidden pointer-events-auto mt-2 max-w-7xl mx-auto rounded-3xl bg-white/98 backdrop-blur-2xl border border-slate-200/90 p-5 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto text-left"
          >
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {/* Home */}
              <a
                href="#home"
                onClick={() => { setMobileMenuOpen(false); setActiveItem('Home'); }}
                className={`py-2 px-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeItem === 'Home' ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Home
              </a>

              {/* Connectivity Accordion with all 3 categories */}
              <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50/60">
                <button
                  type="button"
                  onClick={() => setMobileConnectivityOpen(!mobileConnectivityOpen)}
                  className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <span>Connectivity Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileConnectivityOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                </button>

                {mobileConnectivityOpen && (
                  <div className="px-3 pb-3 space-y-4 border-t border-slate-100 pt-3 text-xs">
                    {connectivityColumns.map((col) => (
                      <div key={col.id} className="space-y-1.5">
                        <div className="font-bold uppercase tracking-wider text-[11px] text-blue-600">
                          {col.title}
                        </div>
                        <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-blue-100">
                          {col.items.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="py-1 text-slate-600 hover:text-blue-600 flex items-center justify-between"
                            >
                              <span>{subItem.name}</span>
                              {subItem.badge && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 font-semibold">
                                  {subItem.badge}
                                </span>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Exact Links */}
              {["Cloud & Data Centre", "About", "Resources", "Partners", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => { setMobileMenuOpen(false); setActiveItem(label); }}
                  className={`py-2 px-3 rounded-xl text-sm font-semibold transition-colors ${
                    activeItem === label ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Mobile Primary Button */}
            <div className="pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-[0_4px_16px_rgba(0,102,255,0.25)] flex items-center justify-center gap-2 transition-colors"
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
