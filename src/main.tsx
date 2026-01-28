import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/AppRoutes";
import { RouterProvider } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SettingsProvider } from "./context/SettingsProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <SettingsProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </SettingsProvider>
    </ErrorBoundary>
  </StrictMode>,
);
