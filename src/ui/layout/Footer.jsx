import { Link } from "react-router";
import { FaXTwitter, FaYoutube, FaFacebookF } from "react-icons/fa6";

import Logo from "../shared/Logo";

const socialLinks = [
  { icon: FaXTwitter, href: "#" },
  { icon: FaYoutube, href: "#" },
  { icon: FaFacebookF, href: "#" },
];

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-neutral text-neutral-content p-10 rounded-xl">
      <aside>
        <Logo />
        <p className="font-bold">Delivering reliably since 2020</p>
        <p>Copyright © {new Date().getFullYear()} - All Right Reserved</p>
      </aside>
      <nav>
        <div className="flex items-center gap-4">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} to={item.href}>
                <Icon className="text-xl" />
              </Link>
            );
          })}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
