"use client";

import { useEffect, useRef, useState } from "react";
import CurrencySwitcher from "./currency-switcher";
import LanguageSwitcher from "./language-switcher";
import ThemeSwitcher from "./theme-switcher";
import { ExchangeRates } from "@/actions/exchange-rates";
import { useCurrency } from "@/store/store-context";

interface SettingsProps {
  locale: string;
  rates: ExchangeRates;
}

const Settings = (props: SettingsProps) => {
  const { locale, rates } = props;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const { setExchangeRates } = useCurrency();

  useEffect(() => {
    // Close the dropdown if clicked outside
    const handleClickOutside = (event: Event) => {
      // Check if the click is outside both the dropdown and the button (gear icon)
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (rates) {
      setExchangeRates(rates);
      localStorage.setItem("rates", JSON.stringify(rates));
    }
  }, [rates]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      {/* Settings Icon Button */}
      <button
        ref={buttonRef}
        className="p-2 focus:outline-none"
        onClick={toggleDropdown}
      >
        {/* ⚙️ Icon for settings */}
        <span className="text-4xl">⚙︎</span>
      </button>
      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-56 p-4 border rounded-md shadow-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-gray-100 animate-fade-in"
          role="menu"
          aria-labelledby="settings-menu"
        >
          <div className="flex flex-col gap-4">
            <ThemeSwitcher />
            <LanguageSwitcher locale={locale} />
            <CurrencySwitcher />
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
