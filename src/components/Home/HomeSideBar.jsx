import HomePageSideBarButton from "../buttons/HomePageSideBarButton";
const HomeSideBar = () => {
  return (
    <div
      className={`hidden md:flex w-[147px]  md:w-[185px]   sticky top-16 md:top-28   `}
    >
      <div className="  w-full flex flex-col gap-6 mt-8 md:mt-10 lg:mt-12 ">
        <HomePageSideBarButton text="گواهینامه ها" link="certificate" />
        <HomePageSideBarButton text="کتاب یار" link="book" />
        <HomePageSideBarButton text="سوالات موضوعی" link="question_category" />
        <HomePageSideBarButton text="آزمون آزمایشی" link="exam_test" />
        <HomePageSideBarButton text="آزمون طلایی" link="exam_gold" />
        <HomePageSideBarButton text="کوییز" link="quiz" />
        <HomePageSideBarButton text="سوالات متداول" link="faq" />
      </div>
    </div>
  );
};

export default HomeSideBar;
