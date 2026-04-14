import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Sparkles, Zap, Target, Gauge, Fingerprint, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const PaintCorrection = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();
  const [sliderPos, setSliderPos] = useState(50);
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (isMoving) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
      const pos = ((x - rect.left) / rect.width) * 100;
      setSliderPos(Math.max(0, Math.min(100, pos)));
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 selection:bg-[#C9A962] selection:text-white w-full overflow-x-hidden">
      <SEO 
        title="Paint Correction Seattle, WA | Mirror Finish Restoration"
        description="Seattle's master paint correction specialists. We remove swirls, scratches, and oxidation permanently. The Auto Barber restores clear coat to Level-0 clarity."
      />
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A962]/30 bg-[#C9A962]/5 text-[#C9A962] font-display text-[10px] uppercase tracking-[0.3em] italic">
             <Gauge size={12} className="animate-pulse" />
             <span className="lg:hidden text-[9px]">CRAFTSMANSHIP · SEATTLE'S FINESTAND · THE BARBER</span>
             <span className="hidden lg:inline">RESTORATION / THE BARBER'S STANDARD</span>
          </div>
          <h1 className="text-5xl lg:text-9xl font-display font-black italic uppercase tracking-tighter leading-[0.8]">
            SEATTLE WA <br className="lg:hidden"/><span className="text-[#C9A962] text-glow">RESTORATION</span>
          </h1>
          <p className="font-mono text-xs lg:text-sm uppercase tracking-[0.4em] text-muted-foreground max-w-2xl mx-auto italic">
            <span className="lg:hidden text-white/90 normal-case tracking-widest not-italic leading-relaxed">The Seattle environment is tough on paint. Every swirl and scratch is an imperfection on your investment. We don't just "buff" — we diagnose. We remove defects permanently to restore Level-0 surface clarity.</span>
            <span className="hidden lg:inline">PROFESSIONAL CLEAR COAT RESURFACING / THE MASTER LEVEL FINISH</span>
          </p>
          
          {/* Mobile Trust Bar */}
          <div className="lg:hidden mt-8 grid grid-cols-2 gap-3 py-4 border-y border-white/5 bg-white/5">
            {[
              "MASTER CRAFTSMANSHIP",
              "CLEAR COAT DIAGNOSTICS",
              "WET SANDING CAPABLE",
              "THE SEATTLE STANDARD"
            ].map(trust => (
              <div key={trust} className="flex items-center gap-2 px-1">
                <span className="text-[#C9A962] text-xs">✓</span>
                <span className="text-[8px] font-mono font-black tracking-widest text-muted-foreground leading-tight uppercase">{trust}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Simulation */}
        <div className="max-w-5xl mx-auto mb-24">
          <div 
            className="relative aspect-video overflow-hidden cursor-ew-resize border border-white/10 rounded-xl select-none"
            onMouseDown={() => setIsMoving(true)}
            onMouseUp={() => setIsMoving(false)}
            onMouseLeave={() => setIsMoving(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsMoving(true)}
            onTouchEnd={() => setIsMoving(false)}
            onTouchMove={handleMouseMove}
          >
            {/* After Image */}
            <img 
              src="/images/portfolio/paint-correction-5050.jpg" 
              alt="Mirror Finish After" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            
            {/* Before Overlay (Left Side) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75 grayscale brightness-50"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
               <img 
                 src="/images/portfolio/paint-correction-5050.jpg" 
                 alt="Swirl Marks Before" 
                 className="absolute inset-0 w-full h-full object-cover" 
               />
               <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay" />
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-[#C9A962] z-30 pointer-events-none shadow-[0_0_20px_#C9A962]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black border-2 border-[#C9A962] rounded-full flex items-center justify-center">
                 <div className="flex gap-1">
                   <div className="w-1 h-3 bg-[#C9A962]" />
                   <div className="w-1 h-3 bg-[#C9A962]" />
                 </div>
              </div>
            </div>

            {/* Tactical Labels */}
            <div className="absolute top-4 left-4 z-40 px-2 py-1 bg-red-600 text-white font-mono text-[8px] uppercase tracking-widest font-black">
              SWIRL DAMAGE DETECTED
            </div>
            <div className="absolute top-4 right-4 z-40 px-2 py-1 bg-[#C9A962] text-white font-mono text-[8px] uppercase tracking-widest font-black">
              THE BARBER'S CLARITY
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-[10px] text-muted-foreground uppercase tracking-widest italic">
            <span className="lg:hidden">Drag to see the difference. This is a real car, real result.</span>
            <span className="hidden lg:inline">Slide to visualize stage-two paint restoration</span>
          </p>
        </div>

        {/* Service Tiers */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
           <div className="space-y-8">
              <div className="space-y-4">
                 <h3 className="text-2xl lg:text-3xl font-black italic uppercase tracking-tighter text-white">THE CORRECTION PROCESS</h3>
                 <p className="text-muted-foreground leading-relaxed">
                    <span className="lg:hidden text-xs uppercase tracking-widest">We take a surgical approach. Before a pad touches your car, we measure clear coat depth and analyze paint hardness. We don't hide scratches with fillers — we level the surface through precision mechanical restoration. The result? A true Level-0 mirror finish.</span>
                    <span className="hidden lg:inline">Master-level paint correction is the strategic removal of surface imperfections through surgical machine polishing. Backed by 15 years of experience, we restore your paint to Level-0 clarity — removing defects forever, never hiding them.</span>
                 </p>
              </div>

              <div className="space-y-6">
                 <div className="p-6 border border-white/5 bg-white/5 space-y-3">
                    <div className="flex items-center gap-2 text-[#C9A962]">
                      <Target size={16} />
                      <h4 className="font-display text-lg uppercase tracking-widest font-black italic">THE TRIM (1-STEP)</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-tight italic">
                       <span className="lg:hidden normal-case not-italic tracking-wider text-[10px]">Light swirls, minor hazing, dull finish. Perfect for newer cars or well-kept vehicles that just need a refresh before ceramic coating.</span>
                       <span className="hidden lg:inline">Removes light swirl marks and increases depth. Perfect for newer vehicles or well-maintained specimens.</span>
                    </p>
                 </div>

                 <div className="p-6 border border-[#C9A962]/20 bg-[#C9A962]/5 space-y-3">
                    <div className="flex items-center gap-2 text-[#C9A962]">
                      <Zap size={16} />
                      <h4 className="font-display text-lg uppercase tracking-widest font-black italic">THE CUT (2-STEP MAJOR)</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-tight italic">
                       <span className="lg:hidden normal-case not-italic tracking-wider text-[10px]">Heavy swirl marks, deep scratches, oxidation, and years of wash damage. We compound hard, then refine to a mirror finish. 85–95% of all defects removed. This is the one.</span>
                       <span className="hidden lg:inline">Heavy compounding followed by fine polishing. Removes deep scratches, 85-95% of imperfections, and restores showroom clarity.</span>
                    </p>
                 </div>
              </div>

              <div className="space-y-4">
                <p className="lg:hidden text-xs text-[#C9A962] uppercase font-black tracking-[0.2em] font-mono text-center animate-pulse">We come to you. Most corrections completed in a single visit.</p>
                <Button 
                  onClick={() => openQuote("Paint Correction")}
                  size="lg" 
                  className="w-full h-16 bg-[#C9A962] text-black font-display text-sm font-black uppercase italic tracking-[0.2em] transition-all hover:bg-[#32e612] box-glow group"
                >
                  <span className="lg:hidden">GET MY PAINT CORRECTION QUOTE →</span>
                  <span className="hidden lg:inline">REQUEST CORRECTION QUOTE</span>
                  <span className="ml-3 transition-transform group-hover:translate-x-1 hidden lg:inline">→</span>
                </Button>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Search size={20} />, label: "Inspection", desc: "Digital clear coat measurement & finish analysis." },
                { icon: <Fingerprint size={20} />, label: "Paint Chemistry", desc: "Custom compound pairing for specific clear coat hardness." },
                { icon: <Gauge size={20} />, label: "Precision", desc: "Rotary & dual-action mechanical restoration." },
                { icon: <Sparkles size={20} />, label: "Final Clarity", desc: "Mirror-finish depth & long-term gloss preservation." },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/5 bg-white/5 space-y-3 hover:border-[#C9A962]/30 transition-all">
                   <div className="text-[#C9A962]">{item.icon}</div>
                   <h5 className="font-mono text-[10px] uppercase font-black text-white">{item.label}</h5>
                   <p className="text-[9px] text-muted-foreground leading-relaxed italic uppercase">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* MASTER LEVEL WET SANDING SECTION */}
        <div className="mt-32 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2 space-y-6">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A962]/30 bg-[#C9A962]/5 text-[#C9A962] font-mono text-[9px] uppercase tracking-[0.3em]">
                  <Target size={12} />
                  <span>ADVANCED SERVICE</span>
               </div>
               <h3 className="text-3xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none text-white text-center lg:text-left">MASTER LEVEL <br/><span className="text-[#C9A962]">WET SANDING</span></h3>
               <p className="font-mono text-xs text-muted-foreground leading-relaxed uppercase tracking-widest italic">
                 Most detailers won't touch a sanding block. We specialize in it. To achieve a true "show-ready" mirror finish without "orange peel" texture, we level the clear coat through multi-stage precision wet sanding. Level 0 perfection for the most discerning Seattle owners.
               </p>
               <ul className="space-y-3">
                  {['Orange Peel Removal', 'Deep Scratch Leveling', 'Show-Ready Texture Correction', 'Precision Hand Block Finishing'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-[10px] font-mono font-black uppercase tracking-widest text-[#e5e1e0]">
                      <div className="w-1.5 h-1.5 bg-[#C9A962] rounded-full shadow-[0_0_8px_#C9A962]"></div>
                      {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>

        {/* PRECISION PAINT CHIP REPAIR SECTION */}
        <div className="mt-32 max-w-6xl mx-auto border-t border-white/5 pt-24 pb-12">
            <div className="text-center mb-16 space-y-4">
              <h3 className="text-3xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none text-white">PRECISION <span className="text-[#C9A962]">PAINT CHIP</span> REPAIR</h3>
              <p className="font-mono text-[10px] lg:text-xs text-muted-foreground uppercase tracking-[0.3em] lg:tracking-[0.4em] max-w-2xl mx-auto">NAPLES' DR. COLORCHIP & HAND-LEVELING SPECIALISTS</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { title: 'DIAGNOSE & PREP', desc: 'Surgically cleaning the chip and surrounding paint to ensure permanent bond.' },
                 { title: 'LAYERED FILL', desc: 'Precision color-matching for your factory paint code. We layer to build height.' },
                 { title: 'LEVEL & POLISH', desc: 'The most critical step. We level the repair to the clear coat and polish to match texture.' }
               ].map((step, i) => (
                 <div key={i} className="p-8 bg-white/5 border border-white/5 space-y-4 hover:bg-[#C9A962]/5 hover:border-[#C9A962]/20 transition-all group">
                    <span className="font-mono text-2xl font-black italic text-[#C9A962] opacity-50 group-hover:opacity-100 transition-all">0{i+1}</span>
                    <h4 className="font-mono text-sm font-black uppercase tracking-widest text-white">{step.title}</h4>
                    <p className="text-[10px] font-mono text-muted-foreground leading-relaxed uppercase italic tracking-widest">{step.desc}</p>
                 </div>
               ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button 
                onClick={() => openQuote("Paint Restoration Bundle")}
                className="bg-transparent border border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-black px-6 lg:px-12 py-8 font-black uppercase tracking-[0.3em] transition-all text-xs lg:text-base"
              >
                REQUEST RESTORATION BUNDLE →
              </Button>
            </div>
        </div>


      </div>
    </div>
  );
};

export default PaintCorrection;
