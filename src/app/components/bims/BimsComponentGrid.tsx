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
      description: "Tampilan 3D dengan framer-motion dan Spline",
      category: "NextJS",
      image: "/images/spline.png",
      link: "/previews/spline"
    },
    {
      id: "GooeyText",
      name: "GooeyText",
      description: "Teks Gooey dengan framer-motion",
      category: "NextJS",
      image: "/images/gooey-text.png",
      link: "/previews/GooeyText"
    },
    {
      id: "anime-navbar",
      name: "anime-navbar",
      description: "Sebuah Navbar dengan animasi keren dan hover efek",
      category: "NextJS",
      image: "/images/anime-navbar.png",
      link: "/previews/anime-navbar"
    },
    {
      id: "highlighter",
      name: "highlighter",
      description: "Sebuah card dengan animasi highlight saat hover",
      category: "NextJS",
      image: "/images/highlighter.png",
      link: "/previews/highlighter"
    },
    {
      id: "Floating Button",
      name: "Floating Button",
      description: "Sebuah Floating Button yang modern, sangat cocok untuk website kamu yang ingin terlihat modern dan beda dari yang lain",
      category: "NextJS",
      image: "/images/floating-button.png",
      link: "/previews/floating-button"
    },
    {
      id: "Canvas",
      name: "Canvas",
      description: "Sebuah Hero section dengan effek hover yang memukau, membuat website mu terlihat lebih indah dan interaktif",
      category: "NextJS",
      image: "/images/canvas.png",
      link: "/previews/canvas"
    },
    {
      id: "Interaktif Icon",
      name: "Interaktif Icon",
      description: "Interaktif Icon ini sangat cocok untuk kamu yang pengen pamer langguage program dengan gaya!",
      category: "NextJS",
      image: "/images/interaktif-icon.png",
      link: "/previews/interaktif-icon"
    },
    {
      id: "Scroll Animation",
      name: "Scroll Animation",
      description: "Ini adala sebuah component Scroll animation tablet. Dengan component ini, website mu menjadi lebih keren di mata user",
      category: "NextJS",
      image: "/images/scroll-animation.png",
      link: "/previews/scroll-animation"
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
