import { useTranslations } from "next-intl"; // declare this import
import { setRequestLocale } from "next-intl/server";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://picsum.photos/300/200?random=1",
  },
  { id: 2, name: "Fashion", image: "https://picsum.photos/300/200?random=2" },
  {
    id: 3,
    name: "Home Decor",
    image: "https://picsum.photos/300/200?random=3",
  },
];

export default function Home({ params }: { params: { locale: string } }) {
  const { locale }: { locale: string } = React.use(params);
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("Home"); // declare the hook passing into parameter a context name

  return (
    <div>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <main>
        {/* Hero Section */}
        <section
          className="relative text-gray-900 dark:text-gray-100 p-10 rounded-lg shadow-md text-center"
          style={{ height: "300px" }}
        >
          {/* Optimized Next.js Image */}
          <div className="absolute inset-0">
            <Image
              src="https://picsum.photos/1200/400"
              alt="Hero Background"
              width={1200}
              height={400}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-extrabold leading-tight text-white">
                {t("welcomeMessage")}
              </h1>
              <p className="mt-4 text-lg font-medium text-gray-200">
                {t("heroText")}
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("categories")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                href={`/${locale}/products/${category.id}`}
                key={category.id}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
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
      </main>
    </div>
  );
}
