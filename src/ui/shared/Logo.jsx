import { Link } from "react-router";

import logoImage from "../../assets/images/logo.png";

const Logo = ({ size = "md" }) => {
  const sizes = {
    sm: { img: "w-8", text: "text-2xl" },
    md: { img: "w-12", text: "text-3xl" },
    lg: { img: "w-16", text: "text-4xl" },
  };

  const { img, text } = sizes[size] || sizes.md;

  return (
    <Link to="/" className="flex items-end gap-1">
      <img src={logoImage} className={`${img} h-auto -mr-2.5`} />
      <span className={`${text} font-bold`}>ZapShift</span>
    </Link>
  );
};

export default Logo;
