import React from 'react';
import FloatingNavbar from '../components/layout/FloatingNavbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/common/CustomCursor';
import { 
  Cookie, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ArrowLeft, 
  Sliders, 
  FileText,
  Mail,
  Phone
} from 'lucide-react';

/**
 * CookiePolicyPage - Enterprise Cookie Policy page for Optimus Networks.
 */
export default function CookiePolicyPage({ onNavigate, onOpenModal, setIsPortalModalOpen }) {
  const cookieTypes = [
    {
      title: "1. Strictly Necessary & Essential Cookies",
      badge: "Mandatory",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "These cookies are vital for the proper operation of our platform and secure telecommunications services. They enable secure session management, DDoS mitigation, and single sign-on authentication into the Optimus NOC portal.",
      examples: ["Session identifier tokens", "Cloudflare edge security routing", "CSRF authentication tokens"]
    },
    {
      title: "2. Performance & Network Analytics Cookies",
      badge: "Performance",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description: "These cookies collect anonymous telemetry regarding visitor journeys, circuit availability query response times, and page load velocities, allowing our network architects to continuously optimize platform delivery.",
      examples: ["Aggregated page load telemetry", "Error tracking diagnostics", "Bandwidth estimator caching"]
    },
    {
      title: "3. Functionality & Site Preference Cookies",
      badge: "Preferences",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      description: "These cookies remember your technical configuration choices, such as selected bandwidth metrics (Mbps vs Gbps), regional postcode survey histories, and layout preferences.",
      examples: ["Site survey postcode recollection", "Selected connectivity solution filter", "UI theme state"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-blue-600 selection:text-white relative font-sans overflow-x-hidden">
      
      {/* Dual-layer custom cursor */}
      <CustomCursor variant="default" />

      {/* Floating Header */}
      <FloatingNavbar 
        onOpenContact={() => onOpenModal('contact')}
        onOpenPortal={() => setIsPortalModalOpen(true)}
        onNavigate={onNavigate}
      />

      {/* Main Page Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Home Page</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-slate-200/80">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 backdrop-blur-md shadow-2xs">
            <Cookie className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">
              Privacy & Compliance
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Cookie Policy
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            This policy outlines how Optimus Networks Ltd uses cookies, local storage tokens, and related technologies to provide a resilient, secure, and personalized enterprise connectivity experience.
          </p>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
            <span>Last Updated: September 2026</span>
            <span>•</span>
            <span>UK GDPR & PECR Compliant</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          {/* Section: Overview */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              What Are Cookies?
            </h2>
            <p>
              Cookies are small alphanumeric text files stored on your computer or mobile device when you access websites. They are widely utilized by enterprise web platforms to guarantee site security, manage authenticated user sessions, and gather diagnostic telemetry for service optimization.
            </p>
          </section>

          {/* Section: Categories */}
          <section className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Categories of Cookies We Deploy
            </h2>

            <div className="space-y-4">
              {cookieTypes.map((cookie, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-3 text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-bold text-base sm:text-lg text-slate-900">
                      {cookie.title}
                    </h3>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${cookie.badgeColor}`}>
                      {cookie.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600">
                    {cookie.description}
                  </p>

                  <div className="pt-1">
                    <div className="text-xs font-semibold text-slate-700 mb-1.5">Examples of technologies used:</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500 font-mono">
                      {cookie.examples.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Managing Preferences */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Managing Your Cookie Preferences
            </h2>
            <p>
              You maintain full authority over cookie storage on your devices. Most browsers allow you to modify cookie controls within their privacy settings:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and security &rarr; Third-party cookies.</li>
              <li><strong>Mozilla Firefox:</strong> Settings &rarr; Privacy & Security &rarr; Enhanced Tracking Protection.</li>
              <li><strong>Apple Safari:</strong> Preferences &rarr; Privacy &rarr; Manage Website Data.</li>
              <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions.</li>
            </ul>
            <p className="text-xs text-slate-500 italic pt-1">
              Please note that disabling strictly necessary cookies may restrict access to client telemetry dashboards and authenticated NOC portal features.
            </p>
          </section>

          {/* Section: Contact */}
          <section className="rounded-3xl bg-gradient-to-r from-blue-50/80 via-cyan-50/60 to-slate-50 border border-blue-200/80 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Questions Regarding Our Cookie Management?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              For inquiries regarding our data handling frameworks or to exercise your GDPR privacy rights, contact our Data Protection Officer:
            </p>
            <div className="flex flex-wrap items-center gap-5 pt-1 text-xs sm:text-sm font-medium">
              <a 
                href="mailto:info@optimusnetworks.co.uk"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@optimusnetworks.co.uk</span>
              </a>
              <a 
                href="tel:+443330164050"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+44 (0)333 016 4050</span>
              </a>
            </div>
          </section>

        </div>

      </main>

      {/* Footer */}
      <Footer 
        onOpenPortal={() => setIsPortalModalOpen(true)}
        onOpenQuote={() => onOpenModal('survey')}
      />

    </div>
  );
}
