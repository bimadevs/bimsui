'use client'

import { useState, useEffect } from "react";
import { BimsSidebar } from "../components/bims/BimsSidebar";
import { BimsNavbar } from "../components/bims/BimsNavbar";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Pilih style sesuai keinginan
import { FaRegCopy, FaCheck, FaClipboard } from "react-icons/fa";
import { FooterDemo } from "../components/bims/footer";
import Loading from "../loading";

export default function InstallNextJs() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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
};

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
                  {prompt}
                </SyntaxHighlighter>
                <CopyIcon id="prompt" code={prompt} />

              </div>

              <h2 className="text-xl font-semibold mb-4">Start the app</h2>
              {/* prompt code  */}
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
