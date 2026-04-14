import { useOutletContext, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Droplets, Zap, Clock, Star, ChevronRight, Gauge, Layers } from "lucide-react";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();

  return (
    <div className="bg-background">
      <SEO 
        title="The Menu | The Auto Barber Seattle"
        description="Seattle's master-level detailing menu. From signature full restorations to mirror-finish paint correction. We bring the barber's standard to your driveway."
      />

      {/* Header */}
      <section className="pt-48 pb-24 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none grid-bg" />
        <div className="container mx-auto px-4 text-center lg:px-8 relative z-10">
          <p className="font-display text-sm uppercase tracking-[0.5em] text-[#0066FF] mb-6 italic">The Service Menu</p>
          <h1 className="text-6xl lg:text-[10rem] font-display font-black italic tracking-tighter uppercase text-white leading-[0.75]">
             THE MASTER <br/><span className="text-[#0066FF] text-glow">SEATTLE STAND.</span>
          </h1>
          <p className="mt-12 text-[#adaaaa] max-w-2xl mx-auto font-mono text-[10px] lg:text-xs uppercase tracking-[0.4em] leading-relaxed italic">
            EVERY DETAIL DOCUMENTED. EVERY CUT GUARANTEED.
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
      <section id="other-services" className="py-24 border-t border-white/5 bg-[#0e0e0e]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <p className="font-display text-sm uppercase tracking-[0.5em] text-[#0066FF] mb-4 italic">The Refinements</p>
            <h2 className="text-5xl lg:text-7xl font-display font-black italic uppercase tracking-tighter text-white">OTHER SERVICES</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Wax Package", price: "From $150", desc: "Hand-applied protection. 2–3 months of gloss and UV defense. For paint that's already in good shape." },
              { title: "Mini Detail", price: "From $150", desc: "Quick maintenance. Exterior hand wash, interior vacuum and wipe, glass inside and out." },
              { id: "exterior", title: "Exterior Detail", price: "Quote-Based", desc: "Wash, decontaminate, clay bar, wheels and tires. Exterior-only when the inside is already clean." },
              { title: "Water Spot Treatment", price: "Quote-Based", desc: "Mineral deposit removal. Paint-safe process — we measure clear coat before we start." },
              { title: "Ceramic Coating", price: "From $1,100", desc: "3–5 year protection. Nano-ceramic molecular bond. Requires paint correction first if defects exist.", link: "/services/protective/ceramic", linkText: "Full Details" },
              { title: "PPF / Window Tint", price: "From $1,300", desc: "XPEL and STEK film. Master-tier protective film specialists.", link: "/services/protective/ppf", linkText: "Full Details" },
            ].map(s => (
              <div key={s.title} id={s.id} className="p-8 border border-white/5 bg-[#141414] space-y-4 hover:border-[#0066FF]/30 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#0066FF] scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <h3 className="font-display font-black uppercase tracking-wider text-xl text-white italic">{s.title}</h3>
                <p className="font-mono text-xs text-[#0066FF] font-bold italic uppercase">{s.price}</p>
                <p className="text-[11px] font-mono text-[#adaaaa] leading-relaxed uppercase tracking-widest italic">{s.desc}</p>
                {s.link ? (
                  <Link to={s.link}>
                    <Button variant="ghost" size="sm" className="mt-4 text-[10px] uppercase tracking-[0.3em] font-display font-black text-[#0066FF] hover:text-white p-0 h-auto italic">
                      {s.linkText} <ChevronRight size={14} className="ml-1" />
                    </Button>
                  </Link>
                ) : (
                  <Button variant="ghost" size="sm" onClick={() => openQuote(s.title)} className="mt-4 text-[10px] uppercase tracking-[0.3em] font-display font-black text-[#0066FF] hover:text-white p-0 h-auto italic">
                    GET THE QUOTE <ChevronRight size={14} className="ml-1" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTECTIVE SERVICES SECTION */}
      <section className="py-24 lg:py-48 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0066FF]/5 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <p className="font-display text-sm uppercase tracking-[0.5em] text-[#0066FF] mb-4 italic">The Protection Tier</p>
            <h2 className="text-5xl lg:text-[8rem] font-display font-black italic uppercase tracking-tighter leading-none text-white">CERAMIC • PPF • <span className="text-[#0066FF] text-glow">TINT</span></h2>
            <p className="font-mono text-[10px] lg:text-xs uppercase tracking-[0.4em] text-[#adaaaa] italic font-bold max-w-2xl mx-auto leading-relaxed">WE PARTNER WITH CERTIFIED XPEL & STEK INSTALLERS FOR FILM AND COATING THAT LASTS YEARS, NOT MONTHS.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="p-10 border border-white/5 bg-[#141414] flex flex-col items-center text-center space-y-8 hover:border-[#0066FF]/40 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0066FF]/5 rotate-45 translate-x-12 -translate-y-12" />
              <Zap size={64} className="text-[#0066FF] group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-display font-black italic uppercase tracking-tighter text-white">CERAMIC COATING</h3>
              <p className="font-display text-4xl text-[#0066FF] font-black italic tracking-tighter">$1,100+</p>
              <Link to="/services/protective/ceramic" className="w-full">
                <Button className="w-full bg-[#0066FF] text-white font-display text-lg uppercase tracking-widest font-black italic hover:bg-[#0052CC] transition-all py-10 rounded-none shadow-[0_0_30px_rgba(0,102,255,0.2)]">
                  FULL DETAILS
                </Button>
              </Link>
            </div>

            <div className="p-10 border border-[#0066FF]/30 bg-[#141414] flex flex-col items-center text-center space-y-8 scale-105 shadow-[0_0_60px_rgba(0,102,255,0.1)] hover:border-[#0066FF]/60 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0066FF]/10 rotate-45 translate-x-12 -translate-y-12" />
              <Shield size={64} className="text-[#0066FF] group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-display font-black italic uppercase tracking-tighter text-white">PAINT PROTECTION FILM</h3>
              <p className="font-display text-4xl text-[#0066FF] font-black italic tracking-tighter">$1,300+</p>
              <Link to="/services/protective/ppf" className="w-full">
                <Button className="w-full bg-[#0066FF] text-white font-display text-lg uppercase tracking-widest font-black italic hover:bg-[#0052CC] transition-all py-10 rounded-none shadow-[0_0_40px_rgba(0,102,255,0.3)]">
                  FULL DETAILS
                </Button>
              </Link>
            </div>

            <div className="p-10 border border-white/5 bg-[#141414] flex flex-col items-center text-center space-y-8 hover:border-[#0066FF]/40 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rotate-45 translate-x-12 -translate-y-12" />
              <Droplets size={64} className="text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-display font-black italic uppercase tracking-tighter text-white">WINDOW TINT</h3>
              <p className="font-display text-4xl text-white font-black italic tracking-tighter">$199+</p>
              <Link to="/services/protective/tint" className="w-full">
                <Button className="w-full bg-white text-black font-display text-lg uppercase tracking-widest font-black italic hover:bg-gray-200 transition-all py-10 rounded-none">
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
          <div className="space-y-12">
            <h3 className="font-display text-sm uppercase tracking-[0.5em] text-[#0066FF] italic">WHAT'S INCLUDED</h3>
            {sections.map(section => (
              <div key={section.category} className="space-y-4">
                <h4 className="font-display text-xl uppercase tracking-[0.2em] text-white italic border-b border-white/5 pb-3">
                  {section.category}
                </h4>
                <ul className="space-y-4 pl-0">
                  {section.items.map((item, i) => (
                    <li key={item.label} className="flex gap-4 text-sm font-mono uppercase tracking-widest text-[#adaaaa] italic group">
                      <div className="w-1.5 h-1.5 bg-[#0066FF] mt-1.5 shadow-[0_0_8px_#0066FF]" />
                      <span>
                        <span className="font-black text-white">{item.label}:</span>{" "}
                        <span className="leading-relaxed">{item.detail}</span>
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
        <div className="lg:sticky lg:top-32 space-y-8">
          <div className="border border-white/5 bg-[#141414] overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0066FF]" />
            {bgImage && (
              <div
                className="h-64 bg-cover bg-center relative grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url(${bgImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              </div>
            )}
            <div className="p-8 space-y-10">
              <div className="space-y-2">
                <p className="font-display text-xs uppercase tracking-[0.4em] text-[#adaaaa] italic">The Investment</p>
                <p className="text-5xl font-display font-black text-[#0066FF] italic tracking-tighter leading-none">{price}</p>
              </div>
              <div className="space-y-2">
                <p className="font-display text-xs uppercase tracking-[0.4em] text-[#adaaaa] italic">THE CHAIR TIME</p>
                <div className="flex items-center gap-3 text-white">
                  <Clock size={16} className="text-[#0066FF]" />
                  <span className="text-xl font-display font-black uppercase tracking-widest italic">{time}</span>
                </div>
              </div>
              <Button
                onClick={() => openQuote(ctaService)}
                className="w-full bg-[#0066FF] text-white font-display uppercase tracking-[0.2em] text-xl font-black hover:bg-[#0052CC] py-10 rounded-none italic shadow-[0_0_30px_rgba(0,102,255,0.2)]"
              >
                {ctaLabel} →
              </Button>
              <p className="font-mono text-[9px] text-[#adaaaa] text-center uppercase tracking-[0.4em] font-bold italic leading-relaxed">
                FULLY SELF-CONTAINED MOBILE UNIT
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default ServicesPage;
