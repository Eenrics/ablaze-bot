import {
  minutesDisplay,
  secondsDisplay,
} from "../../../services/timeCounterService";

function GameDisplayStatTimer() {
  return (
    <p className=" bg-gradient-to-b text-[5vw] from-[#FFB700] to-[#B07F00]  text-transparent bg-clip-text moire">
      {minutesDisplay}:{secondsDisplay}
    </p>
  );
}

export default GameDisplayStatTimer;
