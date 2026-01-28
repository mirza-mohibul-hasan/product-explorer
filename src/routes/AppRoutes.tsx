import { AppLayout } from "../layout/AppLayout";
import { createBrowserRouter } from "react-router";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { CategoriesPage } from "../pages/CategoriesPage";
import { SettingsPage } from "../pages/SettingsPage";
import RouteError from "../components/RouteError";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <RouteError />,
    children: [
      {
        path: "/",
        element: <h1>Hello World</h1>,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
