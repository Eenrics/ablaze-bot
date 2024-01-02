import {
  EVEN,
  IsDisplayLive,
  TAILS,
  gameID,
} from "../../../../data/data.source";

function TailsEvenWithGameNumbers() {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex">
        <p
          className={`draw-text text-transparent bg-clip-text pr-1 moire not-italic ${IsDisplayLive.init ? "text-[3vw]" : "text-[5vw]"
            }`}
        >
          DRAW
        </p>
        <p
          className={`bg-white text-transparent bg-clip-text moire not-italic ${IsDisplayLive.init ? "text-[3vw]" : "text-[5vw]"
            }`}
        >
          {gameID.init > 0 ? gameID.init - 1 : gameID.init}
        </p>
      </div>
      <div className="">
        {/* <GameDisplayStat/> */}
        <div
          className={`flex justify-center items-center ${TAILS
              ? "bg-[#ffa640]/100"
              : EVEN
                ? "bg-[#C6D6D6]"
                : "bg-[#a51205e5]"
            }  uppercase rounded-[4px] text-[3.5vw] text-black font-semibold px-2 h-[2.5vh] min-w-[8vh]  py-[1px]`}
        >
          {TAILS ? " TAILS" : EVEN ? "Even" : " "}
        </div>
      </div>
    </div>
  );
}

export default TailsEvenWithGameNumbers;
