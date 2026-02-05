"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CaseCard {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function Service3() {
  const cards: CaseCard[] = useMemo(
    () => [
      { title: "Consultancy Solutions", category: "Consulting", description: "We provide consultation regarding Organizations, Startups and Businesses of Every Scale.", image: "/case01.jpg" },
      { title: "Audit Fixing", category: "Audit & Taxes", description: "We also help Businesses and Organizations to Manage and Fix their Audits.", image: "/case02.jpg" },
      { title: "Strategic Assessment", category: "Marketing", description: "We deal in analyzing the latest Market trends and plan our Strategies accordingly.", image: "/case03.jpg" },
      { title: "Business Planning", category: "Business", description: "Corporate strategy and profitable growth; Pricing strategy/management; Branding strategy; Innovation; Enterprise model design; Strategic enterprise and so on", image: "/case04.jpg" },
      { title: "Financing Management", category: "Financing", description: "We thoroughly analyze the finances with the help of our top level Professionals.", image: "/case05.jpg" },
      { title: "Optimizing Manufacturing", category: "Transport", description: "We know how to help manufacturers optimize their processes to improve efficiencies across the entire supply chain", image: "/case06.jpg" },
    ],
    []
  );

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); 

  const extendedCards = useMemo(() => [...cards, ...cards], [cards]);

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

  useEffect(() => {
    const interval = setInterval(() => setActiveIndex(prev => prev + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    const containerWidth = carousel.offsetWidth;
    const cardWidth = containerWidth / cardsPerView;
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

  const scrollLeft = () => setActiveIndex(prev => (prev - 1 + cards.length) % cards.length);
  const scrollRight = () => setActiveIndex(prev => prev + 1);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let startX = 0;
    let isDragging = false;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const dx = e.touches[0].clientX - startX;
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
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Related Case Studies</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Baskota Consulting have proven effective in meeting a wide variety of challenges. In each case, the correct problem, obstacle or opportunity was identified, an appropriate solution was devised and successfully executed.
          </p>
        </div>

        <div className="relative flex items-center">
          <button
            title="myapp"
            onClick={scrollLeft}
            className="mr-6 bg-white rounded-full p-3 shadow-lg hover:bg-indigo-50 transition z-10"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>

          <div className="overflow-hidden w-full">
            <div ref={carouselRef} className="flex gap-4">
              {extendedCards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden"
                  style={{ width: `calc(100% / ${cardsPerView} - ${(16 * (cardsPerView - 1)) / cardsPerView}px)` }}
                >
                  <div className="relative w-full h-48">
                    <Image src={card.image} alt={card.title} fill className="object-cover" />
                  </div>
                  <div className="p-4 text-center">
                    <span className="text-indigo-600 font-medium">{card.category}</span>
                    <h5 className="font-bold text-lg mt-2">{card.title}</h5>
                    <p className="text-gray-600 mt-2 text-sm">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            title="my name"
            onClick={scrollRight}
            className="ml-6 bg-white rounded-full p-3 shadow-lg hover:bg-indigo-50 transition z-10"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
