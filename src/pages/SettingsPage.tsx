import { useSettingsStore } from "../store/useSettingsStore";
import type { Currency } from "../types/settings";

export function SettingsPage() {
  const { currency, setCurrency } = useSettingsStore();

  const currencies: Currency[] = ["USD", "EUR", "GBP"];

  return (
    <div className="space-y-6 max-w-md">
      <h1 className="text-xl font-semibold">Settings</h1>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Currency</label>

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as Currency)}
          className="w-full rounded border px-3 py-2"
        >
          {currencies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <p className="text-sm text-gray-500">
          Prices are converted locally using static rates.
        </p>
      </div>
    </div>
  );
}
