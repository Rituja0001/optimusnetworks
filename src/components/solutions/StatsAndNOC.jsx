import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Server, 
  Radio, 
  ArrowUpRight, 
  CheckCircle, 
  Cpu, 
  HardDrive, 
  Wifi, 
  RefreshCw,
  Zap,
  Globe2
} from 'lucide-react';

export default function StatsAndNOC() {
  const [lastRefreshed, setLastRefreshed] = useState('Just now');
  const [selectedExchange, setSelectedExchange] = useState('telehouse');
  const [simulatedPing, setSimulatedPing] = useState(1.1);

  const exchanges = {
    telehouse: {
      name: "Telehouse North Two (London Docklands)",
      role: "Primary UK Terabit DWDM Core & LINX Interconnect",
      status: "Operational",
      latency: "1.1ms",
      throughput: "34.8 Tbps Active",
      bgpPrefixes: "940,210 Routes",
      loss: "0.0001%"
    },
    equinixLd8: {
      name: "Equinix LD8 (London Harbour Exchange)",
      role: "LONAP & Financial Extranet High-Frequency Hub",
      status: "Operational",
      latency: "1.4ms",
      throughput: "28.4 Tbps Active",
      bgpPrefixes: "938,400 Routes",
      loss: "0.0002%"
    },
    manchesterMa1: {
      name: "Equinix MA1 (Manchester North Core)",
      role: "Northern UK Transit & IXManchester Fabric",
      status: "Operational",
      latency: "5.2ms",
      throughput: "14.2 Tbps Active",
      bgpPrefixes: "931,100 Routes",
      loss: "0.0003%"
    },
    sloughLd4: {
      name: "Slough LD4 (Equinix Cloud Campus)",
      role: "Direct Cloud On-Ramp (AWS & Azure UK South)",
      status: "Operational",
      latency: "1.8ms",
      throughput: "22.6 Tbps Active",
      bgpPrefixes: "939,850 Routes",
      loss: "0.0001%"
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Subtle realistic micro-fluctuation in ping
      const base = selectedExchange === 'manchesterMa1' ? 5.2 : selectedExchange === 'sloughLd4' ? 1.8 : 1.2;
      const jitter = (Math.random() * 0.15 - 0.07).toFixed(2);
      setSimulatedPing((base + parseFloat(jitter)).toFixed(2));
    }, 2500);
    return () => clearInterval(interval);
  }, [selectedExchange]);

  const activeData = exchanges[selectedExchange];

  return (
    <section id="noc-status" className="py-24 relative overflow-hidden bg-[#0A1020] border-y border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Live NOC Status Badge */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              {/* Pulsing Live Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold shadow-glow-emerald">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block"></span>
                <span className="tracking-wide uppercase">NOC Status: All Systems 100% Operational</span>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline">Autonomous 24/7/365 telemetry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Optimus National Core Telemetry
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 text-brand-cyan animate-spin-slow" /> Real-time feed
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-slate-300">
              AS48912 (Optimus UK)
            </span>
          </div>
        </div>

        {/* 4 Key Real-Time Telemetry Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="p-5 rounded-2xl glass-panel bg-slate-900/60 border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>National Packet Loss</span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">0.0001%</div>
            <div className="text-[11px] text-slate-500">Zero packet drops across DWDM rings</div>
          </div>

          <div className="p-5 rounded-2xl glass-panel bg-slate-900/60 border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Live London Ring Latency</span>
              <Wifi className="w-4 h-4 text-brand-cyan" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-brand-cyan">{simulatedPing} ms</div>
            <div className="text-[11px] text-slate-500">Docklands to Slough round-trip</div>
          </div>

          <div className="p-5 rounded-2xl glass-panel bg-slate-900/60 border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Core Core Jitter</span>
              <Zap className="w-4 h-4 text-brand-blue" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">0.24 ms</div>
            <div className="text-[11px] text-slate-500">Exceeds financial VoIP & HFT SLA</div>
          </div>

          <div className="p-5 rounded-2xl glass-panel bg-slate-900/60 border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>DDoS Scrubbing Capacity</span>
              <ShieldCheck className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">4.8 Tbps</div>
            <div className="text-[11px] text-slate-500">Automated BGP Flowspec active</div>
          </div>
        </div>

        {/* Live Datacentre Interconnect Map & Switcher */}
        <div className="rounded-3xl glass-panel bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Column: Data Centre Node Selector */}
            <div className="w-full lg:w-5/12 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-cyan mb-2">
                Primary UK Core Transit Exchanges
              </div>
              
              {Object.entries(exchanges).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setSelectedExchange(key)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    selectedExchange === key
                      ? 'bg-slate-800/90 border-brand-cyan/60 shadow-glow-cyan'
                      : 'bg-slate-950/40 border-white/5 hover:border-white/20 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>{item.name}</span>
                    </div>
                    <div className="text-xs text-slate-400 line-clamp-1">{item.role}</div>
                  </div>
                  <div className="text-right pl-3 shrink-0">
                    <span className="text-xs font-mono font-bold text-brand-cyan">{item.latency}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column: Node Detailed Telemetry Display */}
            <div className="w-full lg:w-7/12 rounded-2xl bg-slate-950/90 border border-slate-800 p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div>
                  <h4 className="text-lg font-bold text-white">{activeData.name}</h4>
                  <p className="text-xs text-brand-cyan font-medium">{activeData.role}</p>
                </div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                  <CheckCircle className="w-3.5 h-3.5" /> Direct Carrier Meet-Me Room
                </div>
              </div>

              {/* Grid Metrics for Selected Hub */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                  <div className="text-[11px] text-slate-400">Interconnect Speed</div>
                  <div className="text-base font-bold font-mono text-white">400GE / 100GE</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                  <div className="text-[11px] text-slate-400">Live Throughput</div>
                  <div className="text-base font-bold font-mono text-brand-cyan">{activeData.throughput}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                  <div className="text-[11px] text-slate-400">BGP Active Prefixes</div>
                  <div className="text-base font-bold font-mono text-white">{activeData.bgpPrefixes}</div>
                </div>
              </div>

              {/* Simulated Terminal Traceroute Display */}
              <div className="rounded-xl bg-black/70 border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-1 overflow-x-auto">
                <div className="text-slate-500">// Real-time MTR ICMP Probe from Core Engine</div>
                <div className="text-emerald-400">HOST: optimus-gw01.lon.optimusnetworks.co.uk [AS48912]</div>
                <div>1. 185.192.80.1 (core-aggregate-01)  0.34ms  0.0% loss</div>
                <div>2. 185.192.80.254 (telehouse-edge-dw) 0.82ms  0.0% loss</div>
                <div className="text-brand-cyan">3. target-node.optic.optimus.net ({simulatedPing}ms) 0.00% packet loss</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

