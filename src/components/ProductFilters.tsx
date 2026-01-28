import { Search, X, ArrowUpDown } from "lucide-react";
import { useProductFilterStore } from "../store/useProductFilterStore";

export function ProductFilters() {
  const {
    search,
    setSearch,
    sortOrder,
    setSortOrder,
    sortBy,
    setSortBy,
    resetFilters,
  } = useProductFilterStore();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "price-asc") {
      setSortBy("price");
      setSortOrder("asc");
    } else if (value === "price-desc") {
      setSortBy("price");
      setSortOrder("desc");
    } else {
      setSortBy(undefined);
      setSortOrder("asc");
    }
  };

  const currentSortValue = sortBy ? `${sortBy}-${sortOrder}` : "";

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Search Field */}
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="block w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        />
      </div>

      {/* Controls Group */}
      <div className="flex items-center gap-3">
        {/* Sort Dropdown */}
        <div className="relative min-w-45">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ArrowUpDown className="h-4 w-4 text-gray-400" />
          </div>
          <select
            value={currentSortValue}
            onChange={handleSortChange}
            className="block w-full pl-10 pr-8 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none cursor-pointer transition-colors"
          >
            <option value="">Sort by: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Reset Button */}
        {(search || sortBy) && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
          >
            <X className="h-4 w-4" />
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
