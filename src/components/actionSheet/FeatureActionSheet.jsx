import { useContext } from "react";
import { PageContext } from "@/src/provider/PageProvider";

import { getCertificate, getFeatur } from "@/src/lib/data/certificate";
import Link from "next/link";

const FeatureActionSheet = () => {
  const { featureAction, handleCloseFeatureAction } = useContext(PageContext);
  const certificate = getCertificate();

  const exportUrl = (certificateSlug, featureAction) => {
    return `/certificate/${certificateSlug}/${featureAction}`;
  };

  const feature = getFeatur(featureAction);

  return (
    <div
      className={`fixed  right-0 left-0 bottom-0 bg-black bg-opacity-70 z-50  inset-0 no-scrollbar overflow-x-hidden overflow-y-scroll ${
        featureAction === null ? "h-0 max-h-0" : "h-full min-h-full"
      }`}
    >
      <div className="w-full h-full relative flex items-end justify-center ">
        <div
          className={`w-full flex flex-col  relative max-w-[500px] px-4 md:px-[70px] py-8 gap-8 bg-white rounded-t-2xl transition-all duration-500  ${
            featureAction !== null ? "h-[550px]" : "h-0 max-h-0"
          }`}
        >
          <div className="w-full h-12 flex relative ">
            <button
              onClick={handleCloseFeatureAction}
              className="absolute right-0 top-0 h-full w-10 flex items-center justify-center "
            >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
<path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#ECEEF4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.16992 14.8319L14.8299 9.17188" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.8299 14.8319L9.16992 9.17188" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <p className="font-bold text-text-main">{feature.title}</p>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <p className=" text-text-third">
              لطفا ابتدا گواهینامه خود را انتخاب کنید
            </p>
          </div>
          <div className="w-full flex flex-1 flex-col gap-4  ">
            {certificate.map((item, index) => (
              <Link
                onClick={handleCloseFeatureAction}
                href={exportUrl(item.slug, featureAction)}
                className="w-full h-14 rounded-2xl border flex items-center gap-3 px-2 py-2"
                key={index.toString()}
              >
                {item.icon} <div className="h-full w-[1px] bg-border-main" />{" "}
                <p className="font-bold text-text-third">{item.title}</p>{" "}
                {item.subTitle && (
                  <p className="text-text-second font-bold text-sm">
                    {"(" + item.subTitle + ")"}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureActionSheet;
