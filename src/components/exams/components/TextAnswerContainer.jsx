const TextAnswerContainer = ({
  text,
  canAnswer,
  choosed,
  onClick,
  showCorrectAnswer,
  isTrue,
}) => {
  return (
    <button
      disabled={!canAnswer}
      className="w-full flex gap-1 cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`w-[24px] h-[24px] min-h-[24px] min-w-[24px] rounded-full border-[2px] border-secondary-main ${
         !showCorrectAnswer&& choosed && "bg-primary-main"
        }
        ${showCorrectAnswer && choosed && !isTrue && "bg-[#F44336]"}
        ${showCorrectAnswer && isTrue && "bg-[#4CAF50]"}
    
            `}
      />
      <p className="text-sm md:text-base mt-[1px] w-full text-right">{text}</p>
    </button>
  );
};

export default TextAnswerContainer;
