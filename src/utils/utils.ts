import { ExchangeRateKey, ExchangeRates } from "@/actions/exchange-rates";

export const currencyMapping: Record<string, { name: string; symbol: string }> =
  {
    USD: { name: "United States Dollar", symbol: "$" },
    EUR: { name: "Euro", symbol: "€" },
    GBP: { name: "British Pound Sterling", symbol: "£" },
    INR: { name: "Indian Rupee", symbol: "₹" },
  };

export const convertCurrency = (
  amount: number,
  currency: ExchangeRateKey,
  rates: Partial<ExchangeRates>
) => {
  const rate = (currency && rates && rates[currency]) || 1;
  return (
    currency &&
    `${currencyMapping[currency]?.symbol} ${Math.round(amount * rate)}`
  );
};
