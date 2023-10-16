"use client";
import { useState, useEffect } from "react";

const MainBanner = () => {
  const [currentBanner, setCurrentBanner] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex !== arr.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [arr]);

  useEffect(() => {
    setCurrentBanner(arr[currentIndex]);
  }, [currentIndex]);

  const arr = [
    { text: "گواهیتو تجربه شیرین گواهینامه گرفتن", color: "#B5E1E3" },
    {
      text: "گواهیتو همراه هوشمند تو برای موفقیت در آزمون های گواهینامه",
      color: "#9FF4CE",
    },
    {
      text: "گواهیتو همراه صميمي و پيگير گرفتن گواهي نامه تو",
      color: "#CEFB91",
    },
    { text: "گواهي نامتو با گواهيتو بگير", color: "#F9F871" },
  ];
  return (
    <div className="w-full h-[100px] bg-secondary-main bg-[url('/images/newPattern.png')] bg-[center_top_1rem] relative">
      <div className="absolute h-full w-full top-0 right-0 left-0 bottom-0  bg-gradient-to-t from-transparent from-50% to-secondary-main " />
      <div className="absolute h-full w-full top-0 right-0 left-0 bottom-0 flex items-center justify-center">
        <div className="flex flex-col md:flex-row md:items-end md:gap-2">
          <p className="font-bold text-3xl md:text-6xl ">گواهیتو</p>
          <p className=" text-base md:text-lg">تجربهِ شیرینِ گواهینامه گرفتن</p>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
