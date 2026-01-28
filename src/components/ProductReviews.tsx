import StarIcon from "./Shared/StarIcon";
import type { Product, ProductReview } from "../types/product";

export function ProductReviews({ product }: { product: Product }) {
  const reviews = product.reviews || [];

  return (
    <div className="border bg-white border-slate-200 rounded-lg p-5">
      <h2 className="text-xl font-bold mb-4">Reviews ({reviews.length})</h2>

      <div className="space-y-6">
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          reviews.map((review: ProductReview, index: number) => (
            <div
              key={index}
              className="border-b border-gray-100 pb-4 last:border-0"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
                    {review.reviewerName?.charAt(0) || "U"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {review.reviewerName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <StarIcon value={review.rating} />
              </div>
              <p className="text-gray-700 text-sm">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
