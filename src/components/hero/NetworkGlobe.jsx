import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * NetworkGlobe - Translucent 3D-look Wireframe Sphere for Home Page 2 Hero.
 * 
 * Features:
 * - Interconnected blue wireframe lines (latitude-longitude mesh wrapping around a globe).
 * - Glowing nodes/dots at line intersections with varying sizes (bold solid dots, faint depth dots).
 * - Light blue monochrome palette (#3B82F6, #60A5FA, #93C5FD, #2563EB) on transparent backdrop.
 * - Soft blurred drop-shadow beneath the sphere breathing in sync to create a floating sensation.
 * - Continuous, infinite, smooth 360° vertical axis rotation (duration: ~28s, linear timing).
 * - Secondary subtle animation: staggered node pulses simulating data packets traveling across the network.
 * - Fully responsive: Desktop (500px), Tablet (380px), Mobile (280px).
 * - Accessibility: respects prefers-reduced-motion by rendering a crisp static view.
 */
export default function NetworkGlobe({ className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  // 8 Longitude meridians (spaced every 22.5° for high fidelity wireframe mesh)
  const meridians = useMemo(() => [
    { angle: 0, opacity: 0.5, strokeWidth: 1.4, dash: "" },
    { angle: 22.5, opacity: 0.3, strokeWidth: 1, dash: "4 4" },
    { angle: 45, opacity: 0.4, strokeWidth: 1.2, dash: "" },
    { angle: 67.5, opacity: 0.3, strokeWidth: 1, dash: "3 5" },
    { angle: 90, opacity: 0.5, strokeWidth: 1.4, dash: "" },
    { angle: 112.5, opacity: 0.3, strokeWidth: 1, dash: "4 4" },
    { angle: 135, opacity: 0.4, strokeWidth: 1.2, dash: "" },
    { angle: 157.5, opacity: 0.3, strokeWidth: 1, dash: "3 5" },
  ], []);

  // 7 Latitude parallels (equator, tropics, mid-latitudes, and polar circles)
  // R = 230px inside 500x500 coordinate space
  // h = R * sin(phi), r = R * cos(phi)
  const parallels = useMemo(() => [
    { name: 'equator', phi: 0, h: 0, r: 230, opacity: 0.55, strokeWidth: 1.5, dash: "" },
    { name: 'tropic-n', phi: 25, h: 97.2, r: 208.4, opacity: 0.38, strokeWidth: 1.1, dash: "4 4" },
    { name: 'tropic-s', phi: -25, h: -97.2, r: 208.4, opacity: 0.38, strokeWidth: 1.1, dash: "4 4" },
    { name: 'mid-n', phi: 48, h: 170.9, r: 153.9, opacity: 0.32, strokeWidth: 1, dash: "" },
    { name: 'mid-s', phi: -48, h: -170.9, r: 153.9, opacity: 0.32, strokeWidth: 1, dash: "" },
    { name: 'polar-n', phi: 70, h: 216.1, r: 78.7, opacity: 0.25, strokeWidth: 0.9, dash: "2 4" },
    { name: 'polar-s', phi: -70, h: -216.1, r: 78.7, opacity: 0.25, strokeWidth: 0.9, dash: "2 4" },
  ], []);

  // Curated 3D intersection nodes with varying prominence and randomized pulse delays
  const nodes = useMemo(() => [
    // Major Telecommunication Hubs (Bold solid light blue dots)
    { phi: 0, lambda: 0, size: 7.5, type: 'hub', delay: 0.1, duration: 2.4 },
    { phi: 0, lambda: 90, size: 7.5, type: 'hub', delay: 0.8, duration: 2.6 },
    { phi: 0, lambda: 180, size: 7.5, type: 'hub', delay: 1.4, duration: 2.8 },
    { phi: 0, lambda: 270, size: 7.5, type: 'hub', delay: 2.0, duration: 2.5 },
    { phi: 25, lambda: 45, size: 6.5, type: 'hub', delay: 0.4, duration: 2.3 },
    { phi: 25, lambda: 135, size: 6.5, type: 'hub', delay: 1.1, duration: 2.7 },
    { phi: 25, lambda: 225, size: 6.5, type: 'hub', delay: 1.7, duration: 2.9 },
    { phi: 25, lambda: 315, size: 6.5, type: 'hub', delay: 2.3, duration: 2.4 },
    { phi: -25, lambda: 45, size: 6.5, type: 'hub', delay: 0.6, duration: 2.5 },
    { phi: -25, lambda: 135, size: 6.5, type: 'hub', delay: 1.3, duration: 2.6 },
    { phi: -25, lambda: 225, size: 6.5, type: 'hub', delay: 1.9, duration: 2.8 },
    { phi: -25, lambda: 315, size: 6.5, type: 'hub', delay: 2.5, duration: 2.3 },

    // Secondary Regional Nodes
    { phi: 48, lambda: 0, size: 5, type: 'mid', delay: 0.3, duration: 3.1 },
    { phi: 48, lambda: 67.5, size: 5, type: 'mid', delay: 0.9, duration: 3.0 },
    { phi: 48, lambda: 135, size: 5, type: 'mid', delay: 1.5, duration: 3.3 },
    { phi: 48, lambda: 202.5, size: 5, type: 'mid', delay: 2.1, duration: 3.2 },
    { phi: 48, lambda: 270, size: 5, type: 'mid', delay: 2.7, duration: 2.9 },
    { phi: -48, lambda: 22.5, size: 5, type: 'mid', delay: 0.5, duration: 3.2 },
    { phi: -48, lambda: 90, size: 5, type: 'mid', delay: 1.2, duration: 3.4 },
    { phi: -48, lambda: 157.5, size: 5, type: 'mid', delay: 1.8, duration: 3.0 },
    { phi: -48, lambda: 247.5, size: 5, type: 'mid', delay: 2.4, duration: 3.1 },

    // Faint Depth Nodes (Background network texture)
    { phi: 70, lambda: 45, size: 3.5, type: 'faint', delay: 0.7, duration: 3.6 },
    { phi: 70, lambda: 135, size: 3.5, type: 'faint', delay: 1.6, duration: 3.5 },
    { phi: 70, lambda: 225, size: 3.5, type: 'faint', delay: 2.2, duration: 3.7 },
    { phi: 70, lambda: 315, size: 3.5, type: 'faint', delay: 2.8, duration: 3.4 },
    { phi: -70, lambda: 0, size: 3.5, type: 'faint', delay: 0.2, duration: 3.8 },
    { phi: -70, lambda: 90, size: 3.5, type: 'faint', delay: 1.0, duration: 3.6 },
    { phi: -70, lambda: 180, size: 3.5, type: 'faint', delay: 1.8, duration: 3.5 },
    { phi: -70, lambda: 270, size: 3.5, type: 'faint', delay: 2.6, duration: 3.9 },
    { phi: 0, lambda: 45, size: 3.5, type: 'faint', delay: 0.8, duration: 3.3 },
    { phi: 0, lambda: 135, size: 3.5, type: 'faint', delay: 1.7, duration: 3.2 },
    { phi: 0, lambda: 225, size: 3.5, type: 'faint', delay: 2.4, duration: 3.6 },
    { phi: 0, lambda: 315, size: 3.5, type: 'faint', delay: 3.0, duration: 3.4 },
  ], []);

  return (
    <div 
      className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}
      aria-label="3D Wireframe Global Connectivity Network Visual"
    >
      {/* 1. Synced Soft Blurred Drop-Shadow Beneath the Globe */}
      <div 
        className="absolute -bottom-8 sm:-bottom-10 lg:-bottom-12 left-1/2 -translate-x-1/2 w-[220px] sm:w-[320px] lg:w-[420px] h-[24px] sm:h-[30px] lg:h-[36px] rounded-[100%] bg-blue-500/25 blur-xl pointer-events-none -z-20 globe-shadow-anim"
      />

      {/* 2. Soft Ambient Radial Glow Behind the Sphere */}
      <div className="absolute w-[280px] sm:w-[380px] lg:w-[480px] h-[280px] sm:h-[380px] lg:h-[480px] rounded-full bg-gradient-to-tr from-blue-500/15 via-blue-400/20 to-cyan-300/15 blur-3xl pointer-events-none -z-10" />

      {/* 3. Static Translucent Glass Orb Sphere Base (SVG) */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none -z-10" 
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Light Blue Monochrome Translucent Gradient */}
          <radialGradient id="globeAtmosphere" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.18" />
            <stop offset="45%" stopColor="#60A5FA" stopOpacity="0.08" />
            <stop offset="80%" stopColor="#3B82F6" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.01" />
          </radialGradient>

          {/* Crisp Outer Rim Gradient */}
          <linearGradient id="globeRimStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
          </linearGradient>

          {/* Glowing Data Route Stream */}
          <linearGradient id="dataRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Translucent Sphere Body */}
        <circle 
          cx="250" 
          cy="250" 
          r="230" 
          fill="url(#globeAtmosphere)" 
          stroke="url(#globeRimStroke)" 
          strokeWidth="1.5" 
        />

        {/* Outer Orbital Dotted Halo */}
        <circle 
          cx="250" 
          cy="250" 
          r="238" 
          fill="none" 
          stroke="#60A5FA" 
          strokeWidth="0.8" 
          strokeOpacity="0.25" 
          strokeDasharray="4 8" 
        />

        {/* Upper Specular Light Crescent */}
        <ellipse 
          cx="250" 
          cy="60" 
          rx="120" 
          ry="15" 
          fill="none" 
          stroke="#93C5FD" 
          strokeWidth="0.7" 
          strokeOpacity="0.3" 
        />
      </svg>

      {/* 4. 3D Rotating Wireframe Sphere Assembly (Continuous Linear Y-Axis Rotation) */}
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{
          perspective: '1200px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        {/* Axial Tilt Wrapper: classic 14° orbital tilt */}
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateZ(-14deg) rotateX(16deg)',
          }}
        >
          {/* Continuous Infinite 360° Rotator (28s loop, 60fps GPU transform) */}
          <div 
            className={`relative w-full h-full flex items-center justify-center ${shouldReduceMotion ? '' : 'globe-spin-y'}`}
            style={{
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
            {/* A. Longitude Meridians (8 Full Wireframe Hoops) */}
            {meridians.map((meridian) => (
              <div
                key={`meridian-${meridian.angle}`}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${meridian.angle}deg)`,
                }}
              >
                <svg 
                  className="w-full h-full pointer-events-none" 
                  viewBox="0 0 500 500"
                >
                  <circle 
                    cx="250" 
                    cy="250" 
                    r="230" 
                    fill="none" 
                    stroke="#60A5FA" 
                    strokeWidth={meridian.strokeWidth} 
                    strokeOpacity={meridian.opacity} 
                    strokeDasharray={meridian.dash || undefined}
                  />
                </svg>
              </div>
            ))}

            {/* B. Latitude Parallels (7 Horizontal Rings in 3D Space) */}
            {parallels.map((parallel) => (
              <div
                key={parallel.name}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(90deg) translateZ(${parallel.h}px)`,
                }}
              >
                <svg 
                  className="w-full h-full pointer-events-none" 
                  viewBox="0 0 500 500"
                >
                  <circle 
                    cx="250" 
                    cy="250" 
                    r={parallel.r} 
                    fill="none" 
                    stroke="#3B82F6" 
                    strokeWidth={parallel.strokeWidth} 
                    strokeOpacity={parallel.opacity} 
                    strokeDasharray={parallel.dash || undefined}
                  />
                </svg>
              </div>
            ))}

            {/* C. 3D Intersecting Glowing Nodes (Data Pulses with Staggered Breathing) */}
            {nodes.map((node, idx) => {
              // Mathematical coordinate on sphere surface R = 230px
              const transformStyle = `rotateY(${node.lambda}deg) rotateX(${-node.phi}deg) translateZ(230px)`;

              const isHub = node.type === 'hub';
              const isMid = node.type === 'mid';

              // Visual styling matching light blue monochrome system
              const bgClass = isHub 
                ? 'bg-gradient-to-tr from-[#3B82F6] to-[#93C5FD]' 
                : isMid 
                  ? 'bg-[#60A5FA]' 
                  : 'bg-[#3B82F6]/60';

              const shadowStyle = isHub
                ? '0 0 10px rgba(96, 165, 250, 0.9), 0 0 18px rgba(59, 130, 246, 0.6)'
                : isMid
                  ? '0 0 6px rgba(96, 165, 250, 0.7)'
                  : '0 0 3px rgba(59, 130, 246, 0.4)';

              return (
                <div
                  key={`node-${idx}`}
                  className="absolute pointer-events-none flex items-center justify-center"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: transformStyle,
                    width: '0px',
                    height: '0px',
                  }}
                >
                  <div
                    className={`rounded-full shrink-0 ${bgClass} ${shouldReduceMotion ? '' : 'node-pulse-anim'}`}
                    style={{
                      width: `${node.size}px`,
                      height: `${node.size}px`,
                      boxShadow: shadowStyle,
                      animationDelay: `${node.delay}s`,
                      animationDuration: `${node.duration}s`,
                    }}
                  />
                </div>
              );
            })}

            {/* D. Translucent Interior Light Core */}
            <div 
              className="absolute w-[180px] h-[180px] rounded-full pointer-events-none opacity-40 blur-lg"
              style={{
                background: 'radial-gradient(circle, rgba(96,165,250,0.3) 0%, rgba(59,130,246,0.1) 60%, transparent 100%)',
              }}
            />

          </div>
        </div>
      </div>
    </div>
  );
}
