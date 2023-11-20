import GameDisplayStat from "./GameDisplayStat";
import GameDisplayLive from "./GameDisplayLive";
import { AnimatePresence, motion } from "framer-motion";
import { DisplayType, display } from "../../../utils/displayGameSignal";

function GameDisplayRight() {
  return (
    <div className="w-full h-full col-span-3">
      <AnimatePresence>
        {display.value === DisplayType.STAT ? (
          <GameDisplayStat />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full"
          >
            <GameDisplayLive />
          </motion.div>
        )}
      </AnimatePresence>
      {/* <GameDisplayLive /> */}
    </div>
  );
}

export default GameDisplayRight;
