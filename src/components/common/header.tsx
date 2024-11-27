import Link from "next/link";
import Image from "next/image";
import Settings from "./settings";
import { fetchExchangeRages } from "@/actions";

interface HeaderProps {
  locale: string;
}

const Header = async ({ locale }: HeaderProps) => {
  const data = await fetchExchangeRages();
  return (
    <header className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 relative sticky top-0 z-50 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-16 mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-extrabold tracking-tight py-3">
          <Link
            href="/"
            className="text-gray-800 hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-200"
          >
            <Image
              src="/logo.svg"
              alt="Sale-Shop Logo"
              width={86}
              height={86}
              className="block dark:hidden w-16 sm:w-20 h-auto"
              priority
            />
            <Image
              src="/logo-dark.svg"
              alt="Sale-Shop Logo"
              width={86}
              height={86}
              className="hidden dark:block w-16 sm:w-20 h-auto"
              priority
            />
          </Link>
        </h1>

        {/* Navigation */}
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href={`/${locale}`}
            className="text-sm sm:text-lg font-medium hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href={`/${locale}/products`}
            className="text-sm sm:text-lg font-medium hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            href={`/${locale}/about-us`}
            className="text-sm sm:text-lg font-medium hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-200"
          >
            About us
          </Link>
        </nav>

        {/* Settings */}
        <div className="ml-4 sm:ml-6">
          <Settings locale={locale} rates={data.rates} />
        </div>
      </div>
    </header>
  );
};

export default Header;
