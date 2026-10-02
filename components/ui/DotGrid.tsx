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
  glow = true,
  ...props
}: DotGridProps) {
  const patternId = useId();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full fill-black/35 dark:fill-white/35 [mask-image:radial-gradient(ellipse_at_center,white_60%,transparent_92%)]",
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
      {glow && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#FF0000]/10 dark:bg-[#FF0000]/14 blur-[140px] rounded-full pointer-events-none" />
      )}
    </div>
  );
}

export default DotGrid;
