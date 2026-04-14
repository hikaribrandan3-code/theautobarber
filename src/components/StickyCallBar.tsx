import { Phone } from "lucide-react";

const StickyCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden px-4 pb-4 pointer-events-none animate-in slide-in-from-bottom duration-500 delay-500">
      <a 
        href="tel:9143295929" 
        className="flex items-center justify-between w-full bg-[#39FF14] text-black px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(57,255,20,0.3)] pointer-events-auto active:scale-95 transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="bg-black/10 p-2 rounded-full">
            <Phone size={18} fill="currentColor" />
          </div>
          <span className="font-mono text-sm font-bold tracking-tighter">(914) 329-5929</span>
        </div>
        <span className="font-display text-xs uppercase font-black italic tracking-widest bg-black text-[#39FF14] px-4 py-2 rounded-full">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default StickyCallBar;
