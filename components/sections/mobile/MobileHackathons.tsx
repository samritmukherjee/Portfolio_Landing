"use client";
import React, { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { MdLocationOn, MdExpandMore } from "react-icons/md";

interface HackathonEvent {
  id: string;
  title: string;
  year: string;
  location: string;
  result: string;
  description: string;
  image: string;
}

const hackathons: HackathonEvent[] = [
  {
    id: "double-slash",
    title: "Double Slash 4.0",
    year: "2026",
    location: "Jadavpur University",
    result: "WINNER",
    description:
      "A 36-hour offline hackathon with 300+ teams. Selected among the Top 30 finalists and secured the winning position through strong technical execution and innovation.",
    image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133900/double-slash_fn9wm5.jpg"
  },
  {
    id: "showcasex",
    title: "ShowcaseX × Techsprint",
    year: "2026",
    location: "RCCIIT",
    result: "WINNER",
    description:
      "High-intensity hackathon powered by Hack2Skill, focused on rapid prototyping and building scalable solutions.",
    image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133897/showcasex_znf9ug.jpg"
  },
  {
    id: "hello-world",
    title: "Hello World Hacks",
    year: "2025",
    location: "RCCIIT",
    result: "Track Winner",
    description:
      "Organized by GDG on Campus RCCIIT. Recognized as Best Beginner's Team for building an impactful technical solution.",
    image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133893/hello-world_gfi0ip.jpg"
  }
];

/**
 * Mobile Hackathons Section - Premium Touch-optimized Cards
 * - Vertical scrolling achievement cards
 * - Tap to expand descriptions with images
 * - Premium visual treatment with refined colors and spacing
 * - Trophy badge for visual hierarchy
 * - Optimized for small screens
 */
export const MobileHackathons = () => {
  const [expandedId, setExpandedId] = useState<string | null>(hackathons[0].id);

  const getResultBadgeStyles = (result: string) => {
    if (result.toLowerCase().includes("winner")) {
      return {
        bg: "bg-stone-900/50",
        text: "text-accent-400",
        border: "border-accent-500/40"
      };
    }
    // Track Winner
    return {
      bg: "bg-stone-900/50",
      text: "text-accent-300",
      border: "border-accent-500/30"
    };
  };

  return (
    <section id="hackathons" className="section-wrapper py-16">
      <div className="w-full px-4 space-y-6">
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-stone-50">
            Hackathons & <span className="gradient-accent">Accolades</span>
          </h2>
          <p className="text-stone-400 text-sm">
            Competitive wins and technical achievements.
          </p>
        </div>

        {/* Cards Container */}
        <div className="space-y-4">
          {hackathons.map((event, index) => {
            const isExpanded = expandedId === event.id;
            const badgeStyles = getResultBadgeStyles(event.result);

            return (
              <div key={event.id} className="relative">
                {/* Achievement Card Button */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : event.id)}
                  className="w-full text-left transition-all active:scale-95"
                >
                  <div
                    className={`relative border rounded-xl transition-all duration-300 overflow-hidden backdrop-blur-sm ${
                      isExpanded
                        ? `border-accent-500/40 bg-stone-900/60 shadow-lg`
                        : "bg-stone-900/30 border-stone-800/50 shadow-md hover:border-accent-500/30"
                    }`}
                  >
                    {/* Gradient Overlay for premium feel */}
                    <div
                      className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                        isExpanded ? "opacity-0" : "opacity-30"
                      }`}
                      style={{
                        background:
                          "radial-gradient(circle at top right, rgba(232, 156, 27, 0.05), transparent)"
                      }}
                    />

                    {/* Card Content */}
                    <div className="relative z-10">
                      {/* Header Row */}
                      <div className="p-4 pb-3 space-y-3">
                        {/* Badge Row */}
                        <div className="flex items-center justify-between gap-3">
                          {/* Trophy Icon */}
                          <div className="flex-shrink-0">
                            <div
                              className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all ${
                                isExpanded
                                  ? "bg-stone-800/40"
                                  : "bg-accent-500/10 border border-accent-500/30"
                              }`}
                            >
                              <FaTrophy
                                size={18}
                                className={
                                  isExpanded ? "text-accent-400" : "text-accent-400"
                                }
                              />
                            </div>
                          </div>

                          {/* Result Badge - Premium Styling */}
                          <div className="flex-1 min-w-0">
                            <div
                              className={`inline-flex px-3 py-1.5 rounded-lg font-bold text-xs uppercase tracking-wider border transition-all ${badgeStyles.bg} ${badgeStyles.text} ${badgeStyles.border}`}
                            >
                              {event.result}
                            </div>
                          </div>

                          {/* Year Badge */}
                          <div
                            className={`flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-lg border transition-all ${
                              isExpanded
                                ? "bg-stone-800/30 border-stone-700/40 text-stone-400"
                                : "bg-stone-900/50 border-stone-800/40 text-stone-500"
                            }`}
                          >
                            {event.year}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-stone-50 leading-snug tracking-tight">
                          {event.title}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-xs text-stone-400">
                          <MdLocationOn size={14} className="text-accent-400 flex-shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>

                        {/* Expand Indicator */}
                        <div className="flex justify-end pt-2">
                          <MdExpandMore
                            size={22}
                            className={`text-accent-400 transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="border-t border-stone-800/50 bg-stone-950/40 px-4 py-4 space-y-4">
                          {/* Description */}
                          <p className="text-sm text-stone-300 leading-relaxed">
                            {event.description}
                          </p>

                          {/* Image Preview - Optimized for face visibility */}
                          {event.image && (
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-stone-900 border border-stone-800/50 shadow-md">
                              <img
                                src={event.image}
                                alt={event.title}
                                loading="lazy"
                                className="w-full h-full object-cover object-center"
                              />
                              {/* Image gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 to-transparent pointer-events-none" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
