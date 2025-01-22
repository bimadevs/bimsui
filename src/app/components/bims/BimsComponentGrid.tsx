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
      image: "/placeholder.svg",
      link: "/previews/spline"
    },
    {
      id: "GooeyText",
      name: "GooeyText",
      description: "Teks Gooey dengan framer-motion",
      category: "NextJS",
      image: "/placeholder.svg",
      link: "/previews/GooeyText"
    },
    {
      id: "anime-navbar",
      name: "anime-navbar",
      description: "Sebuah Navbar dengan animasi keren dan hover efek",
      category: "NextJS",
      image: "/placeholder.svg",
      link: "/previews/anime-navbar"
    },
    {
      id: "highlighter",
      name: "highlighter",
      description: "Sebuah card dengan animasi highlight saat hover",
      category: "NextJS",
      image: "/placeholder.svg",
      link: "/previews/highlighter"
    },
  ];

  return (
    <div className="pt-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Components</h1>
        <p className="text-muted-foreground mt-2">
          UI Component keren dan modern
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <Link key={component.id} href={component.link}>
            <motion.article
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer rounded-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img
                  src={component.image}
                  alt={component.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="inline-block px-2 py-1 mb-2 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  {component.category}
                </div>
                <h3 className="text-lg font-semibold">{component.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {component.description}
                </p>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </div>
  );
};
