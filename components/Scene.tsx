
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Aliasing Three.js intrinsic elements to avoid JSX.IntrinsicElements type errors
const Group = 'group' as any;
const Mesh = 'mesh' as any;
const OctahedronGeometry = 'octahedronGeometry' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;
const DodecahedronGeometry = 'dodecahedronGeometry' as any;
const AmbientLight = 'ambientLight' as any;
const Fog = 'fog' as any;

const ParticleCloud = ({ theme }: { theme: 'light' | 'dark' }) => {
    const ref = useRef<THREE.Points>(null);

    const sphere = useMemo(() => {
        const particles = new Float32Array(3000 * 3);
        for (let i = 0; i < 3000; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 10 + Math.random() * 5; // Radius between 10 and 15

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            particles[i * 3] = x;
            particles[i * 3 + 1] = y;
            particles[i * 3 + 2] = z;
        }
        return particles;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <Group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={theme === 'dark' ? "#6366f1" : "#3b82f6"}
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={theme === 'dark' ? 0.6 : 0.8}
                />
            </Points>
        </Group>
    );
};

const FloatingShapes = ({ theme }: { theme: 'light' | 'dark' }) => {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Mesh position={[4, 2, -5]} rotation={[0, 0, 0]}>
                <OctahedronGeometry args={[1, 0]} />
                <MeshStandardMaterial color={theme === 'dark' ? "#3b82f6" : "#2563eb"} wireframe transparent opacity={0.2} />
            </Mesh>
            <Mesh position={[-4, -3, -5]} rotation={[0, Math.PI / 4, 0]}>
                <DodecahedronGeometry args={[1.5, 0]} />
                <MeshStandardMaterial color={theme === 'dark' ? "#8b5cf6" : "#7c3aed"} wireframe transparent opacity={0.15} />
            </Mesh>
        </Float>
    )
}

const SceneContent = ({ theme }: { theme: 'light' | 'dark' }) => {
    return (
        <>
            <AmbientLight intensity={0.5} />
            <ParticleCloud theme={theme} />
            <FloatingShapes theme={theme} />
            {theme === 'dark' && (
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            )}
        </>
    );
};

interface SceneProps {
    theme: 'light' | 'dark';
}

export const Scene = ({ theme }: SceneProps) => {
    return (
        <div className="absolute inset-0 -z-10 opacity-70 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                <SceneContent theme={theme} />
                <Fog attach="fog" args={[theme === 'dark' ? '#0F0A08' : '#f8fafc', 10, 40]} />
            </Canvas>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 dark:from-[#0F0A08]/10 via-transparent to-white dark:to-[#0F0A08]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0F0A08] via-transparent to-transparent" />
            <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${theme === 'dark' ? 'from-indigo-900/10' : 'from-blue-200/20'} via-transparent to-transparent`} />
        </div>
    );
};
