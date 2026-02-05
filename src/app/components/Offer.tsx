"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaChartLine,
  FaLightbulb,
  FaPiggyBank,
} from "react-icons/fa";

export default function Offer() {
  const offers = [
    {
      icon: FaBriefcase,
      title: "Business Solution",
      text: "With various research and feasibility studies, we here at Baskota Consulting provide various business related solutions.",
      mt: "mt-0",
    },
    {
      icon: FaChartLine,
      title: "Financial Analysis",
      text: "With deep market analysis and trends, we provide excellent financial analysis with the help of our top notch professionals.",
      mt: "lg:mt-12",
    },
    {
      icon: FaLightbulb,
      title: "Strategy & Marketing",
      text: "We help our clients strategize their business policies and guide them through various marketing analysis.",
      mt: "mt-0",
    },
    {
      icon: FaPiggyBank,
      title: "Investment Planning",
      text: "With research and feasibility studies of the market, we help our clients plan their investments for a brighter future.",
      mt: "lg:mt-12",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-12">
        We here at Baskota Consulting offer excellent services to our clients with our top notch professionals.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {offers.map((item, idx) => (
          <motion.div
            key={idx}
            className={`group bg-gray-50 p-8 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ${item.mt}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
              <item.icon size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
