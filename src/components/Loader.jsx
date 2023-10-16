const Loader = ({ size = "md" }) => {
  return (
    <div className="relative">
      <div
        className={`${
          (size === "sm" && "w-5") ||
          (size === "md" && "w-10") ||
          (size === "lg" && "w-20")
        } ${
          (size === "sm" && "h-5") ||
          (size === "md" && "h-10") ||
          (size === "lg" && "h-20")
        } border-border-main border-2 rounded-full`}
      ></div>
      <div
        className={`${
          (size === "sm" && "w-5") ||
          (size === "md" && "w-10") ||
          (size === "lg" && "w-20")
        } ${
          (size === "sm" && "h-5") ||
          (size === "md" && "h-10") ||
          (size === "lg" && "h-20")
        } 
          border-primary-main
         border-t-2 animate-spin rounded-full absolute left-0 top-0`}
      ></div>
    </div>
  );
};

export default Loader;
