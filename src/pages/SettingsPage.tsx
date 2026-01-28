import { useSettings } from "../context/SettingsContext";
import type { Currency } from "../types/settings";

export function SettingsPage() {
  const { currency, setCurrency } = useSettings();

  const currencies: { value: Currency; label: string }[] = [
    { value: "USD", label: "USD ($)" },
    { value: "EUR", label: "EUR (€)" },
    { value: "GBP", label: "GBP (£)" },
  ];

  return (
    <div className="space-y-6 max-w-md">
      <h1 className="text-xl font-semibold">Settings</h1>

      <div className="space-y-3">
        <label className="block text-sm font-medium">Currency</label>

        <div className="flex flex-col gap-2">
          {currencies.map((c) => (
            <label
              key={c.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="currency"
                value={c.value}
                checked={currency === c.value}
                onChange={() => setCurrency(c.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm">{c.label}</span>
            </label>
          ))}
        </div>

        <p className="text-sm text-gray-500 pt-2">
          Prices are converted locally using static rates.
        </p>
      </div>
    </div>
  );
}
