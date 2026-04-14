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
            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-black">
                <img src={logo} alt="The Auto Barber" className="h-full w-full object-cover" />
              </div>
              <div>
                <span className="font-bold text-2xl font-black tracking-tight block leading-none text-white">THE AUTO BARBER</span>
                <span className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">Master Craftsman</span>
              </div>
            </div>
            <p className="text-gray-500 text-[11px] leading-relaxed uppercase tracking-wider">
              The Barber's Standard in Automotive Protection. Precision detailing for those who value their investment.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Services", "Gallery", "FAQ", "Contact"].map(l => (
                <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-gray-500 text-sm hover:text-white transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-[11px] text-gray-500 font-bold uppercase tracking-wider">
              <a href="tel:2538939452" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={14} />(253) 893-9452</a>
              <a href="mailto:hikaribrandan3@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={14} />hikaribrandan3@gmail.com</a>
              <span className="flex items-center gap-2"><MapPin size={14} />7418 St 126th Unit 1C, Seattle</span>
              <span className="flex items-center gap-2"><Clock size={14} />Mon–Sun 8AM–6PM</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-4">Service Area</h4>
            <div className="space-y-4">
              <p className="text-gray-500 text-sm leading-relaxed">
                Serving Seattle, Bellevue, Tacoma, Kirkland, Redmond, Renton, Kent, Edmonds & surrounding areas.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/Area51DetailingLLC" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">© {new Date().getFullYear()} The Auto Barber LLC. All rights reserved.</p>
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
