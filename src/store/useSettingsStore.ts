import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Currency } from "../types/settings";

interface SettingsState {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      currency: "USD",
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: "product-explorer-settings",
    },
  ),
);
