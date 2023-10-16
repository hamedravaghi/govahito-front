import { Location, Phone } from "@/src/lib/svg";

const ContentContainer = ({ icon, content }) => {
  return (
    <div className="w-full flex h-[70%] gap-1">
      <div className="w-5 mr-4 flex md:pt-1">
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
      <div className="w-5 mr-4 flex">
        <Phone />
      </div>
      <p>02133575286</p>
    </div>
  );
};

const BestAcademyCard = ({ className, onFocus }) => {
  return (
    <div

     
      style={{ filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))" }}
      className={`w-[252px] min-w-[252px] md:w-[249px] md:min-w-[249px] h-[276px] min-h-[276px] md:h-[348px] md:min-h-[348px]
                 flex items-end justify-center 
                 pb-[10px] py-[6px] md:py-[8px] px-3
                 relative ${className} prevent-select`}
    >
      <div
        className="w-[90px] min-w-[90px] md:w-[110px] md:min-w-[110px]
                 h-[90px] min-h-[90px] md:h-[110px] md:min-h-[110px]
                 rounded-full bg-white absolute top-3 flex items-center justify-center
                 border
                 border-primary-main z-10
                 "
      >
        <p className="font-bold">شتاب</p>
      </div>
      <div className="w-full h-[220px] md:h-[288px] bg-white rounded-2xl pt-[60px] md:pt-[71px] px-4 md:px-2 pb-4 md:pb-2 flex flex-col">
        <div className="flex flex-1 flex-col ">
          <ContentContainer />
          <PhoneContainer />
        </div>
        <div className="w-full flex justify-end md:mt-4 md:pb-1">
          <button className="text-xs flex item-center gap-1 text-text-second">
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestAcademyCard;
