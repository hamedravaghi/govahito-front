"use client";
import Link from "next/link";
import LogoContainer from "../LogoContainer";
import CustomDivider from "../common/CustomDivider";
import CustomPadding from "../common/CustomPadding";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import { useSelectedLayoutSegments } from "next/navigation";

const Footer = () => {
  const { isMobile } = useWindowSize();
  const activeSegment = useSelectedLayoutSegments();
  const examPage = activeSegment[2] === "mains" && activeSegment.length === 4;

  if (examPage && isMobile) return null;
  return (
    <CustomPadding className="absolute bottom-0  ">
      <div className="w-full h-[361px] md:h-[258px] " id="footer">
        <CustomDivider />
        <div className="flex flex-col md:flex-row  md:justify-between  gap-5 mt-4 md:mt-10">
          <section className="w-full">
            <LogoContainer full={true}/>
          </section>
          <section className="w-full">
            <Link href={"/about"} className="font-bold">
              درباره گواهیتو
            </Link>
          </section>
          <section className="w-full flex flex-col gap-4">
            <div className="flex gap-2 ">
              <div className="w-20 h-20 flex items-center ">
                <a
                  referrerPolicy="origin"
                  target="_blank"
                  href="https://trustseal.enamad.ir/?id=376217&amp;Code=fksV3OKc7FOEYQSnaPzu"
                >
                  <img
                    referrerPolicy="origin"
                    src="https://Trustseal.eNamad.ir/logo.aspx?id=376217&amp;Code=fksV3OKc7FOEYQSnaPzu"
                    alt="اینماد"
                    style={{
                      cursor: "pointer",
                    }}
                    id="fksV3OKc7FOEYQSnaPzu"
                  />
                </a>
              </div>
            </div>
            {/* <p className="font-bold">شبکه های اجتماعی</p>
              <div className="flex gap-2">
                <button className="w-12 h-12 rounded-xl border border-border-second flex items-center justify-center">
                  <Instagram />
                </button>
                <button className="w-12 h-12 rounded-xl border border-border-second flex items-center justify-center">
                  <Linkdin />
                </button>
              </div> */}
          </section>
          <section className="w-full flex flex-col gap-4">
            <p className="font-bold">با گواهیتو در تماس باشید</p>
            <p>
              تهران - خیابان خواجه عبدالله انصاری - کوچه ششم - پلاک 41 - واحد 6
            </p>
          </section>
         
        </div>
      </div>
    </CustomPadding>
  );
};

export default Footer;
