import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen  text-white">
      {/* Hero Section */}
      <div className="absolute inset-0 z-0">
        <video
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover opacity-30"
>
  <source src="/bgvideo.mp4" type="video/mp4" />
</video>

      </div>

      <div className="relative z-10 flex flex-col items-center text-center py-20 px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-[#ffb381] drop-shadow-lg font-bungee"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Tribe Drinks 
        </motion.h1>

        <motion.p
          className="mt-6 max-w-3xl text-lg md:text-xl text-gray-300 font-zcool"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We’re a rebellious team of young entrepreneurs who believe that drinks
          should be **wild, trippy, and slightly cool-looking**. Welcome to
          the **Awesome temple of taste.**
        </motion.p>
      </div>

      {/* Drinks Section */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 px-6 md:px-20 py-20 font-bungee">
        {[
          {
            name: "🔥 Fire & Ice Elixir",
            desc: "Spicy yet cold, your brain will short-circuit trying to process this drink.",
            img: "/images/fire-ice.jpg",
          },
          {
            name: "🌿 Neon Jungle Brew",
            desc: "A glowing rainforest drink that tastes like a lucid dream.",
            img: "/images/neon-jungle.jpg",
          },
          {
            name: "⚡ Electric Zen Fizz",
            desc: "A matcha-citrus mix that makes you feel like a glitch in the Matrix.",
            img: "/images/electric-zen.jpg",
          },
        ].map((drink, index) => (
          <motion.div
            key={index}
            className="bg-black/60 backdrop-blur-md p-6 rounded-xl shadow-lg border border-[#ffb481] hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={drink.img}
              alt={drink.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-2xl text-[#ED7423]">{drink.name}</h3>
            <p className="text-gray-300 mt-2">{drink.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
