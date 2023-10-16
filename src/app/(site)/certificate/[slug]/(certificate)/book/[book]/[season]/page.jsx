import CkBox from "@/src/components/common/CkBox";
import { getCertificate } from "@/src/lib/data/certificate";
import { getCertificateBook, getSeason } from "@/src/services/endPoints";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const certificate = getCertificate(params.slug);
  const book = await getCertificateBook(params.slug);
  const season = await getSeason(params.season);

  const BookSeason = await getSeason(params.season);
  return {
    generator: "گواهیتو",
    title: BookSeason.title,
    description: `تمام نکات مهم بخش ${season.title} کتاب ${book.name} برای گواهینامه ${certificate.title}`,
    applicationName: "گواهیتو",
    author: "گواهیتو",
    referrer: "origin-when-cross-origin",
  };
}

const Season = async ({ params }) => {
  let content;
  await getSeason(params.season).then((res) => (content = res));

  return (
    <div className="mt-5">
      {content ? (
        <div className="w-full rounded-2xl bg-white p-2 md:p-4 border gap-3 md:gap-5 ">
          <div className="w-full flex flex-col md:flex-row justify-between items-center ">
            <div>
              {content?.book ? (
                <p className="text-text-second text-center">
                  برگرفته از کتاب{" "}
                  <span className="text-text-main">{content.book.name}</span>
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="w-full  md:w-[250px] flex md:flex-col items-start justify-between  mt-3 md:mt-0">
              <p className="text-text-second text-xs md:text-sm">
                نویسنده : {content.author || "گواهیتو | تیم محتوا"}
              </p>
              <p className="text-text-second text-xs md:text-sm">
                زمان خواندن : {content.timeToRead || "7"} دقیقه
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-5 ">
            <h4 className="font-bold text-3xl text-center">{content.title}</h4>
          </div>
          {content.image ? (
            <div className="w-full flex flex-col items-center mt-3 md:mt-5">
              <Image
                src={content.image}
                alt={content.title}
                width={"0"}
                height={"0"}
                sizes="100vw"
                className="max-w-[350px] w-full md:w-3/4 lg:w-1/2 h-auto rounded-2xl "
              />
            </div>
          ) : null}
          <div></div>
          <CkBox content={content.content} />
        </div>
      ) : (
        <p>در حال دریافت اطلاعات</p>
      )}
    </div>
  );
};

export default Season;
