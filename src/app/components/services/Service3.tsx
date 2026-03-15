"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CaseCard {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function RelatedCaseStudies() {
  const cards: CaseCard[] = useMemo(
    () => [
      {
        title: "Consultancy Solutions",
        category: "Consulting",
        description:
          "We provide consultation regarding organizations, startups and businesses of every scale.",
        image: "/services/case01.jpg",
      },
      {
        title: "Audit Fixing",
        category: "Audit & Taxes",
        description:
          "We help businesses and organizations manage and fix their audits.",
        image: "/services/case02.jpg",
      },
      {
        title: "Strategic Assessment",
        category: "Marketing",
        description:
          "We analyze market trends and plan strategies accordingly.",
        image: "/services/case03.jpg",
      },
      {
        title: "Business Planning",
        category: "Business",
        description:
          "Corporate strategy, growth planning, branding, innovation and enterprise model design.",
        image: "/services/case04.jpg",
      },
      {
        title: "Financing Management",
        category: "Financing",
        description:
          "We analyze finances with the help of top professionals.",
        image: "/services/case05.jpg",
      },
      {
        title: "Optimizing Manufacturing",
        category: "Transport",
        description:
          "We help manufacturers optimize processes to improve efficiency.",
        image: "/services/case06.jpg",
      },
    ],
    []
  );

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  const extendedCards = useMemo(() => [...cards, ...cards], [cards]);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setCardsPerView(1);
        setIsMobile(true);
      } else if (w < 1024) {
        setCardsPerView(2);
        setIsMobile(false);
      } else {
        setCardsPerView(3);
        setIsMobile(false);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!carouselRef.current) return;

    const container = carouselRef.current.parentElement!;
    const cardWidth = container.offsetWidth / cardsPerView;
    const move = cardWidth * activeIndex;

    carouselRef.current.style.transition = "transform .6s ease";
    carouselRef.current.style.transform = `translateX(-${move}px)`;

    if (activeIndex >= cards.length) {
      setTimeout(() => {
        if (!carouselRef.current) return;
        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = `translateX(0px)`;
        setActiveIndex(0);
      }, 600);
    }
  }, [activeIndex, cards.length, cardsPerView]);

  const prev = useCallback(
    () => setActiveIndex((p) => (p - 1 + cards.length) % cards.length),
    [cards.length]
  );

  const next = useCallback(() => setActiveIndex((p) => p + 1), []);

  // Touch swipe support for mobile
  useEffect(() => {
    if (!isMobile || !carouselRef.current) return;
    const el = carouselRef.current;

    let startX = 0;

    const start = (e: TouchEvent) => (startX = e.touches[0].clientX);

    const end = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 50) setActiveIndex((p) => (p - 1 + cards.length) % cards.length);
      if (dx < -50) setActiveIndex((p) => p + 1);
    };

    el.addEventListener("touchstart", start);
    el.addEventListener("touchend", end);

    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchend", end);
    };
  }, [isMobile, cards.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-4">
            Related Case Studies
          </h2>
          <p className="text-gray-600 text-sm sm:text-xl max-w-3xl mx-auto">
            Baskota Consulting has proven effective in solving diverse business
            challenges. We identify the right problem, create effective solutions,
            and execute successfully to maximize opportunities.
          </p>
        </div>

        <div className="relative flex items-center">
          {!isMobile && (
            <button
              onClick={prev}
              className="mr-5 bg-white p-3 rounded-full shadow hover:bg-indigo-50 cursor-pointer"
            >
              <FaChevronLeft />
            </button>
          )}

          <div className="overflow-hidden w-full">
            <div
              ref={carouselRef}
              className={`flex ${cardsPerView === 1 ? "" : "gap-6"}`}
            >
              {extendedCards.map((card, i) => (
                <div
                  key={i}
                  className="shrink-0 bg-white rounded-xl shadow-md overflow-hidden text-center"
                  style={{
                    width:
                      cardsPerView === 1
                        ? "100%"
                        : `calc(100%/${cardsPerView} - ${
                            (24 * (cardsPerView - 1)) / cardsPerView
                          }px)`,
                  }}
                >
                  
                  <div className="relative w-full h-52">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className="h-auto w-auto"
                    />
                  </div>

                  <div className="p-5">
                    <span className="text-indigo-600 font-semibold">
                      {card.category}
                    </span>

                    <h5 className="font-bold text-lg mt-2">{card.title}</h5>

                    <p className="text-gray-600 text-sm mt-2">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!isMobile && (
            <button
              onClick={next}
              className="ml-5 bg-white p-3 rounded-full shadow hover:bg-indigo-50 cursor-pointer"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}