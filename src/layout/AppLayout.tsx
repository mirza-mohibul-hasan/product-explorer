import { Outlet } from "react-router";
import { Navbar } from "../components/Shared/Navbar";
import { Footer } from "../components/Shared/Footer";

export const AppLayout = () => {
  return (
    <>
      <Navbar />

      {/* Main content */}
      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};
