'use client'

import { Github, Twitter, Linkedin, Instagram, Youtube, Facebook } from "lucide-react"
import { AnimatedSocialIcons } from "./floating-button"

export function FloatingButton() {
  const socialIcons = [
    { 
      Icon: Github,
      href: "https://github.com",
      className: "hover:bg-accent"
    },
    { 
      Icon: Twitter,
      href: "https://twitter.com" 
    },
    { 
      Icon: Linkedin,
      href: "https://linkedin.com" 
    },
    { 
      Icon: Instagram,
      href: "https://instagram.com" 
    }
  ]

  return (
    <main className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 py-10 bg-background">
      <AnimatedSocialIcons 
        icons={socialIcons}
        iconSize={20}
      />
    </main>
  )
}