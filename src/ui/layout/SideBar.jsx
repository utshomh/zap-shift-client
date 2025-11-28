import { Link } from "react-router";
import { HiCog, HiHome, HiInbox, HiPlusCircle } from "react-icons/hi";

const SideBar = () => {
  return (
    <nav className="flex min-h-full flex-col items-start bg-base-100 is-drawer-close:w-14 is-drawer-open:w-64 rounded-xl">
      <ul className="menu w-full grow">
        <li>
          <Link
            to="/"
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Homepage"
          >
            <HiHome className="my-1.5 inline-block w-4 h-4" />
            <span className="is-drawer-close:hidden">Homepage</span>
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/my-parcels"
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="My Parcels"
          >
            <HiInbox className="my-1.5 inline-block w-4 h-4" />
            <span className="is-drawer-close:hidden">My Parcels</span>
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/add-parcel"
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Add Parcel"
          >
            <HiPlusCircle className="my-1.5 inline-block w-4 h-4" />
            <span className="is-drawer-close:hidden">Add Parcel</span>
          </Link>
        </li>

        <li>
          <button
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Settings"
          >
            <HiCog className="my-1.5 inline-block w-4 h-4" />
            <span className="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
