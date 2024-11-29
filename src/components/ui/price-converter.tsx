"use client";

import { useCurrency } from "@/store/store-context";
import { useMemo } from "react";

interface PriceConverterProps {
  price: number;
}

const PriceConverter = ({ price }: PriceConverterProps) => {
  const { convertPrice } = useCurrency();

  const convertedPrice = useMemo(
    () => convertPrice(price),
    [price, convertPrice]
  );

  return <span>{convertedPrice}</span>;
};

export default PriceConverter;
