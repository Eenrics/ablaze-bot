import GameDisplayStatTimer from "../GameDisplayRight/GameDisplayStatTimer";
import GameStatusTitle from "./GameStatusTitle";

function GameStatusBox() {
  return (
    <div className="flex justify-center">
      <div className="w-100 h-18 bg-none shadow p-4 flex-col justify-">
        <GameDisplayStatTimer />
        <GameStatusTitle />
      </div>
    </div>
  );
}

export default GameStatusBox;
