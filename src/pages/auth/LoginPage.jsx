import { Link } from "react-router";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <fieldset className="fieldset">
        <div className="space-y-1">
          <label className="text-base font-semibold">Email: </label>
          <input
            {...register("email", {
              required: "Email is required",
            })}
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
        <div>
          <label className="text-base font-semibold">Password: </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 7,
                message: "Password must be at least 7 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                message:
                  "Password must contain uppercase, lowercase, number, and special character",
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
        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </form>
  );
};

export default LoginPage;
