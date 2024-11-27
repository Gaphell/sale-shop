import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Sale Shop | Quality Products at Great Prices</title>
        <meta
          name="description"
          content="Learn more about Sale Shop, your trusted e-commerce platform for the best deals on tech gadgets, home essentials, fashion, and more."
        />
        <meta
          name="keywords"
          content="Sale Shop, e-commerce, online shopping, tech gadgets, fashion, home essentials, best deals, quality products, affordable prices"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us - Sale Shop" />
        <meta
          property="og:description"
          content="Sale Shop is your go-to e-commerce platform for amazing deals on products in tech, home, fashion, and more."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.saleshop.com/about" />
      </Head>
      <div className="flex justify-center items-center p-8 bg-gray-50 dark:bg-gray-900 text-center rounded-lg">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-semibold mb-4">Sale Shop</h1>
          <p className="text-lg mb-6">
            Welcome to <strong>Sale Shop</strong> – your trusted e-commerce
            platform for unbeatable prices and high-quality products! From the
            latest <strong>tech gadgets</strong> to trendy{" "}
            <strong>fashion</strong> and essential{" "}
            <strong>home products</strong>, we offer a vast selection of items
            to suit all your needs.
          </p>
          <p className="text-lg mb-6">
            At Sale Shop, our mission is to provide a seamless, secure, and
            enjoyable online shopping experience. We offer fast shipping, secure
            payment options, and dedicated customer support to ensure your
            satisfaction.
          </p>
          <p className="text-lg mb-6">
            We believe that everyone deserves to shop with confidence, which is
            why we are always updating our inventory to bring you the best
            products at affordable prices.
          </p>
          <p className="text-lg">
            Thank you for choosing Sale Shop. We are committed to making your
            shopping experience smooth, convenient, and enjoyable.
          </p>
        </div>
      </div>
    </>
  );
}
