import { ProductFilters } from "../components/ProductFilters";
import { useProductFilterStore } from "../store/useProductFilterStore";
import { useProducts } from "../hooks/useProducts";
import { useSyncFiltersToUrl } from "../hooks/useSyncFiltersToUrl";
import { useHydrateFiltersFromUrl } from "../hooks/useHydrateFiltersFromUrl";

export function ProductsPage() {
  const filters = useProductFilterStore();

  useHydrateFiltersFromUrl();
  useSyncFiltersToUrl(filters);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useProducts(filters);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Products</h1>

      <ProductFilters />

      {data?.pages.map((page, i) => (
        <ul key={i} className="space-y-2">
          {page.products.map((product) => (
            <li key={product.id} className="rounded border px-3 py-2">
              {product.title}
            </li>
          ))}
        </ul>
      ))}

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="rounded border px-4 py-2"
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}
