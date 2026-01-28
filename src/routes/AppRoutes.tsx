import { AppLayout } from "../layout/AppLayout";
import { createBrowserRouter } from "react-router";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { CategoriesPage } from "../pages/CategoriesPage";
import { SettingsPage } from "../pages/SettingsPage";
import RouteError from "../components/RouteError";

import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <RouteError />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <ProductsPage />,
          },
          {
            path: "search",
            element: <ProductsPage />,
          },
          {
            path: ":id",
            element: <ProductDetailPage />,
          },
          {
            path: "categories",
            element: <CategoriesPage />,
          },
        ],
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
