// import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import HistoryCard from "./HistoryCard";
import Jackpot from "../Jackpot";
import WinnerDisplay from "../Game/GameDisplayRight/WinnerDisplay";
import JackpotDisplay from "../Game/GameDisplayLeft/JackpotDisplay";

function History() {
  const gameNum = ["80307", "80306", "80305"];
  return (
    <div className="grid ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full pl-2 flex flex-col justify-start mb-2 "
      >
        {gameNum.map((win, index) => {
          return (
            <div className="gap-2 mb-2" key={index}>
              <p className="ml-3 text-[3.7vw] font-bold">{win}</p>
              <HistoryCard />
            </div>
          );
        })}
      </motion.div>
      <JackpotDisplay />
      <Jackpot />
      <WinnerDisplay />
    </div>
  );
}

export default History;
