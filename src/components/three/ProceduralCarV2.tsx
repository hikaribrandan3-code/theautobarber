import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

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
  HEADLIGHT_LEFT: 'headlightLeft',
  HEADLIGHT_RIGHT: 'headlightRight',
  TAILLIGHT_LEFT: 'taillightLeft',
  TAILLIGHT_RIGHT: 'taillightRight',
} as const;

interface ProceduralCarV2Props {
  selectedPackage?: 'partial' | 'full-front' | 'full-car';
  hoveredZone?: string | null;
  [key: string]: any;
}

export default function ProceduralCarV2({ 
  selectedPackage = 'partial',
  hoveredZone = null,
  ...props 
}: ProceduralCarV2Props) {
  const group = useRef<THREE.Group>(null!)
  
  // Subtle idle animation
  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.015
    }
  })

  const materials = useMemo(() => ({
    paint: new THREE.MeshPhysicalMaterial({
      color: 0xc0c0c0,
      metalness: 0.7,
      roughness: 0.3,
      clearcoat: 0.4,
      clearcoatRoughness: 0.3,
    }),
    
    ppf: new THREE.MeshPhysicalMaterial({
      color: 0xc8d8c8,
      metalness: 0.7,
      roughness: 0.04,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      emissive: new THREE.Color(0x39ff14),
      emissiveIntensity: 0.06,
    }),
    
    ppfHover: new THREE.MeshPhysicalMaterial({
      color: 0xc8d8c8,
      metalness: 0.7,
      roughness: 0.04,
      clearcoat: 1.0,
      emissive: new THREE.Color(0x39ff14),
      emissiveIntensity: 0.18,
    }),
    
    glass: new THREE.MeshPhysicalMaterial({
      color: 0x0a0a0a,
      metalness: 0.95,
      roughness: 0.02,
      transmission: 0.3,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    }),
    
    rubber: new THREE.MeshStandardMaterial({
      color: 0x151515,
      roughness: 0.9,
      metalness: 0.05,
    }),
    
    rim: new THREE.MeshStandardMaterial({
      color: 0xaaaaaa,
      roughness: 0.2,
      metalness: 0.9,
    }),
    
    // YELLOW HEADLIGHTS as requested
    headlight: new THREE.MeshStandardMaterial({
      color: 0xfff8e7,
      emissive: new THREE.Color(0xffd700),
      emissiveIntensity: 0.8,
      roughness: 0.1,
    }),
    
    headlightOff: new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.5,
    }),
    
    taillight: new THREE.MeshStandardMaterial({
      color: 0xcc0000,
      emissive: new THREE.Color(0xff0000),
      emissiveIntensity: 0.4,
    }),
    
    grille: new THREE.MeshStandardMaterial({
      color: 0x050505,
      roughness: 0.9,
    }),
    
    trim: new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.4,
      metalness: 0.8,
    }),
  }), [])

  const getZoneMaterial = (zone: string) => {
    const isHovered = hoveredZone === zone
    const protectedZones: Record<string, string[]> = {
      'partial': [
        ZONES.HOOD, ZONES.BUMPER_FRONT, 
        ZONES.MIRROR_LEFT, ZONES.MIRROR_RIGHT,
        ZONES.FENDER_LEFT, ZONES.FENDER_RIGHT,
        ZONES.HEADLIGHT_LEFT, ZONES.HEADLIGHT_RIGHT
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

  // Curved hood geometry - half cylinder for that swept look
  const curvedHoodGeometry = useMemo(() => {
    const geo = new THREE.CylinderGeometry(2.2, 2.2, 1.5, 32, 1, true, 0, Math.PI)
    geo.scale(1, 0.15, 1)
    geo.rotateZ(Math.PI / 2)
    geo.rotateY(Math.PI / 2)
    return geo
  }, [])

  // Curved trunk geometry
  const curvedTrunkGeometry = useMemo(() => {
    const geo = new THREE.CylinderGeometry(2.0, 2.0, 1.0, 32, 1, true, 0, Math.PI)
    geo.scale(1, 0.12, 1)
    geo.rotateZ(-Math.PI / 2)
    geo.rotateY(Math.PI / 2)
    return geo
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      
      {/* === CHASSIS / LOWER BODY === */}
      {/* Main lower body - wider, lower, sportier */}
      <RoundedBox
        args={[3.2, 0.5, 1.3]}
        radius={0.08}
        smoothness={8}
        position={[0, 0.35, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial {...materials.paint} />
      </RoundedBox>

      {/* Side skirts - lower and wider */}
      <RoundedBox
        args={[3.0, 0.15, 1.38]}
        radius={0.04}
        smoothness={4}
        position={[0, 0.18, 0]}
        castShadow
      >
        <meshStandardMaterial {...materials.trim} />
      </RoundedBox>

      {/* === FRONT SECTION === */}
      
      {/* Curved Hood - the swept sporty look */}
      <mesh 
        geometry={curvedHoodGeometry}
        material={getZoneMaterial(ZONES.HOOD)}
        position={[0.85, 0.55, 0]}
        castShadow
        name={ZONES.HOOD}
      />

      {/* Hood flat section connecting to windshield */}
      <RoundedBox
        args={[0.6, 0.08, 1.15]}
        radius={0.03}
        smoothness={4}
        position={[0.3, 0.62, 0]}
        castShadow
        name={ZONES.HOOD}
      >
        <meshPhysicalMaterial {...getZoneMaterial(ZONES.HOOD)} />
      </RoundedBox>

      {/* Front bumper - aggressive, lower */}
      <RoundedBox
        args={[0.4, 0.45, 1.35]}
        radius={0.06}
        smoothness={6}
        position={[1.6, 0.38, 0]}
        castShadow
        name={ZONES.BUMPER_FRONT}
      >
        <meshPhysicalMaterial {...getZoneMaterial(ZONES.BUMPER_FRONT)} />
      </RoundedBox>

      {/* Front grille - larger, more prominent */}
      <RoundedBox
        args={[0.08, 0.35, 0.9]}
        radius={0.02}
        smoothness={4}
        position={[1.82, 0.42, 0]}
      >
        <meshStandardMaterial {...materials.grille} />
      </RoundedBox>

      {/* Lower grille intake */}
      <RoundedBox
        args={[0.06, 0.15, 1.0]}
        radius={0.02}
        smoothness={4}
        position={[1.8, 0.22, 0]}
      >
        <meshStandardMaterial {...materials.grille} />
      </RoundedBox>

      {/* YELLOW HEADLIGHTS - Left */}
      <group position={[1.55, 0.52, 0.42]}>
        {/* Headlight housing */}
        <RoundedBox
          args={[0.15, 0.18, 0.28]}
          radius={0.04}
          smoothness={6}
          name={ZONES.HEADLIGHT_LEFT}
        >
          <meshPhysicalMaterial {...getZoneMaterial(ZONES.HEADLIGHT_LEFT)} />
        </RoundedBox>
        {/* Light glow effect */}
        <mesh position={[0.08, 0, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial color={0xffd700} transparent opacity={0.3} />
        </mesh>
      </group>

      {/* YELLOW HEADLIGHTS - Right */}
      <group position={[1.55, 0.52, -0.42]}>
        <RoundedBox
          args={[0.15, 0.18, 0.28]}
          radius={0.04}
          smoothness={6}
          name={ZONES.HEADLIGHT_RIGHT}
        >
          <meshPhysicalMaterial {...getZoneMaterial(ZONES.HEADLIGHT_RIGHT)} />
        </RoundedBox>
        <mesh position={[0.08, 0, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial color={0xffd700} transparent opacity={0.3} />
        </mesh>
      </group>

      {/* Front fenders - wider, more muscular */}
      <RoundedBox
        args={[0.7, 0.4, 0.3]}
        radius={0.06}
        smoothness={6}
        position={[0.9, 0.48, 0.55]}
        castShadow
        name={ZONES.FENDER_LEFT}
      >
        <meshPhysicalMaterial {...getZoneMaterial(ZONES.FENDER_LEFT)} />
      </RoundedBox>

      <RoundedBox
        args={[0.7, 0.4, 0.3]}
        radius={0.06}
        smoothness={6}
        position={[0.9, 0.48, -0.55]}
        castShadow
        name={ZONES.FENDER_RIGHT}
      >
        <meshPhysicalMaterial {...getZoneMaterial(ZONES.FENDER_RIGHT)} />
      </RoundedBox>

      {/* === CABIN / GREENHOUSE === */}
      
      {/* Main cabin body - tapered for aerodynamic look */}
      <RoundedBox
        args={[1.6, 0.55, 1.05]}
        radius={0.08}
        smoothness={8}
        position={[-0.3, 0.82, 0]}
        castShadow
      >
        <meshPhysicalMaterial {...materials.paint} />
      </RoundedBox>

      {/* Windshield - steeply raked */}
      <mesh position={[0.55, 0.95, 0]} rotation={[0, 0, -0.6]}>
        <planeGeometry args={[1.0, 0.9]} />
        <meshPhysicalMaterial {...materials.glass} />
      </mesh>

      {/* Rear window */}
      <mesh position={[-1.05, 0.92, 0]} rotation={[0, 0, 0.5]}>
        <planeGeometry args={[0.85, 0.7]} />
        <meshPhysicalMaterial {...materials.glass} />
      </mesh>

      {/* Side windows - Left */}
      <mesh position={[-0.3, 0.92, 0.53]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.3, 0.45]} />
        <meshPhysicalMaterial {...materials.glass} />
      </mesh>

      {/* Side windows - Right */}
      <mesh position={[-0.3, 0.92, -0.53]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[1.3, 0.45]} />
        <meshPhysicalMaterial {...materials.glass} />
      </mesh>

      {/* Pillars - B pillar (black) */}
      <RoundedBox
        args={[0.08, 0.6, 1.12]}
        radius={0.02}
        smoothness={4}
        position={[-0.3, 0.9, 0]}
      >
        <meshStandardMaterial {...materials.grille} />
      </RoundedBox>

      {/* === REAR SECTION === */}
      
      {/* Curved trunk */}
      <mesh 
        geometry={curvedTrunkGeometry}
        material={getZoneMaterial(ZONES.TRUNK)}
        position={[-1.15, 0.58, 0]}
        castShadow
        name={ZONES.TRUNK}
      />

      {/* Rear bumper */}
      <RoundedBox
        args={[0.35, 0.48, 1.35]}
        radius={0.06}
        smoothness={6}
        position={[-1.65, 0.4, 0]}
        castShadow
        name={ZONES.BUMPER_REAR}
      >
        <meshPhysicalMaterial {...getZoneMaterial(ZONES.BUMPER_REAR)} />
      </RoundedBox>

      {/* Rear diffuser */}
      <RoundedBox
        args={[0.1, 0.12, 1.0]}
        radius={0.02}
        smoothness={4}
        position={[-1.85, 0.18, 0]}
      >
        <meshStandardMaterial {...materials.grille} />
      </RoundedBox>

      {/* Taillights - Left */}
      <RoundedBox
        args={[0.08, 0.15, 0.3]}
        radius={0.03}
        smoothness={4}
        position={[-1.75, 0.55, 0.35]}
        name={ZONES.TAILLIGHT_LEFT}
      >
        <meshStandardMaterial {...materials.taillight} />
      </RoundedBox>

      {/* Taillights - Right */}
      <RoundedBox
        args={[0.08, 0.15, 0.3]}
        radius={0.03}
        smoothness={4}
        position={[-1.75, 0.55, -0.35]}
        name={ZONES.TAILLIGHT_RIGHT}
      >
        <meshStandardMaterial {...materials.taillight} />
      </RoundedBox>

      {/* === DOORS === */}
      
      {/* Left door - larger, more surface area */}
      <RoundedBox
        args={[1.0, 0.45, 0.08]}
        radius={0.03}
        smoothness={4}
        position={[-0.3, 0.55, 0.58]}
        castShadow
        name={ZONES.DOOR_LEFT}
      >
        <meshPhysicalMaterial {...getZoneMaterial(ZONES.DOOR_LEFT)} />
      </RoundedBox>

      {/* Right door */}
      <RoundedBox
        args={[1.0, 0.45, 0.08]}
        radius={0.03}
        smoothness={4}
        position={[-0.3, 0.55, -0.58]}
        castShadow
        name={ZONES.DOOR_RIGHT}
      >
        <meshPhysicalMaterial {...getZoneMaterial(ZONES.DOOR_RIGHT)} />
      </RoundedBox>

      {/* Door handles - flush modern style */}
      <RoundedBox args={[0.12, 0.04, 0.02]} radius={0.01} smoothness={4} position={[-0.1, 0.62, 0.62]}>
        <meshStandardMaterial {...materials.trim} />
      </RoundedBox>
      <RoundedBox args={[0.12, 0.04, 0.02]} radius={0.01} smoothness={4} position={[0.3, 0.62, 0.62]}>
        <meshStandardMaterial {...materials.trim} />
      </RoundedBox>
      <RoundedBox args={[0.12, 0.04, 0.02]} radius={0.01} smoothness={4} position={[-0.1, 0.62, -0.62]}>
        <meshStandardMaterial {...materials.trim} />
      </RoundedBox>
      <RoundedBox args={[0.12, 0.04, 0.02]} radius={0.01} smoothness={4} position={[0.3, 0.62, -0.62]}>
        <meshStandardMaterial {...materials.trim} />
      </RoundedBox>

      {/* === MIRRORS === */}
      
      {/* Left mirror - sport style, integrated */}
      <RoundedBox
        args={[0.2, 0.12, 0.18]}
        radius={0.04}
        smoothness={6}
        position={[0.45, 0.72, 0.62]}
        castShadow
        name={ZONES.MIRROR_LEFT}
      >
        <meshPhysicalMaterial {...getZoneMaterial(ZONES.MIRROR_LEFT)} />
      </RoundedBox>

      {/* Right mirror */}
      <RoundedBox
        args={[0.2, 0.12, 0.18]}
        radius={0.04}
        smoothness={6}
        position={[0.45, 0.72, -0.62]}
        castShadow
        name={ZONES.MIRROR_RIGHT}
      >
        <meshPhysicalMaterial {...getZoneMaterial(ZONES.MIRROR_RIGHT)} />
      </RoundedBox>

      {/* === WHEELS === */}
      
      {[
        { pos: [1.0, 0.22, 0.55], name: 'wheelFL' },
        { pos: [1.0, 0.22, -0.55], name: 'wheelFR' },
        { pos: [-1.0, 0.22, 0.55], name: 'wheelRL' },
        { pos: [-1.0, 0.22, -0.55], name: 'wheelRR' },
      ].map((wheel, i) => (
        <group key={i} position={wheel.pos as [number, number, number]}>
          {/* Tire */}
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.26, 0.26, 0.22, 32]} />
            <meshStandardMaterial {...materials.rubber} />
          </mesh>
          
          {/* Rim */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.17, 0.17, 0.23, 16]} />
            <meshStandardMaterial {...materials.rim} />
          </mesh>
          
          {/* Rim spokes detail */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.12, 0.12, 0.24, 5]} />
            <meshStandardMaterial {...materials.rim} />
          </mesh>
          
          {/* Brake caliper */}
          <mesh position={[0.12, 0.05, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.08, 0.12, 0.04]} />
            <meshStandardMaterial color={0xcc0000} />
          </mesh>
        </group>
      ))}

      {/* === BODY LINES / CHARACTER LINES === */}
      
      {/* Shoulder line - left */}
      <RoundedBox
        args={[3.0, 0.02, 0.04]}
        radius={0.01}
        smoothness={2}
        position={[0, 0.58, 0.64]}
      >
        <meshStandardMaterial {...materials.trim} />
      </RoundedBox>

      {/* Shoulder line - right */}
      <RoundedBox
        args={[3.0, 0.02, 0.04]}
        radius={0.01}
        smoothness={2}
        position={[0, 0.58, -0.64]}
      >
        <meshStandardMaterial {...materials.trim} />
      </RoundedBox>

      {/* Lower body crease - left */}
      <RoundedBox
        args={[3.0, 0.015, 0.03]}
        radius={0.005}
        smoothness={2}
        position={[0, 0.32, 0.66]}
      >
        <meshStandardMaterial {...materials.trim} />
      </RoundedBox>

      {/* Lower body crease - right */}
      <RoundedBox
        args={[3.0, 0.015, 0.03]}
        radius={0.005}
        smoothness={2}
        position={[0, 0.32, -0.66]}
      >
        <meshStandardMaterial {...materials.trim} />
      </RoundedBox>
    </group>
  )
}
