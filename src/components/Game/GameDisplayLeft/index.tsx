import GameTitle from "./GameTitle";
import GameBoard from "./GameBoard";
import { selectedBalls } from "../../../services/gameService";
import GameFooter from "./GameFooter";
// import JackpotDisplay from "./JackpotDisplay";

const data = Array.from({ length: 80 }, (_, index) => index + 1);

function GameDisplayLeft() {
  return (
    <div className="w-full h-full col-span-8 flex flex-col gap-2 px-2 py-3">
      <GameTitle />
      {/* <JackpotDisplay/> */}
      <GameBoard data={data} winNumbers={selectedBalls.value} />
      <GameFooter />
    </div>
  );
}

export default GameDisplayLeft;
