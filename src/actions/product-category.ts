"use server";

export interface Category {
  name: string; // The name of the category
  slug: string; // The slugified version of the category name
  url: string; // The URL pointing to the category's page
  image: string;
}

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function replaceImageUrl(categories: Array<Category>) {
  return categories.map((category) => ({
    ...category,
    image: `https://picsum.photos/400/300?random=${getRandomNumber(1, 100)}`,
  }));
}

export const fetchProductCategory = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json(); // Parse JSON response
    return replaceImageUrl(data);
  } catch (e) {
    console.error("Error fetching products:", e);
    return null; // Return null or an appropriate fallback value
  }
};
