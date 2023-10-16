"use client";
import { useState } from "react";
const FaqCard = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full min-h-[80px] p-4 md:p-8 bg-white rounded-lg sm:rounded-2xl shadow-[0_4px_15px_0_rgba(0,0,0,0.15)] transition-all delay-150">
      <div
        className="w-full flex justify-between cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      >
        <p className="text-text-third lg:text-text-main">{item.question}</p>
        <button className="mr-2 ">
          <svg
            className={`mr-2 w-4 h-4 transition-all delay-150 ${
              show ? "rotate-90" : "-rotate-90"
            }`}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.9999 8.15984L16.9599 21.1998C15.4199 22.7398 15.4199 25.2598 16.9599 26.7998L29.9999 39.8398"
              stroke="#95A5AA"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {show ? (
        <div className="w-full pr-4 pl-4 md:pr-8 md:pl-8">
          <ul className="w-full flex flex-col mt-4 list-disc animate-opacity">
            {item.answer.map((item, index) => (
              <li key={index.toString()}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default FaqCard;
