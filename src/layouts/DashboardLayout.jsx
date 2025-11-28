import { Outlet } from "react-router";
import { HiMenu } from "react-icons/hi";
import SideBar from "../ui/layout/SideBar";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open gap-2">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <nav className="navbar w-full bg-base-100 rounded-xl">
          <label
            htmlFor="drawer"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <HiMenu className="my-1.5 inline-block w-4 h-4" />
          </label>
          <div className="px-4">Dashboard</div>
        </nav>
        <div className="p-4">
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
