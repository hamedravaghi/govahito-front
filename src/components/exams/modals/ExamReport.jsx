import React from "react";
import Modal from "../../Modal";
import { Happy, Sad } from "@/src/lib/svg";

const ExamReport = ({ testResult, onClose, show, exitToExamsList }) => {
  return (
    <Modal onClose={onClose} show={show}>
      <div className="w-[328px] min-w-[328px] min-h-[352px] bg-background rounded-2xl shadow-base flex flex-col items-center pt-10 pb-14 bg-white">
        {testResult?.pass ? <Happy /> : <Sad />}
        <p className="w-full text-center mt-6 ">{testResult?.pass?"آفرین قبول شدی":"متاسفم ، مردود شدی !"}</p>
        <div className="w-[220px] h-[160px] shadow-base mt-6 rounded-2xl py-6 px-[36px] flex flex-col justify-between">
          <div className="w-full flex items justify-between">
            <p>تعداد کل سوالات :</p>
            <p>{testResult?.allQuestions}</p>
          </div>
          <div className="w-full flex items justify-between">
            <p>پاسخ های درست : </p>
            <p>{testResult?.trueAnswerd}</p>
          </div>
          <div className="w-full flex items justify-between">
            <p>پاسخ های غلط :</p>
            <p>{testResult?.falseAnswerd}</p>
          </div>
          <div className="w-full flex items justify-between">
            <p>پاسخ داده نشده :</p>
            <p>{testResult?.notAnswerd}</p>
          </div>
        </div>
        <div className="w-full mt-12 flex px-8 justify-between">
          <button
            className="w-[120px] h-12 rounded-2xl bg-primary-main text-sm text-white font-bold shrink-0 "
            onClick={onClose}
          >
            نمایش پاسخنامه
          </button>
          <button
            className="w-[120px] h-12 rounded-2xl text-sm font-bold shrink-0 border border-border-main "
            onClick={exitToExamsList}
          >
            لیست آزمون ها
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ExamReport;
