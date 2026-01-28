import type { Product } from "../types/product";

interface ProductTableProps {
  products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
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
              <td className="px-3 py-2 border-b">{p.title}</td>
              <td className="px-3 py-2 border-b capitalize">{p.category}</td>
              <td className="px-3 py-2 border-b text-right">${p.price}</td>
              <td className="px-3 py-2 border-b text-right">{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
