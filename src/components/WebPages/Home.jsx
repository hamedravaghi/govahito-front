import BookSection from "../Home/BookSection";
import QuestionCategorySection from "../Home/QuestionCategorySection";
import TestExamSection from "../Home/TestExamSection";
import GoldExamSection from "../Home/GoldExamSection";
import SimpleQuestion from "../Home/SimpleQuestion";
import Faq from "../Home/Faq";
import HomeSideBar from "../Home/HomeSideBar";

const HomePage = () => {
  return (
    <div className="w-full flex gap-1 items-start relative">
      <HomeSideBar />
      <div className="w-full flex flex-col">
        <h5 className="font-bold text-base md:text-xl lg:text-2xl mb-8 md:mb-12 mt-8 md:mt-10 lg:mt-12">
          گواهیتو برای هر گواهینامه چه خدماتی ارائه میده؟
        </h5>
        <div className="flex flex-col flex-1  gap-10 md:gap-16">
          <BookSection />
          <QuestionCategorySection />
          <TestExamSection />
          <GoldExamSection />
          <SimpleQuestion />
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
