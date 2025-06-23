import { Card } from "./Card";
import { motion, AnimatePresence  } from "framer-motion";
import Link from "next/link";

interface BimsComponentGridProps {
  framework: "nextjs" | "html";
}

interface ComponentItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  link: string;
  isNew?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
};


export const BimsComponentGrid = ({ framework }: BimsComponentGridProps) => {

  const nextjs: ComponentItem[] = [
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
    {
      id: "Shape Landing Hero",
      name: "Shape Landing Hero",
      description: "a landing hero with a modern look",
      category: "NextJS",
      image: "/images/shape-landing-hero.png",
      link: "/previews/shape-landing-hero"
    },
    {
      id: "Animated Gradient Background",
      name: "Animated Gradient Background",
      description: "A customizable animated radial gradient background with a subtle breathing effect.",
      category: "NextJS",
      image: "/images/animated-gradient-bg.png",
      link: "/previews/animated-gradient-background"
    },
    {
      id: "Carousel",
      name: "Carousel",
      description: "A customizable carousel with microinteractions and slider.      ",
      category: "NextJS",
      image: "/images/carousel.png",
      link: "/previews/carousel"
    },
    {
      id: "link Preveiw",
      name: "link Preveiw",
      description: "Dynamic link previews for your anchor tags.",
      category: "NextJS",
      image: "/images/link-preview.png",
      link: "/previews/link-preview"
    },
    {
      id: "3D Card Effect",
      name: "3D Card Effect",
      description: "Dynamic link previews for your anchor tags.",
      category: "NextJS",
      image: "/images/3d-card-effect.png",
      link: "/previews/3d-card-effect"
    },
    {
      id: "Animated Tooltip",
      name: "Animated Tooltip",
      description: "Dynamic link previews for your anchor tags.",
      category: "NextJS",
      image: "/images/animated-tooltip.png",
      link: "/previews/animated-tooltip"
    },
    {
      id: "Floating Dock",
      name: "Floating Dock",
      description: "Dynamic link previews for your anchor tags.",
      category: "NextJS",
      image: "/images/floating-dock.png",
      link: "/previews/floating-dock"
    },
    {
      id: "Lens",
      name: "Lens",
      description: "Dynamic link previews for your anchor tags.",
      category: "NextJS",
      image: "/images/lens.png",
      link: "/previews/lens"
    },
    {
      id: "Loaders",
      name: "Loaders",
      description: "A cool loaders with React and CSS",
      category: "NextJS",
      image: "/images/loaders.png",
      link: "/previews/loaders",
    },
    {
      id: "Grid Gallery",
      name: "Grid Gallery",
      description: "A grid gallery with smooth animation and filter.",
      category: "NextJS",
      image: "/images/grid-gallery.png",
      link: "/previews/grid-gallery",
    },
    {
      id: "Infinite Marquee",
      name: "Infinite Marquee",
      description: "A infinite marquee for testimonials smooth animation.",
      category: "NextJS",
      image: "/images/marquee.png",
      link: "/previews/infinite-marquee",
    },
    {
      id: "Particle Text",
      name: "Particle Text",
      description: "A particle text cool animation and mouse interaction",
      category: "NextJS",
      image: "/images/particle-text.png",
      link: "/previews/particle-text",
    },
    {
      id: "Visualizer",
      name: "Visualizer",
      description: "A audio visualizer for music with smooth animation and controls.",
      category: "NextJS",
      image: "/images/visualizer.png",
      link: "/previews/visualizer",
    },
    {
      id: "Lightning Text",
      name: "Lightning Text",
      description: "A lightning text with cool animation.",
      category: "NextJS",
      image: "/images/lightning-text.png",
      link: "/previews/lightning-text",
      isNew: true
    },
    {
      id: "Side Panel Video",
      name: "Side Panel Video",
      description: "A side panel video with smooth animation and responsive design",
      category: "NextJS",
      image: "/images/side-panel-video.png",
      link: "/previews/side-panel-video",
      isNew: true
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const html: ComponentItem[] = [
    {
      id: "Card",
      name: "Card",
      description: "A Cool HTML/CSS or Tailwind card component.",
      category: "HTML",
      image: "/images/html/card.png",
      link: "/html/card",
      isNew: true
    },
    {
      id: "Navbar",
      name: "Navbar",
      description: "A cool HTML/CSS or Tailwind navbar component.",
      category: "HTML",
      image: "/images/html/navbar.png",
      link: "/html/navbar",
      isNew: true

    },
    {
      id: "Button",
      name: "Button",
      description: "A cool HTML/CSS or Tailwind button component.",
      category: "HTML",
      image: "/images/html/button.png",
      link: "/html/button",
      isNew: true
    },
    {
      id: "Tooltip",
      name: "Tooltip",
      description: "A cool HTML/CSS or Tailwind tooltip component.",
      category: "HTML",
      image: "/images/html/tooltip.png",
      link: "/html/tooltip",
      isNew: true
    },
    {
      id: "Loaders",
      name: "Loaders",
      description: "A cool HTML/CSS or Tailwind loaders component.",
      category: "HTML",
      image: "/images/html/loaders.png",
      link: "/html/loaders",
      isNew: true
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const components = framework === "nextjs" ? nextjs : html;

  // Urutkan components dengan item "new" di atas
  const sortedComponents = [...components].sort((a, b) => {
    if (a.isNew && !b.isNew) return -1;
    if (!b.isNew && a.isNew) return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="min-h-screen bg-black text-white py-12 md:px-4">
      <div className="max-w-6xl mx-auto">
        <Link target="_blank" href={"https://wa.me/6282254044783"}>
          <button className="bg-slate-800 my-12 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
              <span>✨ Request a component</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </Link>

        {/* Animasi grid container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {sortedComponents.map((component) => (
              <motion.div
                key={component.id}
                variants={itemVariants}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              >
                <Link href={component.link}>
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
                      {component.isNew && (
                        <div className="absolute top-2 right-2">
                          <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                            New
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="text-left">
                      <p className="text-sm mb-2 text-blue-500">{component.category}</p>
                      <h2 className="text-xl font-semibold mb-2">{component.name}</h2>
                      <p className="text-sm text-neutral-400">{component.description}</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
