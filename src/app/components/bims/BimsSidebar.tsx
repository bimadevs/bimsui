import { motion } from "framer-motion";

interface BimsSidebarProps {
    isOpen: boolean;
    framework: "nextjs" | "html";
    onFrameworkChange: (framework: "nextjs" | "html") => void;
}

export const BimsSidebar = ({ isOpen, framework, onFrameworkChange }: BimsSidebarProps) => {
    const HTML = [
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
    ];

    const NextJs = [
        { name: "Spline", href: "/previews/spline" },
        { name: "Gooey Text", href: "/previews/GooeyText" },
        { name: "Anime Navbar", href: "/previews/anime-navbar" },
        { name: "Highlighter", href: "/previews/highlighter" },
        { name: "Floating Button", href: "/previews/floating-button" },
        { name: "Canvas", href: "/previews/canvas" },
        { name: "Interaktif Icon", href: "/previews/interaktif-icon" },
        { name: "Scroll Animation", href: "/previews/scroll-animation" },
    ];

    const installasi = [
        { name: "Install Next.js", href: "/install-nextjs"},
        { name: "Install Tailwind", href: "/install-tailwind"},
        { name: "CLI (Coming Soon)", href: "/cli"},
    ]

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
                {/* <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <motion.button
                            onClick={() => onFrameworkChange("nextjs")}
                            className={`flex-1 border rounded-md px-3 py-1 text-sm transition-colors ${
                                framework === "nextjs"
                                    ? "bg-blue-500 text-white"
                                    : "bg-transparent text-white"
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Next.js
                        </motion.button>
                        <motion.button
                            onClick={() => onFrameworkChange("html")}
                            className={`flex-1 border rounded-md px-3 py-1 text-sm transition-colors ${
                                framework === "html"
                                    ? "bg-blue-500 text-white"
                                    : "bg-transparent text-white"
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            HTML
                        </motion.button>
                    </div>
                </div> */}
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
                                    className="block px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-blue-500 rounded-md transition-colors"
                                >
                                    {install.name}
                                </a>
                            </motion.li>
                        ))}
                        <h1 className="font-bold text-xl">All Components</h1>
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
                                    className="block px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-blue-500 rounded-md transition-colors"
                                >
                                    {component.name}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.nav>
            </div>
        </motion.aside>
    );
};
