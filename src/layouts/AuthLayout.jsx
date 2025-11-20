import { Outlet } from "react-router";

import authImage from "../assets/images/auth-image.png";
import Logo from "../ui/shared/Logo";

const AuthLayout = () => {
  return (
    <>
      <Logo />
      <div className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center mx-auto gap-6">
        <div className="w-full md:w-1/2 max-w-sm">
          <Outlet />
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img src={authImage} className="w-full object-contain" />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
