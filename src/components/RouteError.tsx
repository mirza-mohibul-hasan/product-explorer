import { Link, useRouteError, isRouteErrorResponse } from "react-router";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

function RouteError() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // page threw an expected response (e.g. 404, 500)
    errorMessage = error.statusText || error.data?.message || "Unknown Error";
  } else if (error instanceof Error) {
    // page threw an Error instance
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "An unexpected error occurred.";
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="inline-flex items-center justify-center p-4 bg-red-50 rounded-full mb-6">
        <AlertTriangle className="w-12 h-12 text-red-600" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">
        Oops! Something went wrong.
      </h1>
      <p className="text-slate-600 max-w-md mb-8">{errorMessage}</p>

      <div className="flex gap-4">
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
        >
          <RefreshCw className="w-4 h-4" />
          Reload Page
        </button>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <Home className="w-4 h-4" />
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default RouteError;
