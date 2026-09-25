import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Zap, ArrowRight, Building, MapPin, Mail, Phone, User } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    postcode: initialData.postcode || '',
    serviceType: initialData.serviceType || 'NetConnect Flagship',
    speed: initialData.speed || '10Gbps Symmetrical',
    siteCount: '1-5 Sites',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync initialData if updated
  React.useEffect(() => {
    if (initialData.postcode || initialData.serviceType) {
      setFormData(prev => ({
        ...prev,
        postcode: initialData.postcode || prev.postcode,
        serviceType: initialData.serviceType || prev.serviceType,
        speed: initialData.speed || prev.speed,
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060B18]/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl my-8 rounded-2xl glass-panel border border-brand-cyan/30 p-6 md:p-8 shadow-2xl bg-gradient-to-b from-[#0F172A] to-[#060B18] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shadow-glow-cyan">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Request Enterprise Proposal & SLA</h3>
            <p className="text-xs text-brand-muted">Custom pricing with 4-Hour On-Net Fiber feasibility assessment</p>
          </div>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-glow-emerald">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-2xl font-bold text-white">Proposal Dispatched</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. An Optimus Senior Network Architect will review the fiber routing for <span className="text-brand-cyan font-semibold">{formData.postcode || 'your location'}</span> and provide a tailored SLA document within 2 working hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="py-2.5 px-6 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white font-semibold text-sm transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-brand-cyan" /> Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alistair Finch"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-brand-cyan" /> Company / Organisation *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Global UK Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-brand-cyan" /> Business Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-cyan" /> Direct Telephone
                </label>
                <input
                  type="tel"
                  placeholder="+44 20 7946 0991"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-cyan" /> Primary Site Postcode *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. EC2A 4NE"
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan transition-all uppercase"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Solution Architecture
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-cyan transition-all"
                >
                  <option value="NetConnect Flagship">NetConnect (Internet + WAN + Edge)</option>
                  <option value="Dedicated Internet Access (DIA)">Dedicated Internet Access (DIA)</option>
                  <option value="Private WAN / MPLS">Private WAN / MPLS & VPLS</option>
                  <option value="Dark Fiber Point-to-Point">Point-to-Point Dark Fiber (P2P)</option>
                  <option value="Enterprise SD-WAN">Cloud-Managed Enterprise SD-WAN</option>
                  <option value="4G/5G Enterprise Failover">Cellular 5G Enterprise Backup</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Required Bandwidth Symmetrical
                </label>
                <select
                  value={formData.speed}
                  onChange={(e) => setFormData({ ...formData, speed: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-cyan transition-all"
                >
                  <option value="1Gbps Symmetrical">1 Gbps Symmetrical</option>
                  <option value="2Gbps Symmetrical">2 Gbps Symmetrical</option>
                  <option value="10Gbps Symmetrical">10 Gbps High Density</option>
                  <option value="40Gbps Data Centre On-Ramp">40 Gbps Data Centre Direct</option>
                  <option value="100Gbps Terabit Optical">100 Gbps Core Optical</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  UK & Global Site Footprint
                </label>
                <select
                  value={formData.siteCount}
                  onChange={(e) => setFormData({ ...formData, siteCount: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-cyan transition-all"
                >
                  <option value="Single Headquarters">Single Headquarters</option>
                  <option value="2 - 5 Multi-Branch">2 - 5 Multi-Branch</option>
                  <option value="6 - 25 Enterprise Sites">6 - 25 Enterprise Sites</option>
                  <option value="25+ National / Global Sites">25+ National / Global Sites</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-cyan text-white font-bold text-sm tracking-wide transition-all shadow-glow-blue flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Querying Optical Node Routing...</span>
                ) : (
                  <>
                    <span>Generate Official Feasibility & Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 text-xs text-brand-muted pt-2 border-t border-white/5">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 99.999% SLA Guarantee
              </span>
              <span>ISO 27001 Certified</span>
              <span>UK Telecoms Security Act Compliant</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

