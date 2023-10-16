"use client";
import { useState, useEffect } from "react";
const SimpleQuestionTextAnswerContainer = ({
  answer,
  isTrue,
  isAnswerd,
  handleSetAnswerd,
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
    <div className="flex gap-1 cursor-pointer " onClick={handleClick}>
      <div
        className={`w-5 h-5 min-h-[20px] min-w-[20px] rounded-full border-2 border-border-second ${
          (checked === true && "bg-green-500") ||
          (checked === false && "bg-red-500")
        }`}
      />
      <p>{answer}</p>
    </div>
  );
};

export default SimpleQuestionTextAnswerContainer;
