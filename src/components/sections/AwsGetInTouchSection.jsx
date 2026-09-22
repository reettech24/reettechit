"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './AwsGetInTouchSection.css';

export default function AwsGetInTouchSection() {
  const mountRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    firmName: '',
    email: '',
    phone: '',
    service: 'Web Development',
    message: ''
  });

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    while (currentMount.firstChild) {
      currentMount.removeChild(currentMount.firstChild);
    }
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(20, 20, 25, 25);
    const material = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 4;
    mesh.rotation.z = Math.PI / 6;
    scene.add(mesh);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      mesh.rotation.z += 0.0015;
      mesh.rotation.x += (mouseY * 0.05 - mesh.rotation.x) * 0.05;
      mesh.rotation.y += (mouseX * 0.05 - mesh.rotation.y) * 0.05;

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
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="git-main-wrapper">
      <div className="git-container">
        
        {/* Left Column: Screen Showcase Preview */}
        <div className="git-left-showcase">
          <div className="git-3d-bg" ref={mountRef}></div>

          <div className="monitor-frame-container">
            <div className="monitor-screen">
              <div className="mock-website-content">
                <div className="mock-nav">
                  <div className="mock-eye-logo">👁️</div>
                  <div className="mock-links">
                    <span>Home</span>
                    <span>Clinic</span>
                    <span>Spectalologist</span>
                    <span>Lerass</span>
                  </div>
                  <div className="mock-search-bar"></div>
                </div>

                <div className="mock-hero">
                  <div className="mock-hero-text">
                    <h2>Clinic<br />Consultation</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dios
                      irmonsunng eris swssetenoar strwas alignight sowim olaps lecurosdo.
                    </p>
                    <div className="mock-buttons">
                      <button className="btn-cyan">Read More</button>
                      <button className="btn-outline">Read More</button>
                    </div>
                    <small>Your Adress, City, Country.</small>
                  </div>

                  <div className="mock-hero-image">
                    <div className="eye-graphic left-eye">👁️</div>
                    <div className="optometry-device">🔬</div>
                    <div className="eye-graphic right-eye">👁️</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="monitor-stand-neck"></div>
            <div className="monitor-stand-base"></div>
          </div>

          <div className="git-left-labels">
            <div className="label-item active-label">
              <span className="diamond-bullet">◆</span> Mobile Applications
            </div>
            <div className="label-item">High End Website Development</div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="git-right-form-wrapper">
          <h2 className="git-form-title">GET IN TOUCH</h2>

          <form className="git-contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="firmName"
                placeholder="Firm Name"
                value={formData.firmName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group phone-group">
              <div className="country-code-box">
                <span className="flag-icon">🇮🇳</span>
                <span className="code-text">+91</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder=""
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group select-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="Web Development">Web Development</option>
                <option value="Mobile Applications">Mobile Applications</option>
                <option value="CRM Development">CRM Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}
