import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl"; // declare this import
import { Category } from "@/actions/product-category";

interface ProductCategoryListProps {
  categories: Array<Category>;
  locale: string;
}

const ProductCategoryList = (props: ProductCategoryListProps) => {
  const { categories, locale } = props;

  const t = useTranslations("Home"); // declare the hook passing into parameter a context name

  return (
    <>
      {/* Categories Section */}
      <section className="categories mt-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("categories")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              href={`/${locale}/products/category/${category.slug}`}
              key={category.slug}
              className="group hover:outline hover:outline-2 hover:outline-gray-900 dark:hover:outline-gray-50 duration-500 relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-2xl hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <Image
                width={300}
                height={200}
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover rounded"
              />
              <p className="mt-4 text-xl font-semibold">{category.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductCategoryList;
