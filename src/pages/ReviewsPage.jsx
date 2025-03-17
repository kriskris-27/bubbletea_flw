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

  useEffect(() => {
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
  }, []);

  return (
    <div id="review" className="relative min-h-screen bg-black text-white flex flex-col items-center py-20">
      <motion.h2
        className="text-4xl md:text-6xl font-bold neon-text mb-12 font-bungee"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tribal Tales: What They Say
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
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
