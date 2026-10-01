import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export const CustomCursor: React.FC = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for outer trailing ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Spotlight mouse position for ambient backdrop lighting
  const [spotlightPos, setSpotlightPos] = useState({ x: -500, y: -500 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if touch device
    const checkTouch = () => {
      const isTouch = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(isTouch);
    };

    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Throttled spotlight update with requestAnimationFrame
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setSpotlightPos({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track hover over interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('.cursor-pointer') ||
        target.closest('[role="button"]')
      );

      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousemove', handleElementHover, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleElementHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render cursor on mobile or touchscreens
  if (isTouchDevice) return null;

  return (
    <>
      {/* Dynamic Ambient Background Spotlight */}
      <div
        className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          background: theme === 'dark'
            ? `radial-gradient(650px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(6, 182, 212, 0.075), rgba(59, 130, 246, 0.035) 40%, transparent 80%)`
            : `radial-gradient(550px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(6, 182, 212, 0.08), rgba(59, 130, 246, 0.04) 40%, transparent 75%)`,
        }}
      />

      {/* Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 48 : isClicked ? 24 : 32,
          height: isHovered ? 48 : isClicked ? 24 : 32,
          opacity: isVisible ? 1 : 0,
          scale: isClicked ? 0.85 : 1,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        <div
          className={`w-full h-full rounded-full border transition-all duration-200 backdrop-blur-[1px] ${
            isHovered
              ? theme === 'dark'
                ? 'border-cyan-400 bg-cyan-400/15 shadow-lg shadow-cyan-500/30'
                : 'border-cyan-600 bg-cyan-500/15 shadow-md shadow-cyan-500/30'
              : theme === 'dark'
              ? 'border-cyan-400/40 bg-cyan-400/5'
              : 'border-cyan-600/40 bg-cyan-600/5'
          }`}
        />
      </motion.div>

      {/* Center Micro Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicked ? 1.6 : isHovered ? 0.5 : 1,
        }}
        transition={{ duration: 0.08 }}
      >
        <div
          className={`w-2 h-2 rounded-full transition-colors ${
            isHovered
              ? 'bg-cyan-300 shadow-md shadow-cyan-400'
              : theme === 'dark'
              ? 'bg-cyan-400 shadow-sm shadow-cyan-500/80'
              : 'bg-cyan-600 shadow-sm shadow-cyan-700/60'
          }`}
        />
      </motion.div>
    </>
  );
};
