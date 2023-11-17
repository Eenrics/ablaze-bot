import { useSignalEffect } from "@preact/signals-react";
import DisplayBallDrawn from "./DisplayBallDrawn";
import DisplayHitWin from "./DisplayHitWin";
import {
  DisplayRightType,
  displayRight,
} from "../../../utils/displayRightSignal";

function GameDisplayStat() {
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
    <div className="py-3 w-full h-full flex flex-col gap-3 ">
      <div className="flex gap-3 justify-end">
        <p className="bg-gradient-to-b from-[#ffe600] via-[#e0ce29ff]  to-[#383103ff] text-transparent bg-clip-text text-[3.4vw] moire not-italic">
          DRAW
        </p>
        <p className="bg-white text-transparent bg-clip-text text-[3.4vw] moire not-italic">
          80210
        </p>
      </div>

      <div className="flex flex-col w-full items-center">
        <p className=" bg-gradient-to-b text-[5vw] from-[#FFB700] to-[#B07F00]  text-transparent bg-clip-text moire">
          00:38
        </p>
      </div>
      {displayRight.value === DisplayRightType.BALLDRAWN ? (
        <DisplayBallDrawn />
      ) : (
        <DisplayHitWin />
      )}
    </div>
  );
}

export default GameDisplayStat;
