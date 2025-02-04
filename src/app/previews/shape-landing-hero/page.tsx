"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck, FaClipboard, FaRegClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FooterDemo } from "@/app/components/bims/footer";
import { AnimatedDemo } from "@/app/components/nextjs/animated-gradient-background/demo";
import { DemoHeroGeometric } from "@/app/components/nextjs/shape-landing-hero/demo";
import Loading from "@/app/loading";

export default function CarouselPreview() {
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

    const dependencies = `npm i framer-motion clsx tailwind-merge lucide-react`

    const demotsx = `import { HeroGeometric } from "./components/ui/shape-landing-hero"

  function DemoHeroGeometric() {
      return <HeroGeometric badge="BimsUI"
              title1 = "Elevate Your"
              title2 = "Digital Vision" />
  }
  
  export { DemoHeroGeometric }`;

    const utils = `import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }`

    const code = `"use client";

  import { motion, useMotionValue, useTransform, animate } from "framer-motion";
  import { Circle } from "lucide-react";
  import { useEffect, useState } from "react";
  import { cn } from "@/lib/utils";
  
  
  function ElegantShape({
      className,
      delay = 0,
      width = 400,
      height = 100,
      rotate = 0,
      gradient = "from-white/[0.08]",
  }: {
      className?: string;
      delay?: number;
      width?: number;
      height?: number;
      rotate?: number;
      gradient?: string;
  }) {
      return (
          <motion.div
              initial={{
                  opacity: 0,
                  y: -150,
                  rotate: rotate - 15,
              }}
              animate={{
                  opacity: 1,
                  y: 0,
                  rotate: rotate,
              }}
              transition={{
                  duration: 2.4,
                  delay,
                  ease: [0.23, 0.86, 0.39, 0.96],
                  opacity: { duration: 1.2 },
              }}
              className={cn("absolute", className)}
          >
              <motion.div
                  animate={{
                      y: [0, 15, 0],
                  }}
                  transition={{
                      duration: 12,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                  }}
                  style={{
                      width,
                      height,
                  }}
                  className="relative"
              >
                  <div
                      className={cn(
                          "absolute inset-0 rounded-full",
                          "bg-gradient-to-r to-transparent",
                          gradient,
                          "backdrop-blur-[2px] border-2 border-white/[0.15]",
                          "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                          "after:absolute after:inset-0 after:rounded-full",
                          "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                      )}
                  />
              </motion.div>
          </motion.div>
      );
  }
  
  function HeroGeometric({
      badge = "Design Collective",
      title1 = "Elevate Your Digital Vision",
      title2 = "Crafting Exceptional Websites",
  }: {
      badge?: string;
      title1?: string;
      title2?: string;
  }) {
      const fadeUpVariants = {
          hidden: { opacity: 0, y: 30 },
          visible: (i: number) => ({
              opacity: 1,
              y: 0,
              transition: {
                  duration: 1,
                  delay: 0.5 + i * 0.2,
                  ease: [0.25, 0.4, 0.25, 1],
              },
          }),
      };
  
      return (
          <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
  
              <div className="absolute inset-0 overflow-hidden">
                  <ElegantShape
                      delay={0.3}
                      width={600}
                      height={140}
                      rotate={12}
                      gradient="from-indigo-500/[0.15]"
                      className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                  />
  
                  <ElegantShape
                      delay={0.5}
                      width={500}
                      height={120}
                      rotate={-15}
                      gradient="from-rose-500/[0.15]"
                      className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                  />
  
                  <ElegantShape
                      delay={0.4}
                      width={300}
                      height={80}
                      rotate={-8}
                      gradient="from-violet-500/[0.15]"
                      className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                  />
  
                  <ElegantShape
                      delay={0.6}
                      width={200}
                      height={60}
                      rotate={20}
                      gradient="from-amber-500/[0.15]"
                      className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                  />
  
                  <ElegantShape
                      delay={0.7}
                      width={150}
                      height={40}
                      rotate={-25}
                      gradient="from-cyan-500/[0.15]"
                      className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                  />
              </div>
  
              <div className="relative z-10 container mx-auto px-4 md:px-6">
                  <div className="max-w-3xl mx-auto text-center">
                      <motion.div
                          custom={0}
                          variants={fadeUpVariants}
                          initial="hidden"
                          animate="visible"
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
                      >
                          <Circle className="h-2 w-2 fill-rose-500/80" />
                          <span className="text-sm text-white/60 tracking-wide">
                              {badge}
                          </span>
                      </motion.div>
  
                      <motion.div
                          custom={1}
                          variants={fadeUpVariants}
                          initial="hidden"
                          animate="visible"
                      >
                          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                  {title1}
                              </span>
                              <br />
                              <span
                                  className={cn(
                                      "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 "
                                  )}
                              >
                                  {title2}
                              </span>
                          </h1>
                      </motion.div>
  
                      <motion.div
                          custom={2}
                          variants={fadeUpVariants}
                          initial="hidden"
                          animate="visible"
                      >
                          <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                              Crafting exceptional digital experiences through
                              innovative design and cutting-edge technology.
                          </p>
                      </motion.div>
                  </div>
              </div>
  
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
          </div>
      );
  }
  
  export { HeroGeometric }`;

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
                            <h1 className="text-3xl font-bold">Shape Landing Hero</h1>
                            <p className="text-muted-foreground mt-2">a landing hero with a modern look</p>

                            <div className="max-w-4xl border-dashed border-2 p-2 mt-4 mx-auto">
                                <DemoHeroGeometric />
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



                                    {/* shape-landing-hero.tsx code  */}
                                    <p className="font-bold">components/ui/shape-landing-hero.tsx</p>
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
                                            {code}
                                        </SyntaxHighlighter>
                                        <CopyIcon id="code" code={code} />
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
