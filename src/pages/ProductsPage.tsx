import { useProducts } from "../hooks/useProducts";

export function ProductsPage() {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useProducts();
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Products</h1>

      {data?.pages.map((page, i) => (
        <ul key={i} className="space-y-2">
          {page.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      ))}

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="px-4 py-2 border rounded"
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}
