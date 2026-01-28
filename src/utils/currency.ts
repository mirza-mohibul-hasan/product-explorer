import type { Currency } from "../types/settings";

const RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 0.83,
  GBP: 0.73,
};

const SYMBOLS: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};

export function formatCurrency(value: number, currency: Currency) {
  const converted = value * RATES[currency];
  return `${SYMBOLS[currency]}${converted.toFixed(2)}`;
}
