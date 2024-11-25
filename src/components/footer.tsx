import LanguageSwitcher from "./languageSwitcher";

const Footer = ({ locale }: { locale: string }) => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Section */}
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold">E-Shop</span>. All rights reserved.
        </div>

        {/* Right Section */}
        <div className="flex gap-6 items-center">
          {/* Language Switcher */}
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
