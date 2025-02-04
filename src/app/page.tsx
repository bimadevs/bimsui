'use client'

import { useState, useEffect } from "react";
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { BimsComponentGrid } from "@/app/components/bims/BimsComponentGrid";
import { FooterDemo } from "./components/bims/footer";
import Loading from "./loading";


export default function Home() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Mengatur sidebar berdasarkan ukuran layar
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    const handleResize = () => {
      setSidebarOpen(mediaQuery.matches);
    };
    
    // Set initial state saat komponen mount
    handleResize();
    
    // Add event listener untuk resize
    mediaQuery.addEventListener('change', handleResize);
    
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

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
  }

  return (
    <div className="min-h-screen bg-background">
      <BimsNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <BimsSidebar
          isOpen={sidebarOpen}
          framework={framework}
          onFrameworkChange={setFramework}
        />
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <div className="p-6">
            <BimsComponentGrid framework={framework} />
          </div>
          <FooterDemo />
        </main>
      </div>
    </div>
  );
}
