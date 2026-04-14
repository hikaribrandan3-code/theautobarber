import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Shield, Sparkles, ChevronRight, Zap, Target, Crosshair } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const PPF = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();
  const [selectedPackage, setSelectedPackage] = useState<"partial" | "full-front" | "full-car">("full-front");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const packages = {
    "partial": {
      title: "PARTIAL FRONT",
      price: "$1,300",
      zones: ["hood", "bumper", "headlights"],
      desc: "Essentials protection for high-impact strike zones."
    },
    "full-front": {
      title: "FULL FRONT",
      price: "$2,100",
      zones: ["hood", "bumper", "headlights", "mirrors", "pillars"],
      desc: "Complete front-end defense against road debris and rock chips."
    },
    "full-car": {
      title: "FULL CAR",
      price: "QUOTE",
      zones: ["hood", "bumper", "headlights", "mirrors", "pillars", "body"],
      desc: "Total paint preservation. Every panel sealed in self-healing film."
    }
  };

  const isActive = (zone: string) => packages[selectedPackage].zones.includes(zone);

  return (
    <div className="min-h-screen bg-background pt-24 pb-24 overflow-hidden selection:bg-[#C9A962] selection:text-black">
      <SEO 
        title="PPF Seattle, FL | Paint Protection Film Specialists"
        description="Seattle' premier Paint Protection Film (PPF) installation. Self-healing clear bra protects your exotic or luxury vehicle from rock chips, debris, and road wear. Invisible armor for Seattle drivers."
      />
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Tactical Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A962]/30 bg-[#C9A962]/5 text-[#C9A962] font-mono text-[10px] uppercase tracking-[0.3em]">
             <Target size={12} className="animate-pulse" />
             Strategic Preservation System
          </div>
          <h1 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none">
            NAPLES FL <span className="text-[#C9A962] text-glow">PPF</span>
          </h1>
          <p className="font-mono text-xs lg:text-sm uppercase tracking-[0.4em] text-muted-foreground max-w-2xl mx-auto italic">
            TACTICAL PROTECTION MAP / SPECIMEN: TESLA MODEL 3
          </p>
        </div>

        {/* Interactive Simulation Zone */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Package Selectors */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-30">
            {(Object.keys(packages) as Array<keyof typeof packages>).map((pkg) => (
              <button
                key={pkg}
                onClick={() => setSelectedPackage(pkg)}
                className={`px-8 py-3 rounded-none font-display text-xs uppercase tracking-widest transition-all duration-300 border-2 ${
                  selectedPackage === pkg 
                    ? "bg-[#C9A962] border-[#C9A962] text-black shadow-[0_0_30px_#C9A962/30]" 
                    : "bg-transparent border-white/10 text-white/50 hover:border-[#C9A962]/50 hover:text-white"
                }`}
              >
                {packages[pkg].title}
              </button>
            ))}
          </div>

          {/* THE CAR MAP */}
          <div className={`relative transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            
            {/* Base Specimen Image */}
            <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
              <img 
                src="/images/tesla-ppf-base.png" 
                alt="Tesla Specimen" 
                className={`w-full max-w-4xl mx-auto transition-all duration-700 ${selectedPackage === 'full-car' ? 'brightness-110' : 'opacity-80'}`} 
              />
              
              {/* INTERACTIVE GLOW ZONES (SVG Overlays) */}
              <svg 
                viewBox="0 0 1000 600" 
                className="absolute inset-0 w-full h-full pointer-events-none z-20 mix-blend-screen"
              >
                {/* Hood Zone */}
                <path 
                  d="M100,320 L400,280 L480,310 L450,420 L150,450 Z" 
                  className={`transition-all duration-500 fill-[#C9A962] ${isActive('hood') ? 'opacity-30 blur-xl animate-pulse' : 'opacity-0'}`}
                />
                
                {/* Bumper/Front Zone */}
                <path 
                   d="M50,420 L150,450 L450,430 L480,500 L50,550 Z"
                   className={`transition-all duration-500 fill-[#C9A962] ${isActive('bumper') ? 'opacity-40 blur-2xl animate-pulse' : 'opacity-0'}`}
                />

                {/* Full Body Glow (Only for Full Car) */}
                <path 
                   d="M100,320 L800,250 L950,400 L950,550 L50,550 Z"
                   className={`transition-all duration-1000 fill-[#C9A962] ${isActive('body') ? 'opacity-20 blur-[100px]' : 'opacity-0'}`}
                />
              </svg>

              {/* Tactical Callouts (Desktop Only) */}
              <div className="hidden lg:block absolute inset-0 z-30 pointer-events-none font-mono">
                
                {/* Hood Label */}
                <div className={`absolute top-[40%] left-[25%] transition-all duration-500 ${isActive('hood') ? 'opacity-100 scale-100' : 'opacity-20 scale-95'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-px bg-[#C9A962]/50" />
                    <div className="space-y-1">
                      <p className="text-[10px] text-[#C9A962] font-bold tracking-widest">IMPACT_ZONE.01</p>
                      <p className="text-[9px] text-white/50 leading-none">FULL HOOD PROTECTION</p>
                    </div>
                  </div>
                </div>

                {/* Bumper Label */}
                <div className={`absolute bottom-[25%] left-[15%] transition-all duration-500 ${isActive('bumper') ? 'opacity-100 scale-100' : 'opacity-20 scale-95'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-px bg-[#C9A962]/50 rotate-45" />
                    <div className="space-y-1">
                      <p className="text-[10px] text-[#C9A962] font-bold tracking-widest">BUMPER_STRIKE</p>
                      <p className="text-[9px] text-white/50 leading-none">COMPLETE ADHESION</p>
                    </div>
                  </div>
                </div>

                {/* Full Body Label */}
                <div className={`absolute top-[45%] right-[15%] transition-all duration-700 ${isActive('body') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                   <div className="p-4 border border-[#C9A962]/30 bg-black/40 backdrop-blur-md">
                      <div className="flex items-center gap-2 mb-2">
                        <Crosshair size={12} className="text-[#C9A962]" />
                        <span className="text-[10px] text-[#C9A962] font-black tracking-[0.2em]">TOTAL ENCASEMENT</span>
                      </div>
                      <p className="text-[8px] text-white/40 leading-relaxed uppercase">Full vehicle coverage including roof, doors,<br/>and rear quarters. Maximum preservation.</p>
                   </div>
                </div>

              </div>
            </div>

            {/* Grid Backdrop for Car */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
              <div className="w-full h-full bg-[linear-gradient(to_right,#C9A962_1px,transparent_1px),linear-gradient(to_bottom,#C9A962_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

          </div>

          {/* Information & Action Footer */}
          <div className="relative z-40 mt-16 max-w-2xl mx-auto flex flex-col items-center gap-8">
             <div className="text-center space-y-3">
                <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.4em] mb-4">Tactical Coverage Analysis</p>
                <div className="flex items-baseline justify-center gap-4">
                   <h2 className="text-5xl font-black italic tracking-tighter text-white">
                      {packages[selectedPackage].price}
                   </h2>
                   {selectedPackage !== 'full-car' && <span className="font-mono text-xs text-white/30 uppercase tracking-widest italic">Est. Pricing</span>}
                </div>
                <p className="text-muted-foreground text-sm uppercase tracking-wide italic max-w-md">
                   {packages[selectedPackage].desc}
                </p>
             </div>

             <Button 
               onClick={() => openQuote(`PPF: ${packages[selectedPackage].title}`)}
               size="lg" 
               className="w-full max-w-sm h-16 bg-[#C9A962] text-black font-display text-sm font-black uppercase italic tracking-[0.2em] transition-all hover:bg-[#32e612] box-glow group"
             >
                DEPLOY PROTECTION SYSTEM
                <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
             </Button>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {[
                  { icon: <Shield size={16} />, label: "Self-Healing" },
                  { icon: <Sparkles size={16} />, label: "Ultra Gloss" },
                  { icon: <Zap size={16} />, label: "UV Barrier" },
                  { icon: <Target size={16} />, label: "Precision Fit" },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 border border-white/5 bg-white/5 rounded-lg">
                    <span className="text-[#C9A962]">{feature.icon}</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-white/50">{feature.label}</span>
                  </div>
                ))}
             </div>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}} />
    </div>
  );
};

export default PPF;
