"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaRegClipboard, FaCheck } from 'react-icons/fa';
import { InteraktifIcon } from "@/app/components/UI/interaktif-icon/demo";
import { FooterDemo } from "@/app/components/bims/footer";

export default function Gooey() {
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

  const dependencies = `npm i react-icon-cloud next-themes`

  const demotsx = `
  import { IconCloud } from "@/components/ui/interactive-icon"

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ]
  
  export function IconCloudDemo() {
    return (
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
    )
  }
  `;

  const interaktifIcon = `"use client"

  import { useEffect, useMemo, useState } from "react"
  import { useTheme } from "next-themes"
  import {
    Cloud,
    fetchSimpleIcons,
    ICloud,
    renderSimpleIcon,
    SimpleIcon,
  } from "react-icon-cloud"
  
  export const cloudProps: Omit<ICloud, "children"> = {
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: 40,
      },
    },
    options: {
      reverse: true,
      depth: 1,
      wheelZoom: false,
      imageScale: 2,
      activeCursor: "default",
      tooltip: "native",
      initial: [0.1, -0.1],
      clickToFront: 500,
      tooltipDelay: 0,
      outlineColour: "#0000",
      maxSpeed: 0.04,
      minSpeed: 0.02,
      // dragControl: false,
    },
  }
  
  export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
    const minContrastRatio = theme === "dark" ? 2 : 1.2
  
    return renderSimpleIcon({
      icon,
      bgHex,
      fallbackHex,
      minContrastRatio,
      size: 42,
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: any) => e.preventDefault(),
      },
    })
  }
  
  export type DynamicCloudProps = {
    iconSlugs: string[]
  }
  
  type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>
  
  export function IconCloud({ iconSlugs }: DynamicCloudProps) {
    const [data, setData] = useState<IconData | null>(null)
    const { theme } = useTheme()
  
    useEffect(() => {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
    }, [iconSlugs])
  
    const renderedIcons = useMemo(() => {
      if (!data) return null
  
      return Object.values(data.simpleIcons).map((icon) =>
        renderCustomIcon(icon, theme || "light"),
      )
    }, [data, theme])
  
    return (
      // @ts-ignore
      <Cloud {...cloudProps}>
        <>{renderedIcons}</>
      </Cloud>
    )
  }  
    `;
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
        <FaCheck className="text-green-500 text-lg transition-all duration-300" />
      ) : (
        <h1
        className="text-gray-400 text-lg cursor-pointer hover:text-blue-500 transition-colors" 
        onClick={() => copyToClipboard(code, id)}>
          salin
        </h1>
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
              <h1 className="text-3xl font-bold">Interactive Icon</h1>
              <p className="text-muted-foreground mt-2">If you want to show off your programming language in style, this interactive icon is for you!</p>

              <div className="max-w-4xl border-dashed border-2 p-2  mx-auto flex items-center justify-center mt-4">
                <InteraktifIcon />
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-semibold">Installation</h2>
                <div className="mt-4">
                  {/* Dependencies */}
                  <p className="font-bold">Install dependencies</p>
                  <div className="relative mb-8">
                    <SyntaxHighlighter
                      language="bash"
                      style={nightOwl}
                      customStyle={{
                        padding: '1rem',
                        borderRadius: '8px',
                        backgroundColor: '#1e1e1e',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                      }}>
                      {dependencies}
                    </SyntaxHighlighter>
                    <CopyIcon id="dependencies" code={dependencies} />
                  </div>

                  {/* page.tsx */}
                  <p className="font-bold">page.tsx</p>
                  <div className="relative mb-8">
                    <SyntaxHighlighter
                      language="tsx"
                      style={nightOwl}
                      customStyle={{
                        height: "25rem",
                        padding: '1rem',
                        borderRadius: '8px',
                        backgroundColor: '#1e1e1e',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                      }}>
                      {demotsx}
                    </SyntaxHighlighter>
                    <CopyIcon id="demotsx" code={demotsx} />
                  </div>

                  {/* Interaktif Icon */}
                  <p className="font-bold">components/ui/interactive-icon.tsx</p>
                  <p className="text-red-700">(Jika Terjadi sebuah error cukup biarkan saja)</p>
                  <div className="relative">
                    <SyntaxHighlighter
                      language="tsx"
                      style={nightOwl}
                      customStyle={{
                        height: "25rem",
                        padding: '1rem',
                        borderRadius: '8px',
                        backgroundColor: '#1e1e1e',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                      }}>
                      {interaktifIcon}
                    </SyntaxHighlighter>
                    <CopyIcon id="interaktifIcon" code={interaktifIcon} />
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