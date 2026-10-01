import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { IntroSplash } from './components/IntroSplash';
import { CustomCursor } from './components/CustomCursor';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Visualizations3D } from './components/Visualizations3D';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function PortfolioMain() {
  const { theme } = useTheme();
  const [showIntro, setShowIntro] = useState(() => {
    try {
      // Show intro on first visit
      const seen = sessionStorage.getItem('am_intro_session_seen');
      return !seen;
    } catch {
      return true;
    }
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
    try {
      sessionStorage.setItem('am_intro_session_seen', 'true');
    } catch {
      // ignore
    }
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div
      className={`min-h-screen relative transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-slate-950 text-slate-100'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Intro Splash Animation */}
      {showIntro && (
        <IntroSplash
          onComplete={handleIntroComplete}
          forceShow={showIntro}
        />
      )}

      {/* Professional Mouse Animation & Ambient Spotlight */}
      <CustomCursor />

      {/* Dynamic Animated Background (Constellation Canvas, Aurora Nebulas & Cyber Grid) */}
      <AnimatedBackground />

      {/* Floating Glassmorphic Navbar */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Visualizations3D />
        <Projects />
        <Experience />
        <Education />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onReplayIntro={handleReplayIntro} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioMain />
    </ThemeProvider>
  );
}
