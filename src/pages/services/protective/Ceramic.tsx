import { useState, useRef } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { 
  Shield, 
  Sparkles, 
  Zap, 
  Check, 
  ChevronDown, 
  Droplets, 
  Sun, 
  Beaker, 
  Layers, 
  Search, 
  Menu,
  ArrowRight,
  User,
  Settings,
  Waves,
  Timer,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import ReviewStats from "@/components/ReviewStats";

const packages = {
  entry: { 
    id: 'entry',
    name: 'ENTRY COATING', 
    subtitle: '2-year protection', 
    price: '1,100', 
    years: '2 Years', 
    layers: '1-Layer SiO2', 
    warranty: '2 Years', 
    features: ['Single-layer ceramic', 'Paint correction prep', 'Hydrophobic finish'] 
  },
  pro: { 
    id: 'pro',
    name: 'PRO COATING', 
    subtitle: '5-year protection', 
    price: '1,600', 
    years: '5 Years', 
    layers: '2-Layer SiO2', 
    warranty: '5 Years', 
    features: ['Multi-layer ceramic', 'Enhanced gloss & depth', 'Wheel & glass coating'] 
  },
  elite: { 
    id: 'elite',
    name: 'ELITE COATING', 
    subtitle: '7-year protection', 
    price: '2,200', 
    years: '7 Years', 
    layers: '3-Layer SiO2', 
    warranty: '7 Years', 
    features: ['Maximum layer count', 'Interior leather protection', 'Annual maintenance included'] 
  }
};

type PackageKey = keyof typeof packages;

const Ceramic = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<PackageKey>('pro');
  const [openAccordion, setOpenAccordion] = useState<string | null>('hydrophobic');
  const packagesRef = useRef<HTMLDivElement>(null);

  const currentPkg = packages[selectedPackage];

  const scrollToPackages = () => {
    packagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white font-sans antialiased overflow-x-hidden pt-16 pb-24">
      <SEO 
        title="Ceramic Coating Seattle, WA | 2-7 Year Paint Protection"
        description="Experience the Barber's Standard. The Auto Barber specializes in professional ceramic coating in Seattle, WA. Ultra-high gloss, hydrophobic surface, and permanent UV protection for your investment."
      />
      {/* Sub-header Bar (Mobile-first feel) */}
      <div className="bg-[#131313] text-[#C9A962] font-mono tracking-tighter uppercase border-b border-white/5 flex justify-between items-center w-full px-6 py-2 z-40 lg:hidden">
        <div className="flex items-center gap-2">
          <Settings className="text-[#C9A962] w-4 h-4" />
          <span className="text-sm font-bold tracking-[0.2em]">The Ceramic Division</span>
        </div>
        <button 
          onClick={() => openQuote(`Ceramic: ${selectedPackage}`)}
          className="bg-[#C9A962] text-white px-3 py-1 text-[10px] font-bold tracking-widest rounded-none font-mono"
        >
          GET QUOTE
        </button>
      </div>

      <main className="w-full max-w-[1400px] mx-auto">
        {/* HERO SECTION - Refined to prevent text cropping */}
        <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-end px-6 pb-20 lg:pb-32 overflow-hidden bg-[#0e0e0e] pt-32">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom" 
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1600&q=80" 
              alt="Ceramic coated car"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/50 to-transparent"></div>
          </div>
          
          <div className="relative z-10 space-y-6 max-w-4xl mx-auto w-full lg:px-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C9A962]/10 border border-[#C9A962]/20 shadow-[0_0_20px_rgba(0,102,255,0.1)]">
              <span className="text-[10px] lg:text-xs font-bold text-[#C9A962] tracking-[0.3em] uppercase">Ceramic Division</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black border-l-8 border-[#C9A962] pl-6 leading-[0.8] tracking-tighter uppercase italic drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              SEATTLE WA<br/><span className="text-[#C9A962]">CERAMIC</span>
            </h1>
            <p className="text-[#adaaaa] text-lg lg:text-2xl font-mono leading-tight max-w-[450px] uppercase tracking-tighter opacity-80">
              <span className="lg:hidden">5 years. Zero wax.</span>
              <span className="hidden lg:inline">Ultra-High Gloss Protection That Outlasts Wax</span>
            </p>
            <div className="pt-4">
              <ReviewStats />
            </div>
            <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-end gap-3 lg:border-r border-white/10 lg:pr-8">
                <span className="text-[#adaaaa] text-xs font-bold uppercase tracking-[0.2em] mb-1">Starting Level</span>
                <span className="text-5xl lg:text-7xl font-mono font-black text-white italic tracking-tighter leading-none">$499</span>
              </div>
              <Button 
                onClick={scrollToPackages}
                className="w-full sm:w-auto py-8 px-12 bg-[#C9A962] text-white font-black rounded-none uppercase font-display tracking-[0.2em] text-sm shadow-[0_8px_32px_rgba(0,102,255,0.2)] hover:bg-[#A6884A] transition-all duration-300"
              >
                VIEW THE MENU
              </Button>
            </div>
          </div>
        </section>

        {/* PACKAGE SELECTOR */}
        <section ref={packagesRef} id="packages" className="bg-[#191a1a] py-16 px-6 lg:px-12 border-y border-white/5 relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none grid-bg"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-4 lg:gap-8 max-w-7xl mx-auto">
            <div className="border-l-4 border-[#C9A962] pl-6">
              <h2 className="font-display text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white">Select Your <span className="text-[#C9A962]">Cut</span></h2>
              <p className="font-mono text-[10px] text-[#adaaaa] font-bold uppercase tracking-[0.4em] mt-2">Ceramic coating tiers — Matched to your investment.</p>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 snap-x">
              {(Object.keys(packages) as PackageKey[]).map((pkgKey) => {
                const pkg = packages[pkgKey];
                const isActive = selectedPackage === pkgKey;
                return (
                  <button 
                    key={pkgKey}
                    onClick={() => setSelectedPackage(pkgKey)} 
                    className={`snap-center min-w-[200px] lg:flex-1 p-6 transition-all duration-300 border-l-4 relative group ${
                      isActive 
                        ? 'bg-[#C9A962]/10 border-[#C9A962] ring-1 ring-[#C9A962]/20' 
                        : 'bg-[#202020] border-transparent border-opacity-0 hover:bg-[#262626] grayscale hover:grayscale-0'
                    }`}
                  >
                    {pkgKey === 'pro' && (
                      <div className="absolute top-0 right-0 bg-[#C9A962] text-white px-3 py-1">
                        <span className="text-[10px] font-black uppercase tracking-tighter italic font-display">Recommended</span>
                      </div>
                    )}
                    <span className={`text-[10px] font-bold uppercase tracking-[0.3em] block mb-2 ${isActive ? 'text-[#C9A962]' : 'text-[#adaaaa]'}`}>{pkgKey}</span>
                    <div className="flex items-baseline gap-2">
                       <span className={`text-4xl font-display font-black italic tracking-tighter ${isActive ? 'text-white' : 'text-[#adaaaa]'}`}>${pkg.price}</span>
                       <span className={`text-[10px] font-bold ${isActive ? 'text-[#C9A962]' : 'text-[#adaaaa]/40'}`}>/ {pkg.years}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* PACKAGE DETAIL CARD */}
            <div className="mt-8 p-8 lg:p-12 bg-[#202020] border border-white/5 relative overflow-hidden">
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#C9A962]/10 blur-3xl rounded-full"></div>
               
               <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-12">
                 <div className="lg:col-span-4 space-y-4">
                   <h3 className="text-4xl font-display font-black text-[#C9A962] italic tracking-tighter leading-none mb-1 uppercase">{currentPkg.name}</h3>
                   <p className="text-sm font-mono text-[#adaaaa] font-bold uppercase tracking-widest">{currentPkg.subtitle}</p>
                   <div className="pt-6 border-t border-white/10 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-none bg-[#0e0e0e] border border-white/5 flex items-center justify-center shadow-inner">
                          <Layers className="text-[#C9A962] w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-[#adaaaa] uppercase font-bold tracking-widest font-mono">Ceramic Layers</p>
                          <p className="text-lg font-display font-black italic uppercase tracking-tighter">{currentPkg.layers}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-none bg-[#0e0e0e] border border-white/5 flex items-center justify-center shadow-inner">
                          <Shield className="text-[#C9A962] w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-[#adaaaa] uppercase font-bold tracking-widest font-mono">Warranty</p>
                          <p className="text-lg font-display font-black italic uppercase tracking-tighter">{currentPkg.warranty}</p>
                        </div>
                      </div>
                   </div>
                 </div>

                 <div className="lg:col-span-8 flex flex-col justify-between">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {currentPkg.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5 hover:border-[#C9A962]/30 transition-colors">
                          <CheckCircle2 className="text-[#C9A962] w-4 h-4 shrink-0" />
                          <span className="text-xs lg:text-sm font-mono uppercase font-bold tracking-wider text-[#e5e2e1]">{feature}</span>
                        </div>
                      ))}
                   </div>
                   
                   <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[#adaaaa] text-[10px] font-bold uppercase tracking-widest">Starting From</span>
                        <span className="text-4xl lg:text-5xl font-mono font-black text-white italic tracking-tighter">${currentPkg.price}</span>
                        <span className="text-xs font-bold text-white">/ {packages[selectedPackage].years}</span>
                      </div>
                      <Button 
                        onClick={() => openQuote(`Ceramic: ${currentPkg.name}`)}
                        className="w-full sm:w-auto bg-white text-[#0A0A0A] px-10 py-6 font-black uppercase text-xs tracking-[0.2em] hover:bg-gray-200 transition-all font-display rounded-none shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      >
                        REQUEST QUOTE
                      </Button>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* ADD-ONS SECTION */}
        <section className="py-20 px-6 lg:px-12 bg-[#0e0e0e]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
              <Sparkles className="text-[#C9A962] w-8 h-8 lg:w-12 lg:h-12" />
              Optional Upgrades
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <Timer className="w-6 h-6 text-[#C9A962]" />, title: 'Wheel & Caliper', price: '+$299', 
                  image: '/images/portfolio/wheel-caliper.jpg',
                  desc: { mobile: 'Brake dust bonds to bare metal fast. Ceramic-coated wheels clean in seconds and resist the iron buildup that turns wheels brown.', desktop: 'Protects against brake dust' } },
                { icon: <User className="w-6 h-6 text-[#C9A962]" />, title: 'Interior Leather', price: '+$199', 
                  image: '/images/addons/interior-leather.png', alt: 'Leather conditioning treatment',
                  desc: { mobile: 'Leather in Seattle heat cracks and fades fast. Ceramic coating bonds to the surface and keeps it supple, stain-resistant, and looking new.', desktop: 'Prevents stains and wear' } },
                { icon: <Waves className="w-6 h-6 text-[#C9A962]" />, title: 'Plastic Trim', price: '+$149', 
                  image: 'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?w=800&q=80',
                  desc: { mobile: 'Faded grey trim drops your car\'s whole look. We restore it black and coat it so it stays that way — not for a week, for years.', desktop: 'Restores and protects trim' } },
                { icon: <Droplets className="w-6 h-6 text-[#C9A962]" />, title: 'Glass Coating', price: '+$99', 
                  image: '/images/addons/glass-coating.png', alt: 'Hydrophobic glass coating',
                  desc: { mobile: 'Rain beads off at speed. No more squinting through a smeared windshield on I-5. Visibility up, wiper use down.', desktop: 'Improves rain visibility' } },
              ].map((addon, i) => (
                <div key={i} className="p-6 bg-[#191a1a] border border-white/5 hover:border-[#C9A962]/30 transition-all group flex flex-col gap-4 relative overflow-hidden">
                  <div className="absolute inset-0 z-0 opacity-20 transition-transform duration-700 group-hover:scale-110">
                    <img src={addon.image} alt={addon.alt || addon.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-[#0e0e0e]/40 z-1" />
                  
                  <div className="relative z-10 w-12 h-12 bg-[#0e0e0e] flex items-center justify-center border border-white/10 group-hover:bg-[#C9A962]/10 group-hover:border-[#C9A962]/20 transition-all">
                    {addon.icon}
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-display font-black text-sm uppercase tracking-wider text-white mb-1">{addon.title}</h4>
                    <p className="text-[10px] text-[#adaaaa] font-bold uppercase tracking-widest mb-3">
                      <span className="lg:hidden">{addon.desc.mobile}</span>
                      <span className="hidden lg:inline">{addon.desc.desktop}</span>
                    </p>
                    <span className="text-[#C9A962] font-display font-black text-sm italic">{addon.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEW MARQUEE */}
        <section className="py-12 bg-[#191a1a] border-y border-white/10 overflow-hidden">
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
          <div className="relative w-full will-change-transform">
            <div className="flex whitespace-nowrap animate-marquee">
              {[
                { text: '"Absolutely amazing job. Best detailing I\'ve had on any of my cars. 100% recommended!"', author: 'Manu GP, Tesla Model Y' },
                { text: '"I found Jesse on Google search in my neighborhood and the great reviews convinced me to bring my 9 months old white Tesla model Y for a paint decontamination & ceramic coating service."', author: 'Tesla Model Y Owner' },
                { text: '"I found his pricing to be very affordable as I didn\'t want to spend allot of money on a ceramic coating because of my intentions to have my car fully repainted in the next several months, then have it wrapped to protect the new paint job."', author: 'Local Customer' },
              ].map((r, i) => (
                <div key={i} className="inline-flex flex-col px-8 border-r border-white/10 w-[340px] shrink-0 whitespace-normal">
                  <div className="flex gap-1 text-[#C9A962] mb-2">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    ))}
                  </div>
                  <p className="text-sm font-bold italic font-display uppercase tracking-wider mb-1 text-white line-clamp-2">{r.text}</p>
                  <span className="text-[10px] text-[#adaaaa] uppercase tracking-widest">{r.author}</span>
                </div>
              ))}
              {[
                { text: '"Absolutely amazing job. Best detailing I\'ve had on any of my cars. 100% recommended!"', author: 'Manu GP, Tesla Model Y' },
                { text: '"I found Jesse on Google search in my neighborhood and the great reviews convinced me to bring my 9 months old white Tesla model Y for a paint decontamination & ceramic coating service."', author: 'Tesla Model Y Owner' },
                { text: '"I found his pricing to be very affordable as I didn\'t want to spend allot of money on a ceramic coating because of my intentions to have my car fully repainted in the next several months, then have it wrapped to protect the new paint job."', author: 'Local Customer' },
              ].map((r, i) => (
                <div key={`dup-${i}`} className="inline-flex flex-col px-8 border-r border-white/10 w-[340px] shrink-0 whitespace-normal">
                  <div className="flex gap-1 text-[#C9A962] mb-2">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    ))}
                  </div>
                  <p className="text-sm font-bold italic font-display uppercase tracking-wider mb-1 text-white line-clamp-2">{r.text}</p>
                  <span className="text-[10px] text-[#adaaaa] uppercase tracking-widest">{r.author}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH PROFILE (ACCORDIONS) */}
        <section className="py-20 px-6 lg:px-12 bg-[#131313] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A962]/5 blur-[120px] rounded-full"></div>
           
           <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <span className="text-[10px] font-bold text-[#C9A962] tracking-[0.5em] uppercase block mb-4 italic">The Investment</span>
                <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter text-white italic leading-none">THE <span className="text-[#C9A962]">STANDARD</span></h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { 
                    id: 'hydrophobic', 
                    icon: <Droplets className="w-5 h-5" />, 
                    title: 'SELF-CLEANING EFFECT', 
                    desc: { 
                      mobile: 'Ceramic is hydrophobic — water sheets off, dirt barely bonds. Your wash time drops in half and your car stays cleaner longer between washes.',
                      desktop: 'Ceramic coatings repel water and dirt, making your vehicle much easier to wash and keep clean.'
                    }
                  },
                  { 
                    id: 'uv', 
                    icon: <Sun className="w-5 h-5" />, 
                    title: 'ULTIMATE UV DEFENSE', 
                    desc: {
                      mobile: 'Seattle summers can still punish paint. Nano-ceramic creates a mirror finish that shields your clear coat from the intense UV radiation that causes fading and oxidation.',
                      desktop: 'Protects your paint from sun damage, preventing fading and oxidation over time.'
                    }
                  },
                  { 
                    id: 'chemical', 
                    icon: <Beaker className="w-5 h-5" />, 
                    title: 'CHEMICAL ARMOR', 
                    desc: {
                      mobile: 'Road salt, sap, and bird drops etch into paint fast. The ceramic sacrificial layer takes the hit so your paint doesn\'t. Acids literally slide off.',
                      desktop: 'Acts as a protective layer against bird droppings, road salt, and other environmental contaminants.'
                    }
                  }
                ].map((spec) => (
                  <div 
                    key={spec.id} 
                    className={`p-6 bg-[#191a1a] border-l-4 transition-all duration-500 cursor-pointer ${
                      openAccordion === spec.id ? 'border-[#C9A962] shadow-[0_0_40px_rgba(0,102,255,0.05)]' : 'border-white/10 opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => toggleAccordion(spec.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className={`${openAccordion === spec.id ? 'text-[#C9A962]' : 'text-white/40'}`}>{spec.icon}</div>
                        <span className="font-display font-black uppercase text-sm tracking-[0.2em]">{spec.title}</span>
                      </div>
                      <ChevronDown className={`transition-transform duration-500 ${openAccordion === spec.id ? 'rotate-180 text-[#C9A962]' : 'text-white/20'}`} />
                    </div>
                    <div className={`transition-all duration-500 overflow-hidden ${openAccordion === spec.id ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                      <p className="font-mono text-xs text-[#adaaaa] leading-relaxed uppercase tracking-widest bg-[#0e0e0e] p-4 border border-white/5 border-l-2 border-l-[#C9A962]">
                        <span className="lg:hidden">{spec.desc.mobile}</span>
                        <span className="hidden lg:inline">{spec.desc.desktop}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* APPLICATION PROCESS TIMELINE */}
        <section className="py-20 px-6 lg:px-12 bg-[#0e0e0e]">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 border-l-4 border-[#C9A962] pl-8">
              <h2 className="font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter">THE <span className="text-[#C9A962]">PROCESS</span></h2>
              <p className="font-mono text-xs font-bold text-[#adaaaa] uppercase tracking-[0.3em] mt-3">The Barber's Standard</p>
            </div>
            
            <div className="relative space-y-16 ml-6 py-4">
              <div className="absolute left-[7px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-[#C9A962]/30"></div>
              
              {[
                { step: '01', title: 'Wash & Decontaminate', time: '1-2H', 
                  desc: <><span className="lg:hidden">We strip everything — old wax, iron particles, road fallout. Your paint needs a clean slate before a single pad touches it.</span><span className="hidden lg:inline">Surgical strip-wash to remove old waxes, iron particles, and environmental fall-out.</span></> },
                { step: '02', title: 'Paint Correction', time: '4-8H', 
                  desc: <><span className="lg:hidden">Machine polishing removes clear coat defects at the micron level. This is where swirls, scratches, and oxidation get eliminated — not covered.</span><span className="hidden lg:inline">Precision machine polishing to eliminate swirls and restore "Level 0" surface gloss.</span></> },
                { step: '03', title: 'Ceramic Application', time: '2-4H', 
                  desc: <><span className="lg:hidden">Hand application of the ceramic coating in controlled, overlapping sections. Perfect lighting ensures zero high spots.</span><span className="hidden lg:inline">Atmosphere-controlled hand application of the ceramic lattice in overlapping sections.</span></> },
                { step: '04', title: '12-Hour Cure', time: '12H', 
                  desc: <><span className="lg:hidden">Bonding phase where the ceramic transforms into a 9H crystal-hard finish. Keep it dry during this window.</span><span className="hidden lg:inline">Bonding phase where the ceramic transforms from liquid to a 9H hardness crystal.</span></> },
              ].map((item, i) => (
                <div key={i} className="relative flex gap-8 group">
                  <div className={`absolute -left-[14px] top-1.5 w-6 h-6 rounded-none border-4 border-[#0e0e0e] z-10 transition-all duration-500 ${
                    i === 0 ? 'bg-[#C9A962] shadow-[0_0_20px_#C9A962]' : 'bg-[#202020] group-hover:bg-[#C9A962]/50'
                  }`}></div>
                  <div className="flex-1 bg-[#131313] p-6 border border-white/5 group-hover:border-[#C9A962]/20 transition-all">
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

        {/* PERFORMANCE VS WAX TABLE */}
        <section className="py-20 px-6 lg:px-12 bg-[#191a1a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter text-center mb-4">THE <span className="text-[#C9A962]">UPGRADE</span></h2>
            <p className="lg:hidden text-center font-mono text-[10px] text-[#C9A962] uppercase font-bold tracking-[0.2em] mb-12">Ceramic vs Wax Comparison</p>
            {/* Desktop table */}
            <div className="hidden md:block rounded-none border border-white/10 shadow-2xl">
              <table className="w-full text-left text-sm border-collapse bg-[#131313]">
                <thead className="bg-[#202020] font-mono font-black text-[10px] uppercase tracking-[0.3em]">
                  <tr>
                    <th className="p-6 border-b border-white/5">Armor Feature</th>
                    <th className="p-6 border-b border-white/5 text-[#C9A962]">Nano Ceramic</th>
                    <th className="p-6 border-b border-white/5 text-[#adaaaa]">Standard Wax</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono">
                  {[
                    { feature: 'Service Life', ceramic: '1-5 YEARS', wax: '2-3 MONTHS' },
                    { feature: 'Mirror Gloss Depth', ceramic: 'MAX-DEF', wax: 'LOW/DULL' },
                    { feature: 'Self-Cleaning Effect', ceramic: 'SELF-WASH', wax: 'DIRT MAGNET' },
                    { feature: 'Bug/Acid Resistance', ceramic: 'COMPLETE', wax: 'NONE/LOW' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-6 font-display font-black text-xs uppercase tracking-widest border-r border-white/5">{row.feature}</td>
                      <td className="p-6 text-[#C9A962] font-display font-black text-2xl italic tracking-tighter">{row.ceramic}</td>
                      <td className="p-6 text-[#adaaaa]/60 font-mono text-xs tracking-widest">{row.wax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {[
                { feature: 'Service Life', ceramic: '1-5 YEARS', wax: '2-3 MONTHS' },
                { feature: 'Mirror Gloss Depth', ceramic: 'MAX-DEF', wax: 'LOW/DULL' },
                { feature: 'Self-Cleaning Effect', ceramic: 'SELF-WASH', wax: 'DIRT MAGNET' },
                { feature: 'Bug/Acid Resistance', ceramic: 'COMPLETE', wax: 'NONE/LOW' },
              ].map((row, i) => (
                <div key={i} className="bg-[#131313] border border-white/10 p-5">
                  <p className="font-display font-black text-xs uppercase tracking-widest text-white/70 mb-3">{row.feature}</p>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-[#C9A962] mb-1">Nano Ceramic</p>
                      <p className="text-[#C9A962] font-display font-black text-xl italic tracking-tighter">{row.ceramic}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Standard Wax</p>
                      <p className="text-white/50 font-mono text-xs tracking-widest">{row.wax}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center lg:hidden">
              <Button 
                onClick={() => openQuote(`Ceramic: ${currentPkg.name}`)}
                className="bg-[#C9A962] text-white px-10 py-6 font-display font-black uppercase text-xs tracking-[0.2em] hover:bg-[#A6884A] transition-all rounded-none"
              >
                GET A QUOTE
              </Button>
            </div>
          </div>
        </section>

        {/* PPF + COATING BUNDLE SECTION */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-[#0e0e0e] to-[#131313]">
           <div className="max-w-4xl mx-auto bg-black border border-[#C9A962]/20 p-8 lg:p-12 text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A962]" />
              <span className="text-[10px] font-black text-[#C9A962] uppercase tracking-[0.4em] block mb-4 italic">The Master Pairing</span>
              <h2 className="font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-6">PPF + <span className="text-[#C9A962]">COATING</span></h2>
              <p className="text-[#adaaaa] font-mono text-sm leading-relaxed mb-8 uppercase tracking-widest italic">
                Bundle <span className="text-white font-bold">STEALTH PPF</span> + <span className="text-white font-bold">NANO CERAMIC</span> for absolute rock chip protection and a permanent mirror gloss.
              </p>
              <Button 
                onClick={() => navigate('/services/protective/ppf')}
                variant="outline" 
                className="w-full sm:w-auto border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-white px-12 py-8 font-display font-black uppercase tracking-[0.2em] transition-all rounded-none"
              >
                THE COMBO →
              </Button>
           </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-6 lg:px-12 bg-[#0e0e0e]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-12 border-l-4 border-[#C9A962] pl-8 leading-none italic">COMMON <span className="text-[#C9A962]">QUESTIONS</span></h2>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {[
                { q: 'How long does the application take?', a: { mobile: 'Typically 1–2 days depending on the correction stage and vehicle size. We come to you — just tell us where to show up.', desktop: 'Typically 1-2 days. Most of that time is spent on paint correction — getting the surface flawless before the coating goes on. The coating itself cures within 24–48 hours.' } },
                { q: 'When can I wash the car after coating?', a: { mobile: 'Wait 7 days for the coating to fully cure. No car washes, no rain exposure if possible. After that — wash it and watch the water bead like nothing you\'ve seen.', desktop: 'Wait at least 7 days before the first wash. After that, maintenance is much easier — a pH-neutral rinse is all you usually need.' } },
                { q: 'Does ceramic coating prevent rock chips?', a: { mobile: 'No — ceramic is not PPF. It hardens the surface and resists light scratches, but won\'t stop a rock chip. For chip protection, pair it with PPF. Ask us about the combo.', desktop: 'No — ceramic coating is designed for paint protection against UV, chemicals, and washing swirls. For rock chip protection, pair it with PPF on the front end.' } },
              ].map((faq, i) => (
                <div key={i} className="py-6 group cursor-pointer overflow-hidden">
                  <div className="flex justify-between items-center" onClick={() => toggleAccordion(`faq-${i}`)}>
                    <span className="font-display font-black text-sm lg:text-2xl uppercase tracking-tight text-white/90 group-hover:text-[#C9A962] transition-colors italic leading-none">{faq.q}</span>
                    <ChevronDown className={`transition-all duration-300 ${openAccordion === `faq-${i}` ? 'rotate-180 text-[#C9A962]' : 'text-[#adaaaa]'}`} />
                  </div>
                  <div className={`transition-all duration-500 overflow-hidden ${openAccordion === `faq-${i}` ? 'max-height-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="font-mono text-[11px] lg:text-xs text-[#adaaaa] leading-relaxed uppercase tracking-widest bg-[#131313] p-6 border-l-2 border-[#C9A962]">
                      <span className="lg:hidden">{faq.a.mobile}</span>
                      <span className="hidden lg:inline">{faq.a.desktop}</span>
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
          <span className="text-[10px] font-bold text-[#adaaaa] uppercase tracking-[0.4em] mb-1">Selected Plan</span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-display font-black text-white tracking-tighter italic">${currentPkg.price}</span>
            <span className="text-[10px] font-black text-[#C9A962] font-display tracking-widest uppercase bg-[#C9A962]/10 px-2 ml-1">{selectedPackage}</span>
          </div>
        </div>
        <button 
          onClick={() => openQuote(`Ceramic: ${currentPkg.name}`)}
          className="bg-[#C9A962] px-8 py-4 rounded-none text-white font-display font-black uppercase text-xs tracking-[0.3em] active:scale-90 transition-all shadow-[0_0_20px_rgba(0,102,255,0.3)]"
        >
          GET THE CUT
        </button>
      </div>

      {/* STICKY CTA (DESKTOP) */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50">
        <Button 
          onClick={() => openQuote(`Ceramic: ${currentPkg.name}`)}
          className="bg-[#C9A962] text-white px-8 py-5 font-display font-black italic text-lg uppercase tracking-[0.15em] rounded-none hover:bg-[#A6884A] shadow-[0_10px_30px_rgba(201,169,98,0.35)] transition-all"
        >
          RESERVE YOUR CUT <ArrowRight className="ml-3 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Ceramic;
