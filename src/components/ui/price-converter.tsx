"use client";

import { useCurrency } from "@/store/store-context";

interface PriceConverterProps {
  price: number;
}

const PriceConverter = (props: PriceConverterProps) => {
  const { convertPrice } = useCurrency();

  const { price } = props;
  return <span>{convertPrice(price)}</span>;
};

export default PriceConverter;
