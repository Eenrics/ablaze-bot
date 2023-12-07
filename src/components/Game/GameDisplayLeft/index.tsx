import GameTitle from "./GameTitle";
import GameBoard from "./GameBoard";
import { selectedBalls } from "../../../services/gameService";
import GameFooter from "./GameFooter";
import GameDisplayLive from "../GameDisplayRight/GameDisplayLive";
import { DisplayType, display } from "../../../utils/displayGameSignal";
// import JackpotDisplay from "./JackpotDisplay";

const data = Array.from({ length: 80 }, (_, index) => index + 1);

function GameDisplayLeft() {
  return (
    <div className="w-full col-span-10 flex flex-col gap-2 px-2  inset-shadow">
      {/* <JackpotDisplay /> */}
      <div className=" grid grid-cols-10 ">
        <div
          className={
            display.value === DisplayType.LIVE
              ? "col-span-6 space-y-3"
              : "col-span-10  "
          }
        >
          <GameTitle />

          <GameBoard data={data} winNumbers={selectedBalls.value} />
          <GameFooter />
        </div>
        {display.value === DisplayType.LIVE && (
          <div className="col-span-4">
            <GameDisplayLive />
          </div>
        )}
      </div>
    </div>
  );
}

export default GameDisplayLeft;
