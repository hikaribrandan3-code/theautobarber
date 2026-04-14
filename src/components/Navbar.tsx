import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = ({ onQuoteClick }: { onQuoteClick: (service?: string) => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const servicesLinks = [
    { label: "Auto Detailing", path: "/services" },
    { label: "Ceramic Coatings", path: "/services/protective/ceramic" },
    { label: "Window Tint", path: "/services/protective/tint" },
    { label: "Paint Protection Film (PPF)", path: "/services/protective/ppf" },
  ];

  const navLinks = [
    { label: "Gallery", path: "/gallery" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <>
      {/* Black Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0A0A0A] border-b border-white/10 h-[60px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-full">
          {/* Logo Text Only */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <span className="font-black text-lg tracking-tight text-white uppercase leading-none">
              The Auto Barber
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${location.pathname.startsWith("/services") ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                Services <ChevronDown size={12} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full left-0 w-64 pt-4 transition-all duration-200 ${servicesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <div className="bg-[#141414] border border-white/10 shadow-2xl p-4 flex flex-col gap-3">
                  {servicesLinks.map(l => (
                    <Link
                      key={l.label}
                      to={l.path}
                      onClick={() => setServicesOpen(false)}
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map(l => (
              <Link
                key={l.label}
                to={l.path}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${isActive(l.path) ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                {l.label}
              </Link>
            ))}
            
            <a href="tel:2538939452" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
              (253) 893-9452
            </a>
            
            <button
              onClick={() => onQuoteClick()}
              className="bg-white text-[#0A0A0A] text-[10px] font-black uppercase tracking-widest px-8 py-3.5 hover:bg-gray-200 transition-colors"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[180] lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-[85vw] max-w-sm bg-[#0A0A0A] p-8 shadow-2xl flex flex-col gap-8 pt-24 border-l border-white/5">
            <Link onClick={() => setMobileOpen(false)} to="/" className="text-3xl font-black uppercase tracking-tighter text-white">Home</Link>
            
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold border-b border-white/5 pb-2">Services</p>
              <div className="flex flex-col gap-4 pl-2">
                {servicesLinks.map(l => (
                  <Link key={l.label} onClick={() => setMobileOpen(false)} to={l.path} className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors">{l.label}</Link>
                ))}
              </div>
            </div>

            {navLinks.map(l => (
              <Link
                key={l.label}
                onClick={() => setMobileOpen(false)}
                to={l.path}
                className="text-3xl font-black uppercase tracking-tighter text-white hover:text-gray-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            
            <a href="tel:2538939452" className="text-xl font-bold text-gray-400">(253) 893-9452</a>
            
            <button
              onClick={() => { onQuoteClick(); setMobileOpen(false); }}
              className="w-full bg-white text-[#0A0A0A] font-black uppercase tracking-widest py-6 text-sm hover:bg-gray-200 transition-colors mt-auto"
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
