import HomePageSideBarButton from "../buttons/HomePageSideBarButton";
import { Home_Sidebar_Items } from "../../lib/data";

const HomeSideBar = () => {
    return (
        <div className={`hidden md:flex w-[147px]  md:w-[185px]   sticky top-16 md:top-28   `}>
            <div className="  w-full flex flex-col gap-6 mt-8 md:mt-10 lg:mt-12 ">
                {Home_Sidebar_Items.map(({ text, link }, index) => (
                    <HomePageSideBarButton key={index} text={text} link={link} />
                ))}
            </div>
        </div>
    );
};

export default HomeSideBar;
