"use client";

import { useCurrency } from "@/store/store-context";

const ThemeSwitcher = () => {
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { theme, setSelectedTheme } = useCurrency();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setSelectedTheme(newTheme);

    // Update the HTML root class
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    // Save theme to localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={toggleTheme}
    >
      {/* Light Mode Icon */}
      {/* <span className="text-yellow-500">{theme === "light" ? "☀️" : "🌕"}</span> */}

      {/* Slider */}
      <div className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300">
        <div
          className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-all duration-300 ${
            theme === "light"
              ? "translate-x-0 bg-gray-900"
              : "translate-x-6 bg-gray-50"
          }`}
        />
      </div>

      {/* Dark Mode Icon */}
      {/* <span className="text-blue-500">{theme === "dark" ? "🌙" : "⭐"}</span> */}
    </div>
  );
};

export default ThemeSwitcher;
