import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import tribe from '../assets/tribe.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`text-white font-zcool fixed  w-full z-50 transition-all duration-300 ${
        scrolling ? 'bg-black/50 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      } p-4`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={tribe} alt="Tribe Drinks Logo" className="h-10 mr-3 invert" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["𓃠 HOME", "𓃶 ABOUT", "☦︎ MENU", " ☠ CONTACT", "⚕ REVIEWS"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, color: "#ED7423" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link to={`/${item.toLowerCase()}`} className="transition-all duration-300">
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Instagram Icon */}
        <div className="hidden md:flex space-x-4">
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#ED7423" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="hover:text-[#ED7423]"
          >
            <FaInstagram size={22} />
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-black/40 backdrop-blur-xl rounded-2xl p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {["𓃠 HOME", "𓃶 ABOUT", "☦︎ MENU", " ☠ CONTACT", "⚕ REVIEWS"].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, color: "#ED7423" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="block py-2 transition-all duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            {/* Instagram Icon in Mobile Menu */}
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#ED7423" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="hover:text-[#ED7423]"
              >
                <FaInstagram size={22} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;