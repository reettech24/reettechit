"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Link from "next/link";
import "./GlobynkHeroSection.css";

export default function GlobynkHeroSection() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 480;
    const height = currentMount.clientHeight || 480;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    while (currentMount.firstChild) {
      currentMount.removeChild(currentMount.firstChild);
    }
    currentMount.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Inner Glowing Wireframe Sphere
    const sphereGeo = new THREE.SphereGeometry(3.6, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const globeMesh = new THREE.Mesh(sphereGeo, sphereMat);
    mainGroup.add(globeMesh);

    // 2. Dense Electric Blue Particle Core
    const particleCount = 350;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x0f62fe);
    const color2 = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.6 + Math.random() * 0.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const col = Math.random() > 0.5 ? color1 : color2;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // 3. Network Connection Lines
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = [];
    const nodeCoords = [];

    for (let i = 0; i < 24; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 3.6;
      nodeCoords.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }

    for (let i = 0; i < nodeCoords.length; i++) {
      for (let j = i + 1; j < nodeCoords.length; j++) {
        if (nodeCoords[i].distanceTo(nodeCoords[j]) < 3.2) {
          linePositions.push(
            nodeCoords[i].x, nodeCoords[i].y, nodeCoords[i].z,
            nodeCoords[j].x, nodeCoords[j].y, nodeCoords[j].z
          );
        }
      }
    }

    const lineBufferGeo = new THREE.BufferGeometry();
    lineBufferGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.35,
    });
    const networkLines = new THREE.LineSegments(lineBufferGeo, lineMat);
    mainGroup.add(networkLines);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / height) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      mainGroup.rotation.y += 0.003;
      mainGroup.rotation.x += 0.001;

      globeMesh.rotation.y += (mouseX * 0.2 - globeMesh.rotation.y) * 0.05;
      globeMesh.rotation.x += (mouseY * 0.2 - globeMesh.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="globynk-hero-wrapper">
      <div className="globynk-hero-card">
        {/* Ambient Glow */}
        <div className="globynk-ambient-glow"></div>

        {/* Top Navigation Bar */}
        <header className="globynk-topbar">
          <Link href="/" className="globynk-logo-brand">
            <span className="globynk-logo-icon">🌐</span>
            <span>Globynk</span>
          </Link>

          <nav className="globynk-nav-pills">
            <Link href="/" className="globynk-nav-item active">
              Home
            </Link>
            <Link href="#features" className="globynk-nav-item">
              Features
            </Link>
            <Link href="#hiring" className="globynk-nav-item">
              Global Hiring
            </Link>
            <Link href="#pricing" className="globynk-nav-item">
              Pricing
            </Link>
            <Link href="#resources" className="globynk-nav-item">
              Resources
            </Link>
          </nav>

          <Link href="#demo" className="globynk-btn-demo">
            Book a Demo
          </Link>
        </header>

        {/* Hero Headlines */}
        <div className="globynk-hero-content">
          <h1 className="globynk-headline">
            Hire Top Global Talent <br />
            Without Borders
          </h1>
          <p className="globynk-subtitle">
            Build and manage international teams with AI-powered hiring, automated
            compliance, and seamless global payroll from a single platform.
          </p>
          <a href="#start" className="globynk-btn-primary">
            Start Hiring Today
          </a>
        </div>

        {/* Center 3D Interactive Visual Arena */}
        <div className="globynk-visual-arena">
          {/* Three.js WebGL Globe */}
          <div className="globynk-canvas-holder" ref={mountRef}></div>

          {/* Country Location Badges with Flags */}
          <div className="country-pill pill-uk">
            <span className="flag">🇬🇧</span>
            <span>United Kingdom</span>
          </div>

          <div className="country-pill pill-france">
            <span className="flag">🇫🇷</span>
            <span>France</span>
          </div>

          <div className="country-pill pill-us">
            <span className="flag">🇺🇸</span>
            <span>United States</span>
          </div>

          <div className="country-pill pill-netherlands">
            <span className="flag">🇳🇱</span>
            <span>Netherlands</span>
          </div>

          <div className="country-pill pill-germany">
            <span className="flag">🇩🇪</span>
            <span>Germany</span>
          </div>

          {/* Dual Glassmorphism Feature Cards */}
          <div className="glass-feature-card card-left-pos">
            <h3 className="glass-card-title">AI Candidate Matching</h3>
            <p className="glass-card-desc">
              Discover highly qualified professionals through intelligent matching
              based on skills and experience worldwide today.
            </p>
          </div>

          <div className="glass-feature-card card-right-pos">
            <h3 className="glass-card-title">Global Talent Access</h3>
            <p className="glass-card-desc">
              Connect with exceptional talent worldwide while expanding hiring
              opportunities across multiple markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
