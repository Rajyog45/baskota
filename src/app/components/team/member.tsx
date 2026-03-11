"use client";

import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  facebook?: string;
  linkedin?: string;
}

export default function Member() {
  const team: TeamMember[] = [
    { name: "Kishor Baskota", position: "Founder & CEO", image: "/team/kishor-baskota.png", facebook: "#", linkedin: "#" },
    { name: "Prakash Upreti", position: "IT Officer", image: "/team/prakash-upreti.jpg", facebook: "#", linkedin: "#" },
    { name: "Pankaj Ghimire", position: "Media Officer", image: "/team/pankaj-ghimire.png", facebook: "#", linkedin: "#" },
    { name: "Roshan Kattel", position: "Finance Officer", image: "/team/roshan-kattel.jpg", facebook: "#", linkedin: "#" },
    { name: "Sabina Baskota", position: "HR Officer", image: "/team/sabina-baskota.jpg", facebook: "#", linkedin: "#" },
    { name: "Sudesh Dahal", position: "Civil Engineer", image: "/team/sudesh-dahal.png", facebook: "#", linkedin: "#" },
    { name: "Ishwar Baskota", position: "Admin Head", image: "/team/ishwar-baskota.png", facebook: "#", linkedin: "#" },
    { name: "Sobit Maan Shrestha", position: "CTO", image: "/team/Sobit-Maan-Shrestha.jpg", facebook: "#", linkedin: "#" },
    { name: "Govind Kamat", position: "Marketing Officer", image: "/team/govind-kamat.png", facebook: "#", linkedin: "#" },
  ];

  return (
    <section className="sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 mt-15 sm:mt-40">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 font-semibold max-w-2xl mx-auto">
            Baskota Consulting consists of highly elite professionals, in each and every field.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="relative group bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover w-full h-full"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

                  <div className="relative flex gap-4">
                    {member.facebook && (
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl hover:text-blue-500"
                      >
                        <FaFacebookF />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl hover:text-blue-400"
                      >
                        <FaLinkedinIn />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h5 className="font-bold text-lg">{member.name}</h5>
                <span className="text-gray-500 font-semibold">{member.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
