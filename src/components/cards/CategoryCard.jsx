import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ image, title, href, border, allQuestion }) => {
  return (
    <Link
      href={href}
      className={`w-full h-[103px] md:h-[206px] ${
        border && "border-b border-border-second"
      } md:border-none flex flex-col group`}
    >
      <div className="w-full h-[95px]  md:h-full flex  flex-row md:flex-col  md:rounded-2xl md:bg-white md:shadow-base group-hover:shadow-2xl transition-all duration-200">
        <div className=" w-[95px] max-w-[95px]  min-h-[95px]  md:h-[150px] md:min-h-[150px]  md:w-full md:min-w-full rounded-lg md:rounded-b-none md:rounded-t-2xl overflow-hidden     flex sm:flex-1   ">
          <Image
            src={image}
            alt={`آیین نامه راهنمایی و رانندگی . دسته بندی ${title}`}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full  h-auto object-fill group-hover:scale-150 transition-all duration-200 "
          />
        </div>
        <div className="flex flex-1 flex-col justify-evenly  md:flex-row md:justify-between md:items-center px-4">
          <h5 className="font-bold text-sm lg:text-base ">{title}</h5>
          <div className=" rounded-full bg-border-main group-hover:bg-secondary-main transition-all duration-200 h-9 min-h-9 max-h-9 min-w-9 max-w-9 w-9 flex items-center justify-center">
            <h5 className="font-bold text-sm  lg:text-base" >{allQuestion}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
