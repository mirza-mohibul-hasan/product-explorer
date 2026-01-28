import { useState } from "react";
import { Link } from "react-router";
import { Star, Image as ImageIcon } from "lucide-react";
import type { Product } from "../types/product";
import { formatCurrency } from "../utils/currency";
import { useSettingsStore } from "../store/useSettingsStore";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { currency } = useSettingsStore();
  const [imageError, setImageError] = useState(false);

  // Derived calculations
  const originalPrice = product.price / (1 - product.discountPercentage / 100);

  return (
    <div className="group relative aspect-3/4 w-full overflow-hidden rounded-xl bg-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <Link
        to={`/products/${product.id}`}
        className="absolute inset-0 z-10 text-transparent"
        aria-label={`View details for ${product.title}`}
      >
        {product.title}
      </Link>

      {/* Full Image */}
      {!imageError && (product.thumbnail || product.images?.[0]) ? (
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-slate-200 to-slate-300">
          <ImageIcon className="h-24 w-24 text-slate-400" />
        </div>
      )}
      {/* Frosted glass effect */}
      <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 p-3 shadow-lg z-20 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="mb-1">
          <h3
            className="line-clamp-1 font-semibold text-white drop-shadow-sm text-sm"
            title={product.title}
          >
            {product.title}
          </h3>
          <p className="text-[10px] text-white/80 line-clamp-1">
            {product.brand}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-white tracking-tight">
              {formatCurrency(product.price, currency)}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-[10px] text-white/70 line-through">
                {formatCurrency(originalPrice, currency)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 bg-black/20 px-1.5 py-0.5 rounded backdrop-blur-sm">
            <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
            <span className="text-xs font-medium text-white">
              {product.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
