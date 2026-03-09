"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  fadeLeft,
  fadeRight,
  viewportOnce,
  transitionFast,
} from "../utils/animation";
import PlayButton from "./PlayButton";
import ProgressBar from "./ProgressBar";

interface ProgressItem {
  label: string;
  value: number;
}

const progressData: ProgressItem[] = [
  { label: "Business", value: 65 },
  { label: "Consulting", value: 75 },
  { label: "Developing", value: 80 },
];

const ConsultingSection: React.FC = () => {
  return (
    <section className="bg-white px-4 py-10 sm:py-14 md:py-16 lg:py-20 overflow-x-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            variants={fadeLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={viewportOnce}
            transition={transitionFast}
            className="relative w-full"
          >
            <Image
              src="/about03.jpg"
              alt="Consulting Meeting"
              width={600}
              height={400}
              className="w-full h-auto md:h-[420px] object-cover rounded-lg sm:rounded-xl md:rounded-2xl shadow-md"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <PlayButton href="https://www.youtube.com/watch?v=P_wKDMcr1Tg" />
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            variants={fadeRight}
            initial="initial"
            whileInView="whileInView"
            viewport={viewportOnce}
            transition={transitionFast}
            className="w-full text-center md:text-left"
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
                <ProgressBar
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;