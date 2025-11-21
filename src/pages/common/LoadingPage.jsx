import Loader from "../../ui/shared/Loader";

const LoadingPage = () => {
  return (
    <div className="min-h-screen w-full bg-base-200 text-base-content flex items-center justify-center">
      <Loader size="lg" />
    </div>
  );
};

export default LoadingPage;
