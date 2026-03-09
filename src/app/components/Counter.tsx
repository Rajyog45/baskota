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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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
          updated[index] = Math.min(Math.round(current), counter.value);
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
    <section className="pb-0 ml-10 mt-25 md:mt-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* CENTER WRAPPER */}
        <div className="flex justify-center">

          {/* CONTENT SHRINKS & STAYS CENTERED */}
          <div className="inline-flex gap-8 sm:gap-20 text-center">

            {counters.map((item, index) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center"
              >
                {/* NUMBER */}
                <div className="flex items-end  justify-center font-bold text-gray-900">
                  <span className="leading-none text-[clamp(1.6rem,6vw,3.8rem)]">
                    {mounted ? counts[index] : 0}
                  </span>
                  <span className="ml-1 text-[clamp(1.2rem,4vw,2.8rem)]">
                    +
                  </span>
                </div>

                {/* LABEL */}
                <h6 className="mt-2 text-gray-600 uppercase tracking-wide text-[clamp(0.65rem,2.5vw,1.05rem)]">
                  {item.label}
                </h6>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
