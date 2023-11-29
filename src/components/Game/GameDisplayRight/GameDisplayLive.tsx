import { AnimatePresence, motion } from "framer-motion";
import { showBall } from "../../../services/gameService";
import { selectedBall } from "../../../services/gameService";

function GameDisplayLive() {
  return (
    <div className="w-full ml-2 h-full relative flex flex-col gap-3 justify-center items-center bg-gradient-to-r from-[#F63308] to-[#EC1100] overflow-hidden">
      <img
        className=" scale-[300%] z-20 min-h-[90px]"
        src="/assets/balls/glass_container.webp"
        alt=""
      />
      <AnimatePresence>
        {showBall.value && (
          <motion.div
            initial={{ scale: 0, y: 300 }}
            transition={{ delay: 0.01 }}
            animate={{ scale: 1, y: 0 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0, y: -300 }}
            className="absolute [box-shadow:_inset_-8px_2px_24px_0_rgb(0_0_0_/_1);] flex justify-center items-center mt-6 z-10 left-0 right-0 bg-yellow-400 rounded-full w-[99%] aspect-square"
          >
            <p className="shake text-[12vw] font-bold text-black">
              {selectedBall}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GameDisplayLive;
