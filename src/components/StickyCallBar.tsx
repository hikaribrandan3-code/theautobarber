import { Phone } from "lucide-react";

const StickyCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden px-4 pb-4 pointer-events-none animate-in slide-in-from-bottom duration-500 delay-500">
      <a 
        href="tel:2538939452" 
        className="flex items-center justify-between w-full bg-[#C9A962] text-white px-6 py-4 rounded-none shadow-[0_15px_40px_rgba(0,102,255,0.4)] pointer-events-auto active:scale-95 transition-all border border-white/10"
      >
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-none">
            <Phone size={18} fill="currentColor" />
          </div>
          <span className="font-display text-lg font-black tracking-widest italic uppercase">(253) 893-9452</span>
        </div>
        <span className="font-display text-[10px] uppercase font-black italic tracking-widest bg-white text-black px-4 py-2 rounded-none">
          CALL NOW
        </span>
      </a>
    </div>
  );
};

export default StickyCallBar;
