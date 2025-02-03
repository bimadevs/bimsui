"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck, FaClipboard, FaRegClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FooterDemo } from "@/app/components/bims/footer";
import { AnimatedDemo } from "@/app/components/nextjs/animated-gradient-background/demo";

export default function CarouselPreview() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    // Fungsi untuk update state berdasarkan ukuran layar
    const handleResize = () => {
      setSidebarOpen(mediaQuery.matches);
    };

    // Set initial state saat komponen mount
    handleResize();

    // Add event listener untuk resize
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const dependencies = `npm i framer-motion @lottiefiles/dotlottie-react`

  const demotsx = `"use client"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
    
    const DemoVariant1 = () => {
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
        hidden: { y: yOffset, opacity: 0, filter: \`blur(\${blur})\` },
        visible: { y: -yOffset, opacity: 1, filter: \`blur(0px)\` },
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
    
    export { DemoVariant1 };
    `;

  const Animated = `import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
    
    interface AnimatedGradientBackgroundProps {
       /** 
        * Initial size of the radial gradient, defining the starting width. 
        * @default 110
        */
       startingGap?: number;
    
       /**
        * Enables or disables the breathing animation effect.
        * @default false
        */
       Breathing?: boolean;
    
       /**
        * Array of colors to use in the radial gradient.
        * Each color corresponds to a stop percentage in \`gradientStops\`.
        * @default ["#0A0A0A", "#2979FF", "#FF80AB", "#FF6D00", "#FFD600", "#00E676", "#3D5AFE"]
        */
       gradientColors?: string[];
    
       /**
        * Array of percentage stops corresponding to each color in \`gradientColors\`.
        * The values should range between 0 and 100.
        * @default [35, 50, 60, 70, 80, 90, 100]
        */
       gradientStops?: number[];
    
       /**
        * Speed of the breathing animation. 
        * Lower values result in slower animation.
        * @default 0.02
        */
       animationSpeed?: number;
    
       /**
        * Maximum range for the breathing animation in percentage points.
        * Determines how much the gradient "breathes" by expanding and contracting.
        * @default 5
        */
       breathingRange?: number;
    
       /**
        * Additional inline styles for the gradient container.
        * @default {}
        */
       containerStyle?: React.CSSProperties;
    
       /**
        * Additional class names for the gradient container.
        * @default ""
        */
       containerClassName?: string;
    
    
       /**
        * Additional top offset for the gradient container form the top to have a more flexible control over the gradient.
        * @default 0
        */
       topOffset?: number;
    }
    
    /**
     * AnimatedGradientBackground
     *
     * This component renders a customizable animated radial gradient background with a subtle breathing effect.
     * It uses \`framer-motion\` for an entrance animation and raw CSS gradients for the dynamic background.
     *
     *
     * @param {AnimatedGradientBackgroundProps} props - Props for configuring the gradient animation.
     * @returns JSX.Element
     */
    const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
       startingGap = 125,
       Breathing = false,
       gradientColors = [
          "#0A0A0A",
          "#2979FF",
          "#FF80AB",
          "#FF6D00",
          "#FFD600",
          "#00E676",
          "#3D5AFE"
       ],
       gradientStops = [35, 50, 60, 70, 80, 90, 100],
       animationSpeed = 0.02,
       breathingRange = 5,
       containerStyle = {},
       topOffset = 0,
       containerClassName = "",
    }) => {
    
    
    
       // Validation: Ensure gradientStops and gradientColors lengths match
       if (gradientColors.length !== gradientStops.length) {
          throw new Error(
             \`GradientColors and GradientStops must have the same length.
         Received gradientColors length: \${gradientColors.length},
         gradientStops length: \${gradientStops.length}\`
          );
       }
    
       const containerRef = useRef<HTMLDivElement | null>(null);
    
       useEffect(() => {
          let animationFrame: number;
          let width = startingGap;
          let directionWidth = 1;
    
          const animateGradient = () => {
             if (width >= startingGap + breathingRange) directionWidth = -1;
             if (width <= startingGap - breathingRange) directionWidth = 1;
    
             if (!Breathing) directionWidth = 0;
             width += directionWidth * animationSpeed;
    
             const gradientStopsString = gradientStops
                .map((stop, index) => \`\${gradientColors[index]} \${stop}%\`)
                .join(", ");
    
             const gradient = \`radial-gradient(\${width}% \${width+topOffset}% at 50% 20%, \${gradientStopsString})\`;
    
             if (containerRef.current) {
                containerRef.current.style.background = gradient;
             }
    
             animationFrame = requestAnimationFrame(animateGradient);
          };
    
          animationFrame = requestAnimationFrame(animateGradient);
    
          return () => cancelAnimationFrame(animationFrame); // Cleanup animation
       }, [startingGap, Breathing, gradientColors, gradientStops, animationSpeed, breathingRange, topOffset]);
    
       return (
          <motion.div
             key="animated-gradient-background"
             initial={{
                opacity: 0,
                scale: 1.5,
             }}
             animate={{
                opacity: 1,
                scale: 1,
                transition: {
                   duration: 2,
                   ease: [0.25, 0.1, 0.25, 1], // Cubic bezier easing
                 },
             }}
             className={\`absolute inset-0 overflow-hidden \${containerClassName}\`}
          >
             <div
                ref={containerRef}
                style={containerStyle}
                className="absolute inset-0 transition-transform"
             />
          </motion.div>
       );
    };
    
    export default AnimatedGradientBackground;`;

  // Fungsi untuk menyalin kode ke clipboard
  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const CopyIcon = ({ id, code }: { id: string, code: string }) => (
    <div className="absolute right-4 top-4">
      {copiedId === id ? (
        < FaCheck className="text-green-500 font-light transition-all duration-300" />
      ) : (
        < FaRegCopy
          onClick={() => copyToClipboard(code, id)}
          className="transition-all duration-300 cursor-pointer" />

      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <BimsNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <BimsSidebar
          isOpen={sidebarOpen}
          framework={framework}
          onFrameworkChange={setFramework}
        />
        <main className="pt-20 flex-1 w-[100vw]">
          <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className="p-6">
              <h1 className="text-3xl font-bold">Animate Gradient Background</h1>
              <p className="text-muted-foreground mt-2">A customizable animated radial gradient background with a subtle breathing effect.</p>

              <div className="max-w-4xl border-dashed border-2 p-2 mt-4 mx-auto">
                <AnimatedDemo />
              </div>

              <div className="mt-6 "> {/* Menyesuaikan lebar secara dinamis */}
                <h2 className="text-2xl font-semibold">Installation</h2>
                <div className="mt-4 ">
                  {/* install dependencies code  */}
                  <p className="font-bold">Install dependencies</p>
                  <div className="relative mb-8">
                    <SyntaxHighlighter
                      wrapLines={true}
                      language="bash"
                      style={nightOwl}
                      customStyle={{
                        maxHeight: '25rem',
                        padding: '20px',
                        borderRadius: '10px',
                        fontSize: '0.9em',
                        lineHeight: '1.5',
                        margin: '20px 0',
                        overflowX: 'auto',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}>
                      {dependencies}
                    </SyntaxHighlighter>
                    <CopyIcon id="dependencies" code={dependencies} />

                  </div>
                  {/* page.tsx code  */}
                  <p className="font-bold">page.tsx</p>
                  <div className="relative mb-8">
                    <SyntaxHighlighter
                      showLineNumbers={true}
                      wrapLines={true}
                      language="tsx"
                      style={nightOwl}
                      customStyle={{
                        maxHeight: '25rem',
                        padding: '20px',
                        borderRadius: '10px',
                        fontSize: '0.9em',
                        lineHeight: '1.5',
                        margin: '20px 0',
                        overflowX: 'auto',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}>
                      {demotsx}
                    </SyntaxHighlighter>
                    <CopyIcon id="demotsx" code={demotsx} />

                  </div>

                  {/* animated-gradient-background.tsx code  */}
                  <p className="font-bold">components/ui/animated-gradient-background.tsx</p>
                  <div className="relative">
                    <SyntaxHighlighter
                      showLineNumbers={true}
                      wrapLines={true}
                      language="tsx"
                      style={nightOwl}
                      customStyle={{
                        maxHeight: '25rem',
                        padding: '20px',
                        borderRadius: '10px',
                        fontSize: '0.9em',
                        lineHeight: '1.5',
                        margin: '20px 0',
                        overflowX: 'auto',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}>
                      {Animated}
                    </SyntaxHighlighter>
                    <CopyIcon id="Animated" code={Animated} />

                  </div>

                </div>
              </div>
            </div>
            <FooterDemo />
          </div>
        </main>
      </div>
    </div>
  );
}
