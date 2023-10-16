"use client";
import { useRef, useEffect } from "react";
import { getCertificate } from "@/src/lib/data/certificate";

const CertificateName = ({ slug, border = true }) => {
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
    <div className={`w-full flex ${border?"border-b border-border-main":""}  h-12 md:h-12 lg:h-20  pb-2 items-center `}>
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
  );
};

export default CertificateName;
