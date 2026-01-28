import { createContext, useContext } from "react";
import type { Currency } from "../types/settings";

interface SettingsContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
