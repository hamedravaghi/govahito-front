import Image from "next/image";
import SectionLayout from "./SectionLayout";

const QuestionCategorySection = () => {
  return (
    <SectionLayout id={"question_category"}>
      <div className="w-full flex flex-col-reverse  lg:flex-row gap-10 md:gap-12 lg:gap-5">
        <div className="flex flex-1 relative justify-end md:justify-center ">
          <Image
            src={"/images/svg/testExamSection.svg"}
            width={"0"}
            height={"0"}
            sizes="100vw"
            alt="سوالات موضوعی"
            className="w-[293px] h-[212px] md:w-[477px] md:h-[351px] lg:w-[501px] lg:h-[351px] "
          />
          <div className="w-full h-4/5 rounded-xl border border-secondary-main absolute bottom-0 right-0 left-0 -z-10" />
        </div>
        <div className="flex flex-col flex-1 pb-6 rounded-2xl border border-secondary-main pt-2 md:pt-6 lg:pt-8 px-4 md:px-6 lg:px-8">
          <div className="flex flex-col ">
            <p className="font-bold text-[30px] md:text-[40px] text-primary-main ">
              2
            </p>
            <p className="font-bold -mt-3">سوالات موضوعی</p>
          </div>
          <p className="text-base  leading-10 mt-4">
            یه بخش بسیار جذاب در گواهیتو ؛ <br /> بعد از اینکه کتاب یار رو
            مطالعه کردی همون مباحث دسته بندی شده رو در قالب سوال برات تکرار
            میکنیم . اما نگران نباش چون سوال رو که جواب بدی پاسخ درست رو با
            توضیح بهت نشون میدیم تا کامل اون مطلب رو یاد بگیری .اینطوری متوجه
            میشی که در چه مبحثی قوی هستی و چه مبحثی برات سخت تره تا بیشتر مطالع
            اش کنی . چی بهتر از این؟
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default QuestionCategorySection;
