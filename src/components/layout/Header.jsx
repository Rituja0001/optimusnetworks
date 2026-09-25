import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/images/optimusnetworks-logo.png';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Zap, 
  Globe, 
  Network, 
  Wifi, 
  Radio, 
  Sliders, 
  ShieldCheck, 
  Layers, 
  Activity, 
  Cloud, 
  Cpu, 
  Server, 
  Database,
  PhoneCall,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function Header({ onContactClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileSectionOpen, setMobileSectionOpen] = useState(null); // 'internet' | 'locations' | 'cloud' | null
  const [hoveredNavIndex, setHoveredNavIndex] = useState(null);

  const timeoutRef = useRef(null);
  const navContainerRef = useRef(null);

  // Smooth scroll listener for glassmorphism density transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on outside click or escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target)) {
        setIsMegaMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMegaMenuOpen(false);
        setIsMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Mega-menu hover delay management (prevents flickering)
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 180);
  };

  // Structured connectivity mega-menu data matching all requirements
  const connectivityColumns = [
    {
      title: "Internet",
      badge: "High-Bandwidth Access",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
      description: "Dedicated uncompressed optical pipes with guaranteed 99.999% SLA.",
      items: [
        {
          name: "Leased Lines",
          desc: "1:1 uncontended symmetrical fiber up to 100Gbps",
          icon: Zap,
          tag: "Core"
        },
        {
          name: "DIA (Dedicated Internet Access)",
          desc: "Direct Tier-1 multi-homed optical IP transit",
          icon: Globe
        },
        {
          name: "Ethernet Services",
          desc: "Deterministic Layer-2 low-latency business transport",
          icon: Network
        },
        {
          name: "Business Broadband",
          desc: "Ultrafast business-grade FTTP full-fiber coverage",
          icon: Wifi
        },
        {
          name: "Wireless / 4G / 5G",
          desc: "Rapid deployment & hitless cellular failover",
          icon: Radio,
          tag: "Backup"
        }
      ]
    },
    {
      title: "Connect Locations",
      badge: "Private WAN & SD-WAN",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
      description: "Deterministic private mesh connecting branches, HQ, and facilities.",
      items: [
        {
          name: "SD-WAN",
          desc: "Application-aware intelligent multi-path cloud steering",
          icon: Sliders,
          tag: "Popular"
        },
        {
          name: "MPLS",
          desc: "Strict QoS label switching for enterprise voice and ERP",
          icon: ShieldCheck
        },
        {
          name: "Private WAN",
          desc: "Isolated sovereign corporate Layer-2 / Layer-3 network",
          icon: Layers
        },
        {
          name: "Point-to-Point",
          desc: "Dedicated unmetered dark fiber & optical wavelengths",
          icon: Activity,
          tag: "Low Latency"
        }
      ]
    },
    {
      title: "Cloud & Data Centre",
      badge: "Zero-Transit On-Ramps",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200/60",
      description: "Direct physical cross-connects bypassing the public internet.",
      items: [
        {
          name: "Azure ExpressRoute",
          desc: "Direct private bypass into Microsoft Azure UK South",
          icon: Cloud
        },
        {
          name: "AWS Direct Connect",
          desc: "Sub-millisecond dedicated VPC interconnects in London",
          icon: Cloud
        },
        {
          name: "Cloud On-Ramps",
          desc: "Universal multi-cloud exchange fabric (GCP & Oracle)",
          icon: Cpu
        },
        {
          name: "Colocation",
          desc: "Tier-3 carrier-neutral UK datacentre suites & power",
          icon: Server
        },
        {
          name: "DCI (Data Centre Interconnect)",
          desc: "Terabit DWDM optical waves between UK facilities",
          icon: Database,
          tag: "Terabit"
        }
      ]
    }
  ];

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Connectivity", hasMegaMenu: true },
    { label: "Cloud & Data Centre", href: "#cloud-datacentre" },
    { label: "About", href: "#about" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none"
    >
      <div 
        ref={navContainerRef}
        className={`max-w-7xl mx-auto rounded-2xl pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'bg-white/92 backdrop-blur-xl border border-slate-200/80 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.08),0_2px_6px_-1px_rgba(15,23,42,0.04)]'
            : 'bg-white/75 backdrop-blur-md border border-white/80 shadow-[0_6px_24px_-4px_rgba(15,23,42,0.05),0_1px_3px_0_rgba(15,23,42,0.03)]'
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5">
          
          {/* Logo on the left */}
          <a
            href="#home"
            className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl py-0.5"
            aria-label="Optimus Networks Home"
          >
            {/* Real Optimus Networks Logo - High Visibility & Increased Size */}
            <img
              src={logoImg}
              alt="Optimus Networks"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] drop-shadow-[0_2px_10px_rgba(0,102,255,0.12)] contrast-[1.05]"
            />
          </a>

          {/* Desktop Navigation Menu (Center/Right-aligned) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link, idx) => {
              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                      className={`relative px-3.5 py-2 text-[14px] font-medium rounded-xl transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        isMegaMenuOpen
                          ? 'text-blue-600 bg-blue-50/70 font-semibold shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                      }`}
                      aria-expanded={isMegaMenuOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isMegaMenuOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                        }`}
                      />

                      {/* Active indicator dot */}
                      {isMegaMenuOpen && (
                        <motion.span
                          layoutId="activeMegaIndicator"
                          className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-blue-600 rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Animated Desktop Mega-Menu */}
                    <AnimatePresence>
                      {isMegaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[880px] xl:w-[940px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_24px_60px_-12px_rgba(15,23,42,0.14),0_0_0_1px_rgba(255,255,255,0.8)_inset] p-6 z-50"
                        >
                          {/* Top Sub-banner */}
                          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100 text-xs text-slate-500">
                            <div className="flex items-center gap-2">
                              <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                              </span>
                              <span className="font-semibold text-slate-700">British Optical Core Fabric</span>
                              <span className="text-slate-300">•</span>
                              <span>Terabit DWDM Interconnects</span>
                            </div>
                            <div className="flex items-center gap-4 text-[11px] font-medium text-slate-400">
                              <span className="flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> 99.999% SLA
                              </span>
                              <span className="flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> 24/7 ATS Support
                              </span>
                            </div>
                          </div>

                          {/* 3 Columns Grid */}
                          <div className="grid grid-cols-3 gap-6">
                            {connectivityColumns.map((col, cIdx) => (
                              <div key={col.title} className="space-y-3">
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

                                <div className="space-y-1">
                                  {col.items.map((item) => {
                                    const IconComponent = item.icon;
                                    return (
                                      <a
                                        key={item.name}
                                        href={item.href || '#'}
                                        onClick={() => setIsMegaMenuOpen(false)}
                                        className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150 border border-transparent hover:border-slate-100"
                                      >
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover/item:bg-blue-50 text-slate-500 group-hover/item:text-blue-600 flex items-center justify-center shrink-0 transition-colors duration-150 shadow-xs">
                                          <IconComponent className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-1.5">
                                            <span className="text-[13px] font-semibold text-slate-700 group-hover/item:text-blue-600 transition-colors">
                                              {item.name}
                                            </span>
                                            {item.tag && (
                                              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-blue-100/70 text-blue-700">
                                                {item.tag}
                                              </span>
                                            )}
                                          </div>
                                          <p className="text-[11px] text-slate-400 group-hover/item:text-slate-500 line-clamp-1 leading-snug">
                                            {item.desc}
                                          </p>
                                        </div>
                                      </a>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Mega Menu Footer Callout */}
                          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between bg-gradient-to-r from-blue-50/50 via-slate-50/40 to-transparent p-3 rounded-2xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
                                <Sparkles className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-slate-800">
                                  Need a multi-site network architecture consultation?
                                </div>
                                <div className="text-[11px] text-slate-500">
                                  Speak directly with a UK CCIE Lead Network Architect.
                                </div>
                              </div>
                            </div>

                            <a
                              href="#quote"
                              onClick={(e) => {
                                e.preventDefault();
                                setIsMegaMenuOpen(false);
                                if (onContactClick) onContactClick();
                              }}
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-xs group"
                            >
                              <span>Request Engineering Quote</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredNavIndex(idx)}
                  onMouseLeave={() => setHoveredNavIndex(null)}
                  className="relative px-3.5 py-2 text-[14px] font-medium text-slate-600 hover:text-slate-900 rounded-xl transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span className="relative z-10">{link.label}</span>

                  {/* Animated hover highlight / underline effect */}
                  {hoveredNavIndex === idx && (
                    <motion.div
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-slate-100/70 rounded-xl -z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Prominent CTA button with hover scale & soft glow */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onContactClick}
              className="relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_16px_rgba(0,102,255,0.25)] hover:shadow-[0_6px_24px_rgba(0,102,255,0.4)] transition-all duration-300 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {/* Subtle inner sheen */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-in Drawer & Accordion Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-2xl rounded-b-2xl px-5 pt-3 pb-6 space-y-3"
            >
              <div className="flex flex-col space-y-1">
                <a
                  href="#home"
                  onClick={() => setIsMobileOpen(false)}
                  className="py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                >
                  Home
                </a>

                {/* Mobile Connectivity Accordion */}
                <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50/50">
                  <button
                    type="button"
                    onClick={() => setMobileSectionOpen(mobileSectionOpen === 'connectivity' ? null : 'connectivity')}
                    className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    <span>Connectivity Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileSectionOpen === 'connectivity' ? 'rotate-180 text-blue-600' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {mobileSectionOpen === 'connectivity' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-3 pb-3 space-y-3 text-xs border-t border-slate-100 pt-2"
                    >
                      {connectivityColumns.map((col) => (
                        <div key={col.title} className="space-y-1.5">
                          <div className="font-bold uppercase tracking-wider text-[10px] text-blue-600">
                            {col.title}
                          </div>
                          <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-blue-100">
                            {col.items.map((item) => (
                              <a
                                key={item.name}
                                href={item.href || '#'}
                                onClick={() => setIsMobileOpen(false)}
                                className="py-1 text-slate-600 hover:text-blue-600 transition-colors flex items-center justify-between"
                              >
                                <span>{item.name}</span>
                                {item.tag && (
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 font-semibold">
                                    {item.tag}
                                  </span>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>

                <a
                  href="#cloud-datacentre"
                  onClick={() => setIsMobileOpen(false)}
                  className="py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                >
                  Cloud & Data Centre
                </a>

                <a
                  href="#about"
                  onClick={() => setIsMobileOpen(false)}
                  className="py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                >
                  About
                </a>

                <a
                  href="#resources"
                  onClick={() => setIsMobileOpen(false)}
                  className="py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                >
                  Resources
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                >
                  Contact
                </a>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileOpen(false);
                    if (onContactClick) onContactClick();
                  }}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-[0_4px_16px_rgba(0,102,255,0.25)] flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Get in Touch with an Engineer</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}

