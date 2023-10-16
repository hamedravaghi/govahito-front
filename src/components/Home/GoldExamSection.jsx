
import Image from "next/image";
import React from "react";
import SectionLayout from "./SectionLayout";

const GoldExamSection = () => {
  return (
    <SectionLayout id="exam_gold">
      <div className="w-full flex flex-col "></div>
      <div className="w-full flex flex-col lg:flex-row gap-14">
        <div className="w-full flex flex-1 flex-col ">
          <div className="flex flex-col ">
            <p className="font-bold text-[30px] md:text-[40px] text-primary-main ">
              4
            </p>
            <p className="font-bold -mt-3">آزمون طلایی</p>
          </div>
          <p className="text-base  leading-10 mt-4">
            برای تکمیل مسیری که تا اینجا طی کردی ، گواهیتو آزمون های طلایی رو
            بهت پیشنهاد میکنه . بخش آخر برای قبولی در آزمون اصلی آیین نامه ،
            آزمونهای طلایی گواهیتو ست . با شرکت در این آزمونها کاملا به مباحث
            آیین نامه مسلط میشی ، دیگه هیچ سوالی برات سخت و دشوار نیست و هیچ
            موضوعی برات نا آشنا و جدید نیست در نتیجه همه اینها باعث قبولی صد در
            صدی تو در آزمون اصلی آیین نامه ست . پس از همین حالا شروع کن .
          </p>
        </div>
        <div className="w-full flex flex-1">
          <Image
            src="/images/goldExamSection.png"
            width={"0"}
            height={"0"}
            sizes="100vw"
            alt="آزمون های طلایی"
            className="w-full h-auto fill"
          />
        </div>
      </div>
      <div className="w-full min-h-[292px] mt-10 md:mt-14 lg:mt-20 relative ">
        <div className="w-full  flex flex-col md:hidden  border-l border-primary-main border-dashed gap-6">
          <div className="w-full h-[70px] flex items-center flex-row-reverse ">
            <div className="w-10 border-b-[1px] border-primary-main border-dashed" />
            <div className="w-4 h-4 border border-primary-main rounded-full bg-secondary-background " />
            <div className="ml-2 p-4  flex items-center justify-center border border-primary-main rounded-2xl whitespace-nowrap">
              سوالات پر تکرار و جدید
            </div>
          </div>
          <div className="w-full h-[70px] flex items-center flex-row-reverse">
            <div className="w-10 border-b-[1px] border-primary-main border-dashed" />
            <div className="w-4 h-4 border border-primary-main rounded-full bg-secondary-background " />
            <div className="ml-2 p-4  flex items-center justify-center border border-primary-main rounded-2xl whitespace-nowrap">
              مشابه سوالات آزمون اصلی آیین نامه
            </div>
          </div>
          <div className="w-full h-[70px] flex items-center flex-row-reverse">
            <div className="w-10 border-b-[1px] border-primary-main border-dashed" />
            <div className="w-4 h-4 border border-primary-main rounded-full bg-secondary-background " />
            <div className="ml-2 p-4  flex items-center justify-center border border-primary-main rounded-2xl whitespace-nowrap">
              آزمونهای کامل و متنوع
            </div>
          </div>
          <div className="w-full h-[70px] flex items-center flex-row-reverse">
            <div className="w-10 border-b-[1px] border-primary-main border-dashed" />
            <div className="w-4 h-4 border border-primary-main rounded-full bg-secondary-background " />
            <div className="ml-2 p-4  flex items-center justify-center border border-primary-main rounded-2xl whitespace-nowrap">
              شامل همه موضوعات آیین نامه
            </div>
          </div>
        </div>

        {/* tablet section */}

        <div className="w-full min-h-[292px] h-auto mt-10 md:mt-14 lg:mt-20  hidden md:flex flex-col lg:hidden  pr-[106px] relative">
          <div className=" bottom-[36px] right-[103px] border-r-[1px] border-dashed border-primary-main h-[492px] md:absolute lg:hidden" />
          <div className=" w-4 h-4 border border-primary-main bg-secondary-background -top-[152px] right-[97px] rounded-full hidden md:flex md:absolute lg:hidden z-10" />
          <div className="w-full h-full  flex flex-col gap-6">
            <div className="h-20 w-full flex items-center">
              <div className="w-[117px] border-b-[1px] border-primary-main border-dashed" />
              <div className="w-4 h-4 border border-primary-main rounded-full bg-secondary-background" />
              <div className="mr-2 p-8  flex items-center justify-center border border-primary-main rounded-2xl">
                سوالات پر تکرار و جدید
              </div>
            </div>
            <div className="h-20 w-full flex items-center">
              <div className="w-[117px] border-b-[1px] border-primary-main border-dashed" />
              <div className="w-4 h-4 border border-primary-main rounded-full bg-secondary-background" />
              <div className="mr-2 p-8  flex items-center justify-center border border-primary-main rounded-2xl whitespace-nowrap">
                مشابه سوالات آزمون اصلی آیین نامه
              </div>
            </div>
            <div className="h-20 w-full flex items-center">
              <div className="w-[117px] border-b-[1px] border-primary-main border-dashed" />
              <div className="w-4 h-4 border border-primary-main rounded-full bg-secondary-background" />
              <div className="mr-2 p-8  flex items-center justify-center border border-primary-main rounded-2xl">
                آزمونهای کامل و متنوع
              </div>
            </div>
            <div className="h-20 w-full flex items-center">
              <div className="w-[117px] border-b-[1px] border-primary-main border-dashed" />
              <div className="w-4 h-4 border border-primary-main rounded-full bg-secondary-background" />
              <div className="mr-2 p-8  flex items-center justify-center border border-primary-main rounded-2xl">
                شامل همه موضوعات آیین نامه
              </div>
            </div>
          </div>
        </div>

        {/* web section flex */}
        <div className="w-full min-h-[292px] mt-10 md:mt-14 lg:mt-20 relative hidden lg:flex flex-col ">
          <div className=" bottom-[30px] left-1/2 righ-1/2 border-r-[1px] border-dashed border-primary-main h-[780px] absolute" />
          <div className="w-full flex justify-end">
            <div className="w-1/2 pr-[75px] flex relative  ">
              <div className="w-4 h-4 rounded-full border border-primary-main absolute -translate-y-2 top-1/2 bottom-1/2 right-[55px]" />
              <div className="w-[52px] border-b-[1px] border-primary-main border-dashed absolute top-1/2 right-0" />
              <div className="p-8  rounded-2xl border border-primary-main bg-secondary-background whitespace-nowrap">
                سوالات پر تکرار و جدید
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start -translate-y-[36px]">
            <div className="w-1/2 pl-[75px] flex justify-end relative">
              <div className="w-4 h-4 rounded-full border border-primary-main absolute -translate-y-2 top-1/2 bottom-1/2 left-[55px]" />
              <div className="w-[52px] border-b-[1px] border-primary-main border-dashed absolute top-1/2 left-0" />
              <div className="p-8  rounded-2xl border border-primary-main bg-secondary-background whitespace-nowrap">
                آزمون های کامل و متنوع
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end -translate-y-[36px]">
            <div className="w-1/2 pr-[75px] flex relative">
              <div className="w-4 h-4 rounded-full border border-primary-main absolute -translate-y-2 top-1/2 bottom-1/2 right-[55px]" />
              <div className="w-[52px] border-b-[1px] border-primary-main border-dashed absolute top-1/2 right-0" />
              <div className="p-8  rounded-2xl border border-primary-main bg-secondary-background whitespace-nowrap">
                مشابه سوالات آزمون اصلی آیین نامه
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start -translate-y-[36px]">
            <div className="w-1/2 pl-[75px] flex justify-end relative">
              <div className="w-4 h-4 rounded-full border border-primary-main absolute -translate-y-2 top-1/2 bottom-1/2 left-[55px]" />
              <div className="w-[52px] border-b-[1px] border-primary-main border-dashed absolute top-1/2 left-0" />
              <div className="p-8  rounded-2xl border border-primary-main bg-secondary-background whitespace-nowrap">
                شامل همه موضاعات آیین نامه
              </div>
            </div>
          </div>
        </div>
        {/* end of web section */}
      </div>
    </SectionLayout>
  );
};

export default GoldExamSection;
