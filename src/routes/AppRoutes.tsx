import { AppLayout } from "../layout/AppLayout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <h1>Hello World</h1>,
      },
    ],
  },
]);
