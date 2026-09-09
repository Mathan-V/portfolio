import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Building,
  MapPin
} from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate real dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-300/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white via-slate-900 dark:via-white to-slate-900/60 dark:to-white/60">
            Let's Build Something Meaningful
          </h2>
          <p className="text-slate-900/50 dark:text-white/50 text-sm sm:text-base mt-2 max-w-2xl">
            Have a project, product idea or technical challenge? I’m always interested in discussing new
            opportunities and building practical software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 shadow-2xl backdrop-blur-xl space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                Direct Channels
              </h3>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-900/40 dark:text-white/40 font-mono uppercase tracking-wider">Email Address</div>
                    <a
                      href={`mailto:${developerInfo.email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-400 transition-colors"
                    >
                      {developerInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-900/5 dark:bg-white/5 border border-slate-300/10 dark:border-white/10 text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:text-white hover:border-slate-300/20 dark:border-white/20 transition-all cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Company / Location Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-900/70 dark:text-white/70">
                  <Building className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Hyperready Technology · Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-900/70 dark:text-white/70">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{developerInfo.location} · Open to Remote & Relocation</span>
                </div>
              </div>

              {/* Social / Professional Links */}
              <div className="pt-4 border-t border-slate-300/10 dark:border-white/10 grid grid-cols-2 gap-3">
                <a
                  href={developerInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-xs font-semibold text-slate-900/70 dark:text-white/70 hover:text-slate-900 dark:text-white hover:border-slate-300/25 dark:border-white/25 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={developerInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-xs font-semibold text-slate-900/70 dark:text-white/70 hover:text-slate-900 dark:text-white hover:border-slate-300/25 dark:border-white/25 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              {/* Resume Button */}
              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:bg-white/10 border border-slate-300/10 dark:border-white/10 text-xs font-mono font-bold text-slate-900 dark:text-white transition-all shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>VIEW COMPLETE RESUME.PDF</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 shadow-2xl backdrop-blur-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-900/50 dark:text-white/50 mb-6">
                Whether you have an enterprise project, technical role, or consulting inquiry, drop a note below.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Message Sent Successfully</h4>
                  <p className="text-xs text-slate-900/70 dark:text-white/70">
                    Thank you for reaching out! Mathan V will review your message and reply promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-900/40 dark:text-white/40 mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-slate-900 dark:text-white text-xs placeholder:text-slate-900/20 dark:text-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-900/40 dark:text-white/40 mb-1.5 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-slate-900 dark:text-white text-xs placeholder:text-slate-900/20 dark:text-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-900/40 dark:text-white/40 mb-1.5 font-medium">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. ERP Integration / BI Reporting / Full Stack Role"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-slate-900 dark:text-white text-xs placeholder:text-slate-900/20 dark:text-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-900/40 dark:text-white/40 mb-1.5 font-medium">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your requirements, tech stack, or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-slate-900 dark:text-white text-xs placeholder:text-slate-900/20 dark:text-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message to Mathan V</span>
                        <Send className="w-3.5 h-3.5" />
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
};
