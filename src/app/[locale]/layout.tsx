import "../globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { StoreProvider } from "@/store/store-context";
import localFont from "next/font/local";
import { metadataConfig } from "@/meta-data/common";
import dynamic from "next/dynamic";
import { Locale, routing } from "@/i18n/routing";

// Dynamically import non-critical components
const Header = dynamic(() => import("@/components/common/header"));
const Footer = dynamic(() => import("@/components/common/footer"), {
  loading: () => <div className="h-16" />,
});

// Fonts
const geistSansFont = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMonoFont = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Export metadata for the app
export const metadata: Metadata = metadataConfig;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  // Fetch messages for the locale
  const messages = await getMessages();

  // Validate and set locale
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSansFont.variable} ${geistMonoFont.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
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
