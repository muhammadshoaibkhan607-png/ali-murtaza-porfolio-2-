import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Github, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { theme } = useTheme();

  // Form state with draft persistence in LocalStorage
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem('am_contact_draft');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return { name: '', email: '', subject: '', message: '' };
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sentVia, setSentVia] = useState<'api' | 'mailto'>('api');

  // Sync draft to LocalStorage
  useEffect(() => {
    try {
      if (!isSubmitted) {
        localStorage.setItem('am_contact_draft', JSON.stringify(formData));
      }
    } catch {
      // ignore
    }
  }, [formData, isSubmitted]);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please add a subject.';
    if (!formData.message.trim() || formData.message.length < 5) {
      errors.message = 'Please provide a brief message.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Real direct email dispatch to muhammadshoaibkhan607@gmail.com
      const res = await fetch('https://formsubmit.co/ajax/muhammadshoaibkhan607@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!res.ok) {
        throw new Error('API dispatch failed');
      }

      setSentVia('api');
      setIsSubmitted(true);
      try {
        confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
        localStorage.removeItem('am_contact_draft');
      } catch {
        // ignore
      }
    } catch {
      // Direct mailto fallback so user message is NEVER lost
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;

      setSentVia('mailto');
      setIsSubmitted(true);
      try {
        localStorage.removeItem('am_contact_draft');
      } catch {
        // ignore
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 text-cyan-500 bg-cyan-500/10 border border-cyan-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S BUILD TOGETHER</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Have a project in mind, open position, or technical collaboration? Send me a message or connect directly through phone or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Phone Card */}
            <div
              className={`rounded-2xl p-5 backdrop-blur-xl border flex items-center justify-between transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-white/10 hover:border-cyan-500/30'
                  : 'bg-white/80 border-slate-200 hover:border-cyan-400 shadow-md shadow-slate-100'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-cyan-500 uppercase font-semibold">
                    Phone / Call
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className={`text-sm sm:text-base font-bold font-mono tracking-tight hover:underline ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                title="Copy phone number"
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  theme === 'dark'
                    ? 'border-white/10 bg-slate-800 text-slate-300 hover:text-white'
                    : 'border-slate-200 bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Email Card */}
            <div
              className={`rounded-2xl p-5 backdrop-blur-xl border flex items-center justify-between transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-white/10 hover:border-cyan-500/30'
                  : 'bg-white/80 border-slate-200 hover:border-cyan-400 shadow-md shadow-slate-100'
              }`}
            >
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-blue-400 uppercase font-semibold">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className={`text-xs sm:text-sm font-bold font-mono truncate block hover:underline ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                title="Copy email address"
                className={`p-2 rounded-lg border shrink-0 ml-2 transition-colors cursor-pointer ${
                  theme === 'dark'
                    ? 'border-white/10 bg-slate-800 text-slate-300 hover:text-white'
                    : 'border-slate-200 bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* WhatsApp Direct Chat Card */}
            <div
              className={`rounded-2xl p-5 backdrop-blur-xl border flex items-center justify-between transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-emerald-950/20 border-emerald-500/30 hover:border-emerald-500/60'
                  : 'bg-emerald-50/60 border-emerald-200 hover:border-emerald-400 shadow-md shadow-emerald-50'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-emerald-500 uppercase font-semibold">
                    Instant Messaging
                  </div>
                  <div className={`text-sm sm:text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    WhatsApp Chat
                  </div>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-white shadow-md shadow-emerald-500/20 inline-flex items-center gap-1"
              >
                <span>Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* GitHub Profile Card */}
            <div
              className={`rounded-2xl p-5 backdrop-blur-xl border flex items-center justify-between transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-white/10 hover:border-cyan-500/30'
                  : 'bg-white/80 border-slate-200 hover:border-cyan-400 shadow-md shadow-slate-100'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-slate-800 text-cyan-400 border border-white/10 flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-cyan-500 uppercase font-semibold">
                    Open Source
                  </div>
                  <div className={`text-sm sm:text-base font-bold font-mono ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    @muhammadshoaibkhan607-png
                  </div>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'border-white/10 bg-slate-800 text-slate-300 hover:text-white'
                    : 'border-slate-200 bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Location & Availability Note */}
            <div
              className={`rounded-2xl p-5 backdrop-blur-xl border text-xs leading-relaxed ${
                theme === 'dark'
                  ? 'bg-slate-900/40 border-white/5 text-slate-400'
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              <div className="flex items-center gap-2 text-cyan-500 font-semibold mb-1.5 font-mono">
                <MapPin className="w-4 h-4" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <p>
                Available for worldwide remote contracts, engineering roles, and innovative freelance applications. Guaranteed response within 24 hours.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-3xl p-6 sm:p-8 backdrop-blur-xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-white/10 shadow-2xl shadow-black/50'
                  : 'bg-white/90 border-slate-200 shadow-xl shadow-slate-200/50'
              }`}
            >
              <h3 className={`text-xl font-bold tracking-tight mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Send a Direct Message
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                Draft is saved automatically in LocalStorage as you type.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-400 mb-2">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-3">
                    Your inquiry has been forwarded directly to Ali Murtaza's personal inbox:
                  </p>
                  <div className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-900/90 text-cyan-400 font-mono text-xs border border-cyan-500/30 mb-6">
                    {PERSONAL_INFO.email}
                  </div>
                  <p className="text-[11px] text-slate-400 max-w-sm mx-auto mb-6">
                    Ali typically reviews incoming inquiries and responds within 24 hours.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white cursor-pointer shadow-md shadow-cyan-500/25"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white inline-flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className={`block text-xs font-mono font-medium mb-1.5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          formErrors.name
                            ? 'border-rose-500 bg-rose-500/5'
                            : theme === 'dark'
                            ? 'bg-slate-800/80 border-white/10 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className={`block text-xs font-mono font-medium mb-1.5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          formErrors.email
                            ? 'border-rose-500 bg-rose-500/5'
                            : theme === 'dark'
                            ? 'bg-slate-800/80 border-white/10 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className={`block text-xs font-mono font-medium mb-1.5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                        formErrors.subject
                          ? 'border-rose-500 bg-rose-500/5'
                          : theme === 'dark'
                          ? 'bg-slate-800/80 border-white/10 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                    {formErrors.subject && (
                      <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block text-xs font-mono font-medium mb-1.5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                      Message Details *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Ali, we would love to discuss a project..."
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none ${
                        formErrors.message
                          ? 'border-rose-500 bg-rose-500/5'
                          : theme === 'dark'
                          ? 'bg-slate-800/80 border-white/10 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin" />
                        <span>Transmitting to Ali's Inbox...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message to {PERSONAL_INFO.email}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Alternate Quick Dispatch Options */}
                  <div className="pt-2 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                        formData.subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\n${formData.message || ''}`
                      )}`}
                      className="hover:text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <Mail className="w-3 h-3 text-cyan-400" />
                      <span>Open in Default Mail Client</span>
                    </a>

                    <a
                      href={`https://wa.me/923282305470?text=${encodeURIComponent(
                        `Hello Ali, this is ${formData.name || 'a visitor'} (${formData.email || 'no email provided'}).\n\nSubject: ${
                          formData.subject || 'Portfolio Inquiry'
                        }\n\nMessage: ${formData.message || ''}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-400" />
                      <span>Send via WhatsApp (+92 328 2305470)</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
