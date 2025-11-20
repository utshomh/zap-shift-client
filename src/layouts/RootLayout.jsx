import { Outlet } from "react-router";

import Navbar from "../ui/layout/Navbar";
import Footer from "../ui/layout/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
};

export default RootLayout;
