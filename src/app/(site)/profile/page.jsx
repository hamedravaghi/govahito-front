"use client";
import { useState } from "react";
import CurrentPage from "@/src/components/common/CurrentPage";
import WebSideBar from "@/src/components/profile/WebSideBar";
import PaySection from "@/src/components/profile/sections/PaySection";
import EditProfileSection from "@/src/components/profile/sections/EditProfileSection";
import ExamResultSection from "@/src/components/profile/sections/ExamResultSection";

const page = () => {
  const [activeSection, setActiveSection] = useState("pay");

  return (
    <CurrentPage>
      <div className="flex flex-1 flex-col md:flex-row w-full h-full justify-between  md:gap-6 ">
        <div className="w-full md:w-[228px] lg:w-[288px] min-w-[228px] h-full  ">
          <WebSideBar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
        <div className="flex flex-1 h-full mb-10">
          {activeSection === "pay" ? <PaySection /> : null}
          {activeSection === "result" ? <ExamResultSection /> : null}
          {activeSection === "edit" ? <EditProfileSection /> : null}
        </div>
      </div>
    </CurrentPage>
  );
};

export default page;
