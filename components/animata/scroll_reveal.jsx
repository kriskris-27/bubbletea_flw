import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Function to split text into characters for animation
const splitText = (text) => {
  return text.split("").map((char, index) => (
    <motion.span key={index} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
};

function OpacityChild({ children, index, progress, total }) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0, 5]);
  const y = useTransform(progress, [index / total, (index + 1) / total], [200, 10]); // Move up as it appears

  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {children}
    </motion.span>
  );
}

export default function ScrollReveal({ children, className }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const flat = React.Children.toArray(children).flatMap((child) =>
    typeof child === "string" ? splitText(child) : child
  );
  const count = flat.length;

  return (
    <div ref={containerRef} className={`relative w-full  ${className}`}>
      <div className="flex flex-wrap justify-center text-center">
        {flat.map((child, index) => (
          <OpacityChild progress={scrollYProgress} index={index} total={count} key={index}>
            {child}
          </OpacityChild>
        ))}
      </div>
    </div>
  );
}
