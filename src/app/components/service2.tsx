"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  HiOutlineLightBulb,
  HiOutlineChartBar,
  HiOutlineTrendingUp,
  HiCheckCircle,
} from "react-icons/hi";

export default function Service2() {
  const [activeTab, setActiveTab] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Detect screen width on client to avoid hydration errors
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabs = [
    {
      title: "Our Goal",
      icon: <HiOutlineLightBulb />,
      image: "/about04.jpg",
      points: [
        "Coordinating with business owners to ensure solutions are implemented",
        "Building rapport with internal and external vendors to support business objectives",
        "Developing and implementing business initiatives and goals",
        "Modifying business programs to ensure goals are met",
        "Strengthening the connections between goal systems, clients, and business models",
      ],
    },
    {
      title: "Our Strategy",
      icon: <HiOutlineChartBar />,
      image: "/about04.jpg",
      points: [
        "Providing innovative business process solutions",
        "Developing realistic and high-quality client strategies",
        "Facilitating system, group, and individual plans",
        "Building internal capacity for long-term success",
        "Maintaining an open and positive professional culture",
      ],
    },
    {
      title: "Results",
      icon: <HiOutlineTrendingUp />,
      image: "/about04.jpg",
      points: [
        "Establishing collaborative client relationships",
        "Ensuring strong project ownership",
        "Empowering clients to solve problems independently",
        "Providing measurable results through analysis",
        "Supporting organizations during initial setup",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Tabs */}
          <div className="flex gap-4 mb-10 sm:gap-2 sm:mb-4 flex-nowrap overflow-x-auto">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-5 py-2 font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg shadow-purple-300/50"
                        : "text-gray-600 hover:text-indigo-600"
                    }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>


        <div className="grid md:grid-cols-12 gap-10 items-center">

          {/* Image */}
          <div className="md:col-span-5">
            {isLargeScreen && (
              <div className="relative w-full h-80 md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Points */}
          <div className="md:col-span-7">
            <ul className="space-y-4">
              {tabs[activeTab].points.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <HiCheckCircle className="text-indigo-600 mt-1 text-lg shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
