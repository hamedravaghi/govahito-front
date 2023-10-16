const CustomDivider = ({ title, className }) => {
  return (
    <div className={`w-full flex justify-between items-center ${className}`}>
      <div className="flex flex-1 border-t-2 border-dashed border-border-second" />
      {title ? <p className=" px-4 font-extrabold text-2xl">{title}</p> : null}
      <div className="flex flex-1 border-t-2 border-dashed border-border-second" />
    </div>
  );
};

export default CustomDivider;
