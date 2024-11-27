import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos", "cdn.dummyjson.com"],
  },
};

export default withNextIntl(nextConfig);
