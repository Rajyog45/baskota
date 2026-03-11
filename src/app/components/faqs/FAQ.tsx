"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const faqs: FAQItem[] = [
    {
      question: "What does Baskota Consulting do?",
      answer:
        "We help in Business Development Plans, Financial forecast and analysis, Strategy Development, Market research and analysis, Capital formation Strategy, Audit fixing and managing and so on",
    },
    {
      question: "Can you guarantee that our plan will raise capital?",
      answer:
        "Of course not. Nobody can make that guarantee and if somebody ever makes that guarantee, it’s a good idea to run away quickly. A good plan is essential, but a plan alone will not get funded. Although we will do our best to help you prepare, we have no control over how well you present yourselves to investors, or how well you answer their questions.",
    },
    {
      question: "What makes your financial projections special?",
      answer:
        "Balance sheets that balance. Cash flows, income statements, and balance sheets that tie together (you’d be surprised by how many consultants who don’t get the basics right). Fully assumption-driven, so that you can do what-if analyses. Depending on your needs, we can include a lot of very sophisticated features",
    },
    {
      question: "Is our company at the right stage to be looking for capital?",
      answer:
        "We would be happy to assess your situation, free of charge. Please contact us.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 sm:mt-30 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggle(idx)}
                className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-all duration-300 ${
                  activeIndex === idx
                    ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white"
                    : "bg-white hover:bg-linear-to-r hover:from-indigo-100 hover:to-purple-100 text-gray-800"
                }`}
              >
                <span className="font-medium">{faq.question}</span>

                <span className={activeIndex === idx ? "text-white" : "text-gray-800"}>
                  {activeIndex === idx ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  activeIndex === idx ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
                      <div className="lg:mb-50 xl:mb-10 "></div>

      </div>
    </section>
  );
}