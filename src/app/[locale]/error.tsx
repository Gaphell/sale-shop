"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex-grow px-8 py-12 md:px-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 flex items-center justify-center">
      <div className="text-center max-w-lg">
        <h2 className="text-4xl font-bold text-red-500 mb-4">
          Something went wrong!
        </h2>
        <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
          An unexpected error has occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-gray-900 dark:bg-gray-50 px-8 sm:px-12 py-2 rounded-lg text-white dark:text-gray-900 text-sm sm:text-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gray-700 dark:hover:bg-gray-200"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
