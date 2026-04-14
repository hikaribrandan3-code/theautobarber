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
        className={`relative w-full max-w-sm overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-[0_30px_60px_rgba(201,169,98,0.2)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-8"}`}
      >
        {/* Top Section - Hero Image */}
        <div 
          className="relative h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/bg/interior-promo.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute top-4 left-4">
             <div className="flex items-center gap-2 bg-[#C9A962] px-4 py-1.5 text-[10px] font-display font-black text-white uppercase tracking-[0.2em] italic shadow-[0_0_20px_rgba(201,169,98,0.4)]">
                <Sparkles size={12} className="animate-pulse" />
                Limited Engagement
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
              INTERIOR <span className="text-[#C9A962] text-glow">DETAIL</span>
            </h3>
            <p className="font-mono text-sm font-bold text-[#C9A962]/90 tracking-widest leading-none">
              SPECIAL $199 <span className="text-white/40 line-through text-[10px] ml-1">(REG $250)</span>
            </p>
            <div className="h-px w-8 bg-border mx-auto my-4" />
            <p className="font-mono text-[10px] text-[#adaaaa] leading-relaxed max-w-[240px] mx-auto italic uppercase tracking-widest font-bold">
              Deep clean every surface. Leather treated. Carpets restored. Like new inside.
            </p>
          </div>

          <div className="space-y-3">
             <Button 
                onClick={() => onClaim("Interior Special $199")}
                className="w-full bg-[#C9A962] text-white font-display font-black uppercase italic tracking-[0.2em] transform active:scale-[0.98] transition-all h-16 text-lg rounded-none shadow-[0_0_30px_rgba(201,169,98,0.2)] group"
             >
                BOOK $199 SPECIAL
                <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
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
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C9A962]/50 to-transparent" />
      </div>
    </div>
  );
};

export default SpringPromo;
