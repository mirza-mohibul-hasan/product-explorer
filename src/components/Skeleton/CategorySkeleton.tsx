export function CategorySkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-pulse">
      {/* Header Section Skeleton */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-block h-12 w-12 bg-gray-200 rounded-full mb-2"></div>
        <div className="h-8 w-64 bg-gray-200 rounded mx-auto"></div>
        <div className="h-6 w-96 bg-gray-200 rounded mx-auto"></div>
      </div>

      {/* Categories Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-xl p-6 flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="h-6 w-32 bg-gray-200 rounded"></div>
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </div>
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
