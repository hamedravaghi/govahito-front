import FeatureButton from "../buttons/FeatureButton";
import CertificateButton from "../buttons/CertificateButton";
import { getCertificate, getFeatur } from "@/src/lib/data/certificate";
import SectionLayout from "./SectionLayout";

const MainBanner = () => {
  const certificate = getCertificate();
  const feature = getFeatur();
  return (
    <SectionLayout id={"certificate"}>
      <div className="w-full h-[770px] md:h-[530px] lg:h-[530px] relative overflow-hidden bg-[url('/images/banner/mainBanner.svg')] bg-bottom bg-secondary-main md:bg-white bg-cover bg-no-repeat ">
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full z-10 px-4 md:px-0    flex flex-col items-center  gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-6 lg:pt-8">
          <h5 className="font-bold text-[30px] lg:text-[50px] ">گواهیتو</h5>
          <div className="grid grid-flow-row gap-4 md:gap-6 lg:gap-8 grid-cols-2 md:grid-cols-4   w-full max-w-[656px]">
            {certificate.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-center justify-center"
              >
                <CertificateButton
                  slug={item.slug}
                  name={item.title}
                  alt={item.title}
                  subtitle={item.subTitle}
                  image={item.image}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8  w-full max-w-[656px] mt-2 md:mt-0">
            {feature.map((item) => (
              <FeatureButton
                key={item.id}
                feature={item.id}
                free={item.free}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default MainBanner;
