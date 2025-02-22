"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FooterDemo } from "@/app/components/bims/footer";
import Loading from "@/app/loading";
import { AudioVisualizerDemo } from "@/app/components/nextjs/audio-visualizer/demo";

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

  const dependencies = `npm i motion react-icons`

  const demotsx = `"use client"
import { AudioVisualizer } from "./app/components/ui/visualizer"

export function AudioVisualizerDemo() {
  return (
    <div className="w-full min-h-[600px] bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <AudioVisualizer />
    </div>
  )
} `;

  const Code = `"use client"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa"
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"

interface Track {
  id: number
  title: string
  artist: string
  url: string
  cover: string
}

const sampleTracks: Track[] = [
  {
    id: 1,
    title: "Lofi Study",
    artist: "Dream Wave",
    url: "/audio/test.mp3", // Ganti dengan path audio anda
    cover: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=800&fit=crop"
  },
  {
    id: 2,
    title: "Dreamy Beats",
    artist: "Chill Waves",
    url: "/audio/test2.mp3", // Ganti dengan path audio anda
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=800&fit=crop"
  },
  {
    id: 3,
    title: "Summer Vibes",
    artist: "Beach Sound",
    url: "/audio/test3.mp3", // Ganti dengan path audio anda
    cover: "https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?w=800&h=800&fit=crop"
  }
]

export const AudioVisualizer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [currentTrack, setCurrentTrack] = useState<Track>(sampleTracks[0])
  const [volume, setVolume] = useState<number>(0.7)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [audioData, setAudioData] = useState<number[]>(Array(64).fill(0))
  
  const audioRef = useRef<HTMLAudioElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
  const animationFrameRef = useRef<number>(0)
  const isInitialized = useRef<boolean>(false)

  // Add error handling for audio loading
  const [audioError, setAudioError] = useState<string>("")

  // Add loading state
  const [isLoading, setIsLoading] = useState(false)

  // Add time tracking states
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [isDragging, setIsDragging] = useState<boolean>(false)

  // Format time in MM:SS
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return \`\${minutes}:\${seconds.toString().padStart(2, '0')}\`
  }

  // Initialize Audio Context and Analyser
  const initializeAudio = () => {
    if (!audioRef.current || isInitialized.current) return

    try {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      analyserRef.current = audioContextRef.current.createAnalyser()
      analyserRef.current.fftSize = 128

      sourceRef.current = audioContextRef.current.createMediaElementSource(audioRef.current)
      sourceRef.current.connect(analyserRef.current)
      analyserRef.current.connect(audioContextRef.current.destination)

      isInitialized.current = true
    } catch (error) {
      console.error("Error initializing audio:", error)
    }
  }

  // Cleanup function
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (sourceRef.current) {
        sourceRef.current.disconnect()
      }
      if (analyserRef.current) {
        analyserRef.current.disconnect()
      }
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [])

  const updateVisualizer = () => {
    if (!analyserRef.current) return

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)
    analyserRef.current.getByteFrequencyData(dataArray)
    
    const normalizedData = Array.from(dataArray).map(value => value / 255)
    setAudioData(normalizedData)

    animationFrameRef.current = requestAnimationFrame(updateVisualizer)
  }

  useEffect(() => {
    if (isPlaying) {
      updateVisualizer()
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [isPlaying])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('error', (e) => {
        console.error('Audio loading error:', e)
        setAudioError('Failed to load audio file')
      })
    }
  }, [])

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      setIsLoading(true)
      setAudioError("")

      if (!isInitialized.current) {
        initializeAudio()
      }

      if (isPlaying) {
        audioRef.current.pause()
      } else {
        await audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    } catch (error) {
      console.error("Error toggling play:", error)
      setAudioError("Failed to play audio")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    setVolume(value)
    if (audioRef.current) {
      audioRef.current.volume = value
    }
    if (value === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Add next/previous track functionality with auto-play
  const playNextTrack = async () => {
    const currentIndex = sampleTracks.findIndex(track => track.id === currentTrack.id)
    const nextIndex = (currentIndex + 1) % sampleTracks.length
    setCurrentTrack(sampleTracks[nextIndex])
    
    try {
      setIsLoading(true)
      setAudioError("")
      
      if (!isInitialized.current) {
        initializeAudio()
      }
      
      // Wait for the audio element to be updated with new source
      await new Promise(resolve => setTimeout(resolve, 100))
      
      if (audioRef.current) {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error("Error playing next track:", error)
      setAudioError("Failed to play next track")
      setIsPlaying(false)
    } finally {
      setIsLoading(false)
    }
  }

  const playPreviousTrack = async () => {
    const currentIndex = sampleTracks.findIndex(track => track.id === currentTrack.id)
    const previousIndex = currentIndex === 0 ? sampleTracks.length - 1 : currentIndex - 1
    setCurrentTrack(sampleTracks[previousIndex])
    
    try {
      setIsLoading(true)
      setAudioError("")
      
      if (!isInitialized.current) {
        initializeAudio()
      }
      
      // Wait for the audio element to be updated with new source
      await new Promise(resolve => setTimeout(resolve, 100))
      
      if (audioRef.current) {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error("Error playing previous track:", error)
      setAudioError("Failed to play previous track")
      setIsPlaying(false)
    } finally {
      setIsLoading(false)
    }
  }

  // Add track change handler
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.muted = isMuted
    }
  }, [currentTrack])

  // Handle time update
  useEffect(() => {
    if (audioRef.current) {
      const handleTimeUpdate = () => {
        if (!isDragging && audioRef.current) {
          setCurrentTime(audioRef.current.currentTime)
        }
      }

      const handleLoadedMetadata = () => {
        setDuration(audioRef.current?.duration || 0)
      }

      audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata)

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
          audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata)
        }
      }
    }
  }, [isDragging])

  // Handle progress bar interaction
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    setCurrentTime(value)
    if (audioRef.current) {
      audioRef.current.currentTime = value
    }
  }

  const handleProgressDragStart = () => {
    setIsDragging(true)
  }

  const handleProgressDragEnd = () => {
    setIsDragging(false)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glass container */}
      <motion.div 
        className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30" />
        
        {/* Content */}
        <div className="relative p-8">
          {/* Album art and visualizer */}
          <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
            <motion.img
              src={currentTrack.cover}
              alt={currentTrack.title}
              className="w-full h-full object-cover"
              animate={{
                scale: isPlaying ? 1.05 : 1,
              }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            />
            
            {/* Visualizer overlay */}
            <div className="absolute inset-0 flex items-end justify-around p-4">
              {audioData.map((value, index) => (
                <motion.div
                  key={index}
                  className="w-1 bg-white/80 rounded-full"
                  animate={{
                    height: \`\${value * 100}%\`,
                    opacity: value,
                  }}
                  transition={{ duration: 0.1 }}
                  style={{
                    backgroundColor: \`hsl(\${(index * 360) / audioData.length}, 70%, 70%)\`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Track info */}
          <div className="text-center mb-6">
            <motion.h2 
              className="text-2xl font-bold text-white mb-2"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {currentTrack.title}
            </motion.h2>
            <p className="text-white/70">{currentTrack.artist}</p>
          </div>

          {/* Add error message */}
          {audioError && (
            <div className="absolute top-4 left-0 right-0 mx-auto text-center text-red-500">
              {audioError}
            </div>
          )}

          {/* Add progress bar and time indicators */}
          <div className="relative px-8 mb-6">
            <div className="flex items-center gap-3 text-white/60 text-sm mb-2">
              <span>{formatTime(currentTime)}</span>
              <div className="flex-1 h-1 bg-white/20 rounded-full">
                <motion.input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleProgressChange}
                  onMouseDown={handleProgressDragStart}
                  onMouseUp={handleProgressDragEnd}
                  onTouchStart={handleProgressDragStart}
                  onTouchEnd={handleProgressDragEnd}
                  className="w-full h-1 absolute top-0 left-0 opacity-0 cursor-pointer"
                />
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                  style={{ width: \`\${(currentTime / (duration || 1)) * 100}%\` }}
                >
                  <motion.div 
                    className="absolute right-0 -top-1 w-3 h-3 bg-white rounded-full -translate-y-1/2 translate-x-1/2 shadow-lg"
                    animate={{
                      scale: isDragging ? 1.7 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </div>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls section */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <button 
              className="text-white/70 hover:text-white transition-colors"
              onClick={playPreviousTrack}
              disabled={isLoading}
            >
              <BiSkipPrevious size={32} />
            </button>
            <button 
              className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white"
              onClick={togglePlay}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isPlaying ? (
                <FaPause size={24} />
              ) : (
                <FaPlay size={24} className="ml-1" />
              )}
            </button>
            <button 
              className="text-white/70 hover:text-white transition-colors"
              onClick={playNextTrack}
              disabled={isLoading}
            >
              <BiSkipNext size={32} />
            </button>
          </div>

          {/* Volume control */}
          <div className="flex items-center gap-4 px-8 mb-6">
            <button 
              className="text-white/70 hover:text-white transition-colors"
              onClick={toggleMute}
            >
              {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
            </button>
            <div className="flex-1 h-1 bg-white/20 rounded-full relative">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-1 absolute top-0 left-0 opacity-0 cursor-pointer"
              />
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                style={{ width: \`\${volume * 100}%\` }}
              >
                <div className="absolute right-0 top-1/2 w-2 h-2 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          src={currentTrack.url}
          onEnded={playNextTrack}
          onError={(e) => {
            console.error("Audio error:", e)
            setAudioError("Failed to load audio")
            setIsPlaying(false)
          }}
          preload="auto"
          crossOrigin="anonymous"
        />
      </motion.div>
    </div>
  )
}`;
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

  const judul = "Audio Visualizer"
  const deskripsi = "A audio visualizer for music with smooth animation and controls."
  const namaFile = "visualizer"

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
                <AudioVisualizerDemo />
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

                  {/* Next Config */}
                  <p className="font-bold">next.config.ts</p>
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
