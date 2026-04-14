import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

interface FooterProps {
  onQuoteClick: (service?: string, location?: string) => void;
}

const Footer = ({ onQuoteClick }: FooterProps) => {
  return (
    <footer className="border-t border-white/5 bg-[#080808]">
      <div className="container mx-auto px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex flex-col items-start gap-4 mb-6">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/20 bg-black">
                <img src={logo} alt="The Auto Barber" className="h-full w-full object-cover" />
              </div>
              <div>
                <span className="font-black text-3xl tracking-tight block leading-[1] text-white mb-2">THE AUTO BARBER SEATTLE</span>
                <span className="text-[12px] font-black text-white/60 tracking-[0.3em] uppercase">Master Craftsman</span>
              </div>
            </div>
            <p className="text-white text-[12px] leading-relaxed uppercase tracking-wider font-bold">
              The Barber's Standard in Automotive Protection. Precision detailing for those who value their investment.
            </p>
          </div>

          <div>
            <h4 className="font-black text-sm uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "Services", "Gallery", "FAQ", "Contact"].map(l => (
                <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-white text-sm font-bold hover:text-gray-300 transition-colors uppercase tracking-widest">{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-sm uppercase tracking-wider text-white mb-4">Contact</h4>
            <div className="flex flex-col gap-4 text-xs text-white font-bold uppercase tracking-wider">
              <a href="tel:2538939452" className="flex items-center gap-3 hover:text-gray-300 transition-colors"><Phone size={16} />(253) 893-9452</a>
              <a href="mailto:hikaribrandan3@gmail.com" className="flex items-center gap-3 hover:text-gray-300 transition-colors"><Mail size={16} />hikaribrandan3@gmail.com</a>
              <span className="flex items-center gap-3 leading-relaxed"><MapPin size={16} className="shrink-0" />7418 St 126th Unit 1C,<br/>Seattle</span>
              <span className="flex items-center gap-3"><Clock size={16} />Mon–Sun 8AM–6PM</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-sm uppercase tracking-wider text-white mb-4">Service Area</h4>
            <div className="space-y-4">
              <p className="text-white text-sm font-bold leading-relaxed uppercase tracking-widest">
                Serving Seattle, Bellevue, Tacoma, Kirkland, Redmond, Renton, Kent, Edmonds & surrounding areas.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="https://instagram.com/Area51DetailingLLC" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-white text-[10px] uppercase font-black tracking-widest">© {new Date().getFullYear()} The Auto Barber LLC. All rights reserved.</p>
          <div className="flex gap-4 text-[10px] uppercase font-black tracking-widest text-white/20">
            <span>Cash</span>
            <span>Card</span>
            <span>Venmo</span>
            <span>Zelle</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
