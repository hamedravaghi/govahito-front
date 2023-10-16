"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { examContext } from "@/src/provider/ExamProvider";
import { authContext } from "@/src/provider/AuthProvider";
import RegisterLink from "../buttons/RegisterLink";
import { Lock } from "@/src/lib/svg";

const ExamCard = ({
  type,
  productId,
  subTitle,
  id,
  link,
  questionViewLink,
}) => {
  const { getResultById, examResults } = useContext(examContext);
  const { purchases } = useContext(authContext);

  const [correct, setCorrect] = useState(0);
  const [notCorrect, setNotCorrect] = useState(0);
  const [notAnswer, setNotAnswer] = useState(30);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (examResults) {
      const examResult = getResultById(id, examResults);

      if (examResult) {
        setCorrect(examResult.correctAnswerNumber);
        setNotCorrect(examResult.inCorrectAnswerNumber);
        const allAnswer =
          Number(examResult.correctAnswerNumber) +
          Number(examResult.inCorrectAnswerNumber);
        setNotAnswer(30 - allAnswer);
      }
    }
  }, [examResults, id]);

  useEffect(() => {
    if (type === "gold") {
      const userPurchases = purchases;

      const isBought = userPurchases.find(
        (item) => item._id.toString() === productId.toString()
      );
      if (isBought) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    } else {
      setOpen(true);
      
    }
  }, [type, purchases]);

  return (
    <div
      className={`w-full h-[100px] md:h-[134px]
       rounded-2xl
       ${open && "shadow-base"}
       bg-white
        flex
        px-2 lg:px-4
        py-3
       relative`}
    >
      {!open && (
        <div className="absolute top-0 right-0 left-0 bottom-0 h-full w-full bg-border-second rounded-2xl bg-opacity-30 p-3 flex justify-end">
          <div className="w-9 h-9 rounded-2xl bg-white opacity-100 shadow-base flex items-center justify-center">
            <Lock />
          </div>
        </div>
      )}

      {/* mobile view */}
      <div className="w-full h-full flex md:hidden  gap-8">
        <div className=" w-[156px] md:w-full h-full md:h-auto  flex-col gap-3 justify-between ">
          <p className="font-bold text-text-third">{subTitle}</p>
          <div className="w-full flex justify-between flex-1 ">
            <div className="h-full flex flex-col items-center justify-between  ">
              <p className="text-xs text-text-second">درست </p>
              <p className="text-xs text-text-second">{correct}</p>
            </div>
            <div className="h-full flex flex-col items-center justify-between  ">
              <p className="text-xs text-text-second">غلط </p>
              <p className="text-xs text-text-second">{notCorrect}</p>
            </div>
            <div className="h-full flex flex-col items-center justify-between  ">
              <p className="text-xs text-text-second">بی پاسخ </p>
              <p className="text-xs text-text-second">{notAnswer}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 h-full  flex-col justify-between">
          <Link
            href={open ? link : "/product"}
            className="w-full h-8 bg-secondary-second rounded-[8px] flex items-center justify-center text-xs"
          >
            شرکت در آزمون
          </Link>
          <Link
            href={open ? questionViewLink : "/product"}
            className="w-full h-8 border border-border-main rounded-[8px] flex items-center justify-center text-xs"
          >
            مشاهده سوالات
          </Link>
        </div>
      </div>
      {/* web view */}
      <div className="hidden w-full h-full md:flex flex-col justify-between">
        <div className="w-full">
          <p className="font-bold text-text-third">{subTitle}</p>
        </div>
        <div className="w-full flex justify-between ">
          <div className="h-full flex flex-col items-center justify-between  ">
            <p className="text-xs text-text-second">درست </p>
            <p className="text-xs text-text-second">{correct}</p>
          </div>
          <div className="h-full flex flex-col items-center justify-between  ">
            <p className="text-xs text-text-second">غلط </p>
            <p className="text-xs text-text-second">{notCorrect}</p>
          </div>
          <div className="h-full flex flex-col items-center justify-between  ">
            <p className="text-xs text-text-second">بی پاسخ </p>
            <p className="text-xs text-text-second">{notAnswer}</p>
          </div>
        </div>
        <div className="flex w-full  justify-between gap-2 lg:gap-4">
          <Link
            href={link}
            className="w-full h-8 bg-secondary-second rounded-[8px] flex items-center justify-center text-xs"
          >
            شرکت در آزمون
          </Link>
          <Link
            href={questionViewLink}
            className="w-full h-8 border border-border-main rounded-[8px] flex items-center justify-center text-xs"
          >
            مشاهده سوالات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
