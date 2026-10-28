import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ArrowRight,
  Database,
  Lock,
  Flame
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function ProjectsSection() {
  const [expandedArchitecture, setExpandedArchitecture] = useState(null);

  const toggleArchitecture = (id) => {
    setExpandedArchitecture(prev => prev === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#090c15]">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Production Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Featured <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Engineering Projects</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Production-deployed platforms engineered for high throughput, sub-25ms response latencies, resilient security pipelines, and real-time AI insights.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-12">
          {projectsData.map((project, index) => {
            const isArchExpanded = expandedArchitecture === project.id;

            return (
              <motion.div
                key={project.id}
                id={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 relative group"
              >
                {/* Top Badge & Time Period */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.period}
                    </span>
                  </div>

                  {/* Actions / Links */}
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-sm"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-xs font-mono text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live System</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                  
                  {/* Left Column: Title, Description, and Bullet Points */}
                  <div className="lg:col-span-8 space-y-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-indigo-400 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Detailed Highlights from Resume */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        Key Architectural Achievements & Impacts:
                      </h4>
                      <ul className="space-y-2.5">
                        {project.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-1"
                          >
                            <span className="text-cyan-400 font-bold mt-0.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="pt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-slate-800/90 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Quantitative Metrics & Architecture Button */}
                  <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-900/70 border border-white/10">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col">
                          <span className="text-xl sm:text-2xl font-mono font-extrabold text-cyan-300">
                            {m.value}
                          </span>
                          <span className="text-xs font-semibold text-slate-200 mt-0.5">
                            {m.label}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                            {m.desc}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Architecture Drawer Toggle */}
                    <button
                      onClick={() => toggleArchitecture(project.id)}
                      className="w-full flex items-center justify-between p-3.5 rounded-xl bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-500/30 text-xs font-mono text-indigo-300 hover:text-white transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <span>System Architecture Spec</span>
                      </span>
                      {isArchExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                </div>

                {/* Architecture Spec Panel (Collapsible) */}
                {isArchExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-indigo-500/20 rounded-2xl bg-slate-950/80 p-5 border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-2">
                        <Cpu className="w-4 h-4" />
                        Component Breakdown & Data Flow Pipeline
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">Production Verified</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
                      {project.architecture.client && (
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10">
                          <span className="text-slate-400 block mb-1">01. Client Tier:</span>
                          <span className="text-slate-200">{project.architecture.client}</span>
                        </div>
                      )}
                      {(project.architecture.security || project.architecture.caching) && (
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10">
                          <span className="text-slate-400 block mb-1">
                            {project.architecture.security ? '02. Security & Auth:' : '02. Caching Tier:'}
                          </span>
                          <span className="text-indigo-300">
                            {project.architecture.security || project.architecture.caching}
                          </span>
                        </div>
                      )}
                      {project.architecture.backend && (
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10">
                          <span className="text-slate-400 block mb-1">03. Service Layer:</span>
                          <span className="text-cyan-300">{project.architecture.backend}</span>
                        </div>
                      )}
                      {(project.architecture.dataAi || project.architecture.data || project.architecture.algorithms) && (
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10">
                          <span className="text-slate-400 block mb-1">04. Data & Logic:</span>
                          <span className="text-emerald-300">
                            {project.architecture.dataAi || project.architecture.data || project.architecture.algorithms}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
