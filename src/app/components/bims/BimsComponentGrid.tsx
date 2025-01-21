import { Card } from "./Card";
import { motion } from "framer-motion";
import Link from "next/link";

interface BimsComponentGridProps {
  framework: "nextjs" | "html";
}

export const BimsComponentGrid = ({ framework }: BimsComponentGridProps) => {
  const components = [
    {
      id: "button",
      name: "Button",
      description: "Clickable button element with various styles and states",
      category: "Basic",
      image: "/placeholder.svg",
      link: "/Previews/interaktif3D"
    },
    {
      id: "card",
      name: "Card",
      description: "Container for content with optional header and footer",
      category: "Layout",
      image: "/placeholder.svg",
      link: "/components/card"
    },
    {
      id: "input",
      name: "Input",
      description: "Text input field with various states and validations",
      category: "Form",
      image: "/placeholder.svg",
      link: "/components/input"
    },
    {
      id: "modal",
      name: "Modal",
      description: "Overlay dialog for important content and actions",
      category: "Overlay",
      image: "/placeholder.svg",
      link: "/components/modal"
    },
    {
      id: "table",
      name: "Table",
      description: "Data table with sorting and pagination",
      category: "Data Display",
      image: "/placeholder.svg",
      link: "/components/table"
    },
    {
      id: "navigation",
      name: "Navigation",
      description: "Navigation components including navbar and breadcrumbs",
      category: "Navigation",
      image: "/placeholder.svg",
      link: "/components/navigation"
    },
  ];

  return (
    <div className="pt-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Components</h1>
        <p className="text-muted-foreground mt-2">
          Beautiful, reusable components built with Tailwind CSS and {framework === "nextjs" ? "Next.js" : "HTML"}.
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
