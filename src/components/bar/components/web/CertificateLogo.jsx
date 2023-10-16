import { getCertificate } from "@/src/lib/data/certificate";

const CertificateLogo = ({ slug }) => {
  const certificate = getCertificate(slug);

  return (
    <div className="hidden md:flex  w-[224px] lg:w-[288px]  flex-col px-4 h-auto border-b border-border-main">
      {/* certificate name */}
      <div className="w-full flex  h-full  items-center ">
        <div className="icon-container">{certificate?.icon}</div>
        <div className="flex flex-col md:px-1 lg:px-3">
          <h4 className="font-bold md:text-xs lg:text-base whitespace-nowrap ">
            گواهینامه {certificate.title}
          </h4>
          <h5 className="text-text-second">{certificate.subTitle}</h5>
        </div>
      </div>
    </div>
  );
};

export default CertificateLogo;
