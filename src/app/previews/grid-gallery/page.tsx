"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck } from 'react-icons/fa'; // Menggunakan ikon copy dari react-icons
import { FooterDemo } from "@/app/components/bims/footer";
import Loading from "@/app/loading";
import { DynamicGridGalleryDemo } from "@/app/components/nextjs/grid-gallery/demo";

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
import { DynamicGridGallery } from "@/app/components/ui/grid-gallery"

export function DynamicGridGalleryDemo() {
  return <DynamicGridGallery />
}`;

  const Code = `"use client"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiSearch, FiFilter } from "react-icons/fi"

interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  size: "large" | "medium" | "small"
  tags: string[]
}

const sampleItems: GalleryItem[] = [
  {
    id: 1,
    title: "Mountain Landscape",
    category: "nature",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    size: "large",
    tags: ["mountain", "landscape", "scenic"]
  },
  {
    id: 2,
    title: "Urban Architecture",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
    size: "medium",
    tags: ["building", "city", "modern"]
  },
  {
    id: 3,
    title: "Abstract Art",
    category: "art",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8",
    size: "small",
    tags: ["colorful", "abstract", "design"]
  },
  {
    id: 4,
    title: "Ocean Waves",
    category: "nature",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
    size: "medium",
    tags: ["water", "ocean", "waves"]
  },
  {
    id: 5,
    title: "Street Photography",
    category: "urban",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    size: "large",
    tags: ["street", "people", "city"]
  },
  // Tambahkan lebih banyak item sesuai kebutuhan
]

const categories = ["all", "nature", "architecture", "art", "urban"]

export const DynamicGridGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredItems, setFilteredItems] = useState(sampleItems)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [layout, setLayout] = useState<"grid" | "masonry">("grid")
  const containerRef = useRef<HTMLDivElement>(null)

  // Filter items based on category and search
  useEffect(() => {
    let filtered = sampleItems
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    
    setFilteredItems(filtered)
  }, [selectedCategory, searchQuery])

  const getItemStyle = (size: GalleryItem["size"]) => {
    if (layout === "grid") {
      switch (size) {
        case "large":
          return "col-span-2 row-span-2"
        case "medium":
          return "col-span-1 row-span-2"
        default:
          return "col-span-1 row-span-1"
      }
    }
    return ""
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      {/* Controls */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search */}
          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={\`px-4 py-2 rounded-full text-sm font-medium transition-all
                  \${selectedCategory === category 
                    ? "bg-purple-500 text-white" 
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }\`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Layout Toggle */}
          <motion.button
            onClick={() => setLayout(prev => prev === "grid" ? "masonry" : "grid")}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiFilter size={20} />
          </motion.button>
        </div>

        {/* Gallery Grid */}
        <motion.div
          ref={containerRef}
          className={\`grid gap-4 \${
            layout === "grid" 
              ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px]"
              : "columns-1 md:columns-3 lg:columns-4"
          }\`}
          layout
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layoutId={\`item-\${item.id}\`}
                className={\`relative group \${getItemStyle(item.size)}\`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  {/* Image */}
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                    animate={{
                      opacity: hoveredItem === item.id ? 1 : 0
                    }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-lg font-bold mb-1">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-white/20 rounded-full text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
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

  const judul = "Grid Gallery"
  const deskripsi = "A grid gallery with smooth animation and filter."
  const namaFile = "grid-gallery"

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
                <DynamicGridGalleryDemo />
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
