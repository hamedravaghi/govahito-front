import CustomPadding from "@/src/components/common/CustomPadding";
import { getCertificateFeature } from "@/src/lib/data/certificate";
import { getSingleCertificate } from "@/src/services/endPoints";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const certificate = await getSingleCertificate(params.slug);
  return {
    generator: "گواهیتو",
    title: certificate.title,
    description: `گواهینامه ${certificate.name}`,
    applicationName: "گواهیتو",
    keywords: [
      certificate.title,
      certificate.subtitle,
      "گواهینامه",
      "سوالات آزمون آیین نامه",
      "آیین نامه",
    ],
    referrer: "origin-when-cross-origin",
  };
}

const page = async ({ params }) => {
  let content;
  await getSingleCertificate(params.slug).then((data) => {
    content = data;
  });

  const features = getCertificateFeature(params.slug);

  return (
    <div className="w-full">
      <div className="w-full h-20 md:h-36 bg-secondary-main flex flex-col items-center justify-center bg-[url('/images/certificateMobilePattern.svg')] md:bg-[url('/images/newPattern.png')] bg-[center] gap-2 ">
        <h4 className="text-base font-bold md:text-2xl">
          گواهینامه {content?.title}
        </h4>
        <p className="text-base md:text-lg"> {content?.subtitle}</p>
      </div>
      <CustomPadding className={"pb-10 pt-6 md:pt-8"}>
        <div className="w-full flex items-center justify-center">
          <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:max-w-[656px] ">
            {features.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="w-full h-[68px] bg-white rounded-2xl shadow-base relative hover:-translate-y-1 hover:shadow-[0_12px_30px_0_rgba(0,0,0,0.15)] transition-all"
              >
                {item.free && (
                  <div className="absolute left-0 top-0 -translate-y-1/3 md:-translate-y-1/2 bg-primary-main rounded-[7px] w-[70px] h-6 flex items-center justify-center text-white font-bold text-xs">
                    رایگان
                  </div>
                )}
                <div className="w-full h-full flex items-center px-2 lg:px-4 gap-2">
                  {item.icon}{" "}
                  <h5 className="text-base font-bold">{item.title}</h5>{" "}
                  <p className="text-xs text-text-second">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {content?.desc ? (
          <div className="w-full rounded-2xl shadow-base bg-white py-4 md:py-6 px-2 md:px-6 mt-8 ">
            <div dangerouslySetInnerHTML={{ __html: content.desc }} />
          </div>
        ) : null}
      </CustomPadding>
    </div>
  );
};

export default page;
