import {
  minutesDisplay,
  secondsDisplay,
} from "../../../services/timeCounterService";

const JackpotDisplay = () => {
  return (
    <div className="jackpot-display">
      <div className="h-8 bg-[#EAAC00] shadow-lg flex items-center text-gray-800 font-bold micro bar-size w-[120%]">
        {minutesDisplay.value === "00" && secondsDisplay.value === "00" ? (
          <span className="text-textSecondary animate-slide-right-to-left  micro  [text-shadow:0px_2px_2px_#000] ">
            PLAY KENO * TRY YOUR LUCK * PLAY KENO
          </span>
        ) : (
          <span className="text-textSecondary animate-slide-right-to-left  micro  [text-shadow:0px_2px_2px_#000] ">
            JACKPOT! * WIN 100,100 ETB * JACKPOT!
          </span>
        )}
      </div>
    </div>
  );
};

export default JackpotDisplay;
