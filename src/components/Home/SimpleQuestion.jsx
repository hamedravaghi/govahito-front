"use client";
import Image from "next/image";
import { useState, useContext } from "react";

import { questions } from "@/src/lib/data/questions";
import SectionLayout from "./SectionLayout";
import { ChevronLeft } from "@/src/lib/svg";
import { PageContext } from "@/src/provider/PageProvider";

const Card = ({ questionText, questionImage, answers, hint, trueId }) => {
    const [userSelect, setUserSelect] = useState(null);

    const handleAnswerd = (id) => {
        if (userSelect === null) {
            setUserSelect(id);
        }
    };

    return (
        <div
            className=" 
    w-full h-[640px] md:h-[650px] lg:h-[422px]
     bg-white shadow-base 
     rounded-2xl flex flex-col
      gap-4 md:gap-5
       lg:gap-6 px-4 py-2
        md:px-4 md:py-5
         lg:px-6 lg:py-8 relative transition-opacity
         "
        >
            <div>
                <p className=" lg:font-bold leading-9">{questionText}</p>
            </div>
            <div className="flex flex-1 flex-col-reverse lg:flex-row lg:justify-center">
                <div className="w-full flex-1 lg:h-full lg:w-[63%] flex flex-col justify-evenly ">
                    {answers.map((item) => (
                        <div key={item.id} className="flex gap-2 cursor-pointer" onClick={() => handleAnswerd(item.id)}>
                            <div
                                className={`w-5 min-w-[20px]  sm:w-[28px] md:min-w-[28px] h-5 min-h-[20px]  md:min-h-7 md:h-7 border-2 border-secondary-main rounded-full
                ${userSelect === item.id && item.id !== trueId && "bg-red-500"}
                ${userSelect !== null && item.id === trueId && "bg-secondary-main"}`}
                            />
                            <p className="sm:mt-1">{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="w-full lg:w-[37%] flex items-center justify-center">
                    <Image alt="گواهینامه راهنمایی و رانندگی" width={"0"} height={"0"} sizes="100vw" className="w-full h-auto object-fill rounded-2xl" src={questionImage} />
                </div>
            </div>
            <div
                className={` p-4 bg-white rounded-2xl transition-opacity   ${userSelect ? "visible" : "hidden"}
        
        `}
            >
                <p className="text-text-second">{hint}</p>
            </div>
        </div>
    );
};

const SimpleQuestion = () => {
    const { handleSetFeatureAction } = useContext(PageContext);
    const [number, setNumber] = useState(0);
    const handleNextQuestion = () => {
        if (number < questions.length - 1) {
            setNumber((prev) => prev + 1);
        } else {
            setNumber(0);
        }
    };
    return (
        <SectionLayout id="quiz">
            <div className=" w-full flex flex-col gap-4 md:gap-6 lg:gap-8 md:border border-secondary-main md:p-4 lg:p-0 border-dashed lg:border-none">
                <p className="font-bold">یک کوییز ساده</p>
                {number === 0 ? (
                    <Card questionText={questions[0].questionText} questionImage={questions[0].questionImage} answers={questions[0].answers} hint={questions[0].hint} trueId={questions[0].trueId} />
                ) : null}
                {number === 1 ? (
                    <Card questionText={questions[1].questionText} questionImage={questions[1].questionImage} answers={questions[1].answers} hint={questions[1].hint} trueId={questions[1].trueId} />
                ) : null}
                {number === 2 ? (
                    <Card questionText={questions[2].questionText} questionImage={questions[2].questionImage} answers={questions[2].answers} hint={questions[2].hint} trueId={questions[2].trueId} />
                ) : null}
                <div className="w-full flex gap-16 justify-center md:justify-end">
                    <div
                        className="flex gap-2 cursor-pointer items-center py-1.5 md:py-2.5 px-5 md:px-7 border border-border-main hover:border-border-second transition-all duration-300 ease-in-out rounded-xl md:rounded-2xl"
                        onClick={() => handleSetFeatureAction("categories")}
                    >
                        <p className="text-xs md:text-base whitespace-nowrap">همه سوالات</p>

                        <ChevronLeft color="black" />
                    </div>
                    <div
                        className="flex gap-2 cursor-pointer items-center py-1.5 md:py-2.5 px-5 md:px-7 border border-border-main hover:border-border-second transition-all duration-300 ease-in-out rounded-xl md:rounded-2xl"
                        onClick={handleNextQuestion}
                    >
                        <p className="text-xs md:text-base whitespace-nowrap">سوال بعدی</p>

                        <ChevronLeft color="black" />
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
};

export default SimpleQuestion;
