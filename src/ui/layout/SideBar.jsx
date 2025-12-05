import { Link, NavLink } from "react-router";
import {
  FaCreditCard,
  FaHome,
  FaMotorcycle,
  FaPlusCircle,
  FaRegListAlt,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <nav className="flex min-h-full flex-col items-start bg-base-100 is-drawer-close:w-14 is-drawer-open:w-64 rounded-xl">
      <ul className="menu w-full grow space-y-2">
        <li>
          <Link
            to="/"
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Homepage"
          >
            <FaHome className="my-1.5 inline-block w-4 h-4" />
            <span className="is-drawer-close:hidden">Homepage</span>
          </Link>
        </li>

        <li>
          <NavLink
            to="/dashboard/my-parcels"
            className={({ isActive }) =>
              `is-drawer-close:tooltip is-drawer-close:tooltip-right ${
                isActive ? "bg-accent" : ""
              }`
            }
            data-tip="My Parcels"
          >
            <FaRegListAlt className="my-1.5 inline-block w-4 h-4" />
            <span className="is-drawer-close:hidden">My Parcels</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/add-parcel"
            className={({ isActive }) =>
              `is-drawer-close:tooltip is-drawer-close:tooltip-right ${
                isActive ? "bg-accent" : ""
              }`
            }
            data-tip="Add Parcel"
          >
            <FaPlusCircle className="my-1.5 inline-block w-4 h-4" />
            <span className="is-drawer-close:hidden">Add Parcel</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/payment-history"
            className={({ isActive }) =>
              `is-drawer-close:tooltip is-drawer-close:tooltip-right ${
                isActive ? "bg-accent" : ""
              }`
            }
            data-tip="Payment History"
          >
            <FaCreditCard className="my-1.5 inline-block w-4 h-4" />
            <span className="is-drawer-close:hidden">Payment History</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/riders"
            className={({ isActive }) =>
              `is-drawer-close:tooltip is-drawer-close:tooltip-right ${
                isActive ? "bg-accent" : ""
              }`
            }
            data-tip="Riders"
          >
            <FaMotorcycle className="my-1.5 inline-block w-4 h-4" />
            <span className="is-drawer-close:hidden">Riders</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
