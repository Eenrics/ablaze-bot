import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Animation from "./components/animation";
import MainHeader from "../../components/header/main.header";

function BallMixing() {
  return (
    <div className={`game-intro-layout w-full overflow-hidden  `}>
      <main
        className={`h-[100vh] w-full relative bg-[url('/assets/bgIntroPage.png')]`}
      >
        <div className=" absolute z-10">
          <MainHeader />
        </div>
        <div className="w-full h-full overflow-hidden flex justify-center">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="background-container"
            >
              <div className="pb-40">
                <Animation />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default BallMixing;
