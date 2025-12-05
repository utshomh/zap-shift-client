import { Outlet } from "react-router";
import { HiMenu } from "react-icons/hi";

import SideBar from "../ui/layout/SideBar";
import Logo from "../ui/shared/Logo";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open gap-4">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content space-y-4">
        <nav className="navbar w-full bg-base-100 rounded-xl px-4">
          <label
            htmlFor="drawer"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <HiMenu className="my-1.5 inline-block w-8 h-8" />
          </label>
          <div className="p-2">
            <Logo size="sm" />
          </div>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <SideBar />
      </div>
    </div>
  );
};

export default DashboardLayout;
