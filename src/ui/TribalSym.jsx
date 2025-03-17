import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function FloatingSymbols() {
  const symbolsRef = useRef([]);

  useEffect(() => {
    symbolsRef.current.forEach((el, i) => {
      gsap.to(el, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotate: "random(-15, 15)",
        opacity: "random(0.6, 1)",
        duration: 4 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (symbolsRef.current[i] = el)}
          className="absolute w-24 h-24  rounded-full flex items-center justify-center"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          ☕︎ 
        </div>
      ))}
    </div>
  );
}
