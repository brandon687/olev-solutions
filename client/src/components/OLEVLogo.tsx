import { motion } from "framer-motion";

interface OLEVLogoProps {
  className?: string;
  animated?: boolean;
}

export default function OLEVLogo({ className = "", animated = true }: OLEVLogoProps) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const MotionComponent = animated ? motion.svg : "svg";
  const PathComponent = animated ? motion.path : "path";

  return (
    <MotionComponent
      viewBox="0 0 200 60"
      className={className}
      variants={animated ? containerVariants : undefined}
      initial={animated ? "hidden" : undefined}
      animate={animated ? "visible" : undefined}
    >
      <PathComponent
        d="M 20 15 Q 20 10, 25 10 L 35 10 Q 40 10, 40 15 L 40 45 Q 40 50, 35 50 L 25 50 Q 20 50, 20 45 Z"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2.5"
        variants={animated ? pathVariants : undefined}
      />
      <PathComponent
        d="M 50 10 L 50 50 M 50 10 L 70 50 M 70 10 L 70 50"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animated ? pathVariants : undefined}
      />
      <PathComponent
        d="M 80 10 L 80 50 M 80 10 L 100 10 M 80 30 L 95 30 M 80 50 L 100 50"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animated ? pathVariants : undefined}
      />
      <PathComponent
        d="M 110 10 L 130 50 M 130 50 L 150 10"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animated ? pathVariants : undefined}
      />
      <motion.circle
        cx="30"
        cy="30"
        r="3"
        fill="hsl(var(--primary))"
        initial={animated ? { scale: 0 } : undefined}
        animate={animated ? { scale: 1 } : undefined}
        transition={animated ? { delay: 1, duration: 0.3 } : undefined}
      />
    </MotionComponent>
  );
}
