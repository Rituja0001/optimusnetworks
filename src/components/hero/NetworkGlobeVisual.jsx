import React from 'react';
import { motion } from 'framer-motion';

export default function NetworkGlobeVisual({ className = "" }) {
  // Pre-calculated node coordinates distributed along latitude/longitude arcs
  const networkNodes = [
    { cx: 200, cy: 70, r: 4.5, delay: 0 },
    { cx: 120, cy: 110, r: 3.5, delay: 0.4 },
    { cx: 280, cy: 110, r: 4, delay: 0.8 },
    { cx: 70, cy: 200, r: 4, delay: 1.2 },
    { cx: 150, cy: 180, r: 5, delay: 0.3 },
    { cx: 200, cy: 200, r: 5.5, delay: 0.6 },
    { cx: 250, cy: 180, r: 4.5, delay: 1.0 },
    { cx: 330, cy: 200, r: 4, delay: 1.5 },
    { cx: 110, cy: 280, r: 4, delay: 0.5 },
    { cx: 200, cy: 260, r: 5, delay: 0.9 },
    { cx: 290, cy: 280, r: 3.5, delay: 1.3 },
    { cx: 200, cy: 330, r: 4, delay: 0.7 },
    { cx: 160, cy: 140, r: 3.5, delay: 1.1 },
    { cx: 240, cy: 140, r: 3.5, delay: 0.2 },
  ];

  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 ${className}`}>
      
      {/* Outer Breathing Soft Glow Halo (scale 1 -> 1.03 -> 1 loop) */}
      <motion.div
        animate={{ 
          scale: [1, 1.035, 1],
          opacity: [0.45, 0.7, 0.45] 
        }}
        transition={{ 
          duration: 6.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/25 to-teal-400/15 blur-2xl pointer-events-none"
      />

      {/* Rotating Ambient Wireframe Globe Container (360° continuous rotation, 26s loop) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 26, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="relative w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] opacity-60"
      >
        <svg 
          viewBox="0 0 400 400" 
          className="w-full h-full filter drop-shadow-[0_0_16px_rgba(0,210,255,0.4)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="globeRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00D2FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00F5A0" stopOpacity="0.7" />
            </linearGradient>

            <linearGradient id="dataStreamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#00D2FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00F5A0" stopOpacity="0.4" />
            </linearGradient>

            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00F5A0" stopOpacity="1" />
              <stop offset="60%" stopColor="#00D2FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer Boundary Circle */}
          <circle 
            cx="200" 
            cy="200" 
            r="175" 
            fill="none" 
            stroke="url(#globeRingGradient)" 
            strokeWidth="1.5" 
            strokeDasharray="4 8"
            opacity="0.6"
          />

          <circle 
            cx="200" 
            cy="200" 
            r="165" 
            fill="none" 
            stroke="#00D2FF" 
            strokeWidth="1" 
            opacity="0.3"
          />

          {/* Longitudinal Ellipses */}
          <ellipse cx="200" cy="200" rx="165" ry="165" fill="none" stroke="#00D2FF" strokeWidth="0.8" opacity="0.35" />
          <ellipse cx="200" cy="200" rx="120" ry="165" fill="none" stroke="#00D2FF" strokeWidth="0.8" opacity="0.4" strokeDasharray="3 5" />
          <ellipse cx="200" cy="200" rx="60" ry="165" fill="none" stroke="#0066FF" strokeWidth="0.8" opacity="0.45" />
          <line x1="200" y1="35" x2="200" y2="365" stroke="#00D2FF" strokeWidth="1" opacity="0.4" />

          {/* Latitudinal Parallels */}
          <ellipse cx="200" cy="200" rx="165" ry="40" fill="none" stroke="url(#globeRingGradient)" strokeWidth="1.2" opacity="0.65" />
          <ellipse cx="200" cy="130" rx="140" ry="28" fill="none" stroke="#0066FF" strokeWidth="0.8" opacity="0.35" strokeDasharray="4 6" />
          <ellipse cx="200" cy="270" rx="140" ry="28" fill="none" stroke="#0066FF" strokeWidth="0.8" opacity="0.35" strokeDasharray="4 6" />
          <ellipse cx="200" cy="85" rx="90" ry="18" fill="none" stroke="#00D2FF" strokeWidth="0.8" opacity="0.3" />
          <ellipse cx="200" cy="315" rx="90" ry="18" fill="none" stroke="#00D2FF" strokeWidth="0.8" opacity="0.3" />

          {/* Diagonal Telecommunications Data Arcs (Streaming dashoffset) */}
          <motion.path
            d="M 120 110 Q 200 150 280 110"
            fill="none"
            stroke="url(#dataStreamGradient)"
            strokeWidth="1.8"
            strokeDasharray="6 12"
            animate={{ strokeDashoffset: [0, -36] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <motion.path
            d="M 70 200 Q 150 160 200 200 Q 250 240 330 200"
            fill="none"
            stroke="url(#dataStreamGradient)"
            strokeWidth="2"
            strokeDasharray="8 14"
            animate={{ strokeDashoffset: [0, -44] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          <motion.path
            d="M 110 280 Q 200 240 290 280"
            fill="none"
            stroke="url(#dataStreamGradient)"
            strokeWidth="1.8"
            strokeDasharray="6 12"
            animate={{ strokeDashoffset: [0, 36] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />

          <motion.path
            d="M 200 70 Q 230 180 200 330"
            fill="none"
            stroke="url(#dataStreamGradient)"
            strokeWidth="1.5"
            strokeDasharray="5 10"
            animate={{ strokeDashoffset: [0, -30] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          />

          {/* Staggered Glowing Interconnected Nodes */}
          {networkNodes.map((node, i) => (
            <g key={i}>
              {/* Outer pulsing node aura */}
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={node.r * 2.2}
                fill="url(#nodeGlow)"
                animate={{
                  opacity: [0.2, 0.85, 0.2],
                  scale: [0.85, 1.3, 0.85],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: node.delay,
                  ease: "easeInOut",
                }}
              />
              {/* Core solid bright node */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill="#FFFFFF"
                stroke="#00D2FF"
                strokeWidth="1"
              />
            </g>
          ))}
        </svg>
      </motion.div>

    </div>
  );
}
