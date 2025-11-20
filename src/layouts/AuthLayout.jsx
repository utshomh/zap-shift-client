import { Outlet } from "react-router";

import authImage from "../assets/images/auth-image.png";
import Logo from "../ui/shared/Logo";

const AuthLayout = () => {
  return (
    <div>
      <Logo />
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mx-auto gap-6">
        <div className="w-full md:w-1/2 max-w-md">
          <Outlet />
        </div>
        <div className="w-1/2 max-w-md">
          <img
            src={authImage}
            alt="Satisfied User's Image"
            className="aspect-square w-full h-auto  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
