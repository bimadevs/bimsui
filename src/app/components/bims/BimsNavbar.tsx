import { Menu } from "lucide-react";

interface BimsNavbarProps {
  onMenuClick: () => void;
}

export const BimsNavbar = ({ onMenuClick }: BimsNavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-[5000000]">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center space-x-4">
          <button className="text-primary-foreground hover:text-primary transition-colors" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </button>
          <a href="/components" className="text-xl font-semibold hover:text-blue-500">BimsUI</a>
        </div>
        {/* <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Request UI
          </a>
        </div> */}
      </div>
    </nav>
  );
};