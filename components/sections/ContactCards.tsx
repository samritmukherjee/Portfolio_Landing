"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, FileText, Download, ExternalLink } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export function ContactCards() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const emailAddress = "samritmukherjee05@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error ?? "Failed to send message");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const channels = [
    {
      icon: Mail,
      label: "Direct Email",
      value: emailAddress,
      href: `mailto:${emailAddress}`,
      action: "copy",
    },
    {
      icon: FiGithub,
      label: "GitHub Profile",
      value: "github.com/samritmukherjee",
      href: "https://github.com/samritmukherjee",
      action: "link",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/samritmukherjee",
      href: "https://www.linkedin.com/in/samritmukherjee/",
      action: "link",
    },
    {
      icon: MapPin,
      label: "Base Location",
      value: "Kolkata, West Bengal, India",
      href: "#",
      action: "none",
    },
  ];

  return (
    <section id="contact" className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-6 sm:p-10 md:p-14 rounded-[2rem] sm:rounded-[3rem] border border-[var(--theme-border)] relative overflow-hidden shadow-2xl bg-[var(--theme-card)]"
      >
        {/* Subtle Ambient Red Glow */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#FF0000]/10 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#FF0000]/5 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left Column: Direct Info, Socials & Integrated Résumé */}
          <div className="flex-1 space-y-6 sm:space-y-8">
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
                Currently open for software engineering roles, enterprise systems development, and AI engineering
                collaborations. Whether you have an idea to build or just want to connect, I&apos;ll get back to you promptly.
              </p>
            </div>

            {/* Channels List */}
            <div className="space-y-3">
              {channels.map((channel, idx) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[var(--theme-surface)] border border-[var(--theme-border)] hover:border-[#FF0000]/40 transition-colors duration-200"
                  >
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 text-[var(--theme-text-secondary)] hover:text-[#FF0000] transition-colors flex-1 min-w-0"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/25 flex items-center justify-center text-[#FF0000] shrink-0 shadow-sm">
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
                    </a>

                    {channel.action === "copy" && (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="px-3 py-1.5 rounded-lg border border-[var(--theme-border)] text-xs font-mono font-semibold text-[var(--theme-text)] hover:text-[#FF0000] hover:border-[#FF0000]/40 transition-all flex items-center gap-1.5 cursor-pointer ml-2 shrink-0 bg-[var(--theme-card)]"
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
                    )}

                    {channel.action === "link" && (
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

            {/* Integrated Curriculum Vitae / Résumé Panel (Item 16) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--theme-surface)] border border-[var(--theme-border)] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FF0000]/10 border border-[#FF0000]/25 flex items-center justify-center text-[#FF0000]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--theme-text)]">
                      Curriculum Vitae / Résumé
                    </h4>
                    <p className="text-[11px] text-[var(--theme-text-secondary)]">
                      Verified credentials, experience, and full technical record
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card)] hover:border-[#FF0000] hover:text-[#FF0000] text-xs font-mono font-semibold text-[var(--theme-text)] text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Résumé</span>
                </a>
                <a
                  href="/Resume.pdf"
                  download="Samrit_Mukherjee_Resume.pdf"
                  className="flex-1 py-2 px-3 rounded-xl bg-[#FF0000] hover:bg-[#CC0000] text-white text-xs font-mono font-semibold text-center transition-all flex items-center justify-center gap-1.5 shadow-md shadow-[#FF0000]/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Message Form */}
          <div className="flex-1 glass-panel p-6 sm:p-8 lg:p-10 rounded-[2rem] border border-[var(--theme-border)] relative shadow-lg bg-[var(--theme-surface)] flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--theme-text)] mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[var(--theme-text-secondary)] mb-6">
                Have a project or opportunity? Drop me a direct message below.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-mono font-semibold text-[var(--theme-text-muted)] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Smith"
                    className="w-full rounded-xl py-2.5 px-3.5 bg-[var(--theme-card)] border border-[var(--theme-border)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[var(--theme-text-muted)] uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full rounded-xl py-2.5 px-3.5 bg-[var(--theme-card)] border border-[var(--theme-border)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[var(--theme-text-muted)] uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your product, role, or collaboration idea..."
                    className="w-full rounded-xl py-2.5 px-3.5 bg-[var(--theme-card)] border border-[var(--theme-border)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all resize-none min-h-[110px] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-xl bg-[#FF0000] text-white font-bold text-sm shadow-[0_4px_20px_rgba(255,0,0,0.25)] hover:shadow-[0_6px_25px_rgba(255,0,0,0.4)] hover:bg-[#CC0000] mt-2 h-11 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60 active:translate-y-0"
                >
                  {status === "loading" ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5 ml-1 text-white" />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-xs text-emerald-500 font-medium pt-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Message delivered successfully! I&apos;ll get back to you shortly.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 text-xs text-[#FF0000] font-medium pt-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg || "Failed to send message. Please email me directly."}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactCards;
