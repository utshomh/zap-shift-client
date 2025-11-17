import { Outlet } from "react-router";

import Navbar from "../ui/layout/Navbar";
import Footer from "../ui/layout/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 xl:px-0 bg-base-200 flex flex-col justify-between gap-4">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default RootLayout;
