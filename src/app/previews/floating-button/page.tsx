"use client"
import { GooeyTextDemo } from "@/app/components/UI/goeeyText/demo";
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FloatingButton } from "@/app/components/UI/floating-button/demo";
import { FooterDemo } from "@/app/components/bims/footer";

export default function Gooey() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
  import { AnimatedSocialIcons } from "@/components/ui/floating-action-button"
  
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
          <h1 className="text-3xl font-bold">Floating Button</h1>
          <p className="text-muted-foreground mt-2">Sebuah Floating Button yang modern, sangat cocok untuk website kamu yang ingin terlihat modern dan beda dari yang lain</p>

          <div className="w-[90vw] border-dashed border-2 mt-4">
            <FloatingButton />
          </div>

          <div className="mt-6 w-2/3"> {/* Menyesuaikan lebar secara dinamis */}
            <h2 className="text-2xl font-semibold">Installation</h2>
            <div className="mt-4 ">
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

              {/* floating-button.tsx code  */}
              <p className="font-bold">floating-button.tsx</p>
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
                  {floatingButton}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(floatingButton)}
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
