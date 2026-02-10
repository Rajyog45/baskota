"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineClock } from "react-icons/hi";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const slides = [
    {
      image: "/01.jpg",
      title: "Certified Business Consultant",
      text: "Start working with a company that provides everything you need to generate awareness, drive traffic, connect with customers.",
    },
    {
      image: "/02.jpg",
      title: "We help grow your Business",
      text: "Start working with a company that provides everything you need to generate awareness, drive traffic, connect with customers.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentSlide = slides[current];

  return (
    <div
      className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen"
      style={{
        backgroundImage: `url(${currentSlide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <motion.div
        className="fixed top-0 left-0 w-full z-50"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            scrolled ? "bg-blue-600 backdrop-blur-md" : "bg-transparent"
          }`}
        />

        <div className="relative z-10">
          <AnimatePresence>
            {!scrolled && (
              <motion.div
                className="hidden md:block border-b border-white/20"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center text-white text-sm">
                  <div className="flex items-center gap-4">
                    <Link
                      href="https://www.facebook.com/baskota20236/"
                      target="_blank"
                    >
                      <FaFacebookF className="hover:text-indigo-400 transition" />
                    </Link>
                    <Link href="#">
                      <FaTwitter className="hover:text-indigo-400 transition" />
                    </Link>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <HiOutlineMail className="text-indigo-400" />
                      <span>baskotaconsulting@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiOutlinePhone className="text-indigo-400" />
                      <span>+977-98520-20236</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiOutlineClock className="text-indigo-400" />
                      <span>Sun–Fri 10 AM – 5 PM</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between"
            animate={{ height: scrolled ? 56 : 72 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/">
              <Image
                src="/logo-white.png"
                alt="Baskota Consulting"
                width={220}
                height={45}
                priority
                className="w-[120px] sm:w-[150px] md:w-[190px] lg:w-[220px] h-auto"
              />
            </Link>

            <nav className="hidden lg:flex gap-6 text-white font-medium">
              <Link href="/" className="hover:text-indigo-400">Home</Link>
              <Link href="/about" className="hover:text-indigo-400">About</Link>
              <Link href="/services" className="hover:text-indigo-400">Services</Link>
              <Link href="/faq" className="hover:text-indigo-400">FAQs</Link>
              <Link href="/team" className="hover:text-indigo-400">Team</Link>
              <Link href="/contact" className="hover:text-indigo-400">Contact</Link>
            </nav>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white text-sm"
              >
                Request a Meeting
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="lg:hidden flex flex-col gap-1"
            >
              <span className="w-6 h-0.5 bg-white" />
              <span className="w-6 h-0.5 bg-white" />
              <span className="w-6 h-0.5 bg-white" />
            </button>
          </motion.div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="lg:hidden bg-gray-900 flex flex-col text-white px-6 py-4 space-y-2"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/faq">FAQs</Link>
                <Link href="/team">Team</Link>
                <Link href="/contact">Contact</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <section className="relative flex items-center justify-center text-center z-10 min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen pt-[90px] sm:pt-[120px] md:pt-[140px] px-4">
        <motion.div
          className="text-white max-w-2xl"
          key={current}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3">
            {currentSlide.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-5">
            {currentSlide.text}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-sm sm:text-base md:text-lg rounded-md font-semibold text-white"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-blue-700 hover:text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-sm sm:text-base md:text-lg rounded-md font-semibold text-black"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
