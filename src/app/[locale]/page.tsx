import HeroProduct from "@/components/home/hero-product";
import HomeHead from "@/components/home/home-head";
import ProductCategory from "@/components/home/product-category";
import React from "react";

interface HomeProps {
  params: { locale: string };
}

export default async function Home(props: HomeProps) {
  const { locale } = await props.params;

  return (
    <div>
      <HomeHead />
      <main>
        <HeroProduct />
        <ProductCategory locale={locale} />
      </main>
    </div>
  );
}
