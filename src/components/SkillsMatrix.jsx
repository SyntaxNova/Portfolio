import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Layout, 
  Cloud, 
  Binary, 
  Sparkles, 
  Zap, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { skillsData, projectsData } from '../data/portfolioData';

export default function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSkillHighlight, setActiveSkillHighlight] = useState(null);

  const categories = ['All', ...skillsData.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All' 
    ? skillsData 
    : skillsData.filter(c => c.category === selectedCategory);

  // Find which projects use a given skill
  const getProjectsUsingSkill = (skillName) => {
    return projectsData.filter(p => 
      p.techStack.some(t => t.toLowerCase().includes(skillName.toLowerCase()) || skillName.toLowerCase().includes(t.toLowerCase()))
    );
  };

  const activeProjects = activeSkillHighlight ? getProjectsUsingSkill(activeSkillHighlight) : [];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background Grid & ambient */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Engineered with <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Modern Tech</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A comprehensive overview of my programming languages, frameworks, cloud tooling, and system design expertise. Click any skill to see where it is applied in production!
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] border border-white/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Skill Impact Bar */}
        {activeSkillHighlight && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          >
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-indigo-500/20 text-cyan-300 font-mono font-bold">
                {activeSkillHighlight}
              </span>
              <span className="text-slate-200">
                {activeProjects.length > 0 
                  ? `Applied in ${activeProjects.length} core project${activeProjects.length > 1 ? 's' : ''}:` 
                  : `Core engineering capability & coursework foundation.`}
              </span>
            </div>
            {activeProjects.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                {activeProjects.map(proj => (
                  <a
                    key={proj.id}
                    href={`#${proj.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-400/30 text-xs font-mono text-cyan-300 transition-colors"
                  >
                    <span>{proj.title}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            )}
            <button
              onClick={() => setActiveSkillHighlight(null)}
              className="text-xs text-slate-400 hover:text-white underline"
            >
              Clear
            </button>
          </motion.div>
        )}

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between border-t-2 border-indigo-500/30 hover:border-cyan-400/50"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 text-cyan-400 border border-white/10">
                      {group.category.includes('Languages') && <Code2 className="w-5 h-5" />}
                      {group.category.includes('Backend') && <Server className="w-5 h-5" />}
                      {group.category.includes('Databases') && <Database className="w-5 h-5" />}
                      {group.category.includes('Frontend') && <Layout className="w-5 h-5" />}
                      {group.category.includes('Cloud') && <Cloud className="w-5 h-5" />}
                      {group.category.includes('CS Fundamentals') && <Binary className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{group.category}</h3>
                      <p className="text-[11px] font-mono text-slate-400">{group.skills.length} competencies</p>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const isSelected = activeSkillHighlight === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setActiveSkillHighlight(isSelected ? null : skill.name)}
                        className={`group flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-xs font-mono transition-all duration-200 text-left ${
                          isSelected
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                            : skill.highlight
                              ? 'bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-indigo-500/30 hover:border-indigo-400'
                              : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 border border-white/5 hover:border-white/15'
                        }`}
                      >
                        <span className="font-medium group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                          skill.level === 'Advanced' || skill.level === 'Certified' || skill.level.includes('200+')
                            ? 'bg-indigo-500/20 text-indigo-300'
                            : 'bg-slate-700/50 text-slate-400'
                        }`}>
                          {skill.level}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Production tested</span>
                <span className="text-cyan-400/80 group-hover:text-cyan-300">Click to trace ↗</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
