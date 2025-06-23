'use client'

import { AudioVisualizerDemo } from "../components/nextjs/audio-visualizer/demo"
import { DynamicGridGalleryDemo } from "../components/nextjs/grid-gallery/demo"
import { InfiniteMarqueeDemo } from "../components/nextjs/infinite-marquee/demo"
import { DemoLightningText } from "../components/nextjs/lightning-text/demo"
import { ParticleTextDemo } from "../components/nextjs/particle-text/demo"
import VideoSectionDemo from "../components/nextjs/side-panel-video/demo"
export default function pict() {
    return (
        <div className="flex justify-center items-center h-screen">
            {/* <AudioVisualizerDemo /> */}
            {/* <InfiniteMarqueeDemo /> */}
            {/* <DynamicGridGalleryDemo /> */}
            {/* <ParticleTextDemo /> */}
            {/* <DemoLightningText /> */}
            <VideoSectionDemo />
            
            {/* <h1>Hayoo ngapain kamu disini</h1> */}
        </div>
    )
}