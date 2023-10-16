import ExamCard from "@/src/components/cards/ExamCard";
import { getCertificate } from "@/src/lib/data/certificate";
import { getCertificateGoldExam } from "@/src/services/endPoints";

export async function generateMetadata({ params }) {
  const certificate = getCertificate(params.slug);

  return {
    generator: "گواهیتو",
    title: "آزمون های طلایی ",
    description: `آزمون های طلایی شامل سوالات مهم و پرتکرار آزمون اصلی آیین نامه ${
      certificate.title
    } ${"- " + certificate.subTitle} `,
    applicationName: "گواهیتو",
    author: "گواهیتو",
    referrer: "origin-when-cross-origin",
  };
}

const Golds = async ({ params }) => {
  let content = [];
  let product = {};
  await getCertificateGoldExam(params.slug).then((data) => {
    content = data.exams;
    product = data.product;
  });

  const certificate = getCertificate(params.slug);
  let title = certificate?.title ? `${certificate.title}` : "";
  let subTitle = certificate?.subTitle ? `(${certificate.subTitle})` : "";

  return (
    <div className="w-full  mt-5 md:mt-8">
      <p className="text-sm md:text-base leading-8 text-text-third ">
        بخش آزمون طلایی همان آزمون های آیین نامه{" "}
        <span className="font-bold">
          {title} {subTitle}
        </span>{" "}
        در آموزشگاه می باشد ، با مدت زمانی مشخص و سوالات مهم و پر تکرار . در
        انتهای آزمون میتوانید پاسخنامه و کارنامه خود را مشاهده کنید.
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
              link={`golds/${item.slug}`}
              questionViewLink={`golds/view/${item.slug}`}
              questionsLength={item.questions.length}
              type={item.type}
              productId={product._id}
            />
          ))
        ) : (
          <div>اطلاعات در حال لود شدن است</div>
        )}
      </div>
    </div>
  );
};

export default Golds;
