import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor - High-performance custom animated cursor.
 * 
 * Variants:
 * 1. "default" (Original Home Page): Dual-layer cursor with solid blue-teal dot
 *    and smooth magnetic trailing outer ring, scale/fill transition on hover,
 *    text indicator on typography, and squeeze animation on click.
 * 
 * 2. "page2" (Home Page 2): Futuristic glowing cyan/teal orb with breathing halo,
 *    continuous rotating dashed reticle ring that accelerates on hover, and
 *    sonar/ping ripple pulse emanating on click.
 * 
 * Performance & Accessibility:
 * - 60fps+ hardware-accelerated transforms using direct requestAnimationFrame updates (no React re-renders on mousemove).
 * - Automatically disabled on touch/mobile devices (@media hover: none / pointer: coarse).
 * - Respects prefers-reduced-motion by removing trailing lag, rotation, and breathing animations.
 * - pointer-events: none on all cursor elements so it never blocks clicks or interactions.
 */
export default function CustomCursor({ variant = "default" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -200, y: -200 });
  const dotPos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const isVisibleRef = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    // 1. Detect touch / mobile device
    const isTouch = 
      typeof window !== 'undefined' && (
        window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      );

    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    // 2. Hide OS cursor on desktop
    document.body.classList.add('custom-cursor-active');

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 3. Animation loop using requestAnimationFrame (zero React state overhead during movement)
    const animate = () => {
      if (isReducedMotion) {
        dotPos.current.x = mousePos.current.x;
        dotPos.current.y = mousePos.current.y;
        ringPos.current.x = mousePos.current.x;
        ringPos.current.y = mousePos.current.y;
      } else {
        // Dot tracks near-instantaneously
        dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.75;
        dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.75;

        // Ring follows with smooth spring/lerp easing (~150–200ms)
        const lerpFactor = variant === 'page2' ? 0.28 : 0.18;
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    // 4. Mouse event listeners
    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const onMouseDown = () => {
      setIsClicked(true);

      // Trigger sonar/ping ripple on Page 2 variant
      if (variant === 'page2') {
        const newRipple = {
          id: Date.now() + Math.random(),
          x: mousePos.current.x,
          y: mousePos.current.y,
        };
        setRipples((prev) => [...prev.slice(-4), newRipple]);
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 550);
      }
    };

    const onMouseUp = () => {
      setIsClicked(false);
    };

    // 5. Hover detection on interactive elements (Event delegation on document)
    const onMouseOver = (e) => {
      const interactive = e.target.closest(
        'a, button, input, select, textarea, [role="button"], .cursor-pointer, [data-cursor-interactive], [data-cursor-pointer]'
      );
      const textElem = e.target.closest('p, h1, h2, h3, h4, h5, h6, blockquote, [data-cursor-text]');

      if (interactive) {
        setIsHovered(true);
        setIsTextHovered(false);
      } else if (textElem && !interactive) {
        setIsTextHovered(true);
        setIsHovered(false);
      } else {
        setIsHovered(false);
        setIsTextHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [variant]);

  // If touch device or mobile, fall back to native cursor
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* ============================================================== */}
      {/* VARIANT 1: "default" (Original Home Page dual-layer cursor)     */}
      {/* ============================================================== */}
      {variant === 'default' && (
        <>
          {/* Inner Sharp Dot */}
          <div
            ref={dotRef}
            className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform transition-opacity duration-200"
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            <div 
              className={`rounded-full transition-all duration-200 ease-out ${
                isHovered 
                  ? 'w-2 h-2 -ml-1 -mt-1 bg-gradient-to-r from-blue-600 to-cyan-500 scale-75 opacity-50' 
                  : isClicked 
                    ? 'w-2 h-2 -ml-1 -mt-1 bg-gradient-to-r from-blue-600 to-cyan-500 scale-75 shadow-[0_0_12px_rgba(0,102,255,0.8)]' 
                    : 'w-2 h-2 -ml-1 -mt-1 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_8px_rgba(0,102,255,0.6)]'
              }`}
            />
          </div>

          {/* Trailing Outer Magnetic Ring */}
          <div
            ref={ringRef}
            className="fixed top-0 left-0 pointer-events-none z-[99998] will-change-transform transition-opacity duration-200"
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            <div 
              className={`rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isHovered 
                  ? 'w-14 h-14 -ml-7 -mt-7 border border-blue-500/60 bg-gradient-to-br from-blue-500/15 via-cyan-400/10 to-teal-400/15 backdrop-blur-[2px] shadow-[0_0_24px_rgba(0,102,255,0.25)]' 
                  : isTextHovered 
                    ? 'w-1 h-6 -ml-0.5 -mt-3 bg-blue-600/80 border-none shadow-[0_0_8px_rgba(0,102,255,0.4)]' 
                    : isClicked 
                      ? 'w-8 h-8 -ml-4 -mt-4 border-[1.5px] border-blue-600/70 bg-blue-500/10 scale-90' 
                      : 'w-9 h-9 -ml-[18px] -mt-[18px] border-[1.5px] border-blue-500/40 bg-blue-500/[0.03] backdrop-blur-[0.5px]'
              }`}
            />
          </div>
        </>
      )}

      {/* ============================================================== */}
      {/* VARIANT 2: "page2" (Home Page 2 futuristic glowing orb reticle)*/}
      {/* ============================================================== */}
      {variant === 'page2' && (
        <>
          {/* Glowing Center Orb */}
          <div
            ref={dotRef}
            className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform transition-opacity duration-200"
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            <div 
              className={`rounded-full transition-all duration-200 ease-out cursor-orb-pulse ${
                isClicked 
                  ? 'w-2 h-2 -ml-1 -mt-1 bg-cyan-200 scale-75 shadow-[0_0_15px_#22D3EE,0_0_30px_rgba(34,211,238,0.9)]' 
                  : isHovered 
                    ? 'w-2 h-2 -ml-1 -mt-1 bg-white scale-110 shadow-[0_0_12px_#22D3EE,0_0_25px_rgba(34,211,238,0.8)]' 
                    : 'w-[6px] h-[6px] -ml-[3px] -mt-[3px] bg-[#22D3EE] shadow-[0_0_10px_#22D3EE,0_0_20px_rgba(34,211,238,0.6),0_0_32px_rgba(6,182,212,0.4)]'
              }`}
            />
          </div>

          {/* Rotating Dashed Reticle Ring */}
          <div
            ref={ringRef}
            className="fixed top-0 left-0 pointer-events-none z-[99998] will-change-transform transition-opacity duration-200"
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            <div 
              className={`relative rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isHovered ? 'cursor-reticle-spin-fast' : 'cursor-reticle-spin'
              } ${
                isHovered 
                  ? 'w-14 h-14 -ml-7 -mt-7 border-[1.5px] border-dashed border-cyan-300 bg-cyan-500/[0.12] backdrop-blur-[1px] shadow-[0_0_28px_rgba(34,211,238,0.45)]' 
                  : isClicked 
                    ? 'w-7 h-7 -ml-3.5 -mt-3.5 border-[1.5px] border-dashed border-cyan-300 bg-cyan-500/20 scale-90' 
                    : 'w-8 h-8 -ml-4 -mt-4 border-[1.5px] border-dashed border-cyan-400/60'
              }`}
            >
              {/* Micro Reticle Targeting Ticks */}
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-[2px] h-1 bg-cyan-400/80 rounded-full" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[2px] h-1 bg-cyan-400/80 rounded-full" />
              <span className="absolute top-1/2 -left-1 -translate-y-1/2 h-[2px] w-1 bg-cyan-400/80 rounded-full" />
              <span className="absolute top-1/2 -right-1 -translate-y-1/2 h-[2px] w-1 bg-cyan-400/80 rounded-full" />
            </div>
          </div>

          {/* Click Sonar Ping Waves */}
          {ripples.map((ripple) => (
            <div
              key={ripple.id}
              className="fixed top-0 left-0 pointer-events-none z-[99997]"
              style={{ transform: `translate3d(${ripple.x}px, ${ripple.y}px, 0)` }}
            >
              <div className="w-12 h-12 -ml-6 -mt-6 rounded-full border border-cyan-400/90 bg-cyan-400/10 cursor-ping-ripple" />
            </div>
          ))}
        </>
      )}
    </>
  );
}
