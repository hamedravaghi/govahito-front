import Image from "next/image";
import Link from "next/link";

const SeasonCard = ({ image, title, desc,href }) => {
  return (
    <Link href={href} className="group">
      <div className="w-full h-[200px] relative transition-all delay-100 rounded-2xl overflow-hidden shadow-base  group-hover:shadow-hover bg-white">
        <Image
          src={image}
          alt="تقاطع"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto object-fill "
        />
        <div className="absolute bottom-0  right-0 left-0 w-full h-[60px] bg-white  group-hover:h-[120px] transition-all delay-100 z-10 p-2 flex flex-col gap-3">
          <p className="font-bold">{title}</p>
          <div className="group-hover:flex flex-col gap-2 hidden animate-opacity">
            <div dangerouslySetInnerHTML={{ __html: desc }} className="text-center"/>
            <div className="w-full flex  justify-center font-bold ">
              <p>همین حالا مطالعه کنید</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SeasonCard;
