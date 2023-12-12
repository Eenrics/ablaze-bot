import {
  minutesDisplay,
  secondsDisplay,
} from "../../../services/timeCounterService";
import GameDisplayStatTimer from "../GameDisplayRight/GameDisplayStatTimer";
import GameBetClosed from "./GameBetClosed";
import GameStatusTitle from "./GameStatusTitle";

function GameStatusBox() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-100 flex flex-col justify-center items-center ">
        {minutesDisplay.value === "00" && secondsDisplay.value === "00" ? (
          <GameBetClosed />
        ) : (
          <>
            <GameDisplayStatTimer />
            <GameStatusTitle />
          </>
        )}
      </div>
    </div>
  );
}

export default GameStatusBox;
