"use client";
import Link from "next/link";
import LogoContainer from "../LogoContainer";
import CustomPadding from "../common/CustomPadding";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import { useSelectedLayoutSegments } from "next/navigation";

const Footer = () => {
  const { isMobile } = useWindowSize();
  const activeSegment = useSelectedLayoutSegments();
  const examPage = activeSegment[2] === "mains" && activeSegment.length === 4;

  if (examPage && isMobile) return null;
  return (
    <div className="w-full py-12 mt-20 bg-text-third" id="footer">
      <CustomPadding>
        <div className="w-full h-full flex flex-col md:flex-row gap-10 items-center md:justify-between">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-10 xl:gap-y-0">
            <section className="w-full flex flex-col gap-5">
              <LogoContainer full={true} />
              <p className="text-xs md:text-sm text-primary-text font-normal">
                تمام حقوق مادی و معنوی این وبسایت متعلق به{" "}
                <Link
                  href="/"
                  className="hover:text-primary-main transition-colors duration-300 ease-in-out"
                >
                  گواهیتو
                </Link>{" "}
                می باشد
              </p>
            </section>
            <section className="w-full flex flex-col gap-5">
              <Link
                href={"/about"}
                className="font-bold text-primary-text text-sm md:text-base"
              >
                درباره گواهیتو
              </Link>
              <p className="text-xs md:text-base leading-1 text-primary-text font-normal">
                تهران ، خیابان خواجه عبدالله انصاری ، کوچه ششم ، پلاک 41 ، واحد
                6
              </p>
            </section>
          </div>
          <section className="flex flex-row md:flex-col xl:flex-row gap-5">
            <div className="w-32 h-36 rounded-2xl bg-secondary-background"></div>
            <div className="w-32 h-36 rounded-2xl bg-secondary-background"></div>
          </section>
        </div>
      </CustomPadding>
    </div>
  );
};

export default Footer;
