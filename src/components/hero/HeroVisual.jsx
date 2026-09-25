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

  // Original Home Page 1 Hero Visual (Unchanged)
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto flex items-center justify-center p-2 sm:p-4 select-none">
      
      {/* Network Globe Visual (Home Page 2) */}
      {showGlobe && <NetworkGlobeVisual />}

      {/* Background Decorative Radial Mesh Glows for Light Theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] bg-gradient-to-tr from-blue-400/15 via-cyan-400/20 to-teal-400/15 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-200/30 rounded-full blur-[80px] pointer-events-none -z-10"></div>

      {/* Floating Glass Metric Badge B: Ultra-Low Latency */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute -top-4 sm:top-2 left-0 sm:-left-6 z-20"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.1),0_2px_6px_0_rgba(15,23,42,0.03)] flex items-center gap-3 text-left"
        >
          <div className="flex h-3 w-3 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
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

      {/* Floating Glass Metric Badge A: Active Redundancy */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute -bottom-6 sm:bottom-0 right-0 sm:-right-4 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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

      {/* Central High-Tech Hub Terminal in Light Theme */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full aspect-square max-w-[420px] rounded-3xl bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-[0_24px_60px_-12px_rgba(15,23,42,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset] p-5 sm:p-6 overflow-hidden flex flex-col justify-between"
      >
        {/* Subtle dot matrix pattern */}
        <div 
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.15) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient Top Glow Bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-cyan-400"></div>

        {/* Terminal Header Bar */}
        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-mono font-bold text-slate-800">OPTIMUS-EDGE-ROUTER</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
            <Activity className="w-3 h-3 text-blue-600" />
            <span>100Gbps Mesh Online</span>
          </div>
        </div>

        {/* Center Graphic: 3D/Isometric Router Node & Fiber Wavelength Beams */}
        <div className="relative z-10 my-auto py-6 flex items-center justify-center">
          {/* Concentric Wave Rings */}
          <div className="absolute w-64 h-64 rounded-full border border-blue-200/60 animate-ping opacity-25 pointer-events-none"></div>
          <div className="absolute w-52 h-52 rounded-full border border-cyan-300/40 animate-pulse-slow pointer-events-none"></div>
          <div className="absolute w-40 h-40 rounded-full border border-emerald-300/40 pointer-events-none"></div>

          {/* SVG Multi-Stream Fiber Optic Vectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300" fill="none">
            <defs>
              <linearGradient id="fiberGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0066FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#00A3E0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Bezier Fiber Data Paths */}
            <path d="M 20,60 C 120,40 160,150 200,150 C 240,150 280,240 380,240" stroke="url(#fiberGradLight)" strokeWidth="2.5" strokeDasharray="6 4" className="animate-pulse" />
            <path d="M 20,240 C 100,220 150,150 200,150 C 250,150 300,60 380,60" stroke="#00A3E0" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M 200,20 L 200,280" stroke="#0066FF" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
          </svg>

          {/* Core Hardware Router / POS Hub Emblem in Light Theme */}
          <div className="relative w-28 h-28 rounded-2xl bg-white border-2 border-blue-400/60 shadow-[0_10px_25px_-5px_rgba(0,102,255,0.25),0_0_20px_rgba(0,180,255,0.2)] flex flex-col items-center justify-center p-3 group cursor-pointer hover:border-blue-500 transition-colors">
            {/* Inner Core Icon */}
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
              <Server className="w-6 h-6 animate-pulse" />
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-800 mt-2">MULTI-BEARER HUB</span>
            <span className="text-[8px] font-mono text-emerald-600 font-bold">DUAL ACTIVE-ACTIVE</span>
          </div>
        </div>

        {/* Lower Interface Matrix */}
        <div className="relative z-10 pt-3 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>WAN FAILOVER MATRIX</span>
            <span className="text-emerald-600 font-semibold">SYNCHRONIZED</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {/* Link 1: Primary Fiber */}
            <div 
              onClick={() => setActivePort(1)}
              className={`p-2 rounded-xl border text-left cursor-pointer transition-all ${
                activePort === 1 
                  ? 'bg-blue-50/90 border-blue-400/70 shadow-xs' 
                  : 'bg-slate-50/60 border-slate-200/60 hover:bg-slate-100/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-900">WAN-1</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="text-[10px] text-slate-600 font-medium">Fiber Leased</div>
              <div className="text-[9px] font-mono text-blue-600 font-bold">10 Gbps DIA</div>
            </div>

            {/* Link 2: Secondary Route */}
            <div 
              onClick={() => setActivePort(2)}
              className={`p-2 rounded-xl border text-left cursor-pointer transition-all ${
                activePort === 2 
                  ? 'bg-blue-50/90 border-blue-400/70 shadow-xs' 
                  : 'bg-slate-50/60 border-slate-200/60 hover:bg-slate-100/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-900">WAN-2</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="text-[10px] text-slate-600 font-medium">SD-WAN Mesh</div>
              <div className="text-[9px] font-mono text-blue-600 font-bold">Diverse Path</div>
            </div>

            {/* Link 3: 5G Backup */}
            <div 
              onClick={() => setActivePort(3)}
              className={`p-2 rounded-xl border text-left cursor-pointer transition-all ${
                activePort === 3 
                  ? 'bg-blue-50/90 border-blue-400/70 shadow-xs' 
                  : 'bg-slate-50/60 border-slate-200/60 hover:bg-slate-100/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-900">5G-CELL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
              </div>
              <div className="text-[10px] text-slate-600 font-medium">Fast-Deploy</div>
              <div className="text-[9px] font-mono text-cyan-600 font-bold">Auto Standby</div>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
