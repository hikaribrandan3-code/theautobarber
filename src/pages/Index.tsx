import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { Shield, Droplets, Car, Clock, MapPin, Phone, Sparkles, Star, ChevronRight, Wrench, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import heroCar from "@/assets/hero-car.jpg";

const Index = () => {
  const { openQuote } = useOutletContext<{ openQuote: () => void }>();

  return (
    <div>
      <SEO 
        title="Area 51 Detailing | Naples' #1 Mobile Detailing & Ceramic Coating"
        description="Experience the ultimate in vehicle care. Area 51 serves Naples, FL with professional-grade ceramic coatings, precision paint correction, and full mobile detailing. 15+ years of master-level expertise. We come to you."
      />
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center hero-gradient grid-bg overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCar} alt="Premium car detailing" width={1920} height={1080} className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative mx-auto px-4 py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">Naples' #1 Mobile Detailing</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              <div className="lg:hidden flex flex-col">
                <span>We Show Up.</span>
                <span>We Detail.</span>
                <span className="text-primary font-black italic text-glow">Naples, FL.</span>
              </div>
              <span className="hidden lg:inline text-glow-subtle">Mobile Detailing & Ceramic Coating <span className="text-primary">Naples, FL</span></span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              <span className="lg:hidden text-white/90">One call and we're at your door — water, power, and 15 years of expertise loaded in the truck. You don't lift a finger.</span>
              <span className="hidden lg:inline">We come to you. 15+ years of automotive expertise, fully mobile, fully self-sufficient. From ceramic coatings to paint correction — elevated precision, at your doorstep.</span>
            </p>
            
            {/* Mobile Star Rating */}
            <div className="lg:hidden mt-4 flex items-center gap-2">
              <div className="flex gap-1 text-primary">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} className="fill-current" />)}
              </div>
              <span className="text-white/40 text-[12px] font-medium">200+ five-star reviews · Naples, FL</span>
            </div>

            <div className="mt-8 flex flex-col lg:flex-row gap-4 mb-6 lg:mb-0">
              {/* Mobile Primary Phone Button */}
              <Button asChild size="lg" className="lg:hidden w-full h-auto py-4 bg-primary text-primary-foreground hover:opacity-90 flex flex-col gap-1 box-glow">
                <a href="tel:9143295929">
                  <div className="flex items-center gap-2 font-black text-xl italic tracking-tighter">
                    <Phone size={20} className="fill-current" />
                    (914) 329-5929
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.15em] font-mono font-bold text-black/60">
                    WE PICK UP · 7 DAYS A WEEK · 8AM–6PM
                  </div>
                </a>
              </Button>

              {/* Existing Desktop Primary Button */}
              <Button onClick={openQuote} size="lg" className="hidden lg:flex bg-primary text-primary-foreground font-display uppercase tracking-wider text-sm hover:opacity-90 box-glow">
                Request A Quote
              </Button>

              {/* Mobile Secondary Get Quote Button */}
              <Button onClick={openQuote} variant="outline" size="lg" className="lg:hidden w-full border-border font-display uppercase tracking-wider text-sm hover:border-primary hover:text-primary py-6">
                GET QUOTE
              </Button>

              {/* Existing Desktop Secondary Button */}
              <Button asChild variant="outline" size="lg" className="hidden lg:flex border-border font-display uppercase tracking-wider text-sm hover:border-primary hover:text-primary">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-md overflow-hidden">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 items-center gap-4 px-4 py-4 lg:px-8">
              {[
                { icon: <Award size={20} />, label: "15+ Years" },
                { icon: <Clock size={20} />, label: "7 Days/Week" },
                { icon: <Car size={20} />, label: "Fully Mobile" },
              ].map(s => (
                <div key={s.label} className="flex items-center justify-center gap-3">
                  <span className="text-primary">{s.icon}</span>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground whitespace-nowrap">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different / Problem/Solution Hybrid */}
      <section className="py-16 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Mobile: Simple List */}
          <div className="lg:hidden max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Why We're <span className="text-primary">Different</span></h2>
            <ul className="grid gap-8">
              <li className="flex gap-4 items-start">
                <div className="shrink-0 w-[34px] h-[34px] bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                  <Zap className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg leading-none mb-2">Fully mobile</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">We bring water & power — no hookups needed at your home.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="shrink-0 w-[34px] h-[34px] bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                  <Zap className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg leading-none mb-2">15 years expertise</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">15 years means we know exactly what your paint needs.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="shrink-0 w-[34px] h-[34px] bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                  <Zap className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg leading-none mb-2">Results that speak for themselves</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">Not happy? We come back. Simple as that.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Desktop: Professional Box Layout */}
          <div className="hidden lg:grid gap-12 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-8 lg:p-12">
              <h3 className="font-display text-sm uppercase tracking-wider text-destructive mb-6">The Problem</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3"><X className="mt-1 shrink-0 text-destructive" size={16} />Other detailers make you drive to them — wasting your time</li>
                <li className="flex gap-3"><X className="mt-1 shrink-0 text-destructive" size={16} />Inconsistent quality from inexperienced operators</li>
                <li className="flex gap-3"><X className="mt-1 shrink-0 text-destructive" size={16} />Generic, one-size-fits-all results that don't match your vehicle</li>
              </ul>
            </div>
            <div className="rounded-lg border glow-border bg-card p-8 lg:p-12">
              <h3 className="font-display text-sm uppercase tracking-wider text-primary mb-6">The Solution</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3"><Zap className="mt-1 shrink-0 text-primary" size={16} />We come to you — fully self-sufficient with generator, pressure washer & water tank</li>
                <li className="flex gap-3"><Zap className="mt-1 shrink-0 text-primary" size={16} />15+ years of automotive expertise with meticulous attention to detail</li>
                <li className="flex gap-3"><Zap className="mt-1 shrink-0 text-primary" size={16} />Out-of-this-world results tailored to your specific vehicle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="border-t border-border py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">What We Offer</p>
            <h2 className="text-3xl font-bold lg:text-5xl">Our Services</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Interior Detailing", price: "From $180", desc: "Full vacuum, leather treatment, steam clean & more.", image: "/images/bg/interior-bg.png", path: "/services#interior" },
              { title: "Wax Packages", price: "From $150", desc: "Hand wax, polish & UV protection for lasting shine.", image: "/images/bg/wax-bg.png", path: "/services#other-services" },
              { title: "Full Detail", price: "From $250", desc: "Deep exterior wash & interior rejuvenation.", image: "/images/bg/full-detail-bg.png", path: "/services#full-detail" },
              { title: "Paint Correction", price: "Quote Based", desc: "Remove swirls & restore that showroom floor gloss.", image: "/images/bg/onestep-bg.png", path: "/services#paint-correction" },
              { title: "Ceramic Coating", price: "From $1,100", desc: "Ultimate protection & permanent hydrophobic shine.", image: "/images/bg/ceramic-bg.png", path: "/services/protective/ceramic" },
              { title: "PPF & Window Tint", price: "From $1,300", desc: "Invisible protection against chips & heat.", image: "/images/bg/ppf-tint-bg.png", path: "/services/protective/ppf" },
            ].map(s => (
              <Link 
                key={s.title} 
                to={s.path || "/services"}
                className="group relative aspect-square overflow-hidden rounded-xl border border-primary/10 bg-card transition-all duration-500 active:scale-[0.98]"
              >
                {/* Specimen Image Layer */}
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Stealth Overlay Layer */}
                <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-black/20 group-hover:backdrop-blur-none" />

                {/* Content Layer */}
                <div className="relative z-20 flex h-full flex-col justify-end p-8">
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold tracking-tight text-white group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="font-mono text-sm text-primary font-bold drop-shadow-[0_0_10px_rgba(var(--primary),0.5)] mb-1">{s.price}</p>
                    <p className="text-white/60 text-[11px] leading-tight font-medium uppercase tracking-wider">{s.desc}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                    Explore Details <ChevronRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Why Area 51</p>
            <h2 className="text-3xl font-bold lg:text-5xl">Why Us</h2>
          </div>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Clock size={24} />, title: "7 Days/Week", desc: "8AM–6PM, by appt." },
              { icon: <Car size={24} />, title: "Self-Contained", desc: "Water & power onboard." },
              { icon: <Shield size={24} />, title: "Insured", desc: "Complete peace of mind." },
              { icon: <MapPin size={24} />, title: "30-Mile Radius", desc: "Naples & surrounding." },
            ].map(d => (
              <div key={d.title} className="flex flex-col items-center text-center bg-[#111111] border border-white/7 rounded-lg p-4">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary text-primary">
                  {d.icon}
                </div>
                <h3 className="font-display text-xs font-bold uppercase tracking-wider mb-1">{d.title}</h3>
                <p className="text-muted-foreground text-[10px] leading-tight">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="border-t border-border py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Portfolio</p>
            <h2 className="text-3xl font-bold lg:text-5xl">Our Work</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-[14px] p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles size={120} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real Results Coming Soon</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Every car we touch tells a story. Check back shortly — or book now and be our next showcase.
              </p>
              <Button onClick={openQuote} className="bg-primary text-primary-foreground font-display uppercase tracking-wider text-sm hover:opacity-90 box-glow">
                BOOK YOUR DETAIL
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Social Proof</p>
            <h2 className="text-3xl font-bold lg:text-5xl mb-6">What Our Clients Say</h2>
            <a 
              href="https://www.google.com/search?q=Area+51+Detailing+Naples+Reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-border bg-card/50 px-6 py-3 transition-all hover:border-primary/50 active:scale-95"
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-primary text-primary" />)}
              </div>
              <span className="font-mono text-sm font-bold tracking-tight text-foreground">4.9/5 <span className="text-muted-foreground font-normal">(127 Google Reviews)</span></span>
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Michael T. · Porsche 911", text: "Best detailer in Naples, period." },
              { name: "Sarah K. · Tesla Model Y", text: "Truly out of this world service — water just rolls right off." },
              { name: "David R. · BMW M3", text: "Professional, on time, and the results speak for themselves." },
            ].map(r => (
              <div key={r.name} className="rounded-lg border border-border bg-card p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold">{r.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://www.google.com/search?q=Area+51+Detailing+Naples+Reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase tracking-wider text-primary hover:underline"
            >
              View all 127 Google Reviews →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="border-t border-border py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">FAQ</p>
            <h2 className="text-3xl font-bold lg:text-5xl">Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "How long does ceramic coating take?", a: "4–12 hours. Full cure in 7 days." },
              { q: "Are you really fully mobile?", a: "Yes. Generator, water tank, pressure washer — all onboard. We're completely self-sufficient." },
              { q: "How far do you travel?", a: "Up to 30 miles from Naples." },
            ].map(f => (
              <div key={f.q} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-sm font-semibold mb-2">{f.q}</h3>
                <p className="text-muted-foreground text-sm">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-border font-display uppercase tracking-wider text-sm hover:border-primary hover:text-primary">
              <Link to="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-32 hero-gradient grid-bg">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">LIMITED SPOTS THIS WEEK</p>
          </div>
          <h2 className="text-3xl font-bold lg:text-5xl mb-6">
            Ready for a <span className="text-primary">Detail?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Book in 60 seconds. We come to you.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button onClick={openQuote} size="lg" className="bg-primary text-primary-foreground font-display uppercase tracking-wider text-sm hover:opacity-90 box-glow min-w-[240px]">
              GET MY FREE QUOTE →
            </Button>
            <p className="text-white/25 text-[11px] font-mono uppercase tracking-wider">
              No commitment · Responds within 1 hour
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const X = ({ className, size }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default Index;
