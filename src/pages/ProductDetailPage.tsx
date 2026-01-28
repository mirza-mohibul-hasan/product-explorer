import { useParams, Link } from "react-router";
import { useProduct } from "../hooks/useProduct";

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const productId = id ? Number(id) : undefined;

  const { data, isLoading, error } = useProduct(productId);

  if (isLoading) {
    return <p className="animate-pulse">Loading product…</p>;
  }

  if (error || !data) {
    return (
      <div className="space-y-4">
        <p className="text-red-600">Failed to load product.</p>
        <Link to="/products" className="text-blue-600 hover:underline">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/products" className="text-blue-600 hover:underline">
        Back to products
      </Link>

      <div className="grid gap-6 md:grid-cols-2">
        <img src={data.thumbnail} alt={data.title} className="w-full" />

        <div className="space-y-3">
          <h1 className="text-2xl font-semibold">{data.title}</h1>
          <p className="text-gray-600">{data.description}</p>

          <div className="flex items-center gap-4">
            <span className="text-xl font-bold">${data.price}</span>
            <span className="text-sm text-gray-500">Stock: {data.stock}</span>
          </div>

          <div className="text-sm text-gray-500">
            Category: <span className="capitalize">{data.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
