import Image from "next/image";

const SignCard = ({ image, title }) => {
  return (
    <div className="w-full h-[170px] md:h-[202px]  rounded-xl shadow-base flex flex-col justify-between px-2">
      <div className="w-full flex flex-1 items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={"0"}
          height={"0"}
          sizes="100vw"
          className="h-[100px] md:h-[120px] w-auto object-contain"
        />
      </div>
      <div className="w-full h-12 md:h-16 border-t py-1 ">
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};

export default SignCard;
