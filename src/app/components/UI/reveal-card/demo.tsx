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
        text="PHP sangat jelek"
        revealText="JS 100x lebih baik"
      >
        <TextRevealCardTitle>
          Kamu harus melihat ini!
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Ini adalah text-reveal. Hover teks nya, maka teks nya akan berubah
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
