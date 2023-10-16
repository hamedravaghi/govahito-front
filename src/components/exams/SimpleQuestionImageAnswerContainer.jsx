"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
const SimpleQuestionImageAnswerContainer = ({
  image,
  isTrue,
  handleSetAnswerd,
  isAnswerd,
}) => {
  const [checked, setChecked] = useState(null);

  const handleClick = () => {
    if (!isAnswerd) {
      if (isTrue) {
        setChecked(true);
        handleSetAnswerd();
      } else {
        setChecked(false);
        handleSetAnswerd();
      }
    }
  };

  useEffect(() => {
    if (isAnswerd && checked === null && isTrue) {
      setChecked(true);
    }
  }, [isAnswerd]);
  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div
        className={`w-5 min-w-[20px] h-5 min-h-[20px] rounded-full border-2 border-border-second ${
          (checked === true && "bg-green-500") ||
          (checked === false && "bg-red-500")
        }`}
      />
      <div className="w-full h-[150px] flex justify-center  mt-2">
        <Image
          src={image}
          alt="سوالات آزمون گواهینامه راهنمایی و رانندگی"
          width={"0"}
          height={"0"}
          sizes="100vh"
          className="h-full w-auto object-fill"
        />
      </div>
    </div>
  );
};

export default SimpleQuestionImageAnswerContainer;
