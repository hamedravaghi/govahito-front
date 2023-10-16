"use client";

import dynamic from "next/dynamic";

const MapBox = dynamic(() => import("../common/MapBox"), { ssr: false });

const AcademyMap = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
      <MapBox  latitude={35.80291400035104} longitude={51.47847354412079} />
    </div>
  );
};

export default AcademyMap;
