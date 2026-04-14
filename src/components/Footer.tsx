import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/alien-icon.png";
import ServiceRadar from "./ServiceRadar";
import { Button } from "./ui/button";

interface FooterProps {
  onQuoteClick: (service?: string, location?: string) => void;
}

const Footer = ({ onQuoteClick }: FooterProps) => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="The Auto Barber" className="h-12 w-12 object-contain" />
              <span className="font-display text-lg font-bold tracking-wider">THE AUTO BARBER</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Detailing That Is Out of This World. Seattle's premier mobile detailing service — we come to you.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Services", "Gallery", "FAQ", "Contact"].map(l => (
                <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:5550000000" className="flex items-center gap-2 hover:text-primary"><Phone size={14} />(555) 000-0000</a>
              <a href="mailto:hikaribrandan3@gmail.com" className="flex items-center gap-2 hover:text-primary"><Mail size={14} />hikaribrandan3@gmail.com</a>
              <span className="flex items-center gap-2"><MapPin size={14} />Seattle, WA — Mobile Service</span>
              <span className="flex items-center gap-2"><Clock size={14} />Mon–Sun 8AM–6PM</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-4">Service Area</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Seattle, Bellevue, Redmond, Kirkland, Renton, Kent, Tacoma, Everett, Issaquah, Sammamish & surrounding areas.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://instagram.com/Area51DetailingLLC" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        {/* Tactical Service Radar - Always Visible */}
        <div className="mt-16 border-t border-border pt-12">
          <div className="animate-in fade-in duration-500">
            <ServiceRadar onCityClick={(city) => onQuoteClick(undefined, city)} />
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} The Auto Barber LLC. All rights reserved.</p>
          <p className="text-muted-foreground text-xs">Cash • Card • Venmo • Zelle</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
