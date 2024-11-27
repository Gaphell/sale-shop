"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function replaceLanguageInUrl(currentUrl: string, newLang: string): string {
  const parts = currentUrl.split("/"); // Split the path into segments

  // Replace the language code in the first segment if it exists
  if (parts[1].length === 2) {
    // Assuming language codes are two characters long
    parts[1] = newLang;
  } else {
    // If no language code exists, add it at the beginning
    parts.splice(1, 0, newLang);
  }

  const newUrl = parts.join("/"); // Reconstruct the URL
  // window.history.pushState(null, null, newUrl); // Update the URL without reloading
  // console.log('Updated URL:', newUrl); // For debugging
  return newUrl;
}

interface LanguageSwitcherProps {
  locale: string;
}

const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { locale } = props;
  const pathname = usePathname();

  const languages = [
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
  ];

  return (
    <div className="flex gap-2 text-sm items-center font-medium text-gray-700 dark:text-gray-300">
      <span>🌎</span>
      {languages.map(({ code, label }, index) => {
        const linkName = replaceLanguageInUrl(pathname, code);
        return (
          <span key={code}>
            <Link
              href={linkName}
              hrefLang={code}
              className={`transition-colors ${
                locale === code
                  ? "text-blue-500 font-semibold"
                  : "hover:text-blue-400"
              }`}
            >
              {label}
            </Link>
            {index < languages.length - 1 && <span className="pl-2">|</span>}
          </span>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
