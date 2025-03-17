// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import ScrollReveal from "../../components/animata/scroll_reveal";
import FloatingMist from "../ui/FloatingMist";
import LiquidBlob from "../ui/LiquidBlob";
import FloatingSymbols from "../ui/TribalSym";

export default function HomePage() {
  return (
    <div className="relative h-screen text-white overflow-hidden flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-black text-center px-6 relative z-10 flex-grow">
        <LiquidBlob />

        <motion.div
          className="w-full flex flex-col items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ScrollReveal className="bg-transparent">
            <div className="flex flex-col font-bungee text-center">
              <h1 className="text-xl md:text-6xl font-bold neon-text">
                Where the drinks are cold, the vibes are ancient, and reality
                might just be optional
              </h1>
              <p className="mt-4 text-lg max-w-lg">
                Fusion drinks crafted with neon dreams.
              </p>
            </div>
          </ScrollReveal>
        </motion.div>

        <FloatingSymbols />
      </section>
    </div>
  );
}
