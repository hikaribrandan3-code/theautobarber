import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { 
  Shield, 
  MapPin, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2,
  TrendingDown
} from 'lucide-react';


type PpfPackage = 'partial' | 'fullFront' | 'trackPackage' | 'stealth';
type Usage = 'city' | 'highway' | null;
type Threat = 'rocks' | 'bugs' | null;

const packages = {
  partial: {
    id: 'partial',
    name: 'PARTIAL FRONT',
    price: '1,200',
    image: '/images/ppf/partial-front.png',
    zones: ['bumper-front', 'hood-leading', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'door-cup-left', 'door-cup-right'],
    features: ['Bumper + Hood Leading Edge (30%)', 'Mirror Caps + Door Cups', '2-Year Warranty']
  },
  fullFront: {
    id: 'fullFront',
    name: 'FULL FRONT',
    price: '1,800',
    image: '/images/ppf/full-front.png',
    zones: ['bumper-front', 'hood', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'headlight-left', 'headlight-right', 'door-cup-left', 'door-cup-right'],
    features: ['Full Hood, Fenders, Bumper', 'Mirrors, Headlights, Door Cups', '10-Year Warranty']
  },
  trackPackage: {
    id: 'trackPackage',
    name: 'TRACK PACKAGE',
    price: '2,400',
    image: '/images/ppf/track-package.png',
    zones: ['bumper-front', 'hood', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'headlight-left', 'headlight-right', 'door-cup-left', 'door-cup-right', 'door-left', 'door-right'], // Simplified list of zones for now
    features: ['Everything in Full Front', 'Rocker Panels & A-Pillars', 'Extended Side Impact Protection']
  },
  stealth: {
    id: 'stealth',
    name: 'STEALTH FULL',
    price: 'GET QUOTE',
    image: '/images/ppf/full-vehicle.png',
    zones: ['bumper-front', 'hood', 'hood-leading', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'door-left', 'door-right', 'door-cup-left', 'door-cup-right', 'roof', 'headlight-left', 'headlight-right'],
    features: ['Every Painted Surface Covered', 'Matte/Satin Finish Available', 'Transferable Lifetime Warranty']
  }
};

