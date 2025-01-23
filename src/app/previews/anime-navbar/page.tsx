"use client"
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { AnimeNavBarDemo } from "@/app/components/UI/anime-navbar/demo";

export default function animeNavbat() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen] = useState(true);

  const dependencies = `npm i clsx tailwind-merge framer-motion lucide-react`;

  const utils = `import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }
    `;

  const demotsx = `
    "use client"

import * as React from "react" // Import React
import { Home, FileText, CreditCard, Info } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

const items = [
  {
    name: "Home",
    url: "#",
    href: "#",
    icon: Home,
  },
  {
    name: "Convert",
    url: "#",
    href: "#",
    icon: FileText,
  },
  {
    name: "Pricing",
    url: "#",
    href: "#",
    icon: CreditCard,
  },
  {
    name: "About",
    url: "#",
    href: "#",
    icon: Info,
  },
]

export function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} defaultActive="Home" />
}
`;

  const AnimeNavbar = `"use client"

    import React, { useEffect, useState } from "react"
    import { motion, AnimatePresence } from "framer-motion"
    import Link from "next/link"
    import { usePathname } from "next/navigation"
    import { LucideIcon } from "lucide-react"
    import { cn } from "@/lib/utils"
    
    interface NavItem {
      name: string
      url: string
      icon: LucideIcon
    }
    
    interface NavBarProps {
      items: NavItem[]
      className?: string
      defaultActive?: string
    }
    
    export function AnimeNavBar({ items, className, defaultActive = "Home" }: NavBarProps) {
      const pathname = usePathname()
      const [mounted, setMounted] = useState(false)
      const [hoveredTab, setHoveredTab] = useState<string | null>(null)
      const [activeTab, setActiveTab] = useState<string>(defaultActive)
      const [isMobile, setIsMobile] = useState(false)
    
      useEffect(() => {
        setMounted(true)
      }, [])
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768)
        }
    
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }, [])
    
      if (!mounted) return null
    
      return (
        <div className="fixed top-5 left-0 right-0 z-[9999]">
          <div className="flex justify-center pt-6">
            <motion.div 
              className="flex items-center gap-3 bg-black/50 border border-white/10 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg relative"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              {items.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.name
                const isHovered = hoveredTab === item.name
    
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveTab(item.name)
                    }}
                    onMouseEnter={() => setHoveredTab(item.name)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                      "text-white/70 hover:text-white",
                      isActive && "text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0.3, 0.5, 0.3],
                          scale: [1, 1.03, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="absolute inset-0 bg-primary/25 rounded-full blur-md" />
                        <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-xl" />
                        <div className="absolute inset-[-8px] bg-primary/15 rounded-full blur-2xl" />
                        <div className="absolute inset-[-12px] bg-primary/5 rounded-full blur-3xl" />
                        
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                          style={{
                            animation: "shine 3s ease-in-out infinite"
                          }}
                        />
                      </motion.div>
                    )}
    
                    <motion.span
                      className="hidden md:inline relative z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                    <motion.span 
                      className="md:hidden relative z-10"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={18} strokeWidth={2.5} />
                    </motion.span>
              
                    <AnimatePresence>
                      {isHovered && !isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute inset-0 bg-white/10 rounded-full -z-10"
                        />
                      )}
                    </AnimatePresence>
    
                    {isActive && (
                      <motion.div
                        layoutId="anime-mascot"
                        className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="relative w-12 h-12">
                          <motion.div 
                            className="absolute w-10 h-10 bg-white rounded-full left-1/2 -translate-x-1/2"
                            animate={
                              hoveredTab ? {
                                scale: [1, 1.1, 1],
                                rotate: [0, -5, 5, 0],
                                transition: {
                                  duration: 0.5,
                                  ease: "easeInOut"
                                }
                              } : {
                                y: [0, -3, 0],
                                transition: {
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }
                              }
                            }
                          >
                            <motion.div 
                              className="absolute w-2 h-2 bg-black rounded-full"
                              animate={
                                hoveredTab ? {
                                  scaleY: [1, 0.2, 1],
                                  transition: {
                                    duration: 0.2,
                                    times: [0, 0.5, 1]
                                  }
                                } : {}
                              }
                              style={{ left: '25%', top: '40%' }}
                            />
                            <motion.div 
                              className="absolute w-2 h-2 bg-black rounded-full"
                              animate={
                                hoveredTab ? {
                                  scaleY: [1, 0.2, 1],
                                  transition: {
                                    duration: 0.2,
                                    times: [0, 0.5, 1]
                                  }
                                } : {}
                              }
                              style={{ right: '25%', top: '40%' }}
                            />
                            <motion.div 
                              className="absolute w-2 h-1.5 bg-pink-300 rounded-full"
                              animate={{
                                opacity: hoveredTab ? 0.8 : 0.6
                              }}
                              style={{ left: '15%', top: '55%' }}
                            />
                            <motion.div 
                              className="absolute w-2 h-1.5 bg-pink-300 rounded-full"
                              animate={{
                                opacity: hoveredTab ? 0.8 : 0.6
                              }}
                              style={{ right: '15%', top: '55%' }}
                            />
                            
                            <motion.div 
                              className="absolute w-4 h-2 border-b-2 border-black rounded-full"
                              animate={
                                hoveredTab ? {
                                  scaleY: 1.5,
                                  y: -1
                                } : {
                                  scaleY: 1,
                                  y: 0
                                }
                              }
                              style={{ left: '30%', top: '60%' }}
                            />
                            <AnimatePresence>
                              {hoveredTab && (
                                <>
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    className="absolute -top-1 -right-1 w-2 h-2 text-yellow-300"
                                  >
                                    ✨
                                  </motion.div>
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="absolute -top-2 left-0 w-2 h-2 text-yellow-300"
                                  >
                                    ✨
                                  </motion.div>
                                </>
                              )}
                            </AnimatePresence>
                          </motion.div>
                          <motion.div
                            className="absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2"
                            animate={
                              hoveredTab ? {
                                y: [0, -4, 0],
                                transition: {
                                  duration: 0.3,
                                  repeat: Infinity,
                                  repeatType: "reverse"
                                }
                              } : {
                                y: [0, 2, 0],
                                transition: {
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.5
                                }
                              }
                            }
                          >
                            <div className="w-full h-full bg-white rotate-45 transform origin-center" />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </Link>
                )
              })}
            </motion.div>
          </div>
        </div>
      )
    } 
    `;
  const TailwindConfig = `
    /** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            keyframes: {
                "pulse-slow": {
                    '0%, 100%': {
                        transform: 'translateX(-100%)',
                    },
                    '50%': {
                        transform: 'translateX(100%)',
                    },
                },
            },
            animation: {
                "pulse-slow": "pulse-slow 3s ease-in-out infinite",
            },
        },
    },
}
    `;
  const globalCss = `
    @keyframes shine {
        0% {
          transform: translateX(-100%);
        }
        50% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
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
      {/* <BimsNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} /> */}
      <div className="flex">
        <BimsSidebar
          isOpen={sidebarOpen}
          framework={framework}
          onFrameworkChange={setFramework}
        />
        <main className={`pt-40 flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <h1 className="text-3xl font-bold">Anime Navbar</h1>
          <p className="text-muted-foreground mt-2">Navbar keren dan interaktif dengan icon yang dinamis</p>

          <div className="w-[70vw] border-dashed border-2 p-32 mt-4">
            <AnimeNavBarDemo />
            <h1 className="text-center text-4xl">lihat di bagian atas halaman</h1>
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

              {/* anime-navbar.tsx code  */}
              <p className="font-bold">anime-navbar.tsx</p>
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
                  {AnimeNavbar}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(AnimeNavbar)}
                  className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                />
              </div>
              {/* tailwind.config.js code  */}
              <p className="font-bold">tailwind.config.js</p>
              <div className="relative">
                <SyntaxHighlighter
                  language="js"
                  style={nightOwl}
                  customStyle={{
                    height: "25rem",
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#1e1e1e',
                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                  }}>
                  {TailwindConfig}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(TailwindConfig)}
                  className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                />
              </div>
              {/* global.css code  */}
              <p className="font-bold">global.css</p>
              <div className="relative">
                <SyntaxHighlighter
                  language="css"
                  style={nightOwl}
                  customStyle={{
                    height: "25rem",
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#1e1e1e',
                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                  }}>
                  {globalCss}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(globalCss)}
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
