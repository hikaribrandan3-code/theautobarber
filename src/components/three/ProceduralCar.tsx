import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Zone configuration for PPF coverage
const ZONES = {
  HOOD: 'hood',
  BUMPER_FRONT: 'bumperFront',
  BUMPER_REAR: 'bumperRear',
  FENDER_LEFT: 'fenderLeft',
  FENDER_RIGHT: 'fenderRight',
  DOOR_LEFT: 'doorLeft',
  DOOR_RIGHT: 'doorRight',
  ROOF: 'roof',
  TRUNK: 'trunk',
  MIRROR_LEFT: 'mirrorLeft',
  MIRROR_RIGHT: 'mirrorRight',
  PILLAR_A: 'pillarA',
  PILLAR_B: 'pillarB',
  PILLAR_C: 'pillarC',
  HEADLIGHT_LEFT: 'headlightLeft',
  HEADLIGHT_RIGHT: 'headlightRight',
  TAILLIGHT_LEFT: 'taillightLeft',
  TAILLIGHT_RIGHT: 'taillightRight',
} as const;

interface ProceduralCarProps {
  selectedPackage?: 'partial' | 'full-front' | 'full-car';
  hoveredZone?: string | null;
  [key: string]: any;
}

export default function ProceduralCar({ 
  selectedPackage = 'partial',
  hoveredZone = null,
  ...props 
}: ProceduralCarProps) {
  const group = useRef<THREE.Group>(null!)
  
  // Gentle idle animation
  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02
    }
  })

  // Materials
  const materials = useMemo(() => ({
    // Factory paint - slightly dull
    paint: new THREE.MeshPhysicalMaterial({
      color: 0xc0c0c0, // Silver
      metalness: 0.6,
      roughness: 0.4,
      clearcoat: 0.3,
      clearcoatRoughness: 0.4,
    }),
    
    // PPF protected - high gloss with green tint
    ppf: new THREE.MeshPhysicalMaterial({
      color: 0xc8d8c8, // Slightly green-tinted silver
      metalness: 0.6,
      roughness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: new THREE.Color(0x39ff14),
      emissiveIntensity: 0.08,
    }),
    
    // PPF hovered - brighter green
    ppfHover: new THREE.MeshPhysicalMaterial({
      color: 0xc8d8c8,
      metalness: 0.6,
      roughness: 0.05,
      clearcoat: 1.0,
      emissive: new THREE.Color(0x39ff14),
      emissiveIntensity: 0.2,
    }),
    
    glass: new THREE.MeshPhysicalMaterial({
      color: 0x111111,
      metalness: 0.9,
      roughness: 0.05,
      transmission: 0.2,
      transparent: true,
      opacity: 0.9,
    }),
    
    rubber: new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.9,
      metalness: 0.1,
    }),
    
    rim: new THREE.MeshStandardMaterial({
      color: 0x888888,
      roughness: 0.3,
      metalness: 0.8,
    }),
    
    headlight: new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 0.5,
    }),
    
    taillight: new THREE.MeshStandardMaterial({
      color: 0xcc0000,
      emissive: new THREE.Color(0xff0000),
      emissiveIntensity: 0.3,
    }),
    
    grille: new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      roughness: 0.8,
    }),
  }), [])

  // Determine which zones are protected based on package
  const getZoneMaterial = (zone: string) => {
    const isHovered = hoveredZone === zone
    
    const protectedZones: Record<string, string[]> = {
      'partial': [
        ZONES.HOOD, ZONES.BUMPER_FRONT, 
        ZONES.MIRROR_LEFT, ZONES.MIRROR_RIGHT,
        ZONES.FENDER_LEFT, ZONES.FENDER_RIGHT
      ],
      'full-front': [
        ZONES.HOOD, ZONES.BUMPER_FRONT, 
        ZONES.FENDER_LEFT, ZONES.FENDER_RIGHT,
        ZONES.MIRROR_LEFT, ZONES.MIRROR_RIGHT,
        ZONES.HEADLIGHT_LEFT, ZONES.HEADLIGHT_RIGHT
      ],
      'full-car': Object.values(ZONES).filter((z: string) => 
        !z.includes('light') && !z.includes('wheel')
      )
    }
    
    const isProtected = protectedZones[selectedPackage]?.includes(zone)
    
    if (isProtected && isHovered) return materials.ppfHover
    if (isProtected) return materials.ppf
    return materials.paint
  }

  return (
    <group ref={group} {...props} dispose={null}>
      {/* === MAIN BODY === */}
      
      {/* Hood - Zone: hood */}
      <mesh 
        position={[0.6, 0.55, 0]}
        castShadow
        receiveShadow
        name={ZONES.HOOD}
        material={getZoneMaterial(ZONES.HOOD)}
      >
        <boxGeometry args={[1.4, 0.15, 0.9]} />
      </mesh>
      
      {/* Trunk deck - Zone: trunk */}
      <mesh 
        position={[-0.9, 0.58, 0]}
        castShadow
        name={ZONES.TRUNK}
        material={getZoneMaterial(ZONES.TRUNK)}
      >
        <boxGeometry args={[0.8, 0.12, 0.9]} />
      </mesh>
      
      {/* Cabin/Roof base - Zone: roof */}
      <mesh 
        position={[-0.1, 0.85, 0]}
        castShadow
        name={ZONES.ROOF}
        material={getZoneMaterial(ZONES.ROOF)}
      >
        <boxGeometry args={[1.2, 0.5, 0.85]} />
      </mesh>
      
      {/* === FRONT SECTION === */}
      
      {/* Front bumper - Zone: bumperFront */}
      <mesh 
        position={[1.35, 0.4, 0]}
        castShadow
        name={ZONES.BUMPER_FRONT}
        material={getZoneMaterial(ZONES.BUMPER_FRONT)}
      >
        <boxGeometry args={[0.3, 0.35, 0.95]} />
      </mesh>
      
      {/* Grille */}
      <mesh 
        position={[1.51, 0.45, 0]}
        material={materials.grille}
      >
        <boxGeometry args={[0.05, 0.2, 0.7]} />
      </mesh>
      
      {/* Left headlight - Zone: headlightLeft */}
      <mesh 
        position={[1.45, 0.55, 0.35]}
        name={ZONES.HEADLIGHT_LEFT}
        material={getZoneMaterial(ZONES.HEADLIGHT_LEFT)}
      >
        <boxGeometry args={[0.08, 0.12, 0.2]} />
      </mesh>
      
      {/* Right headlight - Zone: headlightRight */}
      <mesh 
        position={[1.45, 0.55, -0.35]}
        name={ZONES.HEADLIGHT_RIGHT}
        material={getZoneMaterial(ZONES.HEADLIGHT_RIGHT)}
      >
        <boxGeometry args={[0.08, 0.12, 0.2]} />
      </mesh>
      
      {/* Left fender - Zone: fenderLeft */}
      <mesh 
        position={[0.7, 0.5, 0.45]}
        castShadow
        name={ZONES.FENDER_LEFT}
        material={getZoneMaterial(ZONES.FENDER_LEFT)}
      >
        <boxGeometry args={[0.8, 0.4, 0.25]} />
      </mesh>
      
      {/* Right fender - Zone: fenderRight */}
      <mesh 
        position={[0.7, 0.5, -0.45]}
        castShadow
        name={ZONES.FENDER_RIGHT}
        material={getZoneMaterial(ZONES.FENDER_RIGHT)}
      >
        <boxGeometry args={[0.8, 0.4, 0.25]} />
      </mesh>
      
      {/* === REAR SECTION === */}
      
      {/* Rear bumper - Zone: bumperRear */}
      <mesh 
        position={[-1.35, 0.42, 0]}
        castShadow
        name={ZONES.BUMPER_REAR}
        material={getZoneMaterial(ZONES.BUMPER_REAR)}
      >
        <boxGeometry args={[0.25, 0.4, 0.95]} />
      </mesh>
      
      {/* Left taillight - Zone: taillightLeft */}
      <mesh 
        position={[-1.46, 0.55, 0.32]}
        name={ZONES.TAILLIGHT_LEFT}
        material={materials.taillight}
      >
        <boxGeometry args={[0.06, 0.15, 0.25]} />
      </mesh>
      
      {/* Right taillight - Zone: taillightRight */}
      <mesh 
        position={[-1.46, 0.55, -0.32]}
        name={ZONES.TAILLIGHT_RIGHT}
        material={materials.taillight}
      >
        <boxGeometry args={[0.06, 0.15, 0.25]} />
      </mesh>
      
      {/* === DOORS === */}
      
      {/* Left door - Zone: doorLeft */}
      <mesh 
        position={[-0.1, 0.52, 0.42]}
        castShadow
        name={ZONES.DOOR_LEFT}
        material={getZoneMaterial(ZONES.DOOR_LEFT)}
      >
        <boxGeometry args={[1.0, 0.45, 0.15]} />
      </mesh>
      
      {/* Right door - Zone: doorRight */}
      <mesh 
        position={[-0.1, 0.52, -0.42]}
        castShadow
        name={ZONES.DOOR_RIGHT}
        material={getZoneMaterial(ZONES.DOOR_RIGHT)}
      >
        <boxGeometry args={[1.0, 0.45, 0.15]} />
      </mesh>
      
      {/* === MIRRORS === */}
      
      {/* Left mirror - Zone: mirrorLeft */}
      <mesh 
        position={[0.4, 0.65, 0.5]}
        castShadow
        name={ZONES.MIRROR_LEFT}
        material={getZoneMaterial(ZONES.MIRROR_LEFT)}
      >
        <boxGeometry args={[0.15, 0.1, 0.08]} />
      </mesh>
      
      {/* Right mirror - Zone: mirrorRight */}
      <mesh 
        position={[0.4, 0.65, -0.5]}
        castShadow
        name={ZONES.MIRROR_RIGHT}
        material={getZoneMaterial(ZONES.MIRROR_RIGHT)}
      >
        <boxGeometry args={[0.15, 0.1, 0.08]} />
      </mesh>
      
      {/* === WINDOWS === */}
      
      {/* Windshield */}
      <mesh 
        position={[0.45, 0.95, 0]}
        rotation={[0, 0, -0.5]}
        material={materials.glass}
      >
        <planeGeometry args={[0.7, 0.55]} />
      </mesh>
      
      {/* Rear window */}
      <mesh 
        position={[-0.65, 0.95, 0]}
        rotation={[0, 0, 0.5]}
        material={materials.glass}
      >
        <planeGeometry args={[0.6, 0.5]} />
      </mesh>
      
      {/* Left side windows */}
      <mesh 
        position={[-0.1, 0.92, 0.43]}
        rotation={[0, 0, 0]}
        material={materials.glass}
      >
        <planeGeometry args={[0.9, 0.3]} />
      </mesh>
      
      {/* Right side windows */}
      <mesh 
        position={[-0.1, 0.92, -0.43]}
        rotation={[0, Math.PI, 0]}
        material={materials.glass}
      >
        <planeGeometry args={[0.9, 0.3]} />
      </mesh>
      
      {/* === WHEELS === */}
      
      {[
        { pos: [0.9, 0.2, 0.42], name: 'wheelFL' },
        { pos: [0.9, 0.2, -0.42], name: 'wheelFR' },
        { pos: [-0.8, 0.2, 0.42], name: 'wheelRL' },
        { pos: [-0.8, 0.2, -0.42], name: 'wheelRR' },
      ].map((wheel, i) => (
        <group key={i} position={wheel.pos as [number, number, number]}>
          {/* Tire */}
          <mesh 
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
            material={materials.rubber}
          >
            <cylinderGeometry args={[0.22, 0.22, 0.18, 24]} />
          </mesh>
          {/* Rim */}
          <mesh 
            rotation={[Math.PI / 2, 0, 0]}
            material={materials.rim}
          >
            <cylinderGeometry args={[0.14, 0.14, 0.19, 16]} />
          </mesh>
        </group>
      ))}
      
      {/* === DETAILS === */}
      
      {/* Door handles - Left */}
      <mesh position={[-0.1, 0.6, 0.51]} material={materials.rim}>
        <boxGeometry args={[0.08, 0.03, 0.02]} />
      </mesh>
      <mesh position={[0.3, 0.6, 0.51]} material={materials.rim}>
        <boxGeometry args={[0.08, 0.03, 0.02]} />
      </mesh>
      
      {/* Door handles - Right */}
      <mesh position={[-0.1, 0.6, -0.51]} material={materials.rim}>
        <boxGeometry args={[0.08, 0.03, 0.02]} />
      </mesh>
      <mesh position={[0.3, 0.6, -0.51]} material={materials.rim}>
        <boxGeometry args={[0.08, 0.03, 0.02]} />
      </mesh>
      
      {/* Side trim line */}
      <mesh position={[-0.1, 0.35, 0.48]} material={materials.rim}>
        <boxGeometry args={[2.8, 0.02, 0.02]} />
      </mesh>
      <mesh position={[-0.1, 0.35, -0.48]} material={materials.rim}>
        <boxGeometry args={[2.8, 0.02, 0.02]} />
      </mesh>
    </group>
  )
}
