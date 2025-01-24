"use client";
import Link from "next/link";

import { Icons } from "./icon";
import { Button } from "./button";

function Footer() {
  return (
    <footer className=" py-12 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <h2 className="text-lg font-bold">BimsUI</h2>
            </Link>

            <h1 className="dark:text-gray-300 mt-4">
              Build by{" "}
              <span className="dark:text-[#039ee4]">
                <Link href="https://instagram.com/biimaa_jo">@bimadev</Link>
              </span>
            </h1>
            <p className="text-sm dark:text-gray-400 mt-5">
              © {new Date().getFullYear()} BimsUI. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/install-nextjs" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Install NextJs
                  </Link>
                </li>
                <li>
                  <Link href="/install-tailwind" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Install Tailwind
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                {/* <li>
                  <Link href="https://github.com/bimadevs" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Github
                  </Link>
                </li> */}
                <li>
                  <Link href="https://instagram.com/biimaa_jo" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/6282254044783" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Terima Kasih</h3>
              {/* <h3 className="font-semibold mb-4">Legal</h3> */}
              {/* <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/tos" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              
              </ul> */}
            </div>
          </div>
        </div>
        <div className=" w-full flex mt-4 items-center justify-center   ">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
            BimsUI
          </h1>
        </div>
      
      </div>
    </footer>
  );
}

export { Footer };
