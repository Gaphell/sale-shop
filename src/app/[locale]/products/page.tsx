import { fetchProducts } from "@/actions";
import ProductListPage from "@/components/products/product-list";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(
  props: ProductsPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const { locale } = await props.params;
  const pageTitle = "Products | Sale Shop";

  const pageDescription =
    "Explore our collection of products. Find the best deals and shop now!";

  const pageUrl = `${process.env.baseUrl}/${locale}/products`;

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

export default async function ProductsPage(props: ProductsPageProps) {
  const { locale } = await props.params;
  const data = await fetchProducts({});

  if (data?.error) {
    notFound();
  }

  return <ProductListPage locale={locale} data={data} />;
}
