import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Activity, 
  ShieldCheck, 
  Wifi, 
  Radio, 
  Server, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Cpu, 
  Network 
} from 'lucide-react';

import NetworkGlobe from './NetworkGlobe';
import heroWomanImg from '../../assets/hero/hero-professional-woman.jpg';

export default function HeroVisual({ isVariant2 = false, showGlobe = false }) {
  const [activePort, setActivePort] = useState(1);

  // Home Page 2 Variant: 3D Translucent Network Globe as primary visual with 4 floating stat cards
  if (isVariant2) {
    return (
      <div className="relative w-full max-w-[500px] lg:max-w-[560px] aspect-square mx-auto flex items-center justify-center p-2 sm:p-4 select-none">
        
        {/* Background Decorative Radial Mesh Glows for Light Theme */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] lg:w-[540px] h-[340px] sm:h-[460px] lg:h-[540px] bg-gradient-to-tr from-blue-400/20 via-cyan-400/20 to-teal-400/15 rounded-full blur-[100px] pointer-events-none -z-20"></div>

        {/* 1. Primary Central Element: 3D Wireframe Network Globe (450–550px desktop) */}
        <div className="relative z-0 flex items-center justify-center">
          <NetworkGlobe className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px]" />
        </div>

        {/* 2. Floating Stat Card 1: Ultra-Low Latency (Top Left) */}
        <motion.div
          initial={{ opacity: 0, x: -24, y: -16 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute -top-3 sm:top-2 -left-2 sm:-left-4 lg:-left-6 z-20"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_14px_32px_-4px_rgba(15,23,42,0.12),0_2px_6px_0_rgba(15,23,42,0.04)] flex items-center gap-3 text-left"
          >
            <div className="flex h-3 w-3 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-900 tracking-wide">Latency: &lt; 4ms</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-50 text-cyan-700 font-semibold border border-cyan-200">
                  PURE FIBER
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">Pure Fiber Leased Line (1:1 DIA)</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 5. Floating Stat Card 4: Active Redundancy (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, x: 24, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="absolute -bottom-4 sm:bottom-0 -right-2 sm:-right-4 lg:-right-6 z-20"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-200 shadow-[0_16px_36px_-6px_rgba(15,23,42,0.12),0_2px_8px_0_rgba(16,185,129,0.08)] flex items-center gap-3 text-left"
          >
            <div className="flex h-3.5 w-3.5 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900">Active Redundancy: 100% Failover Safe</span>
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                <span>Dual-Bearer Hitless BGP</span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-600 font-mono font-bold">Zero Packet Drop</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    );
  }

  // Home Page 1 Hero Visual: Modern Photo of Girl on Laptop with Enterprise Metric Overlays
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto flex items-center justify-center p-2 sm:p-4 select-none">
      
      {/* Background Decorative Radial Mesh Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] bg-[#0846E7]/12 rounded-full blur-[110px] pointer-events-none -z-10"></div>
      <div className="absolute top-8 right-8 w-60 h-60 bg-blue-400/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>

      {/* Floating Glass Metric Badge 1: Ultra-Low Latency (Top Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute -top-5 sm:top-2 left-0 sm:-left-6 z-20"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_14px_32px_-4px_rgba(15,23,42,0.12),0_2px_6px_0_rgba(15,23,42,0.03)] flex items-center gap-3 text-left"
        >
          <div className="flex h-3 w-3 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0846E7] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0846E7]"></span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-900 tracking-wide">Latency: &lt; 4ms</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#0846E7]/10 text-[#0846E7] font-semibold border border-[#0846E7]/30">
                PURE FIBER
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium">1:1 Dedicated Leased Line</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Glass Metric Badge 2: Active Redundancy (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute -bottom-6 sm:bottom-0 right-0 sm:-right-4 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-200 shadow-[0_16px_36px_-6px_rgba(15,23,42,0.14),0_2px_8px_0_rgba(16,185,129,0.08)] flex items-center gap-3 text-left"
        >
          <div className="flex h-3.5 w-3.5 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900">Active Redundancy: 100% Failover Safe</span>
            </div>
            <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
              <span>Dual-Bearer Hitless BGP</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-600 font-mono font-bold">Zero Packet Drop</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Central Modern Framed Card with Girl on Laptop */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full rounded-3xl overflow-hidden bg-white/90 backdrop-blur-2xl border-2 border-white/90 shadow-[0_25px_60px_-12px_rgba(8,70,231,0.22),0_4px_16px_rgba(15,23,42,0.08)] group"
      >
        {/* Subtle top ambient indicator bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0846E7] via-blue-500 to-cyan-400 z-10"></div>

        {/* Hero Image */}
        <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/12]">
          <img 
            src={heroWomanImg} 
            alt="Enterprise business professional working seamlessly with high-performance leased line and broadband connectivity" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
          />

          {/* Gentle cinematic lighting overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>

          {/* Live Network Online Status Pill (Top Right on Image) */}
          <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-mono font-bold tracking-wide">100Gbps UK Core Online</span>
          </div>

          {/* Speed Indicator Badge (Bottom Left on Image) */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 text-white">
            <div className="w-9 h-9 rounded-xl bg-[#0846E7]/80 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-md">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold leading-tight drop-shadow-sm">Symmetrical Gigabit Fiber</div>
              <div className="text-[10px] text-slate-300 font-medium">99.999% Core Network Availability</div>
            </div>
          </div>
        </div>

        {/* Micro-Metrics Bar Beneath Image */}
        <div className="p-3.5 sm:p-4 bg-white/95 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-2 text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-[#0846E7]" />
            <span className="font-semibold text-slate-900">Uncontended 1:1 Bandwidth</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px]">
            <Activity className="w-3.5 h-3.5 text-[#0846E7]" />
            <span>&lt;4ms Mean Latency</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
