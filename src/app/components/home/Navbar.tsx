"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineClock } from "react-icons/hi";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  image: string;
  title: string;
  text: string;
}

export default function Navbar() {
  const slides: Slide[] = [
    {
      image: "/home/01.jpg",
      title: "Certified Business Consultant",
      text: "Start working with a company that provides everything you need to generate awareness, drive traffic, connect with customers.",
    },
    {
      image: "/home/02.jpg",
      title: "We help grow your Business",
      text: "Start working with a company that provides everything you need to generate awareness, drive traffic, connect with customers.",
    },
  ];

  const [current, setCurrent] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [size, setSize] = useState(10);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1280) setSize(40);
      else if (window.innerWidth >= 768) setSize(20);
      else setSize(10);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  const currentSlide = slides[current];

  return (
    <div
      className="relative min-h-[90vh] sm:min-h-[80vh] lg:min-h-screen"
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
            scrolled
              ? "bg-blue-600 h-20 px-8 backdrop-blur-md"
              : "bg-transparent"
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
                <div className=" hidden xl:flex xl:max-w-8xl lg:max-w-full mx-auto py-6 justify-between items-center text-white text-sm ml-20 mr-10">
                  <div className="flex items-center gap-8">
                    <Link
                      href="https://www.facebook.com/baskota20236/"
                      target="_blank"
                    >
                      <FaFacebookF size={24} className="cursor-pointer" />
                    </Link>
                    <Link href="#">
                      <FaTwitter size={24} />
                    </Link>
                  </div>

                  <div className="flex items-center gap-4 ">
                    <div className="flex items-center gap-2">
                      <HiOutlineMail size={size} className="text-indigo-400" />
                      <span className="font-semibold text-lg">
                        info@baskotaconsulting.com.np
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <HiOutlinePhone size={size} className="text-indigo-400" />
                      <span className="font-semibold text-lg lg:text-sm xl:text-lg">
                        +977-98520-20236
                      </span>
                    </div>

                    <div className="flex items-center gap-2 lg:text-sm">
                      <HiOutlineClock size={size} className="text-indigo-400" />
                      <span className="font-semibold text-lg lg:text-sm xl:text-lg">
                        Sun–Fri 10 AM – 5 PM
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="xl:max-w-8xl lg:max-w-full mx-auto flex items-center justify-between lg:ml-25 lg:mr-10"
            animate={{ height: scrolled ? 64 : 80 }}
          >
            <Link href="/">
              <Image
                src="/logo-white.png"
                alt="Baskota Consulting"
                width={300}
                height={100}
                priority
                style={{ height: "auto", width: "auto" }}
              />
            </Link>

            <nav className="hidden xl:flex gap-4 xl:gap-5 2xl:gap-10 text-white font-bold xl:text-lg 2xl:text-xl mt-6 ">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/faq">FAQs</Link>
              <Link href="/team">Team</Link>
              <Link href="/policy">Our Policy</Link>
              <Link href="/contact">Contact</Link>

              <Link
                href="/contact"
                className=" bg-blue-700 px-4 py-4 rounded hover:bg-amber-700 -mt-3 ml-10"
              >
                Request a Meeting
              </Link>
            </nav>

            <button
              ref={buttonRef}
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden flex flex-col gap-1 mr-6"
            >
              <span className="w-6 h-0.5 bg-white" />
              <span className="w-6 h-0.5 bg-white" />
              <span className="w-6 h-0.5 bg-white" />
            </button>
          </motion.div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                ref={menuRef}
                className="xl:hidden bg-gray-900 text-white px-6 py-5 flex flex-col space-y-4 "
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <Link href="/" className="bg-blue-700 pl-1">
                  Home
                </Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/faq">FAQs</Link>
                <Link href="/team">Team</Link>
                <Link href="/policy">Our Policy</Link>
                <Link href="/contact">Contact</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <section className="relative flex items-center justify-center text-center z-10 min-h-screen pt-30 px-4">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            {currentSlide.title}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            {currentSlide.text}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold text-xl md:text-2xl"
            >
              Contact Us
            </Link>

            <Link
              href="/contact"
              className="bg-white text-black hover:bg-blue-700 hover:text-white px-6 py-3 rounded-md font-semibold text-xl md:text-2xl"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 