"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue, useReducedMotion } from "framer-motion";

export const ContainerScrollAnimation = ({
  titleComponent,
  children,
}: {
  titleComponent?: string | React.ReactNode;
  children?: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.8, 1] : [1.05, 1];
  };

  // Subtle and controlled motion
  const rotate = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <div
      className="h-[24rem] md:h-[32rem] flex items-center justify-center relative p-2 md:px-20 overflow-hidden"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-20 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={prefersReducedMotion ? 0 : translate} titleComponent={titleComponent || (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-stone-50 tracking-tighter">
              Explore my portfolio in an <br />
              <span className="text-accent-500">OS Experience</span>
            </h2>
            <p className="text-stone-400 text-sm md:text-base max-w-xl mx-auto font-medium">
              Step into a fully interactive operating system environment where you can explore my projects, terminal, and more.
            </p>
          </div>
        )} />
        <Card
          rotate={prefersReducedMotion ? 0 : rotate}
          translate={prefersReducedMotion ? 0 : translate}
          scale={prefersReducedMotion ? 1 : scale}
        >
          {children || (
            <div className="relative w-full h-full group bg-stone-950">
              {/* OS Preview Image */}
              <div className="absolute inset-0">
                <img
                  src="/os-preview.png"
                  alt="Portfolio OS Preview"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700" />
              </div>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-sm">
                <a
                  href="#"
                  className="px-10 py-5 bg-accent-500 text-stone-950 font-black text-sm uppercase tracking-widest rounded-full transform scale-90 group-hover:scale-100 transition-all duration-500 shadow-2xl hover:bg-white"
                >
                  Explore OS Experience
                </a>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Decorative background elements - more subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center relative z-20"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number> | number;
  scale: MotionValue<number> | number;
  translate: MotionValue<number> | number;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 20px 50px rgba(0,0,0,0.3), 0 50px 100px rgba(0,0,0,0.2)",
      }}
      className="max-w-2xl -mt-4 mx-auto h-[14rem] md:h-[20rem] w-full border border-white/10 p-2 md:p-3 bg-stone-950 rounded-[1.5rem] shadow-2xl relative z-10"
    >
      <div className="h-full w-full overflow-hidden rounded-[2.2rem] bg-stone-900 border border-white/5">
        {children}
      </div>
    </motion.div>
  );
};

export default ContainerScrollAnimation;
