import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LiquidBlob() {
  const blobRef = useRef(null);

  useEffect(() => {
    gsap.to(blobRef.current, {
      scale: 1.2,
      x: "random(-20, 20)",
      y: "random(-20, 20)",
      filter: "blur(20px)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center -z-10">
      <div
        ref={blobRef}
        className="w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-50 rounded-full blur-3xl"
      />
    </div>
  );
}
