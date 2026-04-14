import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = ({ onQuoteClick }: { onQuoteClick: (service?: string) => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <>
      <nav className="fixed top-8 left-0 right-0 z-[100] bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="The Auto Barber" className="h-9 w-9 rounded-full object-cover" />
            <span className="font-black text-sm tracking-tight text-[#0A0A0A] uppercase hidden sm:block">
              The Auto Barber
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(l => (
              <Link
                key={l.label}
                to={l.path}
                className={`text-xs font-bold uppercase tracking-[0.15em] transition-colors ${isActive(l.path) ? "text-[#0A0A0A]" : "text-[#6B7280] hover:text-[#0A0A0A]"}`}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:2538939452" className="text-xs font-bold uppercase tracking-[0.15em] text-[#6B7280] hover:text-[#0A0A0A] transition-colors">
              (253) 893-9452
            </a>
            <button
              onClick={() => onQuoteClick()}
              className="bg-[#0A0A0A] text-white text-xs font-black uppercase tracking-widest px-6 py-3 hover:bg-[#333] transition-colors"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-[#0A0A0A]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[180] lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-[85vw] max-w-sm bg-white p-6 shadow-2xl flex flex-col gap-6 pt-24">
            {navLinks.map(l => (
              <Link
                key={l.label}
                onClick={() => setMobileOpen(false)}
                to={l.path}
                className="text-2xl font-black uppercase tracking-tight text-[#0A0A0A] hover:text-[#6B7280] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:2538939452" className="text-lg font-bold text-[#6B7280]">(253) 893-9452</a>
            <button
              onClick={() => { onQuoteClick(); setMobileOpen(false); }}
              className="w-full bg-[#0A0A0A] text-white font-black uppercase tracking-widest py-5 text-sm hover:bg-[#333] transition-colors mt-auto"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
