"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FooterDemo } from "@/app/components/bims/footer";
import Loading from "@/app/loading";
import { ParticleTextDemo } from "@/app/components/nextjs/particle-text/demo";

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

  const dependencies = `npm i motion`

  const demotsx = `"use client"
import { ParticleText } from "@/app/components/ui/particle-text"

export function ParticleTextDemo() {
  return (
    <div className="w-full min-h-[400px] bg-black">
      <ParticleText />
    </div>
  )
}`;

  const Code = `"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  originX: number
  originY: number
  color: string
  size: number
  dx: number
  dy: number
  vx: number
  vy: number
  force: number
  angle: number
  distance: number
  friction: number
  ease: number
}

export const ParticleText = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const text = "BIMSUI" // Change the text here
  const density = 4 // Adjust for more/less particles
  const particleSize = 2
  const mouseForce = 100
  const mouseMoveStrength = 0.1
  const colorPalette = [
    "#FF3366",
    "#FF66B2",
    "#FF99CC",
    "#FFCCCC",
    "#FF0066",
  ]

  useEffect(() => {
    if (!canvasRef.current) return

    // Initialize canvas
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return
    contextRef.current = context

    // Set canvas dimensions
    const updateDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      context.scale(window.devicePixelRatio, window.devicePixelRatio)
      setDimensions({ width, height })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    // Initialize particles
    initText()

    // Animation loop
    let animationFrame: number
    const animate = () => {
      animationFrame = requestAnimationFrame(animate)
      updateParticles()
    }
    animate()

    return () => {
      window.removeEventListener("resize", updateDimensions)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  const initText = () => {
    if (!contextRef.current || !canvasRef.current) return

    const context = contextRef.current
    const { width, height } = canvasRef.current

    // Setup text
    context.fillStyle = "white"
    context.font = "bold 100px Inter"
    context.textAlign = "center"
    context.textBaseline = "middle"
    
    // Get text metrics
    const metrics = context.measureText(text)
    const textWidth = metrics.width
    const textHeight = 100 // Approximate height based on font size

    // Draw text to get pixel data
    context.fillText(text, width / 2, height / 2)
    const imageData = context.getImageData(0, 0, width, height).data

    // Clear canvas
    context.clearRect(0, 0, width, height)

    // Create particles
    particlesRef.current = []
    for (let y = 0; y < height; y += density) {
      for (let x = 0; x < width; x += density) {
        const index = (y * width + x) * 4
        const alpha = imageData[index + 3]

        if (alpha > 128) {
          const particle: Particle = {
            id: particlesRef.current.length,
            x: x,
            y: y,
            originX: x,
            originY: y,
            color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
            size: particleSize,
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0,
            force: 0,
            angle: 0,
            distance: 0,
            friction: 0.95,
            ease: 0.1
          }
          particlesRef.current.push(particle)
        }
      }
    }
  }

  const updateParticles = () => {
    if (!contextRef.current || !canvasRef.current) return

    const context = contextRef.current
    const { width, height } = canvasRef.current

    // Clear canvas
    context.clearRect(0, 0, width, height)

    // Update and draw particles
    particlesRef.current.forEach(particle => {
      // Mouse interaction
      const dx = mouseRef.current.x - particle.x
      const dy = mouseRef.current.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const force = (mouseForce / distance) * mouseMoveStrength

      if (distance < mouseForce) {
        const angle = Math.atan2(dy, dx)
        particle.vx += Math.cos(angle) * force
        particle.vy += Math.sin(angle) * force
      }

      // Spring back to original position
      const dx2 = particle.originX - particle.x
      const dy2 = particle.originY - particle.y
      particle.vx += dx2 * 0.05
      particle.vy += dy2 * 0.05

      // Update position
      particle.vx *= particle.friction
      particle.vy *= particle.friction
      particle.x += particle.vx
      particle.y += particle.vy

      // Draw particle
      context.beginPath()
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      context.fillStyle = particle.color
      context.fill()
    })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return
    const rect = canvasRef.current.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }

  const handleMouseLeave = () => {
    mouseRef.current = { x: 0, y: 0 }
  }

  return (
    <div className="w-full h-[400px] relative bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ touchAction: "none" }}
      />
    </div>
  )
}`;


  const judul = "Particle Text"
  const deskripsi = "A particle text cool animation and mouse interaction"
  const namaFile = "particle-text"

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
                <ParticleTextDemo />
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
