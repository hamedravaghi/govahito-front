const ButtonController = ({
  scrollId,
  number,
  questionDetail,
  onClick,
  endExam,
  result,
  className
}) => {
  const { isAnswerd, isActive } = questionDetail;

  const { pass } = result;
  return (
    <button
    id={scrollId}
      onClick={onClick}
      className={`
      ${className}
      w-[32px] h-[32px] min-w-[32px] min-h-[32px]
          cursor-pointer
          rounded-lg
          flex items-center justify-center 
          border-[1px] border-border-main
          font-bold
          ${endExam && pass === true && "bg-[#4CAF50] text-white border-none "}
          ${endExam && pass === false && "bg-[#F44336] text-white border-none "}
          ${!endExam && isAnswerd && "bg-primary-main text-white "}
          ${
            endExam &&
            isActive &&
            "animate-bounce  border-primary-main"
          }
          ${
            !endExam &&
            isActive &&
            "  animate-bounce  border-primary-main"
          }
          `}
    >
      <p>{number}</p>
    </button>
  );
};

export default ButtonController;
