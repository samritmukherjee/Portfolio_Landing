import React from "react";

export interface GooeySvgFilterProps {
  id?: string;
  strength?: number;
}

export function GooeySvgFilter({
  id = "gooey-filter",
  strength = 10,
}: GooeySvgFilterProps) {
  return (
    <svg className="hidden absolute w-0 h-0 pointer-events-none" aria-hidden="true">
      <defs>
        <filter id={id}>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={strength}
            result="blur-sm"
          />
          <feColorMatrix
            in="blur-sm"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}

export default GooeySvgFilter;
