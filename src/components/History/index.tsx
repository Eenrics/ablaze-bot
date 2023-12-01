// import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import HistoryCard from "./HistoryCard";
import JackpotDisplay from "../Game/GameDisplayLeft/JackpotDisplay";
import Jackpot from "../Jackpot";
import WinnerDisplay from "../Game/GameDisplayRight/WinnerDisplay";
//import { DisplayType, display } from "../../utils/displayGameSignal";

function History() {
  // const { t } = useTranslation();

  return (
    <div className="grid gap-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full bg-gradient-to-r from-[#920C02] via-[#db0f00] to-[#920C02] h-[30vh] p-2 flex flex-col justify-center items-center"
      >
        <HistoryCard gameId="80307" />
        <HistoryCard gameId="80308" />
        <HistoryCard gameId="80309" />
        <HistoryCard gameId="80393" />
        <HistoryCard gameId="80493" />
        <HistoryCard gameId="70307" />
        <HistoryCard gameId="70307" />
        <HistoryCard gameId="70309" />
        <HistoryCard gameId="70393" />
        <HistoryCard gameId="70493" />
        {/* <p className="text-black">{t("history.placeholder")}</p> */}
      </motion.div>
      <JackpotDisplay />
      <Jackpot />
      <WinnerDisplay />
    </div>
  );
}

export default History;
