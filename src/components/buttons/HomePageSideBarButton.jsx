"use client";
import { useContext } from "react";
import { PageContext } from "@/src/provider/PageProvider";

const HomePageSideBarButton = ({ text, link }) => {
  const { visible } = useContext(PageContext);

  return (
    <div className="w-full flex flex-col gap-2">
      <a
        href={`/${"#" + link}`}
        
      >
        <p className={`font-bold  ${
          visible === link ? "text-black" : "text-text-third "
        }`}>{text}</p>
      </a>
      <div
        className={`
        ease-in-out duration-500 
       ${visible === link ? "w-3/4 " : "w-0 "}  h-[2px]    bg-primary-main`}
      />
    </div>
  );
};

export default HomePageSideBarButton;
