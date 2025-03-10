"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "./link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          Framer Motion
        </LinkPreview>{" "}
        are a great way to build modern websites.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://ui.bimadev.xyz"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          BimsUI
        </LinkPreview>{" "}
        for amazing Tailwind and Framer Motion components.
      </p>
    </div>
  );
}
