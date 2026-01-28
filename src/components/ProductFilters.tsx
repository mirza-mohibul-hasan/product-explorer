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

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* Search */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full sm:w-64 rounded border px-3 py-2 text-sm"
      />

      {/* Sorting */}
      <div className="flex items-center gap-2">
        <select
          value={sortBy ?? ""}
          onChange={(e) =>
            setSortBy(e.target.value === "" ? undefined : "price")
          }
          className="rounded border px-2 py-2 text-sm"
        >
          <option value="">Sort by</option>
          <option value="price">Price</option>
        </select>

        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="rounded border px-3 py-2 text-sm"
        >
          {sortOrder === "asc" ? "↑ Asc" : "↓ Desc"}
        </button>

        <button
          onClick={resetFilters}
          className="rounded border px-3 py-2 text-sm text-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
