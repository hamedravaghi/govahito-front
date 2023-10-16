import { getAllCertificates } from "@/src/services/endPoints";
import CertificateButton from "../buttons/CertificateButton";
import SectionLayout from "./SectionLayout";

const CertificateSection = async () => {
  let certificateDate = [];
  await getAllCertificates().then((data) => {
    certificateDate = data;
  });
  return (
    <SectionLayout id="certificate" margin={false}>
      <div className="w-full flex flex-col mt-8 md:mt-10 lg:mt-12">
        <h5 className="font-bold text-base md:text-xl lg:text-2xl">
          چه گواهینامه ای میخوای بگیری ؟
        </h5>
        <p className="text-sm md:text-base mt-4 md:mt-6 lg:mt-4 leading-8">
          در حال حاضر گواهیتو دارای چهار گواهینامه : موتور سیکلت ، پایه سه ،
          پایه دو و پایه یک است . دوست خوبم برای دسترسی به مطالب آموزشی و
          آزمونها لطفا اول از همه گواهینامه ای که میخوای بگیری رو انتخاب کن.
        </p>
        <div className="w-full flex justify-center mt-8 lg:mt-10 ">
          <div className="grid grid-flow-row gap-6 md:gap-5 lg:gap-10 grid-cols-2 sm:grid-cols-4  w-full max-w-[840px]">
            {certificateDate.length > 0
              ? certificateDate.map((item) => (
                  <div
                    key={item._id}
                    className="flex w-full items-center justify-center"
                  >
                    <CertificateButton
                      id={item._id}
                      slug={item.slug}
                      name={item.title}
                      alt={item.title}
                      subtitle={item.subtitle}
                      image={item.image}
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default CertificateSection;
