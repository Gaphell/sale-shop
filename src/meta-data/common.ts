export const metadataConfig = {
  keywords:
    "e-commerce, discount, online shopping, best deals, sale, shopping platform, secure payment, fast delivery",
  authors: [{ name: "Sale-Shop Team" }],
  applicationName: "Sale Shop",
  openGraph: {
    title: "Sale-Shop - Your Ultimate E-Commerce Destination",
    description:
      "Shop the best deals at Sale-Shop, your go-to destination for online shopping. Explore a variety of products with fast shipping and secure payment.",
    url: process.env.baseUrl || "https://default-site.com",
    type: "website",
    images: "https://picsum.photos/1200/400",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sale-Shop - Your Ultimate E-Commerce Destination",
    description:
      "Shop at Sale-Shop for the best deals on a wide range of products. Experience secure payments and fast delivery.",
    images: "https://picsum.photos/1200/400",
  },
};
