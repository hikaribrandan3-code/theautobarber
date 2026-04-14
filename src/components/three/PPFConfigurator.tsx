import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Grid } from '@react-three/drei';
import * as THREE from 'three';
import ProceduralCarV2 from './ProceduralCarV2';

interface PPFSceneProps {
  activeZones: string[];
  selectedPackage: 'partial' | 'full-front' | 'full-car';
}

function CameraController({ selectedPackage }: { selectedPackage: string }) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(6, 3, 6));
  const targetLook = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    switch (selectedPackage) {
      case 'partial':
        // Close-up on hood/front
        targetPos.current.set(4, 2, 2.5);
        targetLook.current.set(1.2, 0, 0);
        break;
      case 'full-front':
        // Front 3/4 view
        targetPos.current.set(5, 2.5, 4);
        targetLook.current.set(0.5, 0, 0);
        break;
      case 'full-car':
        // Wide overview
        targetPos.current.set(6, 3.5, 6);
        targetLook.current.set(0, 0, 0);
        break;
    }
  }, [selectedPackage]);

  useFrame(() => {
    camera.position.lerp(targetPos.current, 0.03);
    camera.lookAt(targetLook.current);
  });

  return null;
}

function Scene({ selectedPackage }: { selectedPackage: 'partial' | 'full-front' | 'full-car' }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
      />
      <directionalLight position={[-5, 5, -5]} intensity={0.4} />
      <pointLight position={[0, 8, 0]} intensity={0.3} color="#C9A962" />
      
      {/* Environment for reflections */}
      <Environment preset="city" />

      {/* Camera Controller */}
      <CameraController selectedPackage={selectedPackage} />

      {/* Car */}
      <ProceduralCarV2 
        selectedPackage={selectedPackage} 
        hoveredZone={null} 
        scale={0.75}
        position={[0, -0.2, 0]}
        rotation={[0, Math.PI / 12, 0]}
      />

      {/* Ground */}
      <ContactShadows 
        position={[0, -0.9, 0]} 
        opacity={0.6} 
        scale={15} 
        blur={2.5} 
        far={4}
      />
      
      {/* Subtle Grid */}
      <Grid
        position={[0, -0.91, 0]}
        args={[30, 30]}
        cellSize={0.5}
        cellThickness={0.5}
        cellColor="#C9A962"
        sectionSize={2}
        sectionThickness={1}
        sectionColor="#C9A962"
        fadeDistance={25}
        fadeStrength={1}
        followCamera={false}
        infiniteGrid
      />

      {/* Orbit Controls */}
      <OrbitControls
        makeDefault
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={0.6}
        zoomSpeed={0.8}
        panSpeed={0.8}
        autoRotate={selectedPackage === 'full-car'}
        autoRotateSpeed={0.8}
        enablePan={false}
        minDistance={3}
        maxDistance={8}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2 - 0.1}
        target={[0, 0, 0]}
      />
    </>
  );
}

export default function PPFConfigurator({ activeZones, selectedPackage }: PPFSceneProps) {
  return (
    <div className="w-full h-[500px] lg:h-[650px] relative rounded-lg overflow-hidden" style={{ background: '#0a0a0a', touchAction: 'none' }}>
      <Canvas
        shadows
        camera={{ position: [6, 3, 6], fov: 40, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0a0a0a');
          gl.toneMappingExposure = 1.2;
        }}
      >
        <Scene selectedPackage={selectedPackage} />
      </Canvas>
      
      {/* Drag hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 select-none pointer-events-none">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
}
