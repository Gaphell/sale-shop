"use server";

interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
}

export const fetchProduct = async (id: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

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
      console.error("Unknown error occurred while fetching product:", e);
    }

    // Optionally rethrow the error or return a default value
    return { error: "Failed to fetch product. Please try again later." };
  }
};
