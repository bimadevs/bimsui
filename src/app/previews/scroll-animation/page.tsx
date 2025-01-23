"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { ScrollaAnimation } from "@/app/components/UI/scroll-animation/demo";

export default function ScrollAnimationPreview() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dependencies = `npm i clsx tailwind-merge `

  const utils = `import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }
    `

  const demotsx = `
  "use client";
  import React from "react";
  import { ContainerScroll } from "@/components/ui/container-scroll-animation";
  import Image from "next/image";
  
  export function HeroScrollDemo() {
    return (
      <div className="flex flex-col overflow-hidden pb-[500px] pt-[1000px]">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Scroll Animations
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={\`https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=3840&q=75\`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    );
  }`;

  const scrollAnimation = `"use client";
  import React, { useRef } from "react";
  import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
  
  export const ContainerScroll = ({
    titleComponent,
    children,
  }: {
    titleComponent: string | React.ReactNode;
    children: React.ReactNode;
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
    });
    const [isMobile, setIsMobile] = React.useState(false);
  
    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }, []);
  
    const scaleDimensions = () => {
      return isMobile ? [0.7, 0.9] : [1.05, 1];
    };
  
    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
    return (
      <div
        className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
        ref={containerRef}
      >
        <div
          className="py-10 md:py-40 w-full relative"
          style={{
            perspective: "1000px",
          }}
        >
          <Header translate={translate} titleComponent={titleComponent} />
          <Card rotate={rotate} translate={translate} scale={scale}>
            {children}
          </Card>
        </div>
      </div>
    );
  };
  
  export const Header = ({ translate, titleComponent }: any) => {
    return (
      <motion.div
        style={{
          translateY: translate,
        }}
        className="div max-w-5xl mx-auto text-center"
      >
        {titleComponent}
      </motion.div>
    );
  };
  
  export const Card = ({
    rotate,
    scale,
    children,
  }: {
    rotate: MotionValue<number>;
    scale: MotionValue<number>;
    translate: MotionValue<number>;
    children: React.ReactNode;
  }) => {
    return (
      <motion.div
        style={{
          rotateX: rotate,
          scale,
          boxShadow:
            "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        }}
        className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
      >
        <div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
          {children}
        </div>
      </motion.div>
    );
  };
  
    `;
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
          <h1 className="text-3xl font-bold">Scroll Animation</h1>
          <p className="text-muted-foreground mt-2">Ini adala sebuah component Scroll animation tablet. Dengan component ini, website mu menjadi lebih keren di mata user </p>

          <div className="w-[90vw] border-dashed border-2 mt-4">
            <ScrollaAnimation />
          </div>

          <div className="mt-6 w-[70vw]"> {/* Menyesuaikan lebar secara dinamis */}
            <h2 className="text-2xl font-semibold">Installation</h2>
            <div className="mt-4 ">
              {/* install dependencies code  */}
              <p className="font-bold">Install dependencies</p>
              <div className="relative mb-8">
                <SyntaxHighlighter
                  language="bash"
                  style={nightOwl}
                  customStyle={{
                    width : "100%",
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
                    width : "100%",
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
                    width : "100%",
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

              {/* scroll-animation.tsx code  */}
              <p className="font-bold">scroll-animation.tsx</p>
              <div className="relative">
                <SyntaxHighlighter
                  language="tsx"
                  style={nightOwl}
                  customStyle={{
                    width : "100%",
                    height: "25rem",
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#1e1e1e',
                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                  }}>
                  {scrollAnimation}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(scrollAnimation)}
                  className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                />
              </div>

              {/* next.config.ts code  */}
              <p className="font-bold">next.config.ts</p>
              <div className="relative">
                <SyntaxHighlighter
                  language="tsx"
                  style={nightOwl}
                  customStyle={{
                    width : "100%",
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#1e1e1e',
                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                  }}>
                  {nextConfig}
                </SyntaxHighlighter>
                <FaClipboard
                  onClick={() => copyToClipboard(nextConfig)}
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
