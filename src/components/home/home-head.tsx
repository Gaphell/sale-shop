import { useTranslations } from "next-intl";
import Head from "next/head";

const HomeHead = () => {
  const t = useTranslations("Home"); // declare the hook passing into parameter a context name

  return (
    <Head>
      <title>{t("meta.title")}</title>
      <meta name="description" content={t("meta.description")} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={t("meta.title")} />
      <meta property="og:description" content={t("meta.description")} />
      <meta property="og:url" content="https://yourwebsite.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.jpg" />
    </Head>
  );
};

export default HomeHead;
