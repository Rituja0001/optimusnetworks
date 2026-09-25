import React from 'react';
import { motion } from 'framer-motion';

// Premium SVG brand logos for the 6 enterprise telecom & networking vendors
function CiscoLogo({ className }) {
  return (
    <svg viewBox="0 0 150 42" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* 9 Cisco Golden Gate Bridge Bars */}
      <rect x="6" y="16" width="3" height="12" rx="1.5" fill="#049FD9" />
      <rect x="13" y="12" width="3" height="16" rx="1.5" fill="#049FD9" />
      <rect x="20" y="8" width="3" height="20" rx="1.5" fill="#049FD9" />
      <rect x="27" y="4" width="3" height="24" rx="1.5" fill="#049FD9" />
      <rect x="34" y="8" width="3" height="20" rx="1.5" fill="#049FD9" />
      <rect x="41" y="12" width="3" height="16" rx="1.5" fill="#049FD9" />
      <rect x="48" y="16" width="3" height="12" rx="1.5" fill="#049FD9" />
      {/* Cisco Wordmark */}
      <text x="100" y="27" textAnchor="middle" fill="#049FD9" fontFamily="system-ui, -apple-system, sans-serif" fontSize="19" fontWeight="800" letterSpacing="0.12em">
        CISCO
      </text>
    </svg>
  );
}

function FortinetLogo({ className }) {
  return (
    <svg viewBox="0 0 160 42" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Fortinet Red Matrix Icon */}
      <rect x="6" y="9" width="8" height="8" rx="1.5" fill="#EE3124" />
      <rect x="17" y="9" width="8" height="8" rx="1.5" fill="#EE3124" />
      <rect x="6" y="20" width="8" height="8" rx="1.5" fill="#EE3124" />
      <rect x="17" y="20" width="8" height="8" rx="1.5" fill="#EE3124" />
      {/* Fortinet Wordmark */}
      <text x="96" y="27" textAnchor="middle" fill="#EE3124" fontFamily="system-ui, -apple-system, sans-serif" fontSize="17" fontWeight="900" letterSpacing="0.08em">
        FORTINET
      </text>
    </svg>
  );
}

function MerakiLogo({ className }) {
  return (
    <svg viewBox="0 0 165 42" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Meraki Connected Nodes Icon */}
      <circle cx="12" cy="21" r="5" fill="#67B346" />
      <circle cx="26" cy="14" r="4.5" fill="#67B346" />
      <circle cx="27" cy="27" r="3.5" fill="#67B346" />
      <path d="M12 21L26 14M12 21L27 27" stroke="#67B346" strokeWidth="2" strokeLinecap="round" />
      {/* Meraki Wordmark */}
      <text x="100" y="27" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="800" letterSpacing="0.04em">
        <tspan fill="#1E293B">cisco </tspan>
        <tspan fill="#67B346">Meraki</tspan>
      </text>
    </svg>
  );
}

function SilverPeakLogo({ className }) {
  return (
    <svg viewBox="0 0 165 42" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Silver Peak Dual-Chevron Peak */}
      <path d="M8 29L19 11L30 29H23L19 22L15 29H8Z" fill="#F47B20" />
      <path d="M22 29L26 21L31 29H22Z" fill="#64748B" />
      {/* Silver Peak Wordmark */}
      <text x="100" y="26" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="800" letterSpacing="0.02em">
        <tspan fill="#1E293B">silver</tspan>
        <tspan fill="#F47B20">peak</tspan>
      </text>
    </svg>
  );
}

function NeosNetworksLogo({ className }) {
  return (
    <svg viewBox="0 0 175 42" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Neos Optical Target Mark */}
      <circle cx="17" cy="21" r="9" stroke="#003B71" strokeWidth="2.75" />
      <path d="M17 12L23 27" stroke="#00A3E0" strokeWidth="2.75" strokeLinecap="round" />
      {/* Neos Networks Wordmark */}
      <text x="104" y="26" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14.5" fontWeight="900" letterSpacing="0.06em">
        <tspan fill="#003B71">NEOS </tspan>
        <tspan fill="#00A3E0">NETWORKS</tspan>
      </text>
    </svg>
  );
}

function PeplinkLogo({ className }) {
  return (
    <svg viewBox="0 0 160 42" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Peplink Circle Hub Icon with enhanced contrast */}
      <circle cx="18" cy="21" r="9" fill="#0072CE" />
      <circle cx="18" cy="21" r="3.5" fill="#E2E8F0" />
      <path d="M18 7V12M18 30V35M4 21H9M27 21H32" stroke="#0072CE" strokeWidth="2" strokeLinecap="round" />
      {/* Peplink Wordmark */}
      <text x="96" y="27" textAnchor="middle" fill="#0072CE" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="900" letterSpacing="0.06em">
        peplink
      </text>
    </svg>
  );
}

export default function TrustedPartnersStrip() {
  const partners = [
    { name: "Cisco Systems", Component: CiscoLogo },
    { name: "Fortinet", Component: FortinetLogo },
    { name: "Cisco Meraki", Component: MerakiLogo },
    { name: "Silver Peak", Component: SilverPeakLogo },
    { name: "Neos Networks", Component: NeosNetworksLogo },
    { name: "Peplink", Component: PeplinkLogo },
  ];

  // Repeat for seamless infinite marquee loop (2 identical halves for mathematically smooth wrap)
  const halfList = [...partners, ...partners];
  const marqueeList = [...halfList, ...halfList];

  return (
    <section 
      id="partners"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white border-b border-slate-200/70"
      aria-label="Trusted Technology Partners"
    >
      {/* Subtle Ambient Background Mesh (Contained) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-gradient-to-r from-blue-400/5 via-cyan-400/5 to-transparent rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtext */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 mb-3.5 shadow-xs"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-700">
              Vendor &amp; Carrier Alliances
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Trusted by Leading{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
              Technology Partners
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-500 font-normal max-w-2xl mx-auto leading-relaxed"
          >
            We are vendor and carrier agnostic, partnering with industry leaders to deliver carrier-grade resilience, dedicated capacity, and zero single points of failure.
          </motion.p>
        </div>

      </div>

      {/* Infinite Horizontal Marquee Container with Left & Right Gradient Masks */}
      <div 
        className="relative w-full overflow-hidden py-3"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        }}
      >
        {/* Fallback Left & Right Soft Fade Masks (White to match section) */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        {/* CSS Marquee Track with hover pause and generous card gap (32px - 48px) */}
        <div className="animate-marquee py-3 flex items-center gap-8 sm:gap-10 md:gap-12">
          {marqueeList.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group relative flex items-center justify-center h-20 sm:h-24 px-6 sm:px-8 rounded-2xl bg-gradient-to-b from-white to-slate-50/70 hover:to-white border border-slate-200/80 hover:border-blue-400/80 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] hover:shadow-[0_14px_30px_-6px_rgba(0,102,255,0.15),0_4px_10px_-2px_rgba(15,23,42,0.04)] hover:-translate-y-1 transition-all duration-300 cursor-pointer shrink-0 min-w-[190px] sm:min-w-[220px]"
            >
              <partner.Component className="h-8 sm:h-9 w-auto max-w-[140px] sm:max-w-[165px] object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
