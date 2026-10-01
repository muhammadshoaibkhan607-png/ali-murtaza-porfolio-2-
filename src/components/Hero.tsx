import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Github, 
  Mail, 
  MessageCircle, 
  Sparkles, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Download,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, TYPING_ROLES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Hero: React.FC = () => {
  const { theme } = useTheme();

  // Typewriter effect state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentFullRole = TYPING_ROLES[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing characters
        setDisplayedText(currentFullRole.substring(0, displayedText.length + 1));
        setTypingSpeed(90);

        if (displayedText.length + 1 === currentFullRole.length) {
          // Pause at end before deleting
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        // Deleting characters
        setDisplayedText(currentFullRole.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
          setTypingSpeed(400);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Glow Spheres */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Typing Writer & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-6 backdrop-blur-xl border ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-cyan-500/30 text-cyan-300 shadow-sm shadow-cyan-500/20'
                  : 'bg-white/90 border-cyan-300 text-cyan-800 shadow-sm shadow-cyan-200'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono tracking-wide">{PERSONAL_INFO.availability}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 mb-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-500 font-semibold">
                  Hello, I'm
                </span>
                <span className="h-[1px] w-12 bg-cyan-500/50"></span>
              </div>
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                {PERSONAL_INFO.name}
              </h1>
            </motion.div>

            {/* Typewriter Skill Output */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="min-h-[44px] flex items-center mb-6"
            >
              <span
                className={`text-xl sm:text-2xl lg:text-3xl font-bold font-mono tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent flex items-center`}
              >
                <span>{displayedText}</span>
                <span className="ml-1 inline-block w-2.5 h-7 sm:h-8 bg-cyan-400 animate-pulse rounded-sm" />
              </span>
            </motion.div>

            {/* Professional Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-base sm:text-lg max-w-2xl leading-relaxed mb-8 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto"
            >
              {/* View Projects CTA */}
              <a
                href="#projects"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* GitHub Button */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm border backdrop-blur-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer ${
                  theme === 'dark'
                    ? 'border-white/10 bg-slate-900/80 text-white hover:bg-slate-800 hover:border-cyan-500/40'
                    : 'border-slate-300 bg-white/90 text-slate-800 hover:bg-slate-50 hover:border-cyan-500'
                }`}
              >
                <Github className="w-4 h-4 text-cyan-500" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              {/* WhatsApp Quick Chat */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm border backdrop-blur-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer ${
                  theme === 'dark'
                    ? 'border-emerald-500/30 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/40'
                    : 'border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                }`}
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Contact Me CTA */}
              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm border backdrop-blur-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer ${
                  theme === 'dark'
                    ? 'border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                    : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact</span>
              </a>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700/20 w-full max-w-lg"
            >
              <div>
                <div className="text-2xl font-bold font-mono text-cyan-500">
                  {PERSONAL_INFO.projectsCompleted}
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  Deployed Projects
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-blue-500">
                  {PERSONAL_INFO.githubRepos}
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  GitHub Repos
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-500">
                  100%
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  Client Dedication
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Exact Profile Photo in Glassmorphic Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[380px] sm:max-w-[420px]"
            >
              {/* Outer Glowing Radial Gradient */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-blue-500/20 to-purple-600/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Glass Frame Container */}
              <div
                className={`relative rounded-3xl p-3 sm:p-4 backdrop-blur-2xl transition-all duration-300 shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-slate-900/60 border border-white/15 shadow-black/60'
                    : 'bg-white/70 border border-slate-200/90 shadow-slate-200/60'
                }`}
              >
                {/* Photo with subtle inner border and rounded corners */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-950 shadow-inner group">
                  <img
                    src={PERSONAL_INFO.profilePhoto}
                    alt={`${PERSONAL_INFO.name} - Software Developer`}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (!e.currentTarget.src.includes('ali_murtaza_portrait')) {
                        e.currentTarget.src = '/src/assets/images/ali_murtaza_portrait_1790591227942.jpg';
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient bottom overlay for smooth lighting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Glass overlay badge on photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/75 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold flex items-center gap-1.5 text-white">
                        <span>{PERSONAL_INFO.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 inline" />
                      </div>
                      <div className="text-[11px] text-cyan-300/80 font-mono">
                        Full Stack Web Engineer
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                      <Terminal className="w-3 h-3" />
                      <span>Next.js</span>
                    </div>
                  </div>
                </div>

                {/* Floating Glass Badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className={`absolute -top-4 -left-4 px-3.5 py-2 rounded-xl backdrop-blur-xl border text-xs font-mono flex items-center gap-2 shadow-lg ${
                    theme === 'dark'
                      ? 'bg-slate-900/80 border-cyan-500/30 text-cyan-300 shadow-black/40'
                      : 'bg-white/90 border-cyan-300 text-cyan-700 shadow-slate-300'
                  }`}
                >
                  <Code2 className="w-4 h-4 text-cyan-500" />
                  <span className="font-semibold">TypeScript & React</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                  className={`absolute -bottom-4 -right-4 px-3.5 py-2 rounded-xl backdrop-blur-xl border text-xs font-mono flex items-center gap-2 shadow-lg ${
                    theme === 'dark'
                      ? 'bg-slate-900/80 border-indigo-500/30 text-indigo-300 shadow-black/40'
                      : 'bg-white/90 border-indigo-300 text-indigo-700 shadow-slate-300'
                  }`}
                >
                  <Layers className="w-4 h-4 text-indigo-500" />
                  <span className="font-semibold">Tailwind Glass UI</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
