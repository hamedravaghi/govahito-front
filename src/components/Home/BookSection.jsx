import Image from "next/image";
import SectionLayout from "./SectionLayout";

const BookSection = ({ className }) => {
  return (
    <SectionLayout id={"book"} className={className}>
      <div className="flex flex-col lg:flex-row ">
        <div className="flex flex-col flex-1 z-10">
          <p className="font-bold text-[30px] md:text-[40px] text-primary-main -translate-x-1 md:-translate-x-[14px] lg:-translate-x-1 translate-y-2 md:translate-y-2">
            1
          </p>
          <p className="font-bold ">کتاب یار</p>
          <p className="text-sm md:text-base leading-8 md:leading-10 font-normal">
            کتاب یار همان کتاب راهنمایی و رانندگی است ؛ اما به صورت چکیده ، جامع
            ، غیر پراکنده و بسیار کاربردی . گواهیتو برای تو دوست خوبم تمام
            مباحثی که برای آزمون حتما باید بلد باشی رو در کتاب یار جمع آوری
            کرده، پس برای آزمون دادن و گرفتن هر گواهینامه ای که دوست داری ،
            ابتدا کتاب یار رو کامل مطالعه کن و بعد به سراغ قسمت های دیگه برو !{" "}
          </p>
        </div>
        <div className="flex flex-1 justify-center relative -translate-y-9 md:-translate-y-0 ">
          <Image
            src={"/images/svg/serviceMobilePic.svg"}
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="w-auto h-full flex md:hidden"
            alt="گواهیتو"
          />
          <Image
            src={"/images/svg/serviceTabletPic.svg"}
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="w-auto h-full  hidden md:flex lg:hidden"
            alt="گواهیتو"
          />
          <Image
            src={"/images/svg/serviceWebPic.svg"}
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="w-auto h-full  hidden lg:flex"
            alt="گواهیتو"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default BookSection;
