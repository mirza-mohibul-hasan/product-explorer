import { useProductFilterStore } from "../store/useProductFilterStore";

export function ProductsPage() {
  const { search, setSearch, sortOrder, setSortOrder, resetFilters } =
    useProductFilterStore();

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Products</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="border px-2 py-1 rounded"
      />

      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        className="px-3 py-1 border rounded"
      >
        Sort: {sortOrder}
      </button>

      <button onClick={resetFilters} className="px-3 py-1 border rounded">
        Reset
      </button>
    </div>
  );
}
