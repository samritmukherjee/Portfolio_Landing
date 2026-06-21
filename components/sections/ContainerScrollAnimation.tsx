"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

export const ContainerScrollAnimation = ({
  titleComponent,
  children,
}: {
  titleComponent?: string | React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <ContainerScroll
      titleComponent={titleComponent || (
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[var(--theme-text)] tracking-tight leading-tight px-2">
            Explore my portfolio in an <span className="gradient-accent">OS Experience</span>
          </h2>
          <p className="text-[var(--theme-text-muted)] text-base md:text-lg max-w-2xl mx-auto font-medium">
            Scroll down to see an immersive operating system environment where you can explore my projects, terminal, and interactive features.
          </p>
        </div>
      )}
    >
      {children || (
        <div className="relative w-full h-full group bg-gradient-to-br from-[var(--theme-surface)] to-[var(--theme-surface-2)]">
          {/* OS Preview Image with parallax effect */}
          <div className="absolute inset-0 translate-y-5">
            <img
              src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133968/portfolio-os_rqsksy.png"
              alt="Interactive Portfolio OS desktop preview showcasing folders, terminals, and active web applications"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg)]/70 via-transparent to-[var(--theme-bg)]/20" />
          </div>

          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <a
              href="https://samrit-portfolio-os.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3.5 text-sm md:text-base uppercase tracking-widest"
            >
              Explore OS Experience
            </a>
          </div>
        </div>
      )}
    </ContainerScroll>
  );
};

export default ContainerScrollAnimation;
