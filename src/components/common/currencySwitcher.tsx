"use client";

import { useState } from "react";

const CurrencySwitcher = () => {
  const [selectedCurrency, setCurrency] = useState("USD");
  const currencies = ["USD", "EUR", "GBP", "INR"];

  return (
    <div className="relative flex gap-2 items-center w-full max-w-xs">
      <span>$</span>
      <select
        value={selectedCurrency}
        onChange={(e) => setCurrency(e.target.value)}
        className="block w-full px-3 py-2 rounded-md shadow-sm appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 text-sm sm:px-4 sm:py-2"
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <svg
        className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        width="12"
        height="12"
      >
        <path fillRule="evenodd" d="M10 14l-5-5h10l-5 5z" clipRule="evenodd" />
      </svg>
    </div>
  );
};

export default CurrencySwitcher;
