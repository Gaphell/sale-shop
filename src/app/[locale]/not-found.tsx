import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-grow px-8 py-12 md:px-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 flex items-center justify-center">
      <div className="text-center max-w-lg">
        <h2 className="text-4xl font-bold text-red-500 mb-4">
          404 - Not Found
        </h2>
        <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
          The resource you requested could not be found.
        </p>
        <Link
          href="/"
          className="bg-gray-900 dark:bg-gray-50 px-8 sm:px-12 py-2 rounded-lg text-white dark:text-gray-900 text-sm sm:text-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gray-700 dark:hover:bg-gray-200"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
