import Footer from "@/src/components/bar/Footer";
import MainSideBar from "@/src/components/bar/MainSideBar";
import SiteNavbar from "@/src/components/bar/SiteNavbar";
import ToastWrapper from "@/src/components/wrapper/ToastWrapper";

const MainLayout = ({ children }) => {
    return (
        <div className="w-full min-h-screen min-w-screen flex flex-grow flex-col relative ">
  

                <SiteNavbar />
                <MainSideBar />
                <ToastWrapper />
                <div className="flex flex-1 flex-col w-full overflow-x-hidden">{children}</div>
                <Footer />
        </div>
    );
};

export default MainLayout;
