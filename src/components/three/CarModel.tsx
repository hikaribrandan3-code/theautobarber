import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CarModelProps {
  activeZones: string[];
}

// Procedural low-poly sedan — each body panel is a named mesh for PPF zone targeting
export function CarModel({ activeZones }: CarModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Materials
  const factoryPaint = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#dcdcdc'), // Light silver/white base
    roughness: 0.2, // Smoother for better reflections
    metalness: 0.7, // More metallic
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
  }), []);

  const ppfMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#d0ffd0'),
    roughness: 0.05,
    metalness: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    emissive: new THREE.Color('#C9A962'),
    emissiveIntensity: 0.15,
    transparent: true,
    opacity: 0.92,
  }), []);

  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#1a2a3a'),
    roughness: 0.05,
    metalness: 0.1,
    transmission: 0.6,
    transparent: true,
    opacity: 0.4,
  }), []);

  const wheelMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#2a2a2a'),
    roughness: 0.6,
    metalness: 0.8,
  }), []);

  const tireMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#111111'),
    roughness: 0.9,
    metalness: 0.1,
  }), []);

  const lightMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#ffffff'),
    roughness: 0.1,
    metalness: 0.2,
    emissive: new THREE.Color('#ffffff'),
    emissiveIntensity: 0.3,
    transparent: true,
    opacity: 0.8,
  }), []);

  const tailLightMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#ff2020'),
    roughness: 0.1,
    metalness: 0.2,
    emissive: new THREE.Color('#ff0000'),
    emissiveIntensity: 0.2,
  }), []);

  const getMaterial = (zone: string) => activeZones.includes(zone) ? ppfMaterial : factoryPaint;

  // Animate material transitions via emissive pulse
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    ppfMaterial.emissiveIntensity = 0.12 + Math.sin(t * 2) * 0.05;
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      {/* ═══════ MAIN BODY (lower shell) ═══════ */}
      <mesh name="body-lower" material={getMaterial('doors')} castShadow receiveShadow>
        <boxGeometry args={[4.4, 0.55, 1.7]} />
        <mesh position={[0, 0, 0]} />
      </mesh>

      {/* ═══════ HOOD ═══════ */}
      <mesh name="hood" material={getMaterial('hood')} position={[1.4, 0.42, 0]} castShadow>
        <boxGeometry args={[1.5, 0.08, 1.6]} />
      </mesh>

      {/* ═══════ FRONT BUMPER ═══════ */}
      <mesh name="bumper" material={getMaterial('bumper')} position={[2.3, -0.05, 0]} castShadow>
        <boxGeometry args={[0.35, 0.55, 1.75]} />
      </mesh>

      {/* ═══════ FRONT FENDERS ═══════ */}
      <mesh name="fender-left" material={getMaterial('fenders')} position={[1.2, 0.1, 0.82]} castShadow>
        <boxGeometry args={[1.2, 0.7, 0.12]} />
      </mesh>
      <mesh name="fender-right" material={getMaterial('fenders')} position={[1.2, 0.1, -0.82]} castShadow>
        <boxGeometry args={[1.2, 0.7, 0.12]} />
      </mesh>

      {/* ═══════ CABIN / PILLARS ═══════ */}
      {/* A-Pillar Left */}
      <mesh name="pillar-a-left" material={getMaterial('pillars')} position={[0.65, 0.85, 0.72]} rotation={[0, 0, 0.35]} castShadow>
        <boxGeometry args={[0.08, 0.7, 0.06]} />
      </mesh>
      {/* A-Pillar Right */}
      <mesh name="pillar-a-right" material={getMaterial('pillars')} position={[0.65, 0.85, -0.72]} rotation={[0, 0, 0.35]} castShadow>
        <boxGeometry args={[0.08, 0.7, 0.06]} />
      </mesh>
      {/* B-Pillar Left */}
      <mesh name="pillar-b-left" material={getMaterial('pillars')} position={[-0.15, 0.75, 0.72]} castShadow>
        <boxGeometry args={[0.08, 0.65, 0.06]} />
      </mesh>
      {/* B-Pillar Right */}
      <mesh name="pillar-b-right" material={getMaterial('pillars')} position={[-0.15, 0.75, -0.72]} castShadow>
        <boxGeometry args={[0.08, 0.65, 0.06]} />
      </mesh>
      {/* C-Pillar Left */}
      <mesh name="pillar-c-left" material={getMaterial('pillars')} position={[-0.85, 0.78, 0.72]} rotation={[0, 0, -0.3]} castShadow>
        <boxGeometry args={[0.08, 0.6, 0.06]} />
      </mesh>
      {/* C-Pillar Right */}
      <mesh name="pillar-c-right" material={getMaterial('pillars')} position={[-0.85, 0.78, -0.72]} rotation={[0, 0, -0.3]} castShadow>
        <boxGeometry args={[0.08, 0.6, 0.06]} />
      </mesh>

      {/* ═══════ ROOF ═══════ */}
      <mesh name="roof" material={getMaterial('roof')} position={[-0.1, 1.1, 0]} castShadow>
        <boxGeometry args={[1.8, 0.06, 1.5]} />
      </mesh>

      {/* ═══════ DOORS ═══════ */}
      {/* Front door left */}
      <mesh name="door-fl" material={getMaterial('doors')} position={[0.35, 0.38, 0.86]} castShadow>
        <boxGeometry args={[1.0, 0.7, 0.04]} />
      </mesh>
      {/* Front door right */}
      <mesh name="door-fr" material={getMaterial('doors')} position={[0.35, 0.38, -0.86]} castShadow>
        <boxGeometry args={[1.0, 0.7, 0.04]} />
      </mesh>
      {/* Rear door left */}
      <mesh name="door-rl" material={getMaterial('doors')} position={[-0.55, 0.38, 0.86]} castShadow>
        <boxGeometry args={[0.85, 0.7, 0.04]} />
      </mesh>
      {/* Rear door right */}
      <mesh name="door-rr" material={getMaterial('doors')} position={[-0.55, 0.38, -0.86]} castShadow>
        <boxGeometry args={[0.85, 0.7, 0.04]} />
      </mesh>

      {/* ═══════ REAR QUARTER PANELS ═══════ */}
      <mesh name="rear-quarter-left" material={getMaterial('rear')} position={[-1.3, 0.1, 0.82]} castShadow>
        <boxGeometry args={[0.8, 0.7, 0.12]} />
      </mesh>
      <mesh name="rear-quarter-right" material={getMaterial('rear')} position={[-1.3, 0.1, -0.82]} castShadow>
        <boxGeometry args={[0.8, 0.7, 0.12]} />
      </mesh>

      {/* ═══════ TRUNK / REAR ═══════ */}
      <mesh name="trunk" material={getMaterial('rear')} position={[-1.5, 0.42, 0]} castShadow>
        <boxGeometry args={[1.0, 0.08, 1.6]} />
      </mesh>
      <mesh name="rear-bumper" material={getMaterial('rear')} position={[-2.15, -0.05, 0]} castShadow>
        <boxGeometry args={[0.3, 0.55, 1.75]} />
      </mesh>

      {/* ═══════ ROCKERS / SILLS ═══════ */}
      <mesh name="rocker-left" material={getMaterial('rockers')} position={[0, -0.2, 0.86]} castShadow>
        <boxGeometry args={[3.4, 0.12, 0.06]} />
      </mesh>
      <mesh name="rocker-right" material={getMaterial('rockers')} position={[0, -0.2, -0.86]} castShadow>
        <boxGeometry args={[3.4, 0.12, 0.06]} />
      </mesh>

      {/* ═══════ WINDSHIELD & REAR GLASS ═══════ */}
      <mesh name="windshield" material={glassMaterial} position={[0.7, 0.82, 0]}>
        <boxGeometry args={[0.06, 0.55, 1.4]} />
        <mesh rotation={[0, 0, 0.55]} />
      </mesh>
      <mesh name="rear-glass" material={glassMaterial} position={[-0.9, 0.82, 0]}>
        <boxGeometry args={[0.06, 0.55, 1.4]} />
      </mesh>
      {/* Side glass left */}
      <mesh name="side-glass-l" material={glassMaterial} position={[-0.1, 0.82, 0.76]}>
        <boxGeometry args={[1.5, 0.48, 0.04]} />
      </mesh>
      {/* Side glass right */}
      <mesh name="side-glass-r" material={glassMaterial} position={[-0.1, 0.82, -0.76]}>
        <boxGeometry args={[1.5, 0.48, 0.04]} />
      </mesh>

      {/* ═══════ HEADLIGHTS ═══════ */}
      <mesh name="headlight-left" material={activeZones.includes('headlights') ? ppfMaterial : lightMaterial} position={[2.35, 0.15, 0.6]} castShadow>
        <boxGeometry args={[0.12, 0.22, 0.35]} />
      </mesh>
      <mesh name="headlight-right" material={activeZones.includes('headlights') ? ppfMaterial : lightMaterial} position={[2.35, 0.15, -0.6]} castShadow>
        <boxGeometry args={[0.12, 0.22, 0.35]} />
      </mesh>

      {/* ═══════ TAILLIGHTS ═══════ */}
      <mesh name="taillight-left" material={tailLightMaterial} position={[-2.05, 0.15, 0.6]}>
        <boxGeometry args={[0.12, 0.22, 0.35]} />
      </mesh>
      <mesh name="taillight-right" material={tailLightMaterial} position={[-2.05, 0.15, -0.6]}>
        <boxGeometry args={[0.12, 0.22, 0.35]} />
      </mesh>

      {/* ═══════ SIDE MIRRORS ═══════ */}
      <mesh name="mirror-left" material={getMaterial('mirrors')} position={[0.85, 0.55, 0.95]} castShadow>
        <boxGeometry args={[0.14, 0.08, 0.15]} />
      </mesh>
      <mesh name="mirror-right" material={getMaterial('mirrors')} position={[0.85, 0.55, -0.95]} castShadow>
        <boxGeometry args={[0.14, 0.08, 0.15]} />
      </mesh>

      {/* ═══════ WHEELS ═══════ */}
      {[
        [1.35, -0.35, 0.9],   // FL
        [1.35, -0.35, -0.9],  // FR
        [-1.25, -0.35, 0.9],  // RL
        [-1.25, -0.35, -0.9], // RR
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          {/* Tire */}
          <mesh material={tireMaterial} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.3, 0.12, 8, 16]} />
          </mesh>
          {/* Rim */}
          <mesh material={wheelMaterial} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.15, 12]} />
          </mesh>
        </group>
      ))}

      {/* ═══════ FLOOR / UNDERSIDE ═══════ */}
      <mesh position={[0, -0.28, 0]}>
        <boxGeometry args={[4.2, 0.02, 1.65]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
    </group>
  );
}
