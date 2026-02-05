"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaFolderOpen, FaPenFancy, FaUser } from "react-icons/fa";

const images = ["/casestudy01.jpg", "/casestudy02.jpg"];

export default function CaseStudySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((i) => (i + 1) % images.length),
      7000
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  return (
    <section className="py-10 sm:py-14 md:py-16 mt-12 sm:mt-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 md:items-center gap-6 md:gap-8 lg:gap-10">
          <div className="md:col-span-6 lg:col-span-7 flex justify-center">
            <div
              className="relative overflow-hidden rounded-xl w-full max-w-full sm:max-w-[420px] lg:max-w-[520px] h-[200px] sm:h-[260px] lg:h-[400px] bg-gray-200"
              onTouchStart={(e) =>
                (touchStartX.current = e.touches[0].clientX)
              }
              onTouchMove={(e) =>
                (touchEndX.current = e.touches[0].clientX)
              }
              onTouchEnd={() => {
                if (
                  touchStartX.current === null ||
                  touchEndX.current === null
                )
                  return;
                const diff = touchStartX.current - touchEndX.current;
                if (diff > 50)
                  setActiveIndex((i) => (i + 1) % images.length);
                if (diff < -50)
                  setActiveIndex((i) =>
                    i === 0 ? images.length - 1 : i - 1
                  );
                touchStartX.current = null;
                touchEndX.current = null;
              }}
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

          <div className="md:col-span-6 lg:col-span-5 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              Consultancy Solutions
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-6">
              We provide the best consultation services with elite professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
