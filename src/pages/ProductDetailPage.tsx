import { useParams, Link } from "react-router";
import { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { HoverZoomImage } from "../components/Shared/HoverZoomImage";
import StarIcon from "../components/Shared/StarIcon";
import { ProductReviews } from "../components/ProductReviews";
import { useSettingsStore } from "../store/useSettingsStore";
import {
  ChevronRight,
  ZoomIn,
  Share2,
  Truck,
  HelpCircle,
  Gift,
  Eye,
  Heart,
} from "lucide-react";
import { ProductDetailSkeleton } from "../components/Skeleton/ProductDetailSkeleton";

const INFO_CARDS = [
  {
    icon: Truck,
    title: "Free Delivery",
    desc: "On orders over $50",
  },
  {
    icon: HelpCircle,
    title: "24/7 Support",
    desc: "Contact us anytime",
  },
  {
    icon: Gift,
    title: "Best Offers",
    desc: "New deals every week",
  },
];

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const productId = id ? Number(id) : undefined;
  const { data: product, isLoading, error } = useProduct(productId);
  const { currency } = useSettingsStore();

  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomEnabled, setZoomEnabled] = useState(false);

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  if (error || !product) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">
          Failed to load product or product not found.
        </p>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Back to products
        </Link>
      </div>
    );
  }

  // Derived calculations
  const originalPrice = product.price / (1 - product.discountPercentage / 100);
  const savingsPercentage = product.discountPercentage;
  const reviewsCount = product.reviews?.length || 0;

  const images =
    product.images?.length > 0 ? product.images : [product.thumbnail];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  console.log(product);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Breadcrumb */}
      <div className="bg-white rounded-lg mb-6 shadow-sm">
        <div className="px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <Link
              to="/products"
              className="hover:text-blue-600 transition-colors"
            >
              Products
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <Link
              to={`/products/categories?category=${product.category}`}
              className="hover:text-blue-600 transition-colors capitalize"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <span className="text-gray-900 font-medium truncate max-w-50">
              {product.title}
            </span>
          </nav>
        </div>
      </div>
      {/* Main Content */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column - Images */}
        <div className="flex flex-col gap-4 h-full lg:col-span-5">
          <div className="relative w-full aspect-square bg-white border border-gray-200 rounded-xl overflow-hidden p-4">
            <HoverZoomImage
              src={images[selectedImage]}
              alt={product.title}
              zoomEnabled={zoomEnabled}
              onDeactivate={() => setZoomEnabled(false)}
            />
            <button
              onClick={() => setZoomEnabled(!zoomEnabled)}
              className="absolute bottom-4 right-4 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors"
              title="Toggle Zoom"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnails */}
          {images.length > 0 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide py-2">
              {images.map((img: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`shrink-0 w-20 h-24 border-2 rounded-lg overflow-hidden bg-white cursor-pointer transition-all ${
                    selectedImage === index
                      ? "border-blue-600 ring-2 ring-blue-100"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-contain p-1"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6 h-full flex flex-col lg:col-span-7">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-full flex flex-col">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm bg-gray-50 px-3 py-1 rounded-full text-gray-700">
                <span className="font-semibold text-gray-900">
                  {product.rating.toFixed(1)}
                </span>
                <StarIcon value={product.rating} />
                <span className="text-gray-400">|</span>
                <span className="text-gray-600 underline cursor-pointer">
                  {reviewsCount} Reviews
                </span>
              </div>
              <div className="text-sm text-gray-500 font-mono">
                SKU: {product.id.toString().padStart(6, "0")}
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
              {product.title}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-600 text-sm">Brand:</span>
              <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                {product.brand}
              </span>
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="my-6 border-y border-gray-100 py-4">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>

            {/* Pricing */}
            <div className="flex items-end gap-3 flex-wrap mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900">
                  {currency} {product.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500">
                  Inclusive of all taxes
                </span>
              </div>
              {product.discountPercentage > 0 && (
                <div className="mb-2">
                  <span className="text-lg text-gray-400 line-through mr-2">
                    {currency} {originalPrice.toFixed(2)}
                  </span>
                  <span className="text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded text-sm">
                    -{Math.round(savingsPercentage)}%
                  </span>
                </div>
              )}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 mb- text-sm">
              <div
                className={`w-2.5 h-2.5 rounded-full ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`}
              ></div>
              <span
                className={`font-medium ${product.stock > 0 ? "text-green-700" : "text-red-700"}`}
              >
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
              {product.stock > 0 && product.stock < 10 && (
                <span className="text-orange-600 font-medium">
                  ({product.stock} left)
                </span>
              )}
              {/* Live View */}
              <div className="ml-auto flex items-center gap-1.5 text-orange-600 bg-orange-50 px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                <Eye className="w-3.5 h-3.5" />
                <span>67 viewing</span>
              </div>
            </div>

            {/* Product Specifications */}
            <div className="mt-2 border-t border-gray-100 pt-2">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                {product.weight && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs">Weight:</span>
                    <span className="font-medium text-gray-900">
                      {product.weight}
                    </span>
                    <span className="text-gray-500 text-xs">kg</span>
                  </div>
                )}
                {product.dimensions && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs">Dimensions:</span>
                    <span className="font-medium text-gray-900">
                      {product.dimensions.width} x {product.dimensions.height} x{" "}
                      {product.dimensions.depth}
                    </span>
                    <span className="text-gray-500 text-xs">cm</span>
                  </div>
                )}
                {product.warrantyInformation && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs">Warranty:</span>
                    <span className="font-medium text-gray-900">
                      {product.warrantyInformation}
                    </span>
                  </div>
                )}
                {product.shippingInformation && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs">Shipping:</span>
                    <span className="font-medium text-gray-900">
                      {product.shippingInformation}
                    </span>
                  </div>
                )}
                {product.returnPolicy && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs">
                      Return Policy:
                    </span>
                    <span className="font-medium text-gray-900">
                      {product.returnPolicy}
                    </span>
                  </div>
                )}
                {product.minimumOrderQuantity && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs">
                      Min. Order Qty
                    </span>
                    <span className="font-medium text-gray-900">
                      {product.minimumOrderQuantity}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm cursor-pointer">
                Add to Cart
              </button>
              <button
                className="px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors cursor-pointer flex items-center justify-center gap-2"
                title="Add to Wishlist"
              >
                <Heart className="w-6 h-6" />
                <span className="font-medium sm:hidden">Wishlist</span>
              </button>
              <button
                onClick={handleShare}
                className="px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors cursor-pointer"
                title="Share"
              >
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-5">
        {INFO_CARDS.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center hover:border-blue-300 transition-colors group"
          >
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <item.icon className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1">
              {item.title}
            </h4>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
      {/* Reviews Section from User */}
      <ProductReviews product={product} />
    </div>
  );
}
