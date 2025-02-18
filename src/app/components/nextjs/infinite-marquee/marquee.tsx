"use client"
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
                className={`w-4 h-4 ${i < data.rating ? 'text-yellow-400' : 'text-gray-400'}`}
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
} 