"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductListPageProps {
  locale: string;
  slug?: string;
  products: any;
}

export default function ProductListPage(props: ProductListPageProps) {
  const { locale, products, slug } = props;
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  console.log({ products, slug });

  const handleLoadMore = () => {
    const newProducts = Array.from({ length: 10 }, (_, i) => ({
      id: products.length + i + 1,
      name: `Product ${products.length + i + 1}`,
      price: `$${(products.length + i + 1) * 10}`,
      image: `https://picsum.photos/300/200?random=${products.length + i + 1}`,
    }));
  };

  const filteredProducts = products
    ?.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortBy === "name"
        ? a.title.localeCompare(b.title)
        : a.price.localeCompare(b.price)
    );

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <input
          type="text"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-md w-full md:w-1/3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-3 rounded-md w-full md:w-1/4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products?.map((product) => (
          <div
            key={product.id}
            className="group hover:outline hover:outline-2 hover:outline-gray-900 dark:hover:outline-gray-50 duration-500 relative flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <Link
              href={
                slug
                  ? `/${locale}/products/category/${slug}/${product.id}`
                  : `/${locale}/products/${product.id}`
              }
            >
              <Image
                width={1200}
                height={800}
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="mt-4 font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-400">
                {product.price}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleLoadMore}
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300 md:px-8 md:py-4"
        >
          Load More
        </button>
      </div>
    </div>
  );
}
