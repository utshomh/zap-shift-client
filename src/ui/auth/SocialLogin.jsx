import { FcGoogle } from "react-icons/fc";

import useAuth from "../../hooks/useAuth";
import alert from "../../lib/alert";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert.success("Singed In!", "You’ve signed in successfully.");
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
