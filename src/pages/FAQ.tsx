import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";

const faqs = [
  { q: "What's the difference between a $150 detail and a $250 detail?", a: "The $150 Mini Detail is maintenance: vacuum, wipe-down, quick wash. The $250 Full Detail is restoration: extraction, decontamination, engine bay, door jambs. If your car hasn't been detailed in 6+ months, the Full Detail is the better value. If you maintain it monthly, the Mini keeps it there." },
  { q: "How long does ceramic coating take?", a: "4–12 hours depending on paint correction needs. Plus 7 days cure time where you can't wash it. We'll remind you via text on day 8." },
  { q: "What maintenance is required for ceramic coatings?", a: "An annual decontamination wash is required to maintain the warranty. We offer maintenance wash packages to keep your coating performing at its best." },
  { q: "Are you truly mobile? What do you bring?", a: "150-gallon water tank, Honda generator, 200ft hose reach. We've done details in office parking lots, condo garages, and beach house driveways. If it has a flat surface, we can work there." },
  { id: "naples", name: "SEATTLE", x: 200, y: 200, dist: "0 MI", time: "0 MIN", isCenter: true },
  { q: "How far do you travel?", a: "Up to 30 miles from Seattle — that's Bellevue to Tacoma. Travel fee applies beyond 25 miles; we'll tell you upfront when you text your address." },
  { q: "What's the difference between XPEL and 3M PPF?", a: "XPEL is our preferred brand for its superior technology, anti-yellowing properties, and self-healing capabilities. Both provide excellent protection, but XPEL consistently delivers better long-term clarity and durability." },
  { q: "What payment methods do you accept?", a: "We accept Cash, Credit/Debit Cards, Venmo, and Zelle for your convenience." },
  { q: "What are your hours of operation?", a: "We're available Monday through Sunday, 8:00 AM – 6:00 PM, by appointment. Contact us to schedule your service." },
  { q: "Do I need to prepare my vehicle before you arrive?", a: "Just make sure your vehicle is accessible and personal belongings are removed from the interior. We handle everything else." },
];

const FAQPage = () => (
  <div>
    <SEO 
      title="Seattle Auto Detailing — FAQ | The Auto Barber"
      description="Common questions from Seattle car owners about ceramic coating, mobile detailing, and paint protection. We answer every text and call personally. Bellevue to Tacoma."
    />
    <section className="py-16 lg:py-32 hero-gradient grid-bg">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Knowledge Base</p>
        <h1 className="text-4xl font-bold lg:text-6xl">Seattle Detailing <span className="text-primary text-glow">FAQ</span></h1>
      </div>
    </section>

    <section className="py-16 lg:py-32 pb-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        
        <p className="mb-12 font-mono text-xs uppercase tracking-widest leading-relaxed text-muted-foreground border-l-2 border-primary pl-4 max-w-xl mx-auto">
          Real questions from Seattle customers. We answer every text and call personally. If you don't see your question here, message us — <a href="tel:5550000000" className="text-primary font-black hover:underline">(555) 000-0000</a>.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-6">
              <AccordionTrigger className="font-display text-sm font-semibold hover:text-primary">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 pt-8 border-t border-white/10 lg:hidden text-center">
          <p className="font-mono text-[11px] text-muted-foreground leading-relaxed uppercase tracking-widest max-w-[280px] mx-auto">
            Still deciding? Text us a photo of your car — <a href="tel:5550000000" className="text-primary font-black block mt-2 mb-2 text-sm">(555) 000-0000</a> We'll tell you exactly what it needs, no pressure.
          </p>
        </div>

      </div>
    </section>
  </div>
);

export default FAQPage;
