import {
  minutesDisplay,
  secondsDisplay,
} from "../../../services/timeCounterService";
//import GameBetClosed from "../GameDisplayLeft/GameBetClosed";

function GameDisplayStatTimer() {
  return (
    <p className="status-timer ">
      {minutesDisplay}:{secondsDisplay}
      {/* {minutesDisplay.value === '00' && secondsDisplay.value === '00' ? <GameBetClosed /> : `${minutesDisplay}:${secondsDisplay}`} */}
    </p>
  );
}

export default GameDisplayStatTimer;
