import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Network, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Activity,
  ShieldCheck,
  Server
} from 'lucide-react';

export default function ServicesSection({ onOpenSurvey, onOpenContact, theme = "light", isHomePage1 = false }) {
  const isDark = theme === "dark";

  const services = [
    {
      id: "business-broadband",
      title: "Business Broadband",
      badge: "FTTP & SoGEA",
      status: "Priority Uncontended",
      description: "Enterprise-grade business broadband engineered for zero peak-time throttling. Enjoy high-speed symmetrical throughput, dedicated static IPs, and seamless cellular backup.",
      icon: Wifi,
      metrics: [
        { label: "Throughput", value: "Up to 1Gbps" },
        { label: "Routing", value: "Priority 1:1" }
      ],
      subServices: [
        "Ultrafast FTTP & SoGEA",
        "Static IPv4 / IPv6 Assigned",
        "Rapid 4G/5G Cellular Backup",
        "24/7 UK Technical Support"
      ],
      sla: "99.99% Availability",
      topBar: "from-blue-500 via-[#0846E7] to-cyan-400",
      glowBg: "rgba(8, 70, 231, 0.08)",
      svgPattern: (
        <svg className="w-full h-full opacity-[0.06] group-hover:opacity-[0.14] transition-opacity duration-500" viewBox="0 0 160 160" fill="none">
          <circle cx="160" cy="0" r="140" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="160" cy="0" r="105" stroke="currentColor" strokeWidth="2" />
          <circle cx="160" cy="0" r="70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="160" cy="0" r="35" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: "leased-lines",
      title: "Leased Lines",
      badge: "Dedicated 1:1 DIA",
      status: "99.999% Core SLA",
      description: "Dedicated uncontended gigabit fiber optic circuit delivered straight into your premises. Guaranteed symmetrical speeds backed by a 4-hour Mean Time to Repair guarantee.",
      icon: Network,
      metrics: [
        { label: "Capacity", value: "100Mbps – 10Gbps+" },
        { label: "Fix SLA", value: "4-Hour MTTR" }
      ],
      subServices: [
        "Pure 1:1 Uncontended Circuit",
        "Symmetrical Up / Down Speeds",
        "Legally Binding 99.999% SLA",
        "Cisco & Fortinet Hardware"
      ],
      sla: "99.999% SLA (4h MTTR)",
      topBar: "from-cyan-400 via-blue-600 to-indigo-600",
      glowBg: "rgba(6, 182, 212, 0.08)",
      svgPattern: (
        <svg className="w-full h-full opacity-[0.06] group-hover:opacity-[0.14] transition-opacity duration-500" viewBox="0 0 160 160" fill="none">
          <path d="M 0,40 L 160,40 M 0,80 L 160,80 M 0,120 L 160,120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" />
          <path d="M 40,0 L 40,160 M 80,0 L 80,160 M 120,0 L 120,160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" />
          <circle cx="80" cy="80" r="18" fill="currentColor" fillOpacity="0.15" />
        </svg>
      )
    },
    {
      id: "connectivity",
      title: "Connectivity",
      badge: "SD-WAN & Multi-Site",
      status: "Multi-Carrier Redundant",
      description: "Intelligent hybrid WAN architecture seamlessly connecting branches, remote offices, data centres, and cloud providers with automated hitless failover and zero packet loss.",
      icon: Layers,
      metrics: [
        { label: "Failover", value: "Hitless <50ms" },
        { label: "Coverage", value: "99.2% UK National" }
      ],
      subServices: [
        "Managed SD-WAN & MPLS Fabric",
        "Direct AWS & Azure Cloud Ramps",
        "Carrier-Diverse Failover Routing",
        "Centralized Zero-Trust Security"
      ],
      sla: "Hitless Failover Safe",
      topBar: "from-indigo-500 via-blue-500 to-teal-400",
      glowBg: "rgba(99, 102, 241, 0.08)",
      svgPattern: (
        <svg className="w-full h-full opacity-[0.06] group-hover:opacity-[0.14] transition-opacity duration-500" viewBox="0 0 160 160" fill="none">
          <polygon points="80,15 145,55 145,125 80,155 15,125 15,55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
          <line x1="80" y1="15" x2="80" y2="155" stroke="currentColor" strokeWidth="1.5" />
          <line x1="15" y1="55" x2="145" y2="125" stroke="currentColor" strokeWidth="1.5" />
          <line x1="15" y1="125" x2="145" y2="55" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="services" 
      className={`relative py-20 sm:py-24 lg:py-28 overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-[#060A14] via-[#0A1628] to-[#0E2A4A] border-y border-cyan-500/20 text-white' 
          : isHomePage1
          ? 'bg-[#0846E7] border-y border-blue-400/30 text-white'
          : 'bg-white text-slate-800 border-b border-slate-200/70'
      }`}
      aria-label="Optimus Networks Enterprise Networking Services"
    >
      {/* Decorative Subtle Background Glows */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none -z-10 ${
        isDark ? 'bg-gradient-to-r from-blue-500/20 via-cyan-400/15 to-transparent' : isHomePage1 ? 'bg-white/10' : 'bg-[#0846E7]/5'
      }`}></div>
      <div className={`absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none -z-10 ${
        isDark ? 'bg-teal-500/15' : isHomePage1 ? 'bg-white/5' : 'bg-[#0846E7]/5'
      }`}></div>

      {isDark && (
        <div className="absolute inset-0 tech-grid-dark opacity-10 pointer-events-none"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          
          {/* Eyebrow Pill Badge: "● Our Services" */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs mb-4 ${
              isDark 
                ? 'bg-cyan-500/10 border border-cyan-400/30 text-cyan-300' 
                : isHomePage1
                ? 'bg-white/15 border border-white/25 text-white'
                : 'bg-[#0846E7]/10 border border-[#0846E7]/25 text-[#0846E7]'
            }`}
          >
            <span className="flex h-2 w-2 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isDark ? 'bg-cyan-400' : isHomePage1 ? 'bg-white' : 'bg-[#0846E7]'
              }`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                isDark ? 'bg-cyan-400' : isHomePage1 ? 'bg-white' : 'bg-[#0846E7]'
              }`}></span>
            </span>
            <span className={`text-xs font-bold tracking-wide uppercase ${
              isDark ? 'text-cyan-300' : isHomePage1 ? 'text-white' : 'text-[#0846E7]'
            }`}>
              Our Services
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] ${
              isDark || isHomePage1 ? 'text-white' : 'text-slate-900'
            }`}
          >
            Everything You Need to Stay{" "}
            {isDark ? (
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                Connected
              </span>
            ) : isHomePage1 ? (
              <span className="text-white underline decoration-white/30">
                Connected
              </span>
            ) : (
              <span className="text-[#0846E7]">
                Connected
              </span>
            )}
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal ${
              isDark ? 'text-slate-300/85' : isHomePage1 ? 'text-white/85' : 'text-slate-500'
            }`}
          >
            From site connectivity to cloud access — end-to-end networking solutions built around your business.
          </motion.p>
        </div>

        {/* 3-Column Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 items-stretch">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 hover:-translate-y-2.5 transition-all duration-300 cursor-pointer overflow-hidden text-left ${
                  isDark 
                    ? 'bg-slate-900/70 backdrop-blur-xl border border-white/10 hover:border-cyan-400/60 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(0,210,255,0.22)]' 
                    : isHomePage1
                    ? 'bg-white text-slate-800 border border-white/60 shadow-[0_20px_50px_-10px_rgba(0,18,80,0.25)] hover:shadow-[0_30px_70px_-10px_rgba(0,18,80,0.38)] hover:border-white'
                    : 'bg-white border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] hover:border-[#0846E7]/50 hover:shadow-[0_24px_50px_-12px_rgba(8,70,231,0.18)]'
                }`}
                onClick={onOpenContact}
              >
                {/* Glowing Top Ambient Accent Bar with Smooth Gradient Animation */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 ${
                  isDark 
                    ? `bg-gradient-to-r ${service.topBar}` 
                    : 'bg-gradient-to-r from-[#0846E7] via-blue-500 to-cyan-400'
                }`}></div>

                {/* Top-Right Decorative Circuit/Vector Pattern */}
                <div className="absolute top-0 right-0 w-36 h-36 overflow-hidden pointer-events-none text-slate-900">
                  {service.svgPattern}
                </div>

                {/* Subtle Radial Ambient Hover Sheen */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  isDark ? 'bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent' : 'bg-[#0846E7]/10'
                }`}></div>

                {/* Upper Content Block */}
                <div className="space-y-5 relative z-10">
                  
                  {/* Icon & Live Status Badge Row */}
                  <div className="flex items-center justify-between">
                    {/* Animated Icon Box with Idle Float & Hover Micro-Bounce */}
                    <motion.div 
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 ${
                        isDark 
                          ? 'bg-blue-500/10 text-cyan-300 border-cyan-400/30 shadow-[0_0_15px_rgba(0,210,255,0.2)]' 
                          : 'bg-[#0846E7]/10 text-[#0846E7] border border-[#0846E7]/25'
                      }`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </motion.div>

                    {/* Live Active Status Pill */}
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs ${
                      isDark 
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30' 
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>{service.status}</span>
                    </span>
                  </div>

                  {/* Category Pill + Title + Description */}
                  <div className="space-y-2">
                    <span className={`inline-block text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-md ${
                      isDark 
                        ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/40' 
                        : 'text-[#0846E7] bg-[#0846E7]/10 border border-[#0846E7]/20'
                    }`}>
                      {service.badge}
                    </span>

                    <h3 className={`text-2xl sm:text-[1.65rem] font-extrabold tracking-tight transition-colors leading-tight ${
                      isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-[#0846E7]'
                    }`}>
                      {service.title}
                    </h3>

                    <p className={`text-sm sm:text-[15px] leading-relaxed font-normal ${
                      isDark ? 'text-slate-300/90' : 'text-slate-600'
                    }`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Key Metrics Dual Pill Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    {service.metrics.map((metric) => (
                      <div 
                        key={metric.label} 
                        className={`p-2.5 rounded-xl border transition-colors ${
                          isDark 
                            ? 'bg-white/[0.04] border-white/10 group-hover:border-cyan-400/30' 
                            : 'bg-slate-50/90 border-slate-200/80 group-hover:border-[#0846E7]/30'
                        }`}
                      >
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                          {metric.label}
                        </span>
                        <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Sub-services Tag Chips with Checkmarks */}
                  <div className="pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider mb-2.5 text-slate-400">
                      Enterprise Capabilities:
                    </div>
                    <div className="space-y-1.5">
                      {service.subServices.map((sub) => (
                        <div 
                          key={sub} 
                          className="flex items-center gap-2 text-xs font-medium text-slate-700 transition-colors"
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${
                            isDark ? 'text-cyan-400' : 'text-[#0846E7]'
                          }`} />
                          <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Footer: "Learn More" Link with Arrow Animation */}
                <div className={`pt-6 mt-6 border-t flex items-center justify-between relative z-10 ${
                  isDark ? 'border-white/10' : 'border-slate-100'
                }`}>
                  <span className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${
                    isDark ? 'text-slate-200 group-hover:text-cyan-300' : 'text-slate-800 group-hover:text-[#0846E7]'
                  }`}>
                    <span>Configure Service</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 ${
                      isDark ? 'text-cyan-400' : 'text-[#0846E7]'
                    }`} />
                  </span>

                  <span className={`text-[11px] font-semibold transition-colors ${
                    isDark ? 'text-slate-400 group-hover:text-slate-200' : 'text-slate-400 group-hover:text-slate-600'
                  }`}>
                    {service.sla}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Helper Callout for Bespoke Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 sm:mt-16 text-center"
        >
          <div className={`inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3.5 rounded-2xl shadow-xs text-xs sm:text-sm ${
            isDark 
              ? 'bg-slate-900/80 border border-white/10 text-slate-300' 
              : isHomePage1
              ? 'bg-white/15 backdrop-blur-md border border-white/25 text-white'
              : 'bg-white border border-slate-200/90 text-slate-600'
          }`}>
            <div className="flex items-center gap-2">
              <Sparkles className={`w-4 h-4 ${isDark ? 'text-cyan-400' : isHomePage1 ? 'text-white' : 'text-[#0846E7]'}`} />
              <span className={`font-semibold ${isDark || isHomePage1 ? 'text-white' : 'text-slate-800'}`}>
                Require a custom multi-carrier or dark fiber network design?
              </span>
            </div>
            <button
              type="button"
              onClick={onOpenSurvey}
              className={`font-bold underline underline-offset-4 transition-colors cursor-pointer ${
                isDark 
                  ? 'text-cyan-300 hover:text-white decoration-cyan-400/50' 
                  : isHomePage1
                  ? 'text-white hover:text-blue-100 decoration-white/60'
                  : 'text-[#0846E7] hover:text-[#0639BC] decoration-[#0846E7]/50'
              }`}
            >
              Request Carrier Feasibility Assessment &rarr;
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

