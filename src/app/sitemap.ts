import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date();

    return [
        {
            url: "https://ui.bimadev.xyz",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://ui.bimadev.xyz/install-nextjs",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://ui.bimadev.xyz/install-tailwind",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://ui.bimadev.xyz/previews/3d-card-effect",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/animate-tabs",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/animated-gradient-background",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/anime-navbar",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/canvas",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/carousel",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/floating-button",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/floating-dock",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/GooeyText",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/hero-parallax",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/highlighter",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/interaktif-icon",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/lens",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/link-preview",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/scroll-animation",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/shape-landing-hero",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/spline",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/text-reveal",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/previews/timeline",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/html/button",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/html/card",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/html/navbar",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ui.bimadev.xyz/html/tooltip",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ];
}