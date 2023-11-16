import DisplayBallDrawn from "./DisplayBallDrawn";
import DisplayHitWin from "./DisplayHitWin";
import { useEffect, useState } from "react";

function GameDisplayRight() {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScreen((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // const [screen, setScreen] = useState(0)

  return (
    <div className="w-full h-full col-span-3 flex flex-col gap-3 ">
      <div className="flex gap-3 justify-end">
        <p className="bg-gradient-to-b from-[#ffe600] via-[#e0ce29ff]  to-[#383103ff] text-transparent bg-clip-text text-[3.4vw] moire not-italic">
          DRAW
        </p>
        <p className="bg-white text-transparent bg-clip-text text-[3.4vw] moire not-italic">
          80210
        </p>
      </div>

      <div className="flex flex-col w-full items-center">
        <p className=" bg-gradient-to-b text-[5vw] from-[#FFB700] to-[#B07F00]  text-transparent bg-clip-text moire">
          00:38
        </p>
      </div>
      {screen === 0 ? <DisplayBallDrawn /> : <DisplayHitWin />}
    </div>
  );
}

export default GameDisplayRight;
