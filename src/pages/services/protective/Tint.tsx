import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
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
  Car,
  CarFront,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

type Film = 'carbon' | 'ceramic' | 'crystal';
type Shade = 5 | 15 | 35 | 50;

const packages = {
  carbon: {
    id: 'carbon' as Film,
    name: 'CARBON SERIES',
    subtitle: 'Matte finish. Signal-safe. Best value.',
    heatRejection: 45,
    uvRejection: 99,
    features: ['Non-metal, signal-safe', 'Matte black aesthetic', 'Lifetime warranty'],
    prices: { coupe: 299, sedan: 399, suv: 499 },
  },
  ceramic: {
    id: 'ceramic' as Film,
    name: 'PERFORMANCE CERAMIC',
    subtitle: 'Top-tier heat rejection. Most popular.',
    heatRejection: 78,
    uvRejection: 99,
    features: ['Nano-ceramic construction', 'Highest heat rejection per dollar', 'GPS & phone signal safe'],
    prices: { coupe: 399, sedan: 499, suv: 649 },
  },
  crystal: {
    id: 'crystal' as Film,
    name: 'CRYSTAL IR',
    subtitle: 'Maximum clarity. Maximum performance.',
    heatRejection: 98,
    uvRejection: 99,
    features: ['Infrared heat blocking', 'Crystal-clear optics', 'Transferable lifetime warranty'],
    prices: { coupe: 549, sedan: 699, suv: 899 },
  },
};

const shadeMap: Record<Shade, { label: string; tag: string; opacity: number }> = {
  5: { label: '5% LIMO', tag: 'Maximum Privacy', opacity: 0.85 },
  15: { label: '15% DARK', tag: 'Elite Aesthetic', opacity: 0.72 },
  35: { label: '35% MEDIUM', tag: 'Executive Balance', opacity: 0.52 },
  50: { label: '50% LIGHT', tag: 'Subtle Shield', opacity: 0.35 },
};

const reviews = [
  { text: '"Absolutely amazing job. Best detailing I\'ve had on any of my cars. 100% recommended!"', author: 'Manu GP, Tesla Model Y' },
  { text: '"I found Jesse on Google search in my neighborhood and the great reviews convinced me to bring my 9 months old white Tesla model Y for a paint decontamination & ceramic coating service."', author: 'Tesla Model Y Owner' },
  { text: '"I found his pricing to be very affordable as I didn\'t want to spend allot of money on a ceramic coating because of my intentions to have my car fully repainted in the next several months, then have it wrapped to protect the new paint job."', author: 'Local Customer' },
];

