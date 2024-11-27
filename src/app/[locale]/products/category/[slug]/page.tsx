import { fetchProductsWithCategory } from "@/actions";
import ProductListPage from "@/components/products/product-list";

interface ProductCategoryProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default async function ProductCategory(props: ProductCategoryProps) {
  const { locale, slug } = await props.params;

  const data = await fetchProductsWithCategory({ slug });

  return <ProductListPage locale={locale} data={data} slug={slug} />;
}
