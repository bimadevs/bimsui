"use client"
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${selectedCategory === category 
                    ? "bg-purple-500 text-white" 
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
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
          className={`grid gap-4 ${
            layout === "grid" 
              ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px]"
              : "columns-1 md:columns-3 lg:columns-4"
          }`}
          layout
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layoutId={`item-${item.id}`}
                className={`relative group ${getItemStyle(item.size)}`}
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
} 