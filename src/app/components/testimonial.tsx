"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  bgImage: string;
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    bgImage: "/test01.jpg",
    text: `We have consultants who are specialists in businesses of all sizes, from a simple operation to complex government agencies. Our team can audit your organisation and identify areas for business improvements, and help you implement these new processes. Process improvements can help your business reduce costs and achieve business goals more efficiently.`,
    name: "Kishor Baskota",
    role: "Founder of Baskota Consultancy",
  },
  {
    bgImage: "/test02.jpg",
    text: `Baskota Consulting is a business consulting company providing private and public sector clients with the full suite of consulting services to accelerate growth, cost optimisation, and business transformation. We specialise in creating and implementing strategies that can offer organisations and startups the highest impact on their business.`,
    name: "Prakash Upreti",
    role: "IT Officer",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
      {testimonials.map((item, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={item.bgImage}
            alt={`testimonial-${idx}`}
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-start">
            <div className="max-w-lg bg-gray-900 bg-opacity-80 text-white p-8 rounded-xl m-6 shadow-lg">
              <div className="text-indigo-400 text-3xl mb-4">
                <FaQuoteLeft />
              </div>
              <p className="mb-6">{item.text}</p>
              <div>
                <h5 className="font-bold text-lg">{item.name}</h5>
                <span className="text-sm text-gray-300">{item.role}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
