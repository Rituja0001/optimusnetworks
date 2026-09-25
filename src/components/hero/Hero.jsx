import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Activity, Cpu, Sparkles, Building2, Server, CheckCircle2 } from 'lucide-react';
import FiberCanvas from './FiberCanvas';

export default function Hero({ onOpenQuote, onExploreNetConnect }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden tech-grid tech-radial-glow">
      {/* Background Interactive Fiber Mesh */}
      <FiberCanvas />

      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Top Badge: Code Powers & Tier-1 Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-cyan/30 text-xs font-semibold text-brand-cyan shadow-glow-cyan"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            <span className="tracking-wide">UK Code Operator · Terabit Optical Core</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 font-normal">Next-Gen Dedicated Telecom</span>
          </motion.div>

          {/* Catchy Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
          >
            Mission-Critical <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
              Enterprise Connectivity
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-cyan to-blue-400">
              & Managed Infrastructure.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Optimus Networks engineers uncontended high-capacity Dedicated Internet Access (DIA), sovereign private WAN, and AI-governed edge security for British enterprises, financial institutions, and data centres.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={onExploreNetConnect}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-cyan text-white text-base font-bold shadow-glow-blue transition-all duration-300 flex items-center justify-center gap-2.5 group"
            >
              <Sparkles className="w-5 h-5 text-brand-cyan" />
              <span>Explore NetConnect™</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenQuote({ serviceType: 'Enterprise Architecture Consultation' })}
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel hover:bg-white/10 text-white text-base font-semibold border border-white/15 hover:border-brand-cyan/40 transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <span>Talk to Network Architect</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                15m SLA
              </span>
            </button>
          </motion.div>

          {/* Verification / Trust Accreditations row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
              <span>Direct Openreach & Neos Interconnects</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ISO 27001 & Cyber Essentials+</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-blue" />
              <span>UK Telecoms Security Act Ready</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Enterprise Stats & Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 max-w-5xl mx-auto rounded-2xl glass-panel bg-slate-900/70 border border-white/10 p-6 md:p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle light beam traversing */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Stat 1 */}
            <div className="text-center pt-3 md:pt-0">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-1">
                <span>99.999%</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-brand-cyan mt-1">SLA Uptime Commitment</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Backed by financial credits</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center pt-3 md:pt-0 md:pl-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-1">
                <span>&lt; 10ms</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-brand-cyan mt-1">Ultra-Low Latency Core</div>
              <div className="text-[11px] text-slate-400 mt-0.5">&lt;1.8ms London Metro Ring</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center pt-3 md:pt-0 md:pl-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-1">
                <span>24/7/365</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-brand-cyan mt-1">ATS Engineering NOC</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Direct Tier-3 engineer pickup</div>
            </div>

            {/* Stat 4 */}
            <div className="text-center pt-3 md:pt-0 md:pl-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-1">
                <span>100 Gbps</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-brand-cyan mt-1">Bearer Capacity Ready</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Terabit DWDM Optical Mesh</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

