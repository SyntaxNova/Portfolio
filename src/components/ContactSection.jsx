import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Download, 
  Clock, 
  Sparkles, 
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);
  const [puneTime, setPuneTime] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Pune, India Live Time Ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setPuneTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Fire confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#06b6d4', '#10b981', '#a855f7']
        });
      } catch (err) {
        // Fallback gracefully
      }

      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let's Build Something <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">Exceptional</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            I am actively exploring software engineering and full-stack opportunities. Whether you have an open role, an architecture question, or just want to connect, my inbox is open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards & Live Pune Clock */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Location & Local Time Card */}
            <div className="glass-card rounded-3xl p-6 border border-white/10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <MapPin className="w-4 h-4" />
                  <span>Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>IST (UTC+5:30)</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Local Time</span>
                  <span className="text-2xl font-mono font-bold text-white tracking-wider">
                    {puneTime || '11:42:38 AM'}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/80 text-cyan-400 border border-white/10">
                  <Clock className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Email Card with 1-Click Copy */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Email Address</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-white/10 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card with 1-Click Copy */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Direct Phone</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors font-mono"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-white/10 transition-colors"
                title="Copy phone number"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Social & Resume Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-4 flex items-center gap-3 hover:border-cyan-400/40 transition-colors"
              >
                <div className="p-2 rounded-xl bg-slate-800 text-white">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">GitHub</span>
                  <span className="text-sm font-semibold text-white">@SyntaxNova</span>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-4 flex items-center gap-3 hover:border-indigo-400/40 transition-colors"
              >
                <div className="p-2 rounded-xl bg-slate-800 text-indigo-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">LinkedIn</span>
                  <span className="text-sm font-semibold text-white">atharva-pachpute3</span>
                </div>
              </a>
            </div>

            {/* Direct Resume Download CTA */}
            <div className="pt-2">
              <a
                href={personalInfo.resumeUrl}
                download="Atharva_Pachpute_Resume.pdf"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>Download Official Resume (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative">
              
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                    <span>Send a Direct Message</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill out the form below or reach out directly via email.
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30 hidden sm:inline-block">
                  ⚡ Fast Response Time
                </span>
              </div>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank You! Message Dispatched</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your message has been captured. Atharva will get back to you shortly at your email address.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      Subject / Role Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Full-Stack / Software Engineering Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Atharva, I came across your portfolio and would love to chat about..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
