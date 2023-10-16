import { Pause, Play } from "@/src/lib/svg";
import ButtonController from "./ButtonController";
import { getCertificate } from "@/src/lib/data/certificate";

const ExamMobileController = ({
  questionsId,
  questionDetail,
  controllerHandler,
  examTitle,
  examSubTitle,
  certificateSlug,
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
  const certificate = getCertificate(certificateSlug);

  return (
    <div className="w-full h-[120px] min-h-[120px] flex flex-col">
      <div className="flex h-12 w-full relative overflow-y-scroll no-scrollbar items-center gap-2 ">
        {questionsId.map((item, index) => (
          <ButtonController
            scrollId={`qeustionBar-${index}`}
            number={index + 1}
            key={item}
            endExam={examStatus === "end" ? true : false}
            result={resultEachQuestion(item)}
            questionDetail={questionDetail(item)}
            onClick={() => {
              handleSetActiveIndex(index);
            }}
            className={`${index === questionsId.length - 1 && "ml-3"}
            ${index === 0 && "mr-3"}`}
          />
        ))}
      </div>
      <div className="flex flex-1  flex-col w-full justify-between bg-white shadow-[0_4px_15px_0_rgba(0,0,0,0.15)] px-4 items-center">
        <div className="flex justify-between px-2 w-full py-1 text-xs font-bold text-text-second ">
          <p>{certificate.title}</p>
          <p>{examTitle}</p>
          <p>{examSubTitle}</p>
        </div>
        <div className="flex flex-1   w-full justify-between  items-center">
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

          <p>
            {Math.floor(counter % 60)} :{" "}
            {Math.floor((counter % (60 * 60)) / 60)}
          </p>

          {examStatus !== "end" ? (
            <>
              {show ? (
                <button
                  disabled={isStopBtnDisabled}
                  className="px-3 h-[36px]  rounded-xl shrink-0 text-white bg-primary-main shadow-base flex items-center justify-center gap-1"
                  onClick={handler}
                >
                  پایان آزمون و نمایش نتیجه
                </button>
              ) : (
                <button
                  disabled={isStopBtnDisabled}
                  className="px-3 h-[36px]  rounded-xl shrink-0 text-white bg-primary-main shadow-base flex items-center justify-center gap-1"
                  onClick={exitExamAlarm}
                >
                  خروج از آزمون
                </button>
              )}
            </>
          ) : (
            <button
              className="px-3 h-[36px]  rounded-xl shrink-0 text-white bg-primary-main shadow-base flex items-center justify-center gap-1"
              onClick={() => window.history.go(-1)}
            >
              بازگشت به صفحه آزمون ها
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamMobileController;
