import React from 'react';
import { ArrowUp, Github, Mail, Phone, MessageCircle, Heart, Sparkles, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-slate-950/80 border-white/10 text-slate-400'
          : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Bio */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl p-[1px] bg-gradient-to-tr from-cyan-400 to-blue-600">
              <div
                className={`w-full h-full rounded-[11px] flex items-center justify-center font-bold text-xs ${
                  theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
                }`}
              >
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold">
                  AM
                </span>
              </div>
            </div>
            <div>
              <div className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[11px] font-mono text-cyan-500">
                Full Stack & Frontend Developer
              </div>
            </div>
          </div>

          {/* Social Badges */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              className={`p-2.5 rounded-xl border transition-all ${
                theme === 'dark'
                  ? 'border-white/10 bg-slate-900 text-slate-300 hover:text-white hover:border-cyan-500/40'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900 hover:border-cyan-500'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              title="Send Email"
              className={`p-2.5 rounded-xl border transition-all ${
                theme === 'dark'
                  ? 'border-white/10 bg-slate-900 text-slate-300 hover:text-white hover:border-cyan-500/40'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900 hover:border-cyan-500'
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              title="WhatsApp Chat"
              className={`p-2.5 rounded-xl border transition-all ${
                theme === 'dark'
                  ? 'border-white/10 bg-slate-900 text-emerald-400 hover:border-emerald-500/40'
                  : 'border-slate-200 bg-slate-100 text-emerald-600 hover:border-emerald-500'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={onReplayIntro}
              title="Replay Intro Experience"
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'border-white/10 bg-slate-900 text-cyan-400 hover:border-cyan-500/40'
                  : 'border-slate-200 bg-slate-100 text-cyan-600 hover:border-cyan-500'
              }`}
            >
              <Sparkles className="w-4 h-4" />
            </button>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'border-white/10 bg-slate-900 text-slate-300 hover:text-white'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900'
              }`}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-8 pt-6 border-t border-slate-700/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-center sm:text-left gap-2">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Code2 className="w-3.5 h-3.5 text-cyan-400 inline" />
            <span>React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
