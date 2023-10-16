import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-[280px] md:h-[144px]  flex items-center justify-center">
      <div className=" pb-5 md:pb-0 w-full h-[256px] md:h-full  flex items-center justify-center  bg-secondary-main bg-[url('/images/svg/certificateMobileHeader.svg')] md:bg-[url('/images/svg/certificateWebHeader.svg')]">
        <div className="w-full md:w-[800px] h-full flex flex-col md:flex-row items-center justify-between">
          <Image
            src={"/images/svg/girl-studying-online.svg"}
            className="w-[173px] h-[147px] md:w-[181px] md:h-[144px] -mt-4 md:mt-0 "
            alt="آزمون راهنمایی و رانندگی"
            width="0"
            height="0"
            sizes="100vw"
          />
          <h3 className="font-bold text-lg md:text-2xl">
            آزمون های گواهیتو رو از دست نده !{" "}
          </h3>
          <Link
            href={"/"}
            className="w-[256px] h-[56px] md:w-[190px] md:h-[46px] bg-primary-main rounded-xl text-white flex items-center text-lg justify-center font-extrabold "
          >
            آزمون
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
