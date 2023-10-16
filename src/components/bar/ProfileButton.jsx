"use client";
import { Exit, Profile } from "@/src/lib/svg";
import { authContext } from "@/src/provider/AuthProvider";
import { useContext, useState } from "react";
import Loader from "../Loader";
import Link from "next/link";
import Modal from "../Modal";
import { usePathname } from "next/navigation";

const ProfileButton = () => {
  const pathname = usePathname();
  const { status, handleRemoveTokenAndUser, user } = useContext(authContext);
  const [exitModal, setExitModal] = useState(false);
  const handleSetPrevUrl = () => {
    localStorage.setItem("prevUrl", pathname);
  };

  if (pathname === "/profile" || pathname === "/register") return null;
  return (
    <>
      <div className="flex md:hidden h-full w-6 items-center justify-center">
        {status === "loading" && <Loader size="sm" />}
        {status === "authenticated" && (
          <Link href="/profile">
            <Profile />
          </Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/register" onClick={handleSetPrevUrl}>
            <Profile />
          </Link>
        )}
      </div>
      <div className="hidden md:flex">
        <Modal show={exitModal} onClose={() => setExitModal(false)}>
          <div className="w-[328px] h-[200px] bg-white rounded-2xl shadow-base flex items-center justify-center ">
            <div className="w-[264px] h-[120px] flex flex-col justify-between items-center">
              <p className="font-bold">آیا از حساب کاربری خارج می شوید ؟</p>
              <div className="w-full flex gap-6 justify-between">
                <button
                  className="w-1/2 h-10 rounded-2xl bg-primary-main flex items-center justify-center text-white"
                  onClick={() => {
                    handleRemoveTokenAndUser();
                    setExitModal(false);
                  }}
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
        <div
          className="w-[120px] min-h-[64px]
      hover:h-auto relative cursor-pointer group"
        >
          <div
            className="w-full h-[64px] hover:h-auto overflow-y-hidden
        hover:overflow-y-visible
    
      absolute top-0 right-0 left-0"
          >
            <div className="w-full h-[64px]  flex items-center justify-center ">
              <div className="w-full h-10 flex items-center justify-center  px-2 border-[2px] border-primary-main  rounded-2xl group-hover:text-white group-hover:bg-primary-main transition-all">
                {status === "loading" && <Loader size="sm" />}
                {status === "authenticated" && (
                  <p className=" truncate ">
                    {user?.firstName} {user?.lastName}
                  </p>
                )}
                {status === "unauthenticated" && (
                  <Link
                    onClick={handleSetPrevUrl}
                    className="w-full  h-10  flex items-center justify-center gap-2"
                    href={"/register"}
                    prefetch
                  >
                    <p className=" text-sm ">ثبت نام</p>{" "}
                    <p className=" text-sm ">|</p>{" "}
                    <p className=" text-sm ">ورود</p>
                  </Link>
                )}
              </div>
            </div>
            {status === "authenticated" && (
              <div className="w-full bg-white pb-2 mt-1  rounded-2xl shadow-base">
                <div className="w-full h-[64px]  flex items-center justify-center px-2">
                  <Link
                    href={"/profile"}
                    prefetch
                    className="w-full h-10 flex items-center gap-1 px-2 hover:bg-secondary-main rounded-2xl"
                  >
                    <Profile />
                    <p className=" truncate ">پروفایل</p>
                  </Link>
                </div>
                <div className="w-full h-[64px]  flex items-center justify-center px-2">
                  <button
                    onClick={() => setExitModal(true)}
                    className="w-full h-10 flex items-center gap-1 px-2 hover:bg-secondary-main rounded-2xl"
                  >
                    <Exit />
                    <p className=" truncate ">خروج </p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileButton;
