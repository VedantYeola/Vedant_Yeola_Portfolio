
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Stars, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { AccentColor } from '../App';

const AnimatedShape = ({ isDarkMode, accent }: { isDarkMode: boolean; accent: AccentColor }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  const accentHex = {
    indigo: "#4f46e5",
    emerald: "#10b981",
    rose: "#f43f5e",
    cyan: "#06b6d4",
    orange: "#f97316"
  }[accent];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 8;
    meshRef.current.rotation.y = Math.sin(t / 4) / 8;
    meshRef.current.rotation.z = Math.sin(t / 4) / 20;
    meshRef.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color={accentHex}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Scene3D: React.FC<{ isDarkMode: boolean; accent: AccentColor }> = ({ isDarkMode, accent }) => {
  const accentHex = {
    indigo: "#4f46e5",
    emerald: "#10b981",
    rose: "#f43f5e",
    cyan: "#06b6d4",
    orange: "#f97316"
  }[accent];

  return (
    <div className={`absolute top-0 left-0 w-full h-full -z-10 transition-opacity duration-1000 ${isDarkMode ? 'opacity-30' : 'opacity-20'}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={isDarkMode ? 0.5 : 0.8} />
        <directionalLight position={[10, 10, 5]} intensity={isDarkMode ? 1 : 1.5} />
        <pointLight position={[-10, -10, -5]} color={accentHex} intensity={2} />
        <AnimatedShape isDarkMode={isDarkMode} accent={accent} />
        {isDarkMode && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />}
      </Canvas>
    </div>
  );
};

export default Scene3D;
