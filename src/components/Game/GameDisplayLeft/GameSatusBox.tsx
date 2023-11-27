import GameDisplayStatTimer from "../GameDisplayRight/GameDisplayStatTimer";

function GameStatusBox() {
  return (
    <div className="flex justify-center">
      <div className="w-100 h-20 bg-none shadow p-4 ">
        <GameDisplayStatTimer />
      </div>
    </div>
  );
}

export default GameStatusBox;
