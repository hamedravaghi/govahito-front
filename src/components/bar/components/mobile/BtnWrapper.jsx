import { ChevronLeft } from "@/src/lib/svg";

const BtnWrapper = ({ title, onClick, open, desc }) => {
  return (
    <div
      className="w-full min-h-[56px]  flex items-center justify-between "
      onClick={onClick}
    >
      <p
        className={`${
          open ? "text-primary-main font-bold" : "text-text-main"
        } transition-all`}
      >
        {title}{" "}
        {open && (
          <span className="mr-2 text-text-second font-normal text-xs md:text-sm">
            {desc && `${"(" + desc + ")"}`}
          </span>
        )}
      </p>

      <div className={`${open ? "-rotate-90" : "rotate-0"} transition-all`}>
        <ChevronLeft color="#95A5AA" />
      </div>
    </div>
  );
};

export default BtnWrapper;
