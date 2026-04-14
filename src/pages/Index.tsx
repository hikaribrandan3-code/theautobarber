import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { Star, Phone, MapPin, Clock, CheckCircle, Award, Truck, Shield, ChevronRight } from "lucide-react";
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
      image: "/images/assets/ceramic_coating_bottle_glow_1776187427504.png",
      name: "Window Tint",
      price: "Quote",
      desc: "Heat rejection. UV blocking. Privacy and aesthetic factory look.",
      time: "3–4 hrs",
      items: ["Carbon or Ceramic film", "99% UV blockage", "Precision computer cut", "No-peel guarantee"],
      service: "Window Tint",
    },
    {
      category: "Car Protection",
      image: "/images/assets/ceramic_coating_bottle_glow_1776187427504.png",
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
    { icon: <Truck size={28} />, stat: "100%", label: "Mobile Service", sub: "We come to you" },
    { icon: <Award size={28} />, stat: "15+", label: "Years Experience", sub: "Proven craft" },
    { icon: <Shield size={28} />, stat: "100%", label: "Satisfaction", sub: "Guaranteed" },
  ];

  const process = [
    { step: "01", title: "Book Online", desc: "Pick your service and date in 60 seconds." },
    { step: "02", title: "We Show Up", desc: "Mobile van arrives at your location on time." },
    { step: "03", title: "The Detail", desc: "Performed with the barber's standard precision." },
    { step: "04", title: "The Result", desc: "Inspect your vehicle & enjoy the protection." },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white">
      <SEO
        title="The Auto Barber | Seattle Mobile Detailing — 165 Five-Star Reviews"
        description="Seattle's top-rated mobile detailing service. Interior Detail $199. Full Detail $350. Ceramic Coating from $600. We come to you. Book now."
      />

      {/* PROMO BAR (STATIC TOP) */}
      <div className="bg-white text-[#0A0A0A] text-center py-2 px-4 sticky top-0 z-[110]">
        <p className="text-[10px] font-black uppercase tracking-[0.3em]">
          Spring Special: Interior Detail{" "}
          <span className="font-black">$199</span>{" "}
          <span className="text-gray-400 line-through font-normal">(Reg $250)</span>
          {"  "}·{"  "}
          <button onClick={() => openQuote("Interior Detail")} className="underline underline-offset-2 hover:no-underline font-black">
            Claim Offer →
          </button>
        </p>
      </div>

      {/* LUXURY HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
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

        {/* Noir Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
          <p className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            165+ FIVE-STAR REVIEWS IN SEATTLE
          </p>
          <h1 
            className="text-5xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
          >
            BEYOND CLEAN.<br />BEYOND PROTECTED.
          </h1>
          <p className="max-w-2xl text-white/80 text-sm md:text-xl font-medium tracking-tight mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
            Seattle’s Trusted Master Craftsmen in Ceramic Coatings & Precision Detailing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <button
              onClick={() => openQuote()}
              className="bg-white text-black font-black uppercase tracking-[0.1em] px-12 py-6 text-sm hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-95"
            >
              GET A QUICK QUOTE
            </button>
            <a
              href="tel:2538939452"
              className="border border-white/20 text-white font-black uppercase tracking-[0.1em] px-12 py-6 text-sm hover:bg-white hover:text-black transition-all active:scale-95"
            >
              (253) 893-9452
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="w-[1px] h-16 bg-white" />
        </div>
      </section>

      {/* THE MENU / CONSOLIDATED CATEGORIES */}
      <section id="pricing" className="py-24 lg:py-40 px-6 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6 tracking-tighter">THE MENU</h2>
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">Direct Pricing • Professional Precision • Guaranteed Results</p>
          </div>
          
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
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 border border-white/10 px-2.5 py-1">
                      {s.category}
                    </span>
                    {s.popular && (
                      <span className="bg-white text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1">
                        MOST POPULAR
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-10">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 pr-12 line-clamp-1">{s.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-black text-white italic tracking-tighter">{s.price}</span>
                      {s.regularPrice && <span className="text-gray-600 text-lg line-through italic">{s.regularPrice}</span>}
                    </div>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-6 italic">{s.time} • Mobile Studio</p>
                    <p className="text-gray-300 text-sm leading-relaxed font-medium line-clamp-2">{s.desc}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-12 flex-grow">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 shrink-0" />
                        <span className="text-xs text-gray-400 font-medium leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openQuote(s.service)}
                    className={`w-full py-5 px-6 font-black uppercase tracking-widest text-[10px] md:text-xs transition-all shadow-lg active:scale-95 ${s.popular ? "bg-white text-black" : "bg-transparent text-white border border-white hover:bg-white hover:text-black"}`}
                  >
                    <span className="block whitespace-normal leading-tight">BOOK {s.name.toUpperCase()}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-white/20 text-[10px] mt-24 uppercase tracking-[0.2em] font-black">
            Pricing may vary based on condition & size • Final valuation on-site
          </p>
        </div>
      </section>

      {/* PROOF OF WORK / GALLERY */}
      <section id="gallery" className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">PROOF OF WORK</h2>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mt-4">Actual results. No corporate fluff.</p>
            </div>
            <Link to="/gallery" className="text-xs font-black uppercase tracking-[0.2em] underline underline-offset-8 text-white/60 hover:text-white transition-colors">
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
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest italic">{item.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THE BARBER */}
      <section className="py-24 px-6 bg-[#0E0E0E] text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
            {trust.map((t, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-white opacity-20 mb-8 flex justify-center lg:justify-start">
                  {t.icon}
                </div>
                <div className="text-5xl md:text-6xl font-black italic tracking-tighter mb-2">
                  {t.stat === "165" ? <Counter end={165} /> : t.stat}
                </div>
                <div className="font-black text-[10px] uppercase tracking-widest text-white/40 mb-1">{t.label}</div>
                <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section id="process" className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">THE PROCESS</h2>
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mt-4">Self-Contained Mobile Studio Precision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
            {process.map((p, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black text-white/5 leading-none transition-all group-hover:text-white/10 mb-6">{p.step}</div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING */}
      <section id="contact" className="py-24 px-6 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-16 tracking-tighter">THE<br />BOOKING</h2>
              <div className="space-y-12">
                <a href="tel:2538939452" className="flex items-center gap-8 group">
                  <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-white transition-all group-hover:scale-110">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-black mb-1">Direct Line / Text</p>
                    <p className="font-black text-3xl italic tracking-tighter">(253) 893-9452</p>
                  </div>
                </a>
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 border border-white/10 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-black mb-1">Studio Location</p>
                    <p className="font-black text-xl italic tracking-tighter">7418 St 126th Unit 1C, Seattle</p>
                    <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest mt-1">Mobile Service also available</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 border border-white/10 flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-black mb-1">Operating Hours</p>
                    <p className="font-black text-xl italic tracking-tighter">Mon – Sun: 8AM – 6PM</p>
                    <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest mt-1">By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-white/5 p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
              <h3 className="text-3xl font-black uppercase mb-10 tracking-tighter relative z-10">Service Requisition</h3>
              <form className="space-y-8 relative z-10" onSubmit={e => { e.preventDefault(); openQuote(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Vehicle Year/Make/Model</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-sm focus:border-white outline-none transition-colors placeholder:text-white/10" placeholder="e.g. 2024 Tesla Model Y" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Service Interest</label>
                    <select className="w-full bg-transparent border-b border-white/20 py-4 text-sm focus:border-white outline-none transition-colors">
                      <option className="bg-[#0A0A0A]">Auto Detailing</option>
                      <option className="bg-[#0A0A0A]">Ceramic Coating</option>
                      <option className="bg-[#0A0A0A]">Window Tint</option>
                      <option className="bg-[#0A0A0A]">PPF (Clear Bra)</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full bg-white text-black font-black uppercase tracking-[0.2em] py-6 text-sm hover:bg-gray-200 transition-all active:scale-[0.98] shadow-2xl">
                  SEND REQUISITION
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CITY LIST */}
      <footer className="py-20 bg-[#080808] border-t border-white/5 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-8">The Auto Barber Seattle</p>
          <p className="text-white/20 text-[10px] font-black uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
            Serving Seattle, Bellevue, Tacoma, Kirkland, Redmond, Renton, Kent, Edmonds & surrounding areas.
          </p>
          <div className="mt-12 flex justify-center gap-10 border-t border-white/5 pt-12">
            <Link to="/about" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-white transition-colors">About Craftsman</Link>
            <Link to="/services" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Capabilities</Link>
            <Link to="/contact" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Location</Link>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-[120] lg:hidden grid grid-cols-2 border-t border-white/10">
        <a
          href="tel:2538939452"
          className="bg-[#0A0A0A] text-white font-black uppercase tracking-widest py-7 text-xs text-center border-r border-white/10 hover:bg-[#141414] transition-colors"
        >
          📞 Call Direct
        </a>
        <button
          onClick={() => openQuote()}
          className="bg-white text-black font-black uppercase tracking-widest py-7 text-xs hover:bg-gray-200 transition-colors"
        >
          📅 Book Detail
        </button>
      </div>
    </div>
  );
};

export default Index;
