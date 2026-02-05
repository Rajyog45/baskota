"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: "url('/01.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Navbar */}
      <motion.div
        className="fixed top-0 left-0 w-full z-50"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Background blur on scroll */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            scrolled ? "bg-blue-600 backdrop-blur-md" : "bg-transparent"
          }`}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-20 flex items-center">
          <Link href="/">
            <Image
              src="/logo-white.png"
              alt="Baskota Consulting"
              width={220}
              height={45}
              priority
            />
          </Link>
        </div>
      </motion.div>

      {/* Register Card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl text-center"
        >
          <h1 className="text-2xl font-bold text-white mb-3">
            Create your account
          </h1>

          <p className="text-white/80 mb-6">
            Sign up using email & password or continue with Google
          </p>

          {/* Auth0 Email / Password */}
          <a
            href="/api/auth/login"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition mb-3"
          >
            Continue with Email
          </a>

          {/* Auth0 Google */}
          <a
            href="/api/auth/login?connection=google-oauth2"
            className="block w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold transition"
          >
            Continue with Google
          </a>

          <p className="text-sm text-white mt-5">
            Already have an account?{" "}
            <a href="/api/auth/login" className="underline font-medium">
              Login
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
