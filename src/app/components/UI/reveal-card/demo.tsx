"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="PHP is really bad"
        revealText="Wait... Just Kidding"
      >
        <TextRevealCardTitle>
        You must watch it!
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        This is text-reveal. Hover the text, then you will see the truth
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
