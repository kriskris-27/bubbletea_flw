import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you could send the formData to your backend or FormSubmit service if needed.
    // For demonstration, we simulate a successful submission:
    setSubmitted(true);

    // Clear the input fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Optionally, hide the message after a few seconds:
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative min-h-screen bg-transparent text-white py-20 px-6">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center text-[#ED7423] drop-shadow-[0_0_20px_#ED7423]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us 📞✨
      </motion.h1>
      <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        **Have questions? Reach out & step into another dimension of taste.**
      </p>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {/* Contact Form */}
        <motion.div
          className="bg-[#1A1A1A] p-8 rounded-xl shadow-lg border border-[#ED7423]/50"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#ED7423] mb-6">Get in Touch</h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for reaching out! We will get back to you soon."
            />

            <div>
              <label className="text-gray-400">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-gray-500 rounded-lg text-white outline-none focus:ring-2 focus:ring-[#ED7423] transition"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="text-gray-400">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-gray-500 rounded-lg text-white outline-none focus:ring-2 focus:ring-[#ED7423] transition"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="text-gray-400">Your Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-gray-500 rounded-lg text-white outline-none focus:ring-2 focus:ring-[#ED7423] transition"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-[#ED7423] text-white font-bold py-3 rounded-lg transition transform hover:scale-105 hover:shadow-lg hover:bg-[#FF8C42]"
              whileHover={{ scale: 1.1 }}
            >
              Send Message
            </motion.button>
          </form>

          {/* Success Message */}
          {submitted && (
            <div className="mt-4 text-green-400 text-center font-medium">
              Message received! Thank you for reaching out.
            </div>
          )}
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Details */}
          <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg border border-[#ED7423]/50">
            <h3 className="text-2xl font-bold text-[#ED7423] mb-4">Our Location</h3>
            <p className="text-gray-300 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-[#ED7423]" /> 42 Cosmic St, Psychedelic City
            </p>
            <p className="text-gray-300 flex items-center mt-2">
              <FaPhoneAlt className="mr-2 text-[#ED7423]" />
              <a href="tel:+15554206969" className="hover:text-[#FF8C42] transition">
                +1 (555) 420-6969
              </a>
            </p>
            <p className="text-gray-300 flex items-center mt-2">
              <FaEnvelope className="mr-2 text-[#ED7423]" />
              <a href="mailto:contact@trippycafe.com" className="hover:text-[#FF8C42] transition">
                contact@trippycafe.com
              </a>
            </p>
          </div>

          {/* Google Maps */}
          <motion.div
            className="overflow-hidden rounded-xl shadow-lg border border-[#ED7423]/50"
            whileHover={{ scale: 1.05 }}
          >
            <iframe
              title="Google Maps"
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509088!2d144.9631576153167!3d-37.814107979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20CBD!5e0!3m2!1sen!2sus!4v1634231670131!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
