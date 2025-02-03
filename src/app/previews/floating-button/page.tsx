"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck, FaClipboard, FaRegClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FloatingButton } from "@/app/components/nextjs/floating-button/demo";
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

  const dependencies = `npm i clsx tailwind-merge framer-motion lucide-react`

  const utils = `import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }
    `

  const demotsx = `
  'use client'

  import { Github, Twitter, Linkedin, Instagram, Youtube, Facebook } from "lucide-react"
  import { AnimatedSocialIcons } from "@/components/ui/floating-button"
  
  export function Demo() {
    const socialIcons = [
      { 
        Icon: Github,
        href: "https://github.com",
        className: "hover:bg-accent"
      },
      { 
        Icon: Twitter,
        href: "https://twitter.com" 
      },
      { 
        Icon: Linkedin,
        href: "https://linkedin.com" 
      },
      { 
        Icon: Instagram,
        href: "https://instagram.com" 
      }
    ]
  
    return (
      <main className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 py-10 bg-background">
        <AnimatedSocialIcons 
          icons={socialIcons}
          iconSize={20}
        />
      </main>
    )
  }`;

  const floatingButton = `'use client'

  import { motion } from "framer-motion"
  import { Plus, LucideIcon } from "lucide-react"
  import { useState } from "react"
  import { cn } from "@/lib/utils"
  
  interface SocialIcon {
    Icon: LucideIcon
    href?: string
    className?: string
  }
  
  interface AnimatedSocialIconsProps {
    icons: SocialIcon[]
    className?: string
    iconSize?: number
  }
  
  export function AnimatedSocialIcons({ 
    icons, 
    className,
    iconSize = 20
  }: AnimatedSocialIconsProps) {
    const [active, setActive] = useState(false)
  
    const buttonSize = "size-10 sm:size-16" 
  
    return (
      <div className={cn("w-full relative flex items-start justify-start sm:justify-center", className)}>
        <div className="flex items-center justify-center relative gap-4">
          <motion.div
            className="absolute left-0 bg-background w-full rounded-full z-10"
            animate={{
              x: active ? "calc(100% + 16px)" : 0,
            }}
            transition={{ type: "ease-in", duration: 0.5 }}
          >
            <motion.button
              className={cn(
                buttonSize,
                "rounded-full flex items-center justify-center",
                "bg-primary hover:bg-primary/90 transition-colors"
              )}
              onClick={() => setActive(!active)}
              animate={{ rotate: active ? 45 : 0 }}
              transition={{
                type: "ease-in",
                duration: 0.5,
              }}
            >
              <Plus 
                size={iconSize} 
                strokeWidth={3} 
                className="text-primary-foreground" 
              />
            </motion.button>
          </motion.div>
          
          {icons.map(({ Icon, href, className }, index) => (
            <motion.div
              key={index}
              className={cn(
                buttonSize,
                "rounded-full flex items-center justify-center",
                "bg-background shadow-lg hover:shadow-xl",
                "border border-border",
                className
              )}
              animate={{
                filter: active ? "blur(0px)" : "blur(2px)",
                scale: active ? 1 : 0.9,
                rotate: active ? 0 : 45,
              }}
              transition={{
                type: "ease-in",
                duration: 0.4,
              }}
            >
              {href ? (
                <a 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Icon 
                    size={iconSize}
                    className="text-muted-foreground transition-all hover:text-foreground hover:scale-110" 
                  />
                </a>
              ) : (
                <Icon 
                  size={iconSize}
                  className="text-muted-foreground transition-all hover:text-foreground hover:scale-110" 
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    )
  }
    `;
  // Fungsi untuk menyalin kode ke clipboard
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
              <h1 className="text-3xl font-bold">Floating Button</h1>
              <p className="text-muted-foreground mt-2">A modern floating button that is perfect for your website that wants to look modern and different from the rest.</p>

              <div className="max-w-4xl border-dashed border-2 p-2 mt-4 mx-auto">
                <FloatingButton />
              </div>

              <div className="mt-6"> {/* Menyesuaikan lebar secara dinamis */}
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

                  

                  {/* floating-button.tsx code  */}
                  <p className="font-bold">components/ui/floating-button.tsx</p>
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
                      {floatingButton}
                    </SyntaxHighlighter>
                    <CopyIcon id="floatingButton" code={floatingButton} />
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
