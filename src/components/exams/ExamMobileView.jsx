
import ExamMobileController from "./components/ExamMobileController";
import MobileExamCardQuestion from "./components/MobileExamCardQuestion";

const ExamMobileView = ({
  questionsId,
  questionDetail,
  controllerHandler,
  timerController,
  currentQuestion,
  questionHandler,
  examTitle,
  examSubTitle,
  certificateSlug,
}) => {

  return (
    <div className="w-full mobile-exam-container flex flex-col fixed top-16 right-0 left-0 bottom-0 bg-white z-20">
      <div className="flex flex-1 bg-background relative overflow-hidden">
        {currentQuestion ? (
          <MobileExamCardQuestion
            currentQuestion={currentQuestion}
            questionHandler={questionHandler}
            questionDetail={questionDetail(currentQuestion._id)}
          />
        ) : null}
      </div>
      <ExamMobileController
        questionsId={questionsId}
        questionDetail={questionDetail}
        controllerHandler={controllerHandler}
        timerController={timerController}
        questionHandler={questionHandler}
        examTitle={examTitle}
        examSubTitle={examSubTitle}
        certificateSlug={certificateSlug}
      />
    </div>
  );
};

export default ExamMobileView;
