import { useSettings } from "../context/SettingsContext";
import type { Currency } from "../types/settings";
import { CreditCard, Check, Globe } from "lucide-react";

export function SettingsPage() {
  const { currency, setCurrency } = useSettings();

  const currencies: { value: Currency; label: string; symbol: string }[] = [
    { value: "USD", label: "USD - United States Dollar", symbol: "$" },
    { value: "EUR", label: "EUR - Euro", symbol: "€" },
    { value: "GBP", label: "GBP - British Pound", symbol: "£" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          App Settings
        </h1>
        <p className="text-lg text-slate-600">
          Customize your experience and preferences.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Section Header */}
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
            <Globe className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Regional Preferences
            </h2>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-4 ml-1">
                Display Currency
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currencies.map((c) => {
                  const isActive = currency === c.value;
                  return (
                    <button
                      key={c.value}
                      onClick={() => setCurrency(c.value)}
                      className={`relative flex items-center p-4 rounded-xl border text-left transition-all duration-200 outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                        isActive
                          ? "border-indigo-600 bg-indigo-50/50 text-indigo-900"
                          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-lg font-bold ${
                              isActive ? "text-indigo-600" : "text-slate-900"
                            }`}
                          >
                            {c.symbol}
                          </span>
                          <span className="font-semibold">{c.value}</span>
                        </div>
                        <p
                          className={`text-xs ${
                            isActive ? "text-indigo-700" : "text-slate-500"
                          }`}
                        >
                          {c.label.split(" - ")[1]}
                        </p>
                      </div>

                      {isActive && (
                        <div className="absolute top-3 right-3 text-indigo-600">
                          <Check className="w-4 h-4" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg bg-amber-50 border border-amber-100 p-4">
              <div className="flex gap-3">
                <div className="shrink-0">
                  <CreditCard className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-amber-800">
                    Currency Conversion
                  </h3>
                  <p className="mt-1 text-sm text-amber-700">
                    Prices are converted locally using static rates for
                    demonstration purposes. Actual transaction rates may vary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
