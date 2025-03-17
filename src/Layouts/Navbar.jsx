import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import tribe from '../assets/tribe.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // Instantly close the menu when an item is clicked

  return (
    <nav className=" glass-navbar font-zcool p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={tribe} alt="Tribe drinks Logo" className="h-10 mr-3 invert" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["𓃠 Home", "𓃶 About", "☦︎ Menu", " ☠Contact", "⚕Reviews"].map((item, index) => (
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
            className="md:hidden mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {["Home", "About", "Menu", "Contact", "Reviews"].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, color: "#ED7423" }}
                whileTap={{ scale: 0.9 }} // Click effect: Shrinks slightly when tapped
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={closeMenu} // Close the menu instantly when clicked
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
