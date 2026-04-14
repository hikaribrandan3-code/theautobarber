import { useEffect, useState } from "react";
import { toast } from "sonner";
import { MapPin, ArrowRight, Target, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

interface City {
  id: string;
  name: string;
  x: number;
  y: number;
  dist: string;
  time: string;
  isCenter?: boolean;
}

const cities: City[] = [
  { id: "seattle", name: "SEATTLE", x: 200, y: 200, dist: "0 MI", time: "0 MIN", isCenter: true },
  { id: "bellevue", name: "BELLEVUE", x: 250, y: 180, dist: "10 MI", time: "~15 MIN" },
  { id: "redmond", name: "REDMOND", x: 280, y: 140, dist: "16 MI", time: "~20 MIN" },
  { id: "kirkland", name: "KIRKLAND", x: 240, y: 120, dist: "12 MI", time: "~18 MIN" },
  { id: "tacoma", name: "TACOMA", x: 180, y: 340, dist: "32 MI", time: "~45 MIN" },
];

interface ServiceRadarProps {
  onCityClick?: (city: string) => void;
}

const ServiceRadar = ({ onCityClick }: ServiceRadarProps) => {
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);

  const activeCity = hoveredCity || selectedCity;

  const handleCityInteraction = (city: City) => {
    setSelectedCity(city);
    if (onCityClick) {
      onCityClick(city.name.replace(/\[.*\]|_|\./g, ' ').trim());
      toast.success(`Quote request started for ${city.name.split('_').join(' ')}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full py-12 flex flex-col items-center selection:bg-[#C9A962] selection:text-black">
      
      <div className="text-center mb-8 space-y-2">
        <h3 className="font-mono text-xs uppercase tracking-[0.4em] text-[#C9A962] font-bold">
          THE AUTO BARBER SERVICE LOCATIONS
        </h3>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground italic">
          Regional Service Coverage / Active Response Area
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-5xl mx-auto px-4">
        
        {/* Radar Map */}
        <div className="relative w-full max-w-[400px] aspect-square rounded-full border border-[#C9A962]/20 bg-black/40 overflow-hidden mx-auto lg:mx-0">
          
          {/* Sonar Sweep Animation (Extremely slow and lowkey) */}
          <div 
            className={`absolute inset-0 origin-center z-10 pointer-events-none transition-opacity duration-500 ${hoveredCity ? 'opacity-10 grayscale' : 'opacity-100'}`}
            style={{ animation: hoveredCity ? 'none' : 'radar-sweep 30s linear infinite' }}
          >
            <div className="w-full h-1/2 bg-gradient-to-t from-[#C9A962]/10 to-transparent border-l border-[#C9A962]/20" />
          </div>

          {/* Global Grid Overlay */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-0 w-full h-px bg-[#C9A962]" />
              <div className="absolute top-0 left-1/2 w-px h-full bg-[#C9A962]" />
          </div>

          <svg viewBox="0 0 400 400" className="relative z-20 w-full h-full drop-shadow-[0_0_15px_#C9A962/20]">
            {/* Concentric Circles */}
            <circle cx="200" cy="200" r="50" fill="none" stroke="#C9A962" strokeWidth="0.5" strokeDasharray="4 4" className="opacity-20" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="#C9A962" strokeWidth="0.5" strokeDasharray="4 4" className="opacity-20" />
            <circle cx="200" cy="200" r="150" fill="none" stroke="#C9A962" strokeWidth="1" strokeDasharray="8 8" className="opacity-40" />

            {/* City Markers */}
            {cities.map((city) => {
              const isHovered = hoveredCity?.id === city.id;
              const isSelected = selectedCity.id === city.id;
              const isAnyHovered = !!hoveredCity;

              return (
                <g 
                  key={city.id}
                  className="cursor-crosshair transition-all duration-300"
                  onMouseEnter={() => setHoveredCity(city)}
                  onMouseLeave={() => setHoveredCity(null)}
                  onClick={() => handleCityInteraction(city)}
                  style={{ opacity: isAnyHovered && !isHovered ? 0.3 : 1 }}
                >
                  {/* Outer Glow Ring (Tactical Pulse) */}
                  <circle 
                    cx={city.x} cy={city.y} r={isHovered ? "15" : "10"} 
                    fill="none" stroke="#C9A962" strokeWidth="1.5" 
                    className={`transition-all duration-300 ${isSelected ? '' : 'opacity-0'}`} 
                    style={isSelected ? { animation: 'slow-radar-pulse 8s ease-in-out infinite' } : {}}
                  />
                  
                  {/* Blip Dot */}
                  <circle 
                    cx={city.x} cy={city.y} 
                    r={city.isCenter ? (isHovered ? "8" : "6") : (isHovered ? "6" : "4")} 
                    fill={isSelected || isHovered ? "#C9A962" : "#ffffff"} 
                    className={`transition-all duration-300 ${isSelected ? 'shadow-[0_0_15px_#C9A962]' : ''}`}
                  />

                  {/* Name Label */}
                  <text 
                    x={city.x + (city.x > 200 ? 15 : -15)} 
                    y={city.y + 20} 
                    textAnchor={city.x > 200 ? "start" : "end"}
                    className={`font-mono text-[10px] uppercase tracking-tighter transition-all duration-300 ${isHovered || isSelected ? 'fill-[#C9A962] font-black' : 'fill-white/80 font-bold'}`}
                    style={{ textShadow: '0 0 10px rgba(0,0,0,0.8)' }}
                  >
                    {city.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Dynamic Tactical Info Panel */}
        <div className="flex flex-col gap-6 lg:border-l lg:border-[#C9A962]/10 lg:pl-12">
          
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#C9A962]">
                <Target size={14} style={{ animation: 'pulse-slow 6s ease-in-out infinite' }} />
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#C9A962]/70 mb-1">PRECISION STATUS</p>
              </div>
              <h3 className="text-xl font-black italic tracking-tighter uppercase mb-4">SERVICE AREA ACTIVE</h3>
              <h4 className="text-3xl font-black italic uppercase tracking-tighter text-white">
                {activeCity.name}
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-white/5 bg-white/5 rounded-none backdrop-blur-sm group hover:border-[#C9A962]/30 transition-colors">
                <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground mb-1">Travel Distance</p>
                <div className="flex items-center gap-2">
                  <Navigation size={12} className="text-[#C9A962]" />
                  <p className="text-xl font-bold font-mono text-white text-glow">{activeCity.dist}</p>
                </div>
              </div>
              <div className="p-4 border border-white/5 bg-white/5 rounded-none backdrop-blur-sm group hover:border-[#C9A962]/30 transition-colors">
                <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground mb-1">Estimated Arrival</p>
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-[#C9A962]" />
                  <p className="text-xl font-bold font-mono text-white text-glow">{activeCity.time}</p>
                </div>
              </div>
            </div>

            <div className="p-4 border border-[#C9A962]/20 bg-[#C9A962]/5 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C9A962]" style={{ animation: 'pulse-slow 6s ease-in-out infinite' }} />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-white">Service Available</span>
              </div>
              <p className="text-[10px] text-muted-foreground uppercase leading-relaxed italic">
                 Mobile Detailing fully operational in this area. Our specialized units are optimized for local service.
              </p>
            </div>

            <Button 
              onClick={() => handleCityInteraction(activeCity)}
              className="w-full h-14 bg-[#C9A962] text-black font-display text-xs uppercase tracking-[0.2em] font-black italic transition-all hover:bg-[#C9A962]/90 group rounded-none"
            >
              REQUEST SERVICE IN THIS AREA
              <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="font-mono text-[8px] text-muted-foreground text-center italic uppercase opacity-50">
            * Location data updated in real-time / Seattle North active
          </p>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slow-radar-pulse {
          0%, 85% { opacity: 0.3; transform: scale(1); }
          90% { opacity: 1; transform: scale(1.15); }
          95%, 100% { opacity: 0.3; transform: scale(1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}} />
    </div>
  );
};

export default ServiceRadar;
