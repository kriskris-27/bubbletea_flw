// eslint-disable-next-line no-unused-vars
import { motion, } from "framer-motion";

import ScrollReveal from "../../components/animata/scroll_reveal";

import FloatingMist from "../ui/FloatingMist";
import LiquidBlob from "../ui/LiquidBlob";

import FloatingSymbols from "../ui/TribalSym";



export default function HomePage() {

  return (
    <div  className="relative min-h-screen text-white overflow-hidden mt-[5rem] lg:mt-[7rem]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center  text-black text-center px-6  relative z-10">
      
      <LiquidBlob/>
      {/* <TribalText/> */}


        <motion.h1
          className="text-6xl font-bold neon-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
            
         <ScrollReveal className="bg-transparent overflow-y-scroll h-full no-scrollbar ">
          <div className="flex flex-col font-bungee">
          <h1 className="text-xl md:text-6xl font-bold  neon-text">
          Where the drinks are cold, the vibes are ancient, and reality might just be optional          </h1>
          <p className="mt-4 text-lg max-w-lg">
            Fusion drinks crafted with neon dreams.
          </p>
          </div>
        </ScrollReveal>
        </motion.h1>

      <FloatingMist/>
       <FloatingSymbols/>
      </section>

      


     
    </div>
  );
}
