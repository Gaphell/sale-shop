"use server";

interface FetchProductsParams {
  limit?: number;
  skip?: number;
}

export const fetchProducts = async ({
  limit = 10,
  skip = 0,
}: FetchProductsParams) => {
  let response;
  try {
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    response = await fetch(url);

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
