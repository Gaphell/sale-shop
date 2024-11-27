import { fetchProductCategory } from "@/actions";
import ProductCategoryList from "./product-category-list";
import { setRequestLocale } from "next-intl/server";

interface ProductCategoryProps {
  locale: string;
}

const ProductCategory = async (props: ProductCategoryProps) => {
  const { locale } = props;

  // Enable static rendering
  setRequestLocale(locale);

  const categories = (await fetchProductCategory()) || [];

  return <ProductCategoryList categories={categories} locale={locale} />;
};

export default ProductCategory;
