"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck, FaClipboard, FaRegClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FooterDemo } from "@/app/components/bims/footer";
import { TextRevealCardPreview } from "@/app/components/nextjs/reveal-card/demo";
import Loading from "@/app/loading";

export default function TextReveals() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

  const dependencies = `npm i motion clsx tailwind-merge`

  const utils = `import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }`

  const demotsx = `"use client";
  import React from "react";
  import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
  } from "../ui/text-reveal";
  
  export function TextRevealCardPreview() {
    return (
      <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry "
        >
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            This is a text reveal card. Hover over the card to reveal the hidden
            text.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    );
  }`;

  const textReveal = `"use client";
    import React, { useEffect, useRef, useState, memo } from "react";
    import { motion } from "framer-motion";
    import { twMerge } from "tailwind-merge";
    import { cn } from "@/lib/utils";
    
    export const TextRevealCard = ({
      text,
      revealText,
      children,
      className,
    }: {
      text: string;
      revealText: string;
      children?: React.ReactNode;
      className?: string;
    }) => {
      const [widthPercentage, setWidthPercentage] = useState(0);
      const cardRef = useRef<HTMLDivElement | any>(null);
      const [left, setLeft] = useState(0);
      const [localWidth, setLocalWidth] = useState(0);
      const [isMouseOver, setIsMouseOver] = useState(false);
    
      useEffect(() => {
        if (cardRef.current) {
          const { left, width: localWidth } =
            cardRef.current.getBoundingClientRect();
          setLeft(left);
          setLocalWidth(localWidth);
        }
      }, []);
    
      function mouseMoveHandler(event: any) {
        event.preventDefault();
    
        const { clientX } = event;
        if (cardRef.current) {
          const relativeX = clientX - left;
          setWidthPercentage((relativeX / localWidth) * 100);
        }
      }
    
      function mouseLeaveHandler() {
        setIsMouseOver(false);
        setWidthPercentage(0);
      }
      function mouseEnterHandler() {
        setIsMouseOver(true);
      }
      function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
        event.preventDefault();
        const clientX = event.touches[0]!.clientX;
        if (cardRef.current) {
          const relativeX = clientX - left;
          setWidthPercentage((relativeX / localWidth) * 100);
        }
      }
    
      const rotateDeg = (widthPercentage - 50) * 0.1;
      return (
        <div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          onMouseMove={mouseMoveHandler}
          onTouchStart={mouseEnterHandler}
          onTouchEnd={mouseLeaveHandler}
          onTouchMove={touchMoveHandler}
          ref={cardRef}
          className={cn(
            "bg-[#1d1c20] border border-white/[0.08] w-[40rem] rounded-lg p-8 relative overflow-hidden",
            className
          )}
        >
          {children}
    
          <div className="h-40  relative flex items-center overflow-hidden">
            <motion.div
              style={{
                width: "100%",
              }}
              animate={
                isMouseOver
                  ? {
                      opacity: widthPercentage > 0 ? 1 : 0,
                      clipPath: \`inset(0 \${100 - widthPercentage}% 0 0)\`,
                    }
                  : {
                      clipPath: \`inset(0 \${100 - widthPercentage}% 0 0)\`,
                    }
              }
              transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
              className="absolute bg-[#1d1c20] z-20  will-change-transform"
            >
              <p
                style={{
                  textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
                }}
                className="text-base sm:text-[3rem] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
              >
                {revealText}
              </p>
            </motion.div>
            <motion.div
              animate={{
                left: \`\${widthPercentage}%\`,
                rotate: \`\${rotateDeg}deg\`,
                opacity: widthPercentage > 0 ? 1 : 0,
              }}
              transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
              className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
            ></motion.div>
    
            <div className=" overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
              <p className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238]">
                {text}
              </p>
              <MemoizedStars />
            </div>
          </div>
        </div>
      );
    };
    
    export const TextRevealCardTitle = ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => {
      return (
        <h2 className={twMerge("text-white text-lg mb-2", className)}>
          {children}
        </h2>
      );
    };
    
    export const TextRevealCardDescription = ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => {
      return (
        <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
      );
    };
    
    const Stars = () => {
      const randomMove = () => Math.random() * 4 - 2;
      const randomOpacity = () => Math.random();
      const random = () => Math.random();
      return (
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <motion.span
              key={\`star-\${i}\`}
              animate={{
                top: \`calc(\${random() * 100}% + \${randomMove()}px)\`,
                left: \`calc(\${random() * 100}% + \${randomMove()}px)\`,
                opacity: randomOpacity(),
                scale: [1, 1.2, 0],
              }}
              transition={{
                duration: random() * 10 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                top: \`\${random() * 100}%\`,
                left: \`\${random() * 100}%\`,
                width: \`2px\`,
                height: \`2px\`,
                backgroundColor: "white",
                borderRadius: "50%",
                zIndex: 1,
              }}
              className="inline-block"
            ></motion.span>
          ))}
        </div>
      );
    };
    
    export const MemoizedStars = memo(Stars);`;
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

  // Simulasi proses loading (misalnya 2 detik)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Jika isLoading true, tampilkan animasi loading
  if (isLoading) {
    return <Loading />;
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
              <h1 className="text-3xl font-bold">Text Reveal</h1>
              <p className="text-muted-foreground mt-2">Mousemove effect to reveal text content at the bottom of the card.</p>

              <div className="max-w-4xl border-dashed border-2 p-2 mt-4 mx-auto">
                <TextRevealCardPreview />
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

                  {/* utils code  */}
                  <h1 className="font-bold text-2xl">Add util file</h1>
                  <p className="">src/lib/utils.ts</p>
                  <div className="relative mb-8">
                    <SyntaxHighlighter
                      showLineNumbers={true}
                      wrapLines={true}
                      language="ts"
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
                      {utils}
                    </SyntaxHighlighter>
                    <CopyIcon id="utils" code={utils} />

                  </div>

                  {/* text-reveal.tsx code  */}
                  <p className="font-bold">components/ui/text-reveal.tsx</p>
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
                      {textReveal}
                    </SyntaxHighlighter>
                    <CopyIcon id="textReveal" code={textReveal} />

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
