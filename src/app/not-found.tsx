'use client'

import { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'


const Custom404: NextPage = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center"
      >
        <div className="relative inline-block">
          <span className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            404
          </span>
          <div className="absolute inset-0 bg-white/10 blur-3xl -z-10 rounded-full animate-pulse" />
        </div>

        <h1 className="text-4xl font-bold mt-8 mb-4">
        Oops! Page Not Found
        </h1>

        <p className="text-lg text-gray-300 mb-8">
        Looks like you're lost in space... Let's go home!
        </p>

        <div className="group relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <Link
            href="/"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg group-hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="mt-12 space-y-4">
          <p className="text-gray-400">Or Try:</p>
          <div className="flex justify-center space-x-4">
            {/* Button Reload */}
            <button
              onClick={() => router.refresh()}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors border border-gray-700 rounded-lg hover:border-purple-500 hover:bg-purple-500/10"
            >
              Reload Page
            </button>

            {/* Button WhatsApp */}
            <button
              aria-label="Hubungi Support via WhatsApp"
              onClick={() => window.open('https://wa.me/6282254044783', '_blank')} // Ganti nomor WhatsApp
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors border border-gray-700 rounded-lg hover:border-pink-500 hover:bg-pink-500/10"
            >
              Call Support
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Custom404;