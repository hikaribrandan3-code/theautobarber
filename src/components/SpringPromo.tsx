import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface SpringPromoProps {
  onClaim: (service: string) => void;
}

const SpringPromo = ({ onClaim }: SpringPromoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    const hidePromo = document.cookie.split("; ").find(row => row.startsWith("hidePromo="));
    if (!hidePromo) {
      setIsDismissed(false);
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    document.cookie = `hidePromo=true; expires=${date.toUTCString()}; path=/`;
    setTimeout(() => setIsDismissed(true), 500);
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-500 ${isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Popup Card — split layout */}
      <div
        className={`relative w-full max-w-2xl overflow-hidden flex shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-6 opacity-0"}`}
      >
        {/* LEFT — White content panel */}
        <div className="flex flex-col justify-between bg-white text-black w-[55%] p-8 sm:p-10 relative">
          {/* Badge */}
          <div>
            <span className="inline-block bg-black text-white text-[9px] font-black uppercase tracking-[0.25em] px-3 py-1.5 mb-6">
              SPRING PROMO
            </span>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
              INTERIOR<br />DETAIL
            </h2>

            {/* Pricing */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl sm:text-5xl font-black italic tracking-tighter">$199</span>
              <span className="text-base text-black/40 line-through">(Reg $250)</span>
            </div>

            {/* Description */}
            <p className="text-sm font-medium text-black/70 border-l-[3px] border-[#C9A962] pl-3 leading-relaxed">
              Deep clean every surface. Leather treated. Carpets restored. Like new inside.
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={() => { handleDismiss(); onClaim("Interior Detail $199"); }}
            className="mt-8 w-full bg-black text-white font-black uppercase tracking-[0.2em] py-4 text-sm hover:bg-black/80 transition-all flex items-center justify-center gap-3 group"
          >
            BOOK $199 SPECIAL
            <span className="text-lg transition-transform group-hover:translate-x-1">↗</span>
          </button>
        </div>

        {/* RIGHT — Cockpit image */}
        <div className="relative w-[45%] overflow-hidden">
          <img
            src="/images/assets/interior_detailing_focus_1776187301149.png"
            alt="Premium interior detail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 w-8 h-8 bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors backdrop-blur-sm rounded-sm"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpringPromo;
