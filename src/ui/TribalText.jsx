import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TribalText() {
  const textRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 30, filter: "blur(5px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 5, ease: "power3.out" }
    )
      .fromTo(
        textRef.current,
        { textShadow: "0px 0px 10px rgba(225, 225, 225, 0.6)" },
        { textShadow: "0px 0px 25px rgba(225, 225, 225, 1)", duration: 1, repeat: -1, yoyo: true },
        "-=0.5"
      )
      .fromTo(
        subTextRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.7"
      );
  }, []);

  return (
    <div className="flex flex-col font-bungee items-center text-center p-3 mt-[4rem]">
      <h1
        ref={textRef}
        className="text-3xl md:text-6xl font-bold text-[#000000] neon-text "
      >
        Where the drinks are cold, the vibes are ancient, and reality might just be optional.
      </h1>
      <p
        ref={subTextRef}
        className="mt-4 text-lg md:text-xl text-[#ffcc80] italic"
      >
        Fusion drinks crafted with neon dreams.
      </p>
    </div>
  );
}
