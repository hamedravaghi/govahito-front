import { Pause, Play } from "@/src/lib/svg";
import ButtonController from "./ButtonController";

const ExamWebController = ({
  questionsId,
  questionDetail,
  controllerHandler,
  examType,
  examName,
}) => {
  const {
    handleSetActiveIndex,
    counter,
    resumeExam,
    pauseExam,
    exitExamAlarm,
    isPauseBtnDisabled,
    isResumeBtnDisabled,
    isStopBtnDisabled,
    resultEachQuestion,
    examStatus,
    reportButton,
  } = controllerHandler;

  const { show, handler } = reportButton();

  return (
    <div className="w-full min-h-[282px] py-4 flex flex-col  bg-white shadow-base rounded-2xl ">
      <div className="w-full flex justify-between items-center px-2 mb-2">
        <p className="font-bold  text-sm">{examType}</p>
        <p className="font-bold  text-sm" >{examName}</p>
      </div>
      <div className="w-full h-8 bg-secondary-main flex items-center justify-center gap-3 ">
        <p>
          {Math.floor(counter % 60)} : {Math.floor((counter % (60 * 60)) / 60)}
        </p>
        {!isPauseBtnDisabled && (
          <button onClick={pauseExam}>
            <Pause />
          </button>
        )}
        {!isResumeBtnDisabled && (
          <button onClick={resumeExam}>
            <Play />
          </button>
        )}
      </div>
      <div className="w-full flex flex-wrap p-4 gap-2 items-center justify-center ">
        {questionsId.map((item, index) => (
          <ButtonController
            number={index + 1}
            key={item}
            endExam={examStatus === "end" ? true : false}
            result={resultEachQuestion(item)}
            questionDetail={questionDetail(item)}
            onClick={() => {
              handleSetActiveIndex(index);
            }}
          />
        ))}
      </div>
      <div className="w-full px-4">
        {examStatus !== "end" ? (
          <>
            {show ? (
              <button
                disabled={isStopBtnDisabled}
                className="w-full h-10 rounded-2xl bg-primary-main text-white "
                onClick={handler}
              >
                پایان آزمون و نمایش نتیجه
              </button>
            ) : (
              <button
                disabled={isStopBtnDisabled}
                className="w-full h-10 rounded-2xl bg-primary-main text-white "
                onClick={exitExamAlarm}
              >
                خروج از آزمون
              </button>
            )}
          </>
        ) : (
          <button
            className="w-full h-10 rounded-2xl bg-primary-main text-white "
            onClick={() => window.history.go(-1)}
          >
            بازگشت به صفحه آزمون ها
          </button>
        )}
      </div>
    </div>
  );
};

export default ExamWebController;
