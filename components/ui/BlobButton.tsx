"use client";

import React from "react";
import { cn } from "@/lib/utils";

type BlobButtonVariant = "primary" | "secondary" | "icon";

type BlobButtonBaseProps = {
  variant?: BlobButtonVariant;
  className?: string;
  children: React.ReactNode;
  decorative?: boolean;
};

type BlobButtonAsButton = BlobButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type BlobButtonAsLink = BlobButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type BlobButtonProps = BlobButtonAsButton | BlobButtonAsLink;

function BlobInner() {
  return (
    <span className="blob-btn__inner" aria-hidden>
      <span className="blob-btn__blobs">
        <span className="blob-btn__blob" />
        <span className="blob-btn__blob" />
        <span className="blob-btn__blob" />
        <span className="blob-btn__blob" />
      </span>
    </span>
  );
}

export function BlobGooFilter() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="blob-goo-svg"
      aria-hidden
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
            result="goo"
          />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
        </filter>
      </defs>
    </svg>
  );
}

export function BlobButton({
  variant = "primary",
  className,
  children,
  decorative = false,
  ...props
}: BlobButtonProps & { decorative?: boolean }) {
  const classes = cn(
    "blob-btn",
    variant === "primary" && "blob-btn--primary",
    variant === "secondary" && "blob-btn--secondary",
    variant === "icon" && "blob-btn--icon",
    className
  );

  if (decorative) {
    return (
      <span className={classes} aria-hidden>
        <span className="blob-btn__label">{children}</span>
        <BlobInner />
      </span>
    );
  }

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={classes} {...anchorProps}>
        <span className="blob-btn__label">{children}</span>
        <BlobInner />
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonProps}>
      <span className="blob-btn__label">{children}</span>
      <BlobInner />
    </button>
  );
}
