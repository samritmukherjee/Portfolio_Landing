"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
        throw new Error(json.error ?? "Failed to send");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass-card p-6 sm:p-8 space-y-5 max-w-xl"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-bold text-[var(--theme-text)]">Send a message</h3>
      <div className="space-y-4">
        <label className="block">
          <span className="text-xs uppercase tracking-widest font-bold text-[var(--theme-text-muted)]">
            Name
          </span>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface-2)] px-4 py-3 text-[var(--theme-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-widest font-bold text-[var(--theme-text-muted)]">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface-2)] px-4 py-3 text-[var(--theme-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-widest font-bold text-[var(--theme-text-muted)]">
            Message
          </span>
          <textarea
            name="message"
            required
            rows={4}
            className="mt-1 w-full rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface-2)] px-4 py-3 text-[var(--theme-text)] resize-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-400" role="status">
          Message sent — I&apos;ll reply within 24–48 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-cherry-400" role="alert">
          {errorMsg}
        </p>
      )}
    </motion.form>
  );
}
