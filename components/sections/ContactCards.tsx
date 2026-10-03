"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  FileText,
  Download,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";

export function ContactCards() {
  const [copied, setCopied] = useState(false);
  const [formState, handleFormspreeSubmit, resetForm] = useForm("mqparaae");

  const emailAddress = "samritmukherjee05@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const channels = [
    {
      icon: FiGithub,
      label: "GitHub Profile",
      value: "github.com/samritmukherjee",
      href: "https://github.com/samritmukherjee",
      isLink: true,
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/samritmukherjee",
      href: "https://www.linkedin.com/in/samritmukherjee/",
      isLink: true,
    },
    {
      icon: MapPin,
      label: "Base Location",
      value: "Kolkata, West Bengal, India",
      href: null,
      isLink: false,
    },
  ];

  return (
    <section
      id="contact"
      className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className="p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--theme-border)] relative overflow-hidden shadow-xl bg-[var(--theme-card)]"
      >
        {/* Subtle Ambient Red Glow */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#FF0000]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#FF0000]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Info, Plain Email Display & Résumé */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#FF0000]/30 bg-[#FF0000]/10 text-[#FF0000] text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0000] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF0000]"></span>
                </span>
                Available for new opportunities
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3 text-[var(--theme-text)]">
                Let&apos;s <span className="text-[#FF0000]">Connect</span>
              </h2>

              <p className="text-[var(--theme-text-secondary)] text-sm sm:text-base leading-relaxed">
                Open for software engineering roles, enterprise systems development, and AI engineering collaborations.
                Reach out directly or send a message below.
              </p>
            </div>

            {/* Channels List */}
            <div className="space-y-3">
              {/* Direct Email Card — Plain readable text, no redirect */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[var(--theme-surface)] border border-[var(--theme-border)] shadow-sm">
                <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/25 flex items-center justify-center text-[#FF0000] shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[var(--theme-text-muted)]">
                      Direct Email
                    </span>
                    <span className="font-semibold text-[var(--theme-text)] text-xs sm:text-sm truncate select-all">
                      {emailAddress}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl border border-[var(--theme-border)] text-xs font-mono font-semibold text-[var(--theme-text)] hover:text-[#FF0000] hover:border-[#FF0000]/40 transition-all flex items-center gap-1.5 cursor-pointer ml-2 shrink-0 bg-[var(--theme-card)] shadow-sm"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Other channels */}
              {channels.map((channel, idx) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[var(--theme-surface)] border border-[var(--theme-border)] shadow-sm"
                  >
                    <div className="flex items-center gap-3.5 min-w-0 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-[var(--theme-surface-2)] border border-[var(--theme-border)] flex items-center justify-center text-[#FF0000] shrink-0 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[var(--theme-text-muted)]">
                          {channel.label}
                        </span>
                        <span className="font-semibold text-[var(--theme-text)] text-xs sm:text-sm truncate">
                          {channel.value}
                        </span>
                      </div>
                    </div>

                    {channel.isLink && channel.href && (
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-[var(--theme-text-secondary)] hover:text-[#FF0000] transition-colors"
                        aria-label={`Open ${channel.label}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Authentic Technical Résumé Panel */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--theme-surface)] border border-[var(--theme-border)] space-y-3 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--theme-surface-2)] border border-[var(--theme-border)] flex items-center justify-center text-[#FF0000] shrink-0 shadow-sm">
                  <FileText className="w-4 h-4 text-[#FF0000]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--theme-text)]">
                    Technical Résumé
                  </h4>
                  <p className="text-xs text-[var(--theme-text-secondary)] mt-0.5 leading-relaxed">
                    Verified technical experience, architectural projects, academic record, and awards.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card)] hover:border-[#FF0000] hover:text-[#FF0000] text-xs font-semibold text-[var(--theme-text)] text-center transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF0000]" />
                  <span>View Résumé</span>
                </a>
                <a
                  href="/Resume.pdf"
                  download="Samrit_Mukherjee_Resume.pdf"
                  className="flex-1 py-2 px-3 rounded-xl bg-[#FF0000] hover:bg-[#CC0000] text-white text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 shadow-sm shadow-[#FF0000]/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Properly Proportioned Formspree Form */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 rounded-[2rem] border border-[var(--theme-border)] bg-[var(--theme-surface)] shadow-md flex flex-col justify-start">
            <div className="mb-5">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--theme-text)] mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[var(--theme-text-secondary)]">
                Drop a direct note for collaborations, inquiries, or opportunities.
              </p>
            </div>

            {formState.succeeded ? (
              <div className="py-8 px-4 flex flex-col items-center text-center space-y-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[var(--theme-text)]">
                    Message Delivered!
                  </h4>
                  <p className="text-xs text-[var(--theme-text-secondary)] mt-1 max-w-sm">
                    Thank you for reaching out. I have received your message via Formspree and will respond shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => resetForm()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--theme-card)] border border-[var(--theme-border)] text-xs font-semibold text-[var(--theme-text)] hover:border-[#FF0000] hover:text-[#FF0000] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleFormspreeSubmit}>
                <div>
                  <label
                    htmlFor="form-name"
                    className="block text-xs font-mono font-semibold text-[var(--theme-text-muted)] uppercase tracking-wider mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Smith"
                    className="w-full rounded-xl h-10 px-3.5 bg-[var(--theme-card)] border border-[var(--theme-border)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all text-sm"
                  />
                  <ValidationError prefix="Name" field="name" errors={formState.errors} className="text-xs text-[#FF0000] mt-1" />
                </div>

                <div>
                  <label
                    htmlFor="form-email"
                    className="block text-xs font-mono font-semibold text-[var(--theme-text-muted)] uppercase tracking-wider mb-1.5"
                  >
                    Your Email
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full rounded-xl h-10 px-3.5 bg-[var(--theme-card)] border border-[var(--theme-border)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all text-sm"
                  />
                  <ValidationError prefix="Email" field="email" errors={formState.errors} className="text-xs text-[#FF0000] mt-1" />
                </div>

                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs font-mono font-semibold text-[var(--theme-text-muted)] uppercase tracking-wider mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={3}
                    placeholder="Tell me about your product, role, or collaboration idea..."
                    className="w-full rounded-xl py-2.5 px-3.5 bg-[var(--theme-card)] border border-[var(--theme-border)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all resize-none min-h-[96px] text-sm"
                  />
                  <ValidationError prefix="Message" field="message" errors={formState.errors} className="text-xs text-[#FF0000] mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full rounded-xl bg-[#FF0000] text-white font-bold text-sm shadow-[0_4px_20px_rgba(255,0,0,0.2)] hover:shadow-[0_6px_25px_rgba(255,0,0,0.35)] hover:bg-[#CC0000] mt-2 h-11 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60 active:translate-y-0"
                >
                  {formState.submitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5 ml-1 text-white" />
                    </>
                  )}
                </button>

                {formState.errors && Object.keys(formState.errors).length > 0 && !formState.submitting && (
                  <div className="flex items-center gap-2 text-xs text-[#FF0000] font-medium pt-1">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Please correct the errors above or email me directly at {emailAddress}</span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactCards;
