import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Rocket, 
  Target, 
  Heart, 
  Sparkles, 
  Cpu, 
  Laptop, 
  ShieldCheck, 
  Zap,
  Globe2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { theme } = useTheme();

  const values = [
    {
      icon: Zap,
      title: 'Performance & Speed',
      description: 'Zero bloat architecture with lightning-fast First Contentful Paint, minimal bundle sizes, and fluid 60 FPS transitions.'
    },
    {
      icon: Laptop,
      title: 'Mobile-First Precision',
      description: 'Flawless responsive layouts verified across every screen viewport — from compact smartphones to ultra-wide displays.'
    },
    {
      icon: ShieldCheck,
      title: 'Production-Grade Quality',
      description: 'Strict TypeScript typing, modular scalable architecture, and resilient client-side state with LocalStorage persistence.'
    },
    {
      icon: Globe2,
      title: 'Modern Ecosystem',
      description: 'Leveraging Next.js App Router, React 19 hooks, Tailwind CSS utility styling, and automated Vercel edge deployment.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 text-cyan-500 bg-cyan-500/10 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Ali Murtaza</span>
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            A dedicated software developer turning complex problems into intuitive, high-performance web applications with modern aesthetics.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Story Card (8 cols) */}
          <div
            className={`md:col-span-8 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/60 border-white/10 text-slate-200'
                : 'bg-white/80 border-slate-200 text-slate-800 shadow-lg shadow-slate-100'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Engineering Digital Experiences
                </h3>
                <p className="text-xs text-cyan-500 font-mono">Web Developer • Problem Solver</p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                I am a web developer with a relentless curiosity for cutting-edge frontend and full-stack technologies. My primary focus revolves around <strong className="text-cyan-400 font-semibold">Next.js, React, TypeScript, and Tailwind CSS</strong>.
              </p>
              <p>
                Over the past several years, I have engineered full-scale e-commerce stores (such as <em>Ali-fragrance</em> and <em>Uniq-glasses</em>), interactive canvas-based web games (including chess logic engines and runner games), and sleek developer tools.
              </p>
              <p>
                I believe that modern software must combine mathematical performance with delightful aesthetics. From micro-interactions to zero layout shifts, every detail is engineered with intention.
              </p>
            </div>

            {/* Core Focus Pills */}
            <div className="mt-6 pt-6 border-t border-slate-700/20 flex flex-wrap gap-2">
              {['Full-Stack Development', 'Next.js App Router', 'React 19 Hooks', 'TypeScript Strict Mode', 'Tailwind Glassmorphism', 'Canvas 2D/3D Games', 'RESTful APIs'].map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-3 py-1 rounded-lg font-mono ${
                    theme === 'dark'
                      ? 'bg-slate-800 text-slate-300 border border-white/5'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Stats & Objectives (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Career Goals Card */}
            <div
              className={`rounded-3xl p-6 backdrop-blur-xl border flex-1 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-white/10 text-slate-200'
                  : 'bg-white/80 border-slate-200 text-slate-800 shadow-lg shadow-slate-100'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Career Aspirations
                </h4>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed mb-4">
                Aiming to contribute to ambitious engineering teams building scalable web platforms, high-performance SaaS tools, and next-generation interactive applications.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Rocket className="w-4 h-4" />
                <span>Continuous Learning & Mastery</span>
              </div>
            </div>

            {/* Developer Philosophy Card */}
            <div
              className={`rounded-3xl p-6 backdrop-blur-xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-cyan-950/40 via-slate-900/80 to-blue-950/40 border-cyan-500/20 text-slate-200'
                  : 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200 text-slate-800 shadow-md shadow-cyan-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-rose-500" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-cyan-500">
                  Philosophy
                </span>
              </div>
              <p className="text-xs sm:text-sm italic font-medium">
                "Clean code, intuitive design, and relentless dedication to user experience create software that truly endures."
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Engineering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className={`rounded-2xl p-6 backdrop-blur-xl border transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-slate-900/40 border-white/5 hover:border-cyan-500/30 hover:bg-slate-900/70'
                    : 'bg-white/60 border-slate-200/80 hover:border-cyan-400 hover:bg-white shadow-sm'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className={`text-base font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {v.title}
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
