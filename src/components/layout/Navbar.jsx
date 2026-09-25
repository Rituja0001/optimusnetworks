import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Globe, 
  Shield, 
  Zap, 
  Cpu, 
  Activity, 
  Server, 
  Headphones, 
  ArrowRight, 
  Menu, 
  X, 
  Radio, 
  Network, 
  Layers, 
  ExternalLink,
  Sparkles,
  Lock
} from 'lucide-react';

export default function Navbar({ onOpenPortal, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'connectivity' | 'solutions' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega-menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    setActiveMenu(null);
    setMobileOpen(false);
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div 
        ref={navRef}
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? 'glass-panel bg-[#060B18]/90 shadow-2xl border-brand-blue/20' 
            : 'glass-panel bg-[#060B18]/70 border-white/10'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 md:py-3.5">
          {/* Brand Logo with animated glowing node */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/30 to-brand-cyan/20 border border-brand-cyan/40 p-2 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-brand-cyan group-hover:shadow-glow-cyan">
              <div className="absolute inset-0 bg-brand-cyan/10 animate-pulse-slow"></div>
              <img 
                src="/logo-icon.svg" 
                alt="Optimus Networks Node" 
                className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                OPTIMUS <span className="text-brand-cyan">NETWORKS</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase -mt-1 font-semibold flex items-center gap-1">
                UK Enterprise Core <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block"></span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button 
              onClick={() => scrollToSection('hero')}
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Home
            </button>

            <button 
              onClick={() => scrollToSection('about')}
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              About Us
            </button>

            {/* Connectivity Mega-Menu Trigger */}
            <div className="relative">
              <button
                onClick={() => setActiveMenu(activeMenu === 'connectivity' ? null : 'connectivity')}
                className={`px-3 py-2 text-sm font-medium flex items-center gap-1.5 transition-colors rounded-lg ${
                  activeMenu === 'connectivity' ? 'text-brand-cyan bg-white/5' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Connectivity</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'connectivity' ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega-Menu Dropdown: Connectivity */}
              {activeMenu === 'connectivity' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] rounded-2xl glass-panel bg-[#060B18]/95 border border-brand-blue/30 shadow-2xl p-6 grid grid-cols-12 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Left Column: Flagship Highlight */}
                  <div className="col-span-5 bg-gradient-to-br from-brand-blue/20 via-brand-slate/60 to-brand-cyan/10 rounded-xl p-5 border border-brand-cyan/20 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs font-semibold mb-3 border border-brand-cyan/30">
                        <Sparkles className="w-3.5 h-3.5" /> Flagship Managed Mesh
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">NetConnect™ Architecture</h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        Zero-touch, unified connectivity combining Tier-1 dedicated internet, private MPLS WAN, and cloud SASE security in a single sovereign contract.
                      </p>
                      <div className="space-y-1.5 text-xs text-brand-cyan font-medium">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span> Symmetrical 1Gbps – 100Gbps
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span> 99.999% SLA Guarantee
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => scrollToSection('netconnect')}
                      className="mt-5 w-full py-2 px-3 rounded-lg bg-brand-blue hover:bg-brand-blueHover text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-glow-blue"
                    >
                      <span>Explore NetConnect</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Right Column: Menu Categories */}
                  <div className="col-span-7 space-y-4">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-brand-cyan" /> Dedicated Internet Access (DIA)
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          onClick={() => scrollToSection('connectivity-tabs')}
                          className="text-left p-2 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="text-xs font-semibold text-white group-hover:text-brand-cyan">Enterprise Ethernet DIA</div>
                          <div className="text-[11px] text-slate-400">1:1 uncontended optical bearer</div>
                        </button>
                        <button 
                          onClick={() => scrollToSection('connectivity-tabs')}
                          className="text-left p-2 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="text-xs font-semibold text-white group-hover:text-brand-cyan">Business Broadband FTTP</div>
                          <div className="text-[11px] text-slate-400">Up to 1Gbps ultrafast fiber</div>
                        </button>
                        <button 
                          onClick={() => scrollToSection('connectivity-tabs')}
                          className="text-left p-2 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="text-xs font-semibold text-white group-hover:text-brand-cyan">4G/5G Enterprise Failover</div>
                          <div className="text-[11px] text-slate-400">Zero-downtime cellular backup</div>
                        </button>
                        <button 
                          onClick={() => scrollToSection('connectivity-tabs')}
                          className="text-left p-2 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="text-xs font-semibold text-white group-hover:text-brand-cyan">LEO Satellite Uplink</div>
                          <div className="text-[11px] text-slate-400">Off-grid UK enterprise coverage</div>
                        </button>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                        <Network className="w-3.5 h-3.5 text-brand-blue" /> Private WAN & SD-WAN
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          onClick={() => scrollToSection('connectivity-tabs')}
                          className="text-left p-2 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="text-xs font-semibold text-white group-hover:text-brand-cyan">MPLS & VPLS Core</div>
                          <div className="text-[11px] text-slate-400">Deterministic multi-site QoS</div>
                        </button>
                        <button 
                          onClick={() => scrollToSection('connectivity-tabs')}
                          className="text-left p-2 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="text-xs font-semibold text-white group-hover:text-brand-cyan">Point-to-Point Dark Fiber</div>
                          <div className="text-[11px] text-slate-400">Unmetered sub-millisecond pipe</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Mega-Menu Trigger */}
            <div className="relative">
              <button
                onClick={() => setActiveMenu(activeMenu === 'solutions' ? null : 'solutions')}
                className={`px-3 py-2 text-sm font-medium flex items-center gap-1.5 transition-colors rounded-lg ${
                  activeMenu === 'solutions' ? 'text-brand-cyan bg-white/5' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Solutions & Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega-Menu Dropdown: Solutions */}
              {activeMenu === 'solutions' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] rounded-2xl glass-panel bg-[#060B18]/95 border border-brand-cyan/30 shadow-2xl p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <button 
                    onClick={() => scrollToSection('solutions')}
                    className="p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-brand-cyan/20 transition-all text-left flex gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0 group-hover:shadow-glow-cyan">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">AI Infrastructure Security</div>
                      <div className="text-xs text-slate-400 mt-1">
                        Secure AI clusters, LLM data flows, automated DDoS scrubbing, and Zero Trust edge governance.
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={() => scrollToSection('solutions')}
                    className="p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-brand-cyan/20 transition-all text-left flex gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue shrink-0 group-hover:shadow-glow-blue">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">24/7 ATS Support Engineers</div>
                      <div className="text-xs text-slate-400 mt-1">
                        Direct Tier-3 network architect access with &lt;15 minute SLA response without call center queues.
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={() => scrollToSection('solutions')}
                    className="p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-brand-cyan/20 transition-all text-left flex gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:shadow-glow-emerald">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">Monitoring & Telemetry</div>
                      <div className="text-xs text-slate-400 mt-1">
                        Millisecond telemetry streaming, proactive packet health, and autonomous BGP route optimization.
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={() => scrollToSection('solutions')}
                    className="p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-brand-cyan/20 transition-all text-left flex gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">Hardware Procurement</div>
                      <div className="text-xs text-slate-400 mt-1">
                        Global enterprise supply: Cisco, Juniper, Fortinet routers & optics pre-staged for immediate rollout.
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('noc-status')}
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              NOC Status
            </button>

            <button 
              onClick={() => scrollToSection('insights')}
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Insights
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPortal}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-all flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Customer Portal</span>
            </button>

            <button
              onClick={() => scrollToSection('checker')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-cyan text-white text-xs font-bold tracking-wide shadow-glow-blue transition-all duration-300 flex items-center gap-1.5 group"
            >
              <span>Check Availability</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 lg:hidden"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="lg:hidden px-4 pb-6 pt-2 border-t border-white/10 space-y-3 bg-[#060B18]/98 rounded-b-2xl animate-in slide-in-from-top-2 duration-200">
            <button 
              onClick={() => scrollToSection('hero')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm text-slate-300 hover:bg-white/5"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm text-slate-300 hover:bg-white/5"
            >
              About Us
            </button>

            {/* Mobile Connectivity Accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'connectivity' ? null : 'connectivity')}
                className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm text-white font-semibold hover:bg-white/5"
              >
                <span>Connectivity Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'connectivity' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'connectivity' && (
                <div className="pl-4 space-y-1.5 py-2 border-l border-brand-cyan/20 ml-3">
                  <button onClick={() => scrollToSection('netconnect')} className="w-full text-left text-xs text-brand-cyan py-1 hover:text-white">
                    ★ NetConnect Flagship Mesh
                  </button>
                  <button onClick={() => scrollToSection('connectivity-tabs')} className="w-full text-left text-xs text-slate-300 py-1 hover:text-white">
                    Dedicated Internet Access (DIA)
                  </button>
                  <button onClick={() => scrollToSection('connectivity-tabs')} className="w-full text-left text-xs text-slate-300 py-1 hover:text-white">
                    MPLS & SD-WAN Interconnect
                  </button>
                  <button onClick={() => scrollToSection('connectivity-tabs')} className="w-full text-left text-xs text-slate-300 py-1 hover:text-white">
                    Dark Fiber Point-to-Point
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Solutions Accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'solutions' ? null : 'solutions')}
                className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm text-white font-semibold hover:bg-white/5"
              >
                <span>Solutions & 24/7 ATS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'solutions' && (
                <div className="pl-4 space-y-1.5 py-2 border-l border-brand-blue/20 ml-3">
                  <button onClick={() => scrollToSection('solutions')} className="w-full text-left text-xs text-slate-300 py-1 hover:text-white">
                    AI Security & Sovereign Cloud
                  </button>
                  <button onClick={() => scrollToSection('solutions')} className="w-full text-left text-xs text-slate-300 py-1 hover:text-white">
                    24/7 Advanced Technical Support (ATS)
                  </button>
                  <button onClick={() => scrollToSection('noc-status')} className="w-full text-left text-xs text-slate-300 py-1 hover:text-white">
                    Network Telemetry & Operations
                  </button>
                  <button onClick={() => scrollToSection('solutions')} className="w-full text-left text-xs text-slate-300 py-1 hover:text-white">
                    Hardware Procurement (Cisco/Juniper)
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('noc-status')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm text-slate-300 hover:bg-white/5"
            >
              NOC Status
            </button>

            <button 
              onClick={() => scrollToSection('insights')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm text-slate-300 hover:bg-white/5"
            >
              Insights & Whitepapers
            </button>

            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={() => { setMobileOpen(false); onOpenPortal(); }}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-brand-cyan" />
                Customer Portal Login
              </button>
              <button
                onClick={() => scrollToSection('checker')}
                className="w-full py-3 rounded-xl bg-brand-blue text-white text-xs font-bold shadow-glow-blue flex items-center justify-center gap-2"
              >
                Check Site Fiber Readiness
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

