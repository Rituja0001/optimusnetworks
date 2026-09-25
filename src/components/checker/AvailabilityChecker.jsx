import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  CheckCircle2, 
  Zap, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  AlertTriangle, 
  Server, 
  Building,
  RefreshCw
} from 'lucide-react';

export default function AvailabilityChecker({ onOpenQuote }) {
  const [postcode, setPostcode] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCheck = (e) => {
    e.preventDefault();
    const cleanPostcode = postcode.trim().toUpperCase();

    if (!cleanPostcode || cleanPostcode.length < 3) {
      setErrorMsg('Please enter a valid UK postcode (e.g. EC2A 4NE, M1 1AE, BS1 4DJ).');
      return;
    }

    setErrorMsg('');
    setIsChecking(true);
    setCheckResult(null);

    // Simulate carrier exchange API query (Openreach + Optimus DWDM Ring)
    setTimeout(() => {
      setIsChecking(false);

      // Deterministic yet realistic output based on postcode area
      const isLondon = cleanPostcode.startsWith('E') || cleanPostcode.startsWith('W') || cleanPostcode.startsWith('N') || cleanPostcode.startsWith('S');
      const isManchester = cleanPostcode.startsWith('M');
      const isBirmingham = cleanPostcode.startsWith('B');

      setCheckResult({
        postcode: cleanPostcode,
        status: "On-Net Fiber Confirmed",
        exchange: isLondon ? "London Central (Telehouse / City Hub)" : isManchester ? "Manchester Central (Equinix Core)" : isBirmingham ? "Birmingham Midland Aggregator" : "UK National Optical Interconnect",
        latencyToExchange: isLondon ? "< 1.4ms" : isManchester ? "< 2.8ms" : "< 4.6ms",
        speedOptions: ["1 Gbps Symmetrical", "10 Gbps High-Density", "100 Gbps Core DWDM"],
        leadTime: "12 - 20 Working Days (Standard PIA Access)",
        carrierPiers: "Optimus Metro Ring + Openreach PIA Diversity",
        readyForQuote: true,
      });
    }, 1200);
  };

  return (
    <section id="checker" className="py-24 relative overflow-hidden bg-[#0F172A] border-y border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-semibold text-brand-cyan">
            <MapPin className="w-3.5 h-3.5" /> Real-Time UK Optical Feasibility
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Check Your Site's Fiber Readiness
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Verify immediate dark fiber availability, dedicated optical bearer lead times, and sub-millisecond route feasibility for your UK headquarters or branch estate.
          </p>
        </div>

        {/* Input Bar Card */}
        <div className="max-w-3xl mx-auto rounded-3xl glass-panel bg-slate-900/90 border border-brand-cyan/30 p-4 sm:p-6 shadow-2xl">
          <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-cyan" />
              <input
                type="text"
                value={postcode}
                onChange={(e) => { setPostcode(e.target.value); setErrorMsg(''); }}
                placeholder="Enter UK Postcode (e.g. EC2A 4NE, M1 1AE, EH1 1YZ)"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm sm:text-base font-semibold uppercase focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all"
              />
            </div>
            
            <button
              type="submit"
              disabled={isChecking}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-blue-600 hover:to-brand-cyan text-white text-sm sm:text-base font-bold shadow-glow-blue transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 shrink-0"
            >
              {isChecking ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Checking Core DB...</span>
                </>
              ) : (
                <>
                  <span>Check Site Fiber</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {errorMsg && (
            <div className="flex items-center gap-2 mt-3 text-xs text-rose-400 font-medium pl-2">
              <AlertTriangle className="w-4 h-4" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Quick example helper badges */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-white/5 text-xs text-slate-400">
            <span>Quick test postcodes:</span>
            {['EC2A 4NE', 'M1 1AE', 'BS1 4DJ', 'EH1 1YZ'].map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => { setPostcode(example); setErrorMsg(''); }}
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 hover:text-brand-cyan border border-white/10 font-mono transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        {/* Live Search Results Card */}
        {checkResult && (
          <div className="max-w-3xl mx-auto mt-8 rounded-3xl glass-panel bg-slate-900/95 border border-emerald-500/40 p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-glow-emerald">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{checkResult.status}</h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Target Postcode: <strong className="text-brand-cyan font-mono">{checkResult.postcode}</strong>
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <div className="text-xs text-slate-400">Serving Exchange Node</div>
                <div className="text-sm font-semibold text-white">{checkResult.exchange}</div>
              </div>
            </div>

            {/* Spec Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Zap className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Available Speeds</span>
                </div>
                <div className="text-sm font-bold text-white font-mono">1Gbps – 100Gbps</div>
                <div className="text-[11px] text-slate-400">Symmetrical unmetered</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Est. Provisioning</span>
                </div>
                <div className="text-sm font-bold text-white font-mono">12 - 20 Days</div>
                <div className="text-[11px] text-slate-400">Express track option</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Guaranteed SLA</span>
                </div>
                <div className="text-sm font-bold text-emerald-400 font-mono">99.999% (&lt;4h MTTR)</div>
                <div className="text-[11px] text-slate-400">24/7 ATS monitored</div>
              </div>
            </div>

            {/* Bottom action bar */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                <span>Infrastructure: </span>
                <span className="text-slate-200 font-medium">{checkResult.carrierPiers}</span>
              </div>

              <button
                onClick={() => onOpenQuote({ postcode: checkResult.postcode, serviceType: 'Dedicated Internet Access (DIA)' })}
                className="py-3 px-6 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white text-xs font-bold shadow-glow-blue transition-all flex items-center justify-center gap-2 group"
              >
                <span>Generate Official Site Proposal</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

