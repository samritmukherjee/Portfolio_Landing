"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

interface ContactLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  isPrimary?: boolean;
}

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDmBfKhgHdjbrnFQpsQtcgCPsvzmwFLhmwTtMVFwVGhCfWPqRNgKjScLSTlKsNLDFgWwjDB",
    icon: <FaEnvelope className="text-lg" />,
    isPrimary: true,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: <FaGithub className="text-lg" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <FaLinkedin className="text-lg" />,
  },
];

export const Contact = () => {
  return (
    <section className="section-wrapper relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent opacity-40" />
      <div className="container-custom relative z-10">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Let's Connect
            </h2>
            <p className="text-base sm:text-lg text-blue-200/80 mb-6 sm:mb-10 max-w-2xl leading-relaxed">
              I'm always interested in new opportunities, collaborations, or just a
              good conversation about tech. Reach out and let's build something amazing together.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {contactLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`
                  inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-7 py-2 sm:py-3 font-semibold text-xs sm:text-base md:text-lg
                  transition-all duration-300 ease-out transform
                  hover:scale-105 active:scale-95
                  ${
                    link.isPrimary
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                      : "border-2 border-blue-400/50 text-blue-100 rounded-full hover:bg-blue-500/10 hover:border-blue-400/80 hover:text-white"
                  }
                `}
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0
                }}
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
