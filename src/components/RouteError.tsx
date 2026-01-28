import { Link } from "react-router";

function RouteError() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-xl font-semibold">Page failed to load</h1>
      <p className="text-gray-600">Please try again later.</p>
      <Link to="/products" className="text-blue-600 hover:underline">
        Go back to products
      </Link>
    </div>
  );
}

export default RouteError;
