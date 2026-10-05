import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Clock,
  Compass
} from 'lucide-react';
import HeroVisual from './HeroVisual';

export default function HeroSection({ onOpenSurvey, onOpenAvailability, isVariant2 = false }) {
  // Line-by-line / word-by-word cinematic blur reveal variants for variant 2
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      }
    }
  };

  const wordBlurVariants = {
    hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      id="home"
      className={`relative min-h-screen ${
        isVariant2 
          ? 'pt-20 sm:pt-24 lg:pt-28 bg-gradient-to-b from-white via-[#F8FAFC]/90 to-[#F8FAFC]' 
          : 'pt-[102px] sm:pt-[134px] lg:pt-[150px] bg-[#F8FAFC]'
      } pb-20 sm:pb-24 lg:pb-28 overflow-hidden text-slate-800 tech-grid-light border-b border-slate-200/70`}
      aria-label="Enterprise Connectivity Hero"
    >
      {/* Background Ambient Atmospheric Lighting for Light Theme (Strictly Contained) */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] pointer-events-none -z-10 ${
        isVariant2 
          ? 'bg-gradient-to-b from-blue-400/10 via-cyan-400/10 to-transparent blur-[140px]' 
          : 'bg-[#0846E7]/5 blur-[140px]'
      }`}></div>
      <div className={`absolute bottom-10 right-0 w-[450px] h-[450px] rounded-full blur-[130px] pointer-events-none -z-10 ${
        isVariant2 ? 'bg-blue-100/50' : 'bg-[#0846E7]/5'
      }`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Eyebrow Badge (Home Page 1) */}
            {!isVariant2 && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0846E7]/10 border border-[#0846E7]/25 text-[#0846E7] shadow-2xs"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0846E7] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0846E7]"></span>
                </span>
                <span className="text-xs font-bold tracking-wide uppercase">
                  UK Enterprise Broadband &amp; Leased Lines
                </span>
              </motion.div>
            )}

            {/* Main Headline */}
            {isVariant2 ? (
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold tracking-tight text-slate-900 leading-[1.08]"
              >
                <span className="inline-block mr-[0.25em]">
                  <motion.span variants={wordBlurVariants} className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
                    High-Performance
                  </motion.span>
                </span>
                <span className="inline-block mr-[0.25em]">
                  <motion.span variants={wordBlurVariants} className="inline-block">
                    Enterprise
                  </motion.span>
                </span>
                <span className="inline-block mr-[0.25em]">
                  <motion.span variants={wordBlurVariants} className="inline-block">
                    Networking
                  </motion.span>
                </span>
                <span className="inline-block mr-[0.25em]">
                  <motion.span variants={wordBlurVariants} className="inline-block">
                    &amp;
                  </motion.span>
                </span>
                <span className="inline-block mr-[0.25em]">
                  <motion.span variants={wordBlurVariants} className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
                    Resilient
                  </motion.span>
                </span>
                <span className="inline-block">
                  <motion.span variants={wordBlurVariants} className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
                    Connectivity
                  </motion.span>
                </span>
              </motion.h1>
            ) : (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold tracking-tight text-slate-900 leading-[1.08]"
              >
                <span className="text-[#0846E7]">
                  High-Performance
                </span>{" "}
                Enterprise Networking &amp;{" "}
                <span className="text-[#0846E7]">
                  Resilient Connectivity
                </span>
              </motion.h1>
            )}

            {/* Subheadline: Clear multi-site resilience narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: isVariant2 ? 0.35 : 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed"
            >
              Reliable primary leased lines, automatic backup, and rapid-deploy wireless to keep your multi-site stores, offices, and operations running 24/7/365.
            </motion.p>

            {/* Action Buttons: Dual CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              {/* Button 1 (Primary): "Schedule a Site Survey" with hover scale */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenSurvey}
                className={`relative group overflow-hidden px-7 py-4 rounded-2xl text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 focus:outline-none cursor-pointer ${
                  isVariant2 
                    ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 shadow-[0_10px_25px_-5px_rgba(0,102,255,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(0,102,255,0.5)] focus-visible:ring-2 focus-visible:ring-blue-500' 
                    : 'bg-[#0846E7] hover:bg-[#0639BC] shadow-[0_10px_25px_-5px_rgba(8,70,231,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(8,70,231,0.5)] focus-visible:ring-2 focus-visible:ring-[#0846E7]'
                }`}
              >
                {/* Diagonal sliding shimmer reflection */}
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                
                <Zap className="w-4 h-4 text-white fill-white/20" />
                <span className="relative z-10">Schedule a Site Survey</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Button 2 (Secondary): "Check Availability" (Light card button) */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenAvailability}
                className={`px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base border border-slate-200/90 shadow-xs hover:shadow-md backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  isVariant2 ? 'hover:border-blue-400' : 'hover:border-[#0846E7]'
                }`}
              >
                <Compass className={`w-4 h-4 ${isVariant2 ? 'text-blue-600' : 'text-[#0846E7]'}`} />
                <span>Check Availability</span>
              </motion.button>
            </motion.div>

            {/* SLA Micro-copy: "99.999% SLA Uptime • 24/7/365 UK NOC Monitoring" */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-800">99.999% SLA Uptime</span>
              </div>
              
              <span className="text-slate-300 hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className={`w-4 h-4 ${isVariant2 ? 'text-blue-600' : 'text-[#0846E7]'}`} />
                <span className="font-semibold text-slate-800">24/7/365 UK NOC Monitoring</span>
              </div>

              <span className="text-slate-300 hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5 text-slate-600">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>Instant 5G Emergency Standby</span>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Visual Centerpiece */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroVisual isVariant2={isVariant2} showGlobe={isVariant2} />
          </div>

        </div>

      </div>
    </section>
  );
}
