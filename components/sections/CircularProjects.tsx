"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { projectsData } from "@/lib/projects-data";
import { BlobButton } from "@/components/ui/BlobButton";

const COMING_SOON_PROJECT_ID = "more-projects-coming-soon";

function getPreviewUrl(link: string) {
  return link.includes("?") ? `${link}&preview=true` : `${link}?preview=true`;
}

function PreviewModal({
  previewUrl,
  title,
  externalUrl,
  showGoToLink,
  isComingSoon,
  image,
  onClose,
}: {
  previewUrl: string;
  title: string;
  externalUrl: string;
  showGoToLink: boolean;
  isComingSoon?: boolean;
  image?: string;
  onClose: () => void;
}) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden border border-[var(--theme-border)] bg-[var(--theme-surface)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--theme-border)]">
          <span id="modal-title" className="font-semibold text-[var(--theme-text)]">{title}</span>
          <div className="flex items-center gap-2">
            {showGoToLink && (
              <BlobButton
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="px-3 py-1 text-sm min-h-0 rounded-lg"
              >
                Go To Link
              </BlobButton>
            )}
            <BlobButton
              type="button"
              variant="secondary"
              onClick={onClose}
              className="px-3 py-1 text-sm min-h-0 rounded-lg"
            >
              Close
            </BlobButton>
          </div>
        </div>
        {isComingSoon ? (
          <div className="w-full h-[calc(100%-52px)] flex flex-col items-center justify-center gap-6 p-8 bg-[var(--theme-bg)]">
            {image && (
              <img
                src={image}
                alt={title}
                className="max-w-full max-h-[55%] object-contain rounded-xl border border-[var(--theme-border)]"
              />
            )}
            <div className="text-center space-y-2 max-w-md">
              <p className="text-lg font-semibold text-[var(--theme-text)]">{title}</p>
              <p className="text-sm text-[var(--theme-text-muted)]">
                New projects are in active research and design. Check back soon for live demos.
              </p>
            </div>
          </div>
        ) : (
          <iframe
            src={previewUrl}
            title={`${title} live preview`}
            className="w-full h-[calc(100%-52px)] bg-white"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        )}
      </div>
    </div>
  );
}

type PreviewState = {
  previewUrl: string;
  title: string;
  externalUrl: string;
  showGoToLink: boolean;
  isComingSoon?: boolean;
  image?: string;
};

export const CircularProjects = () => {
  const [preview, setPreview] = useState<PreviewState | null>(null);

  const openPreview = (project: (typeof projectsData)[number]) => {
    const isComingSoon = project.id === COMING_SOON_PROJECT_ID;
    setPreview({
      previewUrl: getPreviewUrl(project.link),
      title: project.title,
      externalUrl: project.link,
      showGoToLink: !isComingSoon,
      isComingSoon,
      image: project.image,
    });
  };

  return (
    <section id="projects" className="section-wrapper section-surface overflow-hidden">
      <div className="container-custom">
        <div className="mb-12 md:mb-16">
          <h2 className="text-[var(--theme-text)] mb-4">
            Featured <span className="gradient-accent">Case Studies</span>
          </h2>
          <p className="text-[var(--theme-text-muted)] max-w-2xl">
            Outcome-focused work in AI, full stack development, and interactive product design.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:gap-14">
          {projectsData.map((project, idx) => (
            <article
              key={project.id}
              className={`project-card grid lg:grid-cols-2 gap-8 items-center overflow-hidden rounded-[1.75rem] border border-[var(--theme-border)] bg-[var(--theme-card)] ${
                idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-video lg:aspect-[16/11] overflow-hidden lg:rounded-l-[1.75rem]">
                <img
                  src={project.image}
                  alt={`${project.title} — project screenshot`}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>

              <div className="p-6 sm:p-8 lg:p-10 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-400 font-bold mb-2">
                    {project.category === "ai" ? "AI Product" : "Web Experience"}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--theme-text)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-accent-300 font-semibold text-sm sm:text-base">
                    {project.outcome}
                  </p>
                </div>
                <p className="text-[var(--theme-text-muted)] !max-w-none">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-lg border border-[var(--theme-border)] text-[var(--theme-text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <BlobButton
                    type="button"
                    variant="primary"
                    onClick={() => openPreview(project)}
                    className="inline-flex items-center gap-2 text-sm min-h-0"
                  >
                    <FaPlay size={12} /> Live Demo
                  </BlobButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <PreviewModal
            previewUrl={preview.previewUrl}
            title={preview.title}
            externalUrl={preview.externalUrl}
            showGoToLink={preview.showGoToLink}
            isComingSoon={preview.isComingSoon}
            image={preview.image}
            onClose={() => setPreview(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
