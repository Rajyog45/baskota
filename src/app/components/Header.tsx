"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaFolderOpen, FaPenFancy, FaUser } from "react-icons/fa";

const images = ["/casestudy01.jpg", "/casestudy02.jpg"];

export default function CaseStudySection() {
  const [mounted, setMounted] = useState(false); 
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Run only on client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return; // only run on client

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !sliderRef.current) return; // avoid SSR mismatch
    sliderRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
  }, [activeIndex, mounted]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const swipeDistance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (swipeDistance > swipeThreshold) {
      setActiveIndex((prev) => (prev + 1) % images.length);
    } else if (swipeDistance < -swipeThreshold) {
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Render nothing on server to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <section className="py-10 sm:py-14 md:py-16 mt-12 sm:mt-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 md:items-center gap-6 md:gap-8 lg:gap-10">
          {/* Image Slider */}
          <div className="md:col-span-6 lg:col-span-7 flex justify-center">
            <div
              className="
                relative overflow-hidden rounded-lg sm:rounded-xl
                w-full
                max-w-[160px] sm:max-w-[220px] md:max-w-[320px] lg:max-w-[520px]
                h-[140px] sm:h-[180px] md:h-[240px] lg:h-[400px]
                bg-gray-200
                touch-pan-y
                transition-all duration-300
              "
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                ref={sliderRef}
                className="flex h-full transition-transform duration-700 ease"
                style={{ width: `${images.length * 100}%` }}
              >
                {images.map((src, idx) => (
                  <div key={idx} className="relative w-full h-full shrink-0">
                    <Image
                      src={src}
                      alt={`Case study ${idx + 1}`}
                      fill
                      priority={idx === 0}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-6 lg:col-span-5 text-center md:text-left flex flex-col justify-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Consultancy Solutions
            </h2>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-5 sm:mb-6 leading-relaxed">
              We provide the best consultation services to our clientele with the help of our Elite Class Professionals.
            </p>

            <div className="grid grid-cols-2 gap-2 sm:pl-4 sm:gap-4 mt-6 sm:mt-3 ">
              {[
                { icon: FaUser, title: "Client", value: "Sriyog Consulting" },
                { icon: FaPenFancy, title: "Created by", value: "React-Icon" },
                { icon: FaFolderOpen, title: "Category", value: "Business" },
                { icon: FaCalendarAlt, title: "Project Completed", value: "Feb 1, 2026" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-indigo-50">
                    <item.icon className="text-indigo-600 text-[10px] sm:text-xs md:text-base" />
                  </div>
                  <div>
                    <p className="text-[8px] sm:text-[9px] md:text-sm text-gray-500">{item.title}</p>
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
