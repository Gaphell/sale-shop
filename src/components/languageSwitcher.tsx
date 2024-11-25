import Link from "next/link";

const LanguageSwitcher = ({ currentLocale }: { currentLocale: string }) => {
  const languages = [
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
  ];

  return (
    <div className="flex gap-2">
      {languages.map(({ code, label }) => (
        <Link
          key={code}
          href={`/${code}`}
          hrefLang={code}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
            currentLocale === code
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
