import { Outlet } from "react-router";
import { Navbar } from "../components/Shared/Navbar";
import { Footer } from "../components/Shared/Footer";

export const AppLayout = () => {
  return (
    <>
      <Navbar />

      {/* Main content */}
      <main className="mx-auto max-w-4xl px-4 py-6 min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};
