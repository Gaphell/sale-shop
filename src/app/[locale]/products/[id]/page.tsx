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
    <div>
      <div className="flex flex-col gap-10 md:flex-row items-center md:items-stretch bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 rounded-lg">
        {/* Hero Image */}
        <div className="flex-1">
          <Image
            width={1200}
            height={800}
            src={product.thumbnail}
            alt={`Product ${id} Hero Image`}
            className="w-full h-64 sm:h-80 md:h-800 object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Hero Text */}
        <div className="flex-1 flex flex-col items-start justify-start gap-2 py-1">
          <h1 className="text-2xl sm:text-4xl font-extrabold">
            {product.title}
          </h1>
          <p className="text-xl mt-2 max-w-xl font-medium underline underline-offset-8">
            {product.brand}
          </p>
          <p className="text-md mt-2 max-w-xl text-gray-600">
            {product.description}
          </p>
          <p className="text-lg mt-2 max-w-xl">
            <span className="font-medium">Rating:</span> {product.rating}
          </p>
          <p className="text-3xl font-bold mb-2">
            <PriceConverter price={product.price} />
          </p>
          <button className="bg-gray-900 px-16 py-2 rounded-lg text-white">
            Add to cart
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <Carousel items={data.products} locale={locale} slug={slug} />
    </div>
  );
}
