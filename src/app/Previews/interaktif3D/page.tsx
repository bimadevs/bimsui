"use client"
import { SplineSceneBasic } from "@/app/components/UI/interaktif3D/demo";
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState } from "react";

export default function Splite() {

    const [framework, setFramework] = useState<"nextjs" | "html">("html");
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
                    <main className={`pt-20 flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
                        <h1 className="text-3xl font-bold">Spline 3d</h1>
                        <p className="text-muted-foreground mt-2">Tampilan Hero Section 3D Interaktif</p>
                    
                        <div className="w-full h-full">
                        <SplineSceneBasic />
                        </div>

                        
                    
                    </main>
                </div>
            </div>
        </>
    )
}