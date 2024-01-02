import React from "react";
import { EVEN, HEAD } from "../../../../data/data.source";

function HeadEven() {
  return (
    <div className="flex justify-end items-center ">
      <div
        className={`flex justify-center items-center ${
          HEAD ? "bg-[#f6f640]/100" : EVEN ? "bg-[#C6D6D6]" : "bg-[#a51205e5]"
        }  uppercase rounded-[4px] text-[3.5vw] text-black font-semibold px-2 h-[2.5vh] min-w-[8vh]  `}
      >
        {HEAD ? "HEADS" : EVEN ? "Even" : " "}
      </div>
    </div>
  );
}

export default HeadEven;
