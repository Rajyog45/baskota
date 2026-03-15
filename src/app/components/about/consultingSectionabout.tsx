"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  fadeLeft,
  fadeRight,
  viewportOnce,
  transitionFast,
} from "../../utils/animation";
import PlayButton from "../home/PlayButton";
import ProgressBar from "../home/ProgressBar";

interface ProgressItem {
  label: string;
  value: number;
}

const progressData: ProgressItem[] = [
  { label: "Business", value: 65 },
  { label: "Consulting", value: 75 },
  { label: "Developing", value: 80 },
];

const ConsultingSectionAbout: React.FC = () => {
  return (
    <section className="bg-white w-90 sm:w-full px-4 mt-10 sm:px-6 py-10 sm:py-14 md:py-16 lg:py-20 overflow-x-hidden">
      <div className="mx-auto max-w-7xl">

      
        <div className="sm:hidden flex flex-col gap-6 items-center">

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center">
            The Smartest Thing To Do With Your Consulting Business
          </h2>

          
          <div className="relative w-full max-w-[90%] h-64 sm:h-80 md:h-96 rounded-xl shadow-md overflow-hidden">
            <Image
              src="/about/about03.jpg"
              alt="Consulting Meeting"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayButton href="https://www.youtube.com/watch?v=P_wKDMcr1Tg" />
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-600 leading-relaxed text-center">
            Fulfilling the clientele needs is our top most priority, and working
            rigorously hard to achieve it is what we are best at.
          </p>

          <div className="space-y-3 sm:space-y-4 max-w-sm sm:max-w-md mx-auto w-full">
            {progressData.map((item) => (
              <ProgressBar key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </div>

      
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          
          <motion.div
            variants={fadeLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={viewportOnce}
            transition={transitionFast}
            className="flex justify-center md:block w-full"
          >
            <div className="relative w-full h-96 md:h-[520px] rounded-2xl shadow-md overflow-hidden">
              <Image
                src="/about/about03.jpg"
                alt="Consulting Meeting"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayButton href="https://www.youtube.com/watch?v=P_wKDMcr1Tg" />
              </div>
            </div>
          </motion.div>

          
          <motion.div
            variants={fadeRight}
            initial="initial"
            whileInView="whileInView"
            viewport={viewportOnce}
            transition={transitionFast}
            className="w-full text-center md:text-left px-2 sm:px-0"
          >
            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
              The Smartest Thing To Do With Your Consulting Business
            </h2>

            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Fulfilling the clientele needs is our top most priority, and working
              rigorously hard to achieve it is what we are best at.
            </p>

            <div className="space-y-3 sm:space-y-4 max-w-sm sm:max-w-md md:max-w-none mx-auto md:mx-0">
              {progressData.map((item) => (
                <ProgressBar key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConsultingSectionAbout;