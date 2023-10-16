import React from "react";

const DropDown = ({ baseButton, children, divider = true }) => {
  return (
    <div className="px-2 flex flex-row items-center gap-2 h-full  rounded-2xl hover:bg-white  bg-red-200 relative group">
      <div
        style={{ zIndex: 100000 }}
        className="absolute top-0 right-0 left-0
        bg-white
        h-12 hover:h-auto
        hover:pb-2 hover:rounded-b-2xl
        overflow-y-hidden group-hover:overflow-y-visible
        group
        z-50
        flex flex-col
        gap-2"
      >
        <div className="w-full px-2 h-12 min-h-[48px] bg-white flex items-center justify-center">
          hello
          {/* {baseButton} */}
        </div>
        {/* {children} */}
      </div>
      {/* {divider && (
        <div className="min-w-[1px] w-[1px] min-h-[40%]  bg-border-main" />
      )} */}
    </div>
  );
};

export default DropDown;
