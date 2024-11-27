import Image from "next/image";
import { useTranslations } from "next-intl"; // declare this import

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const HeroProduct = () => {
  const t = useTranslations("Home"); // declare the hook passing into parameter a context name
  return (
    <>
      <section className="relative text-gray-900 dark:text-gray-100 p-10 h-96 rounded-lg shadow-md text-center">
        {/* Optimized Next.js Image */}
        <div className="absolute inset-0">
          <Image
            src={`https://picsum.photos/1200/400?random=${getRandomNumber(
              1,
              100
            )}`}
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
    </>
  );
};

export default HeroProduct;
