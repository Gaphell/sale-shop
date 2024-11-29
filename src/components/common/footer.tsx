import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 py-6 px-16 h-16">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
        <div className="text-sm text-center md:text-left">
          &copy; {currentYear}{" "}
          <Link href="/">
            <span className="font-bold">Sale-Shop</span>
          </Link>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
