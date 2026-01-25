import { useEffect } from "react";
import { productService } from "../services/productService";

export function ProductsPage() {
  useEffect(() => {
    productService.getProducts().then((data) => console.log(data));
  }, []);
  return <h1 className="text-xl font-semibold text-green-600">Products </h1>;
}
