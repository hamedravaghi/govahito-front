import CustomPadding from "@/src/components/common/CustomPadding";

const ExamLoading = () => {
  return (
    <CustomPadding>

    <div className="w-full h-[500px] min-h-[500px]  flex flex-col flex-1 items-center justify-center ">
      <p className="font-bold">در حال آماده کردن آزمون ....</p>
    </div>
    </CustomPadding>
  );
};

export default ExamLoading;
