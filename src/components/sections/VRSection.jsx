import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Box, Stars } from '@react-three/drei';
import {
  OrbitControls,
  Stars,
  Plane,
  Environment,
  Box,
} from "@react-three/drei";
import * as THREE from "three";
import VirtualSpace from "./VirtualSpace";

function VRModel() {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 backdrop-blur-md relative">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} />
        <fog attach="fog" args={["#0a0a23", 5, 15]} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        <Box rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial
            attach="material"
            color="#FF00FF"
            metalness={0.6}
            roughness={0.3}
          />
        </Box>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>

      {/* Overlay gradient glow */}
      <div className="absolute inset-0 rounded-xl pointer-events-none z-[-1] bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-blue-500/10 blur-2xl" />
    </div>
  );
}

export default function VRSection() {
  return (
    <section className="relative z-10 bg-[#0a0a23] py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-purple-500/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500 animate-pulse mb-6 tracking-tight">
          Explore VR Interactively
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-14 text-lg">
          Dive into a real-time 3D experience powered by WebGL & Three.js.
        </p>
        <div className="relative before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-cyan-500/10 before:to-purple-500/5 before:blur-2xl before:z-[-1]">
          <VRModel />
        </div>
        {/* <div className="relative before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-cyan-500/10 before:to-purple-500/5 before:blur-2xl before:z-[-1]">
          <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 backdrop-blur-md relative">
            <VirtualSpace />
          </div>
        </div> */}
      </div>
    </section>
  );
}
