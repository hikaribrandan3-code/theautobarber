import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpringPromoProps {
  onClaim: (service: string) => void;
}

const SpringPromo = ({ onClaim }: SpringPromoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true); // Default to true until we check cookie

  useEffect(() => {
    // Check for cookie
    const hidePromo = document.cookie.split("; ").find(row => row.startsWith("hidePromo="));
    if (!hidePromo) {
      setIsDismissed(false);
      // Entrance delay
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Set cookie for 24h
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    document.cookie = `hidePromo=true; expires=${date.toUTCString()}; path=/`;
    setTimeout(() => setIsDismissed(true), 500); // Wait for exit animation
  };

  if (isDismissed) return null;

  return (
    <div 
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-500 ${isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={handleDismiss}
      />

      {/* Popup Card */}
      <div 
        className={`relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-card shadow-[0_0_50px_rgba(57,255,20,0.15)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-8"}`}
      >
        {/* Top Section - Hero Image */}
        <div 
          className="relative h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/bg/exterior-bg.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute top-4 left-4">
             <div className="flex items-center gap-2 rounded-full bg-[#39FF14] px-3 py-1 text-[10px] font-bold text-black uppercase tracking-tighter shadow-[0_0_15px_#39FF14]">
                <Sparkles size={12} className="animate-pulse" />
                Special Offer
             </div>
          </div>
          <button 
            onClick={handleDismiss}
            className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white/70 backdrop-blur-md hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-8 pt-4 text-center">
          <div className="mb-6 space-y-2">
            <h3 className="font-display text-2xl font-black italic uppercase tracking-tighter text-white">
              SPRING <span className="text-[#39FF14] text-glow">RESET</span>
            </h3>
            <p className="font-mono text-sm font-bold text-[#39FF14]/90 tracking-widest leading-none">
              INTERIOR + EXTERIOR DECON
            </p>
            <div className="h-px w-8 bg-border mx-auto my-4" />
            <p className="text-muted-foreground text-xs leading-relaxed max-w-[240px] mx-auto italic">
              Naples & Marco Island’s Premier Pollen Removal for only $249.
            </p>
          </div>

          <div className="space-y-3">
             <Button 
                onClick={() => onClaim("Spring Reset Special $249")}
                className="w-full bg-[#39FF14] text-black font-display font-black uppercase italic tracking-widest hover:bg-[#32e612] transition-all h-14 text-sm box-glow group"
             >
                CLAIM SPECIAL
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
             </Button>
             
             <button 
                onClick={handleDismiss}
                className="text-muted-foreground text-[10px] uppercase font-mono hover:text-white transition-colors tracking-[0.2em]"
             >
                Maybe Later
             </button>
          </div>
        </div>
        
        {/* Glowing bottom accent */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#39FF14]/50 to-transparent" />
      </div>
    </div>
  );
};

export default SpringPromo;
