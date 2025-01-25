"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaCheck } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FooterDemo } from "@/app/components/bims/footer";
import { TabsDemo } from "@/app/components/UI/animate-tabs/demo";

export default function AnimateTabs() {
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

    import Image from "next/image";
    import { Tabs } from "../ui/tabs";
    
    export function TabsDemo() {
      const tabs = [
        {
          title: "Product",
          value: "product",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>Product Tab</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "Services",
          value: "services",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>Services tab</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "Playground",
          value: "playground",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>Playground tab</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "Content",
          value: "content",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>Content tab</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "Random",
          value: "random",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>Random tab</p>
              <DummyContent />
            </div>
          ),
        },
      ];
    
      return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
          <Tabs tabs={tabs} />
        </div>
      );
    }
    
    const DummyContent = () => {
      return (
        <Image
          src="/linear.webp"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      );
    };`;

    const tabs = `"use client";

    import { useState } from "react";
    import { motion } from "framer-motion";
    import { cn } from "@/lib/utils";
    
    type Tab = {
      title: string;
      value: string;
      content?: string | React.ReactNode | any;
    };
    
    export const Tabs = ({
      tabs: propTabs,
      containerClassName,
      activeTabClassName,
      tabClassName,
      contentClassName,
    }: {
      tabs: Tab[];
      containerClassName?: string;
      activeTabClassName?: string;
      tabClassName?: string;
      contentClassName?: string;
    }) => {
      const [active, setActive] = useState<Tab>(propTabs[0]);
      const [tabs, setTabs] = useState<Tab[]>(propTabs);
    
      const moveSelectedTabToTop = (idx: number) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
      };
    
      const [hovering, setHovering] = useState(false);
    
      return (
        <>
          <div
            className={cn(
              "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
              containerClassName
            )}
          >
            {propTabs.map((tab, idx) => (
              <button
                key={tab.title}
                onClick={() => {
                  moveSelectedTabToTop(idx);
                }}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className={cn("relative px-4 py-2 rounded-full", tabClassName)}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {active.value === tab.value && (
                  <motion.div
                    layoutId="clickedbutton"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className={cn(
                      "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
                      activeTabClassName
                    )}
                  />
                )}
    
                <span className="relative block text-black dark:text-white">
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
          <FadeInDiv
            tabs={tabs}
            active={active}
            key={active.value}
            hovering={hovering}
            className={cn("mt-32", contentClassName)}
          />
        </>
      );
    };
    
    export const FadeInDiv = ({
      className,
      tabs,
      hovering,
    }: {
      className?: string;
      key?: string;
      tabs: Tab[];
      active: Tab;
      hovering?: boolean;
    }) => {
      const isActive = (tab: Tab) => {
        return tab.value === tabs[0].value;
      };
      return (
        <div className="relative w-full h-full">
          {tabs.map((tab, idx) => (
            <motion.div
              key={tab.value}
              layoutId={tab.value}
              style={{
                scale: 1 - idx * 0.1,
                top: hovering ? idx * -50 : 0,
                zIndex: -idx,
                opacity: idx < 3 ? 1 - idx * 0.1 : 0,
              }}
              animate={{
                y: isActive(tab) ? [0, 40, 0] : 0,
              }}
              className={cn("w-full h-full absolute top-0 left-0", className)}
            >
              {tab.content}
            </motion.div>
          ))}
        </div>
      );
    };`;
    const globalcss = `.no-visible-scrollbar {
        scrollbar-width: none;
        -ms-overflow-style: none;
        -webkit-overflow-scrolling: touch;
      }
      
      .no-visible-scrollbar::-webkit-scrollbar {
        display: none;
      }`
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
                <FaCheck className="text-green-500 text-xl transition-all duration-300" />
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
                            <h1 className="text-3xl font-bold">Animated Tabs</h1>
                            <p className="text-muted-foreground mt-2">Tabs to switch content, click on a tab to check background animation.</p>

                            <div className="max-w-4xl border-dashed border-2 p-2 mt-4 mx-auto">
                                <TabsDemo />
                            </div>

                            <div className="mt-6 "> {/* Menyesuaikan lebar secara dinamis */}
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
                                        <CopyIcon id="dependencies" code={dependencies} />

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
                                        <CopyIcon id="utils" code={utils} />

                                    </div>

                                    {/* page.tsx code  */}
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
                                                whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                                                wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                                            }}>
                                            {demotsx}
                                        </SyntaxHighlighter>
                                        <CopyIcon id="demotsx" code={demotsx} />

                                    </div>

                                    {/* tabs.tsx code  */}
                                    <p className="font-bold">components/ui/tabs.tsx</p>
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
                                            {tabs}
                                        </SyntaxHighlighter>
                                        <CopyIcon id="tabs" code={tabs} />

                                    </div>
                                    {/* global.css code  */}
                                    <p className="font-bold">global.css</p>
                                    <div className="relative">
                                        <SyntaxHighlighter
                                            language="css"
                                            style={nightOwl}
                                            customStyle={{
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                backgroundColor: '#1e1e1e',
                                                whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                                                wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                                            }}>
                                            {globalcss}
                                        </SyntaxHighlighter>
                                        <CopyIcon id="globalcss" code={globalcss} />

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
