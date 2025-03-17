import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TribalMist() {
  const mistRefs = useRef([]);

  useEffect(() => {
    mistRefs.current.forEach((el) => {
      gsap.to(el, {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        rotate: "random(-10, 10)",
        opacity: "random(0.3, 0.7)",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (mistRefs.current[i] = el)}
          className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-white/10 via-indigo-500/20 to-purple-500/10 opacity-30 blur-[150px]"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }}
        />
      ))}
    </div>
  );
}
