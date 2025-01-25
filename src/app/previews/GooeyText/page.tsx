"use client"
import { GooeyTextDemo } from "@/app/components/UI/goeeyText/demo";
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaCheck, FaClipboard, FaRegClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FooterDemo } from "@/app/components/bims/footer";

export default function Gooey() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const dependencies = `npm i clsx tailwind-merge `

  const utils = `import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }
    `

  const demotsx = `
    import * as React from "react";
    import { GooeyText } from "@/components/ui/gooey-text-morphing";
    
    function GooeyTextDemo() {
      return (
        <div className="h-[200px] flex items-center justify-center">
          <GooeyText
            texts={["BimsUI", "Is", "The", "Best"]}
            morphTime={1}
            cooldownTime={0.25}
            className="font-bold"
          />
        </div>
      );
    }
    
    export { GooeyTextDemo };`;

  const gooeyTextMorphing = `'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    const setMorph = (fraction: number) => {
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = \`blur(\${Math.min(8 / fraction - 8, 100)}px)\`;
        text2Ref.current.style.opacity = \`\${Math.pow(fraction, 0.4) * 100}%\`;

        fraction = 1 - fraction;
        text1Ref.current.style.filter = \`blur(\${Math.min(8 / fraction - 8, 100)}px)\`;
        text1Ref.current.style.opacity = \`\${Math.pow(fraction, 0.4) * 100}%\`;
      }
    };

    const doCooldown = () => {
      morph = 0;
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";
        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    function animate() {
      requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % texts.length;
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
          }
        }
        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();

    return () => {
      // Cleanup function if needed
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={cn("relative", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="flex items-center justify-center"
        style={{ filter: "url(#threshold)" }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none text-center text-6xl md:text-[60pt]",
            "text-foreground",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none text-center text-6xl md:text-[60pt]",
            "text-foreground",
            textClassName
          )}
        />
      </div>
    </div>
  );
}
    `;
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
              <h1 className="text-3xl font-bold">Gooey Text</h1>
              <p className="text-muted-foreground mt-2">Menampilkan teks dengan efek Gooey yang indah.</p>

              <div className="max-w-4xl border-dashed border-2 p-2 mt-4 mx-auto">
                <GooeyTextDemo />
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
                    <CopyIcon id="demotsx" code={demotsx} />

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
                      {gooeyTextMorphing}
                    </SyntaxHighlighter>
                    <CopyIcon id="gooeyTextMorphing" code={gooeyTextMorphing} />

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
