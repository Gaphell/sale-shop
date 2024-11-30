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

export const fetchProductCategory = async (): Promise<
  Array<Category> | { error: string }
> => {
  try {
    const response = await fetch("https://dummyjson.com/products/categories");

    // Check if the HTTP status is okay
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} - ${response.statusText}`,
      );
    }

    const data = await response.json();
    return replaceImageUrl(data);
  } catch (e: unknown) {
    // Log detailed error information
    if (e instanceof Error) {
      console.error("Error fetching product category:", e.message);
    } else {
      console.error(
        "Unknown error occurred while fetching product category:",
        e,
      );
    }

    // Optionally rethrow the error or return a default value
    return {
      error: "Failed to fetch product category. Please try again later.",
    };
  }
};
