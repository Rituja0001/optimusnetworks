import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

export default function FAQSection({ onOpenContact, onOpenSurvey }) {
  // CRITICAL: Shared active index across the ENTIRE section (only 1 open at a time)
  const [openIndex, setOpenIndex] = useState(0); // Item 0 open by default for immediate preview

  const faqData = [
    {
      id: "faq-1",
      question: "What is the difference between a dedicated leased line and standard business broadband?",
      answer: "Unlike standard broadband, which is contended (shared with other businesses in your area) and experiences peak-hour speed fluctuations, an Optimus dedicated leased line provides a 1:1 uncontended, symmetrical connection reserved exclusively for your company. You receive guaranteed upload and download speeds (from 100Mbps up to 100Gbps) backed by a legally binding 99.999% availability SLA and a 4-hour repair guarantee."
    },
    {
      id: "faq-2",
      question: "How does Optimus SD-WAN simplify connectivity across multiple office branches?",
      answer: "Our managed SD-WAN aggregates your underlying physical circuits (leased lines, FTTP broadband, and 4G/5G cellular) into a single intelligent virtual fabric. It continuously monitors link health and automatically steers mission-critical traffic (such as VoIP, POS, and ERP systems) over the optimal path in real time, applies centralized zero-trust security policies, and eliminates manual router reconfiguration at remote sites."
    },
    {
      id: "faq-3",
      question: "What are the typical installation and delivery lead times for enterprise circuits?",
      answer: "Standard Dedicated Internet Access (DIA) over fiber typically delivers in 30 to 45 working days, subject to Openreach or carrier survey confirmation. If your premises requires immediate connectivity, we deploy our rapid pre-ethernet 4G/5G enterprise gateway within 48 to 72 hours, ensuring your team is fully operational while physical fiber civils are completed."
    },
    {
      id: "faq-4",
      question: "What uptime guarantees and SLAs do you provide for mission-critical operations?",
      answer: "All dedicated circuits include our comprehensive 99.999% availability Service Level Agreement with round-the-clock proactive monitoring and a guaranteed 4-hour Mean Time to Repair (MTTR). In dual-bearer active-active architectures, our automated BGP hitless failover shifts traffic in under 50 milliseconds with zero dropped sessions or packet loss."
    },
    {
      id: "faq-5",
      question: "How does automated backup and failover connectivity work during a fiber cut?",
      answer: "We engineer carrier-diverse failover using independent physical routes and distinct exchange nodes. If a civil construction incident or street dig severs your primary fiber bearer, traffic automatically fails over to your secondary optical circuit or cellular standby without dropped video calls, disconnected VPNs, or lost customer transactions."
    },
    {
      id: "faq-6",
      question: "How are your pricing and contract terms structured for enterprise clients?",
      answer: "We provide flexible 12, 36, and 60-month enterprise agreements with transparent fixed monthly pricing—there are zero hidden usage penalties or metered data caps. Longer-term commitments often include complimentary site surveys, waived standard Excess Construction Charges (ECCs), and fully managed Cisco or Fortinet hardware included."
    },
    {
      id: "faq-7",
      question: "Where across the UK does Optimus Networks provide connectivity coverage?",
      answer: "We maintain direct optical interconnects with all Tier-1 UK network carriers—including Openreach, Neos Networks, Virgin Media Business, Colt, and CityFibre. This carrier-agnostic posture gives us over 99.2% national UK coverage across urban city centers, retail high streets, business parks, and rural industrial locations."
    },
    {
      id: "faq-8",
      question: "What support and response times can we expect if an incident occurs?",
      answer: "Our UK-based Network Operations Centre (NOC) operates 24/7/365, monitoring network telemetry at 1-second intervals. When you contact our support desk, your call is answered by a senior network architect within 30 seconds—there are no automated phone trees or non-technical call handlers."
    },
    {
      id: "faq-9",
      question: "Can we connect directly to AWS, Microsoft Azure, and Google Cloud?",
      answer: "Yes. Through our Cloud Direct Interconnect fabric, we provide dedicated sub-millisecond Layer-2 and Layer-3 private cross-connects into Microsoft Azure (UK South & West), AWS (London Direct Connect), Google Cloud, and major colocation datacentres, bypassing the public internet for superior security, lower latency, and reduced egress costs."
    },
    {
      id: "faq-10",
      question: "What built-in network security measures are implemented on your services?",
      answer: "Every circuit incorporates carrier-grade DDoS mitigation, private VRF isolation, and next-generation firewall inspection powered by Cisco Meraki and Fortinet. All operations comply with ISO 27001, Cyber Essentials Plus, and SOC 2 Type II data protection frameworks."
    }
  ];

  const handleToggle = (index) => {
    // If clicking open item, close it; otherwise open this one and close whichever was open
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split into two 5-item columns for desktop
  const leftColumnFaqs = faqData.slice(0, 5);
  const rightColumnFaqs = faqData.slice(5, 10);

  return (
    <section 
      id="faq"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-white text-slate-800 border-b border-slate-200/70"
      aria-label="Frequently Asked Questions"
    >
      {/* Decorative Ambient Background Glows (Strictly Contained) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          
          {/* Eyebrow Pill Badge: "● FAQs" */}
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
              FAQs
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
            Got Questions? We've Got{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
              Answers
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
            Everything you need to know about our connectivity services. Can't find what you're looking for? Reach out to our team.
          </motion.p>
        </div>

        {/* 2-Column Desktop Grid / Sequential 1-Column Mobile Layout */}
        {/* Desktop View: Left Column (0-4) and Right Column (5-9) sharing openIndex */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 items-start">
          
          {/* Left Column (Items 1-5) */}
          <div className="space-y-4">
            {leftColumnFaqs.map((faq, idx) => {
              const globalIndex = idx;
              const isOpen = openIndex === globalIndex;
              return (
                <FAQCard 
                  key={faq.id}
                  faq={faq}
                  index={globalIndex}
                  isOpen={isOpen}
                  onToggle={() => handleToggle(globalIndex)}
                />
              );
            })}
          </div>

          {/* Right Column (Items 6-10) */}
          <div className="space-y-4">
            {rightColumnFaqs.map((faq, idx) => {
              const globalIndex = idx + 5;
              const isOpen = openIndex === globalIndex;
              return (
                <FAQCard 
                  key={faq.id}
                  faq={faq}
                  index={globalIndex}
                  isOpen={isOpen}
                  onToggle={() => handleToggle(globalIndex)}
                />
              );
            })}
          </div>

        </div>

        {/* Mobile & Tablet View: Single Column Stack (Items 0-9 in Sequential Order) */}
        <div className="lg:hidden space-y-4">
          {faqData.map((faq, globalIndex) => {
            const isOpen = openIndex === globalIndex;
            return (
              <FAQCard 
                key={faq.id}
                faq={faq}
                index={globalIndex}
                isOpen={isOpen}
                onToggle={() => handleToggle(globalIndex)}
              />
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 sm:mt-18 rounded-3xl bg-gradient-to-r from-blue-50/90 via-cyan-50/60 to-emerald-50/40 border border-blue-200/80 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Have a bespoke networking requirement?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Speak directly with our UK Lead Network Architects for an instant technical consultation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-xs hover:shadow-md flex items-center gap-2 group"
            >
              <span>Speak with an Engineer</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// Reusable FAQ Accordion Item Component
function FAQCard({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 5) * 0.08 }}
      className={`relative rounded-2xl border transition-all duration-300 overflow-hidden text-left ${
        isOpen 
          ? 'border-blue-400 shadow-[0_12px_28px_-6px_rgba(0,102,255,0.12)] bg-gradient-to-r from-blue-50/25 via-white to-white' 
          : 'bg-slate-50/70 hover:bg-white border-slate-200/90 hover:border-blue-300 shadow-2xs hover:shadow-md'
      }`}
    >
      {/* Active Left Border Accent Indicator */}
      {isOpen && (
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-blue-600 via-cyan-500 to-teal-500"></div>
      )}

      {/* Accordion Question Trigger Header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none text-left"
        aria-expanded={isOpen}
      >
        <span className={`text-sm sm:text-base font-bold transition-colors ${
          isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'
        }`}>
          {faq.question}
        </span>

        {/* Plus that rotates 45deg to × icon */}
        <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-300 ${
          isOpen 
            ? 'bg-blue-600 text-white border-blue-600 shadow-xs' 
            : 'bg-slate-50 text-slate-500 border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-600'
        }`}>
          <Plus className={`w-4 h-4 transition-transform duration-300 ease-out ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`} />
        </div>
      </button>

      {/* Accordion Answer Content using AnimatePresence for smooth height: auto */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
              <p>{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

