import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/alien-icon.png";

const Navbar = ({ onQuoteClick }: { onQuoteClick: (service?: string) => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const detailingLinks = [
    { label: "Interior Detailing", path: "/services#interior" },
    { label: "Exterior Detailing", path: "/services#exterior" },
    { label: "Full Detail", path: "/services#full-detail" },
  ];

  const protectiveLinks = [
    { label: "Ceramic Coatings", path: "/services/protective/ceramic" },
    { label: "Paint Protection Film (PPF)", path: "/services/protective/ppf" },
    { label: "Window Tint", path: "/services/protective/tint" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="The Auto Barber" className="h-9 w-9 object-contain sm:h-[44px] sm:w-[44px]" />
            <span className="font-display text-sm font-bold tracking-wider text-foreground sm:text-xl whitespace-nowrap leading-none pt-1">
              THE AUTO BARBER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <Link to="/" className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#39FF14] ${location.pathname === "/" ? "text-[#39FF14]" : "text-muted-foreground"}`}>Home</Link>
            <Link to="/about" className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#39FF14] ${location.pathname === "/about" ? "text-[#39FF14]" : "text-muted-foreground"}`}>About</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link 
                to="/services"
                className={`flex items-center gap-1 font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#39FF14] ${location.pathname.startsWith("/services") ? "text-[#39FF14]" : "text-muted-foreground"}`}
              >
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
              </Link>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[480px] pt-4 transition-all duration-300 ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <div className="grid grid-cols-2 gap-4 p-6 border border-white/10 bg-black/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  
                  {/* Detailing Column */}
                  <div className="space-y-4">
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#39FF14]/50 font-black border-b border-white/5 pb-2">Detailing Division</h4>
                    <div className="flex flex-col gap-2">
                      {detailingLinks.map(l => (
                        <Link 
                          key={l.label} 
                          to={l.path} 
                          onClick={() => setServicesOpen(false)}
                          className="text-[11px] uppercase tracking-wider text-white/70 hover:text-[#39FF14] transition-colors"
                        >
                          {l.label}
                        </Link>
                      ))}
                      <Link 
                        to="/services/protective/paint-correction" 
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-2 group/pc"
                      >
                         <span className="text-[11px] uppercase tracking-widest text-[#39FF14] font-bold">Paint Correction</span>
                         <Zap size={10} className="text-[#39FF14] group-hover/pc:animate-pulse" />
                      </Link>
                    </div>
                  </div>

                  {/* Protective Column */}
                  <div className="space-y-4 border-l border-white/5 pl-4">
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#39FF14]/50 font-black border-b border-white/5 pb-2">Protective Services</h4>
                    <div className="flex flex-col gap-2">
                      {protectiveLinks.map(l => (
                        <Link 
                          key={l.label} 
                          to={l.path} 
                          onClick={() => setServicesOpen(false)}
                          className="text-[11px] uppercase tracking-wider text-white/70 hover:text-[#39FF14] transition-colors"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/gallery" className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#39FF14] ${location.pathname === "/gallery" ? "text-[#39FF14]" : "text-muted-foreground"}`}>Gallery</Link>
            <Link to="/faq" className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#39FF14] ${location.pathname === "/faq" ? "text-[#39FF14]" : "text-muted-foreground"}`}>FAQ</Link>
            <Link to="/contact" className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#39FF14] ${location.pathname === "/contact" ? "text-[#39FF14]" : "text-muted-foreground"}`}>Contact</Link>
            
            <Button onClick={() => onQuoteClick()} className="bg-[#39FF14] text-black font-display text-[10px] uppercase tracking-[0.2em] font-black italic hover:bg-[#32e612] transition-all px-6">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="text-foreground lg:hidden p-2 -mr-2 shrink-0 relative z-[200]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Portal-like Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[180] lg:hidden">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" 
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-[85vw] max-w-sm bg-background p-6 shadow-2xl animate-in slide-in-from-right duration-300 border-l border-white/5">
            <div className="flex flex-col gap-6 overflow-y-auto h-full pt-20 no-scrollbar pb-12">
               <Link onClick={() => setMobileOpen(false)} to="/" className="text-2xl font-black italic tracking-tighter uppercase text-white hover:text-[#00ff46] transition-colors">Home</Link>
               <Link onClick={() => setMobileOpen(false)} to="/about" className="text-2xl font-black italic tracking-tighter uppercase text-white hover:text-[#00ff46] transition-colors">About</Link>
               
               <div className="space-y-6">
                  {/* Detailing Division */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00ff46]/60 font-black mb-3 border-b border-white/5 pb-1">Detailing Division</p>
                    <div className="grid grid-cols-1 gap-3 pl-2">
                       <Link onClick={() => setMobileOpen(false)} to="/services#interior" className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-[#00ff46] transition-colors">Interior Detailing</Link>
                       <Link onClick={() => setMobileOpen(false)} to="/services#other-services" className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-[#00ff46] transition-colors">Exterior Detailing</Link>
                       <Link onClick={() => setMobileOpen(false)} to="/services#full-detail" className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-[#00ff46] transition-colors">Full Detail</Link>
                    </div>
                  </div>

                  {/* Protective Services */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00ff46] font-black mb-3 border-b border-white/5 pb-1">Protective Services</p>
                    <div className="grid grid-cols-1 gap-3 pl-2">
                       <Link onClick={() => setMobileOpen(false)} to="/services/protective/paint-correction" className="text-sm font-bold uppercase tracking-widest text-[#00ff46] hover:text-[#00ff46]/80 transition-colors">Paint Correction</Link>
                       <Link onClick={() => setMobileOpen(false)} to="/services/protective/ceramic" className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-[#00ff46] transition-colors">Ceramic Coatings</Link>
                       <Link onClick={() => setMobileOpen(false)} to="/services/protective/ppf" className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-[#00ff46] transition-colors">PPF (Clear Bra)</Link>
                       <Link onClick={() => setMobileOpen(false)} to="/services/protective/tint" className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-[#00ff46] transition-colors">Window Tint</Link>
                    </div>
                  </div>
               </div>
  
               <Link onClick={() => setMobileOpen(false)} to="/gallery" className="text-2xl font-black italic tracking-tighter uppercase text-white hover:text-[#00ff46] transition-colors">Gallery</Link>
               <Link onClick={() => setMobileOpen(false)} to="/faq" className="text-2xl font-black italic tracking-tighter uppercase text-white hover:text-[#00ff46] transition-colors">FAQ</Link>
               <Link onClick={() => setMobileOpen(false)} to="/contact" className="text-2xl font-black italic tracking-tighter uppercase text-white hover:text-[#00ff46] transition-colors">Contact</Link>
               
               <div className="mt-8 pb-12">
                 <Button onClick={() => { onQuoteClick(); setMobileOpen(false); }} className="w-full bg-[#00ff46] text-black font-display uppercase font-black italic tracking-widest py-8 hover:bg-[#32e612] transition-all">
                   Get A Quote
                 </Button>
               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
