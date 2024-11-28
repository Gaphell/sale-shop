"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PriceConverter from "../ui/price-converter";
import { fetchProducts } from "@/actions";
import { Product } from "@/actions/product";
import SortingDropdown from "../common/sorting-dropdown";

interface ProductListPageProps {
  locale: string;
  slug?: string;
  data: { products: Array<Product> };
}

export default function ProductListPage(props: ProductListPageProps) {
  const { locale, data, slug } = props;
  const { products } = data;
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");
  const [loadedProducts, setLoadedProducts] = useState(products);
  const [skip, setSkip] = useState(10);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const newProducts = await fetchProducts({ limit: 10, skip });
      if (newProducts) {
        setLoadedProducts((prev) => [...prev, ...newProducts.products]);
        setSkip((prev) => prev + 10);
      }
    } catch (error) {
      console.error("Error loading more products:", error);
    } finally {
      setLoading(false);
    }
  };

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
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center mb-8">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-md w-full sm:w-[300px] bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        />

        {/* Filter Dropdown */}
        <div className="w-full sm:w-auto">
          <SortingDropdown sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts?.map((product) => (
          <div
            key={product.id}
            className="group hover:outline hover:outline-2 hover:outline-gray-900 dark:hover:outline-gray-50 duration-500 relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-2xl hover:shadow-xl transition-transform transform hover:-translate-y-1"
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
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300 md:px-8 md:py-4"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}
