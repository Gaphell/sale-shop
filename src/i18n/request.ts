import { getRequestConfig } from "next-intl/server";
import { Locale, routing } from "./routing";

interface RequestConfigProps {
  requestLocale: Promise<string | undefined>;
}

export default getRequestConfig(
  async ({ requestLocale }: RequestConfigProps) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as Locale)) {
      locale = routing.defaultLocale;
    }

    return {
      locale,
      messages: (await import(`../../messages/${locale}.json`)).default,
    };
  }
);
