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

export default function ServicesSection({ onOpenSurvey, onOpenContact }) {
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
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-white text-slate-800 border-b border-slate-200/70"
      aria-label="Optimus Networks Enterprise Networking Services"
    >
      {/* Decorative Subtle Background Glows (Strictly Contained) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-teal-400/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          
          {/* Eyebrow Pill Badge: "● Our Services" */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 backdrop-blur-md shadow-xs mb-4"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">
              Our Services
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
          >
            Everything You Need to Stay{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
              Connected
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal"
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
                className={`group relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-slate-50/70 to-white/95 backdrop-blur-xl border border-slate-200/90 p-7 sm:p-8 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] ${service.hoverShadow} ${service.hoverBorder} hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden text-left`}
                onClick={onOpenContact}
              >
                {/* Glowing Top Ambient Accent Bar on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.topBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Subtle Radial Ambient Hover Sheen */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-400/10 via-cyan-400/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Upper Content Block */}
                <div className="space-y-6">
                  
                  {/* Icon & Category Badge Row */}
                  <div className="flex items-center justify-between">
                    {/* Animated Icon Box with Idle Float */}
                    <motion.div 
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 ${service.iconBg}`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </motion.div>

                    {/* Architectural Feature Pill */}
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Sub-services Tag Chips */}
                  <div className="pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Included Capabilities:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.subServices.map((sub, sIndex) => (
                        <span
                          key={sub}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-50 group-hover:bg-blue-50/60 text-slate-700 group-hover:text-blue-700 border border-slate-200/80 group-hover:border-blue-200 transition-all duration-200 shadow-2xs"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Footer: "Learn More" Link with Arrow Animation */}
                <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>

                  <span className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-slate-800">
                Require a custom multi-carrier or dark fiber network design?
              </span>
            </div>
            <button
              type="button"
              onClick={onOpenSurvey}
              className="font-bold text-blue-600 hover:text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors"
            >
              Request Carrier Feasibility Assessment &rarr;
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

