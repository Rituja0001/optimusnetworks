import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Building2, 
  Landmark, 
  CreditCard, 
  CheckCircle2, 
  TrendingUp, 
  ExternalLink 
} from 'lucide-react';

import egGroupImg from '../../assets/images/case-study-eg-group.jpg';
import fintechImg from '../../assets/images/case-study-fintech.jpg';
import museumImg from '../../assets/images/case-study-museum.jpg';

// Animated CountUp Number Component
function AnimatedNumber({ value, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp = null;
    const duration = 1800; // ms
    const end = value;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function CaseStudiesSection({ onOpenContact }) {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const carouselRef = useRef(null);

  // Easily swappable case studies data array
  const caseStudies = [
    {
      id: "eg-group",
      client: "EG Group",
      clientIcon: Building2,
      tag: "Global SD-WAN & Retail Mesh",
      headline: "Powering EG Group's global network: Simplified management across 10 countries",
      statValue: 6000,
      statPrefix: "",
      statSuffix: "+",
      statLabel: "Sites connected across 10 countries",
      secondaryStat: "99.999% Core SLA",
      image: egGroupImg,
      accentColor: "from-blue-600 to-cyan-500",
      pillBadge: "Enterprise Retail"
    },
    {
      id: "global-payments",
      client: "Fintech Payments Host",
      clientIcon: CreditCard,
      tag: "Financial Cloud Core & DCI",
      headline: "Direct data centre integrations for secure multi-site connectivity",
      statValue: 250,
      statPrefix: "",
      statSuffix: "+",
      statLabel: "Global payment hosts connected",
      secondaryStat: "< 2ms Latency",
      image: fintechImg,
      accentColor: "from-cyan-500 to-teal-500",
      pillBadge: "Fintech Banking"
    },
    {
      id: "museum-network",
      client: "National Heritage Trust",
      clientIcon: Landmark,
      tag: "High-Density Public Wi-Fi",
      headline: "Enhancing the museum experience: Guest Wi-Fi for 3 million annual visitors",
      statValue: 7,
      statPrefix: "",
      statSuffix: " Venues",
      statLabel: "Connected with guest Wi-Fi infrastructure",
      secondaryStat: "3M+ Visitors/Yr",
      image: museumImg,
      accentColor: "from-teal-500 to-emerald-500",
      pillBadge: "Public Venues"
    }
  ];

  // Sync scroll indicator on mobile carousel
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, offsetWidth } = carouselRef.current;
    const index = Math.round(scrollLeft / (offsetWidth * 0.85));
    setActiveMobileIndex(Math.min(Math.max(index, 0), caseStudies.length - 1));
  };

  return (
    <section 
      id="case-studies"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-slate-50 to-[#F8FAFC] text-slate-800 border-b border-slate-200/70"
      aria-label="Client Case Studies"
    >
      {/* Decorative Subtle Background Glows (Strictly Contained) */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue-400/10 via-cyan-300/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-gradient-to-r from-teal-400/10 via-blue-200/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Two-column header with pill button on right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
          
          {/* Left: Eyebrow + Heading + Subtitle */}
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 backdrop-blur-md shadow-xs mb-3.5"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">
                Case Studies
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              Learn From Businesses Like{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
                Yours
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3.5 text-base sm:text-lg text-slate-500 leading-relaxed font-normal"
            >
              Real deployments, real results — see how we've helped businesses stay connected.
            </motion.p>
          </div>

          {/* Right: Pill-style Outlined Button with Hover Gradient Fill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="shrink-0 self-start md:self-auto"
          >
            <button
              type="button"
              onClick={onOpenContact}
              className="group relative overflow-hidden px-6 py-3 rounded-full border-2 border-blue-600/80 text-blue-600 font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:text-white hover:border-transparent hover:shadow-[0_8px_25px_rgba(0,102,255,0.35)] flex items-center gap-2"
            >
              {/* Animated fill wave on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-10"></div>
              
              <span className="relative z-10">See All Case Studies</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>

        {/* 3 Case Study Cards: Grid on Desktop/Tablet, Smooth Snap Carousel on Mobile */}
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-6 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onClick={onOpenContact}
              className="group relative flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.06),0_1px_3px_0_rgba(15,23,42,0.02)] hover:shadow-[0_24px_50px_-12px_rgba(0,102,255,0.18)] hover:border-blue-300 hover:-translate-y-2.5 transition-all duration-400 ease-out cursor-pointer overflow-hidden text-left shrink-0 w-[85vw] sm:w-[380px] lg:w-auto snap-center"
            >
              
              {/* 1. TOP FULL-BLEED IMAGE AREA (Top 60-65% visual impact) */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img 
                  src={study.image} 
                  alt={study.headline} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Gradient Overlay: Dark vignette at top, subtle fade into content at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-slate-950/20 to-slate-950/60 transition-opacity duration-300"></div>

                {/* Top-Left: Client Logo / Name Chip (Elevated with Shadow) */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/90 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <study.clientIcon className="w-3 h-3 text-blue-600" />
                  </div>
                    <span className="text-xs font-extrabold text-slate-900 tracking-tight">
                      {study.client}
                    </span>
                  </div>

                  {/* Top-Right: Floating "Read More →" Pill Button */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 group-hover:bg-white text-slate-800 backdrop-blur-md border border-white/70 shadow-sm text-xs font-bold transition-all duration-300 group-hover:shadow-md">
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Bottom Image Tag Overlay */}
                  <div className="absolute bottom-3 left-4 z-10">
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-slate-900/75 text-cyan-200 backdrop-blur-md border border-white/10">
                      {study.tag}
                    </span>
                  </div>
                </div>

                {/* 2. LOWER CONTENT AREA */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5 bg-white">
                  
                  {/* Headline (Bold, dark, 2-line clamp) */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {study.headline}
                  </h3>

                  {/* Stat Highlight Row: Large gradient counter + label */}
                  <div className="pt-4 border-t border-slate-100 flex items-baseline justify-between gap-3">
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
                        <AnimatedNumber 
                          value={study.statValue} 
                          prefix={study.statPrefix} 
                          suffix={study.statSuffix} 
                        />
                      </div>
                      <p className="text-xs text-slate-500 font-medium leading-tight mt-0.5 line-clamp-1">
                        {study.statLabel}
                      </p>
                    </div>

                    {/* Secondary SLA badge */}
                    <div className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/70 shrink-0">
                      {study.secondaryStat}
                    </div>
                  </div>

                </div>

              </motion.article>
            ))}
          </div>

        {/* Mobile Swipe Dot Indicators */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-4">
          {caseStudies.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeMobileIndex === i ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
