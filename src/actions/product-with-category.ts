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
  let response;
  try {
    response = await fetch(
      `https://dummyjson.com/products/category/${slug}?limit=${limit}&skip=${skip}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // Parse JSON response
    return data;
  } catch (e) {
    console.error("Error fetching products:", e);
    return null; // Return null or an appropriate fallback value
  }
};
