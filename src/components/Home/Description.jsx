import CustomPadding from "../common/CustomPadding";

const Description = ({ isNonMobile, ...otherProps }) => {
  return (
    <CustomPadding {...otherProps} className={"mt-4"}>
      <div className="flex flex-col mt-3 gap-4" mt={3} spacing={4}>
        <h3 className="text-center w-full text-xl md:text-3xl font-bold md:font-extrabold  " >
          گواهیتو بزرگترین مرجع سوالات آزمون راهنمایی و رانندگی
        </h3>
        <p className="text-base md:text-lg">
          در اپلیکیشن گواهیتو چهار گواهینامه موتور سیکلت، گواهینامه پایه سه،
          پایه دو و پایه یک ارائه میشود که برای هر گواهینامه چند نوع آزمون،
          چندین نمونه سوال و کلی نکته برای یادگیری وجود داره؛ در آزمون اصلی
          سوالاتی مشابه سوالات آزمون اصلی آیین نامه وجود داره تا دیگه هیچ سوالی
          برای شما نا آشنا نباشه و همچنین در آزمون طلایی ،سوالات دشوار و پرتکرار
          آزمونهای آیین نامه در سالهای اخیر وجود داره .همچنین در گواهیتو سعی شده
          تا تابلوهای راهنمایی و رانندگی به طور کامل و البته دسته بندی شده ارائه
          بشن تا یادگیری بهتر و سریع تر برای شما وجود داشته باشه. با گواهیتو
          بهترین و شیرین تجربه گرفتن گواهینامه را خواهید داشت
        </p>
      </div>
    </CustomPadding>
  );
};

export default Description;
