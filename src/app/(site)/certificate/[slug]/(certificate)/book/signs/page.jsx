import { getCertificate } from "@/src/lib/data/certificate";
import {
  HashtGosh,
  MostatilOfoghi,
  MostatilAmodi,
  Parcham,
  Lozi,
  PanjGhosh,
  Dayere,
  Mosalas,
} from "@/src/lib/svg";
import { getAllSignCategory } from "@/src/services/endPoints";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const certificate = getCertificate(params.slug);
  return {
    generator: "گواهیتو",
    title: "تابلو های راهنمایی و رانندگی ایران",
    description: `تابلو های راهنمایی و رانندگی ویژه دریافت گواهینامه ${
      certificate.title
    } ${"-" + certificate.subTitle}`,
    applicationName: "گواهیتو",
    author: "گواهیتو",
    referrer: "origin-when-cross-origin",
  };
}

const SignColor = ({ color1, color2, text }) => {
  return (
    <div className="w-full flex gap-2 items-center">
      <div
        style={{ backgroundColor: color1 }}
        className={`w-10 h-10 min-h-[40px] min-w-[40px] rounded-lg `}
      />
      {color2 ? (
        <div
          className={`w-10 h-10 min-h-[40px] min-w-[40px] rounded-lg bg-white border border-black`}
        />
      ) : null}
      <div className="flex flex-1 ">
        <p className="text-sm md:text-base">{text}</p>
      </div>
    </div>
  );
};

const Shape = ({ shape, text }) => {
  return (
    <div className="w-full h-24 lg:h-16 flex gap-4 border-b border-border-second lg:border-none pb-4 items-center">
      <div className="w-10 min-w-[70px] flex items-center justify-center ">
        {shape}
      </div>
      <p className=" text-sm md:text-base">{text}</p>
    </div>
  );
};

const SignCard = ({ text, subText, image, href }) => {
  return (
    <Link
      href={href}
      className="w-full min-h-[100px] md:h-[202px] flex md:flex-col rounded-2xl shadow-base bg-white overflow-hidden"
    >
      <div className="w-[100px] h-full md:h-[150px] md:w-full border-b items-center flex justify-center">
        <Image src={image} width={"0"} height={"0"} sizes="100vw"
        className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] "
        alt={`تابلو های ${text}`} />
      </div>
      <div className="flex flex-1 md:w-full px-4 items-center ">
        <p className="font-bold">{text}</p>
        <p className="text-sm px-2">{subText}</p>
      </div>
    </Link>
  );
};

