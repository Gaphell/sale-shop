"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./themeSwitcher";
import Image from "next/image";

const Header = ({ locale }: { locale: string }) => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const storedTheme = localStorage.getItem("theme") || "light";

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-50 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 relative sticky top-0 z-50 shadow-sm">
      <div className="px-4 md:px-12 mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-extrabold tracking-tight">
          <Link
            href="/"
            className="text-gray-800 hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-200"
          >
            {/* Sale-Shop */}
            <Image
              src={storedTheme === "light" ? "/logo.svg" : "/logo-dark.svg"} // Path to your SVG file in the public directory
              alt="Sale-Shop Logo"
              width={120} // Width of the logo
              height={120} // Height of the logo
            />
          </Link>
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
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
        </nav>

        {/* Theme Switcher */}
        <div className="ml-6 hidden md:block">
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="container mx-auto p-4">
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="text-white dark:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col items-center gap-6">
              <Link
                href="/"
                className="text-lg font-medium text-white hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href={`/${locale}/products`}
                className="text-lg font-medium text-white hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-200"
              >
                Products
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
