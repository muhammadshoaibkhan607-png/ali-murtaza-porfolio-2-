import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  Eye, 
  X, 
  CheckCircle2, 
  ChevronRight,
  Monitor,
  Smartphone
} from 'lucide-react';
import { REAL_PROJECTS, Project, PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = ['All Projects (6)', 'E-Commerce & Showcases', 'AI & Interactive Games'];

  const filteredProjects = REAL_PROJECTS.filter((p) => {
    if (selectedFilter === 'All Projects (6)' || selectedFilter === 'All') return true;
    if (selectedFilter === 'E-Commerce & Showcases') {
      return p.category.includes('Commerce') || p.category.includes('Showcase') || p.category.includes('Store');
    }
    if (selectedFilter === 'AI & Interactive Games') {
      return p.category.includes('AI') || p.category.includes('Game') || p.category.includes('Multiplayer') || p.category.includes('Canvas');
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 text-cyan-500 bg-cyan-500/10 border border-cyan-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRODUCTION SHOWCASE</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects & Deployments</span>
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Real-world web applications, custom e-commerce stores, and canvas game engines deployed live on Vercel from my GitHub repositories.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105'
                  : theme === 'dark'
                  ? 'bg-slate-900/60 text-slate-300 border border-white/5 hover:bg-slate-800'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group rounded-3xl overflow-hidden border backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-slate-900/50 border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/80 shadow-xl shadow-black/40'
                    : 'bg-white/90 border-slate-200 hover:border-cyan-400 hover:bg-white shadow-lg shadow-slate-100'
                }`}
                onClick={() => setActiveModalProject(project)}
              >
                {/* Project Image Preview with Glass Gradient Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Badges on Image */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-md bg-slate-900/80 border border-white/15 text-cyan-300">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold backdrop-blur-md bg-cyan-500/90 text-white shadow-md">
                        FEATURED
                      </span>
                    )}
                  </div>

                  {/* Quick Inspect Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-xs">
                    <span className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/90 text-slate-900 shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className={`text-lg font-bold tracking-tight mb-2 group-hover:text-cyan-400 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-md ${
                            theme === 'dark'
                              ? 'bg-slate-800 text-slate-300 border border-white/5'
                              : 'bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: Live Demo & GitHub */}
                  <div className="pt-4 border-t border-slate-700/20 flex items-center justify-between gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all shadow-sm shadow-cyan-500/20 group/btn"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`p-2 rounded-xl border transition-colors ${
                        theme === 'dark'
                          ? 'border-white/10 bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700'
                          : 'border-slate-300 bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                      }`}
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub Direct Link Banner */}
        <div className="mt-16 text-center">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-cyan-500/30 text-white shadow-xl shadow-cyan-500/10'
                : 'bg-white border-cyan-200 text-slate-900 shadow-md shadow-cyan-100'
            }`}
          >
            <Github className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold text-sm">
              Explore all repositories on GitHub (@muhammadshoaibkhan607-png)
            </span>
            <ExternalLink className="w-4 h-4 text-cyan-500" />
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative w-full max-w-2xl rounded-3xl overflow-hidden border shadow-2xl z-10 my-8 ${
                theme === 'dark'
                  ? 'bg-slate-900 border-white/15 text-white shadow-black/80'
                  : 'bg-white border-slate-200 text-slate-900 shadow-slate-300'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/9] w-full bg-slate-950">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500 text-white font-bold mb-2 inline-block">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {activeModalProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-500 font-bold mb-2">
                    Project Overview
                  </h4>
                  <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                    {activeModalProject.longDescription}
                  </p>
                </div>

                {/* Key Architectural Highlights */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-500 font-bold mb-2">
                    Key Features & Engineering Highlights
                  </h4>
                  <div className="space-y-2">
                    {activeModalProject.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack Badges */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-500 font-bold mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((t) => (
                      <span
                        key={t}
                        className={`text-xs font-mono px-3 py-1 rounded-lg ${
                          theme === 'dark'
                            ? 'bg-slate-800 text-cyan-300 border border-white/5'
                            : 'bg-slate-100 text-cyan-800 border border-slate-200'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-700/20">
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/25"
                  >
                    <span>Launch Live Application</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-all ${
                      theme === 'dark'
                        ? 'border-white/10 bg-slate-800 text-white hover:bg-slate-700'
                        : 'border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
