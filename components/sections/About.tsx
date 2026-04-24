"use client";
import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="section-wrapper section-surface">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-stone-50 mb-6">
              Turning complex ideas into <span className="gradient-accent">Simple Solutions.</span>
            </h2>
            
            <div className="space-y-4 text-stone-400">
              <p>
                I'm a BTech Computer Science student specializing in Artificial Intelligence & Machine Learning. 
                I focus on bridging the gap between complex technology and real-world usability—building 
                tools that people genuinely find useful.
              </p>
              <p>
                As a founder and educator, I teach Computer Science through a project-based approach, 
                emphasizing practical implementation over theory. I believe the best way to learn 
                technology is by building with it.
              </p>
              <p>
                My work is guided by one principle: <span className="text-accent-500 font-bold italic underline underline-offset-4 decoration-accent-500/30">
                &ldquo;Build tools that matter, for people who need them.&rdquo;</span>
              </p>
            </div>
            
            <div className="flex gap-12 mt-12">
              <div>
                <h4 className="text-4xl font-black text-stone-50">8+</h4>
                <p className="text-[0.65rem] uppercase tracking-widest text-stone-500 font-bold">Projects Built</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-stone-50">5+</h4>
                <p className="text-[0.65rem] uppercase tracking-widest text-stone-500 font-bold">Students Taught</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-accent-500/10">
              {/* Profile Image */}
              <div className="absolute inset-0 bg-theme-surface">
                  <img 
                    src="/samrit-profile.jpg" 
                    alt="Samrit Mukherjee" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/20 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              {/* Interactive Frame Overlay */}
              <div className="absolute inset-0 border-[12px] border-stone-950/10 pointer-events-none rounded-[2.5rem] transition-colors duration-500 group-hover:border-accent-500/10" />
              <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-[2.5rem]" />
              
              {/* Bottom Label */}
              <div className="absolute bottom-10 left-10 right-10 p-6 glass-card !rounded-2xl backdrop-blur-md border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <p className="text-stone-50 font-bold text-sm mb-1 uppercase tracking-wider">Samrit Mukherjee</p>
                 <p className="text-accent-400 text-[0.65rem] font-black uppercase tracking-widest">Available for projects</p>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
