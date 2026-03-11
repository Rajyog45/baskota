import Image from "next/image";
import { HiCheck } from "react-icons/hi";

interface SectionProps {
  title: string;
  description: string;
  points: string[];
  image: string;
  reverse?: boolean;
}

const SectionBlock = ({
  title,
  description,
  points,
  image,
  reverse = false,
}: SectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        
        <div className="grid grid-cols-1 gap-6 items-start sm:hidden">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 font-semibold mb-6">{description}</p>
          </div>

          
          <div className="flex justify-center">
            <Image
              src={image}
              alt={title}
              width={600}
              height={420}
              priority
              className="w-full max-w-[90%] h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          
          <div className="text-left">
            <ul className="space-y-4">
              {points.map((text) => (
                <li key={text} className="flex gap-3 items-start">
                  <HiCheck className="text-indigo-600 font-semibold text-xl mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div
          className={`hidden sm:grid grid-cols-1 sm:ml-25 xl:ml-30  md:ml-8 lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`} 
        >
      
          <div
            className={`${reverse ? "lg:order-2" : ""} flex justify-center lg:justify-start`}
          >
            <Image
              src={image}
              alt={title}
              width={600}
              height={420}
              priority
              className="w-full max-w-[90%] lg:w-150 lg:h-105 xl:h-115 rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* TEXT + POINTS */}
          <div className={`${reverse ? "lg:order-1" : ""} text-center lg:text-left`}>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 font-semibold mb-6">{description}</p>

            <ul className="space-y-4">
              {points.map((text) => (
                <li
                  key={text}
                  className="flex gap-3 items-start justify-center lg:justify-start"
                >
                  <HiCheck className="text-indigo-600 font-semibold text-xl mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default function MissionValues() {
  return (
    <>
      <SectionBlock
        title="Our Mission Is To Become The Best Consulting Firm In The Nation"
        description="With rigorous hard work and dedication, we aim to be the best Consulting Firm in the Nation."
        image="/about/about04.jpg"
        points={[
          "Group of highly Elite Professionals.",
          "Team of Enthusiastic Individuals.",
          "Transparency and Punctual.",
        ]}
      />

      <SectionBlock
        title="Our Values Is To Provide the Best Consulting Service"
        description="We value the client's needs and necessities and work hard to achieve them."
        image="/about/about03.jpg"
        points={[
          "Client's satisfaction is what we work for.",
          "Time and Discipline are the two major thing for us.",
          "We deal with every kinds of Business Firms.",
        ]}
        reverse
      />
    </>
  );
}
