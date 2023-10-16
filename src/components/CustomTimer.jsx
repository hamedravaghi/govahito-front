import Countdown from "react-countdown";

const CustomTimer = ({ time, onComplete, onStart }) => {
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <p className="text-red-800 ">زمان منقضی شد </p>;
    } else {
      return (
        <p className="text-sm">
          {minutes}:{seconds}
        </p>
      );
    }
  };

  return (
    <Countdown
      date={Date.now() + time}
      renderer={renderer}
      onComplete={onComplete}
      onStart={onStart}
    />
  );
};

export default CustomTimer;
