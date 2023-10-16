"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const RegisterLink = () => {
  const pathname = usePathname();
  const handleSetPrevUrl = () => {
    localStorage.setItem("prevUrl", pathname);
  };
  return (
    <Link
      onClick={handleSetPrevUrl}
      className="  h-10 px-6  flex items-center justify-center gap-2 border-[2px] border-primary-main  rounded-2xl group-hover:text-white group-hover:bg-primary-main transition-all"
      href={"/register"}
      prefetch
    >
      <p className=" text-sm ">ثبت نام</p> <p className=" text-sm ">|</p>{" "}
      <p className=" text-sm ">ورود</p>
    </Link>
  );
};

export default RegisterLink;
