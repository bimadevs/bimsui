"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FooterDemo } from "@/app/components/bims/footer";
import Loading from "@/app/loading";
import { InfiniteMarqueeDemo } from "@/app/components/nextjs/infinite-marquee/demo";

export default function MagneticPage() {
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

  const dependencies = `npm i motion react-icons`

  const demotsx = `"use client"
import { SocialTestimonialsMarquee } from "./app/components/ui/marquee"

const testimonials = [
  {
    id: 1,
    avatar: "https://avatars.githubusercontent.com/u/1234567?v=4",
    name: "Sarah Johnson",
    username: "@sarahj_dev",
    comment: "BimsUI is absolutely incredible! The components are so well designed 🚀",
    rating: 5,
    verified: true,
    platform: "twitter" as const
  },
  {
    id: 2,
    avatar: "https://avatars.githubusercontent.com/u/2345678?v=4",
    name: "Alex Chen",
    username: "@alexc_dev",
    comment: "Best UI library I've ever used. The animations are butter smooth! ✨",
    rating: 5,
    verified: true,
    platform: "github" as const
  },
  {
    id: 3,
    avatar: "https://avatars.githubusercontent.com/u/3456789?v=4",
    name: "Maria Garcia",
    username: "@maria_g",
    comment: "Love the attention to detail in every component. Simply amazing! 💫",
    rating: 5,
    verified: true,
    platform: "discord" as const
  },
  // Add more testimonials as needed
]

export function InfiniteMarqueeDemo() {
  return (
    <div className="w-full overflow-hidden">
      <SocialTestimonialsMarquee testimonials={testimonials} />
    </div>
  )
}`;

  const Code = `"use client"
import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { FaTwitter, FaGithub, FaDiscord, FaCheck, FaStar, FaHeart, FaShare } from 'react-icons/fa'

interface Testimonial {
  id: number
  avatar: string
  name: string
  username: string
  comment: string
  rating: number
  verified: boolean
  platform: "twitter" | "github" | "discord"
}

interface SocialTestimonialsMarqueeProps {
  testimonials: Testimonial[]
}

export const SocialTestimonialsMarquee = ({ testimonials }: SocialTestimonialsMarqueeProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const controls = useAnimationControls()

  const PlatformIcon = ({ platform }: { platform: Testimonial["platform"] }) => {
    switch (platform) {
      case "twitter":
        return <FaTwitter className="w-5 h-5 text-blue-400" />
      case "github":
        return <FaGithub className="w-5 h-5 text-gray-700" />
      case "discord":
        return <FaDiscord className="w-5 h-5 text-indigo-500" />
    }
  }

  const TestimonialCard = ({ data }: { data: Testimonial }) => (
    <motion.div
      className="relative w-80 p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setHoveredCard(data.id)}
      onHoverEnd={() => setHoveredCard(null)}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"
        animate={{
          opacity: hoveredCard === data.id ? 1 : 0,
          scale: hoveredCard === data.id ? 1.1 : 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <Image
              src={data.avatar}
              alt={data.name}
              width={40}
              height={40}
              className="rounded-full ring-2 ring-white/20"
            />
            {data.verified && (
              <div className="absolute -right-1 -bottom-1">
                <FaCheck className="w-4 h-4 text-blue-500" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-white">{data.name}</h3>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <span>{data.username}</span>
              <PlatformIcon platform={data.platform} />
            </div>
          </div>
        </div>

        {/* Comment */}
        <p className="text-gray-300 mb-3">{data.comment}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ 
                opacity: i < data.rating ? 1 : 0.3,
                scale: hoveredCard === data.id && i < data.rating ? 1.2 : 1
              }}
              transition={{ delay: i * 0.1 }}
            >
              <FaStar 
                className={\`w-4 h-4 \${i < data.rating ? 'text-yellow-400' : 'text-gray-400'}\`}
              />
            </motion.div>
          ))}
        </div>

        {/* Interactive Elements */}
        <motion.div 
          className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredCard === data.id ? 1 : 0 }}
        >
          <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
            <FaHeart className="w-4 h-4" />
            <span>Like</span>
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
            <FaShare className="w-4 h-4" />
            <span>Share</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  )

  return (
    <div className="relative py-10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10" />
      <div className="absolute inset-0 backdrop-blur-3xl" />

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Marquee Content */}
      <div className="relative flex overflow-hidden">
        {[1, 2].map((group) => (
          <motion.div
            key={group}
            className="flex gap-6 px-3"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} data={testimonial} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}`;


  const judul = "Infinite Marquee"
  const deskripsi = "A infinite marquee for testimonials smooth animation."
  const namaFile = "marquee"

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
                <InfiniteMarqueeDemo />
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
