"use client";

import Image from "next/image";
import React from "react";

const productImages = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4",
  "https://picsum.photos/600/400?random=5",
  "https://picsum.photos/600/400?random=6",
  "https://picsum.photos/600/400?random=7",
  "https://picsum.photos/600/400?random=8",
  "https://picsum.photos/600/400?random=9",
  "https://picsum.photos/600/400?random=10",
  "https://picsum.photos/600/400?random=11",
  "https://picsum.photos/600/400?random=12",
  "https://picsum.photos/600/400?random=13",
];

export default function ProductDetailsPage({ params }: any) {
  const { id }: { id: string } = React.use(params);

  return (
    <div>
      {/* Hero Section */}
      {/* Hero Image */}
      <Image
        width={1200}
        height={800}
        src="https://picsum.photos/1200/400"
        alt={`Product ${id} Hero Image`}
        className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-md"
      />

      {/* Carousel Section */}
      <div className="carousel mt-10 mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          More Images
        </h2>
        <div className="flex space-x-6 overflow-x-scroll pb-4">
          {productImages.map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                width={1200}
                height={800}
                src={image}
                alt={`Product ${id} Image ${index + 1}`}
                className="w-60 h-40 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Text */}
      <div className="flex flex-col items-center text-center px-6 py-8 z-10 text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Product {id}</h1>
        <p className="text-lg mt-2 max-w-3xl">
          A detailed description of Product {id}. Explore all the features and
          benefits of this amazing product that will improve your lifestyle.
        </p>
      </div>
    </div>
  );
}
