import SimpleQuestionCard from "@/src/components/cards/SimpleQuestionCard";
import { getCertificate } from "@/src/lib/data/certificate";
import { getCategoryQuestions } from "@/src/services/endPoints";

export async function generateMetadata({ params }) {
  const certificate = getCertificate(params.slug);
  const category = await getCategoryQuestions(params.questions);

  return {
    generator: "گواهیتو",
    title: category?.category?.categoryName,
    description: `تمام سوالات مهم و پرتکرار بخش ${
      category?.category?.categoryName
    } ویژه آزمون آیین نامه رانندگی ${certificate.title} ${
      "-" + certificate.subTitle
    }`,
    applicationName: "گواهیتو",
    author: "گواهیتو",
    referrer: "origin-when-cross-origin",
  };
}

const Questions = async ({ params }) => {
  let content = [];
  await getCategoryQuestions(params.questions).then((data) => {
    content = data;
  });

  return (
    <div className="w-full flex flex-col gap-2 sm:gap-4 mt-5">
      {Array.isArray(content?.questions) > 0 ? (
        content.questions.map((item, index) => (
          <SimpleQuestionCard
            border={index + 1 !== content.length ? true : false}
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
  );
};

export default Questions;
