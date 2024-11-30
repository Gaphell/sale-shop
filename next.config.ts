import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos", "cdn.dummyjson.com"],
  },
  env: {
    baseUrl: "https://sale-shop.vercel.app",
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Apply headers to all routes
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com; style-src 'self' 'unsafe-inline'; object-src 'none'; frame-ancestors 'none';",
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevent clickjacking
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevent MIME sniffing
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Minimal referrer info on cross-origin requests
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload", // HSTS for 2 years
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()", // Restrict permissions
          },
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate", // Disable caching for sensitive data
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
