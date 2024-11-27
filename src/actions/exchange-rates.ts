"use server";

export const fetchExchangeRages = async () => {
  try {
    const response = await fetch(`https://api.frankfurter.app/latest?base=USD`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching products:", err);
    return null; // Return null or an appropriate fallback value
  }
};

export type ExchangeRateKey = keyof ExchangeRates;

export interface ExchangeRates {
  AUD: number;
  BGN: number;
  BRL: number;
  CAD: number;
  CHF: number;
  CNY: number;
  CZK: number;
  DKK: number;
  EUR: number;
  GBP: number;
  HKD: number;
  HUF: number;
  IDR: number;
  ILS: number;
  INR: number;
  ISK: number;
  JPY: number;
  KRW: number;
  MXN: number;
  MYR: number;
  NOK: number;
  NZD: number;
  PHP: number;
  PLN: number;
  RON: number;
  SEK: number;
  SGD: number;
  THB: number;
  TRY: number;
  ZAR: number;
  USD: number;
}
