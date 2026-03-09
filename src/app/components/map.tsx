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
    <section className="bg-gray-50 py-16 ">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-50 "
            >
              <div className="flex flex-col items-start mb-30 sm:mb-10  sm:text-[13px]">
                {item.icon} 
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                {item.extra.map((e, index) => (
                  <div key={index} className="mb-2">
                    {e.label && <h6 className="font-medium  text-gray-700 mb-5">{e.label}</h6>}
                    <span className="text-gray-900">{e.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="map iframe-h-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.245876809758!2d87.27593471462544!3d26.480027083315868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef75f760fc780d%3A0xe8a634ef274e7639!2sBaskota%20Consulting!5e0!3m2!1sen!2snp!4v1591785618053!5m2!1sen!2snp"
        width="100%"
        height="300px"
        style={{ border: 0,
                  padding:"10px"
         }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="sm:h-100 sm:w-70% mt-10"
      />
    </div>
      </div>
    </section>
  );
}
