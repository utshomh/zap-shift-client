import { Outlet } from "react-router";

import Navbar from "../ui/layout/Navbar";
import Footer from "../ui/layout/Footer";

const RootLayout = () => {
  return (
    <div className="bg-base-200 text-base-content">
      <div className="min-h-screen max-w-7xl mx-auto p-2 xl:px-0 flex flex-col justify-between gap-4">
        <Navbar />

        <Outlet />

        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
