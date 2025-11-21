import { Link, NavLink } from "react-router";
import { MdMenu } from "react-icons/md";

import useAuth from "../../hooks/useAuth";
import alert from "../../lib/alert";
import Logo from "../shared/Logo";

const navLinksData = [
  { path: "/", label: "Home" },
  { path: "/coverage", label: "Coverage" },
  { path: "/about", label: "About" },
];

const navLinks = navLinksData.map((link, index) => (
  <li key={index}>
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        ` ${isActive ? "badge-ghost font-bold" : "font-semibold"}`
      }
    >
      {link.label}
    </NavLink>
  </li>
));

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = async () => {
    try {
      await alert.confirm(
        "Are you sure you want to log out?",
        "You will need to log in again to access your account.",
        async () => {
          await logoutUser();
          alert.success("Logged Out!", "You’ve signed out successfully.");
        }
      );
    } catch (error) {
      alert.error(
        "Oops!",
        error.message || "Something went wrong! Please try again."
      );
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-xl">
      <div className="navbar-start gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdMenu size={32} />
          </div>
          <ul
            tabIndex="-1"
            className="menu gap-1 dropdown-content bg-base-100 rounded-box mt-4 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        <Logo size="sm" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button className="btn btn-outline" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login" className="btn btn-outline">
              Sign In
            </Link>
            <Link to="/be-a-rider" className="btn btn-accent">
              Be a Rider
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
