import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MeltingText() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      scaleY: 1.2,
      filter: "blur(2px)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <h1 ref={textRef} className="text-6xl font-bold text-center text-white">
      ABOUT US
    </h1>
  );
}
