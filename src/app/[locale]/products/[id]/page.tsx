import {
  fetchProduct,
  fetchProducts,
  fetchProductsWithCategory,
} from "@/actions";
import Carousel from "@/components/ui/carousel";
import PriceConverter from "@/components/ui/price-converter";
import Image from "next/image";

interface ProductDetailsPageProps {
  params: {
    id: string;
    locale: string;
    slug: string;
  };
}

export default async function ProductDetailsPage(
  props: ProductDetailsPageProps
) {
  const { id, locale, slug } = await props.params;

  const product = await fetchProduct(id);

  const data = slug
    ? await fetchProductsWithCategory({ slug })
    : await fetchProducts({});

  return (
    <>
      <div className="flex flex-col gap-6 md:flex-row items-center md:items-stretch bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 rounded-lg p-4 md:p-6">
        {/* Hero Image */}
        <div className="flex-1 w-full bg-white dark:bg-gray-800 rounded-lg">
          <Image
            width={800}
            height={400}
            src={product.thumbnail}
            alt={`Product ${id} Hero Image`}
            className="w-full h-auto aspect-[6/3] object-contain rounded-lg"
          />
        </div>

        {/* Hero Text */}
        <div className="flex-1 flex flex-col items-start justify-start gap-4">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold">
            {product.title}
          </h1>
          <p className="text-md sm:text-lg font-medium underline underline-offset-8">
            {product.brand}
          </p>
          <p className="text-sm sm:text-md max-w-xl text-gray-600 dark:text-gray-400">
            {product.description}
          </p>
          <p className="text-md sm:text-lg">
            <span className="font-medium">Rating:</span> {product.rating}
          </p>
          <p className="text-2xl sm:text-3xl font-bold mb-4">
            <PriceConverter price={product.price} />
          </p>
          <button className="bg-gray-900 dark:bg-gray-50 px-8 sm:px-12 py-2 rounded-lg text-white dark:text-gray-900 text-sm sm:text-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gray-700 dark:hover:bg-gray-200">
            Add to cart
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="mt-10">
        <Carousel items={data.products} locale={locale} slug={slug} />
      </div>
    </>
  );
}
