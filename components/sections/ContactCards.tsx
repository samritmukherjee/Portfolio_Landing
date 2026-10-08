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
import { BlobButton } from "@/components/ui/BlobButton";

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
      value: "linkedin.com/in/samrit-mukherjee",
      href: "https://www.linkedin.com/in/samrit-mukherjee/",
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
      className="w-full max-w-[96vw] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-16 md:py-20 relative"
    >
      {/* Background Section Container */}

      {/* Centered Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>
          <span className="font-sans font-medium text-xs sm:text-sm text-[var(--theme-text-muted)] tracking-wide hidden sm:inline">
            • direct line
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--theme-text)] leading-[1.05]">
          Let&apos;s <span className="font-serif italic text-gradient-primary">Connect</span>
        </h2>

        <p className="text-[var(--theme-text-secondary)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Open for software engineering roles, enterprise systems development, and AI engineering collaborations.
          Reach out directly or send a message below.
        </p>
      </motion.div>

      {/* Main 2-column layout directly on webpage, vertically centered */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
        {/* Left Column: Direct Info, Plain Email Display & Résumé */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 space-y-4"
        >

          {/* Channels List */}
          <div className="space-y-3">
            {/* Direct Email Card — Plain readable text, no redirect */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[var(--theme-surface)] border border-[var(--theme-border)] shadow-xs">
              <div className="flex items-center gap-3.5 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0 shadow-xs">
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
                className="px-3.5 py-1.5 rounded-xl border border-[var(--theme-border)] text-xs font-mono font-semibold text-[var(--theme-text)] hover:text-[var(--theme-accent)] hover:border-[var(--theme-accent)]/40 transition-all flex items-center gap-1.5 cursor-pointer ml-2 shrink-0 bg-[var(--theme-card)] shadow-sm"
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
                  className="flex items-center justify-between p-4 rounded-2xl bg-[var(--theme-surface)] border border-[var(--theme-border)] shadow-sm"
                >
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-[var(--theme-surface-2)] border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-accent)] shrink-0 shadow-sm">
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
                      className="p-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-accent)] transition-colors"
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
          <div className="p-5 rounded-2xl bg-[var(--theme-surface)] border border-[var(--theme-border)] space-y-3.5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[var(--theme-surface-2)] border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-accent)] shrink-0 shadow-sm">
                <FileText className="w-4 h-4 text-[var(--theme-accent)]" />
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
              <BlobButton
                variant="secondary"
                href="/Resume.pdf?v=20261003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-xs !py-2 !px-3 shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                <span>View Résumé</span>
              </BlobButton>
              <BlobButton
                variant="primary"
                href="/Resume.pdf?v=20261003"
                download="Samrit_Mukherjee_Resume.pdf"
                className="flex-1 text-xs !py-2 !px-3 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </BlobButton>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Properly Proportioned Formspree Form, Vertically Centered with Reversible Reveal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 p-7 sm:p-9 rounded-[2rem] border border-[var(--theme-border)] bg-[var(--theme-card)] shadow-xl relative overflow-hidden"
        >
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--theme-text)] mb-1.5">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-[var(--theme-text-secondary)]">
              Drop a direct note for collaborations, inquiries, or opportunities.
            </p>
          </div>

          {formState.succeeded ? (
            <div className="py-10 px-4 flex flex-col items-center text-center space-y-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--theme-text)]">
                  Message Delivered!
                </h4>
                <p className="text-xs text-[var(--theme-text-secondary)] mt-1.5 max-w-sm">
                  Thank you for reaching out. I have received your message via Formspree and will respond shortly.
                </p>
              </div>
              <BlobButton
                variant="secondary"
                onClick={() => resetForm()}
                className="text-xs !py-2 !px-4 shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Send Another Message</span>
              </BlobButton>
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
                  className="w-full rounded-xl h-11 px-4 bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:focus:ring-[#3B82F6] focus:border-transparent transition-all text-sm"
                />
                <ValidationError prefix="Name" field="name" errors={formState.errors} className="text-xs text-rose-500 mt-1" />
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
                  className="w-full rounded-xl h-11 px-4 bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:focus:ring-[#3B82F6] focus:border-transparent transition-all text-sm"
                />
                <ValidationError prefix="Email" field="email" errors={formState.errors} className="text-xs text-rose-500 mt-1" />
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
                  rows={4}
                  placeholder="Tell me about your product, role, or collaboration idea..."
                  className="w-full rounded-xl py-3 px-4 bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:focus:ring-[#3B82F6] focus:border-transparent transition-all resize-none min-h-[110px] text-sm"
                />
                <ValidationError prefix="Message" field="message" errors={formState.errors} className="text-xs text-rose-500 mt-1" />
              </div>

              <BlobButton
                variant="primary"
                type="submit"
                disabled={formState.submitting}
                className="w-full text-sm font-bold !py-2.5 mt-2 shadow-sm"
              >
                {formState.submitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5 ml-1" />
                  </>
                )}
              </BlobButton>

              {formState.errors && Object.keys(formState.errors).length > 0 && !formState.submitting && (
                <div className="flex items-center gap-2 text-xs text-rose-500 font-medium pt-1">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Please correct the errors above or email me directly at {emailAddress}</span>
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCards;
