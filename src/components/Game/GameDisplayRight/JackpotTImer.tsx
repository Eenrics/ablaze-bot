import {
  hoursDisplay,
  minutesDisplay,
  secondsDisplay,
} from "../../../services/timeCounterService";
function JackpotTImer() {
  return (
    <p
      className={`bg-gradient-to-b from-[#ffe600] via-[#e0ce29ff]  to-[#383103ff] text-transparent bg-clip-text text-[10vw] moire not-italic drop-shadow-md`}
    >
      {hoursDisplay}:{minutesDisplay}:{secondsDisplay}
    </p>
  );
}

export default JackpotTImer;
