import React, { useRef, useEffect } from 'react';

export default function FiberCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initNetwork();
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for subtle interactive perturbation
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Network nodes & pulses
    let nodes = [];
    let pulses = [];

    function initNetwork() {
      nodes = [];
      pulses = [];
      const nodeCount = Math.min(36, Math.floor((width * height) / 30000));

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() > 0.8 ? 3.5 : 2,
          isHub: Math.random() > 0.85,
          color: Math.random() > 0.4 ? '#0066FF' : '#00D2FF',
          pulseTimer: Math.random() * 100,
        });
      }
    }

    initNetwork();

    let lastPulseTime = 0;

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Move nodes
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Interactive mouse repel/attract
        const dx = mouse.x - nodeA.x;
        const dy = mouse.y - nodeA.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (1 - dist / 150) * 0.6;
          nodeA.x -= (dx / dist) * force;
          nodeA.y -= (dy / dist) * force;
        }

        // Draw links to nearest nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const distNodes = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);
          const maxDist = nodeA.isHub || nodeB.isHub ? 220 : 160;

          if (distNodes < maxDist) {
            const alpha = Math.pow(1 - distNodes / maxDist, 1.6) * 0.28;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(0, 150, 255, ${alpha})`;
            ctx.lineWidth = nodeA.isHub && nodeB.isHub ? 1.5 : 0.8;
            ctx.stroke();

            // Randomly spawn pulses along established connections
            if (time - lastPulseTime > 200 && Math.random() < 0.003) {
              pulses.push({
                from: nodeA,
                to: nodeB,
                progress: 0,
                speed: 0.015 + Math.random() * 0.015,
                color: Math.random() > 0.5 ? '#00D2FF' : '#0066FF',
              });
              lastPulseTime = time;
            }
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeA.color;
        ctx.shadowColor = nodeA.color;
        ctx.shadowBlur = nodeA.isHub ? 12 : 5;
        ctx.fill();

        if (nodeA.isHub) {
          ctx.beginPath();
          ctx.arc(nodeA.x, nodeA.y, nodeA.radius + 4 + Math.sin(time * 0.003 + i) * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 210, 255, 0.4)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw light pulses (packets)
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const px = pulse.from.x + (pulse.to.x - pulse.from.x) * pulse.progress;
        const py = pulse.from.y + (pulse.to.y - pulse.from.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = pulse.color;
        ctx.shadowColor = pulse.color;
        ctx.shadowBlur = 10;
        ctx.fill();
      }

      // Reset shadow blur
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full opacity-60 mix-blend-screen"
    />
  );
}

