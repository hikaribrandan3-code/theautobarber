import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { Star, Phone, MapPin, Clock, CheckCircle, Award, Shield, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";
import { useState, useEffect, useRef } from "react";

// Animated counter
const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(end / (duration / 16));
        const timer = setInterval(() => {
          start = Math.min(start + step, end);
          setCount(start);
          if (start >= end) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=The+Auto+Barber+Reviews";

const Index = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();

  // Consolidated service data in one flat array with categories
  const menuItems = [
    {
      category: "Interior Services",
      image: "/images/assets/interior_detailing_focus_1776187301149.png",
      name: "Interior Detail",
      price: "$199",
      regularPrice: "$250",
      badge: "SPRING SPECIAL",
      desc: "Deep clean every surface. Leather treated. Carpets restored. Like new inside.",
      time: "2–3 hrs",
      items: ["Full vacuum & extraction", "Steam clean all surfaces", "Leather conditioning", "Door jambs & glass"],
      service: "Interior Detail",
    },
    {
      category: "Exterior Services",
      image: "/images/assets/exterior_paint_gloss_1776187353898.png",
      name: "Full Detail",
      price: "$350",
      desc: "Hand wash, decon, paint correction light. Mirror finish. Showroom shine.",
      time: "5–6 hrs",
      items: ["Complete Interior Detail", "Multi-stage hand wash", "Decontamination & clay", "Premium hand wax"],
      service: "Full Detail",
      popular: true,
    },
    {
      category: "Exterior Services",
      image: "/images/assets/exterior_paint_gloss_1776187353898.png",
      name: "Correction Consultation",
      price: "Free",
      desc: "Required for heavy swirl marks or oxidation. Mandatory prep for ceramic.",
      time: "30 mins",
      items: ["Paint depth measurement", "Swirl & scratch analysis", "Custom correction plan", "Quote visualization"],
      service: "Correction Consultation",
    },
    {
      category: "Car Protection",
      image: "/images/assets/ceramic_coating_bottle_glow_1776187427504.png",
      name: "Ceramic Coating",
      price: "$600+",
      desc: "Precision cut. UV protection. 3-5 year nano-bond gloss. Permanent grade.",
      time: "8+ hrs",
      items: ["Multi-stage paint prep", "Ceramic nano-coating", "UV & chemical protection", "Extreme hydrophobics"],
      service: "Ceramic Coating",
    },
    {
      category: "Car Protection",
      image: "/images/assets/window_tint_luxury_1776189700411.png",
      name: "Window Tint",
      price: "Quote",
      desc: "Heat rejection. UV blocking. Privacy and aesthetic factory look.",
      time: "3–4 hrs",
      items: ["Carbon or Ceramic film", "99% UV blockage", "Precision computer cut", "No-peel guarantee"],
      service: "Window Tint",
    },
    {
      category: "Car Protection",
      image: "/images/assets/ppf_application_background_1776191964267.png",
      name: "PPF (Clear Bra)",
      price: "Quote",
      desc: "Impact protection. Self-healing film for your front end or full car.",
      time: "1–3 days",
      items: ["Xpel or SunTek film", "Rock chip protection", "Self-healing technology", "10-year warranty"],
      service: "PPF",
    }
  ];

  const gallery = [
    { img: "/images/portfolio/jeep-green.jpg", title: "Jeep Wrangler", tag: "Full Exterior Detail" },
    { img: "/images/portfolio/tesla-masked.jpg", title: "Tesla Model Y", tag: "Paint Correction Prep" },
    { img: "/images/portfolio/hot-rod.jpg", title: "Classic Hot Rod", tag: "Full Restoration" },
    { img: "/images/portfolio/paint-correction-5050.jpg", title: "50/50 Split", tag: "Paint Correction" },
    { img: "/images/portfolio/ceramic-red-car.jpg", title: "Red Sport", tag: "Ceramic Coating" },
    { img: "/images/portfolio/sb3-alpha.jpg", title: "SB3 Alpha", tag: "Ceramic Application" },
  ];

  const trust = [
    { icon: <Star size={28} fill="currentColor" />, stat: "165", label: "Google Reviews", sub: "★★★★★ avg" },
    { icon: <CheckCircle size={28} />, stat: "SHOP-BASED", label: "Studio", sub: "DROP OFF & RELAX" },
    { icon: <Award size={28} />, stat: "15+", label: "Years Experience", sub: "Proven craft" },
    { icon: <Shield size={28} />, stat: "100%", label: "Satisfaction", sub: "Guaranteed" },
  ];

  const process = [
    { step: "01", title: "Book Online", desc: "Pick your service and date in 60 seconds." },
    { step: "02", title: "Drop Off", desc: "Bring your vehicle to our Seattle studio." },
    { step: "03", title: "The Detail", desc: "Performed with the barber's standard precision." },
    { step: "04", title: "The Result", desc: "Inspect your vehicle & enjoy the protection." },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white">
      <SEO
        title="The Auto Barber | Seattle Mobile Detailing — 165 Five-Star Reviews"
        description="Seattle's top-rated mobile detailing service. Interior Detail $199. Full Detail $350. Ceramic Coating from $600. We come to you. Book now."
      />


      {/* PROMO BAR (RELATIVE TOP) */}
      <div className="bg-white text-[#0A0A0A] text-center py-2 px-4 relative z-[90] hidden lg:block">
        <p className="text-[10px] font-black uppercase tracking-[0.3em]">
          Spring Special: Interior Detail{" "}
          <span className="font-black">$199</span>{" "}
          <span className="text-gray-400 line-through font-normal">(Reg $250)</span>
          {"  "}·{"  "}
          <button onClick={() => openQuote("Interior Detail")} className="underline underline-offset-2 hover:no-underline font-black">
            BOOK $199 SPECIAL →
          </button>
        </p>
      </div>

      {/* LUXURY HERO SECTION - CENTER STACKED */}
      <section className="relative px-6 overflow-hidden pt-[140px] pb-24 min-h-[85vh] flex flex-col justify-center items-center text-center">
        {/* Full-bleed background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/portfolio/paint-correction-5050.jpg"
            alt="Seattle auto detailing"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.3)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0A0A0A]" />
        </div>

        {/* Noir Content Container - Stacked */}
        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center gap-8">
          
          {/* Top: Text */}
          <div className="flex flex-col items-center w-full">
            <h1 
              className="text-[60px] md:text-[100px] font-black leading-[0.85] tracking-tighter uppercase italic"
              style={{ textShadow: "0 10px 40px rgba(0,0,0,0.9)" }}
            >
              YOUR CAR.<br />
              <span className="text-[#C9A962]">OUR CRAFT.</span>
            </h1>
            
            <div className="mt-8 flex flex-col items-center gap-6">
              <p className="text-white text-[10px] md:text-[13px] font-black uppercase tracking-[0.5em] flex items-center gap-2 md:gap-4 flex-wrap justify-center">
                <span className="text-[#C9A962] text-lg flex gap-1">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </span>
                <span>4.9 / 5 — 165 GOOGLE REVIEWS</span>
                <span className="hidden md:inline text-white/40">•</span>
                <span>SEATTLE'S TRUSTED DETAILER</span>
              </p>
              
              <div className="h-12 flex items-center justify-center italic text-white/90 text-sm md:text-xl font-medium max-w-2xl leading-relaxed">
                "Absolutely amazing job... 100% recommended!" — Manu GP, Tesla Model Y
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <button
                onClick={() => {
                  const services = document.getElementById('services-grid');
                  services?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 bg-white text-black font-black uppercase tracking-[0.2em] px-8 py-5 text-xs hover:bg-[#C9A962] hover:text-white transition-all shadow-2xl active:scale-95"
              >
                VIEW SERVICES
              </button>
              <a
                href="tel:2538939452"
                className="flex-1 bg-transparent border-2 border-white text-white font-black uppercase tracking-[0.2em] px-8 py-5 text-xs hover:bg-white hover:text-black transition-all text-center active:scale-95"
              >
                CALL DIRECT
              </a>
            </div>
          </div>



        </div>
      </section>

      {/* SERVICES 2x2 GRID */}
      <section id="services-grid" className="py-24 px-6 bg-[#0E0E0E] text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-4 italic">SERVICES</h2>
            <p className="text-white text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em]">Professional protection for vehicles you value</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group relative border border-white/10 p-10 hover:border-white/30 transition-colors flex flex-col justify-between overflow-hidden bg-black min-h-[300px]">
              <div className="absolute inset-0 z-0">
                <img src="/images/assets/interior_detailing_focus_1776187301149.png" alt="Auto Detailing" className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-widest mb-4">AUTO DETAILING</h3>
                  <p className="text-white text-sm leading-relaxed mb-3 font-medium">Interior and exterior restorations performed to the highest standard. We treat every vehicle like it's our own.</p>
                  <ul className="hidden lg:grid grid-cols-2 gap-y-3 gap-x-4 mt-6 text-[9px] font-black uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors">
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> FULL VACUUM & STEAM</li>
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> LEATHER TREATMENT</li>
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> PAINT DECON</li>
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> CLAY BAR FINISH</li>
                  </ul>
                </div>
                <button onClick={() => openQuote('Auto Detailing')} className="text-xs font-bold uppercase tracking-widest text-white underline underline-offset-4 self-start mt-6">Book Service →</button>
              </div>
            </div>
            <div className="group relative border border-white/10 p-10 hover:border-white/30 transition-colors flex flex-col justify-between overflow-hidden bg-black min-h-[300px]">
              <div className="absolute inset-0 z-0">
                <img src="/images/assets/exterior_paint_gloss_1776187353898.png" alt="Paint Protection" className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-widest mb-4">PAINT PROTECTION</h3>
                  <p className="text-white text-sm leading-relaxed mb-3 font-medium">Clear bra and PPF film application that defends your paint from rock chips, road debris, and UV damage.</p>
                  <ul className="hidden lg:grid grid-cols-2 gap-y-3 gap-x-4 mt-6 text-[9px] font-black uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors">
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> SELF-HEALING FILM</li>
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> XPEL & STEK CERTIFIED</li>
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> 10-YEAR WARRANTY</li>
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> ZERO-ORANGE PEEL</li>
                  </ul>
                </div>
                <button onClick={() => openQuote('PPF')} className="text-xs font-bold uppercase tracking-widest text-white underline underline-offset-4 self-start mt-6">Book Service →</button>
              </div>
            </div>
            <div className="group relative border border-white/10 p-10 hover:border-white/30 transition-colors flex flex-col justify-between overflow-hidden bg-black min-h-[300px]">
              <div className="absolute inset-0 z-0">
                <img src="/images/assets/window_tint_luxury_1776189700411.png" alt="Window Tint" className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-widest mb-4">WINDOW TINT</h3>
                  <p className="text-white text-sm leading-relaxed mb-3 font-medium">99% UV rejection. Precision-cut carbon or ceramic film for privacy, heat control, and a factory look.</p>
                  <ul className="hidden lg:grid grid-cols-2 gap-y-3 gap-x-4 mt-6 text-[9px] font-black uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors">
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> 99% UV REJECTION</li>
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> NANO-CERAMIC FILM</li>
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> NO-PEEL GUARANTEE</li>
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> COMPUTER CUT</li>
                  </ul>
                </div>
                <button onClick={() => openQuote('Window Tint')} className="text-xs font-bold uppercase tracking-widest text-white underline underline-offset-4 self-start mt-6">Book Service →</button>
              </div>
            </div>
            <div className="group relative border border-white/10 p-10 hover:border-white/30 transition-colors flex flex-col justify-between overflow-hidden bg-black min-h-[300px]">
              <div className="absolute inset-0 z-0">
                <img src="/images/assets/ceramic_water_beading_1776189745679.png" alt="Ceramic Coatings" className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-widest mb-4">CERAMIC COATINGS</h3>
                  <p className="text-white text-sm leading-relaxed mb-3 font-medium">Nano-bond ceramic protection. Extreme hydrophobics, UV defense, and a deep gloss that lasts years.</p>
                  <ul className="hidden lg:grid grid-cols-2 gap-y-3 gap-x-4 mt-6 text-[9px] font-black uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors">
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> SB3 NANO-COATING</li>
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> EXTREME GLOSS</li>
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> 3-5 YEAR BOND</li>
                    <li className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45 shrink-0" /> HYDROPHOBIC DEFENSE</li>
                  </ul>
                </div>
                <button onClick={() => openQuote('Ceramic Coating')} className="text-xs font-bold uppercase tracking-widest text-white underline underline-offset-4 self-start mt-6">Book Service →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOST POPULAR HEADER BREAK */}
      <section className="bg-[#0E0E0E] pt-32 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter italic shadow-2xl">OUR MOST POPULAR</h2>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section id="pricing" className="pb-32 bg-[#0E0E0E] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {menuItems.map((s, i) => (
              <div
                key={i}
                className={`group relative border bg-[#0A0A0A] flex flex-col transition-all duration-500 overflow-hidden ${s.popular ? "border-white border-2" : "border-white/10"}`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white border border-white/20 px-3 py-1.5 backdrop-blur-md">
                      {s.category}
                    </span>
                    {s.popular && (
                      <span className="bg-[#C9A962] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5">
                        MOST POPULAR
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-10">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 pr-4 text-white">{s.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-black text-white italic tracking-tighter">{s.price}</span>
                      {s.regularPrice && <span className="text-white/60 text-lg line-through italic">{s.regularPrice}</span>}
                    </div>
                    <p className="text-white text-[10px] uppercase font-bold tracking-widest mb-6 italic">{s.time}</p>
                    <p className="text-white/80 text-sm leading-relaxed font-medium">{s.desc}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-12 flex-grow">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-4 text-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 shrink-0" />
                        <span className="text-xs font-medium leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openQuote(s.service)}
                    className={`w-full py-5 px-6 font-black uppercase tracking-widest text-[10px] md:text-xs transition-all shadow-lg active:scale-95 ${s.popular ? "bg-[#C9A962] text-white" : "bg-transparent text-white border border-white hover:bg-white hover:text-black"}`}
                  >
                    <span className="block whitespace-normal leading-tight">BOOK THIS PACKAGE</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-white text-[10px] lg:text-sm mt-20 uppercase tracking-[0.2em] font-black">
            Pricing may vary based on condition & size • Final valuation on-site
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-24 px-6 bg-[#0E0E0E] text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
            {[
              { stat: "165+", label: "Google Reviews", sub: "★★★★★ Avg Rating" },
              { stat: "Studio", label: "Shop Based", sub: "Drop off & Relax" },
              { stat: "100%", label: "Satisfaction", sub: "Results Guaranteed" },
              { stat: "Zero", label: "Defects", sub: "Detailer's Standard" },
            ].map((t, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-[56px] md:text-[72px] font-black italic tracking-tighter leading-none mb-4 text-[#C9A962]">
                  {t.stat}
                </div>
                <div className="font-black text-[10px] uppercase tracking-[0.3em] text-white mb-1">{t.label}</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF OF WORK / GALLERY */}
      <section id="gallery" className="pt-16 pb-8 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">PROOF OF WORK</h2>
            </div>
            <Link to="/gallery" className="text-xs font-black uppercase tracking-[0.2em] underline underline-offset-8 text-white hover:text-white/60 transition-colors">
              Full Archive →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {gallery.map((item, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-black text-xl uppercase mb-1">{item.title}</p>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest italic">{item.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section id="process" className="pt-8 pb-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">THE PROCESS</h2>
            <p className="text-white text-xs font-bold uppercase tracking-[0.3em] mt-4">SEATTLE'S CAR PROTECTION STUDIO.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
            {process.map((p, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black text-white leading-none transition-all mb-6">{p.step}</div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{p.title}</h3>
                <p className="text-white text-sm leading-relaxed font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING */}
      <section id="contact" className="py-20 px-6 bg-[#0E0E0E] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — Form */}
            <div className="bg-[#0A0A0A] border border-white/10 p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-[#C9A962]/5 blur-3xl rounded-full pointer-events-none" />
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A962] mb-3">Free • No Commitment</p>
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-10">THE<br/>BOOKING</h2>
              <form className="space-y-7 relative z-10" onSubmit={e => { e.preventDefault(); openQuote(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div className="relative">
                    <input type="text" placeholder=" " id="name" className="peer w-full bg-transparent border-b border-white/20 pt-5 pb-2 text-sm focus:border-[#C9A962] outline-none transition-colors" required />
                    <label htmlFor="name" className="absolute left-0 top-1 text-[9px] font-black uppercase tracking-widest text-white/40 peer-focus:text-[#C9A962] transition-colors">Name</label>
                  </div>
                  <div className="relative">
                    <input type="tel" placeholder=" " id="phone" className="peer w-full bg-transparent border-b border-white/20 pt-5 pb-2 text-sm focus:border-[#C9A962] outline-none transition-colors" required />
                    <label htmlFor="phone" className="absolute left-0 top-1 text-[9px] font-black uppercase tracking-widest text-white/40 peer-focus:text-[#C9A962] transition-colors">Phone</label>
                  </div>
                </div>
                <div className="relative">
                  <input type="text" placeholder=" " id="vehicle" className="peer w-full bg-transparent border-b border-white/20 pt-5 pb-2 text-sm focus:border-[#C9A962] outline-none transition-colors placeholder:text-white/20" required />
                  <label htmlFor="vehicle" className="absolute left-0 top-1 text-[9px] font-black uppercase tracking-widest text-white/40 peer-focus:text-[#C9A962] transition-colors">Vehicle (Year / Make / Model)</label>
                </div>
                <div className="relative">
                  <select id="service" className="w-full bg-transparent border-b border-white/20 pt-5 pb-2 text-sm focus:border-[#C9A962] outline-none transition-colors text-white/80 appearance-none">
                    <option className="bg-[#0A0A0A]">Auto Detailing</option>
                    <option className="bg-[#0A0A0A]">Ceramic Coating</option>
                    <option className="bg-[#0A0A0A]">Window Tint</option>
                    <option className="bg-[#0A0A0A]">PPF (Clear Bra)</option>
                  </select>
                  <label htmlFor="service" className="absolute left-0 top-1 text-[9px] font-black uppercase tracking-widest text-white/40">Service Interest</label>
                </div>
                <button type="submit" className="w-full bg-white text-black font-black uppercase tracking-[0.25em] py-5 text-sm hover:bg-[#C9A962] hover:text-white transition-all duration-300 active:scale-[0.98] mt-2">
                  REQUEST A QUOTE →
                </button>
              </form>
            </div>

            {/* Right — What to Expect */}
            <div className="flex flex-col justify-center gap-10">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A962] mb-4">How It Works</p>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-8">WHAT TO EXPECT</h3>
                <div className="space-y-6">
                  {[
                    { n: "01", t: "Submit this form", d: "Takes 60 seconds. No spam, ever." },
                    { n: "02", t: "Get a firm quote", d: "We reply within 2 hours via text." },
                    { n: "03", t: "Book your date", d: "Pick a time that works for you." },
                    { n: "04", t: "Drop off & relax", d: "We'll handle the rest at the studio." },
                  ].map((step) => (
                    <div key={step.n} className="flex items-start gap-5">
                      <span className="text-[#C9A962] font-black text-lg leading-none mt-0.5">{step.n}</span>
                      <div>
                        <p className="font-black text-sm uppercase tracking-wide">{step.t}</p>
                        <p className="text-white/50 text-xs mt-1">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">★★★★★ Google Review</p>
                <p className="text-white italic text-sm leading-relaxed mb-2">"Absolutely amazing job. Best detailing I've had on any of my cars. 100% recommended!"</p>
                <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">— Manu GP, Tesla Model Y</p>
              </div>

              <a href="tel:2538939452" className="flex items-center gap-4 group">
                <Phone size={16} className="text-[#C9A962]" />
                <span className="font-black text-lg tracking-tighter hover:text-[#C9A962] transition-colors">(253) 893-9452</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-[120] lg:hidden grid grid-cols-2 border-t border-white/10 shadow-2xl">
        <a
          href="tel:2538939452"
          className="bg-[#0A0A0A] text-white font-black uppercase tracking-widest py-7 text-xs text-center border-r border-white/10 hover:bg-[#141414] transition-colors"
        >
          📞 Call Direct
        </a>
        <button
          onClick={() => openQuote()}
          className="bg-white text-black font-black uppercase tracking-widest py-7 text-xs hover:bg-gray-200 transition-colors shadow-[0_-4px_20px_rgba(255,255,255,0.1)]"
        >
          📅 Get A Quote
        </button>
      </div>
    </div>
  );
};

export default Index;
