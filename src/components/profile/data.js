import { Edit, ExamResult, Pay } from "@/src/lib/svg";

export const sectionArr = (active) => {
     return [
          {
               id: "1",
               value: "pay",
               text: "سوابق پرداخت",
               icon: <Pay color={active === "pay" ? "white" : "orange"} />,
          },
          {
               id: "2",
               value: "result",
               text: "کارنامه آزمون ها",
               icon: <ExamResult color={active === "result" ? "white" : "orange"} />,
          },
          {
               id: "3",
               value: "edit",
               text: "ویرایش حساب کاربری",
               icon: <Edit color={active === "edit" ? "white" : "orange"} />,
          },
     ];
};