'use client'

import { useState } from "react";
import { BimsSidebar } from "../components/bims/BimsSidebar";
import { BimsNavbar } from "../components/bims/BimsNavbar";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaClipboard } from "react-icons/fa";
import { FooterDemo } from "../components/bims/footer";

export default function InsatallTailwind() {
    const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Fungsi untuk menyalin kode ke clipboard
    const copyToClipboard = (code: string) => {
        navigator.clipboard.writeText(code)
            .then(() => {
                console.log("Kode berhasil disalin ke clipboard");
            })
            .catch((error) => {
                console.error("Gagal menyalin kode ke clipboard:", error);
            });
    };

const createProject = `npx create-next-app@latest my-project --typescript --eslint
cd my-project`

const installTailwind = `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`

const TailwindCofig =`/** @type {import('tailwindcss').Config} */
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
        <div className="flex min-h-screen bg-background">
            <BimsNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex">
                <BimsSidebar
                    isOpen={sidebarOpen}
                    framework={framework}
                    onFrameworkChange={setFramework}
                />

                {/* Main Content */}
                <main className={`flex-1 mt-10 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl font-bold mb-6">Install Tailwind CSS</h1>

                        <p className="text-lg text-gray-600 mb-8">
                            Install Tailwind CSS with Next.js
                        </p>

                        <h2 className="text-xl font-semibold mb-4">Create your project</h2>

                        {/* install next js code  */}
                        <div className="relative mb-8">
                            <SyntaxHighlighter
                                language="bash"
                                style={nightOwl}
                                customStyle={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    backgroundColor: '#1e1e1e',
                                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                                }}>
                                {createProject}
                            </SyntaxHighlighter>
                            <FaClipboard
                                onClick={() => copyToClipboard(createProject)}
                                className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                            />
                        </div>

                        <h2 className="text-xl font-semibold mb-4">Install Tailwind CSS</h2>
                        {/* install tailwind code  */}
                        <div className="relative mb-8">
                            <SyntaxHighlighter
                                language="bash"
                                style={nightOwl}
                                customStyle={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    backgroundColor: '#1e1e1e',
                                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                                }}>
                                {installTailwind}
                            </SyntaxHighlighter>
                            <FaClipboard
                                onClick={() => copyToClipboard(installTailwind)}
                                className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                            />
                        </div>

        

                        <h2 className="text-xl font-semibold mb-4">Configure your template paths</h2>
                        <p>tailwind.config.ts</p>
                        {/* konfigure tailwind code  */}
                        <div className="relative mb-8">
                            <SyntaxHighlighter
                                language="typescript"
                                style={nightOwl}
                                customStyle={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    backgroundColor: '#1e1e1e',
                                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                                }}>
                                {TailwindCofig}
                            </SyntaxHighlighter>
                            <FaClipboard
                                onClick={() => copyToClipboard(TailwindCofig)}
                                className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                            />
                        </div>

                        <h2 className="text-xl font-semibold mb-4">Add the Tailwind directives to your CSS</h2>
                        {/* global.css code  */}
                        <p>global.css</p>
                        <div className="relative mb-8">
                            <SyntaxHighlighter
                                language="typescript"
                                style={nightOwl}
                                customStyle={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    backgroundColor: '#1e1e1e',
                                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                                }}>
                                {globalcss}
                            </SyntaxHighlighter>
                            <FaClipboard
                                onClick={() => copyToClipboard(globalcss)}
                                className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                            />
                        </div>

                        <h2 className="text-xl font-semibold mb-4">Start your build process</h2>
                        {/* terminal code  */}
                        <div className="relative mb-8">
                            <SyntaxHighlighter
                                language="bash"
                                style={nightOwl}
                                customStyle={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    backgroundColor: '#1e1e1e',
                                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                                }}>
                                {run}
                            </SyntaxHighlighter>
                            <FaClipboard
                                onClick={() => copyToClipboard(run)}
                                className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                            />
                        </div>


                        <h2 className="text-xl font-semibold mb-4">Start using Tailwind</h2>
                        {/* index.tsx code  */}
                        <p>page.tsx</p>
                        <div className="relative mb-8">
                            <SyntaxHighlighter
                                language="tsx"
                                style={nightOwl}
                                customStyle={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    backgroundColor: '#1e1e1e',
                                    whiteSpace: 'pre-wrap', // Membungkus kode agar tidak meluas
                                    wordBreak: 'break-word', // Menambahkan pemutusan kata agar tidak melebihi batas
                                }}>
                                {indextsx}
                            </SyntaxHighlighter>
                            <FaClipboard
                                onClick={() => copyToClipboard(indextsx)}
                                className="absolute right-4 top-4 text-white text-2xl cursor-pointer hover:text-blue-500"
                            />
                        </div>
                    </div>
                    <FooterDemo />
                </main>
            </div>
        </div>
    );
}