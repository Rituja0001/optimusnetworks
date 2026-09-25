import React, { useState, useEffect } from 'react';
import FloatingNavbar from './components/layout/FloatingNavbar';
import HeroSection from './components/hero/HeroSection';
import TrustedPartnersStrip from './components/hero/TrustedPartnersStrip';
import WhyChooseUs from './components/about/WhyChooseUs';
import ServicesSection from './components/services/ServicesSection';
import CaseStudiesSection from './components/case-studies/CaseStudiesSection';
import FAQSection from './components/faq/FAQSection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import CTABanner from './components/cta/CTABanner';
import Footer from './components/layout/Footer';
import HomePage2 from './pages/HomePage2';
import { X, CheckCircle2, ShieldCheck, Lock, ArrowRight, Zap, Phone, Mail, Building, MapPin } from 'lucide-react';

export default function App() {
  const [isSurveyModalOpen, setIsSurveyModalOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('survey'); // 'survey' | 'architect' | 'contact'
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Path detection for Home Page 2
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      const isHome2 = window.location.pathname === '/home-2' || 
                      window.location.search.includes('page=2') || 
                      window.location.hash === '#/home-2';
      return isHome2 ? '/home-2' : '/';
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const isHome2 = window.location.pathname === '/home-2' || 
                      window.location.search.includes('page=2') || 
                      window.location.hash === '#/home-2';
      setCurrentPath(isHome2 ? '/home-2' : '/');
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openModal = (mode = 'survey') => {
    setModalMode(mode);
    setIsSubmitted(false);
    setIsSurveyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-blue-600 selection:text-white relative font-sans overflow-x-hidden">
      
      {/* Route Switcher: Home Page 2 vs Original Home Page */}
      {currentPath === '/home-2' ? (
        <HomePage2 
          onOpenModal={openModal}
          setIsPortalModalOpen={setIsPortalModalOpen}
        />
      ) : (
        <>
          {/* 1. Top Floating Navigation Bar (Glassmorphic) */}
          <FloatingNavbar 
            onOpenContact={() => openModal('contact')}
            onOpenPortal={() => setIsPortalModalOpen(true)}
          />

          {/* 2. Main Page Content Sequence */}
          <main>
            {/* 1. Hero Section */}
            <HeroSection 
              onOpenSurvey={() => openModal('survey')}
              onOpenAvailability={() => openModal('availability')}
            />

            {/* 2. Trusted Technology Partners Section */}
            <TrustedPartnersStrip />

            {/* 3. Why Choose Optimus Networks (About Us) Section */}
            <WhyChooseUs onOpenContact={() => openModal('contact')} />

            {/* 4. Our Core Services Section */}
            <ServicesSection 
              onOpenSurvey={() => openModal('survey')}
              onOpenContact={() => openModal('contact')}
            />

            {/* 5. Client Case Studies Section */}
            <CaseStudiesSection onOpenContact={() => openModal('contact')} />

            {/* 6. Frequently Asked Questions (FAQ) Section */}
            <FAQSection 
              onOpenContact={() => openModal('contact')}
              onOpenSurvey={() => openModal('survey')}
            />

            {/* 7. Client Testimonials & Social Proof Marquee Section */}
            <TestimonialsSection 
              onOpenContact={() => openModal('contact')}
              onOpenSurvey={() => openModal('survey')}
            />

            {/* 8. Standalone High-Impact Dark CTA Banner Section */}
            <CTABanner 
              onOpenAssessment={() => openModal('contact')}
              onOpenSurvey={() => openModal('survey')}
            />
          </main>

          {/* 3. Global Enterprise Footer */}
          <Footer 
            onOpenPortal={() => setIsPortalModalOpen(true)}
            onOpenQuote={() => openModal('survey')}
          />
        </>
      )}

      {/* Floating Home Variant Toggle Pill (Persistent across pages) */}
      <div 
        className="fixed bottom-5 right-5 z-40 flex items-center bg-slate-900/90 backdrop-blur-md border border-white/20 p-1.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.45)] text-xs font-semibold"
        role="navigation"
        aria-label="Home page version switcher"
      >
        <button
          type="button"
          onClick={() => navigateTo('/')}
          className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
            currentPath === '/' 
              ? 'bg-blue-600 text-white shadow-xs font-bold' 
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Home 1 (Original)
        </button>
        <button
          type="button"
          onClick={() => navigateTo('/home-2')}
          className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
            currentPath === '/home-2' 
              ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 font-bold shadow-xs' 
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <span>Home 2 (Variant)</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
        </button>
      </div>

      {/* Interactive Site Survey / Lead Capture Modal (Light Theme) */}
      {isSurveyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-lg rounded-3xl bg-white/95 border border-slate-200/90 p-6 sm:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.18)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsSurveyModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Survey Dispatched</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your site survey feasibility inquiry has been routed to our UK Lead Network Architect team. A detailed carrier route feasibility and SLA quote will be delivered within 2 hours.
                </p>
                <button
                  onClick={() => setIsSurveyModalOpen(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide transition-all shadow-[0_0_15px_rgba(0,102,255,0.3)]"
                >
                  Return to Overview
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {modalMode === 'survey' ? 'Schedule a Site Survey' : modalMode === 'availability' ? 'Check Network & Fiber Availability' : 'Get in Touch with an Engineer'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Rapid fiber feasibility assessment across 60+ UK carrier networks.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alistair Finch"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.co.uk"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Site Postcode *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. EC2A 4NE"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm uppercase focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Connectivity Solution</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-500 transition-all">
                      <option value="dia">Dedicated Internet Access (DIA 1Gbps - 100Gbps)</option>
                      <option value="dual-active">Dual Active-Active Leased Lines (Hitless Failover)</option>
                      <option value="sd-wan">Enterprise SD-WAN & Multi-Site MPLS</option>
                      <option value="5g-temp">Rapid Temporary 5G Deployment (Live in 48h)</option>
                      <option value="cloud">Cloud Direct Interconnect (AWS / Azure UK South)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-[0_4px_16px_rgba(0,102,255,0.25)] flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Request Site Survey Feasibility</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Interactive Portal Modal (Light Theme) */}
      {isPortalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-md rounded-3xl bg-white/95 border border-slate-200/90 p-6 sm:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.18)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPortalModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Optimus NOC Portal</h3>
                <p className="text-xs text-slate-500">Real-time enterprise telemetry login</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate SSO Email</label>
                <input
                  type="email"
                  placeholder="engineer@enterprise.co.uk"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Tenant ID</label>
                <input
                  type="text"
                  placeholder="OPT-UK-9042"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-blue-500"
                />
              </div>

              <button
                type="button"
                onClick={() => setIsPortalModalOpen(false)}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-[0_4px_16px_rgba(0,102,255,0.25)] transition-all"
              >
                Authenticate Session
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
