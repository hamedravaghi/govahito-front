import Image from "next/image";

const SingleService = ({ number, text, imagePath }) => {
    return (
        <div className="flex flex-col items-center gap-y-2 xl:gap-y-2.5">
            <Image src={imagePath} width={"0"} height={"0"} sizes="100vw" className="w-[70px] md:w-[75px] lg:w-[80px] xl:w-[85px] h-20 xl:h-24" title={text} alt="" />
            <span className="md:text-2xl font-bold text-text-third">{number}+</span>
            <p className="text-center text-xs sm:text-base xl:text-lg text-text-second">{text}</p>
        </div>
    );
};

export default SingleService;
