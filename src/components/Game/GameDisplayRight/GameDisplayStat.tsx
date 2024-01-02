import DisplayBallDrawn from "./DisplayBallDrawn";
import DisplayHitWin from "./DisplayHitWin";
import {
  DisplayRightType,
  displayRight,
} from "../../../utils/displayRightSignal";
import Jackpot from "../../Jackpot";

function GameDisplayStat() {
  return (
    <div className="py-3 w-full h-full flex flex-col gap-3  ">
      {displayRight.value === DisplayRightType.BALLDRAWN ? (
        <Jackpot />
      ) : (
        <>
          <DisplayBallDrawn />
          <DisplayHitWin />
        </>
      )}
    </div>
  );
}

export default GameDisplayStat;
