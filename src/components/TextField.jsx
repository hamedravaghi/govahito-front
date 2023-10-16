const TextField = ({
  name,
  onChange,
  touched,
  error,
  placeholder,
  type,
  className,
  label,
  value,
  onBlur,
  refrence,
  border = "defalut",
  ...otherProps
}) => {
  return (
    <div className="w-full h-[64px] flex flex-col ">
      <label className=" text-text-second font-normal">{label}</label>
      <input
        ref={refrence}
        value={value}
        name={name}
        onChange={onChange}
        className={`w-full h-[42px] border ${
          border === "defalut" ? "border-primary-main" : "border-border-main"
        }  rounded-xl p-3 text-sm focus:outline-slate-200  ${className}`}
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        {...otherProps}
      />
      {touched && error ? (
        <p className="text-sm text-red-600 dark:text-red-500 h-5 ">
          <span className=" font-normal text-xs">{error}</span>
        </p>
      ) : null}
    </div>
  );
};

export default TextField;
