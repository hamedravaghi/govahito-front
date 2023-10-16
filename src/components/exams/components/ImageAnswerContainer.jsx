import Image from "next/image";

const ImageAnswerContainer = ({
  image,
  canAnswer,
  choosed,
  onClick,
  showCorrectAnswer,
  isTrue,
}) => {
  return (
      <button
        disabled={!canAnswer}
        onClick={onClick}
        className="w-full h-[152px] md:h-[206px] flex flex-col gap-2 items-center"
      >
          <div className="w-full">

        <div
          className={`w-[24px] h-[24px] min-h-[24px] min-w-[24px] rounded-full border-[2px] border-secondary-main ${
               !showCorrectAnswer && choosed && "bg-primary-main"
          }
          ${showCorrectAnswer && choosed && !isTrue && "bg-[#F44336]"}
          ${showCorrectAnswer && isTrue && "bg-[#4CAF50]"}
          
          `}
          />
          </div>
          <div className="w-[120px] h-[120px] min-w-[120px] min-h-[120px] md:h-[182px] md:w-[170px] md:min-w-[140px] md:min-h-[140px]  flex-1 flex items-center justify-center">
            <Image
              src={image}
              alt="سوالات آزمون آیین نامه راهنمایی و رانندگی"
              width="0"
              height="0"
              sizes="100vw"
              className="max-h-[80%] h-auto w-auto object-contain"
              priority={true}
            />
          </div>
      </button>
  );
};

export default ImageAnswerContainer;

