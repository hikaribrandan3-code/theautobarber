import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import ServiceRadar from "./ServiceRadar";
import { Button } from "./ui/button";

interface FooterProps {
  onQuoteClick: (service?: string, location?: string) => void;
}

const Footer = ({ onQuoteClick }: FooterProps) => {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#F9FAFB]">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#E5E7EB] bg-black shadow-[0_0_20px_rgba(0,102,255,0.2)]">
                <img src={logo} alt="The Auto Barber" className="h-full w-full object-cover" />
              </div>
              <div>
                <span className="font-bold text-2xl font-black tracking-tight block leading-none">THE AUTO BARBER</span>
                <span className="text-[10px] font-medium text-[#0A0A0A] font-bold tracking-[0.3em] uppercase">Invest. Protect. Enjoy.</span>
              </div>
            </div>
            <p className="text-[#6B7280] text-sm leading-relaxed text-sm uppercase tracking-wider text-[11px]">
              The Barber's Standard in Automotive Protection. Precision detailing for those who value their investment.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#0A0A0A] mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Services", "Gallery", "FAQ", "Contact"].map(l => (
                <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-[#6B7280] text-sm hover:text-[#0A0A0A] transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#0A0A0A] mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-[#6B7280] font-medium uppercase tracking-wider text-[11px]">
              <a href="tel:2538939452" className="flex items-center gap-2 hover:text-[#0A0A0A] transition-colors"><Phone size={14} />(253) 893-9452</a>
              <a href="mailto:hikaribrandan3@gmail.com" className="flex items-center gap-2 hover:text-[#0A0A0A] transition-colors"><Mail size={14} />hikaribrandan3@gmail.com</a>
              <span className="flex items-center gap-2"><MapPin size={14} />7418 St 126th Unit 1C, Seattle</span>
              <span className="flex items-center gap-2"><Clock size={14} />Mon–Sun 8AM–6PM</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#0A0A0A] mb-4">Service Area</h4>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Seattle, Bellevue, Redmond, Kirkland, Renton, Kent, Tacoma, Everett, Issaquah, Sammamish & surrounding areas.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://instagram.com/Area51DetailingLLC" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#0A0A0A]"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        {/* Tactical Service Radar - Always Visible */}
        <div className="mt-16 border-t border-[#E5E7EB] pt-12">
          <div className="animate-in fade-in duration-500">
            <ServiceRadar onCityClick={(city) => onQuoteClick(undefined, city)} />
          </div>
        </div>

        <div className="mt-12 border-t border-[#E5E7EB] pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-[#6B7280] text-xs">© {new Date().getFullYear()} The Auto Barber LLC. All rights reserved.</p>
          <p className="text-[#6B7280] text-xs">Cash • Card • Venmo • Zelle</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
