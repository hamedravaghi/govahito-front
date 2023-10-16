import FaqCard from "@/src/components/cards/FaqCard";
import SalesCard from "@/src/components/cards/SalesCard";
import CustomPadding from "@/src/components/common/CustomPadding";
import ServerWrapper from "@/src/components/common/ServerWrapper";
import { GoldExamFAQ } from "@/src/lib/data/faq";
import { Kama } from "@/src/lib/svg";
import { getProducts } from "@/src/services/endPoints";
import Image from "next/image";
import { Suspense } from "react";

const TextWrapper = ({ children }) => {
  return (
    <div className="w-full flex gap-2  ">
      <div className="w-4 md:w-5  h-4 md:h-5 min-w-[16px] md:min-w-[20px] min-h-[16px] md:min-h-[20px] rounded-full border border-primary-main mt-3 md:mt-2" />
      <p className="leading-10 text-base">{children}</p>
    </div>
  );
};

const ImageWrapper = ({ children }) => {
  return (
    <div className="w-full p-4 md:p-6 lg:p-10 border border-border-second border-dashed rounded-2xl flex flex-col md:flex-row">
      {children}
    </div>
  );
};

const LineWrapper = ({ number, text }) => {
  return (
    <div className="flex gap-2 items-center whitespace-nowrap">
      <p className="text-secondary-main">{number}</p>
      <p>{text}</p>
    </div>
  );
};

