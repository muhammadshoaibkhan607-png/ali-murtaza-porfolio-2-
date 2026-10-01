import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  PieChart, 
  GitCommit, 
  BarChart3, 
  Sparkles, 
  Activity, 
  Code2, 
  Layers, 
  TrendingUp,
  Cpu
} from 'lucide-react';
import { RADAR_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Visualizations3D: React.FC = () => {
  const { theme } = useTheme();
  const [activeRadarPoint, setActiveRadarPoint] = useState<number | null>(null);

  // Calculate radar polygon points
  const centerX = 160;
  const centerY = 160;
  const radius = 110;
  const totalSides = RADAR_DATA.length;

  const getCoordinates = (index: number, score: number) => {
    const angle = (Math.PI * 2 / totalSides) * index - Math.PI / 2;
    const r = (score / 100) * radius;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    return { x, y, angle };
  };

  const polygonPoints = RADAR_DATA.map((item, index) => {
    const { x, y } = getCoordinates(index, item.score);
    return `${x},${y}`;
  }).join(' ');

  // Simulated GitHub commit heatmap weeks
  const weeks = Array.from({ length: 24 }, (_, weekIdx) => 
    Array.from({ length: 7 }, (_, dayIdx) => {
      // Deterministic pseudo-activity distribution
      const val = (weekIdx * 3 + dayIdx * 7) % 5;
      return val;
    })
  );

  return (
    <section id="visuals" className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 text-cyan-500 bg-cyan-500/10 border border-cyan-500/20">
            <PieChart className="w-3.5 h-3.5" />
            <span>3D DATA & ANALYTICS</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Engineering <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Telemetry & Metrics</span>
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            A quantitative overview of technical competencies, commit cadence, and architectural balance.
          </p>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Radar Chart (7 cols) */}
          <div
            className={`lg:col-span-6 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border flex flex-col justify-between transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/60 border-white/10 shadow-xl shadow-black/40'
                : 'bg-white/80 border-slate-200 shadow-lg shadow-slate-100'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-base sm:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Skill Matrix Radar
                  </h3>
                  <p className="text-xs text-cyan-500 font-mono">Multidimensional Evaluation</p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Interactive
              </span>
            </div>

            {/* Radar SVG */}
            <div className="relative flex items-center justify-center my-4 overflow-visible">
              <svg width="320" height="320" viewBox="0 0 320 320" className="overflow-visible">
                {/* Background concentric polygons */}
                {[0.25, 0.5, 0.75, 1].map((scale) => {
                  const ringPoints = RADAR_DATA.map((_, i) => {
                    const angle = (Math.PI * 2 / totalSides) * i - Math.PI / 2;
                    const r = scale * radius;
                    return `${centerX + r * Math.cos(angle)},${centerY + r * Math.sin(angle)}`;
                  }).join(' ');

                  return (
                    <polygon
                      key={scale}
                      points={ringPoints}
                      fill="none"
                      stroke={theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}
                      strokeWidth="1"
                      strokeDasharray={scale < 1 ? '3 3' : 'none'}
                    />
                  );
                })}

                {/* Axis lines */}
                {RADAR_DATA.map((_, i) => {
                  const angle = (Math.PI * 2 / totalSides) * i - Math.PI / 2;
                  const x = centerX + radius * Math.cos(angle);
                  const y = centerY + radius * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1={centerX}
                      y1={centerY}
                      x2={x}
                      y2={y}
                      stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Animated Filled Area */}
                <motion.polygon
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  points={polygonPoints}
                  fill="url(#radarGradient)"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  className="filter drop-shadow-lg"
                />

                {/* Radial Gradient Definition */}
                <defs>
                  <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
                  </linearGradient>
                </defs>

                {/* Interactive Points & Labels */}
                {RADAR_DATA.map((item, i) => {
                  const { x, y } = getCoordinates(i, item.score);
                  const labelCoord = getCoordinates(i, 130);
                  const isHovered = activeRadarPoint === i;

                  return (
                    <g key={i}>
                      {/* Interactive Vertex Circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered ? 7 : 4.5}
                        fill="#06b6d4"
                        stroke="#ffffff"
                        strokeWidth="2"
                        className="cursor-pointer transition-all duration-200"
                        onMouseEnter={() => setActiveRadarPoint(i)}
                        onMouseLeave={() => setActiveRadarPoint(null)}
                      />

                      {/* Vertex Label */}
                      <text
                        x={labelCoord.x}
                        y={labelCoord.y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className={`text-[10px] sm:text-[11px] font-mono font-semibold transition-colors ${
                          isHovered 
                            ? 'fill-cyan-400 font-bold' 
                            : theme === 'dark' 
                            ? 'fill-slate-300' 
                            : 'fill-slate-700'
                        }`}
                      >
                        {item.subject}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Active Point Detail Banner */}
            <div
              className={`p-3 rounded-xl border flex items-center justify-between text-xs font-mono transition-colors ${
                activeRadarPoint !== null
                  ? theme === 'dark'
                    ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-300'
                    : 'bg-cyan-50 border-cyan-300 text-cyan-800'
                  : theme === 'dark'
                  ? 'bg-slate-800/40 border-white/5 text-slate-400'
                  : 'bg-slate-100 border-slate-200 text-slate-600'
              }`}
            >
              <span>
                {activeRadarPoint !== null
                  ? `${RADAR_DATA[activeRadarPoint].subject}`
                  : 'Hover over vertex points for exact proficiency'}
              </span>
              <span className="font-bold text-cyan-400">
                {activeRadarPoint !== null
                  ? `${RADAR_DATA[activeRadarPoint].score}% Mastery`
                  : '100% Normalized'}
              </span>
            </div>
          </div>

          {/* GitHub Activity & Code Breakdown (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* GitHub Commits Simulation Heatmap Card */}
            <div
              className={`rounded-3xl p-6 backdrop-blur-xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-white/10 text-slate-200 shadow-xl shadow-black/40'
                  : 'bg-white/80 border-slate-200 text-slate-800 shadow-lg shadow-slate-100'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <GitCommit className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      GitHub Commit Cadence
                    </h3>
                    <p className="text-xs text-emerald-500 font-mono">
                      @muhammadshoaibkhan607-png
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    Active Streak
                  </span>
                </div>
              </div>

              {/* Heatmap Grid */}
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-1 min-w-[340px]">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1">
                      {week.map((level, dIdx) => {
                        const colorsDark = [
                          'bg-slate-800/60',
                          'bg-emerald-950 text-emerald-300',
                          'bg-emerald-700/80',
                          'bg-emerald-500',
                          'bg-emerald-400'
                        ];
                        const colorsLight = [
                          'bg-slate-100',
                          'bg-emerald-200',
                          'bg-emerald-300',
                          'bg-emerald-500',
                          'bg-emerald-600'
                        ];
                        const colorClass = theme === 'dark' ? colorsDark[level] : colorsLight[level];

                        return (
                          <div
                            key={dIdx}
                            title={`Activity intensity: ${level * 2} commits`}
                            className={`w-2.5 h-2.5 rounded-sm ${colorClass} transition-transform hover:scale-125 cursor-pointer`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mt-4 pt-3 border-t border-slate-700/20">
                <span>Recent 6 Months</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-sm bg-slate-700/40" />
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-700/60" />
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Architecture Ratio Card */}
            <div
              className={`rounded-3xl p-6 backdrop-blur-xl border flex-1 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-white/10 text-slate-200 shadow-xl shadow-black/40'
                  : 'bg-white/80 border-slate-200 text-slate-800 shadow-lg shadow-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Project Domain Distribution
                  </h4>
                  <p className="text-xs text-blue-500 font-mono">Portfolio Architecture</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {[
                  { domain: 'E-Commerce & High-Conversion Catalogs', percentage: 35, color: 'from-cyan-400 to-blue-500' },
                  { domain: 'Generative AI & Interactive Logic Engines', percentage: 35, color: 'from-purple-500 to-indigo-600' },
                  { domain: 'Full Stack Next.js & REST API Systems', percentage: 30, color: 'from-blue-500 to-cyan-500' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                        {item.domain}
                      </span>
                      <span className="font-bold text-cyan-400">{item.percentage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full overflow-hidden bg-slate-700/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
