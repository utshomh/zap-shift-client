import { Link, Outlet } from "react-router";
import { HiMenu, HiHome, HiCog, HiInbox, HiPlusCircle } from "react-icons/hi";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open gap-2">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <nav className="navbar w-full bg-base-100">
          <label
            htmlFor="drawer"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <HiMenu className="my-1.5 inline-block w-6 h-6" />
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
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          <ul className="menu w-full grow">
            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                <HiHome className="my-1.5 inline-block w-6 h-6" />
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/my-parcels"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Parcels"
              >
                <HiInbox className="my-1.5 inline-block w-6 h-6" />
                <span className="is-drawer-close:hidden">My Parcels</span>
              </Link>
            </li>

            <li>
              <Link
                to="/send-parcel"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Add Parcel"
              >
                <HiPlusCircle className="my-1.5 inline-block w-6 h-6" />
                <span className="is-drawer-close:hidden">Add Parcel</span>
              </Link>
            </li>

            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                <HiCog className="my-1.5 inline-block w-6 h-6" />
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
