"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineClock } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "FAQs", href: "/faq" },
    { label: "Team", href: "/team" },
    { label: "Our Policy", href: "/policy" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {/* NAVBAR BACKGROUND */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            scroll
              ? "bg-blue-600 backdrop-blur-md shadow-lg"
              : "bg-[url('/bgImage08.jpg')] bg-cover bg-center h-50"
          }`}
        />

        <div className="relative z-10">
          <AnimatePresence>
            {!scroll && (
              <motion.div
                className="hidden md:block border-b border-white/20"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <div className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center text-white text-sm">
                  <div className="flex items-center gap-4">
                    <Link href="https://www.facebook.com/baskota20236/" target="_blank">
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
            className="max-w-7xl mx-auto  px-10 flex items-center justify-between"
            animate={{ height: scroll ? 64 : 80 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div animate={{ scale: scroll ? 0.85 : 1 }}>
              <Link href="/">
                <Image
                  src="/logo-white.png"
                  alt="Baskota Consulting"
                  width={300}
                  height={100}
                  priority
                />
              </Link>
            </motion.div>

            <nav className="hidden lg:flex gap-4">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1  rounded-md transition ${
                      isActive
                        ? "bg-indigo-500 text-white  font-semibold shadow-lg"
                        : "text-white hover:bg-indigo-400/30"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white"
              >
                Request a Meeting
              </Link>
            </div>

            <button
              title="request"
              onClick={() => setMenuOpen(!menuOpen)}
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
                className="lg:hidden flex flex-col bg-gray-900 text-white px-6 py-4 space-y-2"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-2 rounded-md ${
                        isActive
                          ? "bg-indigo-500 font-semibold"
                          : "hover:bg-indigo-400/30"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <div className="h-40 md:h-50" />
    </>
  );
};

export default Header;
