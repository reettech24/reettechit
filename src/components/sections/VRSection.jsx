"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  useGLTF,
  Html,
  ContactShadows,
} from "@react-three/drei";
import { useRef, useState, Suspense, useEffect } from "react";
import { useTranslations } from "next-intl";
import * as THREE from "three";

function CameraTransition({ position }) {
  const { camera } = useThree();
  useEffect(() => {
    const target = new THREE.Vector3(...position);
    camera.position.lerp(target, 0.1);
  }, [position, camera]);
  return null;
}

function ClickableHotspot({ position, label, onClick }) {
  return (
    <Html position={position} center>
      <button
        onClick={onClick}
        className="bg-white/80 text-black px-2 py-1 text-xs rounded shadow hover:bg-white"
      >
        {label}
      </button>
    </Html>
  );
}

function ScenarioModel({
  glbPath,
  tooltip,
  position = [0, -10.5, 0],
  scale = 8.5,
  tooltipPosition = [1, 1, 1],
  autoRotate = false,
  onHotspotClick,
}) {
  const { scene, animations } = useGLTF(glbPath);
  const modelRef = useRef();
  const mixerRef = useRef();
  const clock = new THREE.Clock();

  useEffect(() => {
    if (animations && animations.length > 0 && modelRef.current) {
      mixerRef.current = new THREE.AnimationMixer(modelRef.current);
      animations.forEach((clip) => mixerRef.current.clipAction(clip).play());
    }
  }, [animations]);

  useFrame(() => {
    if (mixerRef.current) mixerRef.current.update(clock.getDelta());
    if (autoRotate && modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <primitive object={scene} ref={modelRef} position={position} scale={scale} />
      <Html center position={tooltipPosition}>
        <div className="text-white text-sm bg-black/70 px-4 py-2 rounded-xl">
          {tooltip}
        </div>
      </Html>
      <ClickableHotspot
        position={[0.5, 1, 0]}
        label="Interact"
        onClick={onHotspotClick}
      />
    </>
  );
}

function ScenarioAudio({ scenario, isPlaying }) {
  const audioRef = useRef(null);
  const audioMap = {
    product: "/vr.mp3",
    training: "/vr.mp3",
    workspace: "/vr.mp3",
    ar: "/vr.mp3",
  };

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, scenario]);

  return (
    <audio ref={audioRef} loop>
      <source src={audioMap[scenario]} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
}

function VRModel({ scenario, isRotating, isZoomEnabled, onHotspotClick }) {
  const scenarioConfig = {
    product: {
      glbPath: "/Vp.glb",
      tooltip: "360° Product View",
      autoRotate: isRotating,
      cameraPos: [3, 3, 3],
    },
    training: {
      glbPath: "/Vp.glb",
      tooltip: "Step-by-step Training Module",
      autoRotate: isRotating,
      cameraPos: [2, 3, 2],
    },
    workspace: {
      glbPath: "/Vp.glb",
      tooltip: "Collaborative XR Workspace",
      autoRotate: isRotating,
      cameraPos: [4, 4, 4],
    },
    ar: {
      glbPath: "/Vp.glb",
      tooltip: "AR Overlay in Real Space",
      autoRotate: isRotating,
      position: [0, -1.5, 0],
      scale: 2,
      cameraPos: [2, 2, 2],
    },
  };

  const config = scenarioConfig[scenario];

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 backdrop-blur-md relative">
      <Canvas camera={{ position: config.cameraPos }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} />
        <fog attach="fog" args={["#0a0a23", 5, 15]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

        <Suspense fallback={null}>
          <ScenarioModel {...config} onHotspotClick={onHotspotClick} />
        </Suspense>

        <ContactShadows position={[0, -3, 0]} opacity={0.4} blur={2} />
        <OrbitControls
          autoRotate={config.autoRotate}
          enableZoom={isZoomEnabled}
          autoRotateSpeed={1.2}
        />
        <CameraTransition position={config.cameraPos} />
      </Canvas>

      <div className="absolute inset-0 rounded-xl pointer-events-none z-[-1] bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-blue-500/10 blur-2xl" />
    </div>
  );
}

export default function VRSection() {
  const t = useTranslations("arvr");
  const [scenario, setScenario] = useState("product");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  const [isZoomEnabled, setIsZoomEnabled] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <section className="relative z-10 bg-[#0a0a23] py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-purple-500/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500 animate-pulse mb-6 tracking-tight">
          {t("vrtitle")}
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
          {t("vrdesc")}
        </p>

        <div className="relative mb-10 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-cyan-500/10 before:to-purple-500/5 before:blur-2xl before:z-[-1]">
          <VRModel
            scenario={scenario}
            isRotating={isRotating}
            isZoomEnabled={isZoomEnabled}
            onHotspotClick={() => setMessage("You clicked the hotspot!")}
          />
          <ScenarioAudio scenario={scenario} isPlaying={isPlaying} />
        </div>

        {message && <p className="text-green-400 font-semibold mb-4">{message}</p>}

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          {["product", "training", "workspace", "ar"].map((key) => (
            <button
              key={key}
              onClick={() => setScenario(key)}
              className={`px-4 py-2 rounded-lg ${
                scenario === key
                  ? "bg-cyan-600 text-white"
                  : "bg-cyan-700/20 text-cyan-300"
              } hover:bg-cyan-600 transition`}
            >
              {key === "product"
                ? "Product Showcase"
                : key === "training"
                ? "Remote Training"
                : key === "workspace"
                ? "Virtual Workspace"
                : "AR Simulation"}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            {isPlaying ? "Pause Music" : "Play Music"}
          </button>

          <button
            onClick={() => setIsRotating(!isRotating)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {isRotating ? "Stop Rotation" : "Start Rotation"}
          </button>

          <button
            onClick={() => setIsZoomEnabled(!isZoomEnabled)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            {isZoomEnabled ? "Disable Zoom" : "Enable Zoom"}
          </button>
        </div>
      </div>
    </section>
  );
}
