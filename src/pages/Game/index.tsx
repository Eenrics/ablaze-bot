import GameDisplay from "../../components/Game/GameDisplay";
import Jackpot from "../../components/Jackpot";
import History from "../../components/History";

function Game() {
  return (
    <div>
      <GameDisplay />
      <Jackpot />
      <History />
    </div>
  );
}

export default Game;
