import CustomPadding from "@/src/components/common/CustomPadding";

const ExamViewLoading = () => {
  return (
    <CustomPadding>

    <div className="w-full h-[500px]  flex flex-col flex-1 items-center justify-center ">
      <p className="font-bold">در حال دریافت سوالات آزمون....</p>
    </div>
    </CustomPadding>
  );
};

export default ExamViewLoading;
