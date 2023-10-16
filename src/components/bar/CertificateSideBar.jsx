"use client";
import { useEffect, useRef } from "react";
import { getCertificate } from "@/src/lib/data/certificate";

const CertificateSideBar = ({ slug }) => {
  const certificate = getCertificate(slug);

  const iconRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => rotate(), 20000);
    return () => clearInterval(timer);
  }, []);

  const rotate = () => {
    iconRef?.current.classList.add("rotate-animation");
    setTimeout(() => {
      if (iconRef?.current) {
        iconRef?.current.classList.remove("rotate-animation");
      }
    }, 2000);
  };

  return (
    <div className="hidden md:flex  w-[224px] lg:w-[288px] min-h-[570px] flex-col px-4 ">
      {/* certificate name */}
      <div className="w-full flex border-b h-12 md:h-12 lg:h-20 border-border-main pb-2 items-center ">
        <div className="icon-container" ref={iconRef}>
          {certificate?.icon}
        </div>
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

export default CertificateSideBar;

{
  /* <div className="w-full h-[200px] mt-8 rounded-2xl bg-secondary-main flex flex-col p-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-1">
            <p className="text-sm lg:text-base font-bold text-center">
              آزمون های طلایی مشابه آزمون آیین نامه{" "}
            </p>
          </div>
          <div className="flex flex-1">
            <Image
              src={"/images/PeopleWorking.png"}
              width={"0"}
              height={"0"}
              className="w-[90%] h-auto"
              sizes="100vw"
              alt="سوالات آزمون آیین نامه راهنمایی و رانندگی"
            />
          </div>
        </div>
        <div className="w-full flex flex-1 items-end">
          <Link href={"/product"} className={"w-full"}>
            آزمون طلایی
          </Link>
        </div>
      </div> */
}
