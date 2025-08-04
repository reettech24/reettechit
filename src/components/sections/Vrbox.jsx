"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  ContactShadows,
  Environment,
  Sky,
  useTexture,
} from "@react-three/drei";
import { useRef, useState, Suspense, useEffect } from "react";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import * as THREE from "three";

function RotatingBox({ isRotating, color, wireframe, shape, texture, scale }) {
  const meshRef = useRef();
  const textureMap = useTexture(texture || "/wood1.jpeg");

  useFrame(() => {
    if (isRotating && meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} castShadow scale={scale} position={[0, 0, 0]}>
      {shape === "box" && <boxGeometry args={[2, 2, 2]} />}
      {shape === "sphere" && <sphereGeometry args={[1.5, 32, 32]} />}
      {shape === "torus" && <torusGeometry args={[1, 0.4, 16, 100]} />}
      {shape === "cone" && <coneGeometry args={[1.5, 3, 32]} />}
      {shape === "cylinder" && <cylinderGeometry args={[1, 1, 2, 32]} />}
      {shape === "dodecahedron" && <dodecahedronGeometry args={[1.5]} />}
      {shape === "tetrahedron" && <tetrahedronGeometry args={[1.5]} />}
      {shape === "octahedron" && <octahedronGeometry args={[1.5]} />}
      {shape === "ring" && <ringGeometry args={[1, 1.5, 32]} />}
      {texture ? (
        <meshStandardMaterial map={textureMap} />
      ) : (
        <meshStandardMaterial color={color} wireframe={wireframe} />
      )}
    </mesh>
  );
}

function ScreenshotButton({ gl }) {
  const takeScreenshot = () => {
    const screenshot = gl.domElement.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = screenshot;
    link.download = "screenshot.png";
    link.click();
  };
  return (
    <button
      onClick={takeScreenshot}
      className="bg-fuchsia-600 text-white px-4 py-5 w-full hover:bg-fuchsia-700 transition"
    >
      Take Screenshot
    </button>
  );
}

function ScenarioAudio({ scenario, isPlaying }) {
  const audioRef = useRef(null);
  const audioMap = {
    default: "/audio/default.mp3",
    city: "/audio/city.mp3",
    sunset: "/audio/sunset.mp3",
    dawn: "/audio/dawn.mp3",
    night: "/audio/night.mp3",
    warehouse: "/audio/warehouse.mp3",
    forest: "/audio/forest.mp3",
    sciFi: "/audio/sci-fi.mp3",
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.load();
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, scenario]);

  return (
    <audio ref={audioRef} loop>
      <source src={audioMap[scenario] || audioMap.default} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
}

function VRModel({
  isRotating,
  isZoomEnabled,
  color,
  wireframe,
  shape,
  env,
  texture,
  scale,
  onCanvasCreated,
}) {
  return (
    <div className="w-full h-[560px] overflow-hidden shadow-3xl ring-1 ring-white/10 backdrop-blur-md relative">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        shadows
        onCreated={({ gl }) => onCanvasCreated(gl)}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <Stars radius={80} depth={50} count={10000} factor={4} fade />
        {env === "sunset" && <Sky sunPosition={[100, 20, 100]} />}
        {env === "city" && <Environment preset="city" background />}
        {env === "dawn" && <Environment preset="dawn" background />}
        {env === "night" && <Environment preset="night" background />}
        {env === "warehouse" && <Environment preset="warehouse" background />}
        {env === "forest" && <Environment preset="forest" background />}

        <Suspense fallback={null}>
          <RotatingBox
            isRotating={isRotating}
            color={color}
            wireframe={wireframe}
            shape={shape}
            texture={texture}
            scale={scale}
          />
        </Suspense>

        <ContactShadows position={[0, -2, 0]} opacity={0.4} blur={5} />
        <OrbitControls
          autoRotate={isRotating}
          enableZoom={isZoomEnabled}
          autoRotateSpeed={1.2}
        />
      </Canvas>

      <div className="absolute inset-0 rounded-xl pointer-events-none z-[-1] bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-blue-500/10 blur-2xl" />
    </div>
  );
}

export default function VRBox() {
  const [isRotating, setIsRotating] = useState(true);
  const [isZoomEnabled, setIsZoomEnabled] = useState(false);
  const [color, setColor] = useState("orange");
  const [wireframe, setWireframe] = useState(false);
  const [shape, setShape] = useState("box");
  const [env, setEnv] = useState("none");
  const [texture, setTexture] = useState(null);
  const [scale, setScale] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [glRef, setGlRef] = useState(null);

  const colorOptions = ["orange", "purple", "red", "blue", "green"];
  const nextColor = () => {
    const index = colorOptions.indexOf(color);
    setColor(colorOptions[(index + 1) % colorOptions.length]);
  };

  const shapeOptions = [
    "box",
    "sphere",
    "torus",
    "cone",
    "cylinder",
    "dodecahedron",
    "tetrahedron",
    "octahedron",
    "ring",
  ];
  const nextShape = () => {
    const index = shapeOptions.indexOf(shape);
    setShape(shapeOptions[(index + 1) % shapeOptions.length]);
  };

  const resetAll = () => {
    setIsRotating(true);
    setIsZoomEnabled(false);
    setColor("orange");
    setWireframe(false);
    setShape("box");
    setEnv("none");
    setTexture(null);
    setScale(1);
  };

  const exportGLTF = () => {
    const scene = new THREE.Scene();
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const exporter = new GLTFExporter();
    exporter.parse(scene, (result) => {
      const output = JSON.stringify(result, null, 2);
      const blob = new Blob([output], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "model.gltf";
      link.click();
    });
  };

  return (
    <section className="relative z-10 bg-[#0a0a23] py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-purple-500/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500 animate-pulse mb-6 tracking-tight">
          Immersive VR Showcase
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
          Explore a 3D environment rendered directly in the browser using WebGL
          and Three.js
        </p>
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[7.5fr_2.5fr] gap-6 items-start">
          <div className="relative mb-10 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-cyan-500/10 before:to-purple-500/5 before:blur-2xl before:z-[-1]">
            <VRModel
              isRotating={isRotating}
              isZoomEnabled={isZoomEnabled}
              color={color}
              wireframe={wireframe}
              shape={shape}
              env={env}
              texture={texture}
              scale={scale}
              onCanvasCreated={setGlRef}
            />
            <ScenarioAudio scenario={env} isPlaying={isPlaying} />
          </div>

          <div className="grid grid-cols-2 justify-center gap-4">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className="bg-blue-600 text-white px-4 py-5 w-full hover:bg-blue-700 transition"
            >
              {isRotating ? "Stop Rotation" : "Start Rotation"}
            </button>
            <button
              onClick={() => setIsZoomEnabled(!isZoomEnabled)}
              className="bg-green-600 text-white px-4 py-5 w-full hover:bg-green-700 transition"
            >
              {isZoomEnabled ? "Disable Zoom" : "Enable Zoom"}
            </button>
            <button
              onClick={() => setWireframe(!wireframe)}
              className="bg-yellow-600 text-white px-4 py-5 w-full hover:bg-yellow-700 transition"
            >
              {wireframe ? "Disable Wireframe" : "Enable Wireframe"}
            </button>
            <button
              onClick={nextColor}
              className="bg-pink-600 text-white px-4 py-5 w-full hover:bg-pink-700 transition"
            >
              Change Color
            </button>
            <button
              onClick={nextShape}
              className="bg-indigo-600 text-white px-4 py-5 w-full hover:bg-indigo-700 transition"
            >
              Change Shape
            </button>
            <button
              onClick={() =>
                setEnv((e) =>
                  e === "none" ? "sunset" : e === "sunset" ? "city" : "none"
                )
              }
              className="bg-cyan-600 text-white px-4 py-5 w-full hover:bg-cyan-700 transition"
            >
              Change Lighting
            </button>
            <button
              onClick={() => setTexture((t) => (t ? null : "/wood1.jpeg"))}
              className="bg-rose-600 text-white px-4 py-5 w-full hover:bg-rose-700 transition"
            >
              {texture ? "Remove Texture" : "Apply Texture"}
            </button>
            <button
              onClick={() => setScale((s) => Math.min(3, s + 0.1))}
              className="bg-lime-600 text-white px-4 py-5 w-full hover:bg-lime-700 transition"
            >
              Increase Size
            </button>
            <button
              onClick={() => setScale((s) => Math.max(0.1, s - 0.1))}
              className="bg-orange-600 text-white px-4 py-5 w-full hover:bg-orange-700 transition"
            >
              Decrease Size
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-red-600 text-white px-4 py-5 w-full hover:bg-red-700 transition"
            >
              {isPlaying ? "Pause Audio" : "Play Audio"}
            </button>
            <button
              onClick={exportGLTF}
              className="bg-teal-600 text-white px-4 py-5 w-full hover:bg-teal-700 transition"
            >
              Export GLTF
            </button>
            {glRef && <ScreenshotButton gl={glRef} />}
            <button
              onClick={resetAll}
              className="bg-gray-700 text-white px-4 py-5 w-full hover:bg-gray-800 transition"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
