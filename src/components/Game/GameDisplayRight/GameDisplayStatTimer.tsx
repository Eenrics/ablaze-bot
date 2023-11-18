import { useTimer } from "react-timer-hook";

function GameDisplayStatTimer() {
  const time = new Date();
  time.setHours(10);
  time.setMinutes(30);
  time.setSeconds(0);
  const { seconds, minutes } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <p className=" bg-gradient-to-b text-[5vw] from-[#FFB700] to-[#B07F00]  text-transparent bg-clip-text moire">
      {minutes}:{seconds}
    </p>
  );
}

export default GameDisplayStatTimer;
