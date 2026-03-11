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
      image: "/services/about04.jpg",
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
      image: "/services/about04.jpg",
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
      image: "/services/about04.jpg",
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
    <section className="bg-gray-100 pt-6 pb-12 md:pt-16 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        
        <div className="flex md:flex-nowrap flex-wrap justify-between md:justify-start gap-2 mb-6 sm:mb-4 md:mb-10">
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-2 py-2 text-xs sm:text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg shadow-purple-300/50 font-bold"
                      : "text-gray-600 hover:text-indigo-600 bg-white rounded-full"
                  }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-bold truncate">{tab.title}</span>
              </button>
            );
          })}
        </div>

        
        {!isLargeScreen && (
          <div className="flex flex-col items-center text-center mt-4">

        
            <div className="relative w-full max-w-85 h-50 rounded-xl overflow-hidden shadow">
              <Image
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                fill
                className="object-cover h-auto w-auto"
              />
            </div>

            
            <ul className="space-y-1 mt-5 text-left max-w-85">
              {tabs[activeTab].points.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <HiCheckCircle className="text-indigo-600 mt-1 text-lg shrink-0" />
                  <span className="text-gray-700 font-medium text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

  
        {isLargeScreen && (
          <div className="grid md:grid-cols-12 gap-10 items-center mt-10">

            
            <div className="md:col-span-5">
              <div className="relative w-full h-105 rounded-2xl overflow-hidden shadow">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  fill
                  priority
                  className="object-cover h-auto w-auto"
                />
              </div>
            </div>

          
            <div className="md:col-span-7">
              <ul className="space-y-5">
                {tabs[activeTab].points.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <HiCheckCircle className="text-indigo-600 mt-1 text-xl shrink-0" />
                    <span className="text-gray-700 font-semibold leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}