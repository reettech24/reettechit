import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function EarthSystem() {
  const earthRef = useRef();
  const orbitRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (orbitRef.current) {
      orbitRef.current.rotation.y = t * 0.3; // Earth orbit speed
    }
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.01; // Earth self-rotation
    }
  });

  return (
    <group ref={orbitRef}>
      {/* Earth */}
      <mesh ref={earthRef} position={[3, 1.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#2b6cb0" emissive="#1a202c" emissiveIntensity={0.2} />
      </mesh>

      {/* Moon */}
      <mesh position={[4, 1.6, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ccc" />
      </mesh>
    </group>
  );
}

export default function VirtualSpace() {
  return (
    <Canvas camera={{ position: [0, 4, 10], fov: 60 }}>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 5, 0]} intensity={2} color="#ffdd99" />
      <fog attach="fog" args={['#0a0a23', 10, 30]} />

      {/* Glowing stars */}
      <Stars radius={200} depth={60} count={8000} factor={5} saturation={0} fade speed={2} />

      {/* Sun */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial emissive="#ffaa00" emissiveIntensity={3} color="#ffaa00" />
      </mesh>

      {/* Earth system with orbit */}
      <EarthSystem />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#0f172a" metalness={0.3} roughness={0.8} />
      </mesh>

      {/* Scene boundaries / walls */}
      <mesh position={[0, 5, -20]}>
        <planeGeometry args={[50, 20]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      <Environment preset="sunset" />
      <OrbitControls autoRotate autoRotateSpeed={1.2} enableZoom={false} />
    </Canvas>
  );
}
