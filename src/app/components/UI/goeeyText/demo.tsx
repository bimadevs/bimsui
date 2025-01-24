import * as React from "react";
import { GooeyText } from "./gooey-text-morphing";

function GooeyTextDemo() {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <GooeyText
        texts={["BimsUI", "Is", "The", "Best"]}
        morphTime={1}
        cooldownTime={0.5}
        className="font-bold"
      />
    </div>
  );
}

export { GooeyTextDemo };