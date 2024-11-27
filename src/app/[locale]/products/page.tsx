import { fetchProducts } from "@/actions";
import ProductListPage from "@/components/products/product-list";

interface ProductsPageProps {
  params: { locale: string };
}

export default async function ProductsPage(props: ProductsPageProps) {
  const { locale } = await props.params;
  const data = await fetchProducts({});

  return <ProductListPage locale={locale} data={data} />;
}
