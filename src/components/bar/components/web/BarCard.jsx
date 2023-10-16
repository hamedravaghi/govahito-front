const BarCard = ({ title, subTitle, children }) => {
  return (
    <div className="h-full w-[258px] lg:w-[300px] pt-[30px] flex flex-col pr-10">
      <div className="w-full h-12 flex flex-col gap-2">
        <div className="w-full flex gap-2 items-center">
          <p className="text-text-second font-bold whitespace-nowrap">
            {title}
          </p>
          <div className="w-full border-b-[1px] mt-2 border-dashed border-secondary-main" />
        </div>
        <p className=" text-text-second text-[10px] ">{subTitle}</p>
      </div>
      <div className="flex flex-1  w-full pb-10 pt-4 ">
        <div
          className="w-full h-full pl-2  border-l-[1px] border-dashed border-secondary-main
       flex flex-col justify-between
       "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default BarCard;
