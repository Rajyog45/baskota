"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactItems = [
  {
    icon: <FaMapMarkerAlt className="text-indigo-600 w-6 h-6 mb-2" />,
    title: "Address",
    description: "Biratnagar-3, Pipal Chowk, Nepal",
    extra: [
      { label: "Main Office:", value: "Pipal Chowk, Biratnagar" },
    ],
  },
  {
    icon: <FaEnvelope className="text-indigo-600 w-6 h-6 mb-2" />,
    title: "Email Us",
    description:
      "Email us for general queries, including marketing and partnership opportunities.",
    extra: [
      { label: "", value: "info@baskotaconsulting.com" },
    ],
  },
  {
    icon: <FaPhone className="text-indigo-600 w-6 h-6 mb-2" />,
    title: "Call Us",
    description: "Call us to speak to a member of our team.",
    extra: [
      { label: "", value: "+977-98520-20236" },
    ],
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-start">
                {item.icon}
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.extra.map((e, index) => (
                  <div key={index} className="mb-2">
                    {e.label && <h6 className="font-medium text-gray-700">{e.label}</h6>}
                    <span className="text-gray-900">{e.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
