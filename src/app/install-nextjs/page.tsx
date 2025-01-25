'use client'

import { useState } from "react";
import { BimsSidebar } from "../components/bims/BimsSidebar";
import { BimsNavbar } from "../components/bims/BimsNavbar";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaCheck, FaClipboard } from "react-icons/fa";
import { FooterDemo } from "../components/bims/footer";

export default function InstallNextJs() {
    const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
    const [sidebarOpen, setSidebarOpen] = useState(true);  
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
            <FaCheck className="text-green-500 text-xl transition-all duration-300" />
          ) : (
            <h1
            className="text-gray-400 text-lg cursor-pointer hover:text-blue-500 transition-colors" 
            onClick={() => copyToClipboard(code, id)}>
              salin
            </h1>
          )}
        </div>
      );

    const installNextJs = `npx create-next-app@latest`
    const prompt = `What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use \`src/\` directory? No / Yes
Would you like to use App Router ? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
`
    const start = `cd my-app
npm run dev`

    return (
        <div className=" min-h-screen bg-background">
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
                            <h1 className="text-3xl font-bold mb-6">Install Next.js</h1>


                            <p className="text-lg text-gray-600 mb-8">
                                Install Next.js with Create Next App
                            </p>

                            <h2 className="text-xl font-semibold mb-4">Create a new project</h2>

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
                                    {installNextJs}
                                </SyntaxHighlighter>
                                <CopyIcon id="installNextJs" code={installNextJs} />
                            </div>

                            <p className="mb-6 text-gray-600">
                                Saat proses install, kamu akan melihat prompt seperti ini
                            </p>
                            {/* prompt code  */}
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
                                    {prompt}
                                </SyntaxHighlighter>
                                <CopyIcon id="prompt" code={prompt} />

                            </div>

                            <h2 className="text-xl font-semibold mb-4">Start the app</h2>
                            {/* prompt code  */}
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
                                    {start}
                                </SyntaxHighlighter>
                                <CopyIcon id="start" code={start} />

                            </div>
                        </div>
                    <FooterDemo />
                    </div>
                </main>
            </div>
        </div>
    );
}
