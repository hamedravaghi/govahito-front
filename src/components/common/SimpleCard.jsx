"use client"
const SimpleCard = ({
  header,
  text,
  children,
  className,
  contentClassName,
  button,
  buttonLargeText,
  buttonSmallText,
  buttonClassName,
  buttonOnClick,
}) => {
  return (
    <div className={`w-full flex  flex-col gap-4 ${className}`}>
      {header && (
        <div className="flex justify-between items-center">
          <div className="flex flex-1 border-t-2 border-dashed border-border-second" />
          <p className=" px-4 font-bold md:font-extrabold text-base md:text-2xl">
            {header}
          </p>
          <div className="flex flex-1 items-center ">
            <div className="flex flex-1 border-t-2 border-dashed border-border-second " />
            {button ? (
              <button
                onClick={buttonOnClick}
                className={`${buttonClassName} mr-2 md:mr-4 lg:mr-8 text-xs font-bold`}
              >
                <p className="hidden md:flex">{buttonLargeText}</p>
                <p className="flex md:hidden">{buttonSmallText}</p>
              </button>
            ) : null}
          </div>
        </div>
      )}
      {text && <h4 className="mt-6 text-xl md:text-lg font-bold">{text}</h4>}
      <div className={contentClassName}>{children}</div>
    </div>
  );
};

export default SimpleCard;
