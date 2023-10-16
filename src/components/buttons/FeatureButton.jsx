"use client";

import { useContext } from "react";
import { PageContext } from "@/src/provider/PageProvider";

const FeatureButton = ({ free, icon, title, desc, feature }) => {
  const { handleSetFeatureAction } = useContext(PageContext);

  return (
    <button
      onClick={() => handleSetFeatureAction(feature)}
      className="w-full h-[68px] bg-white rounded-2xl shadow-base relative hover:-translate-y-1 hover:shadow-[0_12px_30px_0_rgba(0,0,0,0.15)] transition-all"
    >
      {free && (
        <div className="absolute left-0 top-0 -translate-y-1/3 md:-translate-y-1/2 bg-primary-main rounded-[7px] w-[70px] h-6 flex items-center justify-center text-white font-bold text-xs">
          رایگان
        </div>
      )}
      <div className="w-full h-full flex items-center px-2 lg:px-4 gap-2">
        {icon} <h5 className="text-base font-bold">{title}</h5>{" "}
        <p className="text-xs text-text-second">{desc}</p>
      </div>
    </button>
  );
};

export default FeatureButton;
