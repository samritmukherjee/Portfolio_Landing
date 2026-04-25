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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-stone-50 tracking-tighter leading-tight">
            Explore my portfolio in an <br />
            <span className="text-accent-500">OS Experience</span>
          </h2>
          <p className="text-stone-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Scroll down to see an immersive operating system environment where you can explore my projects, terminal, and interactive features.
          </p>
        </div>
      )}
    >
      {children || (
        <div className="relative w-full h-full group bg-gradient-to-br from-stone-950 to-stone-900">
          {/* OS Preview Image with parallax effect */}
          <div className="absolute inset-0">
            <img
              src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133968/portfolio-os_rqsksy.png"
              alt="Portfolio OS Preview"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/40 group-hover:via-transparent group-hover:to-black/10 transition-all duration-700" />
          </div>

          {/* CTA Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-sm">
            <a
              href="/portfolio-os"
              className="px-12 py-6 bg-accent-500 text-stone-950 font-black text-base md:text-lg uppercase tracking-widest rounded-full transform scale-75 group-hover:scale-100 transition-all duration-500 shadow-2xl hover:bg-white hover:shadow-accent-500/50"
            >
              Explore OS Experience
            </a>
          </div>

          {/* Floating accent elements */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      )}
    </ContainerScroll>
  );
};

export default ContainerScrollAnimation;
