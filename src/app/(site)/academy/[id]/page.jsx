import MainBanner from "@/src/components/Home/MainBanner";
import CustomPadding from "@/src/components/common/CustomPadding";
import AcademyChatBox from "@/src/components/sections/AcademyChatBox";
import AcademyMap from "@/src/components/sections/AcademyMap";
import {
  Calendar,
  Clock,
  Fax,
  Location,
  Phone,
  PostalCode,
} from "@/src/lib/svg";

const IntoCard = ({ children }) => {
  return (
    <div className="w-full h-full rounded-2xl border border-border-second p-4 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Content = ({ icon, title, content }) => {
  return (
    <div className="w-full flex flex-col gap-3 md:gap-2">
      <div className="flex gap-2 text-text-third ">
        {icon} {title}
      </div>
      <p className="md:font-bold">{content}</p>
    </div>
  );
};

const SingleAcademy = () => {
  return (
    <div className="w-full">
      <MainBanner>
        <div className="w-full h-full flex items-center justify-center">
          <h4 className="text-xl font-bold md:text-2xl lg:text-4xl">
            آموزشگاه شتاب
          </h4>
        </div>
      </MainBanner>
      <CustomPadding
        className={"mt-4 md:mt-8 lg:mt-12 gap-4 lg:gap-8 flex flex-col"}
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="h-[200px] md:h-[168px] lg:h-[200px] w-full lg:w-1/2">
            <IntoCard>
              <>
                <Content
                  icon={<Calendar />}
                  title={"روزهای فعالیت :"}
                  content={"تمامی روزهای هفته ( به جز تعطیلات رسمی )"}
                />
                <Content
                  icon={<Clock />}
                  title={"ساعات کاری :"}
                  content={"از ساعت 7 تا 20"}
                />
              </>
            </IntoCard>
          </div>
          <div className="h-[200px] md:h-[168px] lg:h-[200px] w-full lg:w-1/2 ">
            <IntoCard>
              <>
                <Content
                  icon={<Phone orange={false} />}
                  title={"شماره تماس :"}
                  content={"77445566(021) 77445566(021) 77445566(021)"}
                />
                <Content
                  icon={<Fax />}
                  title={"ساعات کاری :"}
                  content={"از ساعت 7 تا 20"}
                />
              </>
            </IntoCard>
          </div>
        </div>
        <div className="h-[200px] md:h-[168px] lg:h-[200px] ">
          <IntoCard>
            <>
              <Content
                icon={<Location orange={false} />}
                title={"آدرس :"}
                content={
                  "تهران، خیابان جمهوری، نبش خیابان اسکندری جنوبی، ساختمان 51، طبقه اول "
                }
              />
              <Content
                icon={<PostalCode />}
                title={"کد پستی :"}
                content={"1768542033"}
              />
            </>
          </IntoCard>
        </div>
        <div className="w-full h-full rounded-2xl border border-border-second  flex flex-col justify-between">
          <AcademyMap />
        </div>
      </CustomPadding>
      <CustomPadding>
        <div className="mt-8 md:mt-12 lg:mt-15">
          <AcademyChatBox/>
        </div>
      </CustomPadding>
    </div>
  );
};

export default SingleAcademy;
