import { Metadata, ResolvingMetadata } from "next";
import ProductDetailsPage from "../../../[id]/page";
import { fetchProduct } from "@/actions";

interface ProductDetailsWithCategoryPageProps {
  params: Promise<{
    locale: string;
    slug: string;
    id: string;
  }>;
}

export async function generateMetadata(
  props: ProductDetailsWithCategoryPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale, id, slug } = await props.params;

  const product = await fetchProduct(id);

  const pageTitle = `${product.title} - ${slug} - Sale Shop`;

  const pageDescription = product.description || "Best product for your needs!";

  const pageUrl = `/${locale}/products/category/${slug}/${id}`;

  const productImage =
    product.thumbnail ?? "https://picsum.photos/200/200?random=1";

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      images: [productImage, ...previousImages],
      url: pageUrl,
    },
  };
}

export default async function ProductDetailsWithCategoryPage(
  props: ProductDetailsWithCategoryPageProps
) {
  return <ProductDetailsPage params={props.params} />;
}
