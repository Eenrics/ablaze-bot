import {
  minutesDisplay,
  secondsDisplay,
} from "../../../services/timeCounterService";
//import GameBetClosed from "../GameDisplayLeft/GameBetClosed";

function GameDisplayStatTimer() {
  return (
    <p className="bg-gradient-to-b text-[10vw] from-[#FFB700] to-[#B07F00] text-transparent bg-clip-text micro">
      {minutesDisplay}:{secondsDisplay}
      {/* {minutesDisplay.value === '00' && secondsDisplay.value === '00' ? <GameBetClosed /> : `${minutesDisplay}:${secondsDisplay}`} */}
    </p>
  );
}

export default GameDisplayStatTimer;
