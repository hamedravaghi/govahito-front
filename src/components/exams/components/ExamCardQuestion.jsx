import { ChevronLeft } from "@/src/lib/svg";
import TextAnswerContainer from "./TextAnswerContainer";
import Image from "next/image";
import ImageAnswerContainer from "./ImageAnswerContainer";

const ExamCardQuestion = ({
  currentQuestion,
  questionHandler,
  questionDetail,
}) => {
  const { handleProcessAnswer, handleNextQuestion } = questionHandler;
  const {
    number,
    questionText,
    questionImage,
    answerType,
    answers,
    trueAnswer,
    _id,
  } = currentQuestion;
  const { userChoose, canAnswer, isActiveNextButton, showCorrectAnswer } =
    questionDetail;
  return (
    <div className="w-full  bg-white shadow-base rounded-2xl flex flex-col p-6 pb-2 gap-7 animate-opacity">
      <p className="font-bold text-[#000000]">
        {number} - {questionText}
      </p>
      {questionImage ? (
        <div className="w-full mt-4 md:h-[220px]  lg:h-[180px]   items-center justify-center flex ">
          <Image
            src={questionImage}
            width="0"
            height="0"
            sizes="100vw"
            className="h-full w-auto object-contain"
            alt="گواهیتو"
            priority={true}
          />
        </div>
      ) : null}
      {answerType === "text" ? (
        <div className="w-full flex flex-col mt-4 gap-3 ">
          {answers.map((item) => (
            <TextAnswerContainer
              key={item.id}
              text={item.text}
              canAnswer={canAnswer}
              showCorrectAnswer={showCorrectAnswer}
              isTrue={trueAnswer === item.id}
              onClick={() => handleProcessAnswer(_id, item.id, trueAnswer)}
              choosed={
                userChoose ? (userChoose === item.id ? true : false) : false
              }
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-flow-row gap-6 md:grid-cols-2 lg:grid-cols-4  ">
          {answers.map((item) => (
            <ImageAnswerContainer
              key={item.id}
              image={item.image}
              canAnswer={canAnswer}
              showCorrectAnswer={showCorrectAnswer}
              isTrue={trueAnswer === item.id}
              onClick={() => handleProcessAnswer(_id, item.id, trueAnswer)}
              choosed={
                userChoose ? (userChoose === item.id ? true : false) : false
              }
            />
          ))}
        </div>
      )}
      <div className="w-full mt-4 flex flex-col justify-end gap-1">
        <div className="w-full flex justify-end">
          <button
            className="w-[120px] h-10 min-h-10 bg-primary-main rounded-2xl text-white flex items-center justify-center gap-2"
            disabled={!isActiveNextButton}
            onClick={handleNextQuestion}
          >
            <p >سوال بعدی</p>
            <ChevronLeft />
          </button>
        </div>
        <div
          id={"nextQuestionTimer"}
          className={`w-0 min-h-[4px] h-[4px] bg-secondary-main `}
        />
      </div>
    </div>
  );
};

export default ExamCardQuestion;
