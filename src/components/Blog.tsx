import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Clock, Calendar, ArrowRight, X, Tag, Sparkles, Share2 } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Blog: React.FC = () => {
  const { theme } = useTheme();
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 text-cyan-500 bg-cyan-500/10 border border-cyan-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>DEVELOPER INSIGHTS</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Engineering <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Articles & Blog</span>
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Reflections on architecture, modern Next.js development patterns, and tactile UI design principles.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setActivePost(post)}
              className={`group rounded-3xl p-6 sm:p-7 backdrop-blur-xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/80 shadow-xl shadow-black/40'
                  : 'bg-white/85 border-slate-200 hover:border-cyan-400 hover:bg-white shadow-lg shadow-slate-100'
              }`}
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-lg sm:text-xl font-bold tracking-tight mb-3 group-hover:text-cyan-400 transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {post.title}
                </h3>

                {/* Summary */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {post.summary}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md ${
                        theme === 'dark'
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read Button */}
                <div className="pt-4 border-t border-slate-700/20 flex items-center justify-between">
                  <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <BookOpen className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePost(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative w-full max-w-2xl rounded-3xl overflow-hidden border shadow-2xl z-10 my-8 p-6 sm:p-8 ${
                theme === 'dark'
                  ? 'bg-slate-900 border-white/15 text-white shadow-black/80'
                  : 'bg-white border-slate-200 text-slate-900 shadow-slate-300'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-800 text-white border border-white/10 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  {activePost.category}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  {activePost.readTime}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {activePost.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-6">
                {activePost.title}
              </h3>

              {/* Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                {activePost.content.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-slate-700/20 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {activePost.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-mono px-3 py-1 rounded-lg ${
                        theme === 'dark'
                          ? 'bg-slate-800 text-cyan-300 border border-white/5'
                          : 'bg-slate-100 text-cyan-800 border border-slate-200'
                      }`}
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActivePost(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white cursor-pointer"
                >
                  Done Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
