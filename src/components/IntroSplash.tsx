import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Code2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface IntroSplashProps {
  onComplete: () => void;
  forceShow?: boolean;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete, forceShow = false }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // If not forced and already seen in this session, we can skip or show quickly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 350);
          return 100;
        }
        return prev + 2.5; // reaches 100% in approx 2.2 seconds
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-2xl text-white overflow-hidden"
        >
          {/* Glowing Ambient Background Lights */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-slate-300 backdrop-blur-md border border-white/10 transition-all cursor-pointer group"
          >
            <span>Skip Intro</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Center Card */}
          <div className="relative flex flex-col items-center text-center p-8 max-w-sm mx-auto">
            {/* AM Animated Monogram / Logo */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative mb-6"
            >
              <div className="w-24 h-24 rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 shadow-2xl shadow-cyan-500/25">
                <div className="w-full h-full rounded-[14px] bg-slate-900/90 backdrop-blur-xl flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                  <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent font-sans">
                    AM
                  </span>
                  <div className="flex items-center gap-1 mt-0.5 text-[9px] uppercase tracking-widest text-cyan-400/80 font-mono">
                    <Code2 className="w-2.5 h-2.5" />
                    <span>DEV</span>
                  </div>
                </div>
              </div>

              {/* Pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="absolute -inset-2 rounded-3xl border border-cyan-400/40 pointer-events-none"
              />
            </motion.div>

            {/* Name Reveal */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl font-bold tracking-tight text-white mb-1"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-xs text-slate-400 font-mono tracking-wide mb-6"
            >
              Full Stack & Frontend Developer
            </motion.p>

            {/* Progress bar container */}
            <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden p-[1px] border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500 font-mono"
            >
              <Sparkles className="w-3 h-3 text-cyan-400 animate-spin" />
              <span>Initializing Workspace... {Math.round(progress)}%</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
