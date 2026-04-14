import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { Star, Phone, MapPin, Clock, CheckCircle, Award, Truck, Shield, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";
import logo from "@/assets/logo.png";
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

  const services = [
    {
      name: "Interior Detail",
      price: "$199",
      regularPrice: "$250",
      badge: "SPRING SPECIAL",
      desc: "Full vacuum, steam clean, leather conditioning, glass, and door jambs. Like new inside.",
      time: "2–3 hrs",
      items: ["Full vacuum & extraction", "Steam clean surfaces", "Leather condition", "Glass & door jambs"],
      service: "Interior Detail",
    },
    {
      name: "Full Detail",
      price: "$350",
      desc: "Complete interior + exterior. Hand wash, clay bar, hand wax, tire dressing. The full works.",
      time: "5–6 hrs",
      items: ["Everything in Interior", "Hand wash & clay bar", "Hand wax & polish", "Wheels & tire dressing"],
      service: "Full Detail",
      popular: true,
    },
    {
      name: "Ceramic Coating",
      price: "$600+",
      desc: "3–5 year nano-ceramic protection. Hydrophobic, UV-resistant, permanent-grade gloss.",
      time: "8+ hrs",
      items: ["Paint correction prep", "Ceramic nano-bond", "5-year protection", "Annual maintenance plan"],
      service: "Ceramic Coating",
    },
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
    { step: "01", title: "Book Online", desc: "Pick your service, date, and location. Takes 60 seconds." },
    { step: "02", title: "We Show Up", desc: "Fully self-contained van arrives at your door on time." },
    { step: "03", title: "We Get to Work", desc: "Detail performed with professional-grade products." },
    { step: "04", title: "Pick Up the Keys", desc: "Inspect your ride. You'll be impressed. Guaranteed." },
  ];

  const reviews = [
    { name: "Marcus T.", rating: 5, text: "Best detail I've ever had on my Tesla. The paint looked like it just rolled off the lot. Booked a ceramic coating after seeing the results.", service: "Full Detail" },
    { name: "Jamie L.", rating: 5, text: "On time, professional, absolutely transformed the inside of my Tahoe. Kids had wrecked it. Now it smells and looks brand new. Will not go anywhere else.", service: "Interior Detail" },
    { name: "Derek C.", rating: 5, text: "Came to my office parking lot, did the full ceramic package on my 4Runner. Didn't have to drop it off anywhere. The results speak for themselves.", service: "Ceramic Coating" },
    { name: "Priya M.", rating: 5, text: "Messaged him on Sunday, booked for Tuesday, done by noon. Fast, clean, my car literally gleamed. 165 reviews don't lie.", service: "Full Detail" },
  ];

  return (
    <div className="bg-white text-[#0A0A0A]">
      <SEO
        title="The Auto Barber | Seattle Mobile Detailing — 165 Five-Star Reviews"
        description="Seattle's top-rated mobile detailing service. Interior Detail $199. Full Detail $350. Ceramic Coating from $600. We come to you. Book now."
      />

      {/* PROMO BAR */}
      <div className="bg-[#0A0A0A] text-white text-center py-2.5 px-4">
        <p className="text-xs font-bold uppercase tracking-widest">
          🌸 Spring Special: Interior Detail{" "}
          <span className="text-white font-black">$199</span>{" "}
          <span className="text-[#6B7280] line-through font-normal">Reg $250</span>
          {"  "}·{"  "}
          <button onClick={() => openQuote("Interior Detail")} className="underline underline-offset-2 hover:no-underline">
            Book Now →
          </button>
        </p>
      </div>

      {/* HERO */}
      <section className="relative">
        {/* Full-bleed image */}
        <div className="relative h-[85vh] min-h-[500px] overflow-hidden">
          <img
            src="/images/portfolio/paint-correction-5050.jpg"
            alt="Seattle auto detailing"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.55)" }}
          />
          {/* Small logo top-left */}
          <div className="absolute top-6 left-6 z-10">
            <div className="flex items-center gap-3">
              <img src={logo} alt="The Auto Barber" className="w-10 h-10 rounded-full object-cover" />
              <span className="text-white font-bold text-sm tracking-wider uppercase">The Auto Barber</span>
            </div>
          </div>
          {/* Nav links top-right */}
          <div className="hidden md:flex absolute top-6 right-6 z-10 gap-8">
            {["Services", "Gallery", "Reviews", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-white/80 hover:text-white text-sm font-semibold uppercase tracking-widest transition-colors">
                {l}
              </a>
            ))}
          </div>
          {/* Headline over image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <p className="text-white/70 text-xs font-bold uppercase tracking-[0.3em] mb-4">Seattle, WA • Mobile Detailing</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] mb-6 max-w-4xl" style={{ letterSpacing: "-0.03em" }}>
              165 FIVE-STAR<br />DETAILS IN SEATTLE
            </h1>
            <p className="text-white/80 text-base md:text-lg font-medium mb-10">
              Interior • Exterior • Paint Protection
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openQuote()}
                className="bg-white text-[#0A0A0A] font-black uppercase tracking-widest px-10 py-4 text-sm hover:bg-gray-100 transition-colors"
              >
                BOOK NOW
              </button>
              <a
                href="tel:2538939452"
                className="border-2 border-white text-white font-black uppercase tracking-widest px-10 py-4 text-sm hover:bg-white hover:text-[#0A0A0A] transition-colors text-center"
              >
                CALL (253) 893-9452
              </a>
            </div>
          </div>
        </div>

        {/* Review badge + subtitle below hero */}
        <div className="bg-white border-b border-[#E5E7EB] py-6 px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={18} fill="#F59E0B" stroke="none" />
                ))}
              </div>
              <span className="font-bold text-[#0A0A0A] text-sm">165 Google Reviews</span>
              <span className="text-[#6B7280] text-xs underline group-hover:no-underline">See all →</span>
            </a>
            <p className="text-[#6B7280] text-sm font-medium">
              📍 Serving all of Seattle, WA · (253) 893-9452
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.2em] mb-3">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ letterSpacing: "-0.03em" }}>Services & Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className={`relative border bg-white p-8 card-hover flex flex-col ${s.popular ? "border-[#0A0A0A] border-2" : "border-[#E5E7EB]"}`}
              >
                {s.popular && (
                  <div className="absolute top-0 left-0 bg-[#0A0A0A] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5">
                    MOST POPULAR
                  </div>
                )}
                {s.badge && (
                  <div className="absolute top-0 right-0 bg-amber-400 text-[#0A0A0A] text-[10px] font-black uppercase tracking-widest px-4 py-1.5">
                    {s.badge}
                  </div>
                )}
                <div className={`${(s.popular || s.badge) ? "mt-6" : ""}`}>
                  <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-black">{s.price}</span>
                    {s.regularPrice && <span className="text-[#6B7280] text-sm line-through">{s.regularPrice}</span>}
                  </div>
                  <p className="text-[#6B7280] text-xs uppercase tracking-widest mb-6 font-medium">{s.time} · Mobile Service</p>
                  <p className="text-[#374151] text-sm leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mb-8 flex-grow">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#374151]">
                        <CheckCircle size={14} className="text-[#6B7280] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => openQuote(s.service)}
                  className={`w-full py-4 font-bold uppercase tracking-widest text-sm transition-colors mt-auto ${s.popular ? "bg-[#0A0A0A] text-white hover:bg-[#333]" : "bg-white text-[#0A0A0A] border border-[#0A0A0A] hover:bg-[#f5f5f5]"}`}
                >
                  BOOK {s.name.toUpperCase()}
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B7280] text-xs mt-6 uppercase tracking-widest font-medium">
            All prices vary by vehicle size & condition · Free estimate available
          </p>
        </div>
      </section>

      {/* GALLERY / THE WORK */}
      <section id="gallery" className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <p className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.2em] mb-3">Real Work. Real Results.</p>
              <h2 className="text-4xl md:text-5xl font-black" style={{ letterSpacing: "-0.03em" }}>The Work</h2>
            </div>
            <Link to="/gallery" className="text-sm font-bold uppercase tracking-widest underline underline-offset-4 text-[#6B7280] hover:text-[#0A0A0A] transition-colors">
              View All Photos →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {gallery.map((item, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden bg-black">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-bold text-sm">{item.title}</p>
                  <p className="text-white/70 text-xs uppercase tracking-widest">{item.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="py-20 px-6 bg-white border-y border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.2em] mb-3">Why Seattle Chooses Us</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ letterSpacing: "-0.03em" }}>Proven. Local. Trusted.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {trust.map((t, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 border border-[#E5E7EB] flex items-center justify-center mx-auto mb-4 text-[#0A0A0A]">
                  {t.icon}
                </div>
                <div className="text-3xl font-black mb-1">
                  {t.stat === "165" ? <Counter end={165} /> : t.stat}
                </div>
                <div className="font-bold text-sm mb-1">{t.label}</div>
                <div className="text-[#6B7280] text-xs uppercase tracking-widest">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.2em] mb-3">Simple & Easy</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ letterSpacing: "-0.03em" }}>How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-[#E5E7EB] leading-none mb-4">{p.step}</div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 text-[#D1D5DB] translate-x-1/2">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={() => openQuote()}
              className="bg-[#0A0A0A] text-white font-black uppercase tracking-widest px-12 py-5 text-sm hover:bg-[#333] transition-colors"
            >
              BOOK YOUR DETAIL
            </button>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <p className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.2em] mb-3">Don't Take Our Word For It</p>
              <h2 className="text-4xl md:text-5xl font-black" style={{ letterSpacing: "-0.03em" }}>
                165 Five-Star Reviews
              </h2>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm"
            >
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#F59E0B" stroke="none" />)}
              </div>
              <span className="text-[#6B7280] font-medium underline underline-offset-2">Google Reviews →</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="border border-[#E5E7EB] p-8 card-hover">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#F59E0B" stroke="none" />
                  ))}
                </div>
                <p className="text-[#374151] text-sm leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm">{r.name}</p>
                    <p className="text-[#6B7280] text-xs uppercase tracking-widest">{r.service}</p>
                  </div>
                  <div className="text-xs text-[#6B7280] font-medium">Google</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-[#F9FAFB] border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <p className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.2em] mb-3">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-black mb-10" style={{ letterSpacing: "-0.03em" }}>Book Your Detail</h2>
              <div className="space-y-6">
                <a href="tel:2538939452" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-[#E5E7EB] flex items-center justify-center bg-white group-hover:border-[#0A0A0A] transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-widest font-bold mb-0.5">Call or Text</p>
                    <p className="font-bold text-lg">(253) 893-9452</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-[#E5E7EB] flex items-center justify-center bg-white">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-widest font-bold mb-0.5">Location</p>
                    <p className="font-bold">Seattle, WA · Mobile Service</p>
                    <p className="text-[#6B7280] text-sm">We come to you — anywhere in Seattle</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-[#E5E7EB] flex items-center justify-center bg-white">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-widest font-bold mb-0.5">Hours</p>
                    <p className="font-bold">Mon – Sun: 8AM – 6PM</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Quick form */}
            <div className="bg-white border border-[#E5E7EB] p-8">
              <h3 className="text-xl font-black mb-6">Get a Free Quote</h3>
              <form className="space-y-4" onSubmit={e => { e.preventDefault(); openQuote(); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-2">Name</label>
                    <input type="text" className="w-full border border-[#E5E7EB] p-3 text-sm focus:border-[#0A0A0A] outline-none transition-colors" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-2">Phone</label>
                    <input type="tel" className="w-full border border-[#E5E7EB] p-3 text-sm focus:border-[#0A0A0A] outline-none transition-colors" placeholder="(000) 000-0000" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-2">Service</label>
                  <select className="w-full border border-[#E5E7EB] p-3 text-sm focus:border-[#0A0A0A] outline-none transition-colors bg-white">
                    <option>Interior Detail — $199</option>
                    <option>Full Detail — $350</option>
                    <option>Ceramic Coating — $600+</option>
                    <option>Paint Correction — Quote</option>
                    <option>Window Tint — $199+</option>
                    <option>Other / Not sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-2">Vehicle</label>
                  <input type="text" className="w-full border border-[#E5E7EB] p-3 text-sm focus:border-[#0A0A0A] outline-none transition-colors" placeholder="Year, Make, Model" />
                </div>
                <button type="submit" className="w-full bg-[#0A0A0A] text-white font-black uppercase tracking-widest py-4 text-sm hover:bg-[#333] transition-colors">
                  GET FREE QUOTE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-4">Ready to Book?</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ letterSpacing: "-0.03em" }}>
            Your Car Deserves<br />The Best.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openQuote()}
              className="bg-white text-[#0A0A0A] font-black uppercase tracking-widest px-12 py-5 text-sm hover:bg-gray-100 transition-colors"
            >
              BOOK A DETAIL
            </button>
            <a
              href="tel:2538939452"
              className="border-2 border-white text-white font-black uppercase tracking-widest px-12 py-5 text-sm hover:bg-white hover:text-[#0A0A0A] transition-colors text-center"
            >
              CALL (253) 893-9452
            </a>
          </div>
        </div>
      </section>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden grid grid-cols-2 border-t border-[#E5E7EB] shadow-2xl">
        <a
          href="tel:2538939452"
          className="bg-white text-[#0A0A0A] font-black uppercase tracking-widest py-5 text-sm text-center border-r border-[#E5E7EB] hover:bg-[#f5f5f5] transition-colors flex items-center justify-center gap-2"
        >
          📞 CALL
        </a>
        <button
          onClick={() => openQuote()}
          className="bg-[#0A0A0A] text-white font-black uppercase tracking-widest py-5 text-sm hover:bg-[#333] transition-colors flex items-center justify-center gap-2"
        >
          📅 BOOK
        </button>
      </div>
    </div>
  );
};

export default Index;
