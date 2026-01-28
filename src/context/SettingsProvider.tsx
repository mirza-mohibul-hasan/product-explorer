import { useState, useEffect, type ReactNode } from "react";
import type { Currency } from "../types/settings";
import { SettingsContext } from "./SettingsContext";

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [currency, setStateCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem("product-explorer-settings");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Zustand persist stores data in { state: { currency: ... } }
        return parsed.state?.currency || "USD";
      } catch {
        return "USD";
      }
    }
    return "USD";
  });

  const setCurrency = (c: Currency) => {
    setStateCurrency(c);
  };

  useEffect(() => {
    localStorage.setItem(
      "product-explorer-settings",
      JSON.stringify({ state: { currency } }),
    );
  }, [currency]);

  return (
    <SettingsContext.Provider value={{ currency, setCurrency }}>
      {children}
    </SettingsContext.Provider>
  );
}
