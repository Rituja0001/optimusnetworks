import React, { useState } from 'react';
import { X, Lock, ShieldCheck, ArrowRight, Server, Key, AlertCircle } from 'lucide-react';

export default function PortalModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [tenantId, setTenantId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060B18]/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-md rounded-2xl glass-panel border border-brand-blue/30 p-8 shadow-2xl bg-gradient-to-b from-brand-slate/95 to-[#060B18]/95 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-cyan shadow-glow-cyan">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Optimus Insight NOC</h3>
            <p className="text-xs text-brand-muted">Enterprise Telemetry & Portal Login</p>
          </div>
        </div>

        {isSuccess ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-glow-emerald">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold text-white">SSO Verification Dispatched</h4>
            <p className="text-sm text-slate-300">
              A secure hardware MFA handshake token has been forwarded to the registered admin address for <strong className="text-brand-cyan">{email || 'tenant'}</strong>.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="w-full mt-4 py-2.5 px-4 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white font-medium text-sm transition-all"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-3 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300">
                Authorized access only for verified UK enterprise tenants with dedicated DIA/WAN interconnects.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Enterprise SSO / Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="architect@enterprise.co.uk"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Optimus Tenant ID / Org Prefix
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="OPT-UK-8842"
                  value={tenantId}
                  onChange={(e) => setTenantId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all uppercase"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-cyan text-white font-semibold text-sm transition-all shadow-glow-blue flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Authenticating with UK Core...</span>
              ) : (
                <>
                  <span>Authenticate Portal Session</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="flex items-center justify-between text-xs text-brand-muted pt-2 border-t border-white/5">
              <span className="flex items-center gap-1">
                <Server className="w-3.5 h-3.5 text-brand-cyan" /> Equinix LD8 Gateway
              </span>
              <span className="text-slate-400 hover:text-white cursor-pointer">Help & 24/7 ATS Support</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

