import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export const AnimatedBackground: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes definition
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.4 + 0.2,
      });
    }

    // Mouse tracking for particle interaction
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';
      const nodeColor = isDark ? '6, 182, 212' : '14, 165, 233'; // Cyan-500
      const linkColor = isDark ? '99, 102, 241' : '59, 130, 246'; // Indigo-500

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse proximity gentle push
        const dxMouse = p.x - mouseX;
        const dyMouse = p.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 120) {
          const force = (120 - distMouse) / 120;
          p.x += (dxMouse / distMouse) * force * 1.5;
          p.y += (dyMouse / distMouse) * force * 1.5;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeColor}, ${p.baseAlpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const alpha = (1 - dist / 115) * (isDark ? 0.16 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${linkColor}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect particle to mouse if nearby
        if (distMouse < 130) {
          const alpha = (1 - distMouse / 130) * 0.28;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(${nodeColor}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  // Floating code fragments in background
  const codeTokens = [
    { text: '<Component />', top: '15%', left: '8%', delay: 0 },
    { text: 'const build = async () => {}', top: '28%', left: '82%', delay: 2 },
    { text: 'Next.js 15 & React 19', top: '48%', left: '12%', delay: 1.5 },
    { text: '01000001 01001101', top: '65%', left: '86%', delay: 3 },
    { text: 'git commit -m "feat: AI Engine"', top: '78%', left: '18%', delay: 0.8 },
    { text: '{ state, dispatch }', top: '88%', left: '72%', delay: 2.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Aurora Ambient Nebulas */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full blur-[140px] opacity-40 transition-colors ${
          theme === 'dark' ? 'bg-cyan-600/30' : 'bg-cyan-400/25'
        }`}
      />

      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -50, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className={`absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full blur-[150px] opacity-35 transition-colors ${
          theme === 'dark' ? 'bg-indigo-600/30' : 'bg-indigo-400/20'
        }`}
      />

      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className={`absolute -bottom-40 left-1/3 w-[650px] h-[650px] rounded-full blur-[140px] opacity-30 transition-colors ${
          theme === 'dark' ? 'bg-purple-600/25' : 'bg-purple-400/15'
        }`}
      />

      {/* Subtle Developer Cyber Grid */}
      <div
        className={`absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] ${
          theme === 'dark' ? 'opacity-35' : 'opacity-20'
        }`}
      />

      {/* Vertical Animated Laser Scanline */}
      <motion.div
        animate={{ y: ['-100%', '200%'] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-40 pointer-events-none"
      />

      {/* Floating Developer Code Fragments */}
      {codeTokens.map((token, idx) => (
        <motion.div
          key={idx}
          animate={{
            y: [0, -16, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 6 + idx * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: token.delay,
          }}
          style={{ top: token.top, left: token.left }}
          className={`absolute hidden md:block text-[11px] font-mono tracking-wider select-none ${
            theme === 'dark' ? 'text-cyan-300' : 'text-slate-500'
          }`}
        >
          {token.text}
        </motion.div>
      ))}

      {/* Dynamic Particle Constellation Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};
