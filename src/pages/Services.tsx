import { useOutletContext } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();

  return (
    <div className="bg-background">
      <SEO 
        title="The Menu | The Auto Barber Seattle"
        description="Seattle's master-level detailing menu. From signature full restorations to mirror-finish paint correction. We bring the barber's standard to your driveway."
      />

      {/* Hero */}
      <section className="relative px-6 overflow-hidden pt-[140px] pb-24 min-h-[60vh] flex flex-col justify-center items-center text-center border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/portfolio/paint-correction-5050.jpg"
            alt="Auto detailing services"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.35)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0A0A0A]" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <h1 className="text-[56px] md:text-[100px] font-black leading-[0.85] tracking-tighter uppercase italic text-white"
              style={{ textShadow: "0 10px 40px rgba(0,0,0,0.9)" }}>
            YOUR CAR.<br />
            <span className="text-[#C9A962]">OUR CRAFT.</span>
          </h1>
          <p className="mt-8 text-white/80 text-[10px] md:text-[13px] font-black uppercase tracking-[0.4em]">
            Professional Detailing & Paint Protection
          </p>
        </div>
      </section>

      {/* CATEGORY: SIGNATURE DETAILING */}
      <div className="w-full bg-[#0E0E0E] py-12 border-b border-white/20 text-center relative z-10">
        <h2 className="text-3xl lg:text-5xl font-black uppercase text-white tracking-widest">SIGNATURE DETAILING</h2>
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
      <div className="w-full bg-[#0E0E0E] py-12 border-y border-white/20 text-center relative z-10">
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

      {/* Minimal link strip for protective services */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Looking for long-term protection?</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Ceramic Coating", href: "/services/protective/ceramic" },
              { label: "PPF", href: "/services/protective/ppf" },
              { label: "Window Tint", href: "/services/protective/tint" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-6 py-3 border border-white/10 text-xs font-black uppercase tracking-widest text-white hover:border-[#C9A962] hover:text-[#C9A962] transition-colors"
              >
                {l.label} →
              </a>
            ))}
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
        <div className="lg:sticky lg:top-40 space-y-8">
          <div className="border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A962]" />
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
                className="w-full lg:w-auto lg:self-start bg-[#C9A962] text-white font-display uppercase tracking-[0.2em] text-sm lg:text-base font-black hover:bg-[#A6884A] py-5 lg:py-4 px-8 lg:px-10 rounded-none italic shadow-none whitespace-normal h-auto break-words leading-tight"
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
