import Image from "next/image";
import TextAnswerContainer from "./TextAnswerContainer";
import { ChevronLeft } from "@/src/lib/svg";
import ImageAnswerContainer from "./ImageAnswerContainer";

const MobileExamCardQuestion = ({
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
    <section className="w-full min-w-full flex-1 flex flex-col px-4 animate-opacity overflow-y-scroll relative">
      <p className="mt-4 font-bold">
        {number} - {questionText}
      </p>
      {questionImage ? (
        <div className="w-full mt-4 h-[120px]  items-center justify-center flex">
          <Image
            src={questionImage}
            width="0"
            height="0"
            sizes="100vw"
            className="h-full w-auto object-fill"
            alt="گواهیتو"
          />
        </div>
      ) : null}
      <div className="w-full flex flex-1 ">
        {answerType === "text" ? (
          <div className="w-full flex flex-col mt-4 gap-3 flex-1  max-h-[180px] ">
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
          <div className="grid grid-flow-row gap-6 grid-cols-2 mt-4 w-full">
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
      </div>
        <button
          className="w-[36px] rounded-full h-[36px]   shrink-0 text-white bg-primary-main shadow-base flex  items-center justify-center absolute bottom-2 left-3 "
          disabled={!isActiveNextButton}
          onClick={handleNextQuestion}
        >
          <ChevronLeft />
        </button>
      <div
        id={"nextQuestionTimer"}
        className={`w-0 min-h-[4px] h-[4px] bg-secondary-main `}
      />
    </section>
  );
};

export default MobileExamCardQuestion;
