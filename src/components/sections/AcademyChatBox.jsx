"use client";
import { useState } from "react";
import Button from "../Button";

const AcademyChatBox = () => {
  const [content, setCotnent] = useState("");
  return (
    <div className="w-full min-h-[200px] p-4 lg:p-8 rounded-2xl border border-primary-main justify-between flex flex-col gap-2 bg-white">
      <input
        placeholder="اگه سوالی دیگه ای داری اینجا بپرس ..."
        className={`w-full flex flex-1 h-full max-h-[150px]  p-3 text-sm focus:outline-none`}
      />
      <div className="w-full flex justify-end">
        <Button text="ارسال"/>
      </div>
    </div>
  );
};

export default AcademyChatBox;
