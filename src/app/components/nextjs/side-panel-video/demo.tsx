"use client"

import React, { useState } from "react"
import { Button } from "./button"
import { Component, YoutubeVideo } from "./side-panel-video"
import { cn } from "@/lib/utils"

const VideoSectionDemo = () => {
  const [videoOpen, setVideoOpen] = useState(false)

  const handleVideoOpen = () => {
    setVideoOpen(!videoOpen)
  }

  const renderVideoButton = (toggleFunction: () => void) => (
    <div
      className={cn(
        "flex items-center w-full justify-start pr-4 md:pl-4 py-1 md:py-1",
        videoOpen ? "pr-3" : ""
      )}
    >
      <p className="text-xl font-black tracking-tight text-gray-900 sm:text-3xl">
        <span className="bg-gradient-to-t from-neutral-200 to-stone-300 bg-clip-text font-brand text-xl font-bold text-transparent sm:text-6xl">
          video
        </span>
      </p>
      <Button
        className="rounded-r-[33px] py-8 ml-2 "
        onClick={toggleFunction}
        variant="secondary"
      >
        {videoOpen ? "close" : "open"}
      </Button>
    </div>
  )

  return (
    <div className="w-full max-w-4xl">
      <div className="min-h-[500px]  flex flex-col justify-center border border-dashed rounded-lg space-y-4">
        <Component
          panelOpen={videoOpen}
          handlePanelOpen={handleVideoOpen}
          renderButton={renderVideoButton}
        >
          <YoutubeVideo
            videoOpen={videoOpen}
            url={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
          />
        </Component>
      </div>
    </div>
  )
}
export default VideoSectionDemo