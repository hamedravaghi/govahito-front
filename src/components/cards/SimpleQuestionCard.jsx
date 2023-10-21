import Image from "next/image";
import SimpleQuestionHintAndAnswerContainer from "../exams/SimpleQuestionHintAndAnswerContainer";

const SimpleQuestionCard = ({
  number,
  type,
  questionText,
  questionImage,
  answers,
  trueAnswer,
  hint,
}) => {
  return (
    <div className="w-full flex flex-col gap-2  ">
      <div className="w-full rounded-xl bg-white p-2 sm:p-4 shadow-base ">
        <p className="font-bold text-base mb-3">
          {number} - {questionText}
        </p>
        {questionImage ? (
          <div className="w-full h-48 flex items-center justify-center ">
            <div className="h-full">
              <Image
                src={questionImage}
                alt={"سوالات آیین نامه راهنمایی و رانندگی"}
                width="0"
                height="0"
                sizes="100vw"
                className="h-full  w-auto  object-fill "
              />
            </div>
          </div>
        ) : null}
        <SimpleQuestionHintAndAnswerContainer
          answers={answers}
          type={type}
          trueAnswer={trueAnswer}
          hint={hint}
        />
      </div>
    </div>
  );
};

export default SimpleQuestionCard;
