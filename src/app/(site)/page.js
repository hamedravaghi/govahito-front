import MainBanner from "@/src/components/Home/MainBanner";
import CustomPadding from "@/src/components/common/CustomPadding";
import HomePage from "@/src/components/WebPages/Home";
import { Suspense } from "react";
import PageProvider from "@/src/provider/PageProvider";

export const metadata = {
    title: "صفحه اصلی",
    description: "بهترین مرجع سوالات و آزمون های رایگان آیین نامه راهنمایی و رانندگی ایران ",
};

const Home = () => {
    return (
        <Suspense fallback={<></>}>
            <PageProvider>
                <div className="w-full h-full">
                    <MainBanner />
                    <CustomPadding>
                        <HomePage />
                    </CustomPadding>
                </div>
            </PageProvider>
        </Suspense>
    );
};
export default Home;
