export function HomeSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-pulse">
      {/* Hero / Header Section Skeleton */}
      <div className="text-center space-y-4 max-w-sm mx-auto">
        <div className="h-10 bg-gray-200 rounded-lg w-3/4 mx-auto"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
      </div>

      {/* Product Grid Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div
            key={i}
            className="aspect-3/4 w-full overflow-hidden rounded-xl bg-gray-200"
          >
            {/* Optional internal structure to mimic content */}
            <div className="h-full w-full flex flex-col justify-end p-3 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4 opacity-50"></div>
              <div className="flex justify-between items-center opacity-50">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
