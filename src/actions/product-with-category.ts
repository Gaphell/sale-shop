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
      `https://dummyjson.com/products/category/${slug}?limit=${limit}&skip=${skip}`,
    );

    // Check if the HTTP status is okay
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} - ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (e: unknown) {
    // Log detailed error information
    if (e instanceof Error) {
      console.error("Error fetching products:", e.message);
    } else {
      console.error(
        "Unknown error occurred while fetching products with category:",
        e,
      );
    }

    // Optionally rethrow the error or return a default value
    return {
      error: "Failed to fetch products with category. Please try again later.",
    };
  }
};
