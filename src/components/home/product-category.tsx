import { fetchProductCategory } from "@/actions";
import ProductCategoryList from "./product-category-list";
import { notFound } from "next/navigation";
import { Category } from "@/actions/product-category";

interface ProductCategoryProps {
  locale: string;
}

// Type guard to check if the response is an error object
function isErrorResponse(
  response: Array<Category> | { error: string },
): response is { error: string } {
  return (response as { error: string }).error !== undefined;
}

const ProductCategory = async (props: ProductCategoryProps) => {
  const { locale } = props;

  const response = (await fetchProductCategory()) || [];

  if (isErrorResponse(response)) {
    notFound();
  }

  return <ProductCategoryList categories={response} locale={locale} />;
};

export default ProductCategory;
