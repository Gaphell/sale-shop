import { Dispatch, SetStateAction } from "react";

interface SortingDropdownProps {
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
}

const SortingDropdown = ({ sortBy, setSortBy }: SortingDropdownProps) => {
  const sortingOptions = [
    { value: "name-asc", label: "Name (A-Z)" },
    { value: "name-dsc", label: "Name (Z-A)" },
    { value: "price-asc", label: "Price (Low to High)" },
    { value: "price-dsc", label: "Price (High to Low)" },
  ];

  return (
    <div className="relative w-full sm:w-[300px]">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="block w-full px-4 py-2 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-50 text-sm"
      >
        {sortingOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <svg
        className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        width="16"
        height="16"
      >
        <path fillRule="evenodd" d="M10 14l-5-5h10l-5 5z" clipRule="evenodd" />
      </svg>
    </div>
  );
};

export default SortingDropdown;
