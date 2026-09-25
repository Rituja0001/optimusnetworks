import React from 'react';
import FloatingNavbar from '../components/layout/FloatingNavbar';
import HeroSection from '../components/hero/HeroSection';
import TrustedPartnersStrip from '../components/hero/TrustedPartnersStrip';
import WhyChooseUs from '../components/about/WhyChooseUs';
import ServicesSection from '../components/services/ServicesSection';
import CaseStudiesSection from '../components/case-studies/CaseStudiesSection';
import FAQSection from '../components/faq/FAQSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import CTABanner from '../components/cta/CTABanner';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/common/CustomCursor';

/**
 * HomePage2 - Variant 2 of Optimus Networks Home Page
 * 
 * Features applied ONLY to this variant:
 * 1. Hero Section top spacing: Reduced from 10rem to 7rem on desktop (pt-28) with proportional scaling.
 * 2. Hero Section Network/Globe visual: Animated 360° rotating wireframe globe with glowing nodes
 *    and streaming data arcs layered behind the floating stat cards.
 * 3. Cinematic Blur-to-Sharp Text Reveal: Main headline features word-by-word reveal with blur transition
 *    and prefers-reduced-motion accessibility support.
 * 4. Alternating Dark Sections:
 *    - Section 1 (Hero): Light
 *    - Section 2 (Trusted Partners): Dark (#0A1628 navy, dark glass cards, cyan badge)
 *    - Section 3 (Why Choose Us): Light (#F8FAFC)
 *    - Section 4 (Services): Dark (#0A1628 navy, dark glassmorphism cards, cyan hover glow)
 *    - Section 5 (Case Studies): Light (#F8FAFC)
 *    - Section 6 (FAQ): Dark (#0A1628 navy, dark glass accordion items, glowing cyan indicators)
 *    - Section 7 (Testimonials): Light (#F8FAFC)
 *    - Section 8 (CTA Banner): Contained Dark Card on Light base
 *    - Section 9 (Footer): Deep Enterprise Navy
 * 5. Futuristic Custom Cursor: Glowing cyan orb with continuous rotating dashed reticle ring
 *    and sonar ping ripple animation on click.
 */
export default function HomePage2({ 
  onOpenModal, 
  setIsPortalModalOpen,
  onNavigate 
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-cyan-500 selection:text-white relative font-sans overflow-x-hidden">
      
      {/* Custom Futuristic Glowing Orb & Rotating Reticle Animated Cursor */}
      <CustomCursor variant="page2" />

      {/* 1. Top Floating Navigation Bar (Glassmorphic) */}
      <FloatingNavbar 
        onOpenContact={() => onOpenModal('contact')}
        onOpenPortal={() => setIsPortalModalOpen(true)}
        onNavigate={onNavigate}
      />

      {/* 2. Main Page Content Sequence */}
      <main>
        {/* Section 1: Hero Section (Light Theme, 7rem top padding, Network Globe Visual, Cinematic Reveal) */}
        <HeroSection 
          isVariant2={true}
          onOpenSurvey={() => onOpenModal('survey')}
          onOpenAvailability={() => onOpenModal('availability')}
        />

        {/* Section 2: Trusted Technology Partners (DARK Navy Theme) */}
        <TrustedPartnersStrip 
          theme="dark" 
        />

        {/* Section 3: Why Choose Optimus Networks (LIGHT Theme) */}
        <WhyChooseUs 
          onOpenContact={() => onOpenModal('contact')} 
        />

        {/* Section 4: Our Core Services (DARK Navy Theme with Dark Glassmorphism Cards) */}
        <ServicesSection 
          theme="dark"
          onOpenSurvey={() => onOpenModal('survey')}
          onOpenContact={() => onOpenModal('contact')}
        />

        {/* Section 5: Client Case Studies (LIGHT Theme) */}
        <CaseStudiesSection 
          onOpenContact={() => onOpenModal('contact')} 
        />

        {/* Section 6: Frequently Asked Questions (DARK Navy Theme with Dark Accordion Cards) */}
        <FAQSection 
          theme="dark"
          onOpenContact={() => onOpenModal('contact')}
          onOpenSurvey={() => onOpenModal('survey')}
        />

        {/* Section 7: Client Testimonials & Social Proof Marquee (LIGHT Theme) */}
        <TestimonialsSection 
          onOpenContact={() => onOpenModal('contact')}
          onOpenSurvey={() => onOpenModal('survey')}
        />

        {/* Section 8: Standalone High-Impact Dark CTA Banner (Contained Dark Card on Light Base) */}
        <CTABanner 
          onOpenAssessment={() => onOpenModal('contact')}
          onOpenSurvey={() => onOpenModal('survey')}
        />
      </main>

      {/* Global Enterprise Footer (Dark Navy) */}
      <Footer 
        onOpenPortal={() => setIsPortalModalOpen(true)}
        onOpenQuote={() => onOpenModal('survey')}
      />

    </div>
  );
}
