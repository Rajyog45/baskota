"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaFolderOpen, FaPenFancy, FaUser } from "react-icons/fa";

const images = ["/casestudy01.jpg", "/casestudy02.jpg"];

export default function CaseStudySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  /* ================= SWIPE ================= */
  let touchStartX: number | null = null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX - touchEndX;

    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();

    touchStartX = null;
  };

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  /* ================= SLIDER ================= */
  const Slider = () => (
    <div
      className="relative overflow-hidden  rounded-xl w-full h-55 sm:h-60 md:h-96 bg-gray-200"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="relative w-full  h-full shrink-0">
            <Image
              src={src}
              alt={`Case study ${idx + 1}`}
              fill
              priority={idx === 0}
              className="w-auto h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );

  /* ================= INFO GRID ================= */
  const InfoGrid = () => (
    <div className="grid grid-cols-2 gap-y-5 gap-x-3">
      {[
        { icon: FaUser, title: "Client", value: "Sriyog Consulting" },
        { icon: FaPenFancy, title: "Created by", value: "React-Icon" },
        { icon: FaFolderOpen, title: "Category", value: "Business" },
        { icon: FaCalendarAlt, title: "Completed", value: "Feb 1, 2026" },
      ].map((item, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-50 shrink-0">
            <item.icon className="text-indigo-600 text-sm" />
          </div>

          <div className="leading-tight text-left">
            <p className="text-[11px] text-gray-500">{item.title}</p>
            <p className="text-sm font-semibold text-gray-900 leading-snug">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-12 sm:py-14 mt-10 sm:mt-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* 📱 MOBILE LAYOUT */}
        <div className="md:hidden  flex flex-col items-center text-center px-4">

          <div className="w-full max-w-85">
            <Slider />
          </div>

          <h2 className="sm:text-2xl font-bold mt-6 leading-snug">
            Consultancy Solutions
          </h2>

          <p className="text-sm text-gray-600 mt-3 leading-relaxed max-w-[320px]">
            We provide the best consultation services to our clientele with the help of our Elite Class Professionals.
          </p>

          <div className="w-full max-w-85 mt-5">
            <InfoGrid />
          </div>
        </div>

        {/* 💻 TABLET & DESKTOP */}
        <div className="hidden md:grid md:grid-cols-12 gap-10 items-center px-6">

          <div className="md:col-span-7">
            <Slider />
          </div>

          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold mb-4">
              Consultancy Solutions
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed ">
              We provide the best consultation services to our clientele with the help of our Elite Class Professionals.
            </p>

            <InfoGrid />
          </div>

        </div>
      </div>
    </section>
  );
}