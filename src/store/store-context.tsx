"use client";

import { ExchangeRateKey, ExchangeRates } from "@/actions/exchange-rates";
import { convertCurrency } from "@/utils/utils";
import { createContext, useContext, useState, useEffect } from "react";

export interface StoreContextValue {
  currency: ExchangeRateKey;
  theme: string;
  rates: Partial<ExchangeRates>;
  setSelectedCurrency: (currency: ExchangeRateKey) => void;
  setExchangeRates: (rates: ExchangeRates) => void;
  setSelectedTheme: (theme: string) => void;
  convertPrice: (amount: number) => string;
}

const StoreContext = createContext<StoreContextValue>({
  setSelectedCurrency: (currency: ExchangeRateKey) => {},
  setExchangeRates: (rates: ExchangeRates) => {},
  setSelectedTheme: (theme: string) => {},
  theme: "light",
  currency: "USD",
  rates: { USD: 1 },
  convertPrice: (amount: number) => "",
});

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [currency, setCurrency] = useState<ExchangeRateKey>("USD");
  const [rates, setRates] = useState<Partial<ExchangeRates>>({ USD: 1 });
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Load rates from localStorage
    const storedRates = localStorage.getItem("rates");
    const storedTheme = localStorage.getItem("theme") || "light";
    const storedCurrency = localStorage.getItem("currency") || "USD";

    const parsedRates: ExchangeRates = (!!storedRates &&
      JSON.parse(storedRates)) || { USD: 1 };

    setExchangeRates(parsedRates);
    setTheme(storedTheme);
    setSelectedCurrency(storedCurrency as ExchangeRateKey);

    document.documentElement.classList.add(storedTheme);
  }, []);

  const setSelectedCurrency = (currency: ExchangeRateKey) => {
    setCurrency(currency);
  };

  const setExchangeRates = (rates: ExchangeRates) => {
    setRates(rates);
  };

  const setSelectedTheme = (theme: string) => {
    setTheme(theme);
  };

  const convertPrice = (amount: number): string => {
    const rate = (rates && convertCurrency(amount, currency, rates)) || "N/A";
    return rate; // Convert to whole number
  };

  return (
    <StoreContext.Provider
      value={{
        currency,
        theme,
        rates,
        setSelectedCurrency,
        setExchangeRates,
        setSelectedTheme,
        convertPrice,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useCurrency = () => useContext(StoreContext);
