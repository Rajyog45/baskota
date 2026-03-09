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

  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (hasAnimated || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasAnimated(true);

        stats.forEach((stat, index) => {
          const startTime = performance.now();
          const duration = 3000;

          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            setCounts((prev) => {
              const next = [...prev];
              next[index] = Math.floor(stat.value * progress);
              return next;
            });
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 py-10 sm:py-14 md:py-16 overflow-x-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="mx-auto max-w-3xl text-lg sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Stay focused on your business. Let us handle the design.
        </h2>

        {/* MOBILE LAYOUT (Option A) ONLY */}
        <div className="block sm:hidden">
          {/* Top row: Clients + Reports */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            {stats.slice(0, 2).map((stat, idx) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl shadow p-4"
              >
                <p className="text-2xl font-extrabold text-indigo-600">
                  {counts[idx]}+
                </p>
                <p className="mt-1 text-sm text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom row: Years Experience */}
          <div className="w-2/3 mx-auto">
            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-2xl font-extrabold text-indigo-600">
                {counts[2]}+
              </p>
              <p className="mt-1 text-sm text-gray-600 font-medium">
                {stats[2].label}
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP / TABLET LAYOUT (original 3-column layout) */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl sm:rounded-2xl shadow p-4 sm:p-6"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-600">
                {counts[idx]}+
              </p>
              <p className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
