import { useEffect } from "react";
import gsap from "gsap";

export default function LightTrail() {
  useEffect(() => {
    const trail = document.querySelector(".light-trail");

    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      
      
      const cursorOffsetX = 15; // Adjust based on cursor hotspot
      const cursorOffsetY = 10; // Adjust based on cursor hotspot

      gsap.to(trail, {
        x: clientX - cursorOffsetX, 
        y: clientY - cursorOffsetY, 
        duration: 0.1,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div
      className="light-trail fixed w-10 h-10 bg-purple-500 rounded-full opacity-50 pointer-events-none"
      style={{ filter: "blur(15px)" }}
    ></div>
  );
}
