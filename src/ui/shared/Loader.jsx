const Loader = ({ size = "md", color = "primary", className = "" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-10 h-10",
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <span
        className={`loading loading-spinner loading-${color} ${sizes[size]}`}
      />
    </div>
  );
};

export default Loader;
