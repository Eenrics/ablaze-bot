import {
  minutesDisplay,
  secondsDisplay,
} from "../../../services/timeCounterService";
import GameDisplayStatTimer from "../GameDisplayRight/GameDisplayStatTimer";
import GameBetClosed from "./GameBetClosed";
import GameStatusTitle from "./GameStatusTitle";

interface GameStatusProps {
  message?: string;
}

function GameStatusBox({ message }: GameStatusProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-100 flex flex-col justify-center items-center ">
        {minutesDisplay.value === "00" && secondsDisplay.value === "00" ? (
          <GameBetClosed message={message} />
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
