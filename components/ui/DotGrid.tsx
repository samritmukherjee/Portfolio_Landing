"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface DotGridProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  glow?: boolean;
}

export function DotGrid({
  width = 24,
  height = 24,
  x = 0,
  y = 0,
  cx = 1.25,
  cy = 1.25,
  cr = 1.25,
  className,
  glow = false,
  ...props
}: DotGridProps) {
  const patternId = useId();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full fill-neutral-900/35 dark:fill-white/45 [html[data-theme='dark']_&]:fill-white/45 [mask-image:radial-gradient(ellipse_at_center,white_60%,transparent_92%)]",
          className
        )}
        {...props}
      >
        <defs>
          <pattern
            id={patternId}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            patternTransform={`translate(${x} ${y})`}
          >
            <circle cx={cx} cy={cy} r={cr} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}

export default DotGrid;
