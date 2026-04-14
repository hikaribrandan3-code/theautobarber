import React from 'react';

export interface PPFFrontSVGProps {
  currentPackage: string;
  isZoneActive: (zoneId: string) => boolean;
  handleZoneClick: (zoneId: string) => void;
  setHoveredZone?: (zoneId: string | null) => void;
}

export default function PPFFrontSVG({ currentPackage, isZoneActive, handleZoneClick, setHoveredZone }: PPFFrontSVGProps) {
  const activeClass = 'fill-[rgba(57,255,20,0.25)] stroke-[#C9A962] stroke-[2.5]';
  const inactiveClass = 'fill-transparent stroke-[#c6c6c6] stroke-opacity-[0.15]';

  const getPathClass = (zoneId: string) => {
    return `transition-all duration-300 cursor-pointer ${isZoneActive(zoneId) ? activeClass : inactiveClass}`;
  };

  const onEnter = (zone: string) => setHoveredZone && setHoveredZone(zone);
  const onLeave = () => setHoveredZone && setHoveredZone(null);

  // Helper for rendering interactive paths
  const ZonePath = ({ id, d }: { id: string, d: string }) => (
    <path 
      className={getPathClass(id)}
      onClick={() => handleZoneClick(id)}
      onMouseEnter={() => onEnter(id)}
      onMouseLeave={onLeave}
      d={d}
    />
  );

  return (
    <svg className="w-full h-auto drop-shadow-2xl mx-auto" viewBox="0 150 800 400" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="400" cy="520" fill="rgba(0,0,0,0.5)" filter="blur(15px)" rx="320" ry="35"/>
      
      {/* Front Bumper */}
      <ZonePath id="bumper-front" d="M220,440 Q400,500 580,440 L570,395 Q400,410 230,395 Z" />
      
      {/* Headlights */}
      <ZonePath id="headlight-left" d="M230,395 Q210,380 220,360 Q240,370 250,385 Z" />
      <ZonePath id="headlight-right" d="M570,395 Q590,380 580,360 Q560,370 550,385 Z" />
      
      {/* Hood Full */}
      <ZonePath id="hood" d="M240,385 Q400,415 560,385 L530,295 Q400,285 270,295 Z" />
      
      {/* Hood Leading Edge (for Partial) */}
      <ZonePath id="hood-leading" d="M240,385 Q400,415 560,385 L550,360 Q400,375 250,360 Z" />
      
      {/* Fenders */}
      <ZonePath id="fender-left" d="M140,400 Q150,340 240,385 L270,295 Q200,300 160,330 Z" />
      <ZonePath id="fender-right" d="M660,400 Q650,340 560,385 L530,295 Q600,300 640,330 Z" />
      
      {/* Mirrors */}
      <ZonePath id="mirror-left" d="M260,280 Q250,265 285,265 L300,280 Z" />
      <ZonePath id="mirror-right" d="M540,280 Q550,265 515,265 L500,280 Z" />
      
      {/* Roof */}
      <ZonePath id="roof" d="M300,250 Q400,230 500,250 L470,195 Q400,185 330,195 Z" />
      
      {/* Doors */}
      <ZonePath id="door-left" d="M270,295 L380,300 L380,430 L230,440 Z" />
      <ZonePath id="door-right" d="M530,295 L420,300 L420,430 L570,440 Z" />
      
      {/* Door Cups */}
      <ZonePath id="door-cup-left" d="M340,320 Q350,315 360,320 L360,330 Q350,335 340,330 Z" />
      <ZonePath id="door-cup-right" d="M460,320 Q450,315 440,320 L440,330 Q450,335 460,330 Z" />
    </svg>
  );
}
