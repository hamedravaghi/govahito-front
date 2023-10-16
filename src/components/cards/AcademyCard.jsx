import { Location, Phone } from "@/src/lib/svg";
import Link from "next/link";

const ContentContainer = ({ icon, content }) => {
  return (
    <div className="w-full flex h-[50%] gap-1">
      <div className="w-5  flex md:pt-1">
        <Location />
      </div>
      <div>
        <p className="text-sm  leading-6 md:leading-7 ">
          تهران، خیابان جمهوری، نبش خیابان اسکندری جنوبی، ساختمان 51، طبقه اول{" "}
        </p>
      </div>
    </div>
  );
};

const PhoneContainer = ({ phoneNumber }) => {
  return (
    <div className="w-full h-[30%] flex items-center gap-1">
      <div className="w-5  flex">
        <Phone />
      </div>
      <p>02133575286</p>
    </div>
  );
};

const AcademyCard = ({ href, className }) => {
  return (
    <div
      className={`max-w-[220px] min-w-[220px] w-[220px] md:w-full  h-[220px] min-h-[220px] md:h-[288px] 
                bg-white rounded-2xl pt-4 md:pt-2 px-4 md:px-2 pb-4 md:pb-2 flex flex-col shadow-base
                  transition-all
                  duration-300 
                  hover:-translate-y-1
                  hover:shadow-hover
                  prevent-select
                ${className}
    `}
    >
      <div className="flex flex-1 flex-col justify-evenly ">
        <h5 className="font-bold">شتاب</h5>
        <ContentContainer />
        <PhoneContainer />
      </div>
      <div className="w-full flex justify-end ">
        <Link
          href={href}
          className="text-xs flex item-center gap-1 text-text-second"
        >
          <p>مشاهده جزییات</p>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75007 11.6189L4.94674 7.81557C4.49757 7.36641 4.49757 6.63141 4.94674 6.18224L8.75007 2.37891"
              stroke="#95A5AA"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default AcademyCard;
