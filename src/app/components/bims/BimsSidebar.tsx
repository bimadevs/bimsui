import { motion } from "framer-motion";

interface BimsSidebarProps {
    isOpen: boolean;
    framework: "nextjs" | "html";
    onFrameworkChange: (framework: "nextjs" | "html") => void;
}

// Tambahkan properti isNew pada interface menu item
interface MenuItem {
    name: string;
    href: string;
    isNew?: boolean;
}

export const BimsSidebar = ({ isOpen, framework, onFrameworkChange }: BimsSidebarProps) => {
    const HTML: MenuItem[] = [
        { name: "Button", href: "/html/button" },
        { name: "Card", href: "/html/card" },
        { name: "Forms", href: "/html/forms" },
        { name: "Navigation", href: "/html/navigation" },
        { name: "Modal", href: "/html/modal" },
        { name: "Table", href: "/html/table" },
        { name: "Container", href: "/html/container" },
        { name: "Grid", href: "/html/grid" },
        { name: "Stack", href: "/html/stack" },
        { name: "Installation", href: "/html/installation" },
        { name: "Usage", href: "/html/usage" },
    ].sort((a, b) => a.name.localeCompare(b.name));

    const NextJs: MenuItem[] = [
        { name: "Spline", href: "/previews/spline" },
        { name: "Gooey Text", href: "/previews/GooeyText" },
        { name: "Anime Navbar", href: "/previews/anime-navbar" },
        { name: "Highlighter", href: "/previews/highlighter" },
        { name: "Floating Button", href: "/previews/floating-button" },
        { name: "Canvas", href: "/previews/canvas" },
        { name: "Interaktif Icon", href: "/previews/interaktif-icon" },
        { name: "Scroll Animation", href: "/previews/scroll-animation" },
        { name: "Text Reveal", href: "/previews/text-reveal" },
        { name: "Animate Tabs", href: "/previews/animate-tabs" },
        { name: "Hero Parallax", href: "/previews/hero-parallax" }, 
        { name: "Timeline", href: "/previews/timeline" },
        { name: "Animated Gradient Background", href: "/previews/animated-gradient-background" },
        { name: "Carousel", href: "/previews/carousel" },
        { name: "Link Preview", href: "/previews/link-preview" },
        { name: "Shape Landing Hero", href: "/previews/shape-landing-hero" },
        { name: "3D Card Effect", href: "/previews/3d-card-effect", isNew: true }, // Tandai sebagai new
        { name: "Animated Tooltip", href: "/previews/animated-tooltip", isNew: true }, // Tandai sebagai new
        { name: "Floating Dock", href: "/previews/floating-dock", isNew: true }, // Tandai sebagai new
        { name: "Lens", href: "/previews/lens", isNew: true }, // Tandai sebagai new
    ].sort((a, b) => a.name.localeCompare(b.name));

    const installasi: MenuItem[] = [
        { name: "Install Next.js", href: "/install-nextjs" },
        { name: "Install Tailwind", href: "/install-tailwind" },
        { name: "CLI (Coming Soon)", href: "/cli" },
    ];

    const components = framework === "nextjs" ? NextJs : HTML;

    return (
        <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: isOpen ? 0 : "-100%" }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 border-r bg-background"
        >
            <div className="flex h-full flex-col gap-2 p-4">
                <motion.nav className="mt-6 flex-1 overflow-y-auto">
                    <motion.ul className="space-y-1">
                        <h1 className="font-bold text-xl">Installation</h1>
                        {installasi.map((install, index) => (
                            <motion.li
                                key={install.name}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 0.1 * index,
                                    duration: 0.3,
                                }}
                            >
                                <a
                                    href={install.href}
                                    className="flex justify-between items-center px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-blue-500 hover:translate-x-2 rounded-md transition-all duration-300"
                                >
                                    <span>{install.name}</span>
                                    {install.isNew && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full ml-2"
                                        >
                                            New
                                        </motion.span>
                                    )}
                                </a>
                            </motion.li>
                        ))}
                        <h1 className="font-bold text-xl mt-4">All Components</h1>
                        {components.map((component) => (
                            <motion.li
                                key={component.name}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 0.1 * components.indexOf(component),
                                    duration: 0.3,
                                }}
                            >
                                <a
                                    href={component.href}
                                    className="flex justify-between items-center px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-blue-500 hover:translate-x-2 rounded-md transition-all duration-300"
                                >
                                    <span>{component.name}</span>
                                    {component.isNew && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full mr-2"
                                        >
                                            New
                                        </motion.span>
                                    )}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.nav>
            </div>
        </motion.aside>
    );
};