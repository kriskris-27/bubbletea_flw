import { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { gsap } from "gsap";

const reviews = [
  {
    name: "Ava Moon",
    rating: 5,
    text: "Absolutely mesmerizing atmosphere! The drinks feel like an ancient ritual, infused with neon magic.",
    avatar: "https://source.unsplash.com/100x100/?face,female",
  },
  {
    name: "Zane Eclipse",
    rating: 4,
    text: "The tribal-trippy vibes are unreal. The aesthetic alone is worth the visit, and the coffee? Perfection.",
    avatar: "https://source.unsplash.com/100x100/?face,male",
  },
  {
    name: "Luna Solaris",
    rating: 5,
    text: "This place feels like a lucid dream. The flavors, the music, the glow—everything is next level!",
    avatar: "https://source.unsplash.com/100x100/?face",
  },
];

export default function Reviews() {
  const cardsRef = useRef([]);
  const moonRef = useRef(null);

  useEffect(() => {
    // Animate review cards
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { rotateY: 180, opacity: 0 },
        {
          rotateY: 0,
          opacity: 1,
          delay: i * 0.2,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    });

    // Floating moon animation
    gsap.to(moonRef.current, {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      id="review"
      className="relative min-h-screen text-white flex flex-col items-center py-20 bg-black bg-cover bg-center"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?night,stars')`, // Night sky background
      }}
    >
      {/* Glowing Moon in Corner */}
      <div className="absolute top-5 right-5 md:top-10 md:right-20 z-0">
        <div
          ref={moonRef}
          className="w-48 h-48 md:w-64 md:h-64 bg-gray-300 rounded-full blur-xl opacity-50 shadow-[0px_0px_100px_40px_rgba(255,255,255,0.3)]"
        ></div>
      </div>

      <motion.h2
        className="text-4xl md:text-6xl font-bold neon-text mb-12 font-bungee relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tribal Tales: What They Say
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl relative z-10">
        {reviews.map((review, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="w-80 p-6 bg-gray-900 bg-opacity-50 border border-white/10 rounded-2xl shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full border-2 border-pink-400"
              />
              <div>
                <h3 className="text-lg font-bold">{review.name}</h3>
                <div className="flex">
                  {Array(review.rating)
                    .fill("⭐")
                    .map((star, index) => (
                      <span key={index} className="text-yellow-400">
                        {star}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-300">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
