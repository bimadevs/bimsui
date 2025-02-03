"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck, FaClipboard, FaRegClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FooterDemo } from "@/app/components/bims/footer";
import { LinkPreviewDemo } from "@/app/components/nextjs/link-preview/demo";
import { CarouselDemo } from "@/app/components/nextjs/carousel/demo";

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

    const dependencies = `npm i motion clsx tailwind-merge`

    const utils = `import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }`

    const demotsx = `"use client";
    import {Carousel} from "./carousel";
    export function CarouselDemo() {
      const slideData = [
        {
          title: "Mystic Mountains",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Urban Dreams",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Neon Nights",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Desert Whispers",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
      return (
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={slideData} />
        </div>
      );
    }`;

    const Carousel = `"use client";
    import { IconArrowNarrowRight } from "@tabler/icons-react";
    import { useState, useRef, useId, useEffect } from "react";
    
    interface SlideData {
      title: string;
      button: string;
      src: string;
    }
    
    interface SlideProps {
      slide: SlideData;
      index: number;
      current: number;
      handleSlideClick: (index: number) => void;
    }
    
    const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
      const slideRef = useRef<HTMLLIElement>(null);
    
      const xRef = useRef(0);
      const yRef = useRef(0);
      const frameRef = useRef<number>();
    
      useEffect(() => {
        const animate = () => {
          if (!slideRef.current) return;
    
          const x = xRef.current;
          const y = yRef.current;
    
          slideRef.current.style.setProperty("--x", \`\${x}px\`);
          slideRef.current.style.setProperty("--y", \`\${y}px\`);
    
          frameRef.current = requestAnimationFrame(animate);
        };
    
        frameRef.current = requestAnimationFrame(animate);
    
        return () => {
          if (frameRef.current) {
            cancelAnimationFrame(frameRef.current);
          }
        };
      }, []);
    
      const handleMouseMove = (event: React.MouseEvent) => {
        const el = slideRef.current;
        if (!el) return;
    
        const r = el.getBoundingClientRect();
        xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
        yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
      };
    
      const handleMouseLeave = () => {
        xRef.current = 0;
        yRef.current = 0;
      };
    
      const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.style.opacity = "1";
      };
    
      const { src, button, title } = slide;
    
      return (
        <div className="[perspective:1200px] [transform-style:preserve-3d]">
          <li
            ref={slideRef}
            className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 "
            onClick={() => handleSlideClick(index)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform:
                current !== index
                  ? "scale(0.98) rotateX(8deg)"
                  : "scale(1) rotateX(0deg)",
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              transformOrigin: "bottom",
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
              style={{
                transform:
                  current === index
                    ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                    : "none",
              }}
            >
              <img
                className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
                style={{
                  opacity: current === index ? 1 : 0.5,
                }}
                alt={title}
                src={src}
                onLoad={imageLoaded}
                loading="eager"
                decoding="sync"
              />
              {current === index && (
                <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
              )}
            </div>
    
            <article
              className={\`relative p-[4vmin] transition-opacity duration-1000 ease-in-out \${
                current === index ? "opacity-100 visible" : "opacity-0 invisible"
              }\`}
            >
              <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold  relative">
                {title}
              </h2>
              <div className="flex justify-center">
                <button className="mt-6  px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                  {button}
                </button>
              </div>
            </article>
          </li>
        </div>
      );
    };
    
    interface CarouselControlProps {
      type: string;
      title: string;
      handleClick: () => void;
    }
    
    const CarouselControl = ({
      type,
      title,
      handleClick,
    }: CarouselControlProps) => {
      return (
        <button
          className={\`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 \${
            type === "previous" ? "rotate-180" : ""
          }\`}
          title={title}
          onClick={handleClick}
        >
          <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
        </button>
      );
    };
    
    interface CarouselProps {
      slides: SlideData[];
    }
    
    export function Carousel({ slides }: CarouselProps) {
      const [current, setCurrent] = useState(0);
    
      const handlePreviousClick = () => {
        const previous = current - 1;
        setCurrent(previous < 0 ? slides.length - 1 : previous);
      };
    
      const handleNextClick = () => {
        const next = current + 1;
        setCurrent(next === slides.length ? 0 : next);
      };
    
      const handleSlideClick = (index: number) => {
        if (current !== index) {
          setCurrent(index);
        }
      };
    
      const id = useId();
    
      return (
        <div
          className="relative w-[70vmin] h-[70vmin] mx-auto"
          aria-labelledby={\`carousel-heading-\${id}\`}
        >
          <ul
            className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
            style={{
              transform: \`translateX(-\${current * (100 / slides.length)}%)\`,
            }}
          >
            {slides.map((slide, index) => (
              <Slide
                key={index}
                slide={slide}
                index={index}
                current={current}
                handleSlideClick={handleSlideClick}
              />
            ))}
          </ul>
    
          <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
            <CarouselControl
              type="previous"
              title="Go to previous slide"
              handleClick={handlePreviousClick}
            />
    
            <CarouselControl
              type="next"
              title="Go to next slide"
              handleClick={handleNextClick}
            />
          </div>
        </div>
      );
    }`;
    const nextConfig = `import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    /* config options here */
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  
  export default nextConfig;`
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
                            <h1 className="text-3xl font-bold">Carousel</h1>
                            <p className="text-muted-foreground mt-2">A customizable carousel with microinteractions and slider.</p>

                            <div className="max-w-4xl border-dashed border-2 p-2 mt-4 mx-auto">
                                <CarouselDemo />
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
                                    {/* next.config.ts code  */}
                                    <p className="font-bold">next.config.ts</p>
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
                                            {nextConfig}
                                        </SyntaxHighlighter>
                                        <CopyIcon id="nextConfig" code={nextConfig} />

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

                                    {/* carousel.tsx code  */}
                                    <p className="font-bold">components/ui/carousel.tsx</p>
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
                                            {Carousel}
                                        </SyntaxHighlighter>
                                        <CopyIcon id="Carousel" code={Carousel} />

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
