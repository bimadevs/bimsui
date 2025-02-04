"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaRegCopy, FaCheck } from 'react-icons/fa';
import { FooterDemo } from "@/app/components/bims/footer";
import { ThreeDCardDemo } from "@/app/components/nextjs/3d-card-effect/demo";
import { WithRotationDemo } from "@/app/components/nextjs/3d-card-effect/with-rotation";
import Loading from "@/app/loading";

export default function ThreeDCardPreview() {
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

  import Image from "next/image";
  import React from "react";
  import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
  import Link from "next/link";
  
  export function ThreeDCardDemo() {
    return (
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Make things float in air
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://instagram.com/biimaa_jo"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    );
  }`;

  const threed = `"use client";

  import { cn } from "@/lib/utils";
  import Image from "next/image";
  import React, {
    createContext,
    useState,
    useContext,
    useRef,
    useEffect,
  } from "react";
  
  const MouseEnterContext = createContext<
    [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
  >(undefined);
  
  export const CardContainer = ({
    children,
    className,
    containerClassName,
  }: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
      containerRef.current.style.transform = \`rotateY(\${x}deg) rotateX(\${y}deg)\`;
    };
  
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      setIsMouseEntered(true);
      if (!containerRef.current) return;
    };
  
    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      setIsMouseEntered(false);
      containerRef.current.style.transform = \`rotateY(0deg) rotateX(0deg)\`;
    };
    return (
      <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
        <div
          className={cn(
            "py-20 flex items-center justify-center",
            containerClassName
          )}
          style={{
            perspective: "1000px",
          }}
        >
          <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "flex items-center justify-center relative transition-all duration-200 ease-linear",
              className
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {children}
          </div>
        </div>
      </MouseEnterContext.Provider>
    );
  };
  
  export const CardBody = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div
        className={cn(
          "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
          className
        )}
      >
        {children}
      </div>
    );
  };
  
  export const CardItem = ({
    as: Tag = "div",
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
  }: {
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    translateX?: number | string;
    translateY?: number | string;
    translateZ?: number | string;
    rotateX?: number | string;
    rotateY?: number | string;
    rotateZ?: number | string;
    [key: string]: any;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isMouseEntered] = useMouseEnter();
  
    useEffect(() => {
      handleAnimations();
    }, [isMouseEntered]);
  
    const handleAnimations = () => {
      if (!ref.current) return;
      if (isMouseEntered) {
        ref.current.style.transform = \`translateX(\${translateX}px) translateY(\${translateY}px) translateZ(\${translateZ}px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) rotateZ(\${rotateZ}deg)\`;
      } else {
        ref.current.style.transform = \`translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)\`;
      }
    };
  
    return (
      <Tag
        ref={ref}
        className={cn("w-fit transition duration-200 ease-linear", className)}
        {...rest}
      >
        {children}
      </Tag>
    );
  };
  
  // Create a hook to use the context
  export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
      throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
  };`;
  const withrotation = `"use client";

  import Image from "next/image";
  import React from "react";
  import { CardBody, CardContainer, CardItem } from "./3d-card";
  
  export function WithRotationDemo() {
    return (
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Make things float in air
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              translateX={-40}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              translateX={40}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    );
  }`;
  const nextConfig = `const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };`
  const judul = "3D Card Effect"
  const deskripsi = "A card perspective effect, hover over the card to elevate card elements."
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
          <div className={` transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className="p-6">
              <h1 className="text-3xl font-bold">{judul}</h1>
              <p className="text-muted-foreground mt-2">{deskripsi}</p>

              <div className="max-w-4xl border-dashed border-2 p-2 mt-4 mx-auto">
                <ThreeDCardDemo />
              </div>

              <h1 className="text-3xl font-bold mt-4">Or With Rotation</h1>

              <div className="max-w-4xl border-dashed border-2 p-2 mt-4 mx-auto">
                <WithRotationDemo />
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-semibold">Installation</h2>
                <div className="mt-4">
                  {/* Dependencies */}
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

                  {/* Utils */}
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
                  
                   {/* Next Config */}
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

                  {/* 3d-card */}
                  <p className="font-bold">components/ui/3d-card.tsx</p>
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
                      {threed}
                    </SyntaxHighlighter>
                    <CopyIcon id="threed" code={threed} />
                  </div>

                    {/* page.tsx */}
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
                    {/* page.tsx (With Rotation) */}
                    <p className="font-bold">page.tsx (With Rotation)</p>
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
                        {withrotation}
                      </SyntaxHighlighter>
                      <CopyIcon id="withrotation" code={withrotation} />
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