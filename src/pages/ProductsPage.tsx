import { ProductFilters } from "../components/ProductFilters";
import { ProductTable } from "../components/ProductTable";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { sortProducts } from "../utils/sortProducts";
import { useProductFilterStore } from "../store/useProductFilterStore";
import { useProducts } from "../hooks/useProducts";
import { useSyncFiltersToUrl } from "../hooks/useSyncFiltersToUrl";
import { useHydrateFiltersFromUrl } from "../hooks/useHydrateFiltersFromUrl";
import { TableSkeleton } from "../components/Skeleton/TableSkeleton";

export function ProductsPage() {
  const filters = useProductFilterStore();

  useHydrateFiltersFromUrl();
  useSyncFiltersToUrl(filters);

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useProducts(filters);

  const loadMoreRef = useInfiniteScroll(
    fetchNextPage,
    !!hasNextPage && !isFetchingNextPage,
  );

  const products = data?.pages.flatMap((p) => p.products) ?? [];

  const sorted =
    filters.sortBy === "price"
      ? sortProducts(products, filters.sortOrder)
      : products;

  if (!isFetching && products.length === 0) {
    return (
      <div className="space-y-4 text-center">
        <h2 className="text-lg font-semibold">No products found</h2>
        <p className="text-gray-500">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Products</h1>

      <ProductFilters />

      {isFetching && !data ? (
        <TableSkeleton />
      ) : (
        <ProductTable products={sorted} />
      )}

      {/* Infinite scroll trigger */}
      {hasNextPage && <div ref={loadMoreRef} className="h-8" />}

      {isFetchingNextPage && <TableSkeleton />}
    </div>
  );
}
