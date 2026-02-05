"use client";

import { useEffect, useState } from "react";

interface CounterItem {
  label: string;
  value: number;
}

const counters: CounterItem[] = [
  { label: "Client", value: 100 },
  { label: "Reports", value: 1000 },
  { label: "Year Experience", value: 20 },
];

const Counter: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(counters.map(() => 0));

  useEffect(() => {
    const duration = 2000; 
    const interval = 20; 
    const steps = duration / interval;

    const timers = counters.map((counter, index) => {
      let current = 0;
      const increment = counter.value / steps;

      return setInterval(() => {
        current += increment;

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.min(Math.floor(current), counter.value);
          return updated;
        });

        if (current >= counter.value) {
          clearInterval(timers[index]);
        }
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="pb-0 mt-15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center text-center">
          <div className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              {counters.map((item, index) => (
                <div key={item.label} className="counter flex-1">
                  <div className="text-gray-900 font-bold flex justify-center items-end">
                    <span className="text-[1rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] leading-none">
                      {counts[index]}
                    </span>
                    <span className="ml-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      +
                    </span>
                  </div>
                  <h6 className="mt-2 text-gray-600 uppercase tracking-wide
                                  text-sm sm:text-base md:text-lg lg:text-xl">
                    {item.label}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
