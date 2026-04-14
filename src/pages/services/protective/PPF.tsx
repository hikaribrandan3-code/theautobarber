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
    <div className="min-h-screen bg-[#0e0e0e] text-[#adaaaa] font-sans pt-16 pb-32 overflow-x-hidden selection:bg-[#00FF41] selection:text-black">
      
      {/* HERO SECTION */}
      <section className="px-6 py-12 lg:py-16 relative overflow-hidden bg-[#0e0e0e] border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:w-1/2">
            <span className="text-[#00FF41] font-mono font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">Just Took Delivery?</span>
            <h2 className="mt-4 text-5xl md:text-7xl font-mono font-black leading-[0.9] uppercase tracking-tighter italic text-white drop-shadow-lg">
              <span className="lg:hidden">YOUR NEW CAR IS PERFECT. FOR NOW.</span>
              <span className="hidden lg:inline">PROTECT IT BEFORE<br/><span className="text-[#00FF41]">THE FIRST CHIP</span></span>
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
                  <span className="text-[#00FF41] text-xs">✓</span>
                  <span className="text-[8px] font-mono font-black tracking-widest text-[#adaaaa] leading-tight uppercase">{trust}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full pt-12 lg:pt-0">
             {/* PAIN POINTS */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-[#131313] p-6 lg:p-8 border-l-4 border-[#ff725e] group hover:border-[#ff725e]/50 transition-all">
                <div className="flex items-center gap-2 text-[#ff725e] mb-3">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="font-mono font-bold uppercase text-[10px] tracking-[0.3em]">Paint Matching = Impossible</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-mono font-black uppercase leading-tight italic text-white">BODY SHOPS CAN'T MATCH ROBOTS</h3>
                <p className="mt-2 text-[#adaaaa] font-mono text-[9px] uppercase tracking-widest leading-relaxed opacity-80">
                  <span className="lg:hidden">Factory paint is applied by robots in a controlled environment. Body shops use spray guns and hope. One chip leads to a panel respray. One respray leads to a Carfax flag. Protect the original — it's worth more.</span>
                  <span className="hidden lg:inline">Factory: 3-stage electrostatic precision. Body shop: Gravity-fed spray gun + hope. Your metallic pearl will never lay the same way twice.</span>
                </p>
              </div>
              <div className="bg-[#131313] p-6 lg:p-8 border-l-4 border-[#ff725e] group hover:border-[#ff725e]/50 transition-all">
                <div className="flex items-center gap-2 text-[#ff725e] mb-3">
                  <TrendingDown className="w-4 h-4" />
                  <span className="font-mono font-bold uppercase text-[10px] tracking-[0.3em]">CARFAX Flags</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-mono font-black uppercase leading-tight italic text-white">A RESPRAY IS A RED FLAG</h3>
                <p className="mt-2 text-[#adaaaa] font-mono text-[9px] uppercase tracking-widest leading-relaxed opacity-80">
                  <span className="lg:hidden">A single paint correction or respray shows up on Carfax as a damage flag. That drops resale value by 15% instantly. PPF means your paint never needs repainting — it stays original, clean, and full value.</span>
                  <span className="hidden lg:inline">One "minor" chip leads to a panel respray. One respray leads to a "Minor Accident" flag on CARFAX. Resale value drops 15% instantly.</span>
                </p>
              </div>
            </div>

            {/* Mobile-only "Even Easier to Clean" Section */}
            <div className="lg:hidden mt-8 bg-[#131313] p-6 border border-[#39ff14]/20 shadow-[0_0_20px_rgba(57,255,20,0.05)]">
              <h3 className="text-xl font-mono font-black uppercase italic text-white mb-1">EVEN EASIER TO CLEAN</h3>
              <p className="text-[10px] font-mono font-bold text-[#00FF41] uppercase tracking-[0.2em] mb-3">ADD PAINT PROTECTION + CERAMIC COATING</p>
              <p className="text-[#adaaaa] font-mono text-[9px] uppercase tracking-widest leading-relaxed">
                PPF alone is great. PPF + ceramic coating is next level. The coating bonds to the film — water beads off, dirt slides off, and your car stays cleaner longer between washes. Ask us about the combo package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PPF PACKAGE VISUALIZER (unified, clean) ─── */}
      <section className="bg-[#0e0e0e] border-b border-white/5 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-40 pb-0">
          <p className="text-center font-mono font-bold uppercase tracking-[0.3em] text-[10px] mb-6 text-[#adaaaa]">Our PPF Packages</p>
          <h2 className="text-center font-mono text-3xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-10">Choose Your <span className="text-[#00FF41]">Coverage</span></h2>

          {/* ── TAB STRIP ── */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-0 pt-4">
            {(Object.keys(packages) as PpfPackage[]).map((pkgKey) => {
              const pkg = packages[pkgKey];
              const isActive = selectedPackage === pkgKey;
              return (
                <button
                  key={pkgKey}
                  onClick={() => setSelectedPackage(pkgKey)}
                  className={`relative flex-shrink-0 px-5 py-3 font-mono font-black text-[10px] lg:text-xs uppercase tracking-[0.2em] transition-all duration-200 border-b-2 ${
                    isActive
                      ? 'border-[#00FF41] text-[#00FF41] bg-[#00FF41]/5'
                      : 'border-transparent text-[#adaaaa] hover:text-white hover:border-white/20'
                  }`}
                >
                  {pkgKey === 'fullFront' && (
                    <span className="absolute -top-2 right-1 text-[8px] bg-[#00FF41] text-[#053900] px-1.5 font-black uppercase tracking-wider">★ Popular</span>
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
              filter: 'hue-rotate(145deg) saturate(2.5) brightness(1.1)',
            }}
          >
            <img
              key={selectedPackage}
              src={currentPkg.image}
              alt={currentPkg.name + ' PPF coverage'}
              className="w-full h-auto object-contain mx-auto block"
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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0e0e0e]/80 backdrop-blur-sm border border-[#00FF41]/30 px-5 py-2 z-30">
            <span className="font-mono font-black text-[#00FF41] text-xs uppercase tracking-[0.25em]">
              {currentPkg.name} — {currentPkg.price !== 'GET QUOTE' ? `$${currentPkg.price}` : 'Get Quote'}
            </span>
          </div>
        </div>

        {/* ── DETAIL PANEL ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 lg:py-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            
            {/* Left: name + description */}
            <div className="lg:w-1/2">
              <h3 className="font-mono text-4xl lg:text-5xl font-black italic uppercase tracking-tighter text-white leading-none mb-3">
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
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#00FF41]" />
                    <span className="font-mono text-[10px] lg:text-xs text-[#e5e2e1] uppercase tracking-wider">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-[#adaaaa] font-mono text-[10px] uppercase tracking-widest">Starting at</span>
                  <span className="font-mono font-black italic text-3xl lg:text-4xl tracking-tighter text-white">
                    {currentPkg.price !== 'GET QUOTE' ? `$${currentPkg.price}` : 'Custom'}
                  </span>
                </div>
                <button
                  onClick={() => openQuote(`PPF: ${currentPkg.name}`)}
                  className="w-full sm:w-auto bg-[#00FF41] text-[#053900] font-mono font-black uppercase tracking-[0.2em] text-xs px-8 py-4 hover:bg-[#32e612] active:scale-95 transition-all shadow-[0_0_24px_rgba(0,255,65,0.3)]"
                >
                  GET FREE QUOTE →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMART RECOMMENDER */}
      <section className="px-6 py-12 lg:py-16 bg-[#0e0e0e]" id="funnel" ref={funnelRef}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-mono font-black uppercase tracking-tighter italic text-white">NOT SURE? <span className="text-[#00FF41]">WE'LL HELP.</span></h2>
            <div className="h-1 w-12 bg-[#00FF41] mx-auto mt-6 shadow-[0_0_10px_#00FF41]"></div>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-[#adaaaa]">
              <span className="lg:hidden">Answer 2 quick questions and we'll tell you exactly what your car needs.</span>
              <span className="hidden lg:inline">Answer 2 questions to find your coverage tier.</span>
            </p>
          </div>
          
          <div className="space-y-12">
            
            {/* Step 1 */}
            <div className="space-y-4">
              <p className="font-mono font-bold uppercase text-[10px] tracking-[0.3em] text-[#00FF41]">01 — How do you drive?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => setUsage('city')}
                  className={`py-8 px-6 border-2 transition-all font-mono text-sm lg:text-sm font-black uppercase italic tracking-widest flex items-center justify-center ${usage === 'city' ? 'border-[#00FF41] bg-[#00FF41]/10 text-[#00FF41]' : 'border-[#262626] bg-[#131313] hover:border-[#484847] text-white hover:bg-[#1a1a1a]'}`}
                >
                  City/Suburban
                </button>
                <button 
                  onClick={() => setUsage('highway')}
                  className={`py-8 px-6 border-2 transition-all font-mono text-sm lg:text-sm font-black uppercase italic tracking-widest flex items-center justify-center ${usage === 'highway' ? 'border-[#00FF41] bg-[#00FF41]/10 text-[#00FF41]' : 'border-[#262626] bg-[#131313] hover:border-[#484847] text-white hover:bg-[#1a1a1a]'}`}
                >
                  Highway Commuter
                </button>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="space-y-4">
              <p className="font-mono font-bold uppercase text-[10px] tracking-[0.3em] text-[#00FF41]">02 — What's your main concern?</p>
              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => setThreat('rocks')}
                  className={`flex justify-between items-center p-6 lg:p-8 border-2 transition-all group ${threat === 'rocks' ? 'bg-[#00FF41]/10 border-[#00FF41]' : 'bg-[#131313] border-[#262626] hover:bg-white/5'}`}
                >
                  <span className={`font-mono text-sm lg:text-sm font-black uppercase italic tracking-widest ${threat === 'rocks' ? 'text-[#00FF41]' : 'text-white'}`}>Rock chips and road debris</span>
                  <ArrowRight className={`w-5 h-5 transition-opacity ${threat === 'rocks' ? 'opacity-100 text-[#00FF41]' : 'opacity-0 group-hover:opacity-50 text-white'}`} />
                </button>
                <button 
                  onClick={() => setThreat('bugs')}
                  className={`flex justify-between items-center p-6 lg:p-8 border-2 transition-all group ${threat === 'bugs' ? 'bg-[#00FF41]/10 border-[#00FF41]' : 'bg-[#131313] border-[#262626] hover:bg-white/5'}`}
                >
                  <span className={`font-mono text-sm lg:text-sm font-black uppercase italic tracking-widest ${threat === 'bugs' ? 'text-[#00FF41]' : 'text-white'}`}>UV exposure and environmental fallout</span>
                  <ArrowRight className={`w-5 h-5 transition-opacity ${threat === 'bugs' ? 'opacity-100 text-[#00FF41]' : 'opacity-0 group-hover:opacity-50 text-white'}`} />
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
            <span className="text-3xl lg:text-5xl font-black italic tracking-tighter text-white">STEK</span>
            <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mt-1 text-[#00FF41]">Authorized Dealer</span>
          </div>
          <div className="flex flex-col items-center hover:opacity-100 transition-opacity">
            <span className="text-3xl lg:text-5xl font-black tracking-tight text-white">XPEL</span>
            <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mt-1 text-[#00FF41]">Ultimate Plus</span>
          </div>
          <div className="flex flex-col items-center hover:opacity-100 transition-opacity">
            <span className="text-3xl lg:text-5xl font-black italic tracking-tighter text-white">3M</span>
            <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mt-1 text-[#00FF41]">Pro Series</span>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 w-full z-[60] bg-[#1a1b1a]/95 backdrop-blur-2xl border-t border-[#00FF41]/20 px-6 py-4 flex items-center justify-between shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col max-w-[50%]">
          <span className="lg:hidden text-[8px] text-[#00FF41] uppercase font-bold tracking-[0.3em] font-mono mb-1 animate-pulse">We come to you. Most installs same week.</span>
          <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.3em] text-[#adaaaa] mb-1">Selected Plan</span>
          <span className="font-mono text-sm lg:text-xl font-black italic uppercase tracking-tighter text-white truncate">
            {currentPkg.name}
          </span>
        </div>
        <button
          onClick={() => openQuote(`PPF: ${currentPkg.name} (${currentPkg.price})`)}
          className="px-8 lg:px-12 py-4 lg:py-5 font-mono font-black uppercase italic tracking-[0.2em] text-[10px] lg:text-sm rounded-none transition-all bg-[#00FF41] text-[#053900] hover:bg-[#32e612] shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:shadow-[0_0_40px_rgba(0,255,65,0.4)]"
        >
          <span className="lg:hidden">GET FREE QUOTE →</span>
          <span className="hidden lg:inline">
            Book — {currentPkg.price !== 'GET QUOTE' ? '$' : ''}{currentPkg.price}
          </span>
        </button>
      </div>

    </div>
  );
}
