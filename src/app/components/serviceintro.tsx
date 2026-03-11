"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaUser, FaPaperPlane, FaRegFileAlt } from "react-icons/fa";

const images = [
  "/images/case-studies/large/01.jpg",
  "/images/case-studies/large/02.jpg",
];

export default function CaseStudy() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="lg:w-7/12 w-full rounded overflow-hidden">
            <div className="relative h-100 lg:h-125 w-full">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Case Study ${idx + 1}`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-5/12 w-full">
            <h2 className="text-3xl font-bold mb-4">Consultancy Solutions</h2>
            <p className="text-gray-700 mb-6">
              We provide the best consultation services to our clientele with the
              help of our Elite Class Professionals.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <FaUser className="text-indigo-600" /> <span className="font-semibold">Client:</span> Your client name
              </li>
              <li className="flex items-center gap-2">
                <FaUser className="text-indigo-600" /> <span className="font-semibold">Created by:</span> ThemeHt
              </li>
              <li className="flex items-center gap-2">
                <FaPaperPlane className="text-indigo-600" /> <span className="font-semibold">Category:</span> Business
              </li>
              <li className="flex items-center gap-2">
                <FaRegFileAlt className="text-indigo-600" /> <span className="font-semibold">Project Completed:</span> November 23, 2019
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
