"use client";
import { useContext, useEffect, useState } from "react";

import CustomPadding from "@/src/components/common/CustomPadding";
import ClientExam from "@/src/components/exams/ClientExam";
import { getSingleGoldExam } from "@/src/services/endPoints";
import { authContext } from "@/src/provider/AuthProvider";
import { toast } from "react-toastify";
import Loader from "@/src/components/Loader";
import SimpleQuestionCard from "../cards/SimpleQuestionCard";
import CertificateName from "../bar/components/CertificateName";

const GoldClientExam = ({ certificateSlug, examSlug }) => {
  const { user } = useContext(authContext);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [exam, setExam] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setLoading(true);
      handleGetExam(user.userId, examSlug);
    } else {
      setLoading(false);
      setMessage("لطفا وارد سایت شوید");
    }
  }, [user, examSlug]);

  const handleGetExam = async (userId, intoExamSlug) => {
    await getSingleGoldExam(userId, intoExamSlug).then((result) => {
      if (result.exam) {
        setExam(result.exam);
        setMessage("");
        setOpen(true);
        setLoading(false);
      } else {
        if (result.message) {
          setMessage(result.message);
          setOpen(false);
          setLoading(false);
          toast.error(result.message);
        } else {
          setMessage("خطا در دریافت اطلاعات");
          setOpen(false);
          setLoading(false);
        }
      }
    });
  };

  if (loading)
    return (
      <div className="w-full h-full min-h-full mt-5   flex items-center justify-center flex-col">
        <div className="w-full max-w-[300px] min-h-[300px] flex flex-col justify-center items-center gap-3 bg-white rounded-2xl shadow-base border">
          <p className="font-bold text-center">
            در انتظار دریافت اطلاعات آزمون ...
          </p>
          <Loader />
        </div>
      </div>
    );

  if (message)
    return (
      <div className="w-full flex flex-col gap-2 mt-5">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl "
          role="alert"
        >
          <strong className="font-bold">{message}</strong>
        </div>
      </div>
    );

  return (
    <>
      {open && (
        <div className="w-full flex flex-col gap-3 mt-5">
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-1 items-center pt-2">
            <CertificateName border={false} slug={certificateSlug} />
          </div>
          <div>
            <h3 >{exam.title}</h3>
            <h4 className=" text-text-second">{exam.subTitle}</h4>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4  ">
          {Array.isArray(exam?.questions) > 0 ? (
            exam.questions.map((item, index) => (
              <SimpleQuestionCard
              
                key={item._id}
                questionText={item.questionText}
                questionImage={item.questionImage}
                type={item.answerType}
                answers={item.answers}
                trueAnswer={item.trueAnswer}
                number={index + 1}
                hint={item.hint}
              />
            ))
          ) : (
            <div>اطلاعات در حال لود شدن است</div>
          )}
        </div>
      </div>
      )}
    </>
  );
};

export default GoldClientExam;
