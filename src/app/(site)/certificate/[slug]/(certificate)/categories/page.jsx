import CategoryCard from "@/src/components/cards/CategoryCard";
import { getCertificate } from "@/src/lib/data/certificate";
import { getCertificateQuestioncategories } from "@/src/services/endPoints";

export async function generateMetadata({ params }) {
  const certificate = getCertificate(params.slug);

  return {
    generator: "گواهیتو",
    title: "مجموعه سوالات دسته بندی شده",
    description: `تمام سوالات مهم و پرتکرار آزمون آیین نامه رانندگی ${
      certificate.title
    } ${"-" + certificate.subTitle}`,
    applicationName: "گواهیتو",
    author: "گواهیتو",
    referrer: "origin-when-cross-origin",
  };
}

const Categories = async ({ params }) => {
  let content = [];
  await getCertificateQuestioncategories(params.slug).then((data) => {
    content = data;
  });

  const certificate = getCertificate(params.slug);

  if (content.length === 0) return <div className="w-full"></div>;
  return (
    <div className="w-full  mt-5 md:mt-8">
      <div className="w-full  ">
        <p className="text-sm md:text-base leading-8 text-text-third ">
          بخش سوالات موضوعی شامل سوالاتی است که براساس مباحث اصلی و مهم کتاب
          راهنمایی و رانندگی{" "}
          <span className="font-bold">
            {certificate.subTitle} ({certificate.title}){" "}
          </span>{" "}
          دسته بندی شده اند و هم چنین شامل پاسخ درست و راهنمایی نیز میباشند .
          بنابراین این بخش به یادگیری بیشتر شما در هر مبحثی کمک بسیاری می کند .
        </p>
      </div>
      <div className="grid grid-flow-row gap-3 md:gap-6  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-4 my-2 mt-6 md:mt-8 ">
        {content.length > 0 ? (
          content.map((item, index) => (
            <CategoryCard
              border={index + 1 !== content.length ? true : false}
              key={item._id}
              title={item.categoryName}
              image={item.categoryImage}
              allQuestion={item.questionLength}
              categoryId={item._id}
              href={`categories/${item.slug}`}
            />
          ))
        ) : (
          <div>اطلاعات در حال لود شدن است</div>
        )}
      </div>
    </div>
  );
};

export default Categories;
