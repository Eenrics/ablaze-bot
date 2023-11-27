import { useSignalEffect } from "@preact/signals-react";
import DisplayBallDrawn from "./DisplayBallDrawn";
import DisplayHitWin from "./DisplayHitWin";
import {
  DisplayRightType,
  displayRight,
} from "../../../utils/displayRightSignal";
import { useTranslation } from "react-i18next";
//import GameDisplayStatTimer from "./GameDisplayStatTimer";

function GameDisplayStat() {
  const { t } = useTranslation();
  useSignalEffect(() => {
    const intervalId = setInterval(() => {
      displayRight.value =
        displayRight.value === DisplayRightType.BALLDRAWN
          ? DisplayRightType.HITWIN
          : DisplayRightType.BALLDRAWN;
    }, 3000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="py-3 w-full h-full flex flex-col gap-3  ">
      <div className="flex gap-3 justify-start">
        <p className="bg-gradient-to-b from-[#ffe600] via-[#a89916]  to-[#0c0b00] text-transparent bg-clip-text text-[6vw] moire not-italic">
          {t("global.draw")}
        </p>
        <p className="bg-white text-transparent bg-clip-text text-[6vw] moire not-italic">
          80210
        </p>
      </div>

      {/* <div className="flex flex-col w-full items-center">
        <GameDisplayStatTimer />
      </div> */}
      {displayRight.value === DisplayRightType.BALLDRAWN ? (
        <DisplayBallDrawn />
      ) : (
        <DisplayHitWin />
      )}
    </div>
  );
}

export default GameDisplayStat;
