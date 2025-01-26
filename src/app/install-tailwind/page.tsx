'use client'

import { useState, useEffect } from "react";
import { BimsSidebar } from "../components/bims/BimsSidebar";
import { BimsNavbar } from "../components/bims/BimsNavbar";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck, FaClipboard } from "react-icons/fa";
import { FooterDemo } from "../components/bims/footer";

export default function InsatallTailwind() {
    const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
    const [sidebarOpen, setSidebarOpen] = useState(true);
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

    const createProject = `npx create-next-app@latest my-project --typescript --eslint
cd my-project`

    const installTailwind = `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`

    const TailwindCofig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using \`src\` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
`
    const globalcss = `@tailwind base;
@tailwind components;
@tailwind utilities;`
    const run = `npm run dev`
    const indextsx = `export default function Home() {
    return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
  }`
    return (
        <div className="min-h-screen bg-background">
            <BimsNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex">
                <BimsSidebar
                    isOpen={sidebarOpen}
                    framework={framework}
                    onFrameworkChange={setFramework}
                />

                {/* Main Content */}
                <main className="flex-1 mt-10">
                    <div className={` transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
                        <div className="p-6">
                            <h1 className="text-3xl font-bold mb-6">Install Tailwind CSS</h1>

                            <p className="text-lg text-gray-600 mb-8">
                                Install Tailwind CSS with Next.js
                            </p>

                            <h2 className="text-xl font-semibold mb-4">Create your project</h2>

                            {/* install next js code  */}
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
                                    {createProject}
                                </SyntaxHighlighter>
                                <CopyIcon id="createProject" code={createProject} />
                            </div>

                            <h2 className="text-xl font-semibold mb-4">Install Tailwind CSS</h2>
                            {/* install tailwind code  */}
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
                                    {installTailwind}
                                </SyntaxHighlighter>
                                <CopyIcon id="installNextJs" code={installTailwind} />

                            </div>



                            <h2 className="text-xl font-semibold mb-4">Configure your template paths</h2>
                            <p>tailwind.config.ts</p>
                            {/* konfigure tailwind code  */}
                            <div className="relative mb-8">
                                <SyntaxHighlighter
                                    showLineNumbers={true}
                                    wrapLines={true}
                                    language="typescript"
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
                                    {TailwindCofig}
                                </SyntaxHighlighter>
                                <CopyIcon id="TailwindCofig" code={TailwindCofig} />

                            </div>

                            <h2 className="text-xl font-semibold mb-4">Add the Tailwind directives to your CSS</h2>
                            {/* global.css code  */}
                            <p>global.css</p>
                            <div className="relative mb-8">
                                <SyntaxHighlighter
                                    showLineNumbers={true}
                                    wrapLines={true}
                                    language="typescript"
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
                                    {globalcss}
                                </SyntaxHighlighter>
                                <CopyIcon id="globalcss" code={globalcss} />

                            </div>

                            <h2 className="text-xl font-semibold mb-4">Start your build process</h2>
                            {/* terminal code  */}
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
                                    {run}
                                </SyntaxHighlighter>
                                <CopyIcon id="run" code={run} />

                            </div>


                            <h2 className="text-xl font-semibold mb-4">Start using Tailwind</h2>
                            {/* index.tsx code  */}
                            <p>page.tsx</p>
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
                                    {indextsx}
                                </SyntaxHighlighter>
                                <CopyIcon id="indextsx" code={indextsx} />

                            </div>
                        </div>
                        <FooterDemo />
                    </div>
                </main>
            </div>
        </div>
    );
}