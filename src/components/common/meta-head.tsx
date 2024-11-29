"use client";

import Head from "next/head";

interface MetaHeadProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string; // For Open Graph type (e.g., "website" or "article")
  additionalMeta?: React.ReactNode; // For any additional meta tags
}

export default function MetaHead({
  title,
  description,
  url,
  image = "https://picsum.photos/1200/400?random=1",
  type = "website",
  additionalMeta,
}: MetaHeadProps) {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : typeof window !== "undefined"
    ? window.location.origin
    : "";

  const fullUrl = `${baseUrl}${url}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="products, shopping, deals, e-commerce" />
      <meta name="author" content="My Shop" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      {additionalMeta}
    </Head>
  );
}
