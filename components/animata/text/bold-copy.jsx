import React from "react";
import { cn } from "../../../lib/utils"; // Ensure you have this utility function

const BoldCopy = ({ text = "TRIBE", className, textClassName, backgroundTextClassName }) => {
  if (!text?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "group relative flex items-center justify-center bg-background rounded-[3rem] mt-19 px-2 py-2 md:px-6 md:py-4 ",
        className
      )}
    >
      {/* Background Bold Text */}
      <div
        className={cn(
          "text-4xl font-bold uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-8xl",
          backgroundTextClassName
        )}
      >
        {text}
      </div>

      {/* Foreground Hover Text */}
      <div
        className={cn(
          "text-md absolute font-bold uppercase text-foreground transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-8xl",
          textClassName
        )}
      >
        {text}
      </div>
    </div>
  );
};

export default BoldCopy;
