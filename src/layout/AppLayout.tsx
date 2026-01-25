import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <>
      {/* Navbar */}
      {/* Main content */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </>
  );
};
