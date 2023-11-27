import GameDisplayLeft from "./GameDisplayLeft";
import GameStatusBox from "./GameDisplayLeft/GameSatusBox";
import JackpotDisplay from "./GameDisplayLeft/JackpotDisplay";
import GameDisplayRight from "./GameDisplayRight";
//import GameDisplayStatTimer from "./GameDisplayRight/GameDisplayStatTimer";

function GameDisplay() {
  return (
    <div className="w-full flex flex-col h-auto border-[2px] border-red-800/20">
      <GameStatusBox />
      <JackpotDisplay />
      <GameDisplayLeft />
      <GameDisplayRight />
    </div>
  );
}

export default GameDisplay;
