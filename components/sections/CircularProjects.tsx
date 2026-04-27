"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  name: string; // Used for compatibility with the provided code
  designation: string;
  quote: string; // The "quote" will be the project description
  src: string;
  link: string;
}

interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}

const projects: Project[] = [
  {
    title: "Cosmic Canvas",
    name: "Cosmic Canvas - AI Design Platform",
    designation: "AI-Powered Design Tool",
    quote: "An advanced AI design tool that generates fully editable, layered designs from natural language prompts—bridging AI creativity with human customization.",
    src: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133961/cosmic-canvas_dbmi8b.png",
    link: "https://cosmic-canvas-delta.vercel.app/",
  },
  {
    title: "SUKALYA.ai",
    name: "SUKALYA.ai - AI Health Assistant",
    designation: "AI Health Guidance System",
    quote: "An AI-powered assistant that improves healthcare accessibility by providing symptom understanding, disease insights, and preventive guidance through an interactive chat interface.",
    src: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133963/sukalya-ai_uguskw.png",
    link: "https://sukalya-ai.vercel.app/",
  },
  {
    title: "Portfolio OS",
    name: "Portfolio OS",
    designation: "Interactive Experience",
    quote: "A browser-based operating system showcasing projects through a multi-window interface, terminal simulation, and interactive applications.",
    src: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133968/portfolio-os_rqsksy.png",
    link: "/portfolio-os",
  },
];

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularProjects = ({
  autoplay = true,
  colors = {},
  fontSizes = {},
}: {
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}) => {
  // Color & font config
  const colorName = colors.name ?? "var(--theme-text)";
  const colorDesignation = colors.designation ?? "var(--theme-text-muted)";
  const colorTestimony = colors.testimony ?? "var(--theme-text-muted)";
  const colorArrowBg = colors.arrowBackground ?? "var(--theme-surface-2)";
  const colorArrowFg = colors.arrowForeground ?? "var(--theme-text)";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "var(--theme-accent)";
  const fontSizeName = fontSizes.name ?? "2rem";
  const fontSizeDesignation = fontSizes.designation ?? "1rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const projectsLength = useMemo(() => projects.length, []);
  const activeProject = useMemo(
    () => projects[activeIndex],
    [activeIndex]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % projectsLength);
      }, 3500);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, projectsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, projectsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [projectsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectsLength) % projectsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [projectsLength]);

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const offset = (index - activeIndex + projectsLength) % projectsLength;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + projectsLength) % projectsLength === index;
    const isRight = (activeIndex + 1) % projectsLength === index;
    
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section id="projects" className="section-wrapper section-surface overflow-hidden">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-stone-400 max-w-2xl">
            A selection of my recent work in AI, Full Stack Development, and Interactive Design.
          </p>
        </div>

        <div className="testimonial-grid">
          {/* Images */}
          <div className="image-container" ref={imageContainerRef}>
            {projects.map((project, index) => (
              <img
                key={`${project.title}-${index}`}
                src={project.src}
                alt={project.name}
                loading="lazy"
                decoding="async"
                className="testimonial-image cursor-pointer hover:opacity-80 transition-opacity"
                data-index={index}
                style={getImageStyle(index)}
                onClick={() => {
                  const link = project.link;
                  if (link.startsWith('/')) {
                    window.location.href = link;
                  } else {
                    window.open(link, '_blank', 'noopener,noreferrer');
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    const link = project.link;
                    if (link.startsWith('/')) {
                      window.location.href = link;
                    } else {
                      window.open(link, '_blank', 'noopener,noreferrer');
                    }
                  }
                }}
                role="button"
                tabIndex={0}
              />
            ))}
          </div>
          {/* Content */}
          <div className="testimonial-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={quoteVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h3
                  className="name"
                  style={{ color: colorName, fontSize: fontSizeName }}
                >
                  {activeProject.name}
                </h3>
                <p
                  className="designation"
                  style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
                >
                  {activeProject.designation}
                </p>
                <motion.p
                  className="quote"
                  style={{ color: colorTestimony, fontSize: fontSizeQuote }}
                >
                  {activeProject.quote.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.22,
                        ease: "easeInOut",
                        delay: 0.025 * i,
                      }}
                      style={{ display: "inline-block" }}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <a 
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-stone-50 rounded-full font-medium hover:bg-accent-500 transition-all group shadow-lg"
                  >
                    View Project 
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            
            <div className="arrow-buttons">
              <button
                className="arrow-button prev-button"
                onClick={handlePrev}
                style={{
                  backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
                }}
                onMouseEnter={() => setHoverPrev(true)}
                onMouseLeave={() => setHoverPrev(false)}
                aria-label="Previous project"
              >
                <FaArrowLeft size={18} color={hoverPrev ? "white" : colorArrowFg} />
              </button>
              <button
                className="arrow-button next-button"
                onClick={handleNext}
                style={{
                  backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
                }}
                onMouseEnter={() => setHoverNext(true)}
                onMouseLeave={() => setHoverNext(false)}
                aria-label="Next project"
              >
                <FaArrowRight size={18} color={hoverNext ? "white" : colorArrowFg} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .testimonial-grid {
          display: grid;
          gap: 2rem;
          padding: 1rem 0;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 16rem;
          perspective: 1000px;
        }
        @media (max-width: 640px) {
          .testimonial-grid {
            gap: 1.5rem;
            padding: 1rem 0;
          }
          .image-container {
            height: 14rem;
          }
        }
        .testimonial-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .name {
          font-weight: 800;
          margin-bottom: 0.25rem;
          letter-spacing: -0.025em;
          font-size: clamp(1.5rem, 5vw, 2rem);
        }
        .designation {
          margin-bottom: 1.5rem;
          font-weight: 500;
          font-size: clamp(0.875rem, 4vw, 1rem);
        }
        .quote {
          line-height: 1.75;
          margin-bottom: 1.5rem;
          font-size: clamp(0.875rem, 3.5vw, 1rem);
        }
        .arrow-buttons {
          display: flex;
          gap: 0.75rem;
          padding-top: 1.5rem;
        }
        .arrow-button {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid var(--theme-border);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .arrow-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        @media (min-width: 640px) {
          .arrow-buttons {
            gap: 1rem;
            padding-top: 2rem;
          }
          .arrow-button {
            width: 3rem;
            height: 3rem;
          }
        }
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr 1fr;
            min-height: 28rem;
            gap: 4rem;
            padding: 2rem 0;
          }
          .image-container {
            height: 100%;
            height: 20rem;
          }
          .arrow-buttons {
            padding-top: 3rem;
          }
        }
      `}</style>
    </section>
  );
};
