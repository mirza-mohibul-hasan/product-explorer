export function ProductDetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="h-10 bg-gray-200 rounded-lg mb-6 shadow-sm w-1/3"></div>

      {/* Main Content Skeleton */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column - Images */}
        <div className="flex flex-col gap-4 h-full lg:col-span-5">
          <div className="relative w-full aspect-square bg-gray-200 rounded-xl overflow-hidden p-4"></div>
          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide py-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="shrink-0 w-20 h-24 bg-gray-200 rounded-lg"
              ></div>
            ))}
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6 h-full flex flex-col lg:col-span-7">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-full flex flex-col">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="h-6 w-32 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            </div>

            <div className="h-10 w-3/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 w-1/4 bg-gray-200 rounded mb-4"></div>

            {/* Tags */}
            <div className="flex gap-2 mb-4">
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            </div>

            <div className="my-6 border-y border-gray-100 py-4 space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>

            {/* Pricing */}
            <div className="flex items-end gap-3 flex-wrap mb-6">
              <div className="h-10 w-40 bg-gray-200 rounded"></div>
            </div>

            {/* Stock */}
            <div className="h-6 w-32 bg-gray-200 rounded mb-6"></div>

            {/* Specifications */}
            <div className="mt-2 border-t border-gray-100 pt-2 grid grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 w-full bg-gray-200 rounded"></div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6">
              <div className="h-12 flex-1 bg-gray-200 rounded-lg"></div>
              <div className="h-12 w-16 bg-gray-200 rounded-lg"></div>
              <div className="h-12 w-16 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
