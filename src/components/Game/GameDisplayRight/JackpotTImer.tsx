import { useTimer } from "react-timer-hook";

function JackpotTImer() {
  const time = new Date();
  time.setHours(100);
  time.setMinutes(30);
  time.setSeconds(0);
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <p
      className={`bg-gradient-to-b from-[#ffe600] via-[#e0ce29ff]  to-[#383103ff] text-transparent bg-clip-text text-[10vw] moire not-italic drop-shadow-md`}
    >
      {hours}:{minutes}:{seconds}
    </p>
  );
}

export default JackpotTImer;
