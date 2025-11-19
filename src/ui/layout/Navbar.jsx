import { NavLink } from "react-router";
import { MdMenu } from "react-icons/md";

import Logo from "../shared/Logo";

const navLinksData = [
  { path: "/", label: "Home" },
  { path: "/coverage", label: "Coverage" },
  { path: "/about", label: "About" },
];

const Navbar = () => {
  const navLinks = navLinksData.map((link, index) => (
    <li key={index}>
      <NavLink to={link.path}>{link.label}</NavLink>
    </li>
  ));

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-xl">
      <div className="navbar-start gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdMenu size={32} />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        <Logo size="sm" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
