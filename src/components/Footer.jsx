import React from 'react';
import { ArrowUp, Heart, Code2, Terminal, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative border-t border-white/10 bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-1.5">
            <div className="flex items-center space-x-2">
              <span className="font-mono font-bold text-base bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                &lt;Atharva Pachpute /&gt;
              </span>
              <span className="text-xs text-slate-500 font-mono">• 2026 Grad</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Engineered with clean architecture, high throughput & distributed systems mindset.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/50 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-indigo-400/50 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-purple-400/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/60 text-cyan-300 border border-indigo-500/40 transition-all hover:scale-110 ml-2"
              title="Back to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Atharva Pachpute. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, Tailwind CSS, Framer Motion & CSS Scroll Timelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
