"use client"
import { SocialTestimonialsMarquee } from "./marquee"

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
} 