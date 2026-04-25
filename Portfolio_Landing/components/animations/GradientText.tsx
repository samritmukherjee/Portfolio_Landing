interface GradientTextProps {
  text: string;
  className?: string;
}

export const GradientText = ({ text, className = '' }: GradientTextProps) => {
  return (
    <span
      className={`bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600 bg-clip-text text-transparent ${className}`}
    >
      {text}
    </span>
  );
};
