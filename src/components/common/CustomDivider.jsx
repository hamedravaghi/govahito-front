const CustomDivider = ({
  title,
  className,
  textClassName = "px-4 font-extrabold text-2xl",
}) => {
  return (
    <div className={`w-full flex justify-between items-center ${className}`}>
      <div className="flex flex-1 border-t-[1px] border-dashed border-border-second" />
      {title ? <p className={textClassName}>{title}</p> : null}
      <div className="flex flex-1 border-t-[1px] border-dashed border-border-second" />
    </div>
  );
};

export default CustomDivider;
