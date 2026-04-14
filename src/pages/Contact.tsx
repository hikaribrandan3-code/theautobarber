import { useOutletContext } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen bg-[#0e0e0e] text-[#adaaaa] font-sans pt-16 pb-12 overflow-x-hidden selection:bg-[#C9A962] selection:text-white">
      <SEO 
        title="Contact The Auto Barber | Seattle, WA Mobile Service"
        description="Book your next detail in Seattle, WA. We reply within 2 hours. Mobile service for ceramic coating, paint correction, and full detailing. Licensed and insured."
      />

      {/* HERO */}
      <section className="relative px-6 pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-[#0e0e0e] flex flex-col items-center justify-center text-center border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C9A962]/10 border border-[#C9A962]/20 shadow-[0_0_20px_rgba(201,169,98,0.1)] mb-6">
            <span className="text-[10px] lg:text-xs font-bold text-[#C9A962] tracking-[0.3em] uppercase">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black leading-[0.9] uppercase tracking-tighter italic text-white drop-shadow-2xl">
            CONTACT<br /><span className="text-[#C9A962]">THE AUTO BARBER</span>
          </h1>
          <p className="mt-6 text-[#e5e5e5] text-base lg:text-lg font-black uppercase tracking-widest leading-relaxed max-w-2xl px-4 font-mono italic">
            Ready to protect your investment? Text or call — we reply in under 2 hours.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-[#0e0e0e]">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="font-display text-3xl lg:text-4xl font-black uppercase tracking-tighter text-white italic">
                  DIRECT <span className="text-[#C9A962]">LINES</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Phone size={20} />, label: "(253) 893-9452", href: "tel:2538939452" },
                    { icon: <Mail size={20} />, label: "EMAIL US", href: "mailto:hikaribrandan3@gmail.com" },
                    { icon: <MapPin size={20} />, label: "Seattle, WA", href: null },
                    { icon: <Clock size={20} />, label: "Mon–Sun 8AM – 6PM", href: null },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-4 bg-[#131313] border border-white/10 p-5 hover:border-[#C9A962]/30 transition-colors group">
                      <span className="text-[#C9A962]">{c.icon}</span>
                      {c.href ? (
                        <a href={c.href} className="text-sm font-mono uppercase tracking-wider text-white hover:text-[#C9A962] transition-colors">{c.label}</a>
                      ) : (
                        <span className="text-sm font-mono uppercase tracking-wider text-[#adaaaa]">{c.label}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-xl font-black uppercase tracking-tighter text-white italic">FOLLOW US</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="https://instagram.com/theautobarber" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#131313] border border-white/10 px-5 py-3 text-[#adaaaa] hover:text-[#C9A962] hover:border-[#C9A962]/30 transition-colors">
                    <Instagram size={18} /> <span className="text-xs font-mono uppercase tracking-widest">@theautobarber</span>
                  </a>
                  <a href="https://facebook.com/theautobarber" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#131313] border border-white/10 px-5 py-3 text-[#adaaaa] hover:text-[#C9A962] hover:border-[#C9A962]/30 transition-colors">
                    <Facebook size={18} /> <span className="text-xs font-mono uppercase tracking-widest">The Auto Barber</span>
                  </a>
                </div>
              </div>

              <Button 
                onClick={openQuote} 
                className="bg-[#C9A962] text-white font-display font-black uppercase tracking-[0.2em] text-sm hover:bg-[#A6884A] px-10 py-6 rounded-none shadow-[0_0_20px_rgba(201,169,98,0.2)]"
              >
                REQUEST A QUOTE <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Contact Form */}
            <div className="bg-[#131313] border border-white/10 p-8 lg:p-10">
              <h2 className="font-display text-2xl lg:text-3xl font-black uppercase tracking-tighter text-white italic mb-8">
                SEND A <span className="text-[#C9A962]">MESSAGE</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Name" required className="bg-[#0e0e0e] border-white/10 text-white placeholder:text-[#adaaaa]/50 rounded-none focus:border-[#C9A962] focus:ring-0" />
                  <Input placeholder="Phone" type="tel" className="bg-[#0e0e0e] border-white/10 text-white placeholder:text-[#adaaaa]/50 rounded-none focus:border-[#C9A962] focus:ring-0" />
                </div>
                <Input placeholder="Email (Optional)" type="email" className="bg-[#0e0e0e] border-white/10 text-white placeholder:text-[#adaaaa]/50 rounded-none focus:border-[#C9A962] focus:ring-0" />
                <Input placeholder="Vehicle Year / Make / Model" required className="bg-[#0e0e0e] border-white/10 text-white placeholder:text-[#adaaaa]/50 rounded-none focus:border-[#C9A962] focus:ring-0" />
                <select className="w-full bg-[#0e0e0e] border border-white/10 rounded-none px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C9A962]">
                  <option className="bg-[#131313]">Service Needed</option>
                  <option className="bg-[#131313]">Interior Detail</option>
                  <option className="bg-[#131313]">Full Detail</option>
                  <option className="bg-[#131313]">Ceramic Coating</option>
                  <option className="bg-[#131313]">PPF</option>
                  <option className="bg-[#131313]">Window Tint</option>
                </select>
                <Textarea placeholder="Tell us about your vehicle — current condition, what you'd like done, any problem areas." rows={5} className="bg-[#0e0e0e] border-white/10 text-white placeholder:text-[#adaaaa]/50 rounded-none focus:border-[#C9A962] focus:ring-0" />
                <Button type="submit" className="w-full bg-[#C9A962] text-white font-display font-black uppercase tracking-[0.2em] text-sm hover:bg-[#A6884A] rounded-none py-6">
                  GET MY QUOTE →
                </Button>
                <p className="font-mono text-[10px] text-[#adaaaa] text-center uppercase tracking-widest mt-2">
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