export default function Tint() {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();

  const [film, setFilm] = useState<Film>('ceramic');
  const [shade, setShade] = useState<Shade>(15);
  const [openAccordion, setOpenAccordion] = useState<string | null>('faq-0');

  const currentPkg = packages[film];
  const currentShade = shadeMap[shade];
  const configString = `${currentPkg.name} — ${currentShade.label}`;

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#adaaaa] font-sans pt-16 pb-24 overflow-x-hidden selection:bg-[#C9A962] selection:text-white">
      <SEO
        title="Window Tint Seattle, WA | Ceramic & Carbon Film Installation"
        description="Professional window tint in Seattle. Ceramic film blocks 99% UV and up to 98% infrared heat. Computer-cut precision install with lifetime warranty."
      />
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

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
            PRECISION<br /><span className="text-[#C9A962]">SHADE CONTROL</span>
          </h1>
          <p className="mt-6 text-[#e5e5e5] text-base lg:text-lg font-medium leading-relaxed max-w-2xl px-4">
            Ultra-high performance nanoceramic technology for the discerning driver. Block 99% of UV, reject up to 98% of heat, and drive in comfort.
          </p>

          <div className="mt-8 mb-0 w-full flex justify-center">
            <p className="text-[10px] lg:text-xs font-mono font-black tracking-[0.2em] lg:tracking-[0.3em] text-[#adaaaa] uppercase border-y border-white/10 py-4 px-4 w-full md:w-auto">
              <span className="hidden md:inline">99% UV BLOCK • LIFETIME WARRANTY • LEGAL IN WA</span>
              <span className="md:hidden flex flex-col gap-2">
                <span>99% UV BLOCK • LIFETIME WARRANTY</span>
                <span>LEGAL IN WA</span>
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
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
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
                        ${currentPkg.prices.sedan}
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

            {/* Vehicle Type Quick Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <Car className="text-[#C9A962] w-6 h-6" />, title: '2-Door Coupe', price: currentPkg.prices.coupe, desc: 'Precision edge micro-trimming included.' },
                { icon: <CarFront className="text-[#C9A962] w-6 h-6" />, title: '4-Door Sedan', price: currentPkg.prices.sedan, desc: 'Full side and rear glass coverage.' },
                { icon: <Truck className="text-[#C9A962] w-6 h-6" />, title: 'SUV / Truck', price: currentPkg.prices.suv, desc: 'Full windshield + glass roof optional.' },
              ].map((v, i) => (
                <div
                  key={i}
                  className="bg-[#191a1a] border border-white/5 p-8 flex flex-col items-start hover:border-[#C9A962]/30 transition-all group"
                >
                  <div className="mb-6">{v.icon}</div>
                  <h4 className="font-display text-xl font-black italic uppercase tracking-tighter text-white mb-1">{v.title}</h4>
                  <p className="text-[10px] text-[#adaaaa] uppercase tracking-widest mb-6">{v.desc}</p>
                  <div className="mt-auto">
                    <span className="text-[10px] text-[#adaaaa] uppercase tracking-widest block">Starting at</span>
                    <span className="text-3xl font-display font-black italic text-[#C9A962]">${v.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEW MARQUEE */}
        <section className="py-12 bg-[#191a1a] border-y border-white/10 overflow-hidden">
          <div className="relative w-full will-change-transform">
            <div className="flex whitespace-nowrap animate-marquee">
              {[...reviews, ...reviews].map((review, i) => (
                <div key={i} className="inline-flex flex-col px-8 border-r border-white/10 w-[340px] shrink-0 whitespace-normal">
                  <div className="flex gap-1 text-[#C9A962] mb-2">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    ))}
                  </div>
                  <p className="text-sm font-bold italic font-display uppercase tracking-wider mb-1 text-white line-clamp-2">{review.text}</p>
                  <span className="text-[10px] text-[#adaaaa] uppercase tracking-widest">{review.author}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-[#0e0e0e] px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <ThermometerSun className="w-6 h-6" />, title: 'HEAT REJECTION', desc: 'Blocks up to 98% of infrared heat.' },
                  { icon: <Sun className="w-6 h-6" />, title: 'UV PROTECTION', desc: 'SPF 1000 equivalent for your interior.' },
                  { icon: <EyeOff className="w-6 h-6" />, title: 'ELITE PRIVACY', desc: 'Obscure interior contents from prying eyes.' },
                  { icon: <ShieldCheck className="w-6 h-6" />, title: 'SHATTER GUARD', desc: 'Holds glass together upon impact.' },
                ].map((b, i) => (
                  <div key={i} className="p-8 bg-[#131313] border-l-2 border-[#C9A962]/30">
                    <div className="text-[#C9A962] mb-4">{b.icon}</div>
                    <h4 className="font-display italic font-bold mb-2 uppercase text-white">{b.title}</h4>
                    <p className="text-[#99907c] text-sm uppercase leading-relaxed tracking-wider">{b.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[#C9A962] tracking-[0.3em] font-bold text-sm uppercase block mb-4">Engineered Performance</span>
                <h2 className="text-5xl md:text-6xl font-black font-display italic tracking-tighter leading-none mb-8">
                  ELITE <br /> <span className="text-[#C9A962]">PROTECTION</span>
                </h2>
                <p className="text-[#c8c6c5] text-xl leading-relaxed mb-12">
                  Our nanoceramic films are more than just a tint. They are a multi-layered molecular shield designed to preserve your vehicle's interior and enhance your driving comfort under any solar load.
                </p>
                <Button
                  onClick={() => openQuote(configString)}
                  className="bg-[#C9A962] hover:bg-[#A6884A] text-white font-display italic font-black uppercase px-12 py-6 tracking-[0.2rem] transition-all duration-300 shadow-[0_0_40px_rgba(201,169,98,0.2)] rounded-none"
                >
                  BOOK YOUR INSTALL
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="py-20 px-6 lg:px-12 bg-[#131313]">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 border-l-4 border-[#C9A962] pl-8">
              <h2 className="font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter text-white">
                THE <span className="text-[#C9A962]">PROCESS</span>
              </h2>
              <p className="font-mono text-xs font-bold text-[#adaaaa] uppercase tracking-[0.3em] mt-3">The Barber's Standard</p>
            </div>

            <div className="relative space-y-16 ml-6 py-4">
              <div className="absolute left-[7px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-[#C9A962]/30"></div>

              {[
                { step: '01', title: 'Prep & Clean', time: '30M', desc: 'Windows are deep-cleaned inside and out. Every speck of dust is removed — because tint only sticks to glass, not grime.' },
                { step: '02', title: 'Computer Cut', time: '15M', desc: 'Film is precision-cut by machine to your vehicle\'s exact window patterns. No razors on your glass. Zero risk of scratch.' },
                { step: '03', title: 'Heat Form & Apply', time: '2-3H', desc: 'Film is heat-shrunk to match curved glass, then applied with slip solution and squeegeed to a flawless finish.' },
                { step: '04', title: 'Cure Window', time: '3-5D', desc: 'Keep windows up for 3-5 days while adhesive cures. After that — roll them down and enjoy the shade.' },
              ].map((item, i) => (
                <div key={i} className="relative flex gap-8 group">
                  <div className={`absolute -left-[14px] top-1.5 w-6 h-6 rounded-none border-4 border-[#131313] z-10 transition-all duration-500 ${i === 0 ? 'bg-[#C9A962] shadow-[0_0_20px_#C9A962]' : 'bg-[#202020] group-hover:bg-[#C9A962]/50'}`}></div>
                  <div className="flex-1 bg-[#191a1a] p-6 border border-white/5 group-hover:border-[#C9A962]/20 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`font-display font-black uppercase text-lg tracking-widest ${i === 0 ? 'text-[#C9A962]' : 'text-white/90'}`}>{item.step} {item.title}</h4>
                      <span className="font-mono text-[9px] bg-[#C9A962]/10 text-[#C9A962] px-2 py-1 uppercase font-bold tracking-widest">{item.time}</span>
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
                <h3 className="font-display text-2xl lg:text-3xl font-black uppercase tracking-tighter text-white italic mb-2">WASHINGTON TINT LAW</h3>
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
            <h2 className="font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-12 border-l-4 border-[#C9A962] pl-8 leading-none italic text-white">
              COMMON <span className="text-[#C9A962]">QUESTIONS</span>
            </h2>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {[
                { q: 'How long does the install take?', a: 'Most vehicles take 2–3 hours. Full sedans and SUVs with complex rear windows may take up to 4 hours. You\'ll get a text when it\'s ready.' },
                { q: 'How long should I keep my windows up after tint?', a: 'Keep them rolled up for 3–5 days in dry weather. This allows the adhesive to fully cure. We\'ll leave a reminder sticker on your switch.' },
                { q: 'Will ceramic tint interfere with my electronics?', a: 'No. Our carbon and ceramic films are completely non-metallic. GPS, mobile data, keyless entry, and toll transponders all work perfectly.' },
                { q: 'What if my tint bubbles or peels?', a: 'We stand behind our work. If you see bubbling, peeling, or discoloration under normal use, we\'ll replace it at no charge under our lifetime warranty.' },
              ].map((faq, i) => (
                <div key={i} className="py-6 group cursor-pointer overflow-hidden">
                  <div className="flex justify-between items-center" onClick={() => toggleAccordion(`faq-${i}`)}>
                    <span className="font-display font-black text-sm lg:text-2xl uppercase tracking-tight text-white/90 group-hover:text-[#C9A962] transition-colors italic leading-none">{faq.q}</span>
                    <ChevronDown className={`transition-all duration-300 ${openAccordion === `faq-${i}` ? 'rotate-180 text-[#C9A962]' : 'text-[#adaaaa]'}`} />
                  </div>
                  <div className={`transition-all duration-500 overflow-hidden ${openAccordion === `faq-${i}` ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="font-mono text-[11px] lg:text-xs text-[#adaaaa] leading-relaxed uppercase tracking-widest bg-[#0e0e0e] p-6 border-l-2 border-[#C9A962]">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* CTA BANNER */}
      <section className="h-64 relative flex items-center justify-center overflow-hidden border-y border-white/10">
        <img
          src="/images/portfolio/paint-correction-5050.jpg"
          alt="Cinematic light trails"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 w-full px-[10%] flex justify-between items-center">
          <div className="text-[#C9A962] font-display italic font-black text-3xl lg:text-4xl">READY FOR THE DARK?</div>
          <div className="hidden md:block h-[1px] flex-grow mx-10 bg-gradient-to-r from-[#C9A962] to-transparent"></div>
          <button
            onClick={() => openQuote(configString)}
            className="text-xl lg:text-2xl font-display italic font-black underline decoration-[#C9A962] decoration-2 underline-offset-8 hover:text-[#C9A962] transition-colors text-white"
          >
            REQUEST QUOTE
          </button>
        </div>
      </section>

      {/* STICKY BOTTOM CONVERSION BAR (MOBILE) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#0e0e0e]/95 backdrop-blur-xl z-50 flex items-center justify-between px-6 pb-8 pt-4 border-t border-[#C9A962]/20 safe-area-bottom">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-[#adaaaa] uppercase tracking-[0.4em] mb-1">Selected Shade</span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-display font-black text-white tracking-tighter italic">${currentPkg.prices.sedan}</span>
            <span className="text-[10px] font-black text-[#C9A962] font-display tracking-widest uppercase bg-[#C9A962]/10 px-2 ml-1">{currentShade.label}</span>
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
          className="bg-[#C9A962] text-white px-8 py-5 font-display font-black italic text-lg uppercase tracking-[0.15em] rounded-none hover:bg-[#A6884A] shadow-[0_10px_30px_rgba(201,169,98,0.35)] transition-all"
        >
          REQUEST THE TINT <ArrowRight className="ml-3 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
