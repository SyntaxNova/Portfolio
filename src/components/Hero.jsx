import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Cpu, 
  Database, 
  Sparkles, 
  Layers, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const roles = [
  "Full-Stack Software Engineer",
  "Spring Boot & Java Architect",
  "Distributed Caching & Redis Enthusiast",
  "GenAI & Cloud Platform Builder"
];

const orbitSkills = [
  { name: "Spring Boot", icon: "🌱", color: "from-green-500/20 to-emerald-500/30", border: "border-emerald-500/50" },
  { name: "Redis Caching", icon: "⚡", color: "from-red-500/20 to-rose-500/30", border: "border-rose-500/50" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-500/20 to-indigo-500/30", border: "border-indigo-500/50" },
  { name: "React.js", icon: "⚛️", color: "from-cyan-500/20 to-sky-500/30", border: "border-cyan-500/50" },
  { name: "AWS Cloud", icon: "☁️", color: "from-amber-500/20 to-orange-500/30", border: "border-amber-500/50" },
  { name: "Gemini AI", icon: "✨", color: "from-purple-500/20 to-violet-500/30", border: "border-purple-500/50" }
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Typewriter effect
  useEffect(() => {
    const currentFullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // 3D Card Tilt on mouse move
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 10,
      y: (x / (rect.width / 2)) * 10,
    });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-emerald-300">
                Open to Software Engineering Roles • Graduating June 2026
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-sm md:text-base font-mono text-cyan-400 tracking-wide flex items-center gap-2">
                <span>Hello, World! I am</span>
                <span className="h-[1px] w-12 bg-cyan-500/50"></span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
                <span className="text-white">Atharva </span>
                <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
                  Pachpute
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Typewriter Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 sm:h-12 flex items-center"
            >
              <span className="font-mono text-xl sm:text-2xl md:text-3xl text-slate-300 font-semibold">
                I build{' '}
                <span className="text-indigo-400 font-bold border-b-2 border-indigo-400/80 pb-0.5">
                  {displayText}
                </span>
                <span className="animate-pulse text-cyan-400 font-light">|</span>
              </span>
            </motion.div>

            {/* Value Proposition & Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Information Technology engineer at <strong className="text-white font-medium">Savitribai Phule Pune University</strong> (8.01 CGPA). Specializing in production-grade backend microservices, low-latency <strong className="text-indigo-300 font-medium">Redis cache-aside architectures</strong> (&lt;25ms lookups), robust Spring Security systems, and AI platforms powered by Google Gemini.
            </motion.p>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Atharva_Pachpute_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-indigo-400/50 shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#sandbox"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-950/60 hover:bg-indigo-950/40 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Live Redis Demo</span>
              </a>
            </motion.div>

            {/* Social Links & Location Quick Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-4 border-t border-white/10 w-full"
            >
              <div className="flex items-center space-x-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-slate-800 transition-all hover:scale-110 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-400 hover:text-white hover:border-indigo-400/50 hover:bg-slate-800 transition-all hover:scale-110 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-400 hover:text-white hover:border-purple-400/50 hover:bg-slate-800 transition-all hover:scale-110 shadow-sm"
                  aria-label="Email Atharva"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="h-4 w-[1px] bg-slate-700 hidden sm:block" />

              <div className="text-xs font-mono text-slate-400 hidden sm:flex items-center gap-1.5">
                <span className="text-cyan-400">📍</span>
                <span>Pune, Maharashtra, India</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Holographic Card & Avatar */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[380px] sm:max-w-[420px]"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                perspective: 1000,
              }}
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-purple-500/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse-slow pointer-events-none" />

              {/* Main 3D Card */}
              <div
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-[#07090e]/95 border border-white/15 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              >
                {/* Holographic Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-slate-400">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-indigo-300 font-semibold flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    atharva@production
                  </span>
                  <span className="text-[10px] text-slate-500">v2.6</span>
                </div>

                {/* Profile Image with Cyber Frame */}
                <div className="relative mt-5 mb-5 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.25)] group">
                  <div className="aspect-square w-full relative bg-slate-950 overflow-hidden">
                    <img
                      src="/profile.png"
                      alt="Atharva Pachpute"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-105 contrast-105"
                      loading="eager"
                      fetchpriority="high"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
                    
                    {/* Floating badge inside photo */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/15">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded-lg bg-indigo-500/20 text-indigo-400">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">Atharva Pachpute</p>
                          <p className="text-[10px] text-slate-400">Backend & Full-Stack Engineer</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        8.01 CGPA
                      </span>
                    </div>
                  </div>
                </div>

                {/* Orbiting skill pills */}
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {orbitSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800/60 border ${skill.border} text-[11px] font-mono text-slate-200 shadow-sm hover:scale-105 transition-transform`}
                    >
                      <span>{skill.icon}</span>
                      <span className="truncate">{skill.name}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Micro stats */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> SIH 2024 Finalist
                  </span>
                  <span className="text-cyan-400">AWS Certified</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Highlight Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80 border border-white/10 backdrop-blur-md shadow-2xl"
        >
          {personalInfo.stats.map((stat, i) => (
            <div key={i} className="flex flex-col p-3 rounded-xl hover:bg-white/5 transition-colors">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 font-mono mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
