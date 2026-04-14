import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { 
  Menu, 
  User, 
  Settings, 
  ShieldCheck, 
  ThermometerSun, 
  Sun, 
  EyeOff, 
  BarChart2, 
  AlertTriangle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Coverage = 'full' | 'front' | 'rear' | 'custom';
type Zone = 'windshield' | 'front' | 'rear-side' | 'rear-windshield';
type Film = 'carbon' | 'ceramic' | 'crystal';
type VLT = 70 | 50 | 35 | 20 | 5;

const ALL_ZONES: Zone[] = ['windshield', 'front', 'rear-side', 'rear-windshield'];

const BASE_PRICES = {
  carbon: { full: 400, front: 160, rear: 240, customBase: 110 },
  ceramic: { full: 680, front: 250, rear: 430, customBase: 180 },
  crystal: { full: 950, front: 380, rear: 570, customBase: 250 }
};

const vltOpacityMap: Record<VLT, number> = {
  70: 0.3,
  50: 0.5,
  35: 0.65,
  20: 0.8,
  5: 0.95
};

const filmNames = {
  carbon: 'CARBON SERIES',
  ceramic: 'PERFORMANCE CERAMIC',
  crystal: 'CRYSTAL INFRARED'
};

const Tint = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();
  
  const [coverage, setCoverage] = useState<Coverage>('full');
  const [selectedZones, setSelectedZones] = useState<Zone[]>(ALL_ZONES);
  const [vlt, setVlt] = useState<VLT>(35);
  const [film, setFilm] = useState<Film>('ceramic');

  const handleCoverageClick = (c: Coverage) => {
    setCoverage(c);
    if (c === 'full') setSelectedZones([...ALL_ZONES]);
    else if (c === 'front') setSelectedZones(['windshield', 'front']);
    else if (c === 'rear') setSelectedZones(['rear-side', 'rear-windshield']);
  };

  const toggleZone = (z: Zone) => {
    setSelectedZones(prev => {
      if (prev.includes(z)) {
        return prev.filter(item => item !== z);
      } else {
        return [...prev, z];
      }
    });
    setCoverage('custom');
  };

  const currentPrice = () => {
    if (selectedZones.length === 0) return 0;
    if (coverage === 'full') return BASE_PRICES[film].full;
    if (coverage === 'front') return BASE_PRICES[film].front;
    if (coverage === 'rear') return BASE_PRICES[film].rear;
    // For custom, rough estimate based on zone count
    return BASE_PRICES[film].customBase * selectedZones.length;
  };

  const getZoneStyle = (z: Zone) => {
    const isSelected = selectedZones.includes(z);
    
    if (isSelected) {
      const opacity = vltOpacityMap[vlt];
      return {
        fill: `rgba(57, 255, 20, ${opacity})`,
        stroke: '#39ff14',
        strokeWidth: '2px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      };
    }
    return {
      fill: '#262626',
      stroke: '#484847',
      strokeWidth: '1px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  const isZoneSelected = (z: Zone) => selectedZones.includes(z);
  const configString = `TINT: ${vlt}% ${film.toUpperCase()} - ${coverage.toUpperCase()}`;

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#adaaaa] font-sans pt-16 pb-32 overflow-x-hidden selection:bg-[#39ff14] selection:text-[#053900]">
      
      {/* Mobile Sub-header */}
      <div className="bg-[#131313] text-[#39ff14] font-mono tracking-tighter uppercase border-b border-white/5 flex justify-between items-center w-full px-6 py-2 z-40 lg:hidden">
        <div className="flex items-center gap-2">
          <Settings className="text-[#39ff14] w-4 h-4" />
          <span className="text-sm font-bold tracking-[0.2em]">Window Tint</span>
        </div>
      </div>

      <main className="w-full max-w-[1400px] mx-auto">
        
        {/* HERO SECTION */}
        <section className="px-6 pt-16 pb-8 lg:px-12 lg:pt-24 lg:pb-12 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#39ff14]/10 border border-[#39ff14]/20 shadow-[0_0_20px_rgba(57,255,20,0.1)] lg:mx-0 mx-auto">
             <span className="text-[10px] lg:text-xs font-bold text-[#39ff14] tracking-[0.3em] uppercase">Window Tint</span>
            </div>
            <h2 className="text-5xl lg:text-8xl font-mono font-black italic tracking-tighter text-white uppercase leading-[0.9]">
              <span className="lg:hidden">Cooler. Private.<br/><span className="text-[#39ff14]">Protected.</span></span>
              <span className="hidden lg:inline">Professional Window Tinting.<br/><span className="text-[#39ff14]">Block heat. Protect your interior.</span></span>
            </h2>
            <p className="text-[#adaaaa] font-mono text-sm uppercase tracking-widest leading-relaxed">
              <span className="lg:hidden text-white/90">Naples heat is brutal. One professional tint install blocks 99% of UV, drops your cabin temp by up to 60%, and protects your leather and dash from cracking. Installed right — once.</span>
              <span className="hidden lg:inline">Block 99% of UV. Reject 60% of heat. Premium ceramic film installation.</span>
            </p>
          </div>

          {/* Mobile Trust Bar */}
          <div className="lg:hidden mt-8 grid grid-cols-3 gap-2 py-4 border-y border-white/5 bg-[#131313]/50">
            {[
              "LIFETIME WARRANTY",
              "PROFESSIONALLY INSTALLED",
              "LEGAL IN FLORIDA"
            ].map(trust => (
              <div key={trust} className="flex flex-col items-center text-center px-1">
                <span className="text-[#39ff14] text-[10px] mb-1">✓</span>
                <span className="text-[7px] font-mono font-black tracking-widest text-[#adaaaa] leading-tight">{trust}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:px-12">
           
          {/* LEFT COLUMN: INTERACTIVE VISUALIZER */}
          <div className="lg:col-span-7 space-y-8">
            
            <section className="px-6 lg:px-0">
              <div className="bg-[#131313] rounded-sm p-6 lg:p-12 border border-white/5 relative overflow-hidden flex flex-col items-center">
                {/* Background grid */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#484847 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                {/* SVG Configurator */}
                <svg className="w-full h-auto drop-shadow-2xl relative z-10 max-w-2xl mx-auto" viewBox="0 0 400 120">
                  {/* Car Base Body */}
                  <path d="M40,95 L360,95 L355,85 L330,45 L250,30 L100,32 L50,65 Z" fill="#050505"></path>
                  {/* Outline */}
                  <path d="M40,95 L70,95 A18,18 0 0,1 106,95 L294,95 A18,18 0 0,1 330,95 L360,95 L350,75 L315,38 C280,30 180,28 115,38 L50,75 Z" fill="none" stroke="#adaaaa" strokeWidth="1.5" opacity="0.3"></path>
                  {/* Wheels */}
                  <circle cx="88" cy="95" fill="#111" r="16" stroke="#333" strokeWidth="2"></circle>
                  <circle cx="312" cy="95" fill="#111" r="16" stroke="#333" strokeWidth="2"></circle>
                  
                  {/* Interactive Windows */}
                  <path 
                    onClick={() => toggleZone('windshield')} 
                    style={getZoneStyle('windshield')} 
                    className="cursor-pointer hover:stroke-[#39ff14] hover:fill-[#39ff14]/20" 
                    d="M125,40 L160,38 L165,72 L120,74 Z" 
                  />
                  <path 
                    onClick={() => toggleZone('front')} 
                    style={getZoneStyle('front')} 
                    className="cursor-pointer hover:stroke-[#39ff14] hover:fill-[#39ff14]/20" 
                    d="M165,37 L225,36 L225,72 L170,72 Z" 
                  />
                  <path 
                    onClick={() => toggleZone('rear-side')} 
                    style={getZoneStyle('rear-side')} 
                    className="cursor-pointer hover:stroke-[#39ff14] hover:fill-[#39ff14]/20" 
                    d="M230,36 L285,38 L300,72 L230,72 Z" 
                  />
                  <path 
                    onClick={() => toggleZone('rear-windshield')} 
                    style={getZoneStyle('rear-windshield')} 
                    className="cursor-pointer hover:stroke-[#39ff14] hover:fill-[#39ff14]/20" 
                    d="M290,40 L315,45 L320,72 L305,72 Z" 
                  />
                </svg>
                
                {/* Coverage Quick Select Toggles */}
                <div className="mt-8 flex gap-2 w-full max-w-xl mx-auto overflow-x-auto no-scrollbar pb-2 z-20">
                  {(['full', 'front', 'rear', 'custom'] as Coverage[]).map((c) => (
                    <button 
                      key={c}
                      onClick={() => handleCoverageClick(c)}
                      className={`flex-1 px-4 py-3 text-[9px] lg:text-[10px] font-mono font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${
                        coverage === c 
                          ? 'bg-[#39ff14]/10 text-[#39ff14] border-[#39ff14] shadow-[0_0_15px_rgba(57,255,20,0.1)]' 
                          : 'bg-[#191a1a] text-[#adaaaa] border-[#262626] hover:bg-[#202020]'
                      }`}
                    >
                      {c === 'full' ? 'FULL CAR' : c === 'front' ? 'FRONT ONLY' : c === 'rear' ? 'REAR ONLY' : 'CUSTOM'}
                    </button>
                  ))}
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN: CONTROLS */}
          <div className="lg:col-span-5 space-y-6 px-6 lg:px-0">
             
            {/* VLT SELECTOR */}
            <section className="bg-[#131313] p-6 border border-white/5">
              <h3 className="text-[#e5e2e1] text-[10px] font-mono uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#39ff14] rounded-full shadow-[0_0_5px_#39ff14]"></span> 
                VISIBLE LIGHT TRANSMISSION (VLT)
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {([70, 50, 35, 20, 5] as VLT[]).map(val => (
                  <div 
                    key={val}
                    onClick={() => setVlt(val)}
                    className={`aspect-square flex flex-col items-center justify-center gap-2 border transition-all cursor-pointer ${
                      vlt === val 
                        ? 'bg-[#39ff14]/10 border-[#39ff14] shadow-[0_0_15px_rgba(57,255,20,0.15)]' 
                        : 'bg-[#191a1a] border-white/5 hover:bg-[#202020] hover:border-white/10'
                    }`}
                  >
                     <div 
                        className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-white/20`}
                        style={{ backgroundColor: `rgba(0,0,0, ${vltOpacityMap[val]})`}}
                     ></div>
                     <span className={`font-mono text-[9px] lg:text-[10px] font-black ${vlt === val ? 'text-[#39ff14]' : 'text-white'}`}>{val}%</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FILM TYPE SELECTOR */}
            <section className="bg-[#131313] p-6 border border-white/5">
              <h3 className="text-[#e5e2e1] text-[10px] font-mono uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#39ff14] rounded-full shadow-[0_0_5px_#39ff14]"></span> 
                SELECT FILM GRADE
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {(['carbon', 'ceramic', 'crystal'] as Film[]).map(f => (
                  <div 
                    key={f}
                    onClick={() => setFilm(f)}
                    className={`p-4 flex flex-col gap-1 cursor-pointer transition-all border-b-2 ${
                      film === f 
                        ? 'bg-[#39ff14]/5 border-[#39ff14]' 
                        : 'bg-[#191a1a] border-transparent hover:bg-[#202020]'
                    }`}
                  >
                    <span className={`font-mono text-xs font-black uppercase ${film === f ? 'text-[#39ff14]' : 'text-white'}`}>{f}</span>
                    <span className="lg:hidden font-mono text-[7px] text-[#adaaaa] uppercase font-bold leading-tight line-clamp-2">
                      {f === 'carbon' ? 'Great protection, clean matte look. Best value.' : 
                       f === 'ceramic' ? 'Top-tier heat rejection + signal-safe. Most popular.' : 
                       'Maximum clarity + performance. The full package.'}
                    </span>
                    <span className={`font-mono text-[10px] font-bold italic ${film === f ? 'text-[#39ff14]/70' : 'text-[#adaaaa]'}`}>
                      {f === 'carbon' ? '$' : f === 'ceramic' ? '$$' : '$$$'}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* SPECS PANEL */}
            <section className="bg-[#131313] p-6 lg:p-8 border border-[#39ff14]/20 shadow-[0_0_20px_rgba(57,255,20,0.03)] space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl lg:text-3xl font-mono italic font-black text-white uppercase tracking-tighter leading-none mb-1">
                    {vlt}% {filmNames[film]}
                  </h4>
                  <p className="text-[9px] font-mono text-[#adaaaa] uppercase tracking-[0.3em] font-bold">
                     Your Configuration
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl lg:text-3xl font-mono font-black italic text-[#39ff14] tracking-tighter">${currentPrice()}</span>
                  <p className="text-[9px] font-mono text-[#adaaaa] uppercase tracking-[0.3em] font-bold">EST. TOTAL</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                <div className="space-y-2">
                  <p className="text-[9px] font-mono text-white uppercase font-bold tracking-[0.2em] opacity-80">UV PROTECTION</p>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-mono font-black text-[#39ff14] italic">99%</span>
                    <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#39ff14] shadow-[0_0_10px_#39ff14]" style={{ width: '99%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] font-mono text-white uppercase font-bold tracking-[0.2em] opacity-80">HEAT REJECTION</p>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-mono font-black text-[#39ff14] italic">
                      {film === 'carbon' ? '45%' : film === 'ceramic' ? '75%' : '98%'}
                    </span>
                    <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#39ff14] shadow-[0_0_10px_#39ff14] transition-all duration-1000" 
                        style={{ width: film === 'carbon' ? '45%' : film === 'ceramic' ? '75%' : '98%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#191a1a] rounded-sm border border-white/5">
                <BarChart2 className="text-[#39ff14] w-5 h-5 shrink-0 mt-0.5" />
                <p className="font-mono text-[10px] text-[#adaaaa] uppercase tracking-wider leading-relaxed">
                  <strong className="text-white">No signal interference:</strong> Compatible with GPS, mobile data, and keyless entry systems.
                </p>
              </div>

              {vlt <= 20 && (
                <div className="flex items-start gap-4 p-4 bg-red-950/20 border border-red-500/20 rounded-sm">
                  <AlertTriangle className="text-red-500 w-5 h-5 shrink-0 mt-0.5" />
                  <p className="font-mono text-[10px] text-red-500/80 uppercase tracking-wider leading-relaxed">
                    <strong className="text-red-500">LEGAL NOTICE:</strong> 35% is the legal limit for front windows in Florida. VLT levels 20% or below may not be street-legal on front side windows.
                  </p>
                </div>
              )}
            </section>

          </div>
        </div>

        {/* CORE ADVANTAGES */}
        <section className="px-6 lg:px-12 py-16">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
             {[
               { icon: <ShieldCheck className="text-[#39ff14] w-6 h-6" />, title: 'PRIVACY', 
                 desc: { 
                   mobile: 'See out clearly. Nobody sees in. Keeps valuables hidden and adds a clean, aggressive look.',
                   desktop: 'Protects valuables inside your vehicle from outside view.'
                 }
               },
               { icon: <ThermometerSun className="text-[#39ff14] w-6 h-6" />, title: 'HEAT REDUCTION', 
                 desc: {
                   mobile: 'Cut cabin heat by up to 60%. Your AC stops working overtime. Your passengers stop complaining.',
                   desktop: 'Keeps your cabin cooler — especially during summer.'
                 }
               },
               { icon: <Sun className="text-[#39ff14] w-6 h-6" />, title: 'UV REJECTION', 
                 desc: {
                   mobile: '99.9% of UV blocked. Your skin, your leather seats, and your dashboard stay protected for years.',
                   desktop: 'Blocks 99.9% of UV rays. Protects your skin and prevents leather from fading.'
                 }
               },
               { icon: <EyeOff className="text-[#39ff14] w-6 h-6" />, title: 'GLARE REDUCTION', 
                 desc: {
                   mobile: 'Drive into the Naples sun without squinting. Safer driving, cleaner look.',
                   desktop: 'Reduces glare from direct sunlight and oncoming headlights.'
                 }
               },
             ].map((adv, i) => (
                <div key={i} className="bg-[#131313] p-6 border-l-2 border-white/5 hover:border-[#39ff14] transition-all space-y-4 shadow-lg group">
                  <div className="w-12 h-12 flex flex-col justify-center bg-[#191a1a] border border-white/5 pl-3 group-hover:bg-[#39ff14]/10 transition-colors">
                    {adv.icon}
                  </div>
                  <h5 className="font-mono text-xs font-black uppercase tracking-widest text-white">{adv.title}</h5>
                  <p className="font-mono text-[9px] lg:text-[10px] text-[#adaaaa] uppercase tracking-widest leading-relaxed">
                    <span className="lg:hidden">{adv.desc.mobile}</span>
                    <span className="hidden lg:inline">{adv.desc.desktop}</span>
                  </p>
                </div>
             ))}
           </div>
        </section>

      </main>

      {/* STICKY BOTTOM / CTA ALIGNMENT */}
      <footer className="fixed bottom-0 left-0 w-full z-50 bg-[#0e0e0e]/90 backdrop-blur-xl border-t border-[#39ff14]/20 lg:hidden">
        <div className="px-6 py-4 flex flex-col gap-3">
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[9px] text-[#39ff14] uppercase font-bold tracking-[0.3em] font-mono mb-1 animate-pulse">Most installs same week. We come to you.</span>
              <span className="text-[9px] text-[#adaaaa] uppercase font-bold tracking-[0.3em] font-mono mb-1">Configuration</span>
              <span className="text-xs font-black font-mono italic uppercase tracking-tighter text-white">{vlt}% {filmNames[film].split(' ')[0]} / {coverage}</span>
            </div>
            <span className="text-2xl font-mono font-black text-[#39ff14] tracking-tighter italic">${currentPrice()}</span>
          </div>
          <Button 
            onClick={() => openQuote(configString)}
            className="w-full bg-[#39ff14] text-[#053900] py-6 font-mono font-black uppercase text-sm tracking-[0.3em] shadow-[0_0_20px_rgba(57,255,20,0.15)] rounded-none"
          >
             BOOK YOUR TINT INSTALL →
          </Button>
        </div>
      </footer>

      {/* DESKTOP DESKTOP CTA */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50">
        <Button 
          onClick={() => openQuote(configString)}
          className="bg-[#39ff14] text-[#053900] p-8 lg:p-10 font-mono font-black italic text-lg lg:text-xl uppercase tracking-[0.2em] rounded-none hover:bg-[#32e612] shadow-[0_20px_50px_rgba(57,255,20,0.3)] transition-all animate-pulse-subtle group"
        >
          BOOK APPOINTMENT <ArrowRight className="ml-4 w-6 h-6 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

    </div>
  );
};

export default Tint;
