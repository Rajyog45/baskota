"use client";
import { useEffect, useRef, useState, useMemo } from "react";

export default function StatsSection() {
  const stats = useMemo(
    () => [
      { label: "Clients", value: 100 },
      { label: "Reports", value: 1000 },
      { label: "Years Experience", value: 20 },
    ],
    []
  );

  const [counts, setCounts] = useState(() => stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    if (hasAnimated) return;

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasAnimated(true);

        stats.forEach((stat, index) => {
          const delay = index * 300;

          setTimeout(() => {
            const duration = 1500;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              setCounts((prev) => {
                const updated = [...prev];
                updated[index] = Math.floor(stat.value * progress);
                return updated;
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }, delay);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
      observer.disconnect();
    };
  }, [hasAnimated, stats]);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 py-10 sm:py-14 md:py-16 overflow-x-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2
          className="
            mx-auto
            max-w-xl sm:max-w-2xl md:max-w-3xl
            text-lg sm:text-2xl md:text-3xl lg:text-4xl
            font-bold text-gray-900
            leading-tight
            mb-6
          "
        >
          Stay focused on your business. Let us handle the design.
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl sm:rounded-2xl shadow p-4 sm:p-6"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-600">
                {counts[idx]}+
              </p>

              <p
                className="
                  mt-1
                  text-xs sm:text-sm md:text-base lg:text-lg
                  text-gray-600
                  font-medium
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
