import Link from "next/link";
import Image from "next/image";
import Settings from "./settings";

const Header = ({ locale }: { locale: string }) => {
  return (
    <header className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 relative sticky top-0 z-50 shadow-sm">
      <div className="px-4 md:px-16 mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-extrabold tracking-tight py-3">
          <Link
            href="/"
            className="text-gray-800 hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-200"
          >
            <Image
              src="/logo.svg" // Path to your SVG file in the public directory
              alt="Sale-Shop Logo"
              width={86} // Width of the logo
              height={86} // Height of the logo
              className="block dark:hidden w-20 h-auto"
            />
            <Image
              src="/logo-dark.svg" // Path to your SVG file in the public directory
              alt="Sale-Shop Logo"
              width={86} // Width of the logo
              height={86} // Height of the logo
              className="hidden dark:block w-20 h-auto"
            />
          </Link>
        </h1>

        {/* <div className="flex"> */}
        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            href={`/${locale}`}
            className="text-lg font-medium hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href={`/${locale}/products`}
            className="text-lg font-medium hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            href={`/${locale}/about-us`}
            className="text-lg font-medium hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-200"
          >
            About us
          </Link>
        </nav>

        {/* Settings */}
        <div className="ml-6">
          <Settings locale={locale} />
        </div>
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
