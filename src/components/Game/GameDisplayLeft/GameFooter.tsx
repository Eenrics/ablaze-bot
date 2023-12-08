// import GameDisplayStat from "../GameDisplayRight/GameDisplayStat";

import { useTranslation } from "react-i18next";
import { equal, tails } from "../../../services/gameService";
import { DisplayType, display } from "../../../utils/displayGameSignal";

function GameFooter() {
  const { t } = useTranslation();
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex">
        <p
          className={`bg-gradient-to-b from-[#ffe600] via-[#a89916]  to-[#0c0b00] text-transparent bg-clip-text moire not-italic ${
            display.value === DisplayType.LIVE ? "text-[3vw]" : "text-[5vw]"
          }`}
        >
          {t("global.draw")}
        </p>
        <p
          className={`bg-white text-transparent bg-clip-text moire not-italic ${
            display.value === DisplayType.LIVE ? "text-[3vw]" : "text-[5vw]"
          }`}
        >
          80210
        </p>
      </div>
      <div className="py-[1px]">
        {/* <GameDisplayStat/> */}
        <div
          className={`flex justify-center items-center ${
            tails.value
              ? "bg-[#ffa640]/100"
              : equal.value
              ? "bg-[#C6D6D6]"
              : "bg-[#a51205e5]"
          }  uppercase rounded-[4px] text-[3.5vw] text-black font-semibold px-2 h-[2.5vh] min-w-[8vh]  py-[1px]`}
        >
          {tails.value ? " TAILS" : equal.value ? "Equal" : " "}
        </div>
      </div>
    </div>
  );
}

export default GameFooter;
