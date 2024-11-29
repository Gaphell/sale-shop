"use server";

export interface Category {
  name: string;
  slug: string;
  url: string;
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
    const data = await response.json();
    return replaceImageUrl(data);
  } catch (e) {
    console.error("Error fetching products:", e);
    return null;
  }
};
