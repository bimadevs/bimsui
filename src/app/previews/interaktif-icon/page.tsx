"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { InteraktifIcon } from "@/app/components/UI/interaktif-icon/demo";

export default function Gooey() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dependencies = `npm i react-icon-cloud`

  const demotsx = `
  import { IconCloud } from "@/components/ui/interactive-icon-cloud"

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

  const interaktifIcon  = `"use client"

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
          <h1 className="text-3xl font-bold">Interaktif Icon</h1>
          <p className="text-muted-foreground mt-2">Interaktif Icon ini sangat cocok untuk kamu yang pengen pamer langguage program dengan gaya!</p>

          <div className="w-[90vw] border-dashed border-2 flex items-center justify-center mt-4">
            <InteraktifIcon />
          </div>

          <div className="mt-6 w-2/3"> {/* Menyesuaikan lebar secara dinamis */}
            <h2 className="text-2xl font-semibold">Installation</h2>
            <div className="mt-4 w-full">
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

              {/* interaktif-icon.tsx code  */}
              <p className="font-bold">interaktif-icon.tsx</p>
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
                  {interaktifIcon}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(interaktifIcon)}
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
