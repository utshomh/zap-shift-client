import { Link } from "react-router";
import { useForm } from "react-hook-form";

import useAuth from "../../hooks/useAuth";
import alert from "../../lib/alert";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { registerUser } = useAuth();

  const handleRegister = async (data) => {
    const { email, password } = data;
    try {
      await registerUser(email, password);
      alert.success(
        "Registered!",
        "Your account has been created successfully."
      );
    } catch (error) {
      alert.error(
        "Oops!",
        error.message || "Something went wrong! Please try again."
      );
    }

    reset();
  };

  return (
    <div className="p-4 bg-base-100 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>

      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="space-y-4">
          <div className="space-y-1">
            <label className="text-base font-semibold">Display Name:</label>
            <input
              {...register("displayName", {
                required: "Display Name is required",
              })}
              type="text"
              className="input w-full"
              placeholder="Display Name"
            />
            {errors.displayName && (
              <p className="text-error text-xs font-semibold">
                {errors.displayName.message}
              </p>
            )}
          </div>

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

          <div className="space-y-1">
            <label className="text-base font-semibold">Profile Image:</label>
            <input
              {...register("profileImage")}
              type="file"
              accept="image/*"
              className="file-input w-full"
            />
          </div>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="link link-hover">
              Login
            </Link>
          </p>

          <button
            type="submit"
            className={`btn w-full ${
              isSubmitting ? "btn-disabled cursor-not-allowed" : "btn-neutral"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;
