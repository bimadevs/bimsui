"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FooterDemo } from "@/app/components/bims/footer";
import { FloatingDockDemo } from "@/app/components/nextjs/floating-dock/demo";

export default function FloatingDoctPreview() {
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

  const dependencies = `npm i motion clsx tailwind-merge @tabler/icons-react`

  const utils = `import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }`

  const demotsx = `import React from "react";
  import { FloatingDock } from "./components/ui/floating-dock";
  import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
  } from "@tabler/icons-react";
  import Image from "next/image";
  
  export function FloatingDockDemo() {
    const links = [
      {
        title: "Home",
        icon: (
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
  
      {
        title: "Products",
        icon: (
          <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "Components",
        icon: (
          <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "BimsUI",
        icon: (
          <Image
            src="https://ui.bimadev.xyz/favicon.ico"
            width={20}
            height={20}
            alt="BimsUI Logo"
          />
        ),
        href: "#",
      },
      {
        title: "Changelog",
        icon: (
          <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
  
      {
        title: "Twitter",
        icon: (
          <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "GitHub",
        icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
    ];
    return (
      <div className="flex items-center justify-center h-[35rem] w-full">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
    );
  }`;

  const Code = `/**
  * Note: Use position fixed according to your needs
  * Desktop navbar is better positioned at the bottom
  * Mobile navbar is better positioned at bottom right.
  **/
  'use client'
 
 import { cn } from "@/lib/utils";
 import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
 import {
   AnimatePresence,
   MotionValue,
   motion,
   useMotionValue,
   useSpring,
   useTransform,
 } from "framer-motion";
 import Link from "next/link";
 import { useRef, useState } from "react";
 
 export const FloatingDock = ({
   items,
   desktopClassName,
   mobileClassName,
 }: {
   items: { title: string; icon: React.ReactNode; href: string }[];
   desktopClassName?: string;
   mobileClassName?: string;
 }) => {
   return (
     <>
       <FloatingDockDesktop items={items} className={desktopClassName} />
       <FloatingDockMobile items={items} className={mobileClassName} />
     </>
   );
 };
 
 const FloatingDockMobile = ({
   items,
   className,
 }: {
   items: { title: string; icon: React.ReactNode; href: string }[];
   className?: string;
 }) => {
   const [open, setOpen] = useState(false);
   return (
     <div className={cn("relative block md:hidden", className)}>
       <AnimatePresence>
         {open && (
           <motion.div
             layoutId="nav"
             className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
           >
             {items.map((item, idx) => (
               <motion.div
                 key={item.title}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{
                   opacity: 1,
                   y: 0,
                 }}
                 exit={{
                   opacity: 0,
                   y: 10,
                   transition: {
                     delay: idx * 0.05,
                   },
                 }}
                 transition={{ delay: (items.length - 1 - idx) * 0.05 }}
               >
                 <Link
                   href={item.href}
                   key={item.title}
                   className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                 >
                   <div className="h-4 w-4">{item.icon}</div>
                 </Link>
               </motion.div>
             ))}
           </motion.div>
         )}
       </AnimatePresence>
       <button
         onClick={() => setOpen(!open)}
         className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
       >
         <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
       </button>
     </div>
   );
 };
 
 const FloatingDockDesktop = ({
   items,
   className,
 }: {
   items: { title: string; icon: React.ReactNode; href: string }[];
   className?: string;
 }) => {
   let mouseX = useMotionValue(Infinity);
   return (
     <motion.div
       onMouseMove={(e) => mouseX.set(e.pageX)}
       onMouseLeave={() => mouseX.set(Infinity)}
       className={cn(
         "mx-auto hidden md:flex h-16 gap-4 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
         className
       )}
     >
       {items.map((item) => (
         <IconContainer mouseX={mouseX} key={item.title} {...item} />
       ))}
     </motion.div>
   );
 };
 
 function IconContainer({
   mouseX,
   title,
   icon,
   href,
 }: {
   mouseX: MotionValue;
   title: string;
   icon: React.ReactNode;
   href: string;
 }) {
   let ref = useRef<HTMLDivElement>(null);
 
   let distance = useTransform(mouseX, (val) => {
     let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
 
     return val - bounds.x - bounds.width / 2;
   });
 
   let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
   let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
 
   let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
   let heightTransformIcon = useTransform(
     distance,
     [-150, 0, 150],
     [20, 40, 20]
   );
 
   let width = useSpring(widthTransform, {
     mass: 0.1,
     stiffness: 150,
     damping: 12,
   });
   let height = useSpring(heightTransform, {
     mass: 0.1,
     stiffness: 150,
     damping: 12,
   });
 
   let widthIcon = useSpring(widthTransformIcon, {
     mass: 0.1,
     stiffness: 150,
     damping: 12,
   });
   let heightIcon = useSpring(heightTransformIcon, {
     mass: 0.1,
     stiffness: 150,
     damping: 12,
   });
 
   const [hovered, setHovered] = useState(false);
 
   return (
     <Link href={href}>
       <motion.div
         ref={ref}
         style={{ width, height }}
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
       >
         <AnimatePresence>
           {hovered && (
             <motion.div
               initial={{ opacity: 0, y: 10, x: "-50%" }}
               animate={{ opacity: 1, y: 0, x: "-50%" }}
               exit={{ opacity: 0, y: 2, x: "-50%" }}
               className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
             >
               {title}
             </motion.div>
           )}
         </AnimatePresence>
         <motion.div
           style={{ width: widthIcon, height: heightIcon }}
           className="flex items-center justify-center"
         >
           {icon}
         </motion.div>
       </motion.div>
     </Link>
   );
 }`;

  const judul = "Floating Dock"
  const deskripsi = "A floating dock mac os style component, acts as a navigation bar."
  const namaFile = "floating-dock"

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
              <h1 className="text-3xl font-bold">{judul}</h1>
              <p className="text-muted-foreground mt-2">{deskripsi}</p>

              <div className="max-w-4xl border-dashed border-2 p-2 mt-4 mx-auto">
                <FloatingDockDemo />
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

                  

                  {/* code  */}
                  <p className="font-bold">components/ui/{namaFile}.tsx</p>
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
                      {Code}
                    </SyntaxHighlighter>
                    <CopyIcon id="Code" code={Code} />

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
