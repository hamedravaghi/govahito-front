import Image from "next/image";
import Link from "next/link";

import SectionLayout from "./SectionLayout";
import { Question_Modes } from "../../lib/data";

// const boxClassNames = ["-top-1/4 w-48", "top-8 left-0 w-56", "top-36 right-2 w-60", "top-64 left-0 w-44"];
const boxClassNames = [
    "-top-1/4 sm:-top-2/4 sm:right-16 xl:right-16 w-7/12 sm:w-4/12 xl:w-5/12",
    "top-8 sm:-top-10 xl:-top-8 left-0 sm:left-16 md:left-14 xl:-left-10 w-8/12 sm:w-5/12 xl:w-6/12",
    "top-36 sm:top-20 xl:top-22 right-2 sm:right-10 w-9/12 sm:w-5/12 xl:w-6/12",
    "top-64 sm:top-24 xl:top-28 left-0 sm:left-32 md:left-20 xl:left-6 w-6/12 sm:w-3/12 md:w-4/12",
];

const GoldExamSection = () => {
    return (
        <SectionLayout id="exam_gold" className="flex flex-col gap-24">
            <div className="w-full flex flex-col lg:flex-row gap-14">
                <div className="w-full flex flex-1 flex-col ">
                    <div className="flex flex-col ">
                        <p className="font-bold text-[30px] md:text-[40px] text-primary-main ">4</p>
                        <p className="font-bold -mt-3">آزمون طلایی</p>
                    </div>
                    <p className="text-base leading-10 mt-4">
                        برای تکمیل مسیری که تا اینجا طی کردی ، گواهیتو آزمون های طلایی رو بهت پیشنهاد میکنه . بخش آخر برای قبولی در آزمون اصلی آیین نامه ، آزمونهای طلایی گواهیتو ست . با شرکت در این
                        آزمونها کاملا به مباحث آیین نامه مسلط میشی ، دیگه هیچ سوالی برات سخت و دشوار نیست و هیچ موضوعی برات نا آشنا و جدید نیست در نتیجه همه اینها باعث قبولی صد در صدی تو در آزمون اصلی
                        آیین نامه ست . پس از همین حالا شروع کن .
                    </p>
                </div>
                <div className="w-full flex flex-1">
                    <Image src="/images/goldExamSection.png" width={"0"} height={"0"} sizes="100vw" alt="آزمون های طلایی" className="w-full h-auto fill" />
                </div>
            </div>

            <div className="relative w-full grid grid-cols-1 xl:grid-cols-2 gap-y-20 md:place-items-center py-5 bg-secondary-main rounded-r-2xl after:content-[''] after:h-full after:absolute after:bg-secondary-main after:w-full after:right-full after:-z-10">
                <div className="w-full h-80 sm:h-40 flex flex-wrap justify-center relative gap-2">
                    {Question_Modes.map(({ iconPath, text }, index) => (
                        <div key={index} className={`absolute ${boxClassNames[index]} p-4 shadow-base rounded-2xl bg-secondary-background gap-1.5 flex flex-col`}>
                            <Image src={iconPath} width={"0"} height={"0"} alt="" title="" sizes="100vw" className="w-10 md:w-11" />
                            <p className="text-text-main text-xs sm:text-sm font-normal">{text}</p>
                        </div>
                    ))}
                </div>
                <div className="w-full flex flex-col items-center gap-4 lg:gap-8">
                    <h3 className="text-text-main text-sm sm:text-base font-bold">پس خیلی زود دست به کار شو و آزمونتو شروع کن !</h3>
                    <Link
                        href="/product"
                        className="flex justify-center items-center w-44 h-11 rounded-xl shadow-base text-primary-text bg-primary-main hover:bg-primary-hover transition-colors duration-300 ease-in-out text-base font-bold"
                    >
                        خرید آزمون طلایی
                    </Link>
                </div>
            </div>
        </SectionLayout>
    );
};

export default GoldExamSection;
