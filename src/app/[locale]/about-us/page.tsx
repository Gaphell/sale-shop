import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Sale Shop",
  description:
    "Learn more about Sale Shop, your trusted e-commerce platform for the best deals on tech gadgets, home essentials, fashion, and more.",
  openGraph: {
    url: `${process.env.baseUrl}/about-us`,
  },
};

export default function AboutUs() {
  return (
    <div className="flex justify-center items-center p-8 bg-gray-50 dark:bg-gray-900 text-center rounded-lg">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-semibold mb-4">Sale Shop</h1>
        <p className="text-lg mb-6">
          Welcome to <strong>Sale Shop</strong> – your trusted e-commerce
          platform for unbeatable prices and high-quality products! From the
          latest <strong>tech gadgets</strong> to trendy{" "}
          <strong>fashion</strong> and essential <strong>home products</strong>,
          we offer a vast selection of items to suit all your needs.
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
  );
}
