import React from 'react';
import { 
  ShieldCheck, 
  Headphones, 
  Activity, 
  Server, 
  ArrowRight, 
  Cpu, 
  Terminal, 
  Truck, 
  Check, 
  Layers,
  Sparkles,
  Lock
} from 'lucide-react';

export default function SolutionsGrid({ onOpenQuote }) {
  const solutions = [
    {
      id: "ai-security",
      title: "AI Security & Sovereign Cloud Interconnect",
      category: "Critical Infrastructure Security",
      icon: ShieldCheck,
      color: "brand-cyan",
      badge: "Zero-Trust Mesh",
      headline: "Safeguard Enterprise LLMs, Training Clusters & Confidential Weights",
      desc: "As enterprise workloads migrate to private GPU clusters, Optimus delivers hardware-isolated optical data pipelines with zero exposure to the public Internet, native MACsec L2 encryption, and automated anomaly containment.",
      specs: [
        "In-line terabit L3/L4 & L7 anti-DDoS filtering",
        "Sovereign UK data residency compliance",
        "Encrypted IPsec & MACsec hardware acceleration",
        "Granular token & API rate boundary protection"
      ]
    },
    {
      id: "ats-support",
      title: "24/7 Advanced Technical Support (ATS)",
      category: "Dedicated Engineering NOC",
      icon: Headphones,
      color: "brand-blue",
      badge: "No Call Centres",
      headline: "Direct Tier-3 CCIE / JNCIE Network Architects in Under 15 Minutes",
      desc: "Ditch automated IVR queues. When you contact Optimus ATS, you are routed straight to named British network architects with immediate administrative access to optical transponders, BGP routing engines, and DWDM amplifiers.",
      specs: [
        "< 15 minute target first-touch response SLA",
        "Named lead network architect assigned to your account",
        "Proactive proactive circuit pinging & fault ticketing",
        "Scheduled maintenance during low-impact 02:00 windows"
      ]
    },
    {
      id: "monitoring",
      title: "Real-Time Telemetry & Autonomous Analytics",
      category: "Network Observability",
      icon: Activity,
      color: "emerald-400",
      badge: "Millisecond Streaming",
      headline: "Comprehensive Visibility Across Core, Cloud & Edge Circuits",
      desc: "Streaming gRPC and SNMP telemetry delivers granular packet-level telemetry to your internal SIEM or Optimus Insight portal. Detect route degradation, micro-bursts, and peering shifts before users notice.",
      specs: [
        "Live jitter, packet loss and BGP latency tracking",
        "Direct export to Datadog, Grafana, Splunk & Kafka",
        "Automated root-cause diagnostics & MTR logs",
        "Quarterly bandwidth forecasting & capacity modeling"
      ]
    },
    {
      id: "hardware",
      title: "Global Enterprise Hardware Procurement",
      category: "Supply Chain & Staging",
      icon: Server,
      color: "amber-400",
      badge: "Pre-Provisioned & Staged",
      headline: "Next-Day Delivery on Cisco, Juniper & Fortinet Infrastructure",
      desc: "Avoid 6-month distributor lead times. We maintain active UK bonded warehouse inventory of high-density carrier routers, 100G/400G transceivers, and enterprise next-gen firewalls, pre-configured to your golden config.",
      specs: [
        "Authorized Cisco Premier & Fortinet Platinum partner",
        "Pre-staged burn-in testing and firmware validation",
        "Advance hardware replacement with 4-hour on-site courier",
        "Complete asset tagging and serial tracking compliance"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-[#060B18]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-semibold text-brand-cyan">
            <Sparkles className="w-3.5 h-3.5" /> End-to-End Enterprise Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered Beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              Raw Telecom Bandwidth.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Optimus Networks augments your physical connection with proactive operational security, dedicated CCIE engineering support, and frictionless enterprise hardware logistics.
          </p>
        </div>

        {/* 2x2 Grid of In-Depth Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className="rounded-3xl glass-panel bg-slate-900/60 border border-white/10 p-8 flex flex-col justify-between hover:border-brand-cyan/40 hover:bg-slate-900/80 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-cyan group-hover:shadow-glow-cyan transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                      {sol.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {sol.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-brand-cyan transition-colors">
                      {sol.title}
                    </h3>
                    <h4 className="text-sm font-semibold text-slate-200 mt-2">
                      {sol.headline}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                      {sol.desc}
                    </p>
                  </div>

                  {/* Bullet checklist */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {sol.specs.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onOpenQuote({ serviceType: sol.title })}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-brand-blue text-white text-xs font-bold border border-white/10 hover:border-brand-blue transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Consult with Solutions Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

