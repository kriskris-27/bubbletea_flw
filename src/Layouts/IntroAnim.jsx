// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const IntroAnim = ({ onComplete }) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
      onComplete();
    }, 3000); // Animation duration
  }, [onComplete]);

  return (
    showAnimation && (
      <motion.div
        className="fixed inset-0 bg-black flex justify-center items-center z-1000 font-zcool"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.h1
          className="text-white text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          GET IN TRIBE
        </motion.h1>
      </motion.div>
    )
  );
};

export default IntroAnim;
