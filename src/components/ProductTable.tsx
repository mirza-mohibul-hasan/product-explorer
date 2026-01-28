import { Link } from "react-router";
import type { Product } from "../types/product";
import { formatCurrency } from "../utils/currency";
import { useSettings } from "../context/SettingsContext";

interface ProductTableProps {
  products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
  const { currency } = useSettings();
  return (
    <div className="overflow-x-auto border rounded">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100 text-left text-sm">
          <tr>
            <th className="px-3 py-2 border-b">Title</th>
            <th className="px-3 py-2 border-b">Category</th>
            <th className="px-3 py-2 border-b text-right">Price</th>
            <th className="px-3 py-2 border-b text-right">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="px-3 py-2 border-b">
                <Link
                  to={`/products/${p.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {p.title}
                </Link>
              </td>
              <td className="px-3 py-2 border-b capitalize">{p.category}</td>
              <td className="px-3 py-2 border-b text-right">
                {formatCurrency(p.price, currency)}
              </td>
              <td className="px-3 py-2 border-b text-right">{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
