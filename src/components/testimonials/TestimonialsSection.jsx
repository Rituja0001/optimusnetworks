import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Clock,
  Headphones,
  Award
} from 'lucide-react';

export default function TestimonialsSection({ onOpenContact, onOpenSurvey }) {
  const row1Testimonials = [
    {
      id: "test-1",
      client: "Julian Vance",
      role: "VP of Global IT Infrastructure",
      company: "EG Group",
      sector: "Multi-Site Retail & Fuel",
      rating: 5,
      quote: "Migrating over 6,000 retail and fuel forecourt locations to Optimus Networks' managed SD-WAN was executed with zero downtime. Their NOC proactively resolved line degradation before our store managers even noticed.",
      initials: "JV",
      avatarGradient: "from-blue-600 to-cyan-500",
      verified: true
    },
    {
      id: "test-2",
      client: "Sarah Jenkins",
      role: "Chief Technology Officer",
      company: "Fintech Core Ltd",
      sector: "Financial Services",
      rating: 5,
      quote: "Sub-millisecond latency into AWS and Azure and a genuine 99.999% SLA were non-negotiables for our high-frequency payment processing. Optimus delivered dual-carrier diversity that survived three external street fiber cuts without a hiccup.",
      initials: "SJ",
      avatarGradient: "from-teal-500 to-emerald-600",
      verified: true
    },
    {
      id: "test-3",
      client: "Marcus Holloway",
      role: "Head of Network Operations",
      company: "Cumberland Logistics",
      sector: "Supply Chain & Freight",
      rating: 5,
      quote: "Our distribution hubs run 24/7/365. When our previous provider had an outage that lasted 18 hours, we made the switch. Optimus engineered dual-bearer failover with 4G/5G rapid standby. We haven't dropped a packet in two years.",
      initials: "MH",
      avatarGradient: "from-indigo-600 to-blue-500",
      verified: true
    },
    {
      id: "test-4",
      client: "Eleanor Hughes",
      role: "Director of Digital Estates",
      company: "National Heritage Trust",
      sector: "Heritage & Public Venues",
      rating: 5,
      quote: "Deploying fiber across Grade-I listed heritage landmarks seemed impossible due to strict planning restrictions. Optimus handled the complex civils and wayleaves smoothly, bringing gigabit speeds to 28 historic properties.",
      initials: "EH",
      avatarGradient: "from-amber-500 to-orange-600",
      verified: true
    }
  ];

  const row2Testimonials = [
    {
      id: "test-5",
      client: "David Sterling",
      role: "IT Infrastructure Manager",
      company: "Booker Wholesale",
      sector: "FMCG & Warehousing",
      rating: 5,
      quote: "The difference in technical competence is night and day. Calling Optimus means you speak to a senior CCIE-level network engineer within 30 seconds, not a tier-1 script reader. Absolutely outstanding customer service.",
      initials: "DS",
      avatarGradient: "from-sky-500 to-blue-700",
      verified: true
    },
    {
      id: "test-6",
      client: "Clare Thorne",
      role: "Head of Studio Technology",
      company: "Ellis Williams Architects",
      sector: "Architecture & Design",
      rating: 5,
      quote: "Collaborating on 3D BIM models and 4K architectural renders across our Manchester and London studios requires immense symmetrical bandwidth. Our 10Gbps dedicated line transformed our daily workflow completely.",
      initials: "CT",
      avatarGradient: "from-cyan-600 to-teal-500",
      verified: true
    },
    {
      id: "test-7",
      client: "Robert Davies",
      role: "Principal Data Centre Architect",
      company: "Sovereign Cloud Hosting",
      sector: "Data Centre & Cloud",
      rating: 5,
      quote: "Optimus provides our carrier-neutral DCI optical ring connecting Equinix LD8 and Telehouse North. Their rapid provisioning and transparent BGP routing tables make them our most trusted networking partner.",
      initials: "RD",
      avatarGradient: "from-violet-600 to-indigo-600",
      verified: true
    },
    {
      id: "test-8",
      client: "Dr. Fiona Campbell",
      role: "Chief Information Officer",
      company: "NorthCare Healthcare",
      sector: "Healthcare & Life Sciences",
      rating: 5,
      quote: "Handling patient diagnostic imagery and real-time telehealth video across 42 clinics requires uncompromised security and strict NHS compliance. Optimus gave us encrypted private WAN interconnects that never fail.",
      initials: "FC",
      avatarGradient: "from-blue-500 to-emerald-500",
      verified: true
    }
  ];

  // Duplicate for smooth seamless infinite marquee loops
  const row1Doubled = [...row1Testimonials, ...row1Testimonials];
  const row2Doubled = [...row2Testimonials, ...row2Testimonials];

  return (
    <section 
      id="testimonials"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-slate-50 to-[#F8FAFC] text-slate-800 border-t border-slate-200/70"
      aria-label="Client Testimonials and Reviews"
    >
      {/* Decorative Ambient Background Glows (Strictly Contained) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-teal-100/40 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          
          {/* Eyebrow Pill Badge: "● Testimonials" */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 backdrop-blur-md shadow-xs mb-4"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">
              Testimonials
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
          >
            What Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
              Clients Say
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Trusted by businesses across the UK for reliable, resilient connectivity.
          </motion.p>
        </div>

      </div>

      {/* Two-Row Infinite Auto-Scroll Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 space-y-6">
        
        {/* Left & Right Gradient Fade Masks (Fade gracefully into background) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-44 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-44 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-20"></div>

        {/* Row 1: Forward Scroll (Left to Right animation, pauses on hover) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee gap-6 flex shrink-0">
            {row1Doubled.map((item, idx) => (
              <TestimonialCard key={`row1-${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Reverse Scroll (Right to Left animation, pauses on hover) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-reverse gap-6 flex shrink-0">
            {row2Doubled.map((item, idx) => (
              <TestimonialCard key={`row2-${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>

      </div>

     

    </section>
  );
}

// Reusable Testimonial Card Component
function TestimonialCard({ item }) {
  return (
    <div className="w-[340px] sm:w-[410px] shrink-0 rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between relative group text-left">
      
      {/* Decorative Watermark Quote Icon */}
      <Quote className="absolute top-5 right-5 w-9 h-9 text-slate-200/50 group-hover:text-blue-100 transition-colors pointer-events-none" />

      {/* Top Header: 5 Stars + Industry Sector Tag */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          {/* 5 Filled Star Rating */}
          <div className="flex items-center gap-1">
            {[...Array(item.rating)].map((_, i) => (
              <Star 
                key={i} 
                className="w-4 h-4 text-amber-400 fill-amber-400" 
              />
            ))}
          </div>

          {/* Sector Pill */}
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100/90 px-2.5 py-0.5 rounded-full border border-slate-200/60">
            {item.sector}
          </span>
        </div>

        {/* Testimonial Quote */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal relative z-10 italic">
          "{item.quote}"
        </p>
      </div>

      {/* Bottom Profile Footer */}
      <div className="border-t border-slate-100 pt-4 mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar with Initials & Gradient */}
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.avatarGradient} flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-xs shrink-0`}>
            {item.initials}
          </div>

          {/* Client Details */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 leading-snug">
              {item.client}
            </h4>
            <p className="text-xs text-slate-500 font-medium leading-snug">
              {item.role}, <span className="text-slate-700 font-semibold">{item.company}</span>
            </p>
          </div>
        </div>

        {/* Verified Badge */}
        {item.verified && (
          <div 
            title="Verified Enterprise Client"
            className="flex items-center text-blue-600 shrink-0"
          >
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
          </div>
        )}
      </div>

    </div>
  );
}

