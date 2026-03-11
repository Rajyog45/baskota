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

export default function CaseStudies() {
  const cards: CaseCard[] = useMemo(
    () => [
      {
        title: "Consultancy Solutions",
        category: "Consulting",
        description:
          "We provide consultation regarding organizations, startups and businesses of every scale.",
        image: "/home/case01.jpg",
      },
      {
        title: "Audit Fixing",
        category: "Audit & Taxes",
        description:
          "We help businesses and organizations manage and fix their audits.",
        image: "/home/case02.jpg",
      },
      {
        title: "Strategic Assessment",
        category: "Marketing",
        description:
          "We analyze market trends and plan strategies accordingly.",
        image: "/home/case03.jpg",
      },
      {
        title: "Business Planning",
        category: "Business",
        description:
          "Corporate strategy, growth planning, branding, innovation, enterprise model design.",
        image: "/home/case04.jpg",
      },
      {
        title: "Financing Management",  
        category: "Financing",
        description:
          "We analyze finances with the help of top professionals.",
        image: "/home/case05.jpg",
      },
      {
        title: "Optimizing Manufacturing",
        category: "Transport",
        description:
          "We help manufacturers optimize their processes for efficiency across the supply chain.",
        image: "/home/case06.jpg",
      },
    ],
    []
  );

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [blueWidth, setBlueWidth] = useState(0);

  const extendedCards = useMemo(() => [...cards, ...cards], [cards]);

  /* Responsive cards per view */
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  /* Blue background width */
  useEffect(() => {
    if (!carouselRef.current) return;

    const containerWidth = carouselRef.current.offsetWidth;
    const cardWidth = containerWidth / cardsPerView;
    setBlueWidth(cardWidth * cardsPerView);
  }, [cardsPerView]);

  /* Auto slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* Carousel movement */
  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const containerWidth = carousel.offsetWidth;

    let cardWidth = containerWidth / cardsPerView;
    if (cardsPerView === 1) cardWidth = containerWidth;

    const move = cardWidth * activeIndex;

    carousel.style.transition = "transform 0.7s ease-in-out";
    carousel.style.transform = `translateX(-${move}px)`;

    if (activeIndex >= cards.length) {
      setTimeout(() => {
        if (!carouselRef.current) return;

        carousel.style.transition = "none";
        setActiveIndex(0);
        carousel.style.transform = `translateX(0px)`;
      }, 700);
    }
  }, [activeIndex, cards.length, cardsPerView]);

  const scrollLeft = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, [cards.length]);

  const scrollRight = useCallback(() => {
    setActiveIndex((prev) => prev + 1);
  }, []);

  /* Touch swipe support */
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let startX = 0;
    let isDragging = false;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const onTouchMove = () => {
      if (!isDragging) return;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isDragging) return;

      const dx = e.changedTouches[0].clientX - startX;

      if (dx > 50) scrollLeft();
      else if (dx < -50) scrollRight();

      isDragging = false;
    };

    carousel.addEventListener("touchstart", onTouchStart);
    carousel.addEventListener("touchmove", onTouchMove);
    carousel.addEventListener("touchend", onTouchEnd);

    return () => {
      carousel.removeEventListener("touchstart", onTouchStart);
      carousel.removeEventListener("touchmove", onTouchMove);
      carousel.removeEventListener("touchend", onTouchEnd);
    };
  }, [scrollLeft, scrollRight]);

  return (
    <section className="sm:py-25 bg-white relative overflow-hidden">
      <div className="max-w-350 mx-auto px-6 lg:flex gap-16 items-start">

        {/* Left Content */}
        <div className="lg:w-[30%] mt-4 sm:mt-10 mb-10 lg:mb-0 -lg:ml-10 lg:mt-3 xl:mt-8 2xl:mt-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See Our Case Studies
          </h2>

          <p className="text-gray-600 mb-6 sm:text-lg text-justify">
            Baskota Consulting team members excel in solving complex business
            challenges by identifying problems, creating solutions, and executing
            successfully.
          </p>

          <a
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            View More →
          </a>
        </div>

        {/* Carousel */}
        <div className="lg:w-[70%] relative flex items-center">

          <div
            className="absolute top-0 left-0 h-64 -z-10 rounded-xl"
            style={{ width: blueWidth }}
          />

          <button
            onClick={scrollLeft}
            className="hidden md:block absolute -left-9 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-indigo-50 transition cursor-pointer"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>

          <div className="overflow-hidden w-full relative z-10">
            <div
              ref={carouselRef}
              className={`flex ${cardsPerView === 1 ? "gap-0" : "gap-4"}`}
            >
              {extendedCards.map((card, idx) => (
                <div
                  key={idx}
                  className="shrink-0 bg-white shadow-md overflow-hidden rounded-xl"
                  style={{
                    width:
                      cardsPerView === 1
                        ? "100%"
                        : `calc(100% / ${cardsPerView} - ${
                            (16 * (cardsPerView - 1)) / cardsPerView
                          }px)`,
                  }}
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <span className="text-indigo-600 font-medium">
                      {card.category}
                    </span>

                    <h5 className="font-bold text-lg mt-2">{card.title}</h5>

                    <p className="text-gray-600 font-semibold mt-2 text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="hidden md:block absolute -right-9 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-indigo-50 transition cursor-pointer"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}