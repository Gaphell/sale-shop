import ProductDetailsPage from "../../../[id]/page";

interface ProductDetailsWithCategoryPageProps {
  params: {
    locale: string;
    slug: string;
    id: string;
  };
}

export default async function ProductDetailsWithCategoryPage(
  props: ProductDetailsWithCategoryPageProps
) {
  const { locale, slug, id } = await props.params;

  return <ProductDetailsPage params={{ locale, slug, id }} />;
}
