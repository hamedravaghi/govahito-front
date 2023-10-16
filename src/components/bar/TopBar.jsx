import { TypeAnimation } from "react-type-animation";
import LogoContainer from "../LogoContainer";
// import UserPerchases from "./UserPerchases";
import AnimatedLink from "../buttons/AnimatedLink/AnimatedLink";

const TopBar = ({ className }) => {
  return (
    <nav
      className={`flex w-full h-16  items-center justify-between px-4 md:px-8 lg:px-[70px] py-1 gap-2 bg-white border-border-main border-b-[0.5px] ${className}`}
    >
      <div className="h-full flex items-center gap-2 ">
        <LogoContainer />
        <div className="hidden md:flex items-center gap-2 h-full ">
          <div className="w-[1px] h-[60%] bg-border-main" />
          <TypeAnimation
            sequence={["تجربهِ شیرینِ گواهینامه گرفتن", 2000, "", 4000]}
            cursor={true}
            style={{ fontWeight: "normal", fontSize: "14px" }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="h-full flex gap-2 ">
        <AnimatedLink text={"خرید آزمون طلایی"} link={"/product"} />
      </div>
    </nav>
  );
};

export default TopBar;
