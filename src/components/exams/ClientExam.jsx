"use client";

import { useRouter } from "next/navigation";

import { useExam } from "@/src/hooks/useExam";
import { useWindowSize } from "@/src/hooks/useWindowSize";

import ExamWebView from "./ExamWebView";
import ExamMobileView from "./ExamMobileView";
import ExamReport from "./modals/ExamReport";
import PauseModal from "./modals/PauseModal";
import StopModal from "./modals/StopModal";
import EndTimeModal from "./modals/EndTimeModal";
import StartModal from "./modals/StartModal";

const ClientExam = ({ exam, certificateSlug, examSlug }) => {
  const router = useRouter();

  const {
    questionsId,
    questionDetail,
    controllerHandler,
    timerController,
    currentQuestion,
    questionHandler,
    modalControllerHandler,
    testResult,
  } = useExam(examSlug, exam.questions, certificateSlug);

  const { currentWidth } = useWindowSize();
  const {
    pauseModal,
    handleHidePauseModal,
    stopModal,
    handleEndExam,
    endTimeModal,
    reportModal,
    handleShowReport,
    handleHideReportModal,
    startExam,
    handleStartExam,
  } = modalControllerHandler;

  return (
    <div className="w-full h-full flex flex-col">
      <PauseModal show={pauseModal} onClose={handleHidePauseModal} />
      <StartModal
        show={!startExam}
        onClose={handleStartExam}
        examType={exam.title}
        examName={exam.subTitle}
        certificateSlug={certificateSlug}
        examSlug={examSlug}
        backLink={`/certificate/${certificateSlug}/${
          exam.type === "gold" ? "golds" : "tests"
        }`}
      />
      <StopModal
        show={stopModal}
        onClose={handleHidePauseModal}
        handleEndExam={handleEndExam}
      />
      <EndTimeModal
        show={endTimeModal}
        onClose={handleShowReport}
        exitToExamsList={() =>
          router.replace(
            `/certificate/${certificateSlug}/${
              exam.type === "gold" ? "golds" : "tests"
            }`
          )
        }
      />
      <ExamReport
        testResult={testResult}
        show={reportModal}
        onClose={handleHideReportModal}
        exitToExamsList={() =>
          router.replace(
            `/certificate/${certificateSlug}/${
              exam.type === "gold" ? "golds" : "tests"
            }`
          )
        }
      />
      {currentWidth && currentWidth >= 769 ? (
        <ExamWebView
          questionDetail={questionDetail}
          questions={exam.questions}
          questionsId={questionsId}
          controllerHandler={controllerHandler}
          timerController={timerController}
          currentQuestion={currentQuestion}
          questionHandler={questionHandler}
          examTitle={exam.title}
          examSubTitle={exam.subTitle}
          certificateSlug={certificateSlug}
        />
      ) : null}
      {currentWidth && currentWidth < 768 ? (
        <ExamMobileView
          questionDetail={questionDetail}
          questions={exam.questions}
          questionsId={questionsId}
          controllerHandler={controllerHandler}
          timerController={timerController}
          currentQuestion={currentQuestion}
          questionHandler={questionHandler}
          examTitle={exam.title}
          examSubTitle={exam.subTitle}
          certificateSlug={certificateSlug}
        />
      ) : null}
    </div>
  );
};

export default ClientExam;
