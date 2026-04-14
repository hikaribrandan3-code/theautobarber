import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { Shield, Droplets, Car, Clock, MapPin, Phone, Sparkles, Star, ChevronRight, Wrench, Zap, Award, CheckCircle2, Scissors, UserCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import logo from "@/assets/logo.png";
import ReviewStats from "@/components/ReviewStats";

const Index = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();

  const services = [
    { 
      title: "Interior Detailing", 
      price: "$199",
      desc: "Deep clean every surface. Leather treated. Carpets restored. Like new inside.",
      icon: <Scissors className="w-6 h-6" />
    },
    { 
      title: "Exterior Detailing", 
      price: "From $150",
      desc: "Hand wash, decon, paint correction. Mirror finish.",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    { 
      title: "Wax & Polish", 
      price: "From $150",
      desc: "Showroom shine. Premium protection that lasts.",
      icon: <Sparkles className="w-6 h-6" />
    },
    { 
      title: "Window Tint", 
      price: "From $199",
      desc: "Precision cut. UV protection. Privacy. Style.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const pillars = [
    { title: "ATTENTION TO DETAIL", desc: "No spot missed.", icon: <UserCheck className="w-6 h-6" /> },
    { title: "PREMIUM PRODUCTS", desc: "Only the best for your ride.", icon: <Award className="w-6 h-6" /> },
    { title: "OLD SCHOOL ETHIC", desc: "Hand work. No shortcuts.", icon: <Clock className="w-6 h-6" /> },
    { title: "MODERN PROTECTION", desc: "Ceramic. PPF. Years of defense.", icon: <ShieldCheck className="w-6 h-6" /> }
  ];

  const menu = [
    { name: "The Trim", price: "$150-250", features: ["Interior vacuum", "Wipe down", "Hand wash", "Tire dressing"] },
    { name: "The Cut", price: "$300-500", features: ["Full interior detail", "Full exterior detail", "Hand wax", "Full protection"], popular: true },
    { name: "The Works", price: "$600-900", features: ["Everything included", "Paint correction", "Ceramic coating", "Master finish"] }
  ];

  const gallery = [
    { img: "/images/portfolio/jeep-green.jpg", title: "Jeep Wrangler", desc: "Full Exterior Detail" },
    { img: "/images/portfolio/tesla-masked.jpg", title: "Tesla Model Y", desc: "Paint Correction Prep" },
    { img: "/images/portfolio/polisher-setup.jpg", title: "Master Setup", desc: "Precision Tools" },
    { img: "/images/portfolio/hot-rod.jpg", title: "Classic Hot Rod", desc: "Master Correction" },
    { img: "/images/portfolio/sb3-alpha.jpg", title: "SB3 Alpha", desc: "Ceramic Application" },
    { img: "/images/portfolio/paint-correction-5050.jpg", title: "50/50 Reveal", desc: "Mirror Finish" }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white selection:bg-primary/30">
      <SEO 
        title="The Auto Barber | Seattle's Premium Vehicle Craftsman"
        description="INVEST. PROTECT. ENJOY. Premium detailing, paint correction, and ceramic coating in Seattle, WA. The Barber's Standard for your investment."
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden hero-gradient grid-bg pt-20">
        <div className="relative z-10 animate-in fade-in zoom-in duration-1000">
          <div className="relative mx-auto mb-8 w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-[#C9A962]/20 bg-black p-1 shadow-[0_0_50px_rgba(0,102,255,0.3)] group overflow-hidden">
            <img src={logo} alt="The Auto Barber" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.5em] text-[#C9A962] font-black mb-4 animate-in slide-in-from-bottom duration-700 delay-300">INVEST. PROTECT. ENJOY.</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tight leading-[0.85] uppercase mb-6 animate-in slide-in-from-bottom duration-1000 delay-500">
            THE AUTO<br /><span className="text-[#C9A962]">BARBER</span>
          </h1>
          <div className="mb-10 animate-in fade-in duration-1000 delay-700">
            <ReviewStats />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in duration-1000 delay-1000">
            <Button onClick={() => openQuote()} size="lg" className="w-full sm:w-auto bg-[#C9A962] text-white font-display text-sm uppercase tracking-widest py-8 px-12 rounded-none hover:bg-[#A6884A] transition-all transform hover:scale-105 box-glow">
              Book Appointment
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-[#C9A962] text-[#C9A962] font-display text-sm uppercase tracking-widest py-8 px-12 rounded-none hover:bg-[#C9A962] hover:text-white transition-all">
              <a href="tel:2538939452">Call (253) 893-9452</a>
            </Button>
          </div>
          
          {/* Promo Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-in fade-in duration-1000 delay-[1200ms]">
             <div className="bg-[#141414] border border-white/5 p-4 flex items-center justify-between gap-6 hover:border-[#C9A962]/50 transition-colors cursor-pointer w-full sm:w-auto" onClick={() => openQuote("Interior Detail Promo")}>
                <div className="text-left">
                   <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#C9A962] mb-1 font-bold">PROMO</p>
                   <p className="font-display text-lg uppercase tracking-widest font-black text-white">Interior Detail</p>
                </div>
                <div className="text-2xl font-display font-black text-[#C9A962] italic">$199</div>
             </div>
             <div className="bg-[#141414] border border-white/5 p-4 flex items-center justify-between gap-6 hover:border-[#C9A962]/50 transition-colors cursor-pointer w-full sm:w-auto" onClick={() => openQuote("All-In-One Polish Promo")}>
                <div className="text-left">
                   <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#C9A962] mb-1 font-bold">PROMO</p>
                   <p className="font-display text-lg uppercase tracking-widest font-black text-white">All-In-One Polish</p>
                </div>
                <div className="text-2xl font-display font-black text-[#C9A962] italic">$300</div>
             </div>
          </div>
        </div>
        
        {/* Floating Background Badge - Decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A962]/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-14 lg:py-24 px-6 border-y border-white/5 bg-[#141414]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
            <div className="border-l-4 border-[#C9A962] pl-8">
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase leading-none mb-2">THE DIVISION</h2>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-bold">Premium protection packages</p>
            </div>
            <Link to="/services" className="font-mono text-[10px] uppercase tracking-widest text-[#C9A962] hover:underline font-bold">See full capabilities →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div key={i} className="group p-8 bg-[#0A0A0A] border border-white/5 hover:border-[#C9A962]/40 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                   {s.icon}
                </div>
                <h3 className="text-xl font-display font-black uppercase mb-4 text-white group-hover:text-[#C9A962] transition-colors tracking-tight">{s.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed uppercase tracking-wider font-medium flex-grow">{s.desc}</p>
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-end">
                  <span className="font-mono text-[9px] text-muted-foreground tracking-[0.2em] uppercase mb-1">Starting At</span>
                  <span className="font-display text-2xl text-[#C9A962] font-black italic leading-none">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE CRAFTSMAN (Pillars) */}
      <section className="py-14 lg:py-24 px-6 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-4 tracking-tighter">THE CRAFTSMAN</h2>
            <p className="font-mono text-sm text-muted-foreground uppercase tracking-[0.2em]">Why Seattle trusts the barber</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {pillars.map((p, i) => (
              <div key={i} className="group flex gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center font-display text-2xl font-black group-hover:bg-[#C9A962] group-hover:border-[#C9A962] group-hover:text-white transition-all duration-500">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-lg font-display font-black uppercase mb-3 tracking-wider">{p.title}</h4>
                  <p className="text-muted-foreground text-sm font-mono uppercase tracking-[0.05em]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE PROCESS (Timeline) */}
      <section className="py-14 lg:py-24 px-6 bg-[#141414] border-y border-white/5 overflow-hidden">
        <div className="container mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">THE <span className="text-[#C9A962]">PROCESS</span></h2>
            <p className="font-mono text-[10px] text-muted-foreground font-bold uppercase mt-2 tracking-[0.3em]">Door-to-door precision</p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-[28px] left-0 w-full h-px bg-white/5" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                { title: "Inspect & Consult", desc: "Assess condition. Discuss goals." },
                { title: "Wash & Decon", desc: "Thorough cleaning. Zero contaminants." },
                { title: "Cut & Polish", desc: "Paint correction. Mirror finish." },
                { title: "Protect & Finish", desc: "Wax, ceramic, or tint. Lasting defense." }
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="w-14 h-14 rounded-none bg-[#0A0A0A] border border-white/10 flex items-center justify-center font-display text-xl font-black mb-6 group-hover:bg-[#C9A962] group-hover:border-[#C9A962] transition-all relative z-10 box-glow text-white">
                    0{i + 1}
                  </div>
                  <h4 className="text-lg font-display font-black uppercase mb-3 tracking-wider">{step.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed uppercase font-mono tracking-widest">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE MENU (Pricing) */}
      <section className="py-14 lg:py-24 px-6 bg-[#0A0A0A]">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-4 tracking-tighter">THE <span className="text-[#C9A962]">MENU</span></h2>
            <p className="font-mono text-sm text-muted-foreground uppercase tracking-[0.2em]">Select your investment level</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {menu.map((p, i) => (
              <div key={i} className={`relative p-10 bg-[#141414] border flex flex-col transition-all duration-300 ${p.popular ? 'border-[#C9A962] scale-105 shadow-[0_0_40px_rgba(0,102,255,0.1)]' : 'border-white/5'}`}>
                {p.popular && (
                  <div className="absolute top-0 right-0 bg-[#C9A962] text-white px-4 py-1 text-[10px] font-black uppercase italic tracking-widest">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-display font-black uppercase mb-1 tracking-wider">{p.name}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                   <span className="text-4xl font-display font-black text-[#C9A962]">{p.price}</span>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  {p.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-[#C9A962] rounded-none" />
                      {f}
                    </div>
                  ))}
                </div>
                <Button onClick={() => openQuote(`Package: ${p.name}`)} className={`w-full font-display uppercase tracking-widest py-8 rounded-none transition-all ${p.popular ? 'bg-[#C9A962] text-white hover:bg-[#A6884A]' : 'bg-transparent border border-white/20 text-white hover:border-[#C9A962] hover:text-[#C9A962]'}`}>
                  Book {p.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROOF OF WORK (Gallery) */}
      <section className="py-14 lg:py-24 px-6 bg-[#141414] border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-1">PROOF OF WORK</h2>
              <p className="font-mono text-[10px] text-muted-foreground font-bold uppercase tracking-[0.4em]">Handled with care</p>
            </div>
            <Button asChild variant="outline" className="rounded-none border-white/10 text-muted-foreground hover:border-[#C9A962] hover:text-[#C9A962] font-display uppercase tracking-widest">
              <Link to="/gallery">View Complete Portfolio →</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {gallery.map((item, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden bg-black border border-white/5">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-[#C9A962]/0 group-hover:bg-[#C9A962]/20 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <h4 className="text-xl font-display font-black uppercase tracking-tight text-white mb-1">{item.title}</h4>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-14 lg:py-24 px-6 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-16 tracking-tight text-center">COMMON <span className="text-[#C9A962]">QUESTIONS</span></h2>
          <div className="space-y-2">
            {[
              { q: "How long does a full detail take?", a: "Most mobile appointments take between 4 to 8 hours depending on vehicle size and condition. We treat every car like a masterwork—no rushing." },
              { q: "Do I need an appointment?", a: "Yes. To maintain our standard of quality, we operate strictly by appointment only. We recommend booking 1-2 weeks in advance." },
              { q: "What's the difference between wax and ceramic?", a: "Wax lasts months and adds shine. Ceramic lasts years and adds a hard sacrificial layer that resists chemicals, UV, and minor scratches." },
              { q: "How long after tint can I wash my car?", a: "Wait at least 3-5 days for the adhesive to fully cure before rolling down windows or cleaning them inside." },
              { q: "Do you offer mobile service?", a: "Yes. We are 100% mobile and self-sufficient. We bring our own water and power to your location in the Seattle area." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-[#141414] border-l-2 border-white/5 hover:border-[#C9A962] transition-all">
                <h4 className="text-lg font-display font-black uppercase mb-4 tracking-wider">{faq.q}</h4>
                <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION (In-page) */}
      <section id="contact" className="py-14 lg:py-24 px-6 bg-[#141414] border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="mb-12">
                <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-[#C9A962]/20">
                   <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-4 leading-none">THE <span className="text-[#C9A962]">CONTACT</span></h2>
                <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">Reserve your spot on the menu</p>
              </div>
              
              <div className="space-y-8 font-mono text-xs uppercase tracking-[0.2em]">
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 border border-white/5 flex items-center justify-center text-[#C9A962]">
                     <Phone size={16} />
                   </div>
                   <a href="tel:2538939452" className="hover:text-[#C9A962] transition-colors">(253) 893-9452</a>
                </div>
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 border border-white/5 flex items-center justify-center text-[#C9A962]">
                     <MapPin size={16} />
                   </div>
                   <span>7418 St 126th Unit 1C, Seattle</span>
                </div>
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 border border-white/5 flex items-center justify-center text-[#C9A962]">
                     <Clock size={16} />
                   </div>
                   <span>MON - SUN: 8AM - 6PM</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] p-10 border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A962]" />
               <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); openQuote(); }}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground pl-1">Full Name</label>
                      <input type="text" className="w-full bg-[#141414] border border-white/5 p-4 font-mono text-xs uppercase tracking-widest focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground pl-1">Phone</label>
                      <input type="tel" className="w-full bg-[#141414] border border-white/5 p-4 font-mono text-xs uppercase tracking-widest focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] outline-none transition-all" placeholder="(000) 000-0000" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground pl-1">Email</label>
                    <input type="email" className="w-full bg-[#141414] border border-white/5 p-4 font-mono text-xs uppercase tracking-widest focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] outline-none transition-all" placeholder="name@email.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground pl-1">Service Needed</label>
                    <select className="w-full bg-[#141414] border border-white/5 p-4 font-mono text-xs uppercase tracking-widest focus:border-[#C9A962] outline-none transition-all">
                      <option>The Cut (Full Interior/Exterior)</option>
                      <option>The Trim (Basic Detail)</option>
                      <option>The Works (Master Package)</option>
                      <option>Ceramic Coating</option>
                      <option>Paint Correction</option>
                      <option>Window Tint</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground pl-1">Message</label>
                    <textarea rows={4} className="w-full bg-[#141414] border border-white/5 p-4 font-mono text-xs uppercase tracking-widest focus:border-[#C9A962] outline-none transition-all" placeholder="Tell us about your ride..." />
                 </div>
                 <Button className="w-full bg-[#C9A962] text-white font-display text-base uppercase tracking-[0.2em] font-black italic py-8 rounded-none hover:bg-[#A6884A] transition-all box-glow">
                   Reserve Your Cut
                 </Button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-14 text-center border-t border-white/5 bg-[#0A0A0A]">
         <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 tracking-tighter italic animate-pulse-subtle">YOUR CAR DESERVES THE FINEST CUT.</h2>
            <Button onClick={() => openQuote()} size="lg" className="bg-[#C9A962] text-white font-display text-xl uppercase tracking-widest py-10 px-16 rounded-none hover:bg-[#A6884A] transition-all transform hover:scale-110 box-glow">
               BOOK NOW
            </Button>
         </div>
      </section>
    </div>
  );
};

export default Index;