const Product = async () => {
  const products = (await getProducts()) || [];
  return (
    <ServerWrapper className="w-full ">
      <div className="w-full h-20 md:h-36 bg-secondary-main flex flex-col items-center justify-center bg-[url('/images/certificateMobilePattern.svg')] md:bg-[url('/images/newPattern.png')] bg-[center] gap-2 ">
        <h4 className="text-base font-bold md:text-2xl">خرید آزمون طلایی</h4>
      </div>
      <CustomPadding className="mt-4 md:mt-10 gap-12">
        <div className="w-full flex justify-center">
          <div className="w-full md:max-w-[602px] lg:max-w-full lg:w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <Suspense key={item._id} fallback={<></>}>
                <SalesCard
                  product={item}
                  image={item.certificate.image}
                  price={item.price}
                  discountPercent={item.discountPercent}
                  name={item.name}
                  slug={item.slug}
                  certificateSlug={item.certificate.slug}
                />
              </Suspense>
            ))}
          </div>
        </div>
        <TextWrapper>
          مجموعه آزمون طلایی گواهیتو منبعی کامل و جامع از نمونه سوالات و آزمون
          های آیین نامه اصلی در سال 1402 می باشد که از منابع بسیار معتبری گرد
          آوری شده است ؛ بنابراین سوالات این مجموعه کاملا جدید و به روز هستند و
          شامل سوالات پرتکرار ، دشوار و مهم آیین نامه اصلی نیز می باشند .
        </TextWrapper>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex flex-1 flex-col gap-12">
            <TextWrapper>
              مجموعه آزمون طلایی گواهیتو کاملا متفاوت از دیگر بسته های موجود در
              سایت های مشابه به شما ارائه خواهد شد.
              <br /> به این صورت که شما با خرید این آزمون قرار نیست به مجموعه ای
              از سوالات چاپی ، تکراری و بی کیفیت آیین نامه دسترسی داشته باشید
              بلکه گواهیتو پس از خرید این آزمون یک بخشی تحت عنوان آزمون طلایی در
              همین سایت گواهیتو در اختیار شما قرار خواهد داد که این بخش به طور
              کلی 12 آزمون را شامل میشود که هر آزمون دارای 30 سوال می باشد، یعنی
              مجموعا 360 سوال مدت زمان هر آزمون 20 دقیقه می باشد ، یعنی کاملا
              شبیه سازی شده به آزمون آیین نامه اصلی .
            </TextWrapper>
            <TextWrapper>
              در واقع شما صرفا یکسری سوالات چاپی را مطالعه و حفظ نمیکنید، بلکه
              قرار است به طور حرفه ای آزمون بدهید و در شرایط آزمون اصلی قرار
              بگیرید. با تکرار آزمون ها شما به تمامی سوالات و نکات کاملا مسلط
              میشوید و به صورت عملی برای شرکت در آزمون اصلی تجربه به دست می
              آورید . این به آگاهی و تسلط بیشتر شما به سوالات و در نتیجه عدم
              استرس در آزمون اصلی کمک شایانی میکند.
            </TextWrapper>
            <TextWrapper>
              بعد از هر آزمون شما میتوانید کارنامه خود و پاسخ صحیح تمام سوالات
              را مشاهده کنید . تمام کارنامه ها و نتیجه عملکرد شما در تمام آزمون
              ها در پروفایل شما ذخیره خواهد شد تا بتوانید به راحتی نتیجه عملکرد
              و میزان پیشرفت خود را در چند آزمون باهم مقایسه کنید.
            </TextWrapper>
          </div>
          <Image
            src={"/images/checkoutExam.svg"}
            width={495}
            height={539}
            sizes="100vw"
            alt="آزمون های طلایی"
          />
        </div>
        <TextWrapper>
          در ضمن شما احتیاج به هیچ نرم افزار و نصب هیچ اپلیکیشنی ندارید ؛ شرکت
          در هر آزمونی و به هر تعداد دفعاتی در این بخش نامحدود خواهد بود
          بنابراین به راحتی میتوانید نتیجه هر آزمون را مدام تغییر و بهبود دهید
        </TextWrapper>
        <TextWrapper>
          مجموعه آزمون طلایی گواهیتو در حال حاضر برای 4 گواهینامه موتور سیکلت ،
          پایه 3 ، پایه 2 و پایه 1 ارائه میشود که فقط کافیست شما در ابتدا
          گواهینامه مورد نظر خود را انتخاب کرده و سپس اقدام به خرید بسته طلایی
          همان گواهینامه کنید.
        </TextWrapper>
        <TextWrapper>
          برای خرید آزمون طلایی ابتدا گواهینامه خود را انتخاب کنید , سپس در سایت
          ثبت نام کنید و در آخر از طریق درگاه پرداخت مبلغ را پرداخت کنید ؛ پس از
          پرداخت در همان لحظه شما میتوانید به آزمون طلایی خود دسترسی داشته
          باشید.
        </TextWrapper>

        <TextWrapper>
          برای دسترسی به آزمون طلایی سه مسیر وجود دارد که در زیر نشان داده شده
          است:
        </TextWrapper>
        <ImageWrapper className="w-full p-4 md:p-6 lg:p-10 border border-border-second border-dashed rounded-2xl flex flex-col md:flex-row ">
          <div className="flex flex-col gap-3 min-w-[180px] ">
            <p className="font-bold text-sm md:text-base">مسیر 1:</p>
            <LineWrapper number={"1-"} text={"خانه ( صفحه اصلی )"} />
            <LineWrapper number={"2-"} text={"انتخاب گواهینامه"} />
            <LineWrapper number={"3-"} text={"سوالات و آزمون ها"} />
          </div>
          <div className="flex flex-1 items-center justify-center mt-3 lg:mt-0">
            <div className="w-full h-[190px] md:w-[485px] md:h-[298px] lg:w-[686px] lg:h-[186px] relative ">
              <Image
                src={"/images/sales/one.webp"}
                alt="آزمون های طلایی"
                width={686}
                height={186}
                sizes="100vw"
                className=" hidden lg:flex"
              />
              <Image
                src={"/images/sales/oneTablet.jpg"}
                alt="آزمون های طلایی"
                width={"0"}
                height={"0"}
                sizes="100vw"
                className="w-full    h-auto object-fill lg:hidden "
              />
            </div>
          </div>
        </ImageWrapper>
        {/* two */}
        <div className="w-full p-4 md:p-6 lg:p-10 border border-border-second border-dashed rounded-2xl flex flex-col md:flex-row">
          <div className="flex flex-col gap-3 min-w-[180px] ">
            <p className="font-bold text-sm md:text-base">مسیر 2:</p>
            <div className="flex gap-2 items-center whitespace-nowrap">
              <p>خانه ( صفحه اصلی )</p>
            </div>
            <LineWrapper number={"1-"} text={"گواهینامه ها"} />
            <LineWrapper number={"2-"} text={"گواهینامه منتخب"} />
            <LineWrapper number={"3-"} text={"سوالات و آزمون ها"} />
          </div>
          <div className="flex flex-1 items-center justify-center mt-3 lg:mt-0">
            <div className="w-full h-[190px] md:w-[485px] md:h-[298px] lg:w-[686px] lg:h-[186px] relative ">
              <Image
                src={"/images/sales/TwoWeb.png"}
                alt="آزمون های طلایی"
                width={589}
                height={208}
                sizes="100vw"
                className=" hidden lg:flex"
              />
              <Image
                src={"/images/sales/TwoTablet.png"}
                alt="آزمون های طلایی"
                width={"0"}
                height={"0"}
                sizes="100vw"
                className="w-full h-auto object-fill flex lg:hidden "
              />
            </div>
          </div>
        </div>
        {/* three */}
        <div className="w-full p-4 md:p-6 lg:p-10 border border-border-second border-dashed rounded-2xl flex flex-col md:flex-row">
          <div className="flex flex-col gap-3 min-w-[180px] ">
            <p className="font-bold text-sm md:text-base">مسیر 3:</p>
            <div className="flex gap-2 items-center whitespace-nowrap">
              <p>خانه ( صفحه اصلی )</p>
            </div>
            <LineWrapper number={"1-"} text={"آزمون "} />
            <LineWrapper number={"2-"} text={"طلایی"} />
            <LineWrapper number={"3-"} text={"گواهینامه منتخب"} />
          </div>
          <div className="flex flex-1 items-center justify-center mt-3 lg:mt-0">
            <div className="w-full h-[190px] md:w-[485px] md:h-[298px] lg:w-[686px] lg:h-[186px] relative ">
              <Image
                src={"/images/sales/three.png"}
                alt="آزمون های طلایی"
                width={"0"}
                height={"0"}
                sizes="100vw"
                className="w-[308px] h-auto md:w-[489px] lg:w-[547px] object-fill"
              />
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-between items-center">
            <TextWrapper>سوالات متداول</TextWrapper>
            <div className="hidden md:flex lg:hidden">
              <Kama width={70} height={70} />
            </div>
          </div>
          {/* start  */}
          <div className="w-full flex gap-6 mt-6 md:mt-8">
            <div className="hidden lg:flex items-end ">
              <div className="rotate-180">
                <Kama width={80} height={80} />
              </div>
            </div>
            {/* FAQ question  */}

            <div className="flex flex-col flex-1 gap-6 md:gap-4">
              {GoldExamFAQ.map((item, index) => (
                <FaqCard item={item} key={index.toString()} />
              ))}
            </div>

            {/* end of FAQ questions */}
            <div className="hidden lg:flex ">
              <Kama width={80} height={80} />
            </div>
          </div>
          <div className=" hidden md:block lg:hidden ">
            <Kama width={70} height={70} className={"rotate-180 "} />
          </div>
        </div>
      </CustomPadding>
    </ServerWrapper>
  );
};

export default Product;
