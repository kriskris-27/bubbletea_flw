import { motion } from "framer-motion";
import ScrollReveal from "../../components/animata/scroll_reveal";
import LiquidBlob from "../ui/LiquidBlob";
import FloatingSymbols from "../ui/TribalSym";

export default function HomePage() {
  return (
    <div className="relative min-h-[100vh] text-white overflow-hidden flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-black text-center px-6 relative z-10 flex-grow">
        <LiquidBlob />

        <motion.div
          className="w-full flex flex-col items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ScrollReveal className="bg-transparent font-bungee text-white h-[100vh] flex items-center justify-center">
            <h1 className="text-2xl md:text-7xl font-bungee font-bold neon-text">
              Where the drinks are cold, the vibes are ancient, and reality might just be optional
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl max-w-lg">𓄃✴𓃢Fusion drinks crafted with neon dreams𓃻⚰︎༘⋆.</p>
          </ScrollReveal>

          
        </motion.div>

        <FloatingSymbols />
      </section>
    </div>
  );
}
