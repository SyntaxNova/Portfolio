import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal, Sparkles, ExternalLink, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'sandbox', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Live Sandbox', href: '#sandbox' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center space-x-3 text-white focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-500 p-[1px] shadow-[0_0_15px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300">
              <div className="w-full h-full bg-[#0b0e17] rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  &lt;AP/&gt;
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 tracking-tight text-base group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                Atharva Pachpute
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                Full-Stack SWE • 2026 Grad
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-indigo-600/30 border border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={personalInfo.resumeUrl}
              download="Atharva_Pachpute_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs lg:text-sm font-medium text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href={personalInfo.resumeUrl}
              download="Atharva_Pachpute_Resume.pdf"
              className="p-2 text-indigo-400 hover:text-white"
              title="Download Resume"
            >
              <Download className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d17]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 mt-2 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 rounded-lg mb-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for SDE / Full-Stack Opportunities
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={personalInfo.resumeUrl}
              download="Atharva_Pachpute_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-lg"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
