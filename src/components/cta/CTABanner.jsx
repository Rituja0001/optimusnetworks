import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Calendar 
} from 'lucide-react';
import ctaTeamImg from '../../assets/images/cta-team-assessment.jpg';

export default function CTABanner({ onOpenAssessment, onOpenSurvey }) {
  return (
    <section 
      id="cta-assessment"
      className="relative py-12 sm:py-20 bg-[#F8FAFC] overflow-hidden"
      aria-label="Book Network Assessment"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contained Large Rounded Dark Banner Card (24-32px border-radius) */}
        <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-gradient-to-br from-[#060A14] via-[#0A1628] to-[#0E2A4A] border border-slate-700/50 shadow-[0_25px_60px_-15px_rgba(2,6,23,0.45)] text-white">
          
          {/* Subtle Fine Tech Grid Pattern at low opacity */}
          <div className="absolute inset-0 tech-grid-dark opacity-15 pointer-events-none"></div>

          {/* Ambient Glowing Gradient Accents */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-transparent rounded-full blur-[110px] pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none"></div>

          {/* Main 2-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px] relative z-10">
            
            {/* Left Content Column (~58% on desktop) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center text-left relative z-20"
            >
              {/* Eyebrow Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-cyan-400/30 backdrop-blur-md mb-6 self-start shadow-xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Resilience &amp; Capacity Assessment
                </span>
              </div>

              {/* Main Headline (Mixed Weight: Regular + Bold on "Move Fast") */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-white leading-[1.14] tracking-tight">
                Get Clarity on Your Connectivity, Then{" "}
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 drop-shadow-[0_2px_16px_rgba(0,210,255,0.35)]">
                  Move Fast
                </span>
              </h2>

              {/* Subheading / Body Text (70% opacity / light grey) */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal max-w-xl">
                Book a free network assessment to map your current setup, identify resilience gaps, and define a rollout plan you can trust. Or schedule a site survey to validate requirements before you commit.
              </p>

              {/* CTAs Row: Primary Solid Pill Button + Secondary Text Link */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-7">
                
                {/* Primary CTA Button (Blue-to-teal gradient with hover scale & glow) */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenAssessment}
                  className="relative group overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-[0_10px_25px_-5px_rgba(0,102,255,0.45)] hover:shadow-[0_16px_36px_-6px_rgba(0,210,255,0.6)] transition-all duration-300 flex items-center justify-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {/* Subtle Diagonal Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  
                  <Calendar className="w-4 h-4 text-cyan-100" />
                  <span className="relative z-10">Book an Assessment</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Secondary CTA (Accent teal link with arrow slide and underline) */}
                <button
                  type="button"
                  onClick={onOpenSurvey}
                  className="group inline-flex items-center justify-center gap-2 text-cyan-300 hover:text-white font-semibold text-sm sm:text-base transition-colors relative py-1 focus:outline-none"
                >
                  <span>Schedule a Site Survey</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform duration-200" />
                  
                  {/* Expanding underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-teal-300 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </button>

              </div>

              {/* Reassurance Micro-Copy */}
              <div className="mt-8 pt-6 border-t border-slate-700/40 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>No obligation, zero vendor lock-in</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Direct senior architect review</span>
                </div>
              </div>

            </motion.div>

            {/* Right Image Column (~42% on desktop with seamless gradient blend) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full overflow-hidden flex items-center justify-center"
            >
              {/* Decorative Subtle Glowing Blue-Teal Gradient Arc / Swoosh */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.08, 1],
                  opacity: [0.35, 0.6, 0.35],
                  rotate: [0, 8, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-cyan-400/30 blur-[1px] pointer-events-none z-10 hidden lg:block"
              ></motion.div>

              <div className="absolute -left-16 top-1/3 w-40 h-40 bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl pointer-events-none z-10 hidden lg:block"></div>

              {/* Background Image with Cinematic Ken Burns Zoom */}
              <motion.img 
                src={ctaTeamImg} 
                alt="Optimus Networks engineers collaborating on enterprise network assessment" 
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full object-cover object-center absolute inset-0 filter brightness-[0.92] contrast-[1.05]"
              />

              {/* Seamless Desktop Horizontal Dark Gradient Blend (Fades left side of image into navy background) */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/60 to-transparent w-3/5 z-10 pointer-events-none"></div>

              {/* Seamless Mobile Vertical Dark Gradient Blend (Fades top of image into navy background) */}
              <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0A1628]/60 to-transparent h-2/5 z-10 pointer-events-none"></div>

              {/* Subtle Ambient Color Grade Sheen */}
              <div className="absolute inset-0 bg-blue-950/20 mix-blend-color pointer-events-none z-10"></div>

              {/* Floating Live Telemetry Badge (Corner Glass Pill) */}
              <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-20 px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-lg flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-[11px] font-mono font-semibold text-slate-200">
                  NOC Operations Ready
                </span>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

