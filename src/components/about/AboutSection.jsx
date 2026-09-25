import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Server, 
  Cpu, 
  Lock, 
  FileCheck2, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';

export default function AboutSection({ onOpenQuote }) {
  const certifications = [
    {
      title: "ISO/IEC 27001:2022",
      desc: "Audited enterprise information security management governing all core switches, fiber routes, and NOC personnel.",
      icon: Award
    },
    {
      title: "Cyber Essentials Plus",
      desc: "UK Government-backed rigorous technical verification verifying zero external network vulnerabilities.",
      icon: ShieldCheck
    },
    {
      title: "UK Telecoms Security Act",
      desc: "Full statutory compliance with strict national supply chain governance and sovereign isolation.",
      icon: Lock
    },
    {
      title: "Ofcom Code Powers",
      desc: "Statutory rights under the Electronic Communications Code for rapid direct civil fiber installation.",
      icon: FileCheck2
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-dark tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-semibold text-brand-cyan">
              <Building2 className="w-3.5 h-3.5" /> British Enterprise Telecom Heritage
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Sovereign Optical Backbone. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                Pure Engineering Philosophy.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Optimus Networks was founded to dismantle legacy telecom sluggishness. While commodity retail ISPs treat connectivity as an afterthought, we engineer uncontended dark fiber and DWDM optical waves as the lifeblood of modern enterprise operations.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl glass-panel bg-slate-900/60 border border-white/5 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-brand-cyan shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Physical Infrastructure Access (PIA)</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    We utilize Openreach and Neos Networks duct and pole infrastructure to deploy dedicated private optical fiber directly into your facility with zero intermediate third-party wholesale throttling.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel bg-slate-900/60 border border-white/5 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct CCIE Architecture Access</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    No scripts, no tiered ticket bouncing. Enterprise clients communicate directly with named CCIE/JNCIE network architects who understand your BGP topologies and strict latency parameters.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote({ serviceType: 'Enterprise Master Services Consultation' })}
                className="px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white text-xs font-bold shadow-glow-blue transition-all flex items-center gap-2"
              >
                <span>Download Corporate Profile & Master SLA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Accreditations Grid & Core Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl glass-panel bg-slate-900/80 border border-white/10 p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">Security & Regulatory Compliance</h3>
                <span className="text-xs font-mono text-emerald-400 font-semibold">UK SOVEREIGNTY VERIFIED</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, i) => {
                  const Icon = cert.icon;
                  return (
                    <div key={i} className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-brand-cyan" />
                        <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {cert.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Data Centre Footprint Snapshot */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-blue/15 to-brand-cyan/10 border border-brand-cyan/20 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                  UK Interconnect Core Presence
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="p-2 rounded-lg bg-slate-900/60">
                    <div className="text-xs font-bold text-white">Telehouse North 2</div>
                    <div className="text-[10px] text-slate-400">London Docklands</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60">
                    <div className="text-xs font-bold text-white">Equinix LD8 / LD4</div>
                    <div className="text-[10px] text-slate-400">Harbour & Slough</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60">
                    <div className="text-xs font-bold text-white">Equinix MA1</div>
                    <div className="text-[10px] text-slate-400">Manchester Core</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

