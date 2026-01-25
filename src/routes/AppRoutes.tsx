import { AppLayout } from "../layout/AppLayout";
import { createBrowserRouter } from "react-router";
import { ProductsPage } from "../pages/ProductsPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <h1>Hello World</h1>,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
]);
