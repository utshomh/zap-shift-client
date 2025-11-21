import { useNavigate, useRouteError } from "react-router";
import { FiArrowLeft } from "react-icons/fi";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  const goBack = () => navigate(-1);

  const status = error?.status || 500;
  const statusText =
    error instanceof Error
      ? error.message
      : error?.statusText || "Internal Server Error";

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-base-200 text-base-content px-4">
        <h1 className="text-8xl font-extrabold text-primary">{status}</h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-secondary text-center">
          {status === 404 ? "Oops! Page Not Found" : "Something Went Wrong"}
        </h2>

        <p
          className="text-center max-w-md"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.25 }}
        >
          {status === 404
            ? "The page you’re looking for doesn’t exist."
            : statusText}
        </p>

        <button
          onClick={goBack}
          className="btn btn-primary btn-lg flex items-center gap-2"
        >
          <FiArrowLeft size={20} /> Go Back
        </button>
      </div>
    </>
  );
}
