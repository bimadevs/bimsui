"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { Connect } from "@/app/components/UI/highlighter/demo";
import { FooterDemo } from "@/app/components/bims/footer";

export default function Highlighter() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dependencies = `npm i clsx tailwind-merge framer-motion dicons @radix-ui/react-slot class-variance-authority`

  const utils = `import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }
    `

  const demotsx = `"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DIcons } from "dicons";
import { useAnimate } from "framer-motion";

import { Button, buttonVariants } from "@/components/ui/button";

import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";

export function Connect() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#javascript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#javascript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#react-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#react-js", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#typescript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#typescript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#next-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#next-js", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      },
    );
  }, [animate]);
  return (
    <section className="relative mx-auto mb-20 mt-6 max-w-5xl  ">
      <HighlightGroup className="group h-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-down"
        >
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-black">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color={"#555555"}
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                    ref={scope}
                  >
                    <DIcons.Designali className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2" />
                    <div
                      id="next-js"
                      className="absolute bottom-12 left-14 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      UI-UX
                    </div>
                    <div
                      id="react-js"
                      className="absolute left-2 top-20 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Graphic Design
                    </div>
                    <div
                      id="typescript"
                      className="absolute bottom-20 right-1 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Web Application
                    </div>
                    <div
                      id="javascript"
                      className="absolute right-12 top-10 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Branding
                    </div>

                    <div id="pointer" className="absolute">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-red-500"
                        stroke="white"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                      <span className="bg-ali relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-white">
                        Bimadev
                      </span>
                    </div>
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-center">
                      <h3 className="mt-6   pb-1 font-bold ">
                        <span className="text-2xl md:text-4xl">
                          Mau request UI Component ?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-slate-400">
                      Feel free to reach out to me!
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={"https://ui.bimadev.xyz"}
                        target="_blank"
                      >
                        <Button className="border">Book a call</Button>
                      </Link>
                      <Link
                        href="mailto:bimadev06@gmail.com"
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          }),
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <DIcons.Mail strokeWidth={1} className="h-5 w-5" />
                        </span>
                      </Link>
                      <Link
                        href="https://wa.me/6282254044783"
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          }),
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <DIcons.WhatsApp
                            strokeWidth={1}
                            className="h-4 w-4"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
};
`;

  const highlighter = `"use client";

    import type { PropsWithChildren } from "react";
    import React, { useEffect, useRef, useState } from "react";
    
    interface MousePosition {
      x: number;
      y: number;
    }
    
    export default function useMousePosition(): MousePosition {
      const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0,
      });
    
      useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
          setMousePosition({ x: event.clientX, y: event.clientY });
        };
    
        window.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);
    
      return mousePosition;
    }
    
    interface HighlightGroupProps {
      children: React.ReactNode;
      className?: string;
      refresh?: boolean;
    }
    
    export const HighlightGroup: React.FC<HighlightGroupProps> = ({
      children,
      className = "",
      refresh = false,
    }) => {
      const containerRef = useRef<HTMLDivElement>(null);
      const mousePosition = useMousePosition();
      const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
      const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
      const [boxes, setBoxes] = useState<HTMLElement[]>([]);
    
      useEffect(() => {
        containerRef.current &&
          setBoxes(
            Array.from(containerRef.current.children).map(
              (el) => el as HTMLElement,
            ),
          );
      }, []);
    
      useEffect(() => {
        initContainer();
        window.addEventListener("resize", initContainer);
    
        return () => {
          window.removeEventListener("resize", initContainer);
        };
      }, [setBoxes]);
    
      useEffect(() => {
        onMouseMove();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [mousePosition]);
    
      useEffect(() => {
        initContainer();
      }, [refresh]);
    
      const initContainer = () => {
        if (containerRef.current) {
          containerSize.current.w = containerRef.current.offsetWidth;
          containerSize.current.h = containerRef.current.offsetHeight;
        }
      };
    
      const onMouseMove = () => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const { w, h } = containerSize.current;
          const x = mousePosition.x - rect.left;
          const y = mousePosition.y - rect.top;
          const inside = x < w && x > 0 && y < h && y > 0;
          if (inside) {
            mouse.current.x = x;
            mouse.current.y = y;
            boxes.forEach((box) => {
              const boxX =
                -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
              const boxY =
                -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
              box.style.setProperty("--mouse-x", \`\${boxX}px\`);
              box.style.setProperty("--mouse-y", \`\${boxY}px\`);
            });
          }
        }
      };
    
      return (
        <div className={className} ref={containerRef}>
          {children}
        </div>
      );
    };
    
    interface HighlighterItemProps {
      children: React.ReactNode;
      className?: string;
    }
    
    export const HighlighterItem: React.FC<
      PropsWithChildren<HighlighterItemProps>
    > = ({ children, className = "" }) => {
      return (
        <div
          className={\`relative overflow-hidden p-px before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-30 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-lime-500 before:opacity-0 before:blur-[100px] before:transition-opacity before:duration-500 after:absolute after:inset-0 after:z-10 after:rounded-3xl after:opacity-0 after:transition-opacity after:duration-500  before:hover:opacity-20 after:group-hover:opacity-100 dark:before:bg-white/50  \${className}\`}
        >
          {children}
        </div>
      );
    };
    
    interface ParticlesProps {
      className?: string;
      quantity?: number;
      staticity?: number;
      ease?: number;
      refresh?: boolean;
      color?: string;
      vx?: number;
      vy?: number;
    }
    function hexToRgb(hex: string): number[] {
      // Remove the "#" character from the beginning of the hex color code
      hex = hex.replace("#", "");
    
      // Convert the hex color code to an integer
      const hexInt = parseInt(hex, 16);
    
      // Extract the red, green, and blue components from the hex color code
      const red = (hexInt >> 16) & 255;
      const green = (hexInt >> 8) & 255;
      const blue = hexInt & 255;
    
      // Return an array of the RGB values
      return [red, green, blue];
    }
    
    export const Particles: React.FC<ParticlesProps> = ({
      className = "",
      quantity = 30,
      staticity = 50,
      ease = 50,
      refresh = false,
      color = "#ffffff",
      vx = 0,
      vy = 0,
    }) => {
      const canvasRef = useRef<HTMLCanvasElement>(null);
      const canvasContainerRef = useRef<HTMLDivElement>(null);
      const context = useRef<CanvasRenderingContext2D | null>(null);
      const circles = useRef<any[]>([]);
      const mousePosition = useMousePosition();
      const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
      const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
      const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
    
      useEffect(() => {
        if (canvasRef.current) {
          context.current = canvasRef.current.getContext("2d");
        }
        initCanvas();
        animate();
        window.addEventListener("resize", initCanvas);
    
        return () => {
          window.removeEventListener("resize", initCanvas);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
      useEffect(() => {
        onMouseMove();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [mousePosition.x, mousePosition.y]);
    
      useEffect(() => {
        initCanvas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [refresh]);
    
      const initCanvas = () => {
        resizeCanvas();
        drawParticles();
      };
    
      const onMouseMove = () => {
        if (canvasRef.current) {
          const rect = canvasRef.current.getBoundingClientRect();
          const { w, h } = canvasSize.current;
          const x = mousePosition.x - rect.left - w / 2;
          const y = mousePosition.y - rect.top - h / 2;
          const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
          if (inside) {
            mouse.current.x = x;
            mouse.current.y = y;
          }
        }
      };
    
      type Circle = {
        x: number;
        y: number;
        translateX: number;
        translateY: number;
        size: number;
        alpha: number;
        targetAlpha: number;
        dx: number;
        dy: number;
        magnetism: number;
      };
    
      const resizeCanvas = () => {
        if (canvasContainerRef.current && canvasRef.current && context.current) {
          circles.current.length = 0;
          canvasSize.current.w = canvasContainerRef.current.offsetWidth;
          canvasSize.current.h = canvasContainerRef.current.offsetHeight;
          canvasRef.current.width = canvasSize.current.w * dpr;
          canvasRef.current.height = canvasSize.current.h * dpr;
          canvasRef.current.style.width = \`\${canvasSize.current.w}px\`;
          canvasRef.current.style.height = \`\${canvasSize.current.h}px\`;
          context.current.scale(dpr, dpr);
        }
      };
    
      const circleParams = (): Circle => {
        const x = Math.floor(Math.random() * canvasSize.current.w);
        const y = Math.floor(Math.random() * canvasSize.current.h);
        const translateX = 0;
        const translateY = 0;
        const size = Math.floor(Math.random() * 2) + 1;
        const alpha = 0;
        const targetAlpha = parseFloat((Math.random() * 0.3 + 0.1).toFixed(1));
        const dx = (Math.random() - 0.5) * 0.2;
        const dy = (Math.random() - 0.5) * 0.2;
        const magnetism = 0.1 + Math.random() * 4;
        return {
          x,
          y,
          translateX,
          translateY,
          size,
          alpha,
          targetAlpha,
          dx,
          dy,
          magnetism,
        };
      };
    
      const rgb = hexToRgb(color);
    
      const drawCircle = (circle: Circle, update = false) => {
        if (context.current) {
          const { x, y, translateX, translateY, size, alpha } = circle;
          context.current.translate(translateX, translateY);
          context.current.beginPath();
          context.current.arc(x, y, size, 0, 2 * Math.PI);
          context.current.fillStyle = \`rgba(\${rgb.join(", ")}, \${alpha})\`;
          context.current.fill();
          context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    
          if (!update) {
            circles.current.push(circle);
          }
        }
      };
    
      const clearContext = () => {
        if (context.current) {
          context.current.clearRect(
            0,
            0,
            canvasSize.current.w,
            canvasSize.current.h,
          );
        }
      };
    
      const drawParticles = () => {
        clearContext();
        const particleCount = quantity;
        for (let i = 0; i < particleCount; i++) {
          const circle = circleParams();
          drawCircle(circle);
        }
      };
    
      const remapValue = (
        value: number,
        start1: number,
        end1: number,
        start2: number,
        end2: number,
      ): number => {
        const remapped =
          ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
        return remapped > 0 ? remapped : 0;
      };
    
      const animate = () => {
        clearContext();
        circles.current.forEach((circle: Circle, i: number) => {
          // Handle the alpha value
          const edge = [
            circle.x + circle.translateX - circle.size, // distance from left edge
            canvasSize.current.w - circle.x - circle.translateX - circle.size, // distance from right edge
            circle.y + circle.translateY - circle.size, // distance from top edge
            canvasSize.current.h - circle.y - circle.translateY - circle.size, // distance from bottom edge
          ];
          const closestEdge = edge.reduce((a, b) => Math.min(a, b));
          const remapClosestEdge = parseFloat(
            remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
          );
          if (remapClosestEdge > 1) {
            circle.alpha += 0.02;
            if (circle.alpha > circle.targetAlpha) {
              circle.alpha = circle.targetAlpha;
            }
          } else {
            circle.alpha = circle.targetAlpha * remapClosestEdge;
          }
          circle.x += circle.dx + vx;
          circle.y += circle.dy + vy;
          circle.translateX +=
            (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
            ease;
          circle.translateY +=
            (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
            ease;
          // circle gets out of the canvas
          if (
            circle.x < -circle.size ||
            circle.x > canvasSize.current.w + circle.size ||
            circle.y < -circle.size ||
            circle.y > canvasSize.current.h + circle.size
          ) {
            // remove the circle from the array
            circles.current.splice(i, 1);
            // create a new circle
            const newCircle = circleParams();
            drawCircle(newCircle);
            // update the circle position
          } else {
            drawCircle(
              {
                ...circle,
                x: circle.x,
                y: circle.y,
                translateX: circle.translateX,
                translateY: circle.translateY,
                alpha: circle.alpha,
              },
              true,
            );
          }
        });
        window.requestAnimationFrame(animate);
      };
    
      return (
        <div className={className} ref={canvasContainerRef} aria-hidden="true">
          <canvas ref={canvasRef} />
        </div>
      );
    };
    
    `;
  const button = `import * as React from "react"
    import { Slot } from "@radix-ui/react-slot"
    import { cva, type VariantProps } from "class-variance-authority"
    
    import { cn } from "@/lib/utils"
    
    const buttonVariants = cva(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive:
              "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline:
              "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
          },
          size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
          },
        },
        defaultVariants: {
          variant: "default",
          size: "default",
        },
      },
    )
    
    export interface ButtonProps
      extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
      asChild?: boolean
    }
    
    const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
      ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          />
        )
      },
    )
    Button.displayName = "Button"
    
    export { Button, buttonVariants }
    `
  // Fungsi untuk menyalin kode ke clipboard
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        alert('Code copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
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
        <main className={`pt-20 flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <h1 className="text-3xl font-bold">Highlighter</h1>
          <p className="text-muted-foreground mt-2">Sebuah card dengan efek hover highlighter yang akan membuat mu terpukau</p>

          <div className="w-[90vw] border-dashed border-2 mt-4">
            <Connect />
          </div>

          <div className="mt-6 w-2/3"> {/* Menyesuaikan lebar secara dinamis */}
            <h2 className="text-2xl font-semibold">Installation</h2>
            <div className="mt-4 w-2/3">
              {/* install dependencies code  */}
              <p className="font-bold">Install dependencies</p>
              <div className="relative mb-8">
                <SyntaxHighlighter
                  language="bash"
                  style={nightOwl}
                  customStyle={{
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#1e1e1e',
                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                  }}>
                  {dependencies}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(dependencies)}
                  className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                />
              </div>

              {/* utils code  */}
              <h1 className="font-bold text-2xl">Add util file</h1>
              <p className="">src/lib/utils.ts</p>
              <div className="relative mb-8">
                <SyntaxHighlighter
                  language="ts"
                  style={nightOwl}
                  customStyle={{
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#1e1e1e',
                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                  }}>
                  {utils}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(utils)}
                  className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                />
              </div>

              {/* demo.tsx code  */}
              <p className="font-bold">demo.tsx</p>
              <div className="relative mb-8">
                <SyntaxHighlighter
                  language="tsx"
                  style={nightOwl}
                  customStyle={{
                    height: "25rem",
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#1e1e1e',
                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                  }}>
                  {demotsx}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(demotsx)}
                  className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                />
              </div>

              {/* highlighter.tsx code  */}
              <p className="font-bold">highlighter.tsx</p>
              <div className="relative">
                <SyntaxHighlighter
                  language="tsx"
                  style={nightOwl}
                  customStyle={{
                    maxWidth: "90vw",
                    height: "25rem",
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#1e1e1e',
                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                  }}>
                  {highlighter}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(highlighter)}
                  className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                />
              </div>

              {/* button.tsx code  */}
              <p className="font-bold">button.tsx</p>
              <div className="relative">
                <SyntaxHighlighter
                  language="tsx"
                  style={nightOwl}
                  customStyle={{
                    maxWidth: "90vw",
                    height: "25rem",
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#1e1e1e',
                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                  }}>
                  {button}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(button)}
                  className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                />
              </div>



            </div>

          </div>
          <FooterDemo />
        </main>
      </div>
    </div>
  );
}
