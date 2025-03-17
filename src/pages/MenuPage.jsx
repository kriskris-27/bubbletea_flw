import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Dummy drink data
const drinks = [
  {
    name: "🔥 Firestorm Latte",
    desc: "Spicy espresso with a hint of chili & caramel.",
    img: "/images/fire-latte.jpg",
  },
  {
    name: "🌊 Ocean Wave Matcha",
    desc: "A refreshing blue matcha with coconut foam.",
    img: "/images/ocean-matcha.jpg",
  },
  {
    name: "⚡ Electric Zen Fizz",
    desc: "Lemon, matcha, and a bit of electric magic.",
    img: "/images/electric-zen.jpg",
  },
  {
    name: "🌀 Midnight Eclipse Mocha",
    desc: "Dark chocolate mocha with hints of lavender.",
    img: "/images/eclipse-mocha.jpg",
  },
  {
    name: "🌿 Psychedelic Herbal Tea",
    desc: "A mysterious blend of herbs and neon energy.",
    img: "/images/psychedelic-tea.jpg",
  },
  {
    name: "☕ Cosmic Cold Brew",
    desc: "Super smooth cold brew infused with starry vibes.",
    img: "/images/cosmic-coldbrew.jpg",
  },
  {
    name: "🍹 Quantum Reality Punch",
    desc: "A fusion of citrus, guava, and a touch of the unknown.",
    img: "/images/quantum-punch.jpg",
  },
  {
    name: "🪐 Galactic Moondrop",
    desc: "A dreamy blend of vanilla, charcoal, and blue spirulina.",
    img: "/images/galactic-moondrop.jpg",
  },
];

const Menu = () => {
  return (
    <section id="menu" className="relative min-h-screen bg-transparent text-white py-20 px-6">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Better Readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center text-[#ED7423] drop-shadow-[0_0_20px_#ED7423] font-bungee"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Sacred Menu 🍵✨
      </motion.h1>
      <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        **Handcrafted fusion drinks straight from another dimension.**
      </p>

      {/* Drinks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
        {drinks.map((drink, index) => (
          <motion.div
            key={index}
            className="relative bg-[#1A1A1A] rounded-xl p-6 shadow-lg border border-[#ED7423]/50 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(237, 116, 35, 0.6)",
            }}
          >
            {/* Drink Image */}
            <motion.img
              src={drink.img}
              alt={drink.name}
              className="w-full h-40 object-cover rounded-lg transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            />

            {/* Drink Name */}
            <motion.h3
              className="mt-4 text-2xl text-[#ED7423] font-bold font-bungee transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {drink.name}
            </motion.h3>
            <p className="text-gray-300 mt-2  font-zcool">{drink.desc}</p>

            {/* Glowing Gradient Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 transition-all duration-500"
              whileHover={{
                opacity: 1,
                background:
                  "radial-gradient(circle, rgba(237,116,35,0.2) 0%, rgba(237,116,35,0) 80%)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
