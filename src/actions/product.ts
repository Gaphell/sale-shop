"use server";

interface ProductReview {
  rating: number;
  comment: string;
  date: string; // ISO format date string
  reviewerName: string;
  reviewerEmail: string;
}

interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

interface ProductMeta {
  createdAt: string; // ISO format date string
  updatedAt: string; // ISO format date string
  barcode: string;
  qrCode: string; // URL for QR code
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
  images: string[]; // Array of image URLs
  thumbnail: string; // URL for thumbnail image
}

export const fetchProduct = async (id: string) => {
  let response;
  try {
    response = await fetch(`https://dummyjson.com/products/${id}`);

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
