import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  CloudLightning, 
  Code, 
  GraduationCap, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Trophy,
  Flame
} from 'lucide-react';
import { achievementsData, education } from '../data/portfolioData';

export default function ExperienceAchievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#090c15]">
      {/* Background radial blurs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Achievements & <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-indigo-300 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Recognitions earned through competitive hackathons, industry cloud certifications, and consistent algorithmic problem solving.
          </p>
        </div>

        {/* Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-amber-400/40 relative group"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-20 text-white shadow-lg`}>
                    {item.icon === 'cloud-lightning' && <CloudLightning className="w-6 h-6" />}
                    {item.icon === 'award' && <Award className="w-6 h-6" />}
                    {item.icon === 'code' && <Code className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {item.date}
                  </span>
                </div>

                {/* Highlight Badge */}
                <div className="inline-block mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1 mb-4">
                  {item.issuer}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Education Callout Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-slate-900/80 to-purple-950/60 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider block">Academic Credentials</span>
              <h4 className="text-lg font-bold text-white">
                {education.degree} • <span className="text-emerald-400 font-mono">CGPA {education.cgpa}</span>
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {education.institution} — {education.university} (Expected {education.graduation})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#about"
              className="px-4 py-2 rounded-xl text-xs font-mono font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 transition-colors"
            >
              View Coursework
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
