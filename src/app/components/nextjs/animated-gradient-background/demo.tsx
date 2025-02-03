"use client"
import AnimatedGradientBackground from "./animated-gradient-background";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const AnimatedDemo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Gradient Background */}
      <AnimatedGradientBackground />

      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-32 text-center">
        <div delay={0.4}
          duration={0.9}
        >
          <DotLottieReact
            src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
            loop
            autoplay
          />
        </div>
        <BlurFade delay={1.5}>
          <p className="mt-4 text-lg text-gray-300 md:text-xl max-w-lg">
            A customizable animated radial gradient background with a subtle
            breathing effect.
          </p>
        </BlurFade>
      </div>
    </div>
  );
};



const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  onClick,
}: BlurFadeProps) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
        onClick={onClick}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export { AnimatedDemo };
