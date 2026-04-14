import { useOutletContext } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import SEO from "@/components/SEO";

const ContactPage = () => {
  const { openQuote } = useOutletContext<{ openQuote: () => void }>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll respond within 24 hours.");
  };

  return (
    <div>
      <SEO 
        title="Contact The Auto Barber | Seattle, WA Mobile Service"
        description="Book your next detail in Seattle, WA. We reply within 2 hours. Mobile service for ceramic coating, paint correction, and full detailing. Licensed and insured."
      />
      <section className="py-16 lg:py-32 hero-gradient grid-bg">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Get In Touch</p>
          <h1 className="text-4xl font-bold lg:text-6xl">
            <span className="lg:hidden text-glow">Contact Seattle</span>
            <span className="hidden lg:inline">Contact <span className="text-primary text-glow">The Auto Barber Seattle</span></span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            <span className="lg:hidden">We typically respond within 2 hours.</span>
            <span className="hidden lg:inline">Concierge-level support for your vehicle. Reach out anytime.</span>
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Direct Lines</h2>
                <div className="space-y-4">
                  {[
                    { icon: <Phone size={20} />, label: "(555) 000-0000", href: "tel:5550000000" },
                    { icon: <Mail size={20} />, label: "hikaribrandan3@gmail.com", href: "mailto:hikaribrandan3@gmail.com" },
                    { icon: <MapPin size={20} />, label: "Seattle, WA — Mobile Service", href: null },
                    { icon: <Clock size={20} />, label: "Mon–Sun 8:00 AM – 6:00 PM", href: null },
                  ].map(c => (
                    <div key={c.label} className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                      <span className="text-primary">{c.icon}</span>
                      {c.href ? (
                        <a href={c.href} className="text-sm hover:text-primary transition-colors">{c.label}</a>
                      ) : (
                        <span className="text-sm text-muted-foreground">{c.label}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-sm uppercase tracking-wider text-primary mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://instagram.com/theautobarber" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Instagram size={20} /> @theautobarber
                  </a>
                </div>
                <div className="flex gap-4 mt-2">
                  <a href="https://facebook.com/theautobarber" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Facebook size={20} /> The Auto Barber
                  </a>
                </div>
              </div>

              <Button onClick={openQuote} size="lg" className="bg-primary text-primary-foreground font-display uppercase tracking-wider text-sm hover:opacity-90 box-glow">
                Request a Quote →
              </Button>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg border border-border bg-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Name" required className="bg-secondary border-border" />
                  <Input placeholder="Phone" type="tel" className="bg-secondary border-border" />
                </div>
                <Input placeholder="Email (Optional)" type="email" className="bg-secondary border-border" />
                <Input placeholder="Vehicle Year / Make / Model" required className="bg-secondary border-border" />
                <select className="w-full bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Service Needed</option>
                  <option>Interior Detail</option>
                  <option>Full Detail</option>
                  <option>Ceramic Coating</option>
                  <option>PPF</option>
                  <option>Window Tint</option>
                </select>
                <Textarea placeholder="Tell us about your vehicle — current condition, what you'd like done, any problem areas." rows={5} className="bg-secondary border-border" />
                <Button type="submit" className="w-full bg-primary text-primary-foreground font-display uppercase tracking-wider text-sm hover:opacity-90">
                  Get My Quote →
                </Button>
                <p className="font-mono text-[9px] text-muted-foreground text-center uppercase tracking-widest mt-2">
                  We reply within 2 hours — usually faster.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
