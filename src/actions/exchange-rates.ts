"use server";

export const fetchExchangeRages = async () => {
  try {
    const response = await fetch(`https://api.frankfurter.app/latest?base=USD`);

    // Check if the HTTP status is okay
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} - ${response.statusText}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (e: unknown) {
    // Log detailed error information
    if (e instanceof Error) {
      console.error("Error fetching exchange rates:", e.message);
    } else {
      console.error("Unknown error occurred while fetching exchange:", e);
    }

    // Optionally rethrow the error or return a default value
    return { error: "Failed to fetch exchange. Please try again later." };
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
