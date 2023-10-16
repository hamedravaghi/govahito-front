"use client";
import { useScroll } from "@/src/hooks/useScroll";
import { ArrowBottom } from "@/src/lib/svg";
const BarWrapper = ({
  title,
  children,

  onClick,
  openItem,
  handleCloseItem,
}) => {
  const { scrollDirection } = useScroll();

  return (
    <div
      style={{ zIndex: 10001 }}
      className=" h-full flex flex-col  group pointer-events-auto"
    >
      <div
        onClick={onClick}
        className="h-full px-3 flex gap-2  items-center justify-center cursor-pointer group-hover:text-primary-main z-50"
      >
        <p>{title}</p>
        <ArrowBottom width={12} height={12} />
        {/* {border && (
          <div className="min-w-[1px] w-[1px] min-h-[40%]  bg-border-main" />
        )} */}
      </div>
      <div
        style={{ zIndex: 100001 }}
        className={` h-[310px] absolute ${
          scrollDirection === "down" ? "top-16" : "top-32"
        }  left-8 right-8 lg:left-16 lg:right-16 px-1 ${
          title === openItem ? "" : "hidden"
        } transition-all duration-200`}
      >
        <div
          style={{ zIndex: 100000001 }}
          className="w-full h-full rounded-2xl bg-white shadow-base "
        >
          <div className="w-full h-full flex  ">{children}</div>
        </div>
        <div
          style={{ zIndex: -1 }}
          className="w-full h-full fixed top-0 right-0 left-0 bottom-0 "
          onClick={handleCloseItem}
        />
      </div>
    </div>
  );
};

export default BarWrapper;
