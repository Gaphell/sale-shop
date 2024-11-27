"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PriceConverter from "../ui/price-converter";
import { fetchProducts } from "@/actions";

interface ProductListPageProps {
  locale: string;
  slug?: string;
  data: any;
}

export default function ProductListPage(props: ProductListPageProps) {
  const { locale, data, slug } = props;
  const { products } = data;
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name-asc"); // Default sort by name ascending
  const [loadedProducts, setLoadedProducts] = useState(products); // Start with initial products
  const [skip, setSkip] = useState(10); // Default skip value for the first load
  const [loading, setLoading] = useState(false); // To prevent multiple loads at once

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      // Fetch the next set of products using pagination
      const newProducts = await fetchProducts({ limit: 10, skip });

      // Check if new products are returned
      if (newProducts) {
        setLoadedProducts((prev) => [...prev, ...newProducts.products]); // Append new products to existing ones
        setSkip((prev) => prev + 10); // Update skip to load the next batch
      }
    } catch (error) {
      console.error("Error loading more products:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Filter products based on search
  const filteredProducts = loadedProducts
    ?.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "name-dsc":
          return b.title.localeCompare(a.title);
        case "price-asc":
          return a.price - b.price;
        case "price-dsc":
          return b.price - a.price;
        default:
          return 0;
      }
    });

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
        <div className="space-x-4">
          <label className="inline-flex items-center text-gray-800 dark:text-gray-200">
            <input
              type="radio"
              value="name-asc"
              checked={sortBy === "name-asc"}
              onChange={(e) => setSortBy(e.target.value)}
              className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <span className="ml-2">Sort by Name (ASC)</span>
          </label>

          <label className="inline-flex items-center text-gray-800 dark:text-gray-200">
            <input
              type="radio"
              value="name-dsc"
              checked={sortBy === "name-dsc"}
              onChange={(e) => setSortBy(e.target.value)}
              className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <span className="ml-2">Sort by Name (DSC)</span>
          </label>

          <label className="inline-flex items-center text-gray-800 dark:text-gray-200">
            <input
              type="radio"
              value="price-asc"
              checked={sortBy === "price-asc"}
              onChange={(e) => setSortBy(e.target.value)}
              className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <span className="ml-2">Sort by Price (ASC)</span>
          </label>

          <label className="inline-flex items-center text-gray-800 dark:text-gray-200">
            <input
              type="radio"
              value="price-dsc"
              checked={sortBy === "price-dsc"}
              onChange={(e) => setSortBy(e.target.value)}
              className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <span className="ml-2">Sort by Price (DSC)</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts?.map((product) => (
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
                <PriceConverter price={product.price} />
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleLoadMore}
          disabled={loading} // Disable the button if still loading
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300 md:px-8 md:py-4"
        >
          {/* <Link href={`${pathname}?skip=${data.skip + 10}`}> */}
          {loading ? "Loading..." : "Load More"}
          {/* </Link> */}
        </button>
      </div>
    </div>
  );
}
