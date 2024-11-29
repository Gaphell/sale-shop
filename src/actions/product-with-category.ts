"user server";

interface fetchProductsWithCategoryParams {
  slug?: string;
  limit?: number;
  skip?: number;
}

export const fetchProductsWithCategory = async ({
  slug,
  limit = 10,
  skip = 0,
}: fetchProductsWithCategoryParams) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${slug}?limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Error fetching products with category:", e);
    return null;
  }
};
