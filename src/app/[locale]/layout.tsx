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
import { StoreProvider } from "@/store/store-context";

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
  keywords:
    "e-commerce, discount, online shopping, best deals, sale, shopping platform, secure payment, fast delivery",
  authors: [{ name: "Sale-Shop Team" }],
  applicationName: "Sale Shop",
  openGraph: {
    title: "Sale-Shop - Your Ultimate E-Commerce Destination",
    description:
      "Shop the best deals at Sale-Shop, your go-to destination for online shopping. Explore a variety of products with fast shipping and secure payment.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    type: "website",
    images: "https://picsum.photos/1200/400",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sale-Shop - Your Ultimate E-Commerce Destination",
    description:
      "Shop at Sale-Shop for the best deals on a wide range of products. Experience secure payments and fast delivery.",
    images: "https://picsum.photos/1200/400",
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
          <StoreProvider>
            <Header locale={locale} />
            <main className="flex-grow px-8 py-8 md:px-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
              {children}
            </main>
            <Footer />
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
