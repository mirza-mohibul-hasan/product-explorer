import { Link } from "react-router";
import { useCategories } from "../hooks/useCategories";
import { ArrowRight } from "lucide-react";

import { CategorySkeleton } from "../components/Skeleton/CategorySkeleton";

export function CategoriesPage() {
  const { data, isLoading, error } = useCategories();

  if (isLoading) {
    return <CategorySkeleton />;
  }

  if (error || !data) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 font-medium">Failed to load categories.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 text-indigo-600 hover:text-indigo-700 underline"
        >
          Try again
        </button>
      </div>
    );
  }

  if (!isLoading && data.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500">
        No categories available at the moment.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Explore Categories
        </h1>
        <p className="text-lg text-slate-600">
          Here are our product categories. Please select one to see its details.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((category) => (
          <Link
            key={category.slug}
            to={`/products?category=${category.slug}`}
            className="group relative overflow-hidden bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block"
          >
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 capitalize group-hover:text-indigo-600 transition-colors">
                  {category.name}
                </h3>
                <span className="text-sm text-slate-500 mt-1 inline-block">
                  Browse products
                </span>
              </div>

              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
