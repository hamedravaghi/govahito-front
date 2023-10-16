import ExamCard from "@/src/components/cards/ExamCard";
import { getCertificate } from "@/src/lib/data/certificate";
import { getCertificateTestExam } from "@/src/services/endPoints";

export async function generateMetadata({ params }) {
  const certificate = getCertificate(params.slug);

  return {
    generator: "گواهیتو",
    title: "آزمون های آزمایشی ",
    description: `آزمون های آزمایشی شامل سوالات مهم و پرتکرار آزمون اصلی آیین نامه ${
      certificate.title
    } ${"- " + certificate.subTitle} `,
    applicationName: "گواهیتو",
    author: "گواهیتو",
    referrer: "origin-when-cross-origin",
  };
}

const Exams = async ({ params }) => {
  let content = [];
  await getCertificateTestExam(params.slug).then((data) => {
    content = data;
  });

  const certificate = getCertificate(params.slug);
  let title = certificate?.title ? `${certificate.title}` : "";
  let subTitle = certificate?.subTitle ? `(${certificate.subTitle})` : "";

  return (
    <div className="w-full  mt-5 md:mt-8">
      <p className="text-sm md:text-base leading-8 text-text-third ">
        بخش آزمون آزمایشی کاملا مشابه آزمون آیین نامه <span className="font-bold">{title} {subTitle}</span> در
        آموزشگاه می باشد ، با مدت زمانی مشخص و سوالات مهم و پر تکرار . در انتهای
        آزمون میتوانید پاسخنامه و کارنامه خود را مشاهده کنید.
      </p>
      <div className="grid grid-flow-row gap-6  grid-cols-1  md:grid-cols-3 lg:grid-cols-4 my-2 mt-6 md:mt-7 ">
        {content.length > 0 ? (
          content.map((item, index) => (
            <ExamCard
              id={item._id}
              number={index + 1}
              key={item._id}
              title={item.title}
              subTitle={item.subTitle}
              link={`tests/${item.slug}`}
              questionViewLink={`tests/view/${item.slug}`}
              questionsLength={item.questions.length}
              luck={index === 0 ? false : true}
            />
          ))
        ) : (
          <div>اطلاعات در حال لود شدن است</div>
        )}
      </div>
    </div>
  );
};

export default Exams;
