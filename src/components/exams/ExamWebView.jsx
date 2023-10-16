import ExamWebController from "./components/ExamWebController";
import ExamCardQuestion from "./components/ExamCardQuestion";
import CertificateName from "../bar/components/CertificateName";

const ExamWebView = ({
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
    <div className="w-full h-full min-h-screen flex flex-col gap-4  pt-5">
      <div className="w-full flex justify-between items-center">
        <div>
          <ul className="list-disc  ">
            <li>برای ذخیره نتیجه آزمون حتما باید در سایت ثبت نام کنید</li>
            <li>
              شما می بایست حد اقل به 10 سوال پاسخ دهید تا نتیجه آزمون شما ذخیره
              شود
            </li>
          </ul>
        </div>
        <div className="w-[200px]">
          <CertificateName slug={certificateSlug} border={false} />
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-4">
        <div className=" w-full flex flex-1 gap-6">
          <div className="flex flex-1  ">
            <div className="w-full">
              {currentQuestion ? (
                <ExamCardQuestion
                  currentQuestion={currentQuestion}
                  questionHandler={questionHandler}
                  questionDetail={questionDetail(currentQuestion._id)}
                />
              ) : null}
            </div>
          </div>
          <div className="md:w-[242px] md:min-w-[242px] lg:w-[286px] lg:min-w-[286px]   ">
            <ExamWebController
              questionsId={questionsId}
              questionDetail={questionDetail}
              controllerHandler={controllerHandler}
              timerController={timerController}
              examType={examTitle}
              examName={examSubTitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamWebView;
