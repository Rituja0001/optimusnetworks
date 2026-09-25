import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles,
  ShieldCheck, 
  Zap, 
  Network, 
  Cpu, 
  Cloud, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  Lock, 
  Workflow, 
  Sliders,
  Server
} from 'lucide-react';

export default function NetConnectShowcase({ onOpenQuote }) {
  const [activeFeature, setActiveFeature] = useState(0);

  const pillars = [
    {
      title: "Consolidated Sovereign Core",
      subtitle: "Tier-1 DIA + Private WAN + SASE Edge",
      desc: "Eliminate fractured multi-vendor telecom contracts. NetConnect synthesizes uncompressed Dedicated Internet Access with resilient MPLS / SD-WAN and native zero-trust cybersecurity under one SLA.",
      badge: "Sovereign UK Mesh"
    },
    {
      title: "Sub-Second Autonomous Failover",
      subtitle: "BGP Hitless Switching",
      desc: "If physical civil infrastructure is disrupted, NetConnect's optical packet steering shifts critical enterprise payloads to secondary dark fiber routes or encrypted 5G Millimeter Wave links in <50ms.",
      badge: "Hitless Switching"
    },
    {
      title: "Direct Multi-Cloud Interconnects",
      subtitle: "AWS, Azure UK South & GCP On-Ramps",
      desc: "Direct Layer 2 & Layer 3 fiber cross-connects bypass the public internet entirely into London Slough and Docklands cloud exchange fabrics with guaranteed jitter < 0.4ms.",
      badge: "Zero Public Transit"
    }
  ];

  return (
    <section id="netconnect" className="py-24 relative overflow-hidden bg-[#060B18]">
      {/* Glow highlight */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-semibold text-brand-cyan">
              <Sparkles className="w-3.5 h-3.5" /> Flagship Solution
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Meet NetConnect™ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                The All-In-One Enterprise Backbone.
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Designed for modern UK enterprise estates requiring zero-compromise bandwidth, deterministic latency, and automated edge protection without telecom complexity.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <button
              onClick={() => onOpenQuote({ serviceType: 'NetConnect Flagship Architecture' })}
              className="px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white text-sm font-bold shadow-glow-blue transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Request NetConnect Spec Sheet</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <span className="text-xs text-brand-muted">Average site deployment: 15 working days</span>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: Core Architecture (Large 8 cols) */}
          <div className="md:col-span-8 rounded-3xl glass-panel p-8 relative overflow-hidden group border border-white/10 hover:border-brand-blue/40 transition-all duration-500">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-blue/25 transition-all"></div>
            
            <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Uncontended 1:1 Bearer</span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active Mesh Core
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                  Single Fiber Interface. Multi-Dimensional Routing.
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
                  NetConnect delivers a single high-availability optical CPE into your communications rack, dynamically partitioned into unthrottled DIA, encrypted private WAN, and zero-latency cloud interconnects.
                </p>
              </div>

              {/* Interactive Architecture Schema Preview */}
              <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-5 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                  <span className="font-mono text-brand-cyan">NETCONNECT://LAYER-2/PHYSICAL-PORT</span>
                  <span className="text-emerald-400 font-semibold">100Gbps DWDM Active</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-brand-slate/80 border border-brand-blue/30 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">VLAN 10: DIA</span>
                      <Zap className="w-3.5 h-3.5 text-brand-cyan" />
                    </div>
                    <div className="text-[11px] text-slate-400">Unfiltered Tier-1 Internet</div>
                    <div className="text-xs font-mono text-brand-cyan font-semibold">10 Gbps Symmetrical</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-brand-slate/80 border border-brand-cyan/30 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">VLAN 20: WAN</span>
                      <Network className="w-3.5 h-3.5 text-brand-cyan" />
                    </div>
                    <div className="text-[11px] text-slate-400">Private MPLS / VPLS Mesh</div>
                    <div className="text-xs font-mono text-brand-cyan font-semibold">&lt;2ms Latency Ring</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-brand-slate/80 border border-purple-500/30 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">VLAN 30: Cloud</span>
                      <Cloud className="w-3.5 h-3.5 text-purple-400" />
                    </div>
                    <div className="text-[11px] text-slate-400">Direct Connect / ExpressRoute</div>
                    <div className="text-xs font-mono text-purple-400 font-semibold">Zero Egress Tolls</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div>
                  <div className="text-xs text-brand-muted">Packet Loss Guarantee</div>
                  <div className="text-base sm:text-lg font-bold text-white">&lt; 0.005%</div>
                </div>
                <div>
                  <div className="text-xs text-brand-muted">Target MTTR</div>
                  <div className="text-base sm:text-lg font-bold text-emerald-400">&lt; 4 Hours 24/7</div>
                </div>
                <div>
                  <div className="text-xs text-brand-muted">SLA Credit Protection</div>
                  <div className="text-base sm:text-lg font-bold text-white">100% Backed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Zero-Touch SASE Security (4 cols) */}
          <div className="md:col-span-4 rounded-3xl glass-panel p-8 flex flex-col justify-between border border-white/10 hover:border-brand-cyan/40 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/15 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-cyan/25 transition-all"></div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shadow-glow-cyan">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Integrated Edge Shield</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Zero-Touch SASE & Next-Gen Firewall
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Hardware acceleration blocks volumetric terabit DDoS attacks, decrypts malicious TLS streams, and enforces zero-trust access before malicious traffic penetrates your corporate LAN.
              </p>
            </div>

            <div className="space-y-2 pt-6">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Terabit-Scale Inline DDoS Scrubbing</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AI Anomaly & Ransomware Isolation</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Encrypted IPsec & MACsec at wire speed</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Interactive Pillar Tabs (Full 12 cols) */}
          <div className="md:col-span-12 rounded-3xl glass-panel p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeFeature === idx 
                      ? 'bg-slate-900/90 border-brand-cyan/50 shadow-glow-cyan' 
                      : 'bg-slate-950/40 border-white/5 hover:border-white/20 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">{pillar.badge}</span>
                    <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{pillar.title}</h4>
                  <div className="text-xs font-semibold text-slate-400 mb-2">{pillar.subtitle}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
