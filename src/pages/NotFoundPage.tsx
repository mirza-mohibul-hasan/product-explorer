import { Link } from "react-router";
import { AlertCircle, Home } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="inline-flex items-center justify-center p-4 bg-indigo-50 rounded-full mb-6">
        <AlertCircle className="w-12 h-12 text-indigo-600" />
      </div>
      <h1 className="text-4xl font-bold text-slate-900 mb-2">404</h1>
      <h2 className="text-xl font-semibold text-slate-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-slate-600 max-w-md mb-8">
        Sorry, we couldn't find the page you're looking for. It might have been
        removed or renamed.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
      >
        <Home className="w-4 h-4" />
        Go to Homepage
      </Link>
    </div>
  );
}
