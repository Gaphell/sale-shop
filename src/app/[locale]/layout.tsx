import "../globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sale-Shop - Your Ultimate E-Commerce Destination",
  description:
    "Sale-Shop is a modern online shopping platform offering the best deals on products. Discover a wide range of items from top categories with secure payment options and fast delivery.",
  keywords:
    "e-commerce, discount, online shopping, best deals, sale, shopping platform, secure payment, fast delivery",
  authors: [{ name: "Sale-Shop Team" }],
  openGraph: {
    title: "Sale-Shop - Your Ultimate E-Commerce Destination",
    description:
      "Shop the best deals at Sale-Shop, your go-to destination for online shopping. Explore a variety of products with fast shipping and secure payment.",
    url: "https://www.sale-shop.com", // Change to your website URL
    type: "website",
    images: "https://picsum.photos/1200/400", // Change to your image URL for the Open Graph
  },
  twitter: {
    card: "summary_large_image", // Twitter card type
    site: "@sale_shop", // Your Twitter handle
    title: "Sale-Shop - Your Ultimate E-Commerce Destination",
    description:
      "Shop at Sale-Shop for the best deals on a wide range of products. Experience secure payments and fast delivery.",
    images: "https://picsum.photos/1200/400", // Change to your image URL for Twitter
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  // Check if the locale is valid, if not show a 404 error page
  if (!routing.locales.includes((locale as "en") || "de")) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  let messages;
  try {
    messages = await getMessages();
  } catch (e) {
    messages = "en"; // Default fallback locale
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <NextIntlClientProvider messages={messages as AbstractIntlMessages}>
          <Header locale={locale} />
          <main className="flex-grow px-8 py-8 md:px-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
