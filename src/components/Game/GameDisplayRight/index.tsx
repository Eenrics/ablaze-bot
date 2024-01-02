import GameDisplayStat from "./GameDisplayStat";
// import GameDisplayLive from "./GameDisplayLive";
import { AnimatePresence } from "framer-motion";
// import { DisplayType, display } from "../../../utils/displayGameSignal";

function GameDisplayRight() {
  return (
    <div className="w-full h-full col-span-3">
      <AnimatePresence>
        <GameDisplayStat />
      </AnimatePresence>
      {/* <GameDisplayLive /> */}
    </div>
  );
}

export default GameDisplayRight;
