import { useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

import useAuth from "../../hooks/useAuth";
import useAxiosSecured from "../../hooks/useAxiosSecured";
import alert from "../../lib/utils/alert";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const axios = useAxiosSecured();

  const handleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      const { email, displayName, photoURL } = user;
      await axios.post("/users", { email, displayName, photoURL });
      alert.success("Singed In!", "You’ve signed in successfully.");
      navigate(state?.redirect || "/");
    } catch (error) {
      alert.error(
        "Oops!",
        error.message || "Something went wrong! Please try again."
      );
    }
  };

  return (
    <div className="w-full">
      <button onClick={handleSignIn} className="btn btn-outline w-full">
        <FcGoogle className="text-2xl" />
        <span className="font-medium">Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
