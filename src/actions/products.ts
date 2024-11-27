"use server";

export const fetchProducts = async () => {
  let response;
  try {
    response = await fetch(`https://dummyjson.com/products`);

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
