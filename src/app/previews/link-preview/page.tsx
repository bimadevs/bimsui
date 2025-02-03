"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck, FaClipboard, FaRegClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FooterDemo } from "@/app/components/bims/footer";
import { LinkPreviewDemo } from "@/app/components/nextjs/link-preview/demo";

export default function TextReveals() {
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

    const dependencies = `npm i motion clsx tailwind-merge @radix-ui/react-hover-card qss`

    const utils = `import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }`

    const demotsx = `"use client";
  import React from "react";
  import { motion } from "framer-motion";
  import { LinkPreview } from "./link-preview";
  
  export function LinkPreviewDemo() {
    return (
      <div className="flex justify-center items-center h-[40rem] flex-col px-4">
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          <LinkPreview url="https://tailwindcss.com" className="font-bold">
            Tailwind CSS
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview url="https://framer.com/motion" className="font-bold">
            Framer Motion
          </LinkPreview>{" "}
          are a great way to build modern websites.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
          Visit{" "}
          <LinkPreview
            url="https://ui.bimadev.xyz"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            BimsUI
          </LinkPreview>{" "}
          for amazing Tailwind and Framer Motion components.
        </p>
      </div>
    );
  }`;

    const LinkPreview = `"use client";
  import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
  import Image from "next/image";
  import { encode } from "qss";
  import React from "react";
  import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
  } from "framer-motion";
  import Link from "next/link";
  import { cn } from "@/lib/utils";
  
  type LinkPreviewProps = {
    children: React.ReactNode;
    url: string;
    className?: string;
    width?: number;
    height?: number;
    quality?: number;
    layout?: string;
  } & (
    | { isStatic: true; imageSrc: string }
    | { isStatic?: false; imageSrc?: never }
  );
  
  export const LinkPreview = ({
    children,
    url,
    className,
    width = 200,
    height = 125,
    quality = 50,
    layout = "fixed",
    isStatic = false,
    imageSrc = "",
  }: LinkPreviewProps) => {
    let src;
    if (!isStatic) {
      const params = encode({
        url,
        screenshot: true,
        meta: false,
        embed: "screenshot.url",
        colorScheme: "dark",
        "viewport.isMobile": true,
        "viewport.deviceScaleFactor": 1,
        "viewport.width": width * 3,
        "viewport.height": height * 3,
      });
      src = \`https://api.microlink.io/?\${params}\`;
    } else {
      src = imageSrc;
    }
  
    const [isOpen, setOpen] = React.useState(false);
  
    const [isMounted, setIsMounted] = React.useState(false);
  
    React.useEffect(() => {
      setIsMounted(true);
    }, []);
  
    const springConfig = { stiffness: 100, damping: 15 };
    const x = useMotionValue(0);
  
    const translateX = useSpring(x, springConfig);
  
    const handleMouseMove = (event: any) => {
      const targetRect = event.target.getBoundingClientRect();
      const eventOffsetX = event.clientX - targetRect.left;
      const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
      x.set(offsetFromCenter);
    };
  
    return (
      <>
        {isMounted ? (
          <div className="hidden">
            <Image
              src={src}
              width={width}
              height={height}
              quality={quality}
              layout={layout}
              priority={true}
              alt="hidden image"
            />
          </div>
        ) : null}
  
        <HoverCardPrimitive.Root
          openDelay={50}
          closeDelay={100}
          onOpenChange={(open) => {
            setOpen(open);
          }}
        >
          <HoverCardPrimitive.Trigger
            onMouseMove={handleMouseMove}
            className={cn("text-black dark:text-white", className)}
            href={url}
          >
            {children}
          </HoverCardPrimitive.Trigger>
  
          <HoverCardPrimitive.Content
            className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
            side="top"
            align="center"
            sideOffset={10}
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  className="shadow-xl rounded-xl"
                  style={{
                    x: translateX,
                  }}
                >
                  <Link
                    href={url}
                    className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                    style={{ fontSize: 0 }}
                  >
                    <Image
                      src={isStatic ? imageSrc : src}
                      width={width}
                      height={height}
                      quality={quality}
                      layout={layout}
                      priority={true}
                      className="rounded-lg"
                      alt="preview image"
                    />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </HoverCardPrimitive.Content>
        </HoverCardPrimitive.Root>
      </>
    );
  };`;
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
                            <h1 className="text-3xl font-bold">Link Preview</h1>
                            <p className="text-muted-foreground mt-2">Dynamic link previews for your anchor tags.</p>

                            <div className="max-w-4xl border-dashed border-2 p-2 mt-4 mx-auto">
                                <LinkPreviewDemo />
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

                                    {/* link-preview.tsx code  */}
                                    <p className="font-bold">components/ui/link-preview.tsx</p>
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
                                            {LinkPreview}
                                        </SyntaxHighlighter>
                                        <CopyIcon id="LinkPreview" code={LinkPreview} />

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
