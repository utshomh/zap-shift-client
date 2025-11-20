import { Link } from "react-router";
import { useForm } from "react-hook-form";

import useAuth from "../../hooks/useAuth";
import alert from "../../lib/alert";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { loginUser } = useAuth();

  const handleLogin = async (data) => {
    const { email, password } = data;
    try {
      await loginUser(email, password);
      alert.success("Logged In!", "You’ve signed in successfully.");
      reset();
    } catch (error) {
      alert.error(
        "Oops!",
        error.message || "Something went wrong! Please try again."
      );
    }
  };

  return (
    <div className="p-4 bg-base-100 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="space-y-4">
          <div className="space-y-1">
            <label className="text-base font-semibold">Email:</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-error text-xs font-semibold">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-base font-semibold">Password:</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 7, message: "At least 7 characters" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                  message:
                    "Must contain uppercase, lowercase, number, and special character",
                },
              })}
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-error text-xs font-semibold">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <Link to="reset-password" className="link link-hover">
              Forgot password?
            </Link>
          </div>

          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/register" className="link link-hover">
              Register
            </Link>
          </p>

          <button
            type="submit"
            className={`btn w-full ${
              isSubmitting ? "btn-disabled cursor-not-allowed" : "btn-neutral"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Login in..." : "Login"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginPage;
