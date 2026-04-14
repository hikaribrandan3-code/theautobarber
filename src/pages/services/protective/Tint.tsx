import { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  ThermometerSun,
  Sun,
  EyeOff,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Settings,
  Clock,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

type Coverage = 'full' | 'front' | 'rear' | 'custom';
type Zone = 'windshield' | 'front' | 'rear-side' | 'rear-windshield';
type Film = 'carbon' | 'ceramic' | 'crystal';
type VLT = 70 | 50 | 35 | 20 | 5;

const ALL_ZONES: Zone[] = ['windshield', 'front', 'rear-side', 'rear-windshield'];

const packages = {
  carbon: {
    id: 'carbon' as Film,
    name: 'CARBON SERIES',
    subtitle: 'Matte finish. Signal-safe. Best value.',
    priceFull: 450,
    priceFront: 180,
    priceRear: 270,
    priceCustomBase: 120,
    heatRejection: 45,
    uvRejection: 99,
    features: ['Non-metal, signal-safe', 'Matte black aesthetic', 'Lifetime warranty'],
  },
  ceramic: {
    id: 'ceramic' as Film,
    name: 'PERFORMANCE CERAMIC',
    subtitle: 'Top-tier heat rejection. Most popular.',
    priceFull: 750,
    priceFront: 280,
    priceRear: 470,
    priceCustomBase: 190,
    heatRejection: 78,
    uvRejection: 99,
    features: ['Nano-ceramic construction', 'Highest heat rejection per dollar', 'GPS & phone signal safe'],
  },
  crystal: {
    id: 'crystal' as Film,
    name: 'CRYSTAL IR',
    subtitle: 'Maximum clarity. Maximum performance.',
    priceFull: 1100,
    priceFront: 420,
    priceRear: 680,
    priceCustomBase: 280,
    heatRejection: 98,
    uvRejection: 99,
    features: ['Infrared heat blocking', 'Crystal-clear optics', 'Transferable lifetime warranty'],
  },
};

const vltOpacityMap: Record<VLT, number> = {
  70: 0.22,
  50: 0.42,
  35: 0.58,
  20: 0.78,
  5: 0.95,
};

export default function Tint() {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();

  const [coverage, setCoverage] = useState<Coverage>('full');
  const [selectedZones, setSelectedZones] = useState<Zone[]>(ALL_ZONES);
  const [vlt, setVlt] = useState<VLT>(35);
  const [film, setFilm] = useState<Film>('ceramic');
  const [openAccordion, setOpenAccordion] = useState<string | null>('vlt');

  const funnelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (coverage === 'full') setSelectedZones([...ALL_ZONES]);
    else if (coverage === 'front') setSelectedZones(['windshield', 'front']);
    else if (coverage === 'rear') setSelectedZones(['rear-side', 'rear-windshield']);
  }, [coverage]);

  const toggleZone = (z: Zone) => {
    setSelectedZones((prev) => {
      if (prev.includes(z)) {
        return prev.filter((item) => item !== z);
      }
      return [...prev, z];
    });
    setCoverage('custom');
  };

  const currentPkg = packages[film];

  const currentPrice = () => {
    if (selectedZones.length === 0) return 0;
    if (coverage === 'full') return currentPkg.priceFull;
    if (coverage === 'front') return currentPkg.priceFront;
    if (coverage === 'rear') return currentPkg.priceRear;
    return currentPkg.priceCustomBase * selectedZones.length;
  };

  const configString = `TINT: ${vlt}% ${currentPkg.name} - ${coverage.toUpperCase()}`;

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const getZoneStyle = (z: Zone) => {
    const isSelected = selectedZones.includes(z);
    if (isSelected) {
      const opacity = vltOpacityMap[vlt];
      return {
        fill: `rgba(57, 255, 20, ${opacity})`,
        stroke: '#C9A962',
        strokeWidth: '2px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      };
    }
    return {
      fill: '#1a1a1a',
      stroke: '#333',
      strokeWidth: '1px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#adaaaa] font-sans pt-16 pb-32 overflow-x-hidden selection:bg-[#C9A962] selection:text-white">
      <SEO
        title="Window Tint Seattle, WA | Ceramic & Carbon Film Installation"
        description="Professional window tint in Seattle. Ceramic film blocks 99% UV and up to 98% infrared heat. Computer-cut precision install with lifetime warranty."
      />

      {/* Mobile Sub-header */}
      <div className="bg-[#131313] text-[#C9A962] font-display tracking-tighter uppercase border-b border-white/5 flex justify-between items-center w-full px-6 py-2 z-40 lg:hidden italic">
        <div className="flex items-center gap-2">
          <Settings className="text-[#C9A962] w-4 h-4" />
          <span className="text-sm font-black tracking-[0.2em]">The Tint Division</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative px-6 pt-24 pb-6 lg:pt-32 lg:pb-8 overflow-hidden bg-[#0e0e0e] flex flex-col items-center justify-center text-center border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/assets/window_tint_luxury_1776189700411.png"
            alt="Window tint application"
            className="w-full h-full object-cover opacity-40 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e]/80 via-transparent to-[#0e0e0e]/40"></div>
        </div>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C9A962]/10 border border-[#C9A962]/20 shadow-[0_0_20px_rgba(201,169,98,0.1)] mb-6">
            <span className="text-[10px] lg:text-xs font-bold text-[#C9A962] tracking-[0.3em] uppercase">Window Tint</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black leading-[0.9] uppercase tracking-tighter italic text-white drop-shadow-2xl">
            PRECISION<br /><span className="text-[#C9A962]">WINDOW TINT</span>
          </h1>
          <p className="mt-6 text-[#e5e5e5] text-base lg:text-lg font-medium leading-relaxed max-w-2xl px-4">
            Seattle heat is brutal. One professional tint install blocks 99% of UV, drops cabin temp by up to 60%, and protects your interior from cracking.
          </p>

          <div className="mt-8 mb-0 w-full flex justify-center">
            <p className="text-[10px] lg:text-xs font-mono font-black tracking-[0.2em] lg:tracking-[0.3em] text-[#adaaaa] uppercase border-y border-white/10 py-4 px-4 w-full md:w-auto">
              <span className="hidden md:inline">99% UV BLOCK • 60% HEAT REJECTION • LIFETIME WARRANTY • LEGAL IN WA</span>
              <span className="md:hidden flex flex-col gap-2">
                <span>99% UV BLOCK • 60% HEAT REJECTION</span>
                <span>LIFETIME WARRANTY • LEGAL IN WA</span>
              </span>
            </p>
          </div>
        </div>
      </section>

      <main className="w-full max-w-[1400px] mx-auto">
        {/* FILM GRADE SELECTOR */}
        <section className="bg-[#0e0e0e] border-b border-white/5 py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-4 leading-[0.8]">
                SELECT YOUR <span className="text-[#C9A962]">FILM</span>
              </h2>
              <p className="font-mono text-[10px] text-[#adaaaa] font-bold uppercase tracking-[0.4em]">
                Three grades. One perfect install.
              </p>
            </div>

            <div className="flex justify-start lg:justify-center overflow-x-auto no-scrollbar gap-3 pb-2 mb-8">
              {(Object.keys(packages) as Film[]).map((f) => {
                const pkg = packages[f];
                const isActive = film === f;
                return (
                  <button
                    key={f}
                    onClick={() => setFilm(f)}
                    className={`relative flex-shrink-0 px-6 py-4 font-display font-black text-sm lg:text-lg uppercase tracking-[0.1em] transition-all duration-200 border text-left min-w-[140px] lg:min-w-[180px] ${
                      isActive
                        ? 'border-[#C9A962] text-[#C9A962] bg-[#C9A962]/10 shadow-[0_0_15px_rgba(201,169,98,0.1)]'
                        : 'border-white/10 text-[#adaaaa] hover:text-white hover:border-white/30 hover:bg-white/5'
                    }`}
                  >
                    {f === 'ceramic' && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                        <span className="bg-[#C9A962] text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap shadow-[0_4px_10px_rgba(201,169,98,0.3)]">
                          ★ RECOMMENDED
                        </span>
                      </div>
                    )}
                    <span className="block text-xs lg:text-sm opacity-70 mb-1">{f}</span>
                    <span className="block truncate">{pkg.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Package Detail Card */}
            <div className="p-8 lg:p-12 bg-[#131313] border border-white/5 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#C9A962]/10 blur-3xl rounded-full"></div>

              <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-4xl font-display font-black text-[#C9A962] italic tracking-tighter leading-none mb-1 uppercase">
                    {currentPkg.name}
                  </h3>
                  <p className="text-sm font-mono text-[#adaaaa] font-bold uppercase tracking-widest">
                    {currentPkg.subtitle}
                  </p>
                  <div className="pt-6 border-t border-white/10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-none bg-[#0e0e0e] border border-white/5 flex items-center justify-center shadow-inner">
                        <ThermometerSun className="text-[#C9A962] w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#adaaaa] uppercase font-bold tracking-widest font-mono">Heat Rejection</p>
                        <p className="text-lg font-display font-black italic uppercase tracking-tighter">{currentPkg.heatRejection}%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-none bg-[#0e0e0e] border border-white/5 flex items-center justify-center shadow-inner">
                        <Sun className="text-[#C9A962] w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#adaaaa] uppercase font-bold tracking-widest font-mono">UV Rejection</p>
                        <p className="text-lg font-display font-black italic uppercase tracking-tighter">{currentPkg.uvRejection}%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {currentPkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5 hover:border-[#C9A962]/30 transition-colors">
                        <CheckCircle2 className="text-[#C9A962] w-4 h-4 shrink-0" />
                        <span className="text-xs lg:text-sm font-mono uppercase font-bold tracking-wider text-[#e5e2e1]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#adaaaa] text-[10px] font-bold uppercase tracking-widest">Full Car From</span>
                      <span className="text-4xl lg:text-5xl font-mono font-black text-white italic tracking-tighter">
                        ${currentPkg.priceFull}
                      </span>
                    </div>
                    <Button
                      onClick={() => openQuote(configString)}
                      className="w-full sm:w-auto bg-[#C9A962] text-white px-10 py-6 font-black uppercase text-xs tracking-[0.2em] hover:bg-[#A6884A] transition-all font-display rounded-none shadow-[0_0_20px_rgba(201,169,98,0.2)]"
                    >
                      REQUEST QUOTE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* INTERACTIVE CONFIGURATOR */}
        <section ref={funnelRef} id="configurator" className="py-16 px-6 lg:px-12 bg-[#0e0e0e]">
          <div className="max-w-3xl mx-auto space-y-6">
                {/* Coverage Selector */}
                <div className="bg-[#131313] p-6 border border-white/5">
                  <h3 className="text-[#e5e2e1] text-[10px] font-mono uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#C9A962] rounded-full shadow-[0_0_5px_#C9A962]"></span>
                    COVERAGE
                  </h3>
                  <div className="flex gap-2 w-full overflow-x-auto no-scrollbar pb-2">
                    {(['full', 'front', 'rear', 'custom'] as Coverage[]).map((c) => (
                      <button
                        key={c}
                        onClick={() => setCoverage(c)}
                        className={`flex-1 px-4 py-3 text-[9px] lg:text-[10px] font-mono font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${
                          coverage === c
                            ? 'bg-[#C9A962]/10 text-[#C9A962] border-[#C9A962] shadow-[0_0_15px_rgba(201,169,98,0.1)]'
                            : 'bg-[#191a1a] text-[#adaaaa] border-[#262626] hover:bg-[#202020]'
                        }`}
                      >
                        {c === 'full' ? 'FULL CAR' : c === 'front' ? 'FRONT ONLY' : c === 'rear' ? 'REAR ONLY' : 'CUSTOM'}
                      </button>
                    ))}
                  </div>
                  {coverage === 'custom' && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {ALL_ZONES.map((z) => (
                        <button
                          key={z}
                          onClick={() => toggleZone(z)}
                          className={`px-3 py-2 text-[10px] font-mono font-black uppercase tracking-wider border transition-all ${
                            selectedZones.includes(z)
                              ? 'bg-[#C9A962]/10 text-[#C9A962] border-[#C9A962]'
                              : 'bg-[#191a1a] text-[#adaaaa] border-[#262626] hover:bg-[#202020]'
                          }`}
                        >
                          {z === 'windshield' ? 'Windshield' : z === 'front' ? 'Front Sides' : z === 'rear-side' ? 'Rear Sides' : 'Rear Window'}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* VLT Selector */}
                <div className="bg-[#131313] p-6 border border-white/5">
                  <h3 className="text-[#e5e2e1] text-[10px] font-mono uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#C9A962] rounded-full shadow-[0_0_5px_#C9A962]"></span>
                    VISIBLE LIGHT TRANSMISSION (VLT)
                  </h3>
                  <div className="grid grid-cols-5 gap-2">
                    {([70, 50, 35, 20, 5] as VLT[]).map((val) => (
                      <div
                        key={val}
                        onClick={() => setVlt(val)}
                        className={`aspect-square flex flex-col items-center justify-center gap-2 border transition-all cursor-pointer ${
                          vlt === val
                            ? 'bg-[#C9A962]/10 border-[#C9A962] shadow-[0_0_15px_rgba(201,169,98,0.15)]'
                            : 'bg-[#191a1a] border-white/5 hover:bg-[#202020] hover:border-white/10'
                        }`}
                      >
                        <div
                          className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-white/20"
                          style={{ backgroundColor: `rgba(0,0,0, ${vltOpacityMap[val]})` }}
                        />
                        <span className={`font-mono text-[9px] lg:text-[10px] font-black ${vlt === val ? 'text-[#C9A962]' : 'text-white'}`}>{val}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Specs Panel */}
                <div className="bg-[#131313] p-6 lg:p-8 border border-[#C9A962]/20 shadow-[0_0_20px_rgba(201,169,98,0.03)] space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl lg:text-4xl font-display italic font-black text-white uppercase tracking-tighter leading-none mb-2">
                        {vlt}% {currentPkg.name}
                      </h4>
                      <p className="text-[9px] font-mono text-[#adaaaa] uppercase tracking-[0.3em] font-bold italic">MASTER CONFIGURATION</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl lg:text-3xl font-mono font-black italic text-[#C9A962] tracking-tighter">
                        ${currentPrice()}
                      </span>
                      <p className="text-[9px] font-mono text-[#adaaaa] uppercase tracking-[0.3em] font-bold">EST. TOTAL</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                    <div className="space-y-2">
                      <p className="text-[9px] font-mono text-white uppercase font-bold tracking-[0.2em] opacity-80">UV PROTECTION</p>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-mono font-black text-[#C9A962] italic">99%</span>
                        <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#C9A962] shadow-[0_0_10px_#C9A962]" style={{ width: '99%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[9px] font-mono text-white uppercase font-bold tracking-[0.2em] opacity-80">HEAT REJECTION</p>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-mono font-black text-[#C9A962] italic">{currentPkg.heatRejection}%</span>
                        <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#C9A962] shadow-[0_0_10px_#C9A962] transition-all duration-1000"
                            style={{ width: `${currentPkg.heatRejection}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {vlt <= 20 && (
                    <div className="flex items-start gap-4 p-4 bg-red-950/20 border border-red-500/20 rounded-sm">
                      <AlertTriangle className="text-red-500 w-5 h-5 shrink-0 mt-0.5" />
                      <p className="font-mono text-[10px] text-red-500/80 uppercase tracking-wider leading-relaxed">
                        <strong className="text-red-500">LEGAL NOTICE:</strong> 24% is the legal limit for front side windows in Washington. VLT levels 20% or below may not be street-legal on front side windows.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE ADVANTAGES */}
        <section className="px-6 lg:px-12 py-16 bg-[#131313]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-12 text-center italic">
              THE <span className="text-[#C9A962]">ADVANTAGES</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: <ShieldCheck className="text-[#C9A962] w-6 h-6" />,
                  title: 'PRIVACY',
                  desc: 'See out clearly. Nobody sees in. Keeps valuables hidden and adds a clean, aggressive look.',
                },
                {
                  icon: <ThermometerSun className="text-[#C9A962] w-6 h-6" />,
                  title: 'HEAT REDUCTION',
                  desc: 'Cut cabin heat by up to 60%. Your AC stops working overtime. Your passengers stop complaining.',
                },
                {
                  icon: <Sun className="text-[#C9A962] w-6 h-6" />,
                  title: 'UV REJECTION',
                  desc: '99.9% of UV blocked. Your skin, your leather seats, and your dashboard stay protected for years.',
                },
                {
                  icon: <EyeOff className="text-[#C9A962] w-6 h-6" />,
                  title: 'GLARE REDUCTION',
                  desc: 'Drive into the sun without squinting. Safer driving, cleaner look, day and night.',
                },
              ].map((adv, i) => (
                <div
                  key={i}
                  className="bg-[#191a1a] p-6 border-l-2 border-white/5 hover:border-[#C9A962] transition-all space-y-4 shadow-lg group"
                >
                  <div className="w-12 h-12 flex flex-col justify-center bg-[#0e0e0e] border border-white/5 pl-3 group-hover:bg-[#C9A962]/10 transition-colors">
                    {adv.icon}
                  </div>
                  <h5 className="font-mono text-xs font-black uppercase tracking-widest text-white">{adv.title}</h5>
                  <p className="font-mono text-[10px] text-[#adaaaa] uppercase tracking-widest leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="py-20 px-6 lg:px-12 bg-[#0e0e0e]">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 border-l-4 border-[#C9A962] pl-8">
              <h2 className="font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter">
                THE <span className="text-[#C9A962]">PROCESS</span>
              </h2>
              <p className="font-mono text-xs font-bold text-[#adaaaa] uppercase tracking-[0.3em] mt-3">The Barber's Standard</p>
            </div>

            <div className="relative space-y-16 ml-6 py-4">
              <div className="absolute left-[7px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-[#C9A962]/30"></div>

              {[
                {
                  step: '01',
                  title: 'Prep & Clean',
                  time: '30M',
                  desc: 'Windows are deep-cleaned inside and out. Every speck of dust is removed — because tint only sticks to glass, not grime.',
                },
                {
                  step: '02',
                  title: 'Computer Cut',
                  time: '15M',
                  desc: 'Film is precision-cut by machine to your vehicle\'s exact window patterns. No razors on your glass. Zero risk of scratch.',
                },
                {
                  step: '03',
                  title: 'Heat Form & Apply',
                  time: '2-3H',
                  desc: 'Film is heat-shrunk to match curved glass, then applied with slip solution and squeegeed to a flawless finish.',
                },
                {
                  step: '04',
                  title: 'Cure Window',
                  time: '3-5D',
                  desc: 'Keep windows up for 3-5 days while adhesive cures. After that — roll them down and enjoy the shade.',
                },
              ].map((item, i) => (
                <div key={i} className="relative flex gap-8 group">
                  <div
                    className={`absolute -left-[14px] top-1.5 w-6 h-6 rounded-none border-4 border-[#0e0e0e] z-10 transition-all duration-500 ${
                      i === 0 ? 'bg-[#C9A962] shadow-[0_0_20px_#C9A962]' : 'bg-[#202020] group-hover:bg-[#C9A962]/50'
                    }`}
                  ></div>
                  <div className="flex-1 bg-[#131313] p-6 border border-white/5 group-hover:border-[#C9A962]/20 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`font-display font-black uppercase text-lg tracking-widest ${i === 0 ? 'text-[#C9A962]' : 'text-white/90'}`}>
                        {item.step} {item.title}
                      </h4>
                      <span className="font-mono text-[9px] bg-[#C9A962]/10 text-[#C9A962] px-2 py-1 uppercase font-bold tracking-widest">
                        {item.time}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-[#adaaaa] leading-relaxed uppercase tracking-wider">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WASHINGTON LAW CALL-OUT */}
        <section className="py-16 px-6 lg:px-12 bg-[#0e0e0e]">
          <div className="max-w-4xl mx-auto bg-[#131313] border border-white/10 p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A962]" />
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="w-16 h-16 bg-[#C9A962]/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="text-[#C9A962] w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-2xl lg:text-3xl font-black uppercase tracking-tighter text-white italic mb-2">
                  WASHINGTON TINT LAW
                </h3>
                <p className="font-mono text-xs text-[#adaaaa] uppercase tracking-widest leading-relaxed">
                  Front side windows must allow <span className="text-white font-bold">more than 24% of light in</span>. Rear windows can be any darkness. Windshield: top 6 inches only (AS-1 line). We stock legal shades and will guide you to a look that turns heads without turning them toward a ticket.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-6 lg:px-12 bg-[#131313]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-12 border-l-4 border-[#C9A962] pl-8 leading-none italic">
              COMMON <span className="text-[#C9A962]">QUESTIONS</span>
            </h2>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {[
                {
                  q: 'How long does the install take?',
                  a: 'Most vehicles take 2–3 hours. Full sedans and SUVs with complex rear windows may take up to 4 hours. You\'ll get a text when it\'s ready.',
                },
                {
                  q: 'How long should I keep my windows up after tint?',
                  a: 'Keep them rolled up for 3–5 days in dry weather. This allows the adhesive to fully cure. We\'ll leave a reminder sticker on your switch.',
                },
                {
                  q: 'Will ceramic tint interfere with my electronics?',
                  a: 'No. Our carbon and ceramic films are completely non-metallic. GPS, mobile data, keyless entry, and toll transponders all work perfectly.',
                },
                {
                  q: 'What if my tint bubbles or peels?',
                  a: 'We stand behind our work. If you see bubbling, peeling, or discoloration under normal use, we\'ll replace it at no charge under our lifetime warranty.',
                },
              ].map((faq, i) => (
                <div key={i} className="py-6 group cursor-pointer overflow-hidden">
                  <div className="flex justify-between items-center" onClick={() => toggleAccordion(`faq-${i}`)}>
                    <span className="font-display font-black text-sm lg:text-2xl uppercase tracking-tight text-white/90 group-hover:text-[#C9A962] transition-colors italic leading-none">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`transition-all duration-300 ${openAccordion === `faq-${i}` ? 'rotate-180 text-[#C9A962]' : 'text-[#adaaaa]'}`}
                    />
                  </div>
                  <div
                    className={`transition-all duration-500 overflow-hidden ${openAccordion === `faq-${i}` ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="font-mono text-[11px] lg:text-xs text-[#adaaaa] leading-relaxed uppercase tracking-widest bg-[#0e0e0e] p-6 border-l-2 border-[#C9A962]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* STICKY BOTTOM CONVERSION BAR (MOBILE) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#0e0e0e]/95 backdrop-blur-xl z-50 flex items-center justify-between px-6 pb-8 pt-4 border-t border-[#C9A962]/20 safe-area-bottom">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-[#adaaaa] uppercase tracking-[0.4em] mb-1">Selected Shade</span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-display font-black text-white tracking-tighter italic">${currentPrice()}</span>
            <span className="text-[10px] font-black text-[#C9A962] font-display tracking-widest uppercase bg-[#C9A962]/10 px-2 ml-1">
              {vlt}% {film}
            </span>
          </div>
        </div>
        <button
          onClick={() => openQuote(configString)}
          className="bg-[#C9A962] px-8 py-4 rounded-none text-white font-display font-black uppercase text-xs tracking-[0.3em] active:scale-90 transition-all shadow-[0_0_20px_rgba(201,169,98,0.3)]"
        >
          GET TINT
        </button>
      </div>

      {/* STICKY CTA (DESKTOP) */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => openQuote(configString)}
          className="bg-[#C9A962] text-white p-12 font-display font-black italic text-2xl uppercase tracking-[0.2em] rounded-none hover:bg-[#A6884A] shadow-[0_20px_50px_rgba(201,169,98,0.4)] transition-all transform hover:scale-110"
        >
          REQUEST THE TINT <ArrowRight className="ml-4 w-8 h-8" />
        </Button>
      </div>
    </div>
  );
}
