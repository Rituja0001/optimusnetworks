import React from 'react';
import { motion } from 'framer-motion';

export default function ClientLogoMarquee() {
  const clients = [
    { name: "ASDA Supermarkets", label: "ASDA", sub: "Multi-Store Retail" },
    { name: "Ellis Williams", label: "ELLIS WILLIAMS", sub: "Architects" },
    { name: "Cumberland Farms", label: "CUMBERLAND", sub: "Logistics & Fleet" },
    { name: "EG Group", label: "EG GROUP", sub: "Global Forecourts" },
    { name: "Euro Garages", label: "EURO GARAGES", sub: "Retail Interconnect" },
    { name: "Costa Express", label: "COSTA EXPRESS", sub: "IoT Edge Telemetry" },
    { name: "Co-op Group", label: "THE CO-OP", sub: "National Backbone" },
    { name: "Booker Wholesale", label: "BOOKER", sub: "Supply Chain" },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeList = [...clients, ...clients];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-20 overflow-hidden">
      
      {/* Section Title with subtle gradient divider lines */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-white/[0.15]"></div>
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400 text-center">
          Trusted by multi-site brands across Retail, Hospitality, QSR and Forecourts
        </p>
        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-white/[0.15]"></div>
      </div>

      {/* Infinite Marquee Track with Fade Masks */}
      <div className="relative w-full overflow-hidden mask-fade-edges">
        {/* Left & Right gradient fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#050811] via-[#050811]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#050811] via-[#050811]/80 to-transparent z-10 pointer-events-none"></div>

        {/* CSS Marquee flex container */}
        <div className="animate-marquee py-2 flex items-center gap-8 sm:gap-12">
          {marqueeList.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group flex flex-col items-center justify-center px-4 py-3 rounded-2xl bg-white/[0.015] hover:bg-white/[0.04] border border-white/[0.04] hover:border-cyan-400/30 transition-all duration-300 cursor-pointer shrink-0 min-w-[150px] sm:min-w-[180px]"
            >
              <span className="text-base sm:text-lg font-black tracking-widest text-slate-500 group-hover:text-white transition-colors duration-300 font-mono">
                {client.label}
              </span>
              <span className="text-[10px] text-slate-600 group-hover:text-cyan-400 transition-colors duration-300 font-medium tracking-tight">
                {client.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

