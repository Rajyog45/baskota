"use client";

import React, { useState, useRef, useEffect } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import {
  FaHandshake,
  FaCalculator,
} from "react-icons/fa";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { MdAttachMoney } from "react-icons/md";
import { RiGlobeLine } from "react-icons/ri";
import { TbRocket, TbTargetArrow } from "react-icons/tb";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: Feature[] = [
  {
    title: "Software and Research",
    description:
      "With the help of technology, we maintain data and many account related works through our Softwares.",
    icon: <HiOutlineCodeBracket />,
    color: "text-indigo-600",
  },
  {
    title: "Taxes And Efficiency",
    description: "We help in Tax related works in a highly efficient manner.",
    icon: <FaCalculator />,
    color: "text-green-700",
  },
  {
    title: "Financial And Analysis",
    description:
      "We thoroughly analyze the finances with the help of our top level Professionals.",
    icon: <MdAttachMoney />,
    color: "text-green-500",
  },
  {
    title: "Affiliations",
    description:
      "We have a large network of organizations throughout the nation.",
    icon: <RiGlobeLine />,
    color: "text-pink-500",
  },
  {
    title: "Innovative solutions",
    description:
      "No matter how big the problem is, we provide innovative solutions to our clients through research and feasibility studies.",
    icon: <TbRocket />,
    color: "text-red-500",
  },
  {
    title: "Professional Support",
    description:
      "Our professionals are ready to provide support any time the client needs it.",
    icon: <FaHandshake />,
    color: "text-teal-500",
  },
  {
    title: "Strategy & Marketing",
    description:
      "We provide the best suggestions and plans regarding various strategies and the latest market trends.",
    icon: <TbTargetArrow />,
    color: "text-red-500",
  },
  {
    title: "Investment Planning",
    description:
      "We also deal with efficient investment plans for the present and the future.",
    icon: <BsGraphUpArrow />,
    color: "text-blue-500",
  },
];

const Choose: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0d092c] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Why Choose Us
          </h2>
          <p className="text-white max-w-2xl mx-auto font-semibold lg:text-[20px]">
            Group of elite professionals who work hard to achieve success, and we also
            believe in maintaining transparency and punctuality.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => handleClick(idx)}
                className="relative bg-white rounded-2xl shadow cursor-pointer overflow-hidden flex flex-col items-center text-center p-4 sm:p-6 h-auto sm:h-48 group transition-all duration-300"
              >
                
                <div
                  className={`absolute inset-0 hidden sm:flex flex-col items-center justify-center bg-[#0d092c] transition-opacity duration-300
                  ${
                    isActive
                      ? "opacity-0"
                      : "opacity-100 sm:group-hover:opacity-0"
                  }`}
                >
                  <div className={`text-5xl mb-4 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h5 className="font-bold text-white text-lg">
                    {feature.title}
                  </h5>
                </div>

                
                <div
                  className={`absolute inset-0 hidden sm:flex flex-col items-center justify-center transition-opacity duration-300 p-4
                  ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 sm:group-hover:opacity-100"
                  }`}
                >
                  <h5 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h5>
                  <p className="text-gray-600 font-semibold text-sm text-center">
                    {feature.description}
                  </p>
                </div>

                
                <div className="flex flex-col items-center justify-start sm:hidden w-full mt-4">
                  <div className={`text-4xl mb-2 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h5 className="font-semibold text-base text-black mb-1">
                    {feature.title}
                  </h5>
                  <p className="text-black text-sm text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Choose;