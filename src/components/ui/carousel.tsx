"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { Product } from "@/actions/product";

interface CarouselProps {
  items: Array<Product>;
  locale: string;
  slug?: string;
}

const Carousel = (props: CarouselProps) => {
  const { items, locale, slug } = props;
  // Carousel ref to control scroll
  const carouselRef = useRef(null);

  // Function to scroll carousel
  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef?.current) {
      const scrollAmount = 300; // Customize the scroll amount
      const currentScroll = carouselRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;
      carouselRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel mt-10 mx-auto">
      <h2 className="text-2xl font-semibold mb-4">More Products</h2>

      <div className="relative bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 rounded-lg">
        {/* Navigation Arrows */}
        <button
          onClick={() => scrollCarousel("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 focus:outline-none z-10"
        >
          <div className="bg-gray-50 p-2 rounded-full shadow-lg dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-50 dark:hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </button>
        <button
          onClick={() => scrollCarousel("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none z-10"
        >
          <div className="bg-gray-50 p-2 rounded-full shadow-lg dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-50 dark:hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>
        <div
          className="flex space-x-6 overflow-x-auto p-8 scroll-smooth"
          ref={carouselRef}
        >
          {items.map(({ id, thumbnail, title }) => (
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
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
