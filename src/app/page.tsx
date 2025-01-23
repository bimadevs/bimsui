'use client'

import { useState } from "react";
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { BimsComponentGrid } from "@/app/components/bims/BimsComponentGrid";

export default function Home() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <div className="min-h-screen bg-background">
        <BimsNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex">
          <BimsSidebar
            isOpen={sidebarOpen}
            framework={framework}
            onFrameworkChange={setFramework}
          />
          <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <BimsComponentGrid framework={framework} />
          </main>
        </div>
      </div>
    </>
  );
}
