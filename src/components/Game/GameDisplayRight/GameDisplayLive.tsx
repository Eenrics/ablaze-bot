import { AnimatePresence, motion } from "framer-motion";
import { signal, useSignalEffect } from "@preact/signals-react";

const showBall = signal(true);
const currentBallNumber = signal(Math.floor(Math.random() * 80) + 1);

function GameDisplayLive() {
  useSignalEffect(() => {
    const intervalId = setInterval(() => {
      if (showBall.value) {
        showBall.value = false;
      } else {
        currentBallNumber.value = Math.floor(Math.random() * 80) + 1;
        showBall.value = true;
      }
    }, 3000);

    return () => clearTimeout(intervalId);
  });
  return (
    <div className="w-full h-full relative flex flex-col gap-3 justify-center items-center bg-gradient-to-r from-[#F63308] to-[#EC1100] overflow-hidden">
      <img
        className=" scale-[300%] z-20 h-[80px]"
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
            className="absolute [box-shadow:_inset_2px_2px_24px_0_rgb(0_0_0_/_1);] flex justify-center items-center text-[10vw] font-bold mt-6 z-10 left-0 right-0 bg-yellow-400 rounded-full w-[99%] aspect-square"
          >
            <p className="shake">{currentBallNumber}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GameDisplayLive;
