import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles, 
  Terminal, 
  ArrowUpRight,
  User,
  Cpu,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Mail,
  BookOpen,
  PieChart
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onReplayIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'visuals', 'projects', 'experience', 'education', 'blog', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home', icon: Terminal },
    { label: 'About', href: '#about', id: 'about', icon: User },
    { label: 'Skills', href: '#skills', id: 'skills', icon: Cpu },
    { label: 'Visuals', href: '#visuals', id: 'visuals', icon: PieChart },
    { label: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
    { label: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { label: 'Education', href: '#education', id: 'education', icon: GraduationCap },
    { label: 'Blog', href: '#blog', id: 'blog', icon: BookOpen },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/75 border border-white/10 shadow-xl shadow-black/40 backdrop-blur-xl'
                : 'bg-white/80 border border-slate-200/80 shadow-lg shadow-slate-200/40 backdrop-blur-xl'
            }`}
          >
            {/* AM Monogram Logo */}
            <a
              href="#home"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl p-[1.5px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 transition-transform duration-300 group-hover:scale-105 shadow-md shadow-cyan-500/20">
                <div
                  className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold text-sm tracking-tight transition-colors ${
                    theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
                  }`}
                >
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold">
                    AM
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-sm font-bold tracking-tight leading-none ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] text-cyan-500 font-mono tracking-wider font-semibold mt-1">
                  PORTFOLIO
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 relative ${
                      isActive
                        ? theme === 'dark'
                          ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30'
                          : 'text-cyan-700 bg-cyan-50 border border-cyan-200'
                        : theme === 'dark'
                        ? 'text-slate-300 hover:text-white hover:bg-white/5'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-500 rounded-full"
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Controls: Replay Intro, Theme Switcher, Quick Action */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Replay Intro Button */}
              <button
                onClick={onReplayIntro}
                title="Replay Intro Animation"
                className={`p-2 rounded-xl border text-xs transition-all duration-200 cursor-pointer hidden sm:flex items-center gap-1.5 ${
                  theme === 'dark'
                    ? 'border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-mono">Intro</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle White Glass vs Deep Black theme"
                className={`p-2 rounded-xl border transition-all duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'border-white/10 bg-slate-800/80 text-amber-400 hover:bg-slate-700/80 shadow-inner'
                    : 'border-slate-200 bg-slate-100 text-indigo-600 hover:bg-slate-200 shadow-inner'
                }`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
                )}
              </button>

              {/* Let's Talk CTA */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 group"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className={`lg:hidden p-2 rounded-xl border transition-colors cursor-pointer ${
                  theme === 'dark'
                    ? 'border-white/10 bg-white/5 text-slate-300'
                    : 'border-slate-200 bg-slate-100 text-slate-700'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-4 top-20 z-40 rounded-2xl p-5 border shadow-2xl backdrop-blur-2xl lg:hidden ${
              theme === 'dark'
                ? 'bg-slate-900/95 border-white/15 text-white shadow-black/80'
                : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-300/60'
            }`}
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? theme === 'dark'
                          ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-500/30'
                          : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                        : theme === 'dark'
                        ? 'text-slate-300 hover:bg-white/5'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-cyan-500" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-700/30 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Replay Intro</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
