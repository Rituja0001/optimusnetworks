import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, Calendar, Clock, Tag, X } from 'lucide-react';

export default function InsightsSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "The Transition to 400G Optical Networks across the UK Enterprise Estate",
      excerpt: "How coherent DWDM optics and dense wavelength division multiplexing are allowing British financial firms and data centres to scale inter-site throughput without civil re-digging.",
      category: "Optical Architecture",
      date: "September 2026",
      readTime: "6 min read",
      author: "David Vance, Chief Network Architect",
      content: `The surge in multi-modal generative AI payloads and cross-datacenter database clustering has rendered 10Gbps and 40Gbps inter-site links insufficient. Coherent 400G optical interfaces are no longer restricted to trans-oceanic cables—they are now the baseline for high-density campus interconnects.

By utilizing Openreach Physical Infrastructure Access (PIA) and our dark fiber rings between Slough and the London Docklands, Optimus Networks delivers native 400Gbps symmetrical channels with less than 1.2ms round-trip delay, protected by autonomous optical path protection.`
    },
    {
      id: 2,
      title: "Sovereign AI Infrastructure: Why Dedicated DWDM Optical Waves Beat Public Transit",
      excerpt: "Why piping private neural network weights and GPU clusters over public internet or commodity VPNs introduces severe security risks and unacceptable packet jitter.",
      category: "AI Security",
      date: "August 2026",
      readTime: "8 min read",
      author: "Dr. Rachel Thorne, VP of Network Security",
      content: `Training and deploying frontier AI models requires high-throughput, deterministic data transfer between on-premise compute clusters and cloud hyperscalers. Public cloud VPNs suffer from unpredictable packet loss, throttling, and exposure to public internet BGP hijacking.

Optimus Sovereign AI Interconnects bypass public transit entirely via dedicated dark fiber spectrum and L2 MACsec wire-speed encryption, providing guaranteed multi-gigabit pipelines strictly governed by UK data residency frameworks.`
    },
    {
      id: 3,
      title: "UK Telecoms Security Act: What Enterprise CIOs Must Enforce in 2026",
      excerpt: "A breakdown of the mandatory statutory security codes governing telecommunications supply chains, BGP route protections, and third-party vendor access.",
      category: "Compliance & Regulation",
      date: "August 2026",
      readTime: "5 min read",
      author: "Marcus Sterling, Head of Regulatory Affairs",
      content: `The UK Telecoms Security Act imposes severe financial penalties on organizations that fail to isolate and govern their mission-critical telecommunications infrastructure.

At Optimus Networks, our optical mesh is built with zero prohibited hardware vendors, full RPKI route validation to prevent IP hijacking, and automated tamper-detection telemetry across all physical meet-me rooms.`
    }
  ];

  return (
    <section id="insights" className="py-24 relative overflow-hidden bg-[#0A1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-semibold text-brand-cyan">
              <BookOpen className="w-3.5 h-3.5" /> Technical Insights & Research
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Enterprise Telecom Intelligence.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              In-depth engineering analysis, optical benchmark reports, and regulatory advisories authored by the Optimus Networks engineering team.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="rounded-3xl glass-panel bg-slate-900/60 border border-white/10 p-7 flex flex-col justify-between hover:border-brand-cyan/40 hover:bg-slate-900/90 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-brand-blue/20 text-brand-cyan font-semibold border border-brand-blue/30">
                    {art.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {art.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-6 text-xs">
                <div className="text-slate-400">
                  <div className="font-semibold text-white">{art.author}</div>
                  <div className="text-[11px] text-slate-500">{art.date}</div>
                </div>

                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-brand-cyan group-hover:text-slate-950 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060B18]/85 backdrop-blur-md">
            <div 
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl glass-panel bg-slate-900 border border-brand-cyan/40 p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs font-semibold">
                  {selectedArticle.category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedArticle.title}</h3>
                <div className="flex items-center gap-4 text-xs text-slate-400 pb-4 border-b border-white/10">
                  <span>By {selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <div className="text-sm text-slate-200 leading-relaxed whitespace-pre-line pt-2">
                  {selectedArticle.content}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

