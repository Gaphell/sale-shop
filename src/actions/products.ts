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
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Error fetching products:", e);
    return null;
  }
};
