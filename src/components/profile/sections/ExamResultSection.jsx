"use client";
import { NoExam } from "@/src/lib/svg";
import ProfileCard from "../ProfileCard";
import { useContext } from "react";
import { examContext } from "@/src/provider/ExamProvider";
import moment from "moment-jalaali";

const NoExamResult = () => {
  return (
    <ProfileCard>
      <NoExam />
      <p className="font-bold">هنوز تو هیچ آزمونی شرکت نکردی ...</p>
      <div className="w-full flex flex-col items-center gap-4">
        <p className="text-text-second text-sm">
          اول گواهینامه ای که میخوای بگیری رو انتخاب کن تا محتوای آموزشی شو
          ببینی{" "}
        </p>
        <Link
          href={"/checkout"}
          className="px-3 py-2 rounded-2xl bg-primary-main text-white"
        >
          خرید آزمون طلایی
        </Link>
      </div>
    </ProfileCard>
  );
};

const MobileResultRow = ({ text, value }) => {
  return (
    <div className="flex w-full  items-center">
      <p className="w-[120px] text-text-second text-sm">{text}</p>
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary-background">
        <p>{value}</p>
      </div>
    </div>
  );
};

const ExamResultSection = () => {
  const { examResults } = useContext(examContext);

  if (examResults?.length === 0) return <NoExamResult />;
  return (
    <div className=" w-full  h-full">
      <div className="w-full min-h-[416px] md:rounded-2xl md:bg-white flex flex-col gap-8  md:shadow-base  overflow-x-scroll md:overflow-hidden">
        {/* mobile table */}
        <div className="flex flex-1 flex-col md:hidden w-full h-full min-h-full gap-2">
          {Array.isArray(examResults) ? (
            <>
              {examResults.map((item) => (
                <div
                  key={item._id}
                  className="w-full flex flex-col gap-2 h-[220px] p-2 rounded-2xl border bg-white border-border-main"
                >
                  <div className="w-full flex justify-between px-2">
                    <div className="flex flex-col gap-3 items-center">
                      <p className="text-sm  text-text-second">نام گواهینامه</p>
                      <p className="text-sm font-bold">
                        {item?.certificate?.title}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                      <p className="text-sm  text-text-second"> نوع آزمون</p>
                      <p className="text-sm font-bold">{item?.examId?.title}</p>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                      <p className="text-sm  text-text-second">نام آزمون</p>
                      <p className="text-sm font-bold">
                        {item?.examId?.subTitle}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between px-2 border-t border-border-main pt-2">
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-sm  text-text-second">ساعت آزمون</p>
                      <p>{moment(item?.createdAd).format("HH:mm")}</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-sm  text-text-second">تاریخ آزمون</p>
                      <p>{moment(item?.createdAd).format("jYYYY/jM/jD")}</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-1 items-center px-5 border-t border-border-main pt-2">
                    <div className=" flex flex-1 flex-col  gap-1">
                      <MobileResultRow
                        text={"پاسخ های درست"}
                        value={item?.correctAnswerNumber}
                      />
                      <MobileResultRow
                        text={"پاسخ های غلط"}
                        value={item?.inCorrectAnswerNumber}
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                      <div className="p-2 rounded-2xl bg-secondary-background">
                        {item.result === "failed" ? (
                          <p className="text-[#F44336] font-bold">مردود</p>
                        ) : (
                          <p className="text-[#4CAF50] font-bold">قبول</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>

        {/* web table */}
        <div className="w-full h-full p-8 hidden md:flex ">
          <table className=" table-auto md:w-full">
            <thead className=" text-xs font-normal h-9 border-b border-border-main">
              <tr>
                <th>شماره </th>
                <th>نام گواهینامه</th>
                <th>نوع آزمون</th>
                <th>نام آزمون</th>
                <th>تاریخ آزمون</th>
                <th>ساعت آزمون</th>
                <th>پاسخ های درست</th>
                <th>پاسخ های غلط</th>
                <th>نتیجه آزمون</th>
              </tr>
            </thead>
            {Array.isArray(examResults) ? (
              <tbody className="gap-8">
                {examResults.map((item, index) => (
                  <tr className="text-center h-10" key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      {item?.certificate ? item.certificate.title : "---"}
                    </td>
                    <td>{item.examId.title}</td>
                    <td>{item.examId.subTitle}</td>
                    <td>{moment(item.createdAd).format("jYYYY/jM/jD")}</td>
                    <td>{moment(item.createdAd).format("HH:mm")}</td>
                    <td>{item.correctAnswerNumber}</td>
                    <td>{item.inCorrectAnswerNumber}</td>
                    <td className="text-center">
                      {item.result === "failed" ? (
                        <p className="text-[#F44336]">مردود</p>
                      ) : (
                        <p className="text-[#4CAF50]">قبول</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : null}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExamResultSection;
