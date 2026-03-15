"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineClock } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
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
    const onScroll = () => setScroll(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "FAQs", href: "/faq" },
    { label: "Team", href: "/team" },
    { label: "Our Policy", href: "/policy" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            scroll
              ? "bg-blue-600 backdrop-blur-md shadow-lg h-20"
              : "bg-[url('/common/bgImage08.jpg')] bg-cover bg-no-repeat bg-top md:h-80 h-22"
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
                <div className="hidden xl:flex xl:max-w-8xl lg:max-w-full mx-auto py-6 ml-25 mr-10 justify-between items-center text-white text-sm">
                  <div className="flex items-center gap-8">
                    <Link href="https://www.facebook.com/baskota20236/" target="_blank">
                      <FaFacebookF size={24} className="hover:text-indigo-400 transition" />
                    </Link>
                    <Link href="#">
                      <FaTwitter size={24} className="hover:text-indigo-400 transition" />
                    </Link>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <HiOutlineMail size={size} className="text-indigo-900" />
                      <span className="text-white md:text-lg font-bold">
                        info@baskotaconsulting.com.np
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiOutlinePhone size={size} className="text-indigo-900" />
                      <span className="text-white lg:text-sm xl:text-lg font-bold">
                        +977-98520-20236
                      </span>
                    </div>
                    <div className="flex items-center gap-2 lg:text-sm">
                      <HiOutlineClock size={size} className="text-indigo-900" />
                      <span className="text-white lg:text-sm xl:text-lg">
                        Sun–Fri 10 AM – 5 PM
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="xl:max-w-8xl lg:max-w-full mx-auto flex items-center justify-between lg:ml-30 xl:ml-25 lg:mr-10"
            animate={{ height: scroll ? 64 : 80 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div animate={{ scale: scroll ? 0.85 : 1 }}>
              <Link href="/">
                <Image
                  src="/common/logo-white.png"
                  alt="Baskota Consulting"
                  width={300}
                  height={100}
                  priority
                  style={{ height: "auto" ,width:"auto"}}
                />
              </Link>

            
              <div className="xl:hidden ">
                <span><Link href={"/"} className="text-white font-semibold text-lg rounded underline ml-4 p-1">Home</Link></span>
                <span className="bg-white ml-2">|</span>
                <span className="text-white text-lg font-semibold ml-2 mb-2 underline ">
                  {links.find((link) => pathname === link.href)?.label || "Home"}
                </span>
              </div>
            </motion.div>

            <nav className="hidden xl:flex gap-4 xl:text-xl 2xl:text-2xl">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 xl:px-1 2xl:px-3 3xl:px-3 py-1 rounded-md transition ${
                      isActive
                        ? "bg-indigo-500 text-white font-bold shadow-lg md:text-xl"
                        : "text-white hover:bg-indigo-400/30"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden xl:block">
              <Link
                href="/contact"
                className="bg-indigo-600 hover:bg-red-400 px-4 py-4 font-semibold rounded-xl text-white text-xl"
              >
                Request a Meeting
              </Link>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              className="xl:hidden pr-5 flex flex-col gap-1"
              aria-label="Toggle menu"
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
                onClick={(e) => e.stopPropagation()}
                className="xl:hidden flex flex-col bg-gray-900 text-white px-6 py-3 space-y-1"
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
                      onClick={() => setMenuOpen(false)}
                      className={`px-3 py-1 rounded-md ${
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

      <div className="h-15 sm:h-40 md:h-50" />
    </>
  );
};

export default Header;