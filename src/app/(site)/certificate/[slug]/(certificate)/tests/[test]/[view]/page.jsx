import CertificateName from "@/src/components/bar/components/CertificateName";
import SimpleQuestionCard from "@/src/components/cards/SimpleQuestionCard";
import { getCertificate } from "@/src/lib/data/certificate";
import { getSingleTestExam } from "@/src/services/endPoints";

export async function generateMetadata({ params }) {
  const certificate = getCertificate(params.slug);
  const exam = await await getSingleTestExam(params.view);

  return {
    generator: "گواهیتو",
    title: `${exam.subTitle} `,
    description: `سوالات آزمون آزمایشی ${
      "(" + exam.subtitle + ")"
    }آیین نامه راهنمایی ${certificate.title} ${"- " + certificate.subTitle}
    } `,
    applicationName: "گواهیتو",
    author: "گواهیتو",
    referrer: "origin-when-cross-origin",
  };
}

const View = async ({ params }) => {
  let exam;
  await getSingleTestExam(params.view).then((result) => {
    exam = result;
  });
  return (
    <div className="w-full flex flex-col gap-3 mt-5">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-1 items-center pt-2">
          <CertificateName border={false} slug={params.slug} />
        </div>
        <div>
          <h3 >{exam.title}</h3>
          <h4 className=" text-text-second">{exam.subTitle}</h4>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 sm:gap-4 ">
        {Array.isArray(exam?.questions) > 0 ? (
          exam.questions.map((item, index) => (
            <SimpleQuestionCard
              border={index + 1 !== exam.questions.length ? true : false}
              key={item._id}
              questionText={item.questionText}
              questionImage={item.questionImage}
              type={item.answerType}
              answers={item.answers}
              trueAnswer={item.trueAnswer}
              number={index + 1}
              hint={item.hint}
            />
          ))
        ) : (
          <div>اطلاعات در حال لود شدن است</div>
        )}
      </div>
    </div>
  );
};

export default View;
