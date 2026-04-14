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

  // Service pricing data restructured by categories
  const categories = [
    {
      title: "Interior Services",
      image: "/Users/daiskebrandan/.gemini/antigravity/brain/5d3fa7be-cb30-42a0-934f-95597e1da69f/interior_detailing_focus_1776187301149.png",
      items: [
        {
          name: "Interior Detail",
          price: "$199",
          regularPrice: "$250",
          badge: "SPRING SPECIAL",
          desc: "Deep clean every surface. Leather treated. Carpets restored. Like new inside.",
          time: "2–3 hrs",
          items: ["Full vacuum & extraction", "Steam clean all surfaces", "Leather conditioning", "Door jambs & glass"],
          service: "Interior Detail",
        }
      ]
    },
    {
      title: "Exterior Services",
      image: "/Users/daiskebrandan/.gemini/antigravity/brain/5d3fa7be-cb30-42a0-934f-95597e1da69f/exterior_paint_gloss_1776187353898.png",
      items: [
        {
          name: "Full Detail",
          price: "$350",
          desc: "Hand wash, decon, paint correction light. Mirror finish. Showroom shine.",
          time: "5–6 hrs",
          items: ["Complete Interior Detail", "Multi-stage hand wash", "Decontamination & clay", "Premium hand wax"],
          service: "Full Detail",
          popular: true,
        },
        {
          name: "Correction Consultation",
          price: "Free",
          desc: "Required for heavy swirl marks or oxidation. Mandatory prep for ceramic.",
          time: "30 mins",
          items: ["Paint depth measurement", "Swirl & scratch analysis", "Custom correction plan", "Quote visualization"],
          service: "Correction Consultation",
        }
      ]
    },
    {
      title: "Car Protection",
      image: "/Users/daiskebrandan/.gemini/antigravity/brain/5d3fa7be-cb30-42a0-934f-95597e1da69f/ceramic_coating_bottle_glow_1776187427504.png",
      items: [
        {
          name: "Ceramic Coating",
          price: "$600+",
          desc: "Precision cut. UV protection. 3-5 year nano-bond gloss. Permanent grade.",
          time: "8+ hrs",
          items: ["Multi-stage paint prep", "Ceramic nano-coating", "UV & chemical protection", "Extreme hydrophobics"],
          service: "Ceramic Coating",
        },
        {
          name: "Window Tint",
          price: "Quote",
          desc: "Heat rejection. UV blocking. Privacy and aesthetic factory look.",
          time: "3–4 hrs",
          items: ["Carbon or Ceramic film", "99% UV blockage", "Precision computer cut", "No-peel guarantee"],
          service: "Window Tint",
        },
        {
          name: "PPF (Clear Bra)",
          price: "Quote",
          desc: "Impact protection. Self-healing film for your front end or full car.",
          time: "1–3 days",
          items: ["Xpel or SunTek film", "Rock chip protection", "Self-healing technology", "10-year warranty"],
          service: "PPF",
        }
      ]
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

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/portfolio/paint-correction-5050.jpg"
            alt="Seattle auto detailing"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.4)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex-grow flex flex-col justify-center py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] mb-4">
                SEATTLE, WA • CAR PROTECTION STUDIO
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6" style={{ letterSpacing: "-0.04em" }}>
                165 FIVE-STAR<br />DETAILS IN SEATTLE
              </h1>
              <p className="text-white/80 text-sm md:text-lg font-bold uppercase tracking-widest mb-2">
                Auto Detailing • Ceramic Coatings • Window Tint • PPF
              </p>
              <p className="text-white/40 text-xs md:text-sm font-medium italic">
                Visit our studio or we come to you for premium vehicle protection
              </p>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                >
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#F59E0B" stroke="none" />)}
                  </div>
                  <span className="font-bold text-sm tracking-tight border-b border-white/20 group-hover:border-white transition-all">165 Google Reviews</span>
                </a>
              </div>
            </div>

            <div className="bg-[#141414] border border-white/10 p-8 lg:p-10 shadow-2xl max-w-md mx-auto lg:ml-auto w-full">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">GET A QUICK QUOTE</h3>
              <form 
                className="space-y-4" 
                onSubmit={e => { 
                  e.preventDefault(); 
                  const formData = new FormData(e.currentTarget);
                  openQuote(formData.get('service') as string); 
                }}
              >
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input name="name" type="text" className="w-full bg-[#0A0A0A] border border-white/10 p-3.5 text-sm focus:border-white outline-none transition-colors text-white" placeholder="Name" required />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                  <input name="phone" type="tel" className="w-full bg-[#0A0A0A] border border-white/10 p-3.5 text-sm focus:border-white outline-none transition-colors text-white" placeholder="(000) 000-0000" required />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Service Needed</label>
                  <select name="service" className="w-full bg-[#0A0A0A] border border-white/10 p-3.5 text-sm focus:border-white outline-none transition-colors text-white appearance-none cursor-pointer">
                    <option>Interior Detailing</option>
                    <option>Full Detail (Paint Correction)</option>
                    <option>Ceramic Coating</option>
                    <option>Window Tint</option>
                    <option>PPF (Clear Bra)</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-white text-[#0A0A0A] font-black uppercase tracking-widest py-5 text-sm hover:bg-gray-200 transition-colors mt-4">
                  GET QUOTE NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* THE MENU / PRICING CATEGORIES */}
      <section id="pricing" className="py-16 lg:py-24 px-6 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-4" style={{ letterSpacing: "-0.03em" }}>THE MENU</h2>
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">Direct Pricing. Professional Results.</p>
          </div>
          
          <div className="space-y-24">
            {categories.map((cat, catIdx) => (
              <div key={catIdx}>
                <div className="flex items-center gap-6 mb-10">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter whitespace-nowrap">{cat.title}</h3>
                  <div className="h-[1px] bg-white/10 w-full" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((s, i) => (
                    <div
                      key={i}
                      className={`group relative border bg-[#0A0A0A] flex flex-col transition-all duration-500 overflow-hidden ${s.popular ? "border-white border-2" : "border-white/10"}`}
                    >
                      {/* Background Image with Overlay */}
                      <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700">
                        <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/10" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 p-10 flex flex-col h-full bg-[#0A0A0A]/20 backdrop-blur-[2px]">
                        {s.popular && (
                          <div className="absolute top-0 right-0 bg-white text-[#0A0A0A] text-[9px] font-black uppercase tracking-widest px-4 py-2">
                            MOST POPULAR
                          </div>
                        )}
                        {s.badge && (
                          <div className="absolute top-0 left-0 bg-amber-400 text-[#0A0A0A] text-[9px] font-black uppercase tracking-widest px-4 py-2">
                            {s.badge}
                          </div>
                        )}
                        
                        <div className="mb-8">
                          <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{s.name}</h3>
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-white italic tracking-tighter">{s.price}</span>
                            {s.regularPrice && <span className="text-gray-600 text-lg line-through italic">{s.regularPrice}</span>}
                          </div>
                          <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-6 italic">{s.time} • Mobile Studio</p>
                          <p className="text-gray-200 text-sm leading-relaxed font-medium">{s.desc}</p>
                        </div>
                        
                        <ul className="space-y-4 mb-10 flex-grow">
                          {s.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 shrink-0" />
                              <span className="text-xs text-gray-300 font-medium leading-tight">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          onClick={() => openQuote(s.service)}
                          className={`w-full py-5 px-4 font-black uppercase tracking-widest text-[10px] md:text-xs transition-colors text-center leading-tight ${s.popular ? "bg-white text-[#0A0A0A]" : "bg-transparent text-white border border-white hover:bg-white hover:text-[#0A0A0A]"}`}
                        >
                          <span className="block whitespace-normal">BOOK {s.name.toUpperCase()}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-white/20 text-[9px] mt-24 uppercase tracking-[0.2em] font-black">
            Pricing may vary based on condition & size • Final valuation on-site
          </p>
        </div>
      </section>

      {/* PROOF OF WORK / GALLERY */}
      <section id="gallery" className="py-16 lg:py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-none" style={{ letterSpacing: "-0.03em" }}>PROOF OF WORK</h2>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mt-4">Actual results. No corporate fluff.</p>
            </div>
            <Link to="/gallery" className="text-xs font-black uppercase tracking-[0.2em] underline underline-offset-8 text-white/60 hover:text-white transition-colors">
              Full Archive →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {gallery.map((item, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-black text-lg uppercase mb-1">{item.title}</p>
                  <p className="text-white/50 text-xs font-bold uppercase tracking-widest italic">{item.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THE BARBER */}
      <section className="py-16 lg:py-24 px-6 bg-[#0E0E0E] text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {trust.map((t, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-white opacity-20 mb-6 flex justify-center lg:justify-start">
                  {t.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black italic tracking-tighter mb-2">
                  {t.stat === "165" ? <Counter end={165} /> : t.stat}
                </div>
                <div className="font-black text-xs uppercase tracking-widest text-white/40 mb-1">{t.label}</div>
                <div className="text-xs font-bold text-white/20 uppercase tracking-widest">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section id="process" className="py-16 lg:py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none" style={{ letterSpacing: "-0.03em" }}>THE PROCESS</h2>
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mt-4">Self-Contained Mobile Studio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
            {process.map((p, i) => (
              <div key={i} className="relative group">
                <div className="text-7xl font-black text-white/5 leading-none transition-colors group-hover:text-white/10 mb-4">{p.step}</div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING */}
      <section id="contact" className="py-16 lg:py-24 px-6 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] mb-12">THE<br />BOOKING</h2>
              <div className="space-y-10">
                <a href="tel:2538939452" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-black mb-1">Direct Line / Text</p>
                    <p className="font-black text-2xl italic">(253) 893-9452</p>
                  </div>
                </a>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-black mb-1">Studio Location</p>
                    <p className="font-black text-lg">7418 St 126th Unit 1C, Seattle</p>
                    <p className="text-white/30 text-xs uppercase font-bold tracking-widest mt-1">Mobile Service also available</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-black mb-1">Operating Hours</p>
                    <p className="font-black text-lg">Mon – Sun: 8AM – 6PM</p>
                    <p className="text-white/30 text-xs uppercase font-bold tracking-widest mt-1">By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-white/5 p-10 lg:p-12">
              <h3 className="text-2xl font-black uppercase mb-8">Service Requisition</h3>
              <form className="space-y-6" onSubmit={e => { e.preventDefault(); openQuote(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Vehicle Year/Make/Model</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-white outline-none transition-colors" placeholder="e.g. 2024 Tesla Model Y" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Service Interest</label>
                    <select className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-white outline-none transition-colors">
                      <option className="bg-[#0A0A0A]">Auto Detailing</option>
                      <option className="bg-[#0A0A0A]">Ceramic Coating</option>
                      <option className="bg-[#0A0A0A]">Window Tint</option>
                      <option className="bg-[#0A0A0A]">PPF (Clear Bra)</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full bg-white text-[#0A0A0A] font-black uppercase tracking-[0.2em] py-5 text-sm hover:bg-gray-200 transition-colors">
                  SEND REQUISITION
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CITY LIST */}
      <footer className="py-12 bg-[#080808] border-t border-white/5 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Auto Barber Seattle</p>
          <p className="text-white/20 text-[10px] font-black uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
            Serving Seattle, Bellevue, Tacoma, Kirkland, Redmond, Renton, Kent, Edmonds & surrounding areas.
          </p>
          <div className="mt-8 flex justify-center gap-8 border-t border-white/5 pt-8">
            <Link to="/about" className="text-white/30 text-[9px] uppercase tracking-widest hover:text-white transition-colors">About Craftsman</Link>
            <Link to="/services" className="text-white/30 text-[9px] uppercase tracking-widest hover:text-white transition-colors">Capabilities</Link>
            <Link to="/contact" className="text-white/30 text-[9px] uppercase tracking-widest hover:text-white transition-colors">Location</Link>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-[120] lg:hidden grid grid-cols-2 border-t border-white/10">
        <a
          href="tel:2538939452"
          className="bg-[#0A0A0A] text-white font-black uppercase tracking-widest py-6 text-xs text-center border-r border-white/10 hover:bg-[#141414] transition-colors"
        >
          📞 Call Direct
        </a>
        <button
          onClick={() => openQuote()}
          className="bg-white text-[#0A0A0A] font-black uppercase tracking-widest py-6 text-xs hover:bg-gray-200 transition-colors"
        >
          📅 Book Detail
        </button>
      </div>
    </div>
  );
};

export default Index;
