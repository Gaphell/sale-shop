"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useCallback, useMemo } from "react";
import { Product } from "@/actions/product";
import LeftArrow from "./left-arrow";
import RightArrow from "./right-arrow";
import React from "react";

interface CarouselProps {
  items: Array<Product>;
  locale: string;
  slug?: string;
}

interface NavButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const NavButton = ({ direction, onClick }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`absolute ${
        direction === "left" ? "left-4" : "right-4"
      } top-1/2 transform -translate-y-1/2 focus:outline-none z-10`}
    >
      <div className="bg-gray-50 p-2 rounded-full shadow-lg dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-50 dark:hover:text-gray-900">
        {direction === "left" ? <LeftArrow /> : <RightArrow />}
      </div>
    </button>
  );
};

const Carousel = ({ items, locale, slug }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Scroll carousel function
  const scrollCarousel = useCallback((direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      const currentScroll = carouselRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;
      carouselRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  }, []);

  // Memoize items rendering
  const carouselItems = useMemo(
    () =>
      items.map(({ id, thumbnail, title }) => (
        <div
          key={id}
          className="bg-white dark:bg-gray-800 flex-shrink-0 group hover:outline hover:outline-2 hover:outline-gray-900 dark:hover:outline-gray-50 duration-500 rounded-lg shadow-md hover:shadow-2xl transition-transform transform hover:scale-105"
        >
          <Link
            href={
              slug
                ? `/${locale}/products/category/${slug}/${id}`
                : `/${locale}/products/${id}`
            }
            passHref
          >
            <Image
              width={1200}
              height={800}
              src={thumbnail}
              alt={title}
              className="w-60 h-40 object-cover rounded-lg"
              loading="lazy" // Lazy loading for images
            />
          </Link>
        </div>
      )),
    [items, locale, slug],
  );

  return (
    <div className="carousel mt-10 mx-auto">
      <h2 className="text-2xl font-semibold mb-4">More Products</h2>

      <div className="relative bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 rounded-lg">
        {/* Navigation Buttons */}
        <NavButton direction="left" onClick={() => scrollCarousel("left")} />
        <NavButton direction="right" onClick={() => scrollCarousel("right")} />

        {/* Carousel Items */}
        <div
          className="flex space-x-6 overflow-x-auto p-8 scroll-smooth"
          ref={carouselRef}
        >
          {carouselItems}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
