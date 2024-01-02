import { MINUTE, SECOND, gameID } from "../../../../data/data.source";

function BetTimer() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-100 flex flex-col justify-center items-center ">
        <p className="status-timer ">
          {MINUTE.init?.toString().padStart(2, "0")}:
          {SECOND.init?.toString().padStart(2, "0")}
          {/* {minutesDisplay}:{secondsDisplay} */}
          {/* {minutesDisplay.value === '00' && secondsDisplay.value === '00' ? <GameBetClosed /> : `${minutesDisplay}:${secondsDisplay}`} */}
        </p>
        <div className="flex justify-between items-center ">
          <p className="status-title pr-1">DRAW</p>
          <p className="draw-number">{gameID.init}</p>
        </div>
      </div>
    </div>
  );
}

export default BetTimer;