const Sign = async ({ params }) => {
  let result;
  await getAllSignCategory().then((res) => {
    result = res;
  });

  return (
    <div className="mt-5 ">
      <div className="w-full flex flex-col gap-16 md:gap-28">
        <section className="w-full flex flex-col gap-1 hyphens-auto leading-8 ">
          <h4 className="font-bold">تابلوها</h4>
          <p>
            1- تابلوهای بازدارنده یا انتظامی: این تابلوهای بیشتر به شکل دایره با
            نوار حاشیه­ ای قرمز رنگ مشخص می­ گردند و نوع ممنوعیت را نشان می
            ­دهند برخی از تابلوها همچون «تابلوی ایست». «حق تقدم عبور با شما».
            «خیابان اصلی»، «مسیر کامیون حامل مواد خطرناک»، «رعایت حق تقدم» و ...
            دایروی شکل نیستند ولی در همین گروه قرار دارند.
          </p>
          <p>
            2- تابلوهای هشدار دهنده یا اخطاری: این تابلوها بیشتر به شکل مثلث با
            نوار حاشیه­ ای قرمز رنگ و زمینه سفید طراحی می­ شوند و نوعی خطر را
            هشدار می ­دهند.
          </p>
          <p>
            3- تابلوهای آگاهی دهنده یا اخباری: تابلوهایی هستند که حاوی توصیه­
            های عمومی بوده، در رنگ­های سفید، سبز، قهوه ­ای، زرد، آبی و به
            شکل­های مثلث، دایره، مستطیل، مربع و ... طراحی می­گردند. این تابلوها
            به دو دسته زیر تقسیم می­شوند.
          </p>
          <p>
            الف- آگاهی دهنده دستوری: تبعیت از این تابلوها الزامی و در صورت عدم
            توجه رانندگان مرتکب خلاف و نقض قانون می­گردند.
          </p>
          <p>
            ب- آگاهی دهنده غیر دستوری: این تابلوها رانندگان را برای دسترسی به
            مسیر مورد نیاز و سایر نیازهای ترافیکی راهنمایی می­نمایند.
          </p>

          {Array.isArray(result) ? (
            <div className="grid grid-flow-row gap-4 md:gap-12  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-8">
              {result.map((item) => (
                <SignCard
                  key={item._id}
                  text={item.title}
                  image={item.image}
                  href={`signs/${item.slug}`}
                />
              ))}
            </div>
          ) : null}
        </section>
        <section className="w-full flex flex-col gap-4 hyphens-auto">
          <h4 className="font-bold">رنگ ها</h4>
          <p>
            رنگ‌ها در علائم عبور و مرور معنا و مفهوم خاصی دارند، که در زیر به
            ‌طور خلاصه به آن اشاره شده ‌است:
          </p>
          <div className="w-full flex flex-col gap-10 md:gap-4">
            <SignColor
              text={"رنگ قرمز: منع کننده یا ایست"}
              color1={"#F44336"}
            />
            <SignColor
              text={
                "رنگ سبز: حرکات مجاز، راهنمای مسیر در بزرگراه­ها و اماکن مذهبی"
              }
              color1={"#4CAF50"}
            />
            <SignColor
              text={
                "رنگ آبی: راهنمای خدمات، حرکات مجاز، علائم اخباری و راهنمای مسیر در آزادراه‌ها"
              }
              color1={"#93D4D6"}
            />
            <SignColor
              text={
                "رنگ زرد: هشدارهای عمومی و هشدار برای انجام «عملیات ساختمانی» و یا «تعمیر و نگهداری»"
              }
              color1={"#FFC440"}
            />
            <SignColor
              text={"رنگ نارنجی: راهنما برای منطق اداری و آموزشی و خدماتی"}
              color1={"#F4AB76"}
            />
            <SignColor
              text={"رنگ قهوه‌ای: راهنما برای مناطق تفریحی و فرهنگی و گردشگری"}
              color1={"#956847"}
            />
            <SignColor
              text={
                "رنگ سیاه و سفید: علامت دستوری و راهنمای مسیر در سایر راه­ها"
              }
              color1={"#333333"}
              color2={"#ffffff"}
            />
          </div>
        </section>
        <section className="w-full flex flex-col gap-4 hyphens-auto ">
          <h4 className="font-bold">شکل ها</h4>
          <p>مفهوم شکل‌ها در علائم عبور و مرور :</p>
          <div className="w-full flex flex-col gap-4">
            <Shape
              shape={<HashtGosh />}
              text={"هشت‌ گوش: تنها برای تابلوهای ایست (توقف)"}
            />
            <Shape
              shape={<MostatilOfoghi />}
              text={
                "مستطیل افقی: معمولاً برای تابلوهای راهنما و هشدار برای خطرات ناشی از تعمیر و نگهداری"
              }
            />
            <Shape
              shape={<MostatilAmodi />}
              text={"مستطیل قائم: معمولاً برای تابلوهای دستوری و خدمات"}
            />
            <Shape
              shape={<Parcham />}
              text={"مستطیل پرچمی: معمولاً برای علائم راهنما"}
            />
            <Shape
              shape={<Lozi />}
              text={"لوزی (مربع نشسته روی یک رأس): شروع و پایان حق تقدم مسیر"}
            />
            <Shape
              shape={<PanjGhosh />}
              text={
                "پنج گوشه با نقطه رأس فوقانی: علائم هشدار برای مدرسه و دبیرستان"
              }
            />
            <Shape shape={<Dayere />} text={"دایره: علامت دستوری، بازدارنده"} />
            <Shape
              shape={<Mosalas />}
              text={
                "مثلث متساوی‌الاضلاع (نشست روی یک رأس) : صرفاً برای رعایت حق تقدم"
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sign;
