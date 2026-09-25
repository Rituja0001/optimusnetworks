import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Network, 
  Sparkles, 
  Layers, 
  Target, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import datacenterImg from '../../assets/images/datacenter-fiber.jpg';
import fiberCablingImg from '../../assets/images/fiber-cabling-macro.jpg';

export default function WhyChooseUs({ onOpenContact }) {
  const narrativePoints = [
    {
      icon: Cpu,
      title: "Ethos of Technical Mastery",
      text: "Optimus Networks is more than just a service provider. We are a team of dedicated professionals with a singular focus on data networking. Our foundation is built on the ethos of expertise, and we've committed ourselves to mastering every aspect of data networking.",
      accent: "from-blue-600 to-cyan-500",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200/80"
    },
    {
      icon: Target,
      title: "Custom-Engineered Architecture",
      text: "Our mission is straightforward - to deliver high-quality, custom network solutions that align perfectly with our clients' unique needs. We reject the notion of 'one-size-fits-all' solutions. Instead, we invest time in understanding your specific needs, challenges, and objectives.",
      accent: "from-cyan-500 to-teal-500",
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200/80"
    },
    {
      icon: Users,
      title: "Enduring Long-Term Partnerships",
      text: "Our commitment goes beyond providing bespoke solutions. We believe in fostering enduring relationships with our clients. With Optimus Networks, you're not just choosing a service provider - you're partnering with a team that's genuinely invested in your success.",
      accent: "from-teal-500 to-emerald-500",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80"
    }
  ];

  return (
    <section 
      id="about"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-slate-50 to-[#F8FAFC] text-slate-800 border-b border-slate-200/70"
      aria-label="Why Choose Optimus Networks"
    >
      {/* Decorative Ambient Background Glows (Strictly Contained) */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/10 via-cyan-300/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-gradient-to-tl from-teal-400/10 via-blue-200/20 to-transparent rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Desktop Grid (Left: Narrative Copy, Right: Visual Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Text & Value Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8 text-left py-1">
            
            {/* Category Kicker Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 backdrop-blur-md shadow-xs self-start"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-blue-700 tracking-wide uppercase">
                The Optimus Standard
              </span>
            </motion.div>

            {/* Main Section Headline with Hero Brand Gradient */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              Why Choose{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
                Optimus Networks
              </span>
              ?
            </motion.h2>

            {/* 3 Paragraph Blocks with Visual Rhythm & Left Accent Lines */}
            <div className="space-y-5 pt-1">
              {narrativePoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                    className="group relative flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xs border border-transparent hover:border-slate-200/80"
                  >
                    {/* Left Accent Icon Pill */}
                    <div className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-105 ${point.iconBg}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Paragraph Content */}
                    <div className="flex-1 space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {point.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Closing Line: Highlighted Accent Callout Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50/90 via-cyan-50/60 to-emerald-50/40 border border-blue-200/80 p-5 sm:p-6 shadow-sm group mt-2"
            >
              {/* Left Vertical Accent Bar */}
              <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-teal-500"></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    Join us, and let's navigate the path to exceptional results together.
                  </p>
                </div>

                {onOpenContact && (
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-xs hover:shadow-md shrink-0 self-start sm:self-auto group-hover:scale-[1.02]"
                  >
                    <span>Partner with Us</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Two Stacked Infrastructure Images (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col justify-between w-full h-full gap-4 sm:gap-5 py-1">
            
            {/* Ambient Backlight for Image Group */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/15 via-cyan-400/15 to-teal-400/10 rounded-3xl blur-3xl transform -rotate-1 pointer-events-none -z-10"></div>

            {/* Floating Card 1: 10+ Years Expertise (Top-Left of Top Image) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute -top-4 -left-3 sm:-left-5 z-20"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_30px_-6px_rgba(15,23,42,0.12),0_2px_8px_0_rgba(15,23,42,0.04)] flex items-center gap-2.5 text-left"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900">10+ Years</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium block">
                    Networking Expertise
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* TOP IMAGE: Primary Landscape Data Center Visual (~58% height on desktop, 300-340px on mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative w-full h-[300px] sm:h-[340px] lg:h-[58%] rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_16px_40px_-10px_rgba(15,23,42,0.12)] group flex flex-col"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full overflow-hidden bg-slate-900"
              >
                <img 
                  src={datacenterImg} 
                  alt="Optimus Networks Enterprise Data Center Corridor" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent pointer-events-none"></div>

                {/* In-Image Telemetry Bar at bottom of top image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-4 sm:right-4 flex items-center justify-between text-xs text-white/90 backdrop-blur-md bg-slate-900/70 px-3.5 py-2 rounded-xl border border-white/10 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-cyan-200">UK OPTICAL FABRIC</span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-slate-300 font-medium">CARRIER AGNOSTIC</span>
                </div>
              </motion.div>
            </motion.div>

            {/* BOTTOM IMAGE: Secondary Macro Cabling / Switch Hardware Visual (~42% height on desktop, HIDDEN on mobile/tablet) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="hidden lg:flex relative w-full lg:h-[42%] rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_16px_40px_-10px_rgba(15,23,42,0.12)] group flex-col"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="relative w-full h-full overflow-hidden bg-slate-900"
              >
                <img 
                  src={fiberCablingImg} 
                  alt="High-Density Fiber Optic SFP+ Switch and Structured Cabling" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent pointer-events-none"></div>

                {/* Hardware Spec Chip in bottom-right of bottom image */}
                <div className="absolute top-3 right-3 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>10G SFP+ MESH</span>
                </div>
              </motion.div>

              {/* Floating Card 2: 100+ Enterprise Clients (Overlapping bottom-left of bottom image on desktop) */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.14),0_2px_6px_0_rgba(15,23,42,0.04)] flex items-center gap-2.5 text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shrink-0 shadow-xs">
                    <Network className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">100+ Enterprise Clients</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium block">
                      Bespoke Multi-Site Deployments
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Mobile-Only Stat Badge (Rendered cleanly under top image on mobile since bottom image is hidden) */}
            <div className="lg:hidden flex items-center justify-center pt-1">
              <div className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shrink-0">
                    <Network className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">100+ Enterprise Clients</span>
                    <span className="text-[10px] text-slate-500">Bespoke Multi-Site Deployments</span>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

