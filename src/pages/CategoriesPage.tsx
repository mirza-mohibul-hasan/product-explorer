import { Link } from "react-router";
import { useCategories } from "../hooks/useCategories";

export function CategoriesPage() {
  const { data, isLoading, error } = useCategories();

  if (isLoading) {
    return <p className="animate-pulse">Loading categories…</p>;
  }

  if (error || !data) {
    return <p className="text-red-600">Failed to load categories.</p>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Categories</h1>

      <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {data.map((category) => (
          <li key={category.slug}>
            <Link
              to={`/products?category=${category.slug}`}
              className="block rounded border px-4 py-3 hover:bg-gray-50 capitalize"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
