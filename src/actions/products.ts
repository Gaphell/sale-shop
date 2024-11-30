"use server";

interface FetchProductsParams {
  limit?: number;
  skip?: number;
}

export const fetchProducts = async ({
  limit = 10,
  skip = 0,
}: FetchProductsParams) => {
  try {
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    const response = await fetch(url);

    // Check if the HTTP status is okay
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (e: unknown) {
    // Log detailed error information
    if (e instanceof Error) {
      console.error("Error fetching products:", e.message);
    } else {
      console.error("Unknown error occurred while fetching products:", e);
    }

    // Optionally rethrow the error or return a default value
    return { error: "Failed to fetch products. Please try again later." };
  }
};
