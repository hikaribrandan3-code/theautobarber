import { useOutletContext, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Droplets, Zap, Clock, Star, ChevronRight, Gauge, Layers } from "lucide-react";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();

  return (
    <div className="bg-background">
      <SEO 
        title="Mobile Detailing Services Naples, FL | Full Interior & Exterior"
        description="Explore the best mobile detailing services in Naples, FL. From full restoration details and interior deep cleans to machine polishing and paint protection. We bring the shop to your driveway."
      />

      {/* Header */}
      <section className="pt-32 pb-16 hero-gradient grid-bg">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-4">// OUR SERVICES</p>
          <h1 className="text-5xl font-black italic lg:text-7xl tracking-tighter uppercase">
            Mobile Detailing <span className="text-primary text-glow">Naples</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-mono text-xs uppercase tracking-widest leading-relaxed">
            Every detail documented. Every result guaranteed.
          </p>
        </div>
      </section>

      {/* ─────────── SERVICE 01: FULL DETAIL ─────────── */}
      <ServiceDetail
        id="full-detail"
        badge="MOST RECOMMENDED"
        serviceNumber="01"
        title="FULL DETAIL"
        tagline="Interior. Exterior. The works."
        price="From $250"
        time="5–6 hours"
        ctaLabel="Book Full Detail"
        ctaService="Full Detail"
        openQuote={openQuote}
        bgImage="/images/bg/full-detail-bg.png"
        experience="Six months of neglect, gone in one appointment. We hit the spots that cost you at trade-in: engine bay, wheel wells, door seals — the details that separate 'clean' from *new*."
        sections={[
          {
            category: "INTERIOR",
            items: [
              { label: "Full seat extraction", detail: "leather conditioned, fabric steam-cleaned" },
              { label: "Dashboard, vents, console", detail: "dust-free and UV-protected" },
              { label: "Door jambs", detail: "glass streak-free, mats shampooed" },
              { label: "UV inspection", detail: "before we sign off" },
            ]
          },
          {
            category: "EXTERIOR",
            items: [
              { label: "Foam pre-soak", detail: "two-bucket hand wash (no swirl marks)" },
              { label: "Iron decontamination", detail: "clay bar (paint glass-smooth)" },
              { label: "Wheels", detail: "face, barrel, calipers, tires dressed" },
              { label: "Engine bay", detail: "wiped and dressed" },
              { label: "LED walkthrough", detail: "every panel verified" },
            ]
          }
        ]}
        difference="Book this if your car hasn't seen a detail in 6+ months. It's also our most popular pre-sale service — because buyers open the hood and check the door jambs."
      />

      {/* ─────────── SERVICE 02: INTERIOR ─────────── */}
      <ServiceDetail
        id="interior"
        serviceNumber="02"
        title="INTERIOR DETAIL"
        tagline="Deep clean. Not just a vacuum."
        price="From $180"
        time="2–4 hours"
        ctaLabel="Book Interior Detail"
        ctaService="Interior Detail"
        openQuote={openQuote}
        bgImage="/images/bg/interior-bg.png"
        experience="The seats you sit in every day. The steering wheel you touch. We extract what grocery-store cleaners leave behind — the oils, the salt, the grit ground into seams."
        sections={[
          {
            category: "WHAT'S INCLUDED",
            items: [
              { label: "Full seat extraction", detail: "crevice tool under rails, between cushions" },
              { label: "Leather", detail: "pH-balanced clean + conditioner (prevents cracking)" },
              { label: "Fabric", detail: "hot water extraction, stain treatment" },
              { label: "Dashboard, door panels, console", detail: "conditioned and UV-protected" },
              { label: "Vents brushed", detail: "blade-by-blade" },
              { label: "Glass", detail: "two-towel method, streak-free. Drying time: 1–2 hours post-service." },
            ]
          }
        ]}
        difference="Interior-only when the outside is already maintained. If both need work, the Full Detail saves you money."
      />

      {/* ─────────── SERVICE 03: ONE-STEP POLISH ─────────── */}
      <ServiceDetail
        id="one-step"
        serviceNumber="03"
        title="ONE-STEP POLISH"
        tagline="Paint refresh. Not a full correction."
        price="Quote-Based"
        time="2–3 hours"
        ctaLabel="Get Polish Quote"
        ctaService="One-Step Polish"
        openQuote={openQuote}
        bgImage="/images/bg/onestep-bg.png"
        experience="Swirls in your black paint. Haze on the hood. One machine pass restores 60–70% of gloss without going deep into your clear coat. Perfect for newer cars or maintenance between full corrections."
        sections={[
          {
            category: "ADDRESSES",
            items: [
              { label: "Light swirl marks", detail: "wash-induced, not deep scratches" },
              { label: "Surface haze", detail: "and early oxidation" },
              { label: "Light water spot etching", detail: "shallow mineral deposits" },
            ]
          },
          {
            category: "DOES NOT FIX",
            items: [
              { label: "Deep scratches", detail: "fingernail catches" },
              { label: "Heavy oxidation", detail: "or sun damage" },
              { label: "Buffer holograms", detail: "from bad prior work" },
            ]
          }
        ]}
        difference="Newer vehicles (under 3 years). Prep before ceramic or PPF. If your fingernail catches the scratch, you need Paint Correction instead."
      />

      {/* ─────────── SERVICE 04: PAINT CORRECTION ─────────── */}
      <ServiceDetail
        id="paint-correction"
        serviceNumber="04"
        title="PAINT CORRECTION"
        tagline="Permanent defect removal. Multi-stage."
        price="Quote-Based — Size, Condition, Level"
        time="4–12 hours"
        ctaLabel="Book Correction Consultation"
        ctaService="Paint Correction"
        openQuote={openQuote}
        bgImage="/images/bg/twostep-bg.png"
        experience="Swirls that show in sunlight. Scratches you can feel. We measure your paint depth first, then remove damage at the micron level — permanently. This is the step before ceramic or PPF on any car with visible paint issues."
        sections={[
          {
            category: "THE PROCESS",
            items: [
              { label: "Measure", detail: "Paint depth gauge on every panel (safety first)" },
              { label: "Stage One", detail: "Heavy compound removes defects, wet sanding if needed" },
              { label: "Stage Two", detail: "Fine polish restores mirror clarity" },
              { label: "Verify", detail: "LED inspection before sign-off" },
            ]
          },
          {
            category: "REMOVES PERMANENTLY",
            items: [
              { label: "Swirl marks", detail: "buffer holograms" },
              { label: "Water spot etching", detail: "below surface level" },
              { label: "Light to moderate scratches", detail: "within clear coat" },
              { label: "Oxidation", detail: "and chemical etching" },
            ]
          }
        ]}
        difference="Required when defects show in direct sun, or when a fingernail catches the scratch. Also mandatory prep for ceramic coating if your paint isn't perfect."
      />

      {/* ADDITIONAL SERVICES GRID */}
      <section id="other-services" className="py-16 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-3">// ADDITIONAL</p>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter">Other Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Wax Package", price: "From $150", desc: "Hand-applied protection. 2–3 months of gloss and UV defense. For paint that's already in good shape." },
              { title: "Mini Detail", price: "From $150", desc: "Quick maintenance. Exterior hand wash, interior vacuum and wipe, glass inside and out." },
              { id: "exterior", title: "Exterior Detail", price: "Quote-Based", desc: "Wash, decontaminate, clay bar, wheels and tires. Exterior-only when the inside is already clean." },
              { title: "Water Spot Treatment", price: "Quote-Based", desc: "Mineral deposit removal. Paint-safe process — we measure clear coat before we start." },
              { title: "Ceramic Coating", price: "From $1,100", desc: "3–5 year protection. Nano-ceramic molecular bond. Requires paint correction first if defects exist.", link: "/services/protective/ceramic", linkText: "Full Details" },
              { title: "PPF / Window Tint", price: "From $1,300", desc: "XPEL and STEK film. Outsourced to certified installers we trust.", link: "/services/protective/ppf", linkText: "Full Details" },
            ].map(s => (
              <div key={s.title} id={s.id} className="p-6 border border-border/40 bg-card/20 space-y-3 hover:border-primary/30 transition-all group">
                <h3 className="font-display font-black uppercase tracking-wider text-sm text-foreground">{s.title}</h3>
                <p className="font-mono text-xs text-primary font-bold">{s.price}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {s.link ? (
                  <Link to={s.link}>
                    <Button variant="ghost" size="sm" className="mt-2 text-xs uppercase tracking-widest font-mono text-primary hover:text-primary/80 p-0 h-auto">
                      {s.linkText} <ChevronRight size={12} className="ml-1" />
                    </Button>
                  </Link>
                ) : (
                  <Button variant="ghost" size="sm" onClick={() => openQuote(s.title)} className="mt-2 text-xs uppercase tracking-widest font-mono text-primary hover:text-primary/80 p-0 h-auto">
                    Get Quote <ChevronRight size={12} className="ml-1" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTECTIVE SERVICES SECTION */}
      <section className="py-16 lg:py-32 bg-card/20 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">// LONG-TERM PROTECTION</p>
            <h2 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter">Ceramic • PPF • <span className="text-[#39FF14] text-glow">Tint</span></h2>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground italic font-bold max-w-2xl mx-auto">We partner with certified XPEL and STEK installers for film and coating that lasts years, not months.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col items-center text-center space-y-6 hover:border-[#39FF14]/40 transition-all group">
              <Zap size={48} className="text-[#39FF14] group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black italic uppercase tracking-tighter">CERAMIC COATING</h3>
              <p className="font-mono text-2xl text-[#39FF14] font-bold">$1,100+</p>
              <Link to="/services/protective/ceramic" className="w-full">
                <Button className="w-full bg-[#39FF14] text-black font-display text-xs uppercase tracking-widest font-black italic hover:bg-[#32e612] transition-all">
                  FULL DETAILS
                </Button>
              </Link>
            </div>

            <div className="p-8 border border-[#39FF14]/30 bg-black/40 backdrop-blur-xl flex flex-col items-center text-center space-y-6 scale-105 shadow-[0_0_50px_rgba(57,255,20,0.1)] hover:border-[#39FF14]/60 transition-all group">
              <Shield size={48} className="text-[#39FF14] group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black italic uppercase tracking-tighter">PAINT PROTECTION FILM</h3>
              <p className="font-mono text-2xl text-[#39FF14] font-bold">$1,300+</p>
              <Link to="/services/protective/ppf" className="w-full">
                <Button className="w-full bg-[#39FF14] text-black font-display text-xs uppercase tracking-widest font-black italic hover:bg-[#32e612] transition-all box-glow">
                  FULL DETAILS
                </Button>
              </Link>
            </div>

            <div className="p-8 border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col items-center text-center space-y-6 hover:border-[#39FF14]/40 transition-all group">
              <Droplets size={48} className="text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black italic uppercase tracking-tighter">WINDOW TINT</h3>
              <p className="font-mono text-2xl text-white font-bold">$199+</p>
              <Link to="/services/protective/tint" className="w-full">
                <Button className="w-full bg-white text-black font-display text-xs uppercase tracking-widest font-black italic hover:bg-white/90 transition-all">
                  FULL DETAILS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ─────────────────────────────────────────────
// SERVICE DETAIL COMPONENT
// ─────────────────────────────────────────────
interface SectionItem { label: string; detail: string; }
interface Section { category: string; items: SectionItem[]; }

interface ServiceDetailProps {
  id: string;
  badge?: string;
  serviceNumber: string;
  title: string;
  tagline: string;
  price: string;
  time: string;
  ctaLabel: string;
  ctaService: string;
  openQuote: (service?: string) => void;
  bgImage?: string;
  experience: string;
  sections: Section[];
  difference: string;
}

const ServiceDetail = ({ id, badge, serviceNumber, title, tagline, price, time, ctaLabel, ctaService, openQuote, bgImage, experience, sections, difference }: ServiceDetailProps) => (
  <section id={id} className="py-16 border-t border-border/30">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">

        {/* LEFT — Content */}
        <div className="space-y-12">

          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-primary tracking-[0.4em] uppercase">// {serviceNumber}</span>
              {badge && (
                <span className="px-2 py-0.5 bg-primary text-black font-mono text-[9px] font-black uppercase tracking-widest">
                  ★ {badge}
                </span>
              )}
            </div>
            <h2 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none">{title}</h2>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest leading-relaxed border-l-2 border-primary pl-4">
              {tagline}
            </p>
          </div>

          {/* The Experience */}
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary">THE EXPERIENCE</h3>
            <p className="text-foreground/80 leading-relaxed text-sm lg:text-base">{experience}</p>
          </div>

          {/* What's Included */}
          <div className="space-y-8">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary">WHAT'S INCLUDED</h3>
            {sections.map(section => (
              <div key={section.category} className="space-y-3">
                <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/50 border-b border-border/30 pb-2">
                  ┌─ {section.category}
                </h4>
                <ul className="space-y-3 pl-2">
                  {section.items.map((item, i) => (
                    <li key={item.label} className="flex gap-3 text-sm">
                      <span className="font-mono text-primary/60 shrink-0 mt-0.5 text-xs">
                        {i < section.items.length - 1 ? "├─" : "└─"}
                      </span>
                      <span>
                        <span className="font-bold text-foreground">{item.label}:</span>{" "}
                        <span className="text-muted-foreground leading-relaxed">{item.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* The Difference */}
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary">THE DIFFERENCE</h3>
            <p className="text-foreground/70 leading-relaxed text-sm border border-border/30 bg-card/20 p-4 rounded">{difference}</p>
          </div>
        </div>

        {/* RIGHT — Sticky Booking Card */}
        <div className="lg:sticky lg:top-28 space-y-6">
          <div className="border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden">
            {bgImage && (
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${bgImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
              </div>
            )}
            <div className="p-6 space-y-6">
              <div className="space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-muted-foreground">Pricing</p>
                <p className="text-2xl font-black text-primary italic tracking-tight">{price}</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-muted-foreground">Estimated Time</p>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Clock size={14} className="text-primary" />
                  <span className="text-sm font-mono">{time}</span>
                </div>
              </div>
              <div className="h-px bg-border/30" />
              <Button
                onClick={() => openQuote(ctaService)}
                className="w-full bg-primary text-primary-foreground font-display uppercase tracking-widest text-xs font-black hover:opacity-90 box-glow py-6 text-center"
              >
                {ctaLabel} →
              </Button>
              <p className="font-mono text-[9px] text-muted-foreground text-center uppercase tracking-widest">
                Mobile service — we come to you
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default ServicesPage;
