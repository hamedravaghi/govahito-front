"use client";
import { useState } from "react";

import SimpleQuestionTextAnswerContainer from "./SimpleQuestionTextAnswerContainer";
import SimpleQuestionImageAnswerContainer from "./SimpleQuestionImageAnswerContainer";

const SimpleQuestionHintAndAnswerContainer = ({
  answers,
  type,
  trueAnswer,
  hint,
}) => {
  const [isAnswerd, setIsAnswerd] = useState(false);

  const handleSetAnswerd = () => {
    setIsAnswerd(true);
  };

  return (
    <>
      {type === "text" ? (
        <div className="w-full flex flex-col gap-4 mt-2">
          {answers.map((item) => (
            <SimpleQuestionTextAnswerContainer
              key={item.id}
              answer={item.text}
              isTrue={
                item.id.toString() === trueAnswer.toString() ? true : false
              }
              isAnswerd={isAnswerd}
              handleSetAnswerd={handleSetAnswerd}
            />
          ))}
        </div>
      ) : null}
      {type !== "text" ? (
        <div className="grid grid-flow-row gap-1  grid-cols-2 sm:grid-cols-2  md:grid-col-4">
          {answers.map((item) => (
            <SimpleQuestionImageAnswerContainer
              key={item.id}
              image={item.image}
              isTrue={
                item.id.toString() === trueAnswer.toString() ? true : false
              }
              isAnswerd={isAnswerd}
              handleSetAnswerd={handleSetAnswerd}
            />
          ))}
        </div>
      ) : null}
      {hint ? (
        <div
          className={` mt-4 w-full transition-all  duration-40000 overflow-hidden ${
            !isAnswerd && "h-0"
          }`}
        >
          <p className="font-bold">توضیحات :</p>
          <div className="pr-2">
            {hint.split(".").map((item, index) => (
              <p key={index.toString()}>{item}</p>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SimpleQuestionHintAndAnswerContainer;
