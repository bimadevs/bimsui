import { Card } from "./Card";
import { motion } from "framer-motion";
import Link from "next/link";

interface BimsComponentGridProps {
  framework: "nextjs" | "html";
}

export const BimsComponentGrid = ({ framework }: BimsComponentGridProps) => {
  const components = [
    {
      id: "Spline",
      name: "Spline",
      description: "This hero section is perfect for those who enjoy 3D.",
      category: "NextJS",
      image: "/images/spline.png",
      link: "/previews/spline"
    },
    {
      id: "Hero Parallax",
      name: "Hero Parallax",
      description: "A scroll effect with rotation, translation and opacity animations.",
      category: "NextJS",
      image: "/images/hero-parallax.png",
      link: "/previews/hero-parallax"
    },
    {
      id: "Timeline",
      name: "Timeline",
      description: "A timeline component with sticky header and scroll beam follow.",
      category: "NextJS",
      image: "/images/timeline.png",
      link: "/previews/timeline"
    },
    {
      id: "GooeyText",
      name: "GooeyText",
      description: "Create a beautiful gooey effect when displaying text.",
      category: "NextJS",
      image: "/images/gooey-text.png",
      link: "/previews/GooeyText"
    },
    {
      id: "anime-navbar",
      name: "anime-navbar",
      description: "A cool and interactive navbar with cute icons",
      category: "NextJS",
      image: "/images/anime-navbar.png",
      link: "/previews/anime-navbar"
    },
    {
      id: "highlighter",
      name: "highlighter",
      description: "A card with a floating marker effect that will leave you spellbound.",
      category: "NextJS",
      image: "/images/highlighter.png",
      link: "/previews/highlighter"
    },
    {
      id: "Floating Button",
      name: "Floating Button",
      description: "A modern floating button that is perfect for your website that wants to look modern and different from the rest.",
      category: "NextJS",
      image: "/images/floating-button.png",
      link: "/previews/floating-button"
    },
    {
      id: "Canvas",
      name: "Canvas",
      description: "Make your website look nicer and more interactive with a hero section with stunning hover effects.",
      category: "NextJS",
      image: "/images/canvas.png",
      link: "/previews/canvas"
    },
    {
      id: "Interactive Icon",
      name: "Interactive Icon",
      description: "If you want to show off your programming language in style, this interactive icon is for you!",
      category: "NextJS",
      image: "/images/interaktif-icon.png",
      link: "/previews/interaktif-icon"
    },
    {
      id: "Scroll Animation",
      name: "Scroll Animation",
      description: "This is a scroll animation tablet component. With this component, your website will be cooler in the eyes of users.",
      category: "NextJS",
      image: "/images/scroll-animation.png",
      link: "/previews/scroll-animation"
    },
    {
      id: "Text Reveal",
      name: "Text Reveal",
      description: "Mousemove effect to reveal text content at the bottom of the card.",
      category: "NextJS",
      image: "/images/text-reveal.png",
      link: "/previews/text-reveal"
    },
    {
      id: "Animate Tabs",
      name: "Animate Tabs",
      description: "Tabs to switch content, click on a tab to check background animation",
      category: "NextJS",
      image: "/images/tabs.png",
      link: "/previews/animate-tabs"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {components.map((component) => (
            <Link key={component.id} href={component.link}>
              <motion.div
                className="relative  group rounded-lg overflow-hidden bg-neutral-900 p-6 border border-neutral-800 hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={component.image}
                    alt={component.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm mb-2 text-blue-500">{component.category}</p>
                  <h2 className="text-xl font-semibold mb-2">
                    {component.name}
                  </h2>
                  <p className="text-sm text-neutral-400">
                    {component.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
