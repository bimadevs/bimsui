"use client"
import { SplineSceneBasic } from "@/app/components/UI/interaktif3D/demo";
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons

export default function Splite() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dependencies = `npm i framer-motion clsx tailwind-merge @splinetool/runtime @splinetool/react-spline`

  const utils = `import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }
    `

  const demotsx = `
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Look! Cools right?
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Bring your UI to life with BimsUI
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
    `;

  const splitetsx = `'use client'

    import { Suspense, lazy } from 'react'
    const Spline = lazy(() => import('@splinetool/react-spline'))
    
    interface SplineSceneProps {
      scene: string
      className?: string
    }
    
    export function SplineScene({ scene, className }: SplineSceneProps) {
      return (
        <Suspense 
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Spline
            scene={scene}
            className={className}
          />
        </Suspense>
      )
    }`;

  const spotlighttsx = `'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

export function Spotlight({
  className,
  size = 200,
  springOptions = { bounce: 0 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => \`\${x - size / 2}px\`);
  const spotlightTop = useTransform(mouseY, (y) => \`\${y - size / 2}px\`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', handleMouseEnter);
    parentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', handleMouseEnter);
      parentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [parentElement, handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',
        'from-zinc-50 via-zinc-100 to-zinc-200',
        isHovered ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  );
}
`;

  const cardtsx = `
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
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
        <div className="z-[999999]">
          <BimsSidebar
            isOpen={sidebarOpen}
            framework={framework}
            onFrameworkChange={setFramework}
          />
        </div>
        <main className={`pt-20 flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <h1 className="text-3xl font-bold">Spline 3d</h1>
          <p className="text-muted-foreground mt-2">Hero Section ini sangat cocok untuk kamu yang suka dengan 3D.</p>

          <div className="w-[90vw] border-dashed border-2 p-2 mt-4">
            <SplineSceneBasic />
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

              {/* splite.tsx code  */}
              <p className="font-bold">splite.tsx</p>
              <div className="relative">
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
                  {splitetsx}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(splitetsx)}
                  className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                />
              </div>
              {/* spotlight.tsx code  */}
              <p className="font-bold">spotlight.tsx</p>
              <div className="relative">
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
                  {spotlighttsx}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(spotlighttsx)}
                  className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                />
              </div>

              {/* card.tsx code  */}
              <p className="font-bold">card.tsx</p>
              <div className="relative">
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
                  {cardtsx}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(cardtsx)}
                  className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                />
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
