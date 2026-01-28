import { Link } from "react-router";
import type { Product } from "../types/product";
import { formatCurrency } from "../utils/currency";
import { useSettings } from "../context/SettingsContext";
import StarIcon from "./Shared/StarIcon";
import { Eye } from "lucide-react";

interface ProductTableProps {
  products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
  const { currency } = useSettings();

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-slate-200">
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          {/* Table header */}
          <thead className="text-[13px] text-slate-500/70 bg-slate-100 uppercase tracking-wider font-semibold">
            <tr>
              <th className="px-5 py-4 first:pl-5 last:pr-5">
                <div className="text-left">#</div>
              </th>
              <th className="px-5 py-4 first:pl-5 last:pr-5">
                <div className="text-left">Product</div>
              </th>
              <th className="px-5 py-4 first:pl-5 last:pr-5">
                <div className="text-left">Category</div>
              </th>
              <th className="px-5 py-4 first:pl-5 last:pr-5">
                <div className="text-left">Price</div>
              </th>
              <th className="px-5 py-4 first:pl-5 last:pr-5">
                <div className="text-left">Stock</div>
              </th>
              <th className="px-5 py-4 first:pl-5 last:pr-5">
                <div className="text-left">Rating</div>
              </th>
              <th className="px-5 py-4 first:pl-5 last:pr-5 sticky right-0 bg-slate-100">
                <div className="sr-only">Action</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm font-medium divide-y divide-slate-200">
            {products.map((p, index) => (
              <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="text-slate-500">{index + 1}</div>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-full border border-slate-200 p-1 bg-white">
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <div className="text-slate-900 font-medium">
                        {p.title}
                      </div>
                      <div className="text-slate-500 text-xs">{p.brand}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 whitespace-nowrap capitalize">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                    {p.category}
                  </div>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="text-slate-900 font-semibold">
                    {formatCurrency(p.price, currency)}
                  </div>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <div
                    className={`${
                      p.stock > 10 ? "text-emerald-500" : "text-amber-500"
                    }`}
                  >
                    {p.stock}
                  </div>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <span className="text-slate-700">{p.rating}</span>
                    <StarIcon value={p.rating} />
                  </div>
                </td>
                <td className="px-5 py-4 whitespace-nowrap sticky right-0 bg-white group-hover:bg-slate-50 transition-colors shadow-[-12px_0_15px_-4px_rgba(0,0,0,0.15)] sm:shadow-none border-l sm:border-l-0 border-slate-100">
                  <Link
                    to={`/products/${p.id}`}
                    className="inline-flex items-center justify-center gap-2 px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-full transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="hidden sm:inline">Details</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
