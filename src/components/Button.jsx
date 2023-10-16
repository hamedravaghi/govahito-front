import Loader from "./Loader";

const Button = ({
  text,
  type,
  size = "md",
  fullWidth,
  loading,
  onClick,
  className,
  disabled,
  variant = "fill",
  children,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      type={type}
      className={`
      ${className}
      ${
        (size === "sm" && "py-1 h-8") ||
        (size === "md" && "py-2 h-10") ||
        (size === "lg" && "py-3 h-12")
      }
      ${fullWidth && "w-full"} inline-flex items-center justify-center px-6 
       text-base font-bold leading-6
       whitespace-no-wrap
       border border-border-main
       ${
         variant === "fill"
           ? "bg-primary-main text-white border-none"
           : " bg-white  text-text-main "
       }
           rounded-lg
            hover:bg-opacity-90 cursor-pointer shadow-base
               `}
    >
      {loading ? <Loader size={"sm"} /> : text || children}
    </button>
  );
};

export default Button;
