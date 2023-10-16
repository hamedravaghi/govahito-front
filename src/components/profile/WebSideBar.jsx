"use client";
import { useContext, useState } from "react";
import { authContext } from "@/src/provider/AuthProvider";
import ProfileButton from "./ProfileButton";
import { sectionArr } from "./data";
import { Exit } from "@/src/lib/svg";
import Modal from "../Modal";

const WebSideBar = ({ activeSection, setActiveSection }) => {
  const { user, handleRemoveTokenAndUser } = useContext(authContext);
  const [exitModal, setExitModal] = useState(false);

  return (
    <>
      <Modal show={exitModal} onClose={() => setExitModal(false)}>
        <div className="w-[328px] h-[200px] bg-white rounded-2xl shadow-base flex items-center justify-center ">
          <div className="w-[264px] h-[120px] flex flex-col justify-between items-center">
            <p className="font-bold">آیا از حساب کاربری خارج می شوید ؟</p>
            <div className="w-full flex gap-6 justify-between">
              <button
                className="w-1/2 h-10 rounded-2xl bg-primary-main flex items-center justify-center text-white"
                onClick={handleRemoveTokenAndUser}
              >
                بله
              </button>
              <button
                onClick={() => setExitModal(false)}
                className="w-1/2 h-10 rounded-2xl border-[1px] border-border-main flex items-center justify-center "
              >
                خیر
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="w-full flex flex-col pb-6 border-b border-border-main md:border-none bg-white md:shadow-base md:rounded-2xl">
        <div className="w-full  md:p-4 ">
          <div className="w-full h-24 rounded-2xl bg-secondary-main flex items-center justify-center ">
            <p className="font-bold">
              {user?.firstName} {user?.lastName}
            </p>
          </div>
        </div>
        <div className="w-full h-12 md:h-auto mt-8 flex overflow-x-scroll md:overflow-hidden md:flex-col gap-2 md:gap-6 no-scrollbar">
          {Array.isArray(sectionArr())
            ? sectionArr(activeSection).map((section) => (
                <ProfileButton
                  key={section.id}
                  text={section.text}
                  icon={section.icon}
                  active={activeSection === section.value}
                  handler={() => setActiveSection(section.value)}
                />
              ))
            : null}
          <div > 
            <ProfileButton
              text={"خروج از حساب کاربری"}
              icon={<Exit />}
              handler={() => setExitModal(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebSideBar;
