import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";
import { HomeSkeleton } from "../components/Skeleton/HomeSkeleton";

export function HomePage() {
  const { data, isLoading, error } = useProducts({
    limit: 12,
  });

  const products = data?.pages.flatMap((page) => page.products) ?? [];

  if (isLoading) {
    return <HomeSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Failed to load products.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero / Header Section */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Explore our Products
        </h1>
        <p className="text-lg text-gray-500">
          Discover the latest trends and bestsellers.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
