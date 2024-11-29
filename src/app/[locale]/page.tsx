import HeroProduct from "@/components/home/hero-product";
import ProductCategory from "@/components/home/product-category";
import type { Metadata } from "next";
import React from "react";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export const metadata: Metadata = {
  title: "Welcome to Sale Shop | Best Deals Online",
  description:
    "Shop the best deals and offers across various categories. Fast delivery and quality products.",
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  },
};

export default async function Home(props: HomeProps) {
  const { locale } = await props.params;

  return (
    <div>
      <HeroProduct />
      <ProductCategory locale={locale} />
    </div>
  );
}
