"use client"
import { GooeyTextDemo } from "@/app/components/UI/goeeyText/demo";
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaCheck, FaClipboard, FaRegClipboard } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { Canvas } from "@/app/components/UI/canvas/demo";
import { FooterDemo } from "@/app/components/bims/footer";

export default function Gooey() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const dependencies = `npm i clsx tailwind-merge @radix-ui/react-slot class-variance-authority dicons`

  const utils = `import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }
    `

  const demotsx = `
  "use client";

// this is a client component
import { useEffect } from "react";
import Link from "next/link";
import { renderCanvas } from "@/components/ui/canvas"
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

export function Hero() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section id="home">
      <div className="animation-delay-8 animate-fadeIn mt-20 flex  flex-col items-center justify-center px-4 text-center md:mt-20">
        <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
          <div className="relative flex items-center whitespace-nowrap rounded-full border bg-popover px-3 py-1 text-xs leading-6  text-primary/60 ">
            <DIcons.Shapes className="h-5 p-1" /> Introducing Dicons.
            <a
              href="/products/dicons"
              rel="noreferrer"
              className="hover:text-ali ml-1 flex items-center font-semibold"
            >
              <div className="absolute inset-0 flex" aria-hidden="true" />
              Explore{" "}
              <span aria-hidden="true">
                <DIcons.ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        <div className="mb-10 mt-4  md:mt-6">
          <div className="px-2">
            <div className="border-ali relative mx-auto h-full max-w-7xl border p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20">
              <h1 className="flex  select-none flex-col  px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-ali absolute -left-5 -top-5 h-10 w-10"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-5 -left-5 h-10 w-10"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-ali absolute -right-5 -top-5 h-10 w-10"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-5 -right-5 h-10 w-10"
                />
                UI Component terbaik buatan anak bangsa
              </h1>
              <div className="flex items-center justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500">Available Now</p>
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-2xl md:text-2xl">
          Selamat datang di BimsUI I&#39;m{" "}
            <span className="text-ali font-bold">Bima Jovanta </span>
          </h1>

          <p className="md:text-md mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-primary/60 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
          Saya membuat UI Component yang keren dan open source namun seperti premium
          </p>
          <div className="flex justify-center gap-2">
            <Link href={"/dashboard"}>
              <Button variant="default" size="lg">
                Start Project
              </Button>
            </Link>
            <Link href={"https://ui.bimadev.xyz"} target="_blank">
              <Button variant="outline" size="lg">
                Book a call
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0 mx-auto"
        id="canvas"
      ></canvas>
    </section>
  );
};

 
`;

  const canvas = `// @ts-ignore
  function n(e) {
    // @ts-ignore
    this.init(e || {});
  }
  n.prototype = {
    // @ts-ignore
    init: function (e) {
      // @ts-ignore
      this.phase = e.phase || 0;
      // @ts-ignore
      this.offset = e.offset || 0;
      // @ts-ignore
      this.frequency = e.frequency || 0.001;
      // @ts-ignore
      this.amplitude = e.amplitude || 1;
    },
    update: function () {
      return (
        // @ts-ignore
        (this.phase += this.frequency),
        // @ts-ignore
        (e = this.offset + Math.sin(this.phase) * this.amplitude)
      );
    },
    value: function () {
      return e;
    },
  };
  
  // @ts-ignore
  function Line(e) {
    // @ts-ignore
    this.init(e || {});
  }
  
  Line.prototype = {
    // @ts-ignore
    init: function (e) {
      // @ts-ignore
      this.spring = e.spring + 0.1 * Math.random() - 0.05;
      // @ts-ignore
      this.friction = E.friction + 0.01 * Math.random() - 0.005;
      // @ts-ignore
      this.nodes = [];
      for (var t, n = 0; n < E.size; n++) {
        t = new Node();
        // @ts-ignore
        t.x = pos.x;
        // @ts-ignore
        t.y = pos.y;
        // @ts-ignore
        this.nodes.push(t);
      }
    },
    update: function () {
      // @ts-ignore
      let e = this.spring,
        // @ts-ignore
        t = this.nodes[0];
      // @ts-ignore
      t.vx += (pos.x - t.x) * e;
      // @ts-ignore
      t.vy += (pos.y - t.y) * e;
      // @ts-ignore
      for (var n, i = 0, a = this.nodes.length; i < a; i++)
        // @ts-ignore
        (t = this.nodes[i]),
          0 < i &&
            // @ts-ignore
            ((n = this.nodes[i - 1]),
            (t.vx += (n.x - t.x) * e),
            (t.vy += (n.y - t.y) * e),
            (t.vx += n.vx * E.dampening),
            (t.vy += n.vy * E.dampening)),
          // @ts-ignore
          (t.vx *= this.friction),
          // @ts-ignore
          (t.vy *= this.friction),
          (t.x += t.vx),
          (t.y += t.vy),
          (e *= E.tension);
    },
    draw: function () {
      let e,
        t,
        // @ts-ignore
        n = this.nodes[0].x,
        // @ts-ignore
        i = this.nodes[0].y;
      // @ts-ignore
      ctx.beginPath();
      // @ts-ignore
      ctx.moveTo(n, i);
      // @ts-ignore
      for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
        // @ts-ignore
        e = this.nodes[a];
        // @ts-ignore
        t = this.nodes[a + 1];
        n = 0.5 * (e.x + t.x);
        i = 0.5 * (e.y + t.y);
        // @ts-ignore
        ctx.quadraticCurveTo(e.x, e.y, n, i);
      }
      // @ts-ignore
      e = this.nodes[a];
      // @ts-ignore
      t = this.nodes[a + 1];
      // @ts-ignore
      ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
      // @ts-ignore
      ctx.stroke();
      // @ts-ignore
      ctx.closePath();
    },
  };
  
  // @ts-ignore
  function onMousemove(e) {
    function o() {
      lines = [];
      for (let e = 0; e < E.trails; e++)
        lines.push(new Line({ spring: 0.45 + (e / E.trails) * 0.025 }));
    }
    // @ts-ignore
    function c(e) {
      e.touches
        ? // @ts-ignore
          ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY))
        : // @ts-ignore
          ((pos.x = e.clientX), (pos.y = e.clientY)),
        e.preventDefault();
    }
    // @ts-ignore
    function l(e) {
      // @ts-ignore
      1 == e.touches.length &&
        ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY));
    }
    document.removeEventListener("mousemove", onMousemove),
      document.removeEventListener("touchstart", onMousemove),
      document.addEventListener("mousemove", c),
      document.addEventListener("touchmove", c),
      document.addEventListener("touchstart", l),
      c(e),
      o(),
      render();
  }
  
  function render() {
    // @ts-ignore
    if (ctx.running) {
      // @ts-ignore
      ctx.globalCompositeOperation = "source-over";
      // @ts-ignore
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      // @ts-ignore
      ctx.globalCompositeOperation = "lighter";
      // @ts-ignore
      ctx.strokeStyle = "hsla(" + Math.round(f.update()) + ",100%,50%,0.025)";
      // @ts-ignore
      ctx.lineWidth = 10;
      for (var e, t = 0; t < E.trails; t++) {
        // @ts-ignore
        (e = lines[t]).update();
        e.draw();
      }
      // @ts-ignore
      ctx.frame++;
      window.requestAnimationFrame(render);
    }
  }
  
  function resizeCanvas() {
    // @ts-ignore
    ctx.canvas.width = window.innerWidth - 20;
    // @ts-ignore
    ctx.canvas.height = window.innerHeight;
  }
  
  // @ts-ignore
  var ctx,
    // @ts-ignore
    f,
    e = 0,
    pos = {},
    // @ts-ignore
    lines = [],
    E = {
      debug: true,
      friction: 0.5,
      trails: 80,
      size: 50,
      dampening: 0.025,
      tension: 0.99,
    };
  function Node() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }
  
  export const renderCanvas = function () {
    // @ts-ignore
    ctx = document.getElementById("canvas").getContext("2d");
    ctx.running = true;
    ctx.frame = 1;
    f = new n({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });
    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("touchstart", onMousemove);
    document.body.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", () => {
      // @ts-ignore
      if (!ctx.running) {
        // @ts-ignore
        ctx.running = true;
        render();
      }
    });
    window.addEventListener("blur", () => {
      // @ts-ignore
      ctx.running = true;
    });
    resizeCanvas();
  };`;

  const button = `import * as React from "react"
  import { Slot } from "@radix-ui/react-slot"
  import { cva, type VariantProps } from "class-variance-authority"
  
  import { cn } from "@/lib/utils"
  
  const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    },
  )
  
  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
    asChild?: boolean
  }
  
  const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button"
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    },
  )
  Button.displayName = "Button"
  
  export { Button, buttonVariants }
  `
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
            <h1 className="text-3xl font-bold">Canvas</h1>
            <p className="text-muted-foreground mt-2">Sebuah Hero section dengan effek hover yang memukau, membuat website mu terlihat lebih indah dan interaktif</p>

            <div className="max-w-4xl border-dashed border-2 p-2 mt-4 mx-auto">
              <Canvas />
            </div>

            <div className="mt-6 "> {/* Menyesuaikan lebar secara dinamis */}
              <h2 className="text-2xl font-semibold">Installation</h2>
              <div className="mt-4">
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

                {/* canvas.tsx code  */}
                <p className="font-bold">canvas.tsx</p>
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
                    {canvas}
                  </SyntaxHighlighter>
                  <CopyIcon id="canvas" code={canvas} />

                </div>

                {/* button.tsx code  */}
                <p className="font-bold">button.tsx</p>
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
                    {button}
                  </SyntaxHighlighter>
                  <CopyIcon id="button" code={demotsx} />
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
