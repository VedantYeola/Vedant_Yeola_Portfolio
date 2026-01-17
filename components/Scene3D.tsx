import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshTransmissionMaterial, Environment, PivotControls } from '@react-three/drei';
import * as THREE from 'three';
import { AccentColor } from '../App';

const PremiumShape = ({ accent, isDarkMode }: { accent: AccentColor; isDarkMode: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t / 2) * 0.2;
    meshRef.current.rotation.y = Math.sin(t / 4) * 0.2;
    meshRef.current.rotation.z = Math.cos(t / 4) * 0.1;
  });

  // Monochrome toggle: Dark mode -> White/Silver, Light mode -> Dark Gray/Black
  const accentColor = isDarkMode ? '#ffffff' : '#1e293b';

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
      <Icosahedron ref={meshRef} args={[1, 15]} scale={2.8}>
        <MeshTransmissionMaterial
          backside={false}
          samples={16}
          resolution={512}
          thickness={0.2}
          roughness={0}
          anisotropy={1}
          chromaticAberration={0.05}
          color={accentColor}
        />
      </Icosahedron>

      {/* Internal accent core for depth */}
      <Icosahedron args={[0.5, 0]} scale={0.5}>
        <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={2} toneMapped={false} />
      </Icosahedron>
    </Float>
  );
};

const Scene3D: React.FC<{ isDarkMode: boolean; accent: AccentColor }> = ({ isDarkMode, accent }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-transparent to-transparent">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <Environment preset="city" />
        <PremiumShape accent={accent} isDarkMode={isDarkMode} />
        {/* Subtle background particles or fog could be added for more depth */}
        {/* <fog attach="fog" args={[isDarkMode ? '#020617' : '#f8fafc', 5, 20]} /> */}
      </Canvas>
    </div>
  );
};

export default Scene3D;
