"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FooterDemo } from "@/app/components/bims/footer";
import Loading from "@/app/loading";
import { DynamicGridGalleryDemo } from "@/app/components/nextjs/grid-gallery/demo";
import { DemoLightningText } from "@/app/components/nextjs/lightning-text/demo";

export default function VisualizerPage() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

//   const dependencies = `npm i motion react-icons`

  const demotsx = `import LightningText from "@/components/ui/lightning-text";

const DemoOne = () => {
  return <LightningText />;
};

export { DemoOne };
`;

  const Code = `import React, { useEffect, useRef } from 'react';

// Text class
class Text {
  constructor(options = {}, canvasWidth, canvasHeight) {
    const pool = document.createElement('canvas');
    const buffer = pool.getContext('2d');
    pool.width = canvasWidth;
    pool.height = canvasHeight;
    buffer.fillStyle = '#000000';
    buffer.fillRect(0, 0, pool.width, pool.height);

    this.size = options.size || 100;
    this.copy = (options.copy || \`BimsUI\`) + ' '; // Default text set to "BimsUI"
    this.color = options.color || '#cd96fe';
    this.delay = options.delay || 2; // Faster animation
    this.basedelay = this.delay;
    
    buffer.font = \`\${this.size}px Comic Sans MS\`;
    this.bound = buffer.measureText(this.copy);
    this.bound.height = this.size * 1.5;
    
    // Center the text
    this.x = canvasWidth * 0.5 - this.bound.width * 0.5;
    this.y = canvasHeight * 0.5 - this.bound.height * 0.5;

    buffer.strokeStyle = this.color;
    buffer.strokeText(this.copy, 0, this.bound.height * 0.8);
    this.data = buffer.getImageData(0, 0, this.bound.width, this.bound.height);
    this.index = 0;
  }

  update(thunder, particles) {
    if (this.index >= this.bound.width) {
      this.index = 0;
      return;
    }
    
    const data = this.data.data;
    for (let i = this.index * 4; i < data.length; i += 4 * this.data.width) {
      const bitmap = data[i] + data[i + 1] + data[i + 2] + data[i + 3];
      if (bitmap > 255 && Math.random() > 0.94) { // More frequent lightning
        const x = this.x + this.index;
        const y = this.y + i / this.bound.width / 4;
        thunder.push(new Thunder({ x, y }));
        
        if (Math.random() > 0.3) { // More particles
          particles.push(new Particles({ x, y }));
        }
      }
    }
    
    if (this.delay-- < 0) {
      this.index += 2; // Faster progression
      this.delay += this.basedelay;
    }
  }

  render(ctx) {
    ctx.putImageData(this.data, this.x, this.y, 0, 0, this.index, this.bound.height);
  }
}

// Thunder class component
class Thunder {
  constructor(options = {}) {
    this.lifespan = options.lifespan || Math.round(Math.random() * 10 + 10);
    this.maxlife = this.lifespan;
    this.color = options.color || '#fefefe';
    this.glow = options.glow || '#2323fe';
    this.x = options.x || Math.random() * window.innerWidth;
    this.y = options.y || Math.random() * window.innerHeight;
    this.width = options.width || 2;
    this.direct = options.direct || Math.random() * Math.PI * 2;
    this.max = options.max || Math.round(Math.random() * 10 + 20);
    this.segments = [...new Array(this.max)].map(() => ({
      direct: this.direct + (Math.PI * Math.random() * 0.2 - 0.1),
      length: Math.random() * 20 + 80,
      change: Math.random() * 0.04 - 0.02
    }));
  }

  update(index, array) {
    this.segments.forEach(s => {
      s.direct += s.change;
      if (Math.random() > 0.96) s.change *= -1;
    });
    if (this.lifespan > 0) {
      this.lifespan--;
    } else {
      this.remove(index, array);
    }
  }

  render(ctx) {
    if (this.lifespan <= 0) return;
    
    ctx.beginPath();
    ctx.globalAlpha = this.lifespan / this.maxlife;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
    ctx.shadowBlur = 32;
    ctx.shadowColor = this.glow;
    ctx.moveTo(this.x, this.y);
    
    let prev = { x: this.x, y: this.y };
    this.segments.forEach(s => {
      const x = prev.x + Math.cos(s.direct) * s.length;
      const y = prev.y + Math.sin(s.direct) * s.length;
      prev = { x, y };
      ctx.lineTo(x, y);
    });
    
    ctx.stroke();
    ctx.closePath();
    ctx.shadowBlur = 0;
    
    const strength = Math.random() * 80 + 40;
    const light = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, strength);
    light.addColorStop(0, 'rgba(250, 200, 50, 0.6)');
    light.addColorStop(0.1, 'rgba(250, 200, 50, 0.2)');
    light.addColorStop(0.4, 'rgba(250, 200, 50, 0.06)');
    light.addColorStop(0.65, 'rgba(250, 200, 50, 0.01)');
    light.addColorStop(0.8, 'rgba(250, 200, 50, 0)');
    
    ctx.beginPath();
    ctx.fillStyle = light;
    ctx.arc(this.x, this.y, strength, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  remove(index, array) {
    array.splice(index, 1);
  }
}

// Spark class component
class Spark {
  constructor(options = {}) {
    this.x = options.x || window.innerWidth * 0.5;
    this.y = options.y || window.innerHeight * 0.5;
    this.v = options.v || {
      direct: Math.random() * Math.PI * 2,
      weight: Math.random() * 14 + 2,
      friction: 0.88
    };
    this.a = options.a || {
      change: Math.random() * 0.4 - 0.2,
      min: this.v.direct - Math.PI * 0.4,
      max: this.v.direct + Math.PI * 0.4
    };
    this.g = options.g || {
      direct: Math.PI * 0.5 + (Math.random() * 0.4 - 0.2),
      weight: Math.random() * 0.25 + 0.25
    };
    this.width = options.width || Math.random() * 3;
    this.lifespan = options.lifespan || Math.round(Math.random() * 20 + 40);
    this.maxlife = this.lifespan;
    this.color = options.color || '#feca32';
    this.prev = { x: this.x, y: this.y };
  }

  update(index, array) {
    this.prev = { x: this.x, y: this.y };
    this.x += Math.cos(this.v.direct) * this.v.weight;
    this.x += Math.cos(this.g.direct) * this.g.weight;
    this.y += Math.sin(this.v.direct) * this.v.weight;
    this.y += Math.sin(this.g.direct) * this.g.weight;
    
    if (this.v.weight > 0.2) {
      this.v.weight *= this.v.friction;
    }
    
    this.v.direct += this.a.change;
    if (this.v.direct > this.a.max || this.v.direct < this.a.min) {
      this.a.change *= -1;
    }
    
    if (this.lifespan > 0) {
      this.lifespan--;
    } else {
      this.remove(index, array);
    }
  }

  render(ctx) {
    if (this.lifespan <= 0) return;
    
    ctx.beginPath();
    ctx.globalAlpha = this.lifespan / this.maxlife;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.prev.x, this.prev.y);
    ctx.stroke();
    ctx.closePath();
  }

  remove(index, array) {
    array.splice(index, 1);
  }
}

// Particles class
class Particles {
  constructor(options = {}) {
    this.max = options.max || Math.round(Math.random() * 10 + 10);
    this.sparks = [...new Array(this.max)].map(() => new Spark(options));
  }

  update() {
    this.sparks.forEach((s, i) => s.update(i, this.sparks));
  }

  render(ctx) {
    this.sparks.forEach(s => s.render(ctx));
  }
}

// Main React Component
const LightningText = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const thunderRef = useRef([]);
  const particlesRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    canvas.width = w;
    canvas.height = h;
    
    // Initialize text with default value
    textRef.current = new Text({ copy: 'BimsUI' }, w, h);

    const loop = () => {
      // Update
      textRef.current.update(thunderRef.current, particlesRef.current);
      thunderRef.current.forEach((l, i) => l.update(i, thunderRef.current));
      particlesRef.current.forEach(p => p.update());
      
      // Render
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);
      
      ctx.globalCompositeOperation = 'screen';
      textRef.current.render(ctx);
      thunderRef.current.forEach(l => l.render(ctx));
      particlesRef.current.forEach(p => p.render(ctx));
      
      animationRef.current = requestAnimationFrame(loop);
    };

    loop();

    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      canvas.width = newWidth;
      canvas.height = newHeight;
      
      // Recreate text with new dimensions to maintain center
      if (textRef.current) {
        textRef.current = new Text({ copy: 'BimsUI' }, newWidth, newHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCanvasClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    thunderRef.current.push(new Thunder({ x, y }));
    particlesRef.current.push(new Particles({ x, y }));
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <canvas 
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="block w-full h-full cursor-crosshair"
      />
    </div>
  );
};

export default LightningText;`;
// const nextConfig = `const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//     ],
//   },
// };`

  const judul = "Lightning Text"
  const deskripsi = "A lightning text with cool animation."
  const namaFile = "lightning-text"

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

  // Simulasi proses loading (misalnya 2 detik)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Jika isLoading true, tampilkan animasi loading
  if (isLoading) {
    return <Loading />;
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
        <main className="pt-20 flex-1 w-[100vw]">
          <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className="p-6">
              <h1 className="text-3xl font-bold">{judul}</h1>
              <p className="text-muted-foreground mt-2">{deskripsi}</p>

              <div className="max-w-4xl  border-dashed border-2 p-2 mt-4 mx-auto">
                <DemoLightningText />
              </div>

              <div className="mt-6 "> {/* Menyesuaikan lebar secara dinamis */}
                <h2 className="text-2xl font-semibold">Installation</h2>
                <div className="mt-4 ">
                  {/* install dependencies code  */}
                  {/* <p className="font-bold">Install dependencies</p>
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

                  </div> */}

                  {/* Next Config */}
                  {/* <p className="font-bold">next.config.ts</p>
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
                      {nextConfig}
                    </SyntaxHighlighter>
                    <CopyIcon id="nextConfig" code={nextConfig} />
                  </div> */}

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
