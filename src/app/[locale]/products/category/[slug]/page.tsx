import { fetchProductsWithCategory } from "@/actions";
import ProductListPage from "@/components/products/product-list";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface ProductCategoryProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata(
  props: ProductCategoryProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug, locale } = await props.params;
  const pageTitle = `Products in ${slug} | Sale Shop`;

  const pageDescription = `Browse a wide selection of products in the category "${slug}". Find great deals and shop now!`;

  const pageUrl = `${process.env.baseUrl}/${locale}/products/category/${slug}`;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      images: ["https://picsum.photos/1200/400", ...previousImages],
      url: pageUrl,
    },
  };
}

export default async function ProductCategory(props: ProductCategoryProps) {
  const { locale, slug } = await props.params;

  const data = await fetchProductsWithCategory({ slug });

  if (data?.error) {
    notFound();
  }

  return <ProductListPage locale={locale} data={data} slug={slug} />;
}
