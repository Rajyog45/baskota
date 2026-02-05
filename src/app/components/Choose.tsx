"use client";

import React from "react";
import {
  FaLightbulb,
  FaMoneyBillWave,
  FaChartLine,
  FaNetworkWired,
} from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

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
    icon: <FaLightbulb />,
    color: "text-indigo-600",
  },
  {
    title: "Taxes And Efficiency",
    description: "We help in Tax related works in a highly efficient manner.",
    icon: <FaMoneyBill1Wave />,
    color: "text-pink-500",
  },
  {
    title: "Financial And Analysis",
    description:
      "We thoroughly analyze the finances with the help of our top level Professionals.",
    icon: <FaChartLine />,
    color: "text-yellow-500",
  },
  {
    title: "Affiliations",
    description:
      "We have a large network of organizations throughout the nation.",
    icon: <FaNetworkWired />,
    color: "text-pink-500",
  },
  {
    title: "Innovative solutions",
    description:
      "No matter how big the problem is, we provide innovative solutions to our clients through research and feasibility studies.",
    icon: <FaLightbulb />,
    color: "text-purple-500",
  },
  {
    title: "Professional Support",
    description:
      "Our professionals are ready to provide support any time the client needs it.",
    icon: <FaMoneyBillWave />,
    color: "text-teal-500",
  },
  {
    title: "Strategy & Marketing",
    description:
      "We provide the best suggestions and plans regarding various strategies and the latest market trends.",
    icon: <FaChartLine />,
    color: "text-red-500",
  },
  {
    title: "Investment Planning",
    description:
      "We also deal with efficient investment plans for the present and the future.",
    icon: <FaNetworkWired />,
    color: "text-blue-500",
  },
];

const Choose: React.FC = () => {
  return (
    <section className="bg-[#0d092c] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Group of elite professionals who work hard to achieve success, and we also
            believe in maintaining transparency and punctuality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl shadow cursor-pointer overflow-hidden flex flex-col items-center text-center p-4 sm:p-6 h-auto sm:h-48 group"
            >
              <div className="hidden sm:flex absolute inset-0 flex-col items-center justify-center bg-[#0d092c] transition-opacity duration-300 opacity-100 sm:group-hover:opacity-0">
                <div className={`text-5xl mb-4 ${feature.color}`}>{feature.icon}</div>
                <h5 className="font-semibold text-white text-lg">{feature.title}</h5>
              </div>

              <div className="hidden sm:flex absolute inset-0 flex-col items-center justify-center opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-2 sm:p-4">
                <h5 className="font-semibold text-lg mb-2">{feature.title}</h5>
                <p className="text-gray-600 text-sm text-center">{feature.description}</p>
              </div>

              <div className="flex flex-col items-center justify-start sm:hidden w-full mt-4">
                <div className={`text-4xl mb-2 ${feature.color}`}>{feature.icon}</div>
                <h5 className="font-semibold text-base text-black mb-1">{feature.title}</h5>
                <p className="text-black bg-transparent text-sm text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
