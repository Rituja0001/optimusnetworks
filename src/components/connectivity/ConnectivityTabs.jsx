import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Network, 
  Zap, 
  Radio, 
  ShieldCheck, 
  ArrowRight, 
  Sliders, 
  Gauge, 
  CheckCircle2, 
  Clock, 
  Activity,
  Cpu,
  Satellite
} from 'lucide-react';

export default function ConnectivityTabs({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('internet'); // 'internet' | 'private'
  
  // Interactive Calculator State
  const [siteUsers, setSiteUsers] = useState(250);
  const [workload, setWorkload] = useState('cloud'); // 'office' | 'cloud' | 'ai'

  const internetProducts = [
    {
      title: "Dedicated Internet Access (DIA)",
      subtitle: "Uncontended Enterprise Optical Bearer",
      speed: "1 Gbps – 100 Gbps",
      latency: "< 2.1ms (London Metro)",
      contention: "1:1 Strictly Dedicated",
      sla: "99.999% SLA (< 4h MTTR)",
      icon: Zap,
      features: [
        "Symmetric upload and download speeds guaranteed",
        "Direct BGP peering at LINX & LONAP exchanges",
        "Static IPv4 /29 or /28 subnets + /48 IPv6 native",
        "Hardware-enforced 24/7 telemetry monitoring"
      ],
      tag: "Enterprise Benchmark"
    },
    {
      title: "Ultrafast Business FTTP",
      subtitle: "Full Fiber to the Enterprise Premises",
      speed: "100 Mbps – 1 Gbps",
      latency: "< 7.5ms (UK Core)",
      contention: "Business Prioritised",
      sla: "99.95% SLA (< 7h MTTR)",
      icon: Globe,
      features: [
        "Rapid deployment via Openreach Physical Infrastructure Access",
        "Static IP addressing with SLA support included",
        "Cost-effective primary branch connectivity",
        "Automated upgrade path to unthrottled DIA"
      ],
      tag: "Branch & HQ"
    },
    {
      title: "4G / 5G Enterprise Cellular Failover",
      subtitle: "Zero-Packet-Loss Backup Bearer",
      speed: "Up to 500 Mbps",
      latency: "< 18ms",
      contention: "Enterprise SIM Priority",
      sla: "Instant Failover < 3s",
      icon: Radio,
      features: [
        "Multi-network roaming SIM (EE, Vodafone, Three)",
        "Fixed public IP maintained during physical cut",
        "Integrated dual-WAN SD-WAN edge router",
        "Continuous automated health-check heartbeats"
      ],
      tag: "Resilience Add-on"
    },
    {
      title: "LEO Enterprise Satellite Uplink",
      subtitle: "Low Earth Orbit Remote Site Connectivity",
      speed: "Up to 220 Mbps",
      latency: "< 28ms LEO Orbit",
      contention: "Business High-Priority",
      sla: "99.9% Resilient",
      icon: Satellite,
      features: [
        "Engineered for maritime, construction & rural depots",
        "Low-latency phased array antenna hardware",
        "Seamless integration with corporate SD-WAN tunnels",
        "Rapid deployable fly-away kits available"
      ],
      tag: "Mission Critical Remote"
    }
  ];

  const privateProducts = [
    {
      title: "Private MPLS & VPLS Core",
      subtitle: "Deterministic Layer 2 / Layer 3 Enterprise WAN",
      speed: "1 Gbps – 40 Gbps",
      latency: "< 1.5ms Inter-Data Centre",
      contention: "1:1 Dedicated Multipoint",
      sla: "99.999% SLA (< 3h MTTR)",
      icon: Network,
      features: [
        "Granular Quality of Service (QoS) for voice, video & ERP",
        "Completely isolated from public internet attack vectors",
        "Full mesh any-to-any branch communication",
        "Carrier-grade BGP traffic engineering"
      ],
      tag: "Multi-Branch Essential"
    },
    {
      title: "Point-to-Point (P2P) Dark Fiber",
      subtitle: "Unmetered Dedicated Optical Spectrum",
      speed: "Up to 800 Gbps WDM",
      latency: "Sub-millisecond wire speed",
      contention: "Physical Glass Spectrum",
      sla: "99.999% Physical SLA",
      icon: Activity,
      features: [
        "Dedicated unlit optical fiber strands direct between sites",
        "Unlimited bandwidth scaling using your own transceivers",
        "Lowest possible latency in British telecom topology",
        "Encrypted Layer-1 optical encryption compatible"
      ],
      tag: "Financial & DC Interconnect"
    },
    {
      title: "Cloud-Governed Enterprise SD-WAN",
      subtitle: "Application-Aware Multi-Cloud Routing",
      speed: "100 Mbps – 10 Gbps",
      latency: "Dynamic path optimization",
      contention: "Dynamic Aggregation",
      sla: "99.99% Cloud SLA",
      icon: Sliders,
      features: [
        "Real-time jitter & packet loss path steering",
        "Direct API orchestration with AWS, Azure & GCP VPCs",
        "Centralized security policy and firewall management",
        "Zero-touch branch provisioning in minutes"
      ],
      tag: "Hybrid Enterprise"
    }
  ];

  // Bandwidth Recommendation Engine calculation
  const getRecommendation = () => {
    let base = siteUsers * 12; // Mbps per user base
    if (workload === 'cloud') base *= 2.2;
    if (workload === 'ai') base *= 6.5;

    if (base > 5000) {
      return {
        speed: "10 Gbps – 40 Gbps Symmetrical DIA",
        topology: "Dual-Homed Diverse Dark Fiber + 5G Active Standby",
        latencyEst: "< 1.2ms to Telehouse London",
        serviceType: "Optimus NetConnect + P2P Interconnect"
      };
    } else if (base > 1200) {
      return {
        speed: "2 Gbps – 5 Gbps Symmetrical DIA",
        topology: "Uncontended Enterprise DIA + SD-WAN Orchestration",
        latencyEst: "< 2.4ms to UK Internet Exchanges",
        serviceType: "Dedicated Internet Access (DIA)"
      };
    } else {
      return {
        speed: "1 Gbps Symmetrical Enterprise DIA",
        topology: "Dedicated Optical Bearer + 4G/5G Seamless Failover",
        latencyEst: "< 3.5ms UK Core Average",
        serviceType: "Dedicated Internet Access (DIA)"
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="connectivity-tabs" className="py-24 relative overflow-hidden bg-brand-dark tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-semibold text-brand-cyan">
            <Gauge className="w-3.5 h-3.5" /> Optical Architecture Spectrum
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            High-Throughput Enterprise Connectivity
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Compare dedicated internet access circuits against private sovereign WAN solutions engineered for maximum packet velocity and zero contention.
          </p>

          {/* Interactive Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl glass-panel bg-slate-900/90 border border-white/10 mt-6 shadow-2xl">
            <button
              onClick={() => setActiveTab('internet')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'internet'
                  ? 'bg-brand-blue text-white shadow-glow-blue'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Internet Access (DIA & Cellular)</span>
            </button>
            <button
              onClick={() => setActiveTab('private')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'private'
                  ? 'bg-brand-cyan text-slate-950 shadow-glow-cyan font-extrabold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Network className="w-4 h-4" />
              <span>Private WAN, SD-WAN & Dark Fiber</span>
            </button>
          </div>
        </div>

        {/* Product Grid Animated Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {(activeTab === 'internet' ? internetProducts : privateProducts).map((product, idx) => {
              const Icon = product.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl glass-panel bg-slate-900/70 border border-white/10 p-6 flex flex-col justify-between hover:border-brand-cyan/50 hover:bg-slate-900/90 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-cyan/20 transition-all"></div>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-brand-cyan group-hover:shadow-glow-cyan transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {product.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Metrics Badge Group */}
                    <div className="space-y-2 py-3 border-y border-white/5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Throughput:</span>
                        <span className="text-white font-bold font-mono">{product.speed}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Latency Profile:</span>
                        <span className="text-brand-cyan font-semibold">{product.latency}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Contention:</span>
                        <span className="text-emerald-400 font-semibold">{product.contention}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Service SLA:</span>
                        <span className="text-white font-medium">{product.sla}</span>
                      </div>
                    </div>

                    {/* Feature bullet list */}
                    <div className="space-y-2 pt-1">
                      {product.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 relative z-10">
                    <button
                      onClick={() => onOpenQuote({ serviceType: product.title, speed: product.speed })}
                      className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-brand-blue text-white text-xs font-bold border border-white/10 hover:border-brand-blue transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Configure Circuit</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Interactive Bandwidth & Latency Calculator */}
        <div className="mt-16 rounded-3xl glass-panel bg-slate-900/80 border border-brand-cyan/20 p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-brand-cyan text-xs font-bold uppercase tracking-wider">
                <Sliders className="w-4 h-4" /> Interactive Network Sizing Engine
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Simulate Your Enterprise Bandwidth & Latency Profile
              </h3>
              <p className="text-slate-300 text-sm">
                Adjust site concurrent workforce and primary computational demands to compute real-time circuit sizing and recommended multi-homed topologies.
              </p>

              {/* Slider 1: Users */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Concurrent On-Premises Users:</span>
                  <span className="text-brand-cyan font-mono text-sm">{siteUsers} Active Endpoints</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="2000"
                  step="10"
                  value={siteUsers}
                  onChange={(e) => setSiteUsers(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>20 Users</span>
                  <span>500 Users</span>
                  <span>1,000 Users</span>
                  <span>2,000+ Enterprise</span>
                </div>
              </div>

              {/* Workload Radio Selection */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">Primary Mission Workload Profile:</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setWorkload('office')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      workload === 'office'
                        ? 'bg-brand-blue/30 border-brand-cyan text-white shadow-glow-cyan'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-white">Corporate SaaS</div>
                    <div className="text-[11px] text-slate-400 mt-1">Teams, VoIP, ERP, Office 365</div>
                  </button>

                  <button
                    onClick={() => setWorkload('cloud')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      workload === 'cloud'
                        ? 'bg-brand-blue/30 border-brand-cyan text-white shadow-glow-cyan'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-white">Multi-Cloud Hybrid</div>
                    <div className="text-[11px] text-slate-400 mt-1">AWS Direct Connect, Data Lakes</div>
                  </button>

                  <button
                    onClick={() => setWorkload('ai')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      workload === 'ai'
                        ? 'bg-brand-blue/30 border-brand-cyan text-white shadow-glow-cyan'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-white">AI Clusters & HFT</div>
                    <div className="text-[11px] text-slate-400 mt-1">Low-latency training & GPU node replication</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-brand-slate to-slate-950 p-6 border border-brand-cyan/40 shadow-glow-blue space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Architect Recommendation</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-brand-cyan/20 text-brand-cyan font-bold border border-brand-cyan/40">
                  AUTO-PROVISION
                </span>
              </div>

              <div>
                <div className="text-xs text-brand-muted">Target Dedicated Bearer Speed</div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-mono mt-0.5">
                  {rec.speed}
                </div>
              </div>

              <div>
                <div className="text-xs text-brand-muted">Redundant Topology</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">
                  {rec.topology}
                </div>
              </div>

              <div>
                <div className="text-xs text-brand-muted">Guaranteed Latency Benchmark</div>
                <div className="text-sm font-mono text-emerald-400 font-bold mt-0.5">
                  {rec.latencyEst}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote({ serviceType: rec.serviceType, speed: rec.speed })}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-slate-950 font-extrabold text-sm tracking-wide shadow-glow-cyan hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Feasibility for This Topology</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

