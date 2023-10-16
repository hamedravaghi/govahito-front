import { BarArr } from "@/src/lib/data/navbarItems";
import MobileSecondBar from "./MobileSecondBar";
import ProfileButton from "./ProfileButton";
import WebItem from "./components/web/WebItem";

import ShoppingButton from "./components/ShoppingButton";
import UserPerchases from "./UserPerchases";

const SecondBar = () => {
  return (
    <nav className="w-full h-16 max-h-[64px] flex  px-4 md:px-8 lg:px-[70px]  items-center flex-1 justify-between bg-white  border-border-main md:border-b-[0.5px] ">
      <div className="flex lg:hidden">
        <MobileSecondBar />
      </div>
      <div className="h-full hidden items-center lg:flex">
        {Array.isArray(BarArr) &&
          BarArr.map((item, index) => (
            <WebItem key={index.toString()} data={item} />
          ))}
      </div>
      <div className="h-full flex gap-4">
        <UserPerchases />
        <ShoppingButton />
        <ProfileButton />
      </div>
    </nav>
  );
};

export default SecondBar;
