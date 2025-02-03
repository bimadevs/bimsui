"use client"
import { BimsNavbar } from "@/app/components/bims/BimsNavbar";
import { BimsSidebar } from "@/app/components/bims/BimsSidebar";
import { useState, useEffect } from "react";
import { FooterDemo } from "@/app/components/bims/footer";
import { CodeBlock } from "@/app/components/bims/CodeBlok";
import { NavbarOne, NavbarThree, NavbarTwo } from "@/app/components/html/navbar";
import { Cardfour, CardOne, CardThree, CardTwo } from "@/app/components/html/card";

export default function FloatingDoctPreview() {
  const [framework, setFramework] = useState<"html" | "nextjs">("nextjs");
  const [sidebarOpen, setSidebarOpen] = useState(false);
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


  const html1 = `<div class="relative duration-300  hover:-rotate-0  -rotate-12 group border border-sky-900 border-4  overflow-hidden rounded-2xl relative h-52 w-72 bg-sky-800 p-5 flex flex-col items-start gap-4">
  <div class="text-gray-50">
    <span class="font-bold text-5xl">Jr</span>
    <p class="text-xs">Frontend Developer</p>
  </div>
  <button class="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">Dowload CV 
    <svg class="w-6 h-6 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
 <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fill-rule="evenodd">
 </path>
</svg>
  </button>

  <svg class="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-miterlimit="10" stroke-width="5"></path></svg>

  <svg class="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-miterlimit="10" stroke-width="2"></path></svg>

  
</div>`


  const html2 = `<div class="card">
  <div
    class="relative bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center"
  >
    <div
      class="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16"
    >
      <p class="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
        Thank You
      </p>
      <p class="px-10 text-[10px] sm:text-[12px] text-gray-700">
        It’s so nice that you had the time to view this idea
      </p>
      <p class="font-serif text-[10px] sm:text-[12px text-gray-700">
        Wishing you a fantastic day ahead!
      </p>
      <p class="font-sans text-[10px] text-gray-700 pt-5">Bima Jovanta</p>
    </div>
    <button
      class="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900"
    >
      BimsUI
    </button>
    <div
      class="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
    ></div>
    <div
      class="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
    ></div>
    <div
      class="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
    ></div>
    <div
      class="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
    ></div>
  </div>
</div>
`;


  const html3 = `/* From Uiverse.io by Bima Jovanta */ 
<div
  class="product-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
>
  <div class="para uppercase text-center leading-none z-40">
    <p
      style="-webkit-text-stroke: 1px rgb(207, 205, 205);
                -webkit-text-fill-color: transparent;"
      class="z-10 font-bold text-lg -mb-5 tracking-wider text-gray-500"
    >
      New Product
    </p>
    <p class="font-bold text-xl tracking-wider text-[#495c48] z-30">
      New Product
    </p>
  </div>
  <div
    class="w-[180px] aspect-square relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-[#7b956a] after:top-8 after:left-0 after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-20 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-1/2 group-hover:translate-x-1/2 transition-all duration-300"
  >
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      text-rendering="geometricPrecision"
      shape-rendering="geometricPrecision"
      image-rendering="optimizeQuality"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <linearGradient
        y2="0"
        y1="512"
        x2="256"
        x1="256"
        gradientUnits="userSpaceOnUse"
        id="id0"
      >
        <stop stop-color="#495c48" offset="0"></stop>
        <stop stop-color="#9db891" offset=".490196"></stop>
        <stop stop-color="#7b956a" offset="1"></stop>
      </linearGradient>
      <g id="Layer_x0020_1">
        <path
          fill="url(#id0)"
          d="m310 512h-108c-16.4 0-31.9-6.5-43.7-18.3s-18.3-27.3-18.3-43.7v-261c0-29.8 24.2-54 54-54h123c30.3 0 55 24.2 55 54v261c0 16.4-6.5 31.9-18.3 43.7s-27.3 18.3-43.7 18.3zm-90-439v-34c0-23 9.9-39 24-39h24c13.5 0 24 17.1 24 39v34zm-33 48.36v-27.36c0-3.9 3.1-7 7-7h124c3.9 0 7 3.1 7 7v27.46c-2.63-.3-5.3-.46-8-.46h-123c-2.36 0-4.7.12-7 .36zm69 71.6c-33.94 54.87-38.25 93.49-29.7 116.4 5.82 15.59 17.8 23.39 29.7 23.39s23.88-7.8 29.7-23.39c8.55-22.91 4.24-61.53-29.7-116.4zm-42.77 121.27c-10.32-27.64-5.23-73.83 36.85-137.91.52-.84 1.22-1.57 2.09-2.14 3.22-2.12 7.54-1.22 9.65 1.99 42.17 64.16 47.27 110.4 36.95 138.06-8.09 21.68-25.39 32.52-42.77 32.52s-34.68-10.84-42.77-32.52zm102.27 126.87c-2.8 0-5.9-.4-9.3-1.3-.1 0-.1 0-.2 0-14-4.2-21.8-18.1-17.7-31.7.1-.4.3-.8.4-1.1.2-.4.4-.8.6-1.3.8-1.9 1.9-4.3 3.8-6.5 24.5-50.8 21.9-118.2 21.9-118.9-.1-3.5 2.3-6.5 5.7-7.2s6.8 1.3 7.9 4.6c3.3 9.6 11.2 41 15.2 73.2 5.1 42 1.8 69.7-9.9 82.2-3.7 4-9.6 8-18.4 8zm-5.6-14.8c8 2.2 11.7-.5 13.7-2.7 12.5-13.4 9.3-57.7 2.8-94.5-2.9 23.5-8.9 51.9-21.2 76.9-.3.7-.8 1.3-1.3 1.9-.6.6-1.3 2.1-1.8 3.4-.2.4-.4.8-.5 1.2-1.5 5.9 2.1 11.9 8.3 13.8zm-113.4 14.8c-8.9 0-14.8-4-18.4-7.9-11.7-12.5-15-40.2-9.9-82.2 3.9-32.2 11.8-63.6 15.2-73.2 1.1-3.3 4.5-5.2 8-4.6 3.4.7 5.8 3.8 5.6 7.3 0 .7-3.5 68 21.8 118.6 1.9 2.2 3 4.7 3.9 6.6.2.5.4.9.6 1.3s.3.7.4 1.1c4.1 13.6-3.7 27.5-17.7 31.7-.1 0-.1 0-.2 0-3.4.9-6.5 1.3-9.3 1.3zm-11.2-110.6c-6.3 36.5-9.3 79.8 3.1 93.1 2 2.2 5.7 4.8 13.7 2.7 6.3-1.9 9.9-7.9 8.4-13.8-.2-.4-.4-.8-.5-1.2-.5-1.2-1.2-2.7-1.8-3.4-.5-.5-1-1.1-1.3-1.8-12.7-24.5-18.7-52.3-21.6-75.6z"
        ></path>
      </g>
    </svg>
    <div
      class="tooltips absolute top-0 left-0 -translate-x-[150%] p-2 flex flex-col items-start gap-10 transition-all duration-300 group-hover:-translate-x-full"
    >
      <p
        class="text-[#7b956a] font-semibold text-xl uppercase group-hover:delay-1000 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500"
      >
        Toner
      </p>
      <ul class="flex flex-col items-start gap-2">
        <li
          class="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500"
        >
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="3"
            class="stroke-[#495c48]"
            stroke="#000000"
            fill="none"
            viewBox="0 0 24 24"
            height="10"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <p class="text-xs font-semibold text-[#495c48]">Hydration</p>
        </li>
        <li
          class="inline-flex gap-2 items-center justify-center group-hover:delay-300 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500"
        >
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="3"
            class="stroke-[#495c48]"
            stroke="#000000"
            fill="none"
            viewBox="0 0 24 24"
            height="10"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <p class="text-xs font-semibold text-[#495c48]">
            Protect Skin Barrier
          </p>
        </li>
        <li
          class="inline-flex gap-2 items-center justify-center group-hover:delay-400 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500"
        >
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="3"
            class="stroke-[#495c48]"
            stroke="#000000"
            fill="none"
            viewBox="0 0 24 24"
            height="10"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <p class="text-xs font-semibold text-[#495c48]">Reduce Winkles</p>
        </li>
        <li
          class="inline-flex gap-2 items-center justify-center group-hover:delay-500 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500"
        >
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="3"
            class="stroke-[#495c48]"
            stroke="#000000"
            fill="none"
            viewBox="0 0 24 24"
            height="10"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <p class="text-xs font-semibold text-[#495c48]">Anti Inflammatory</p>
        </li>
      </ul>
    </div>
  </div>
</div>`
  const html4 = `<div class="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
  <div class="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
  <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
    <span class="text-2xl font-semibold">Bima Jovanta</span>
    <p>Fullstack Developer</p>
  </div>
  <a class="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500" href="#">Folow</a>
</div>`

  const judul = "Card"
  const deskripsi = "A cool Cards with html and css or tailwind"


  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <BimsNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <BimsSidebar
          isOpen={sidebarOpen}
          framework={framework}
          onFrameworkChange={setFramework}
        />
        <main className="pt-20 flex-1 w-[100vw] ">
          <div className={`transition-all px-10 duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className="p-6">
              <h1 className="text-3xl font-bold">{judul}</h1>
              <p className="text-muted-foreground mt-2">{deskripsi}</p>

            </div>

            <div className=" border-dashed border-2 p-4 mt-4 flex justify-center items-center">
              <CardOne />
            </div>
            <div className="mt-4 ">
              {/* card 1 */}
              <CodeBlock
                language="html"
                filename="index.html + tailwindcsss"
                code={html1}
              />
            </div>

            <div className=" border-dashed border-2 p-4 mt-10 flex justify-center items-center">
              <CardTwo />
            </div>
            <div className="mt-4 ">
              {/* card 2 */}
               <CodeBlock
                language="html"
                filename="index.html + tailwindcsss"
                code={html2}
              />
            </div>
            <div className=" border-dashed border-2 p-4 mt-10 flex justify-center items-center">
              <CardThree />
            </div>
            <div className="mt-4 ">
              {/* navbar 1 */}
              <CodeBlock
                language="html"
                filename="index.html + tailwindcsss"
                code={html3}
              />
            </div>
            <div className=" border-dashed border-2 p-4 mt-10 flex justify-center items-center">
              <Cardfour />
            </div>
            <div className="mt-4 ">
              {/* navbar 1 */}
              <CodeBlock
                language="html"
                filename="index.html + tailwindcsss"
                code={html4}
              />
            </div>
          </div>
          <FooterDemo />
        </main>
      </div>
    </div>
  );
}
