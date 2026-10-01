import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Layers, 
  Atom, 
  Code2, 
  Sparkles, 
  Palette, 
  FileCode2, 
  Layout, 
  Server, 
  GitBranch, 
  CloudLightning, 
  Compass, 
  Database,
  CheckCircle,
  Filter
} from 'lucide-react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Skills: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Languages', 'Tools & Workflows', 'Backend & Cloud'];

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === selectedCategory);

  // Map icon names to Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers': return Layers;
      case 'Atom': return Atom;
      case 'Code2': return Code2;
      case 'Sparkles': return Sparkles;
      case 'Palette': return Palette;
      case 'FileCode2': return FileCode2;
      case 'Layout': return Layout;
      case 'Server': return Server;
      case 'GitBranch': return GitBranch;
      case 'CloudLightning': return CloudLightning;
      case 'Compass': return Compass;
      case 'Database': return Database;
      default: return Code2;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 text-cyan-500 bg-cyan-500/10 border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Verified technologies actively utilized across my open-source GitHub repositories and live Vercel deployments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105'
                  : theme === 'dark'
                  ? 'bg-slate-900/60 text-slate-300 border border-white/5 hover:bg-slate-800'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const Icon = getIcon(skill.iconName);

              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className={`group relative rounded-2xl p-5 backdrop-blur-xl border transition-all duration-300 hover:-translate-y-1.5 cursor-default ${
                    theme === 'dark'
                      ? 'bg-slate-900/50 border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/80 shadow-lg shadow-black/40'
                      : 'bg-white/80 border-slate-200 hover:border-cyan-400 hover:bg-white shadow-md shadow-slate-100'
                  }`}
                >
                  {/* Subtle top glossy highlight reflection */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                  {/* Header: iOS Glass Style Icon + Level */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Glass Icon Frame */}
                    <div
                      className={`w-12 h-12 rounded-2xl p-[1px] bg-gradient-to-tr ${skill.color} shadow-md`}
                    >
                      <div
                        className={`w-full h-full rounded-[15px] flex items-center justify-center backdrop-blur-md transition-transform duration-300 group-hover:scale-110 ${
                          theme === 'dark'
                            ? 'bg-slate-950/80 text-white'
                            : 'bg-white/85 text-slate-900'
                        }`}
                      >
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>

                    {/* Level percentage badge */}
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${
                        theme === 'dark'
                          ? 'bg-slate-800/80 text-cyan-300 border-cyan-500/30'
                          : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3
                    className={`text-base font-bold tracking-tight mb-1 group-hover:text-cyan-400 transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {skill.name}
                  </h3>
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-500 mb-3">
                    <span>{skill.category}</span>
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}>
                      {skill.experience}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-xs leading-relaxed mb-4 line-clamp-2 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {skill.description}
                  </p>

                  {/* Animated Progress Bar */}
                  <div className="w-full h-1.5 rounded-full overflow-hidden bg-slate-700/20">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
