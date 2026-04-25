import { GlowCard } from "../spotlight-card";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

interface HackathonEvent {
  title: string;
  year: string;
  location: string;
  result: string;
  description: string;
  image: string;
}

const hackathons = {
  won: [
    {
      title: "Double Slash 4.0",
      year: "2026",
      location: "Jadavpur University",
      result: "WINNER",
      description:
        "A 36-hour offline hackathon with 300+ teams. Selected among the Top 30 finalists and secured the winning position through strong technical execution and innovation.",
      image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133900/double-slash_fn9wm5.jpg"
    },
    {
      title: "ShowcaseX   x Techsprint",
      year: "2026",
      location: "RCCIIT",
      result: "WINNER",
      description:
        "High-intensity hackathon powered by Hack2Skill, focused on rapid prototyping and building scalable solutions.",
      image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133897/showcasex_znf9ug.jpg"
    },
    {
      title: "Hello World Hacks",
      year: "2025",
      location: "RCCIIT",
      result: "Track Winner",
      description:
        "Organized by GDG on Campus RCCIIT. Recognized as Best Beginner's Team for building an impactful technical solution.",
      image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133893/hello-world_gfi0ip.jpg"
    }
  ],
  participated: []
};

export const Hackathons = () => {
  return (
    <section id="hackathons" className="section-wrapper section-surface overflow-hidden">
      <div className="container-custom max-w-full px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-stone-50">Hackathons & <span className="text-accent-300">Accolades</span></h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Competitive programming and building intensive technical solutions under pressure.
          </p>
        </div>

        {/* Hackathons Won */}
        <div className="space-y-12">
          {hackathons.won.length > 0 && (
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-stone-300 uppercase tracking-[0.2em] pl-4 border-l-2 border-accent-500">Hackathons Won</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 hackathon-cards">
                {hackathons.won.map((event, idx) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group h-full"
                  >
                    <GlowCard
                      glowColor="orange"
                      customSize
                      transparentBackdrop
                      className="h-full min-h-[280px] sm:min-h-[320px] rounded-2xl lg:rounded-[2.5rem] border border-theme-border overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-accent-500/10 bg-transparent"
                    >
                      {/* Winning Moment Image Reveal */}
                      <div className="absolute inset-0 z-0">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-90"
                        />
                      </div>

                      {/* Content Layer */}
                      <div className="relative z-10 h-full p-4 sm:p-6 lg:p-8 lg:p-10 flex flex-col justify-between gap-3 sm:gap-4 lg:gap-6 bg-transparent">
                        <div className="space-y-6">
                          <div className="flex justify-between items-start">
                            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-2xl bg-accent-500/10 backdrop-blur-md flex items-center justify-center border border-theme-border group-hover:border-accent-500/30 transition-all duration-500">
                              <FaTrophy className="text-lg sm:text-2xl text-accent-400" />
                            </div>
                            <span className="text-[0.55rem] sm:text-[0.65rem] font-bold text-stone-50 uppercase tracking-widest bg-theme-surface px-2 sm:px-3 py-1 rounded-full border border-theme-border group-hover:text-white transition-colors duration-500">{event.year}</span>
                          </div>

                          <div className="space-y-1">
                            <span className="text-[0.5rem] sm:text-[0.6rem] font-black text-accent-300 uppercase tracking-[0.25em] group-hover:text-white transition-colors duration-500">{event.result}</span>
                            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-stone-50 leading-tight group-hover:text-white transition-colors duration-500">{event.title}</h4>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2 sm:gap-3 pb-1 sm:pb-2 border-b border-theme-border">
                            <MdLocationOn className="text-accent-400 text-base sm:text-lg" />
                            <p className="text-[0.6rem] sm:text-[0.7rem] text-stone-50 font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-500">{event.location}</p>
                          </div>
                          <p className="text-stone-50 text-xs sm:text-sm md:text-base leading-relaxed transition-colors duration-500 group-hover:text-white">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Hackathons Participated (Only if exists) */}
          {hackathons.participated.length > 0 && (
            <div className="space-y-8 pt-12">
              <h3 className="text-xl font-bold text-stone-300 uppercase tracking-widest pl-4 border-l-2 border-stone-600">Participated</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* ... */}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
