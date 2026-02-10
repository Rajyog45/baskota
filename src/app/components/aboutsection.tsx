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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          
          <div className={reverse ? "lg:order-2" : ""}>
            <Image
              src={image}
              alt={title}
              width={600}
              height={420}
              priority
              className="w-full h-100 rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className={reverse ? "lg:order-1" : ""}>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>

            <ul className="space-y-4">
              {points.map((text) => (
                <li key={text} className="flex gap-3">
                  <HiCheck className="text-indigo-600 text-xl mt-1" />
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
        image="/about04.jpg"
        points={[
          "Group of highly Elite Professionals.",
          "Team of Enthusiastic Individuals.",
          "Transparency and Punctual.",
        ]}
      />

    
      <SectionBlock
        title="Our Values Is To Provide the Best Consulting Service"
        description="We value the client's needs and necessities and work hard to achieve them."
        image="/about03.jpg"
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
