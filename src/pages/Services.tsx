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
          <p className="font-display text-sm uppercase tracking-[0.5em] text-[#C9A962] mb-6 italic">The Service Menu</p>
          <h1 className="text-6xl lg:text-[10rem] font-display font-black italic tracking-tighter uppercase text-white leading-[0.75]">
             THE MASTER <br/><span className="text-[#C9A962] text-glow">SEATTLE STAND.</span>
          </h1>
          <p className="mt-12 text-[#adaaaa] max-w-2xl mx-auto font-mono text-[10px] lg:text-xs uppercase tracking-[0.4em] leading-relaxed italic">
            EVERY DETAIL DOCUMENTED. EVERY CUT GUARANTEED.
          </p>
        </div>
      </section>

      {/* CATEGORY: COMMON AUTO DETAILING */}
      <div className="w-full bg-[#0E0E0E] py-12 border-b border-white/20 text-center relative z-10">
        <h2 className="text-3xl lg:text-5xl font-black uppercase text-white tracking-widest">COMMON AUTO DETAILING</h2>
        <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mt-2">Interior and Exterior Restorations</p>
      </div>

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
        bgImage="/images/assets/exterior_paint_gloss_1776187353898.png"
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

      <div className="w-full h-px bg-white/20 block" /> {/* Desktop Separator Line */}

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
        bgImage="/images/assets/interior_detailing_focus_1776187301149.png"
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

      {/* CATEGORY: HIGH-END PAINT PROTECTION */}
      <div className="w-full bg-[#0E0E0E] py-12 border-y border-white/20 text-center relative z-10 mt-16">
        <h2 className="text-3xl lg:text-5xl font-black uppercase text-white tracking-widest">HIGH-END PAINT PROTECTION</h2>
        <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mt-2">Correction, Polish, and Preservation</p>
      </div>

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
        bgImage="/images/assets/exterior_paint_gloss_1776187353898.png"
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

      <div className="w-full h-px bg-white/20 block" /> {/* Desktop Separator Line */}

      {/* ─────────── SERVICE 04: PAINT CORRECTION ─────────── */}
      <ServiceDetail
        id="paint-correction"
        serviceNumber="04"
        title="PAINT CORRECTION"
        tagline="Permanent defect removal. Multi-stage."
        price="Quote-Based — Custom"
        time="4–12 hours"
        ctaLabel="Book Correction Consultation"
        ctaService="Paint Correction"
        openQuote={openQuote}
        bgImage="/images/assets/car_protection_ceramic_ppf_1776187387918.png"
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

      {/* ADDITIONAL SERVICES GRID (REFINEMENTS) */}
      <section id="other-services" className="py-24 border-t border-white/5 bg-[#0e0e0e]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <p className="font-display text-sm uppercase tracking-[0.5em] text-[#C9A962] mb-4 italic">The Refinements</p>
            <h2 className="text-5xl lg:text-7xl font-display font-black italic uppercase tracking-tighter text-white">OTHER SERVICES</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Wax Package", price: "From $150", desc: "Hand-applied protection. 2–3 months of gloss and UV defense. For paint that's already in good shape.", img: "/images/assets/exterior_paint_gloss_1776187353898.png" },
              { title: "Mini Detail", price: "From $150", desc: "Quick maintenance. Exterior hand wash, interior vacuum and wipe, glass inside and out.", img: "/images/assets/interior_detailing_focus_1776187301149.png" },
              { id: "exterior", title: "Exterior Detail", price: "Quote-Based", desc: "Wash, decontaminate, clay bar, wheels and tires. Exterior-only when the inside is already clean.", img: "/images/assets/car_protection_ceramic_ppf_1776187387918.png" },
              { title: "Water Spot Treatment", price: "Quote-Based", desc: "Mineral deposit removal. Paint-safe process — we measure clear coat before we start.", img: "/images/assets/ceramic_water_beading_1776189745679.png" },
              { title: "Ceramic Coating", price: "From $1,100", desc: "3–5 year protection. Nano-ceramic molecular bond. Requires paint correction first if defects exist.", link: "/services/protective/ceramic", linkText: "Full Details", img: "/images/assets/ceramic_water_beading_1776189745679.png" },
              { title: "PPF / Window Tint", price: "From $1,300", desc: "XPEL and STEK film. Master-tier protective film specialists.", link: "/services/protective/ppf", linkText: "Full Details", img: "/images/assets/window_tint_luxury_1776189700411.png" },
            ].map(s => (
              <div key={s.title} id={s.id} className="p-8 border border-white/5 bg-[#141414] space-y-4 hover:border-white/30 transition-all group relative overflow-hidden min-h-[250px] flex flex-col justify-end">
                <div className="absolute inset-0 z-0">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 flex flex-col items-start gap-2">
                  <h3 className="font-display font-black uppercase tracking-wider text-xl text-white italic">{s.title}</h3>
                  <p className="font-mono text-xs text-[#C9A962] font-bold italic uppercase">{s.price}</p>
                  <p className="text-[11px] font-mono text-[#adaaaa] leading-relaxed uppercase tracking-widest italic line-clamp-3">{s.desc}</p>
                  {s.link ? (
                    <Link to={s.link}>
                      <Button variant="ghost" size="sm" className="mt-4 text-[10px] uppercase tracking-[0.3em] font-display font-black text-white hover:text-[#C9A962] p-0 h-auto italic underline underline-offset-4">
                        {s.linkText} <ChevronRight size={14} className="ml-1" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="ghost" size="sm" onClick={() => openQuote(s.title)} className="mt-4 text-[10px] uppercase tracking-[0.3em] font-display font-black text-white hover:text-[#C9A962] p-0 h-auto italic underline underline-offset-4">
                      GET THE QUOTE <ChevronRight size={14} className="ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTECTIVE SERVICES SECTION */}
      <section className="py-24 lg:py-48 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C9A962]/5 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <p className="font-display text-sm uppercase tracking-[0.5em] text-[#C9A962] mb-4 italic">The Protection Tier</p>
            <h2 className="text-5xl lg:text-[8rem] font-display font-black italic uppercase tracking-tighter leading-none text-white">CERAMIC • PPF • <span className="text-[#C9A962] text-glow">TINT</span></h2>
            <p className="font-mono text-[10px] lg:text-xs uppercase tracking-[0.4em] text-[#adaaaa] italic font-bold max-w-2xl mx-auto leading-relaxed">WE PARTNER WITH CERTIFIED XPEL & STEK INSTALLERS FOR FILM AND COATING THAT LASTS YEARS, NOT MONTHS.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="p-10 border border-white/5 bg-[#141414] flex flex-col items-center text-center space-y-8 hover:border-[#C9A962]/40 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A962]/5 rotate-45 translate-x-12 -translate-y-12" />
              <Zap size={64} className="text-[#C9A962] group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-display font-black italic uppercase tracking-tighter text-white">CERAMIC COATING</h3>
              <p className="font-display text-4xl text-[#C9A962] font-black italic tracking-tighter">$1,100+</p>
              <Link to="/services/protective/ceramic" className="w-full">
                <Button className="w-full bg-[#C9A962] text-white font-display text-lg uppercase tracking-widest font-black italic hover:bg-[#A6884A] transition-all py-10 rounded-none shadow-[0_0_30px_rgba(0,102,255,0.2)]">
                  FULL DETAILS
                </Button>
              </Link>
            </div>

            <div className="p-10 border border-[#C9A962]/30 bg-[#141414] flex flex-col items-center text-center space-y-8 scale-105 shadow-[0_0_60px_rgba(0,102,255,0.1)] hover:border-[#C9A962]/60 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A962]/10 rotate-45 translate-x-12 -translate-y-12" />
              <Shield size={64} className="text-[#C9A962] group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-display font-black italic uppercase tracking-tighter text-white">PAINT PROTECTION FILM</h3>
              <p className="font-display text-4xl text-[#C9A962] font-black italic tracking-tighter">$1,300+</p>
              <Link to="/services/protective/ppf" className="w-full">
                <Button className="w-full bg-[#C9A962] text-white font-display text-lg uppercase tracking-widest font-black italic hover:bg-[#A6884A] transition-all py-10 rounded-none shadow-[0_0_40px_rgba(0,102,255,0.3)]">
                  FULL DETAILS
                </Button>
              </Link>
            </div>

            <div className="p-10 border border-white/5 bg-[#141414] flex flex-col items-center text-center space-y-8 hover:border-[#C9A962]/40 transition-all group relative overflow-hidden">
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
  <section id={id} className="py-16 pt-24 bg-black relative">
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">

        {/* LEFT — Content */}
        <div className="space-y-12">

          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-white/50 tracking-[0.4em] uppercase">// {serviceNumber}</span>
              {badge && (
                <span className="px-2 py-0.5 bg-white text-black font-mono text-[9px] font-black uppercase tracking-widest">
                  ★ {badge}
                </span>
              )}
            </div>
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-white">{title}</h2>
            <p className="font-mono text-xs text-white/80 uppercase tracking-widest leading-relaxed border-l-2 border-white pl-4">
              {tagline}
            </p>
          </div>

          {/* The Experience */}
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-white">THE EXPERIENCE</h3>
            <p className="text-white/80 leading-relaxed text-sm lg:text-base">{experience}</p>
          </div>

          {/* What's Included */}
          <div className="space-y-12">
            <h3 className="font-display text-sm uppercase tracking-[0.5em] text-[#C9A962] italic">WHAT'S INCLUDED</h3>
            {sections.map(section => (
              <div key={section.category} className="space-y-4">
                <h4 className="font-display text-xl uppercase tracking-[0.2em] text-white italic border-b border-white/5 pb-3">
                  {section.category}
                </h4>
                <ul className="space-y-4 pl-0">
                  {section.items.map((item, i) => (
                    <li key={item.label} className="flex gap-4 text-sm font-mono uppercase tracking-widest text-[#adaaaa] italic group">
                      <div className="w-1.5 h-1.5 bg-[#C9A962] mt-1.5 shadow-[0_0_8px_#C9A962]" />
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
            <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-white">THE DIFFERENCE</h3>
            <p className="text-white/70 leading-relaxed text-sm border border-white/20 bg-white/5 p-4 rounded-none">{difference}</p>
          </div>
        </div>

        {/* RIGHT — Sticky Booking Card */}
        <div className="lg:sticky lg:top-32 space-y-8">
          <div className="border border-white/20 bg-[#0A0A0A] overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-white" />
            {bgImage && (
              <div
                className="h-64 bg-cover bg-center relative transition-all duration-700 opacity-60 group-hover:opacity-100"
                style={{ backgroundImage: `url(${bgImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
              </div>
            )}
            <div className="p-8 space-y-10">
              <div className="space-y-2">
                <p className="font-display text-xs uppercase tracking-[0.4em] text-white/50 italic">The Investment</p>
                <p className="text-5xl font-display font-black text-white italic tracking-tighter leading-none">{price}</p>
              </div>
              <div className="space-y-2">
                <p className="font-display text-xs uppercase tracking-[0.4em] text-white/50 italic">THE CHAIR TIME</p>
                <div className="flex items-center gap-3 text-white">
                  <Clock size={16} className="text-white" />
                  <span className="text-xl font-display font-black uppercase tracking-widest italic">{time}</span>
                </div>
              </div>
              <Button
                onClick={() => openQuote(ctaService)}
                className="w-full bg-white text-black font-display uppercase tracking-[0.2em] text-sm lg:text-xl font-black hover:bg-gray-200 py-10 rounded-none italic shadow-none whitespace-normal h-auto break-words leading-tight"
              >
                {ctaLabel} →
              </Button>
              <p className="font-mono text-[9px] text-[#adaaaa] text-center uppercase tracking-[0.4em] font-bold italic leading-relaxed">
                FULLY EQUIPPED SHOP-BASED STUDIO
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default ServicesPage;
