import { motion } from "framer-motion";

interface BimsSidebarProps {
    isOpen: boolean;
    framework: "nextjs" | "html";
    onFrameworkChange: (framework: "nextjs" | "html") => void;
}

export const BimsSidebar = ({ isOpen, framework, onFrameworkChange }: BimsSidebarProps) => {

    const HTML = [
        "button",
        "card",
        "forms",
        "navigation",
        "modal",
        "table",
        "container",
        "grid",
        "stack",
        "installation",
        "usage",
    ];
    const NextJs = ["Hero", "Navbar", "Footer"];

    const components = framework === "html" ? HTML : NextJs;

    return (
        <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: isOpen ? 0 : "-100%" }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 border-r bg-background"
        >
            <div className="flex h-full flex-col gap-2 p-4">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <motion.button
                            onClick={() => onFrameworkChange("html")}
                            className= "flex-1 border rounded-md px-3 py-1 text-sm transition-colors"
                            whileHover={{ scale: 1.1, backgroundColor: "#3498db", color: "#fff" }}
                            whileTap={{ scale: 0.95, }}
                        >
                            HTML
                        </motion.button>
                        <motion.button
                            onClick={() => onFrameworkChange("nextjs")}
                            className= "flex-1 border rounded-md px-3 py-1 text-sm transition-colors"
                            whileHover={{ scale: 1.1, backgroundColor: "#3498db", color: "#fff" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Next.js
                        </motion.button>
                    </div>
                </div>
                <motion.nav className="mt-6 flex-1 overflow-y-auto">
                    <motion.ul className="space-y-1">
                        {components.map((component) => (
                            <motion.li
                                key={component}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 * components.indexOf(component), duration: 0.3 }}
                            >
                                <a
                                    href="#"
                                    className="block px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                                >
                                    {component.charAt(0).toUpperCase() + component.slice(1)}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.nav>
            </div>
        </motion.aside>
    );
};
