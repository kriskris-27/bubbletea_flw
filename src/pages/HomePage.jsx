// eslint-disable-next-line no-unused-vars
import { motion, } from "framer-motion";
import BoldCopy from "../../components/animata/text/bold-copy";
import ScrollReveal from "../../components/animata/scroll_reveal";



export default function HomePage() {

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-black text-center px-6 relative z-10">
      <BoldCopy />
        <motion.h1
          className="text-6xl font-bold neon-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
         <ScrollReveal className="bg-transparent overflow-y-scroll h-110 no-scrollbar">
          <h1 className="text-2xl md:text-6xl font-bold neon-text">
          Where the drinks are cold, the vibes are ancient, and reality might just be optional          </h1>
          <p className="mt-4 text-lg max-w-lg">
            Fusion drinks crafted with neon dreams.
          </p>
        </ScrollReveal>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Fusion drinks crafted with magic, neon dreams, and tribal energy.
        </motion.p>
      </section>

      


     
    </div>
  );
}
