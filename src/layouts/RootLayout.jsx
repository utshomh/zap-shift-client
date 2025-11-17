import { Outlet } from "react-router";

import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 xl:px-0">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default RootLayout;
