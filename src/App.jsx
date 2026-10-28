import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutTerminal from './components/AboutTerminal';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsSection from './components/ProjectsSection';
import SystemSandbox from './components/SystemSandbox';
import ExperienceAchievements from './components/ExperienceAchievements';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';

export default function App() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-indigo-500/30 selection:text-white">
      {/* Interactive Canvas Starfield / Constellation */}
      <BackgroundCanvas />

      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="relative z-10">
        <Hero />
        <AboutTerminal />
        <SkillsMatrix />
        <ProjectsSection />
        <SystemSandbox />
        <ExperienceAchievements />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
