import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Network, 
  Cloud, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Server
} from 'lucide-react';

export default function ServicesSection({ onOpenSurvey, onOpenContact, theme = "light" }) {
  const isDark = theme === "dark";
  const services = [
    {
      id: "internet",
      title: "Internet for Your Sites",
      description: "Reliable primary and backup internet for offices, warehouses and operational locations.",
      icon: Globe,
      color: "blue",
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200/80",
      topBar: "from-blue-600 via-cyan-400 to-blue-500",
      hoverBorder: "hover:border-blue-300",
      hoverShadow: "hover:shadow-[0_24px_50px_-12px_rgba(0,102,255,0.18)]",
      badge: "Pure Symmetrical Fiber",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200/70",
      subServices: [
        "Leased Lines",
        "DIA",
        "Ethernet",
        "Broadband",
        "Wireless"
      ]
    },
    {
      id: "connect-locations",
      title: "Connect Your Locations",
      description: "Securely connect offices, sites, data centres and users across one network.",
      icon: Network,
      color: "cyan",
      gradient: "from-cyan-500 via-teal-500 to-emerald-500",
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200/80",
      topBar: "from-cyan-500 via-teal-400 to-emerald-400",
      hoverBorder: "hover:border-cyan-300",
      hoverShadow: "hover:shadow-[0_24px_50px_-12px_rgba(0,210,255,0.18)]",
      badge: "Zero-Trust Fabric",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200/70",
      subServices: [
        "SD-WAN",
        "MPLS",
        "Private WAN",
        "Point-to-Point"
      ]
    },
    {
      id: "cloud-dc",
      title: "Cloud & Data Centre",
      description: "Private, high-performance access into cloud platforms, colocation and critical infrastructure.",
      icon: Cloud,
      color: "indigo",
      gradient: "from-indigo-600 via-blue-600 to-cyan-400",
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
      topBar: "from-indigo-600 via-purple-500 to-blue-500",
      hoverBorder: "hover:border-indigo-300",
      hoverShadow: "hover:shadow-[0_24px_50px_-12px_rgba(99,102,241,0.18)]",
      badge: "Direct Interconnect",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/70",
      subServices: [
        "Azure",
        "AWS",
        "Cloud On-Ramps",
        "Colocation",
        "DCI"
      ]
    }
  ];

  return (
    <section 
      id="services" 
      className={`relative py-20 sm:py-24 lg:py-28 overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-[#060A14] via-[#0A1628] to-[#0E2A4A] border-y border-cyan-500/20 text-white' 
          : 'bg-white text-slate-800 border-b border-slate-200/70'
      }`}
      aria-label="Optimus Networks Enterprise Networking Services"
    >
      {/* Decorative Subtle Background Glows (Strictly Contained) */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none -z-10 ${
        isDark ? 'bg-gradient-to-r from-blue-500/20 via-cyan-400/15 to-transparent' : 'bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-transparent'
      }`}></div>
      <div className={`absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none -z-10 ${
        isDark ? 'bg-teal-500/15' : 'bg-teal-400/5'
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
                : 'bg-blue-50/90 border border-blue-200/80 text-blue-700'
            }`}
          >
            <span className="flex h-2 w-2 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isDark ? 'bg-cyan-400' : 'bg-blue-500'
              }`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                isDark ? 'bg-cyan-400' : 'bg-blue-600'
              }`}></span>
            </span>
            <span className={`text-xs font-bold tracking-wide uppercase ${
              isDark ? 'text-cyan-300' : 'text-blue-700'
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
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Everything You Need to Stay{" "}
            <span className={`bg-clip-text text-transparent ${
              isDark 
                ? 'bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300' 
                : 'bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500'
            }`}>
              Connected
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal ${
              isDark ? 'text-slate-300/85' : 'text-slate-500'
            }`}
          >
            From site connectivity to cloud access — end-to-end networking solutions built around your business.
          </motion.p>
        </div>

        {/* 3-Column Service Cards Grid */}
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
                className={`group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden text-left ${
                  isDark 
                    ? 'bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-400/60 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(0,210,255,0.22)]' 
                    : `bg-gradient-to-b from-slate-50/70 to-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] ${service.hoverShadow} ${service.hoverBorder}`
                }`}
                onClick={onOpenContact}
              >
                {/* Glowing Top Ambient Accent Bar on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.topBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Subtle Radial Ambient Hover Sheen */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  isDark ? 'bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent' : 'bg-gradient-to-br from-blue-400/10 via-cyan-400/5 to-transparent'
                }`}></div>

                {/* Upper Content Block */}
                <div className="space-y-6">
                  
                  {/* Icon & Category Badge Row */}
                  <div className="flex items-center justify-between">
                    {/* Animated Icon Box with Idle Float */}
                    <motion.div 
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 ${
                        isDark 
                          ? 'bg-blue-500/10 text-cyan-300 border-cyan-400/30 shadow-[0_0_15px_rgba(0,210,255,0.2)]' 
                          : service.iconBg
                      }`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </motion.div>

                    {/* Architectural Feature Pill */}
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs ${
                      isDark 
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30' 
                        : service.badgeColor
                    }`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className={`text-xl sm:text-2xl font-bold transition-colors leading-tight ${
                      isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-blue-600'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed font-normal ${
                      isDark ? 'text-slate-300/90' : 'text-slate-600'
                    }`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Sub-services Tag Chips */}
                  <div className="pt-2">
                    <div className={`text-[11px] font-bold uppercase tracking-wider mb-2.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-400'
                    }`}>
                      Included Capabilities:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.subServices.map((sub) => (
                        <span
                          key={sub}
                          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 shadow-2xs border ${
                            isDark 
                              ? 'bg-white/[0.06] group-hover:bg-cyan-500/15 text-slate-200 group-hover:text-cyan-200 border-white/10 group-hover:border-cyan-400/40' 
                              : 'bg-slate-50 group-hover:bg-blue-50/60 text-slate-700 group-hover:text-blue-700 border-slate-200/80 group-hover:border-blue-200'
                          }`}
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Footer: "Learn More" Link with Arrow Animation */}
                <div className={`pt-8 mt-6 border-t flex items-center justify-between ${
                  isDark ? 'border-white/10' : 'border-slate-100'
                }`}>
                  <span className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${
                    isDark ? 'text-slate-200 group-hover:text-cyan-300' : 'text-slate-800 group-hover:text-blue-600'
                  }`}>
                    <span>Explore Solutions</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 ${
                      isDark ? 'text-cyan-400' : 'text-blue-600'
                    }`} />
                  </span>

                  <span className={`text-[11px] font-semibold transition-colors ${
                    isDark ? 'text-slate-400 group-hover:text-slate-200' : 'text-slate-400 group-hover:text-slate-600'
                  }`}>
                    99.999% SLA
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
              : 'bg-white border border-slate-200/90 text-slate-600'
          }`}>
            <div className="flex items-center gap-2">
              <Sparkles className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                Require a custom multi-carrier or dark fiber network design?
              </span>
            </div>
            <button
              type="button"
              onClick={onOpenSurvey}
              className={`font-bold underline underline-offset-4 transition-colors ${
                isDark 
                  ? 'text-cyan-300 hover:text-white decoration-cyan-400/50' 
                  : 'text-blue-600 hover:text-blue-700 decoration-blue-300'
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

