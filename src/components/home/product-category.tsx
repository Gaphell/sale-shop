import { fetchProductCategory } from "@/actions";
import ProductCategoryList from "./product-category-list";

interface ProductCategoryProps {
  locale: string;
}

const ProductCategory = async (props: ProductCategoryProps) => {
  const { locale } = props;

  const categories = (await fetchProductCategory()) || [];

  return <ProductCategoryList categories={categories} locale={locale} />;
};

export default ProductCategory;
