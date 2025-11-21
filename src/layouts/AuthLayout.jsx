import { Outlet } from "react-router";

import authImage from "../assets/images/auth-image.png";
import Logo from "../ui/shared/Logo";

const AuthLayout = () => {
  return (
    <>
      <Logo />
      <div className="my-auto mx-auto w-fit flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-6">
        <div className="flex-1 w-full max-w-md">
          <Outlet />
        </div>
        <div className="w-full flex-1">
          <img
            src={authImage}
            className="max-h-[640px] w-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
