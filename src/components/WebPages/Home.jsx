import { BookSection, QuestionCategorySection, TestExamSection, GoldExamSection, ServicesSection, SimpleQuestion, Faq, HomeSideBar } from "../Home";
import { SendCommentForm } from "../common/comments";

const HomePage = () => {
    return (
        <div className="w-full flex gap-1 items-start relative ">
            <HomeSideBar />
            <div className="w-full flex flex-col ">
                <h5 className="font-bold text-base md:text-xl lg:text-2xl mb-8 md:mb-12 mt-8 md:mt-10 lg:mt-12">گواهیتو برای هر گواهینامه چه خدماتی ارائه میده؟</h5>
                <div className="flex flex-col flex-1  gap-10 md:gap-20">
                    <BookSection />
                    <QuestionCategorySection />
                    <TestExamSection />
                    <GoldExamSection />
                    <ServicesSection />
                    <SimpleQuestion />
                    <Faq />
                    <SendCommentForm />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
