import GameDisplayLeft from "./GameDisplayLeft";
import GameDisplayRight from "./GameDisplayRight";

function GameDisplay() {
  return (
    <div className="w-full h-auto border-[2px] border-red-800/20 grid grid-cols-10 py-3">
      <GameDisplayLeft />
      <GameDisplayRight />
    </div>
  );
}

export default GameDisplay;
