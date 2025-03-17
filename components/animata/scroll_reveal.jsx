import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";

// Utility function to flatten children nodes for animation
const flatten = (children) => {
  const result = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === React.Fragment) {
        result.push(...flatten(child.props.children));
      } else if (child.props.children) {
        result.push(React.cloneElement(child, {}));
      } else {
        result.push(child);
      }
    } else {
      const parts = String(child).split(/(\s+)/);
      result.push(...parts.map((part, index) => <React.Fragment key={index}>{part}</React.Fragment>));
    }
  });

  return result.flatMap((child) => (Array.isArray(child) ? child : [child]));
};

function OpacityChild({ children, index, progress, total }) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.5, 1]);

  return (
    <motion.span style={{ opacity }} className="h-fit">
      {children}
    </motion.span>
  );
}

export default function ScrollReveal({ children, className }) {
  const flat = flatten(children);
  const count = flat.length;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div
      ref={containerRef}
      className={`relative h-110 w-full overflow-y-scroll bg-foreground text-background dark:text-zinc-900 ${className}`}
    >
      <div className="sticky top-0 flex h-full w-full items-center justify-center">
        <div className="flex h-fit w-full min-w-fit flex-wrap whitespace-break-spaces p-8">
          {flat.map((child, index) => (
            <OpacityChild progress={scrollYProgress} index={index} total={flat.length} key={index}>
              {child}
            </OpacityChild>
          ))}
        </div>
      </div>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} />
      ))}
    </div>
  );
}