export default function PPF() {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();
  
  // Default to fullFront so the visualizer always has something to show
  const [selectedPackage, setSelectedPackage] = useState<PpfPackage>('fullFront');
  
  // Quiz State
  const [usage, setUsage] = useState<Usage>(null);
  const [threat, setThreat] = useState<Threat>(null);
  
  const funnelRef = useRef<HTMLDivElement>(null);

  // Engine: Quiz mapping
  useEffect(() => {
    if (usage && threat) {
      if (usage === 'highway' || threat === 'rocks') {
        setSelectedPackage('fullFront');
      } else {
        setSelectedPackage('partial');
      }
      setTimeout(() => {
        funnelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [usage, threat]);

  const currentPkg = packages[selectedPackage];

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#adaaaa] font-sans pt-16 pb-32 overflow-x-hidden selection:bg-[#C9A962] selection:text-white">
      
      {/* HERO SECTION */}
      <section className="px-6 py-12 lg:py-32 relative overflow-hidden bg-[#0e0e0e] border-b border-white/5 min-h-[75vh] flex items-center">
        {/* Background Image with Fade */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/assets/ppf_application_background.png" 
            alt="PPF Application installation preview"
            className="w-full h-full object-cover opacity-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e]/90 via-[#0e0e0e]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e]/30 via-transparent to-[#0e0e0e]"></div>
        </div>
        
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full">
          <div className="lg:w-1/2">
            <span className="text-[#C9A962] font-display font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs italic">Protect Your Investment</span>
            <h2 className="mt-4 text-5xl md:text-6xl lg:text-8xl font-display font-black leading-[0.8] uppercase tracking-tighter italic text-white drop-shadow-lg">
              <span className="lg:hidden text-[#C9A962]">P.P.F.</span><br className="lg:hidden"/>THE MASTER<br/><span className="text-[#C9A962]">STANDARD</span>
            </h2>
            <p className="mt-6 text-[#adaaaa] max-w-md font-mono text-xs lg:text-sm uppercase tracking-widest leading-relaxed">
              <span className="lg:hidden text-white/90">One rock chip at highway speed and you're looking at a $800 body shop visit — if they can even match the paint. PPF stops it before it starts. Professionally applied, virtually invisible, and if it ever takes a hit — just peel it off and replace it. Your paint underneath stays factory perfect.</span>
              <span className="hidden lg:inline">That new car smell comes with a countdown. Highway debris hits at <span className="text-white font-bold">140mph</span>. Your factory paint won't survive the drive home.</span>
            </p>
            {/* Mobile Trust Bar */}
            <div className="lg:hidden mt-8 grid grid-cols-2 gap-3 py-6 border-y border-white/5 bg-[#131313]/50">
              {[
                "NEW CAR? PROTECT IT NOW",
                "PROFESSIONAL APPLICATION",
                "10-YEAR WARRANTY",
                "PEEL & REPLACE IF DAMAGED"
              ].map(trust => (
                <div key={trust} className="flex items-center gap-2 px-1">
                  <span className="text-[#C9A962] text-xs">✓</span>
                  <span className="text-[8px] font-mono font-black tracking-widest text-[#adaaaa] leading-tight uppercase">{trust}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full pt-12 lg:pt-0">


            {/* Mobile-only "Even Easier to Clean" Section */}
            <div className="lg:hidden mt-8 bg-[#131313] p-6 border border-[#C9A962]/20 shadow-[0_0_20px_rgba(0,102,255,0.05)]">
              <h3 className="text-2xl font-display font-black uppercase italic text-white mb-1 leading-none">THE HYBRID CUT</h3>
              <p className="text-[10px] font-mono font-bold text-[#C9A962] uppercase tracking-[0.2em] mb-3">PPF + CERAMIC COATING</p>
              <p className="text-[#adaaaa] font-mono text-[9px] uppercase tracking-widest leading-relaxed">
                PPF alone is great. PPF + ceramic coating is next level. The coating bonds to the film — water beads off, dirt slides off, and your car stays cleaner longer between washes. Ask us about the combo package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PPF PACKAGE VISUALIZER (unified, clean) ─── */}
      <section className="bg-[#0e0e0e] border-b border-white/5 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-0">
          <p className="text-center font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4 text-[#adaaaa] italic">The Coverage Map</p>
          <h2 className="text-center font-display text-5xl lg:text-9xl font-black uppercase tracking-tighter text-white mb-4 leading-[0.8]">SELECT YOUR <span className="text-[#C9A962]">SHIELD</span></h2>

          {/* ── TAB STRIP ── */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-0 pt-4">
            {(Object.keys(packages) as PpfPackage[]).map((pkgKey) => {
              const pkg = packages[pkgKey];
              const isActive = selectedPackage === pkgKey;
              return (
                <button
                  key={pkgKey}
                  onClick={() => setSelectedPackage(pkgKey)}
                  className={`relative flex-shrink-0 px-5 py-3 font-display font-black text-sm lg:text-lg uppercase tracking-[0.1em] transition-all duration-200 border-b-4 ${
                    isActive
                      ? 'border-[#C9A962] text-[#C9A962] bg-[#C9A962]/5'
                      : 'border-transparent text-[#adaaaa] hover:text-white hover:border-white/20'
                  }`}
                >
                  {pkgKey === 'fullFront' && (
                    <span className="absolute -top-2 right-1 text-[8px] bg-[#C9A962] text-white px-1.5 font-black uppercase tracking-wider">★ Standard</span>
                  )}
                  {pkg.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── FULL-WIDTH IMAGE PANEL ── */}
        <div className="relative w-full bg-[#111] overflow-hidden" style={{ minHeight: '300px' }}>
          {/* Green colour-shift filter over the image — hue-rotate turns the blue coverage zones green */}
          <div
            className="w-full transition-opacity duration-500"
            style={{
              filter: 'saturate(1.5) brightness(1.1)',
            }}
          >
            <img
              key={selectedPackage}
              src={currentPkg.image}
              alt={currentPkg.name + ' PPF coverage'}
              className="w-full h-auto object-contain mx-auto block -mt-10 lg:-mt-20 scale-105"
              style={{ maxHeight: '480px', objectPosition: 'center' }}
            />
          </div>

          {/* ── ANIMATED POINTER LINES ── */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedPackage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none z-20"
            >
              <div className="relative w-full h-full max-w-4xl mx-auto">
                {/* Labels point to specific areas based on package */}
                {/* Each point has a line and a word */}
                
                {/* BUMPER LINE */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-[65%] left-[18%] flex items-center gap-2"
                >
                  <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_10px_white]" />
                  <div className="h-[1px] w-8 bg-white/50" />
                  <span className="font-mono text-[8px] lg:text-[10px] uppercase font-bold text-white tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm">Bumper</span>
                </motion.div>

                {/* HOOD LINE */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-[48%] left-[28%] flex flex-col items-center gap-1"
                >
                  <span className="font-mono text-[8px] lg:text-[10px] uppercase font-bold text-white tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm">Full Hood</span>
                  <div className="w-[1px] h-6 bg-white/50" />
                  <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_10px_white]" />
                </motion.div>

                {/* FENDER / MIRROR LINE (Dynamic depending on pkg) */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-[55%] left-[45%] flex items-center gap-2"
                >
                  <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_10px_white]" />
                  <div className="h-[1px] w-12 bg-white/50" />
                  <span className="font-mono text-[8px] lg:text-[10px] uppercase font-bold text-white tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm">
                    {selectedPackage === 'partial' ? 'Mirrors' : 'Full Fenders'}
                  </span>
                </motion.div>

                {/* ROCKER PANEL / REAR (Only for higher tiers) */}
                {(selectedPackage === 'trackPackage' || selectedPackage === 'stealth') && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="absolute top-[75%] left-[55%] flex flex-col items-center gap-1"
                  >
                    <span className="font-mono text-[8px] lg:text-[10px] uppercase font-bold text-white tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm">Rockers / A-Pillars</span>
                    <div className="w-[1px] h-6 bg-white/50" />
                    <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_10px_white]" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Subtle dark vignette edges so image blends into dark bg */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, transparent 50%, #0e0e0e 100%)'
          }} />

          {/* Coverage label badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0e0e0e]/80 backdrop-blur-sm border border-[#C9A962]/30 px-5 py-2 z-30">
            <span className="font-display font-black text-[#C9A962] text-xl uppercase tracking-[0.15em] italic">
              {currentPkg.name} — {currentPkg.price !== 'GET QUOTE' ? `$${currentPkg.price}` : 'THE CUT'}
            </span>
          </div>
        </div>

        {/* ── DETAIL PANEL ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 lg:py-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            
            {/* Left: name + description */}
            <div className="lg:w-1/2">
              <h3 className="font-display text-5xl lg:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.8] mb-3">
                {currentPkg.name}
              </h3>
              <p className="font-mono text-[10px] lg:text-xs uppercase tracking-widest text-[#adaaaa] leading-relaxed">
                {selectedPackage === 'partial'
                  ? 'Covers the highest-impact front zones: bumper, hood leading edge, mirrors and door cups. Ideal for daily drivers who want smart protection on a tighter budget.'
                  : selectedPackage === 'fullFront'
                  ? 'The industry standard choice. Full hood, fenders, bumper, headlights, mirrors — everything at the front of the car that takes the punishment of the road.'
                  : selectedPackage === 'trackPackage'
                  ? 'Everything in Full Front, plus extended rocker panels and A-pillars for drivers who push harder. Built for highway commuters and track-day enthusiasts.'
                  : 'Complete head-to-toe protection. Every painted surface wrapped. Available in gloss, matte, or satin. The only way to truly set it and forget it.'}
              </p>
            </div>

            {/* Right: features + CTA */}
            <div className="lg:w-1/2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {currentPkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C9A962]" />
                    <span className="font-mono text-[10px] lg:text-xs text-[#e5e2e1] uppercase tracking-wider">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-[#adaaaa] font-mono text-[10px] uppercase tracking-widest">Base Investment</span>
                  <span className="font-display font-black italic text-4xl lg:text-7xl tracking-tighter text-white leading-none">
                    {currentPkg.price !== 'GET QUOTE' ? `$${currentPkg.price}` : 'CALL'}
                  </span>
                </div>
                <button
                  onClick={() => openQuote(`PPF: ${currentPkg.name}`)}
                  className="w-full sm:w-auto bg-[#C9A962] text-white font-display font-black uppercase tracking-[0.2em] text-sm px-12 py-5 hover:bg-[#A6884A] active:scale-95 transition-all shadow-[0_0_24px_rgba(0,102,255,0.3)] rounded-none"
                >
                  RESERVE THE CUT →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMART RECOMMENDER */}
      <section className="px-6 py-6 border-t border-white/5 lg:py-8 bg-[#0e0e0e]" id="funnel" ref={funnelRef}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-display font-black uppercase tracking-tighter italic text-white leading-[0.7]">NOT SURE? <br/><span className="text-[#C9A962]">WE'LL HELP.</span></h2>
            <div className="h-1 w-24 bg-[#C9A962] mx-auto mt-6 shadow-[0_0_20px_#C9A962]"></div>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-[#adaaaa] italic">
              Answer 2 questions to find your coverage tier.
            </p>
          </div>
          
          <div className="space-y-12">
            
            {/* Step 1 */}
            <div className="space-y-4">
              <p className="font-display font-bold uppercase text-lg tracking-[0.2em] text-[#C9A962] italic">01 — HOW DO YOU DRIVE?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => setUsage('city')}
                  className={`py-8 px-6 border-2 transition-all font-display text-2xl font-black uppercase italic tracking-widest flex items-center justify-center rounded-none ${usage === 'city' ? 'border-[#C9A962] bg-[#C9A962]/10 text-[#C9A962]' : 'border-[#262626] bg-[#131313] hover:border-[#484847] text-white hover:bg-[#1a1a1a]'}`}
                >
                  City Standard
                </button>
                <button 
                  onClick={() => setUsage('highway')}
                  className={`py-8 px-6 border-2 transition-all font-display text-2xl font-black uppercase italic tracking-widest flex items-center justify-center rounded-none ${usage === 'highway' ? 'border-[#C9A962] bg-[#C9A962]/10 text-[#C9A962]' : 'border-[#262626] bg-[#131313] hover:border-[#484847] text-white hover:bg-[#1a1a1a]'}`}
                >
                  Highway Commuter
                </button>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="space-y-4">
              <p className="font-display font-bold uppercase text-lg tracking-[0.2em] text-[#C9A962] italic">02 — WHAT'S THE MAIN CONCERN?</p>
              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => setThreat('rocks')}
                  className={`flex justify-between items-center p-6 lg:p-8 border-2 transition-all group rounded-none ${threat === 'rocks' ? 'bg-[#C9A962]/10 border-[#C9A962]' : 'bg-[#131313] border-[#262626] hover:bg-white/5'}`}
                >
                  <span className={`font-display text-2xl font-black uppercase italic tracking-widest ${threat === 'rocks' ? 'text-[#C9A962]' : 'text-white'}`}>Rock Chips & Debris</span>
                  <ArrowRight className={`w-6 h-6 transition-opacity ${threat === 'rocks' ? 'opacity-100 text-[#C9A962]' : 'opacity-0 group-hover:opacity-50 text-white'}`} />
                </button>
                <button 
                  onClick={() => setThreat('bugs')}
                  className={`flex justify-between items-center p-6 lg:p-8 border-2 transition-all group rounded-none ${threat === 'bugs' ? 'bg-[#C9A962]/10 border-[#C9A962]' : 'bg-[#131313] border-[#262626] hover:bg-white/5'}`}
                >
                  <span className={`font-display text-2xl font-black uppercase italic tracking-widest ${threat === 'bugs' ? 'text-[#C9A962]' : 'text-white'}`}>Environmental Fallout</span>
                  <ArrowRight className={`w-6 h-6 transition-opacity ${threat === 'bugs' ? 'opacity-100 text-[#C9A962]' : 'opacity-0 group-hover:opacity-50 text-white'}`} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="bg-[#131313] px-6 py-12 lg:py-16 border-y border-white/5">
        <p className="text-center font-mono font-bold text-[9px] uppercase tracking-[0.4em] text-[#adaaaa] mb-10">Certified Film Partners</p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60">
          <div className="flex flex-col items-center hover:opacity-100 transition-opacity">
            <span className="text-3xl lg:text-5xl font-display font-black italic tracking-tighter text-white">STEK</span>
            <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mt-1 text-[#C9A962]">Authorized Dealer</span>
          </div>
          <div className="flex flex-col items-center hover:opacity-100 transition-opacity">
            <span className="text-3xl lg:text-5xl font-display font-black tracking-tight text-white">XPEL</span>
            <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mt-1 text-[#C9A962]">Ultimate Plus</span>
          </div>
          <div className="flex flex-col items-center hover:opacity-100 transition-opacity">
            <span className="text-3xl lg:text-5xl font-display font-black italic tracking-tighter text-white">3M</span>
            <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mt-1 text-[#C9A962]">Pro Series</span>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className="px-6 py-16 bg-[#0e0e0e] border-t border-white/5 pb-48">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-8 text-center italic">REQUEST A <span className="text-[#C9A962]">QUOTE</span></h2>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); openQuote(`Quote Request from PPF page`); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">Name</label>
                <input type="text" className="w-full bg-[#131313] border border-white/10 p-4 text-white font-mono focus:border-[#C9A962] outline-none" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">Phone</label>
                <input type="tel" className="w-full bg-[#131313] border border-white/10 p-4 text-white font-mono focus:border-[#C9A962] outline-none" placeholder="(xxx) xxx-xxxx" required />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">Vehicle (Year / Make / Model)</label>
              <input type="text" className="w-full bg-[#131313] border border-white/10 p-4 text-white font-mono focus:border-[#C9A962] outline-none" placeholder="e.g. 2024 Porsche 911 GT3" required />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-[#131313] border border-white/10 p-4 text-white font-mono focus:border-[#C9A962] outline-none" placeholder="Any specific concerns?" />
            </div>
            <button type="submit" className="w-full bg-[#C9A962] text-white font-display font-black uppercase tracking-[0.2em] p-6 hover:bg-[#A6884A] transition-all text-xl italic pt-8 pb-8 mt-4 rounded-none shadow-[0_0_20px_rgba(201,169,98,0.2)]">
              SEND REQUEST
            </button>
          </form>
        </div>
      </section>

      <div className="fixed bottom-0 w-full z-[60] bg-black/95 backdrop-blur-2xl border-t border-[#C9A962]/20 px-6 py-4 flex items-center justify-between shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col max-w-[50%]">
          <span className="lg:hidden text-[8px] text-[#C9A962] uppercase font-bold tracking-[0.3em] font-mono mb-1 animate-pulse">Master Application. Seattle Standard.</span>
          <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.3em] text-[#adaaaa] mb-1 italic">YOUR PACKAGE</span>
          <span className="font-display text-2xl lg:text-4xl font-black italic uppercase tracking-tighter text-white truncate leading-none">
            {currentPkg.name}
          </span>
        </div>
        <button
          onClick={() => openQuote(`PPF: ${currentPkg.name} (${currentPkg.price})`)}
          className="px-8 lg:px-12 py-4 lg:py-6 font-display font-black uppercase italic tracking-[0.1em] text-sm lg:text-xl rounded-none transition-all bg-[#C9A962] text-white hover:bg-[#A6884A] shadow-[0_0_20px_rgba(0,102,255,0.4)]"
        >
          <span className="lg:hidden">GET QUOTE →</span>
          <span className="hidden lg:inline">
            BOOK NOW — {currentPkg.price !== 'GET QUOTE' ? '$' : ''}{currentPkg.price}
          </span>
        </button>
      </div>

    </div>
  );
}
