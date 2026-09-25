import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, ShieldCheck, ArrowRight } from 'lucide-react';

const STORAGE_KEY = 'optimus_cookie_consent';

/**
 * CookieConsent - Floating Cookie Consent Widget
 * 
 * Behavior:
 * - Checks localStorage for existing consent choice.
 * - On first visit without choice, auto-expands after ~1.2s with smooth slide-up entrance.
 * - Once accepted, declined, or closed, collapses into a persistent bottom-left circular cookie button.
 * - Clicking the persistent button re-opens the consent panel anytime.
 * - Supports theme="light" (Home Page 1) and theme="dark" (Home Page 2).
 */
export default function CookieConsent({ theme = "light", onNavigate }) {
  const isDark = theme === "dark";
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    let timer = null;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Auto-show banner on first visit after 1.2s delay
        timer = setTimeout(() => {
          setIsExpanded(true);
        }, 1200);
      }
    } catch (e) {
      // Fallback if localStorage is disabled
      timer = setTimeout(() => {
        setIsExpanded(true);
      }, 1200);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch (e) {}
    setIsExpanded(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined');
    } catch (e) {}
    setIsExpanded(false);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  if (!hasMounted) return null;

  return (
    <aside 
      className="fixed bottom-4 sm:bottom-5 left-4 sm:left-5 z-[99990] pointer-events-auto select-none font-sans"
      aria-label="Cookie consent widget"
    >
      <AnimatePresence mode="wait">
        {/* ============================================================== */}
        {/* 1. EXPANDED CONSENT BANNER CARD                                 */}
        {/* ============================================================== */}
        {isExpanded ? (
          <motion.div
            key="cookie-card"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`w-[calc(100vw-32px)] sm:w-[380px] max-w-[390px] rounded-3xl p-5 sm:p-6 text-left shadow-2xl transition-colors duration-300 relative ${
              isDark
                ? 'bg-slate-900/95 backdrop-blur-2xl border border-cyan-500/30 text-white shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
                : 'bg-white/95 backdrop-blur-2xl border border-slate-200/90 text-slate-800 shadow-[0_20px_50px_rgba(15,23,42,0.16)]'
            }`}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className={`absolute top-4 right-4 p-1.5 rounded-xl transition-colors ${
                isDark
                  ? 'text-slate-400 hover:text-white hover:bg-white/10'
                  : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Dismiss cookie banner"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header: Icon + Title */}
            <div className="flex items-center gap-3 mb-3 pr-6">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                isDark 
                  ? 'bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.3)]' 
                  : 'bg-blue-50 border border-blue-200 text-blue-600 shadow-xs'
              }`}>
                <Cookie className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className={`font-bold text-sm sm:text-base leading-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  We Value Your Privacy
                </h3>
                <span className={`text-[11px] font-mono ${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  UK GDPR & Security Telemetry
                </span>
              </div>
            </div>

            {/* Explanatory Body Copy */}
            <p className={`text-xs sm:text-[13px] leading-relaxed mb-4 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              We use cookies to enhance your browsing experience, secure our enterprise telemetry portal, and analyze site traffic. By clicking Accept, you agree to our use of cookies.
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 mb-3">
              <button
                type="button"
                onClick={handleAccept}
                className={`py-2 px-3.5 rounded-xl font-bold text-xs tracking-wide transition-all shadow-xs flex items-center justify-center gap-1.5 ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-slate-950 font-bold shadow-[0_4px_16px_rgba(34,211,238,0.3)]'
                    : 'bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:opacity-95 text-white shadow-[0_4px_16px_rgba(0,102,255,0.25)]'
                }`}
              >
                <span>Accept All</span>
              </button>

              <button
                type="button"
                onClick={handleDecline}
                className={`py-2 px-3.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center ${
                  isDark
                    ? 'border border-white/20 hover:bg-white/10 text-slate-300 hover:text-white'
                    : 'border border-slate-200 hover:bg-slate-100/80 text-slate-700'
                }`}
              >
                <span>Decline</span>
              </button>
            </div>

            {/* Bottom Link to Full Policy */}
            <div className="pt-1 text-center sm:text-left">
              <a
                href="/cookie-policy"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('/cookie-policy');
                  }
                }}
                className={`inline-flex items-center gap-1 text-[11px] font-semibold transition-colors group ${
                  isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                <span>Read Full Cookie Policy</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ) : (
          /* ============================================================== */
          /* 2. PERSISTENT FLOATING CIRCULAR ICON BUTTON                    */
          /* ============================================================== */
          <motion.div
            key="cookie-icon-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {/* Tooltip on Hover */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className={`absolute bottom-full left-0 mb-2.5 whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg pointer-events-none ${
                    isDark
                      ? 'bg-slate-900 border border-cyan-500/40 text-cyan-300 shadow-[0_8px_20px_rgba(0,0,0,0.5)]'
                      : 'bg-slate-900 text-white shadow-[0_8px_20px_rgba(15,23,42,0.2)]'
                  }`}
                >
                  <span>Cookie Preferences</span>
                  {/* Tooltip downward caret */}
                  <span className={`absolute top-full left-4 -mt-1 border-4 border-transparent ${
                    isDark ? 'border-t-slate-900' : 'border-t-slate-900'
                  }`} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Circular Pulse Button */}
            <motion.button
              type="button"
              onClick={handleToggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 3.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer ${
                isDark
                  ? 'bg-slate-900/90 hover:bg-slate-800 text-cyan-400 border border-cyan-500/40 shadow-[0_8px_25px_rgba(0,0,0,0.5),0_0_15px_rgba(34,211,238,0.2)]'
                  : 'bg-white/95 hover:bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-200/90 shadow-[0_8px_25px_rgba(15,23,42,0.12)]'
              }`}
              title="Cookie Preferences"
              aria-label="Open cookie preferences banner"
            >
              <Cookie className={`w-5 h-5 sm:w-5.5 sm:h-5.5 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
