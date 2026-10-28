import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  GraduationCap, 
  Code2, 
  Sparkles, 
  BookOpen, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Send,
  CornerDownLeft,
  CheckCircle,
  Award
} from 'lucide-react';
import { education, terminalCommands, personalInfo } from '../data/portfolioData';

export default function AboutTerminal() {
  const [activeTab, setActiveTab] = useState('terminal');
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([
    { cmd: 'whoami', output: terminalCommands.whoami },
    { cmd: 'cat education.txt', output: `Institution: ${education.institution}\nUniversity: ${education.university}\nDegree: ${education.degree}\nCGPA: ${education.cgpa} (Expected ${education.graduation})` },
    { cmd: 'ls -la projects/', output: `drwxr-xr-x FinNova-AI (Spring Boot, Gemini AI, PostgreSQL)\ndrwxr-xr-x URL-Shortener-Service (Redis Cache-Aside, Base62)\ndrwxr-xr-x AlgoVision (Interactive DSA Visualizer)` }
  ]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setCommandHistory([]);
      setInputVal('');
      return;
    }

    let output = '';
    if (cleanCmd in terminalCommands) {
      output = terminalCommands[cleanCmd];
    } else if (cleanCmd === 'ls' || cleanCmd.startsWith('ls')) {
      output = "FinNova-AI/   URL-Shortener-Service/   AlgoVision/   Resume.pdf";
    } else if (cleanCmd.includes('cat education')) {
      output = `${education.institution} (${education.university})\nDegree: ${education.degree}\nCGPA: ${education.cgpa} (Graduation: ${education.graduation})`;
    } else {
      output = `zsh: command not found: ${cleanCmd}. Type "help" to see available commands.`;
    }

    setCommandHistory(prev => [...prev, { cmd: inputVal, output }]);
    setInputVal('');
  };

  const executeShortcut = (cmd) => {
    if (cmd === 'clear') {
      setCommandHistory([]);
      return;
    }
    const output = terminalCommands[cmd] || `Executed: ${cmd}`;
    setCommandHistory(prev => [...prev, { cmd, output }]);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090c15]">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Engineering DNA & Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Architecture First, <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">Execution Driven</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A developer who bridges solid computer science fundamentals with production-grade backend engineering and resilient system design.
          </p>

          {/* Tab Selector */}
          <div className="mt-8 inline-flex p-1 rounded-2xl bg-slate-900/90 border border-white/10 shadow-lg">
            <button
              onClick={() => setActiveTab('terminal')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'terminal'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Interactive CLI Terminal</span>
            </button>
            <button
              onClick={() => setActiveTab('story')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'story'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Education & Philosophy</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Terminal */}
        {activeTab === 'terminal' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden bg-[#0b0e17] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] font-mono text-sm"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
              </div>
              <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                <span>atharva@portfolio-archlinux: ~ (bash)</span>
              </div>
              <div className="text-[11px] text-cyan-400/80">UTF-8</div>
            </div>

            {/* Quick Command Pills */}
            <div className="px-5 py-3 bg-slate-900/40 border-b border-white/5 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400">Quick run:</span>
              {['whoami', 'tech', 'projects', 'education', 'stats', 'certs', 'clear'].map(cmd => (
                <button
                  key={cmd}
                  onClick={() => executeShortcut(cmd)}
                  className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-indigo-600/30 border border-white/10 hover:border-indigo-400 text-slate-300 hover:text-cyan-300 transition-all"
                >
                  ${cmd}
                </button>
              ))}
            </div>

            {/* Terminal Output Area */}
            <div className="p-6 space-y-4 min-h-[300px] max-h-[460px] overflow-y-auto text-xs sm:text-sm">
              <div className="text-slate-400 pb-2 border-b border-white/5">
                Last login: Wed Oct 28 2026 on ttys001. Type <span className="text-cyan-400">help</span> for a list of commands.
              </div>

              {commandHistory.map((item, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                    <span className="text-emerald-400">atharva@dev</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-slate-400">$</span>
                    <span className="text-white">{item.cmd}</span>
                  </div>
                  <pre className="text-slate-300 whitespace-pre-wrap pl-4 border-l-2 border-indigo-500/30 font-mono leading-relaxed">
                    {item.output}
                  </pre>
                </div>
              ))}

              {/* Active Prompt Input */}
              <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
                <span className="text-emerald-400 font-semibold">atharva@dev</span>
                <span className="text-slate-500">:</span>
                <span className="text-cyan-400">~</span>
                <span className="text-slate-400">$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type command (e.g., whoami, stats, certs)..."
                  className="flex-1 bg-transparent text-slate-100 focus:outline-none font-mono caret-cyan-400 text-xs sm:text-sm"
                />
                <button
                  type="submit"
                  className="text-slate-500 hover:text-cyan-400 p-1"
                  aria-label="Execute command"
                >
                  <CornerDownLeft className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Visual Story & Core Philosophy */}
        {activeTab === 'story' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8"
          >
            {/* Education Card */}
            <div className="md:col-span-6 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-l-4 border-indigo-500">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Formal Education</span>
                    <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                  </div>
                </div>

                <div className="space-y-3 mt-4 text-sm text-slate-300">
                  <p className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400">Institution:</span>
                    <strong className="text-white font-medium">{education.institution}</strong>
                  </p>
                  <p className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400">University:</span>
                    <span className="text-slate-200">{education.university}</span>
                  </p>
                  <p className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400">Graduation Timeline:</span>
                    <span className="text-emerald-400 font-mono font-medium">{education.graduation}</span>
                  </p>
                  <p className="flex items-center justify-between pt-1">
                    <span className="text-slate-400">Academic Standing:</span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-sm border border-emerald-500/30">
                      CGPA: {education.cgpa}
                    </span>
                  </p>
                </div>

                {/* Coursework Pills */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    Core Engineering Coursework:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-white/10 text-xs text-slate-300 font-mono"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Rigorous theoretical foundation applied directly in production projects.</span>
              </div>
            </div>

            {/* Core Philosophy & Engineering Principles */}
            <div className="md:col-span-6 space-y-4">
              
              <div className="glass-card rounded-2xl p-6 border-l-4 border-cyan-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">Clean Architecture & Modularity</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Strict adherent of the Controller-Service-Repository pattern. Decoupling data access, business logic, and API exposure with DTO validation ensures maintainability and isolated testing.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border-l-4 border-emerald-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">Cache-Aside & Concurrency Optimization</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Passionate about minimizing database bottlenecks. Slashed read latency from 120ms to under 25ms using Redis caching, Base62 tokenization, and indexed queries in production.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">Stateless Security & Cloud Readiness</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Experienced with Spring Security, BCrypt hashing, stateless JWT authentication, AWS cloud architecture, and zero-leak environment deployments on Render and Vercel.
                </p>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
