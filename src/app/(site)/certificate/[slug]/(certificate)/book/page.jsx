import { getCertificate } from "@/src/lib/data/certificate";
import { getCertificateBook } from "@/src/services/endPoints";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params: { slug } }) {
  const book = await getCertificateBook(slug);
  const certificate = getCertificate(slug);

  return {
    generator: "گواهیتو",
    title: book?.name,
    description: `خلاصه مطالب کتاب ${book?.name} برای آزمون ${
      certificate.title
    } ${"-" + certificate.subTitle} `,
    applicationName: "گواهیتو",
    author: "گواهیتو",
    referrer: "origin-when-cross-origin",
  };
}

const Book = async ({ params }) => {
  let content;

  await getCertificateBook(params.slug).then((data) => {
    if (data) {
      content = data;
    } else {
      content = null;
    }
  });

  const SeasonButton = ({ title, image, href }) => {
    return (
      <Link
        href={href}
        className="flex flex-col items-center gap-2 w-[100px] min-w-[100px] max-w-[100px] text-center mt-3 group hover:-translate-y-2 transition-all duration-100 "
      >
        <div className="w-[90px] h-20 border border-primary-main rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:shadow-base bg-white">
          <div className="absolute bottom-0 right-0 left-0 h-0 group-hover:h-full transition-all duration-200 w-full bg-primary-main" />
          <Image
            width="0"
            height="0"
            className="w-10 h-auto object-fill z-10"
            sizes="100vw"
            alt={title}
            src={image}
          />
        </div>
        <p className="text-sm text-center">{title}</p>
      </Link>
    );
  };

  if (content === null)
    return (
      <div className="w-full  mt-5 md:mt-8">
        <p>محتوای این بخش در حال آماده سازی است</p>
      </div>
    );

  return (
    <div className="w-full  mt-5 md:mt-8">
      <p className=" text-sm md:text-base leading-8 text-text-third">
        کتاب یار شامل موضوعات اصلی و مهم کتاب راهنمایی و رانندگی{" "}
        <span className="font-bold"> {content?.certificate?.title} </span>
        {content?.certificate?.subtitle ? (
          <span className="font-bold"> ({content.certificate.subtitle})</span>
        ) : null}{" "}
        می باشد که به صورت چکیده و دسته بندی شده اما جامع و متمرکز بر موضوعات
        کلیدی و اصلی ارائه می شود . بنابراین با مطالعه کتاب یار میتوانید به
        راحتی به همه سوالات پاسخ دهید
      </p>

      <div className="grid grid-flow-row gap-3 md:gap-6  grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-9 mt-6 md:mt-8 ">
        <Link
          href={"book/signs"}
          
          className="flex flex-col items-center gap-2 w-[100px] min-w-[100px] max-w-[100px] text-center mt-3 group hover:-translate-y-2 transition-all duration-100 "
        >
          <div className="w-[90px] h-20 border border-primary-main rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:shadow-base bg-white">
            <div className="absolute bottom-0 right-0 left-0 h-0 group-hover:h-full transition-all duration-200 w-full bg-primary-main" />
            <Image
              width="0"
              height="0"
              className="w-10 h-auto object-fill z-10"
              sizes="100vw"
              alt={"تابلو ها"}
              src={"https://www.server.govahito.ir/images/LPxYYmcoLG_signs.png"}
            />
          </div>
          <p className="text-sm text-center">تابلو ها</p>
        </Link>
        {content?.seasons?.map((item) => (
          <SeasonButton
            key={item._id}
            title={item.title}
            image={item.icon}
            href={`book/season/${item.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Book;
