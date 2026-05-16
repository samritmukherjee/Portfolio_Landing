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
              alt="Portfolio OS Preview"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg)]/70 via-transparent to-[var(--theme-bg)]/20 group-hover:from-[var(--theme-bg)]/45 group-hover:via-transparent group-hover:to-[var(--theme-bg)]/10 transition-all duration-700" />
          </div>

          {/* CTA Overlay */}
          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-sm">
            <a
              href="/portfolio-os"
              className="btn-primary px-10 py-4 text-base md:text-lg uppercase tracking-widest transform scale-75 group-hover:scale-100 transition-all duration-500 shadow-2xl"
            >
              Explore OS Experience
            </a>
          </div>

          {/* Floating accent elements */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-secondary-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      )}
    </ContainerScroll>
  );
};

export default ContainerScrollAnimation;
