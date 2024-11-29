import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export type Locale = "en" | "de";

export const routing = defineRouting({
  locales: ["en", "de"], // Define in this line the possible languages for translation
  defaultLocale: "en", // Define in this line the default language to be shown
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
