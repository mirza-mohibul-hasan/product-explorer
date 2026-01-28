import { Link, Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-semibold hover:underline">
              Home
            </Link>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
            <Link to="/categories" className="hover:underline">
              Categories
            </Link>
            <Link to="/settings" className="hover:underline">
              Settings
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="mx-auto max-w-4xl px-4 py-6">
        <Outlet />
      </main>
      {/* Footer */}
    </>
  );
};
