import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingOrb = ({ position, color, speed, distort, radius }) => {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
  });
  return (
    <Float speed={speed * 2} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={mesh} position={position}>
        <sphereGeometry args={[radius, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.15}
          metalness={0.7}
          distort={distort}
          speed={speed}
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
};

const GlassTorusKnot = () => {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.08;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.12;
  });
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={mesh} position={[3, 0.5, -2]}>
        <torusKnotGeometry args={[1.2, 0.35, 200, 32]} />
        <MeshDistortMaterial
          color="#c084fc"
          roughness={0.1}
          metalness={0.85}
          distort={0.15}
          speed={1.5}
          transparent
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
};

const WobbleRing = ({ position, color, scale }) => {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.z = state.clock.elapsedTime * 0.1;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={mesh} position={position} scale={scale}>
        <torusGeometry args={[1, 0.05, 32, 100]} />
        <MeshWobbleMaterial
          color={color}
          factor={0.3}
          speed={2}
          transparent
          opacity={0.3}
          metalness={0.8}
          roughness={0.15}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const points = useRef();
  const count = 300;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return pos;
  }, []);

  useFrame((state) => {
    points.current.rotation.y = state.clock.elapsedTime * 0.02;
    points.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#a78bfa"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

const GridPlane = () => {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.position.z = -((state.clock.elapsedTime * 0.5) % 2);
  });
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -4, 0]}>
      <planeGeometry args={[40, 40, 40, 40]} />
      <meshBasicMaterial
        color="#c4b5fd"
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  );
};

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} color="#e9d5ff" />
        <directionalLight position={[-5, -2, 3]} intensity={0.3} color="#c084fc" />
        <pointLight position={[0, 3, 0]} intensity={0.8} color="#a78bfa" distance={15} />
        <pointLight position={[-4, -2, 4]} intensity={0.4} color="#ddd6fe" distance={12} />

        {/* Main central orb */}
        <FloatingOrb position={[-2.5, 0.5, 0]} color="#a78bfa" speed={0.4} distort={0.4} radius={1.8} />

        {/* Secondary orbs */}
        <FloatingOrb position={[4, 2, -3]} color="#c4b5fd" speed={0.6} distort={0.3} radius={1} />
        <FloatingOrb position={[-4, -2.5, -2]} color="#ddd6fe" speed={0.5} distort={0.25} radius={0.7} />
        <FloatingOrb position={[1, -3, -1]} color="#ede9fe" speed={0.35} distort={0.2} radius={0.5} />

        {/* Glass torus knot */}
        <GlassTorusKnot />

        {/* Wireframe rings */}
        <WobbleRing position={[-3, 2, -3]} color="#a78bfa" scale={1.5} />
        <WobbleRing position={[2, -1, -4]} color="#7c3aed" scale={2} />

        {/* Floating particles */}
        <ParticleField />

        {/* Grid floor */}
        <GridPlane />
      </Canvas>
    </div>
  );
}
