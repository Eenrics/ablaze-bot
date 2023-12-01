// import GameDisplayStat from "../GameDisplayRight/GameDisplayStat";

import { useTranslation } from "react-i18next";

function GameFooter() {
  const { t } = useTranslation();
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-3 justify-start ml-2 ">
        <p className="bg-gradient-to-b from-[#ffe600] via-[#a89916]  to-[#0c0b00] text-transparent bg-clip-text text-[6vw] moire not-italic">
          {t("global.draw")}
        </p>
        <p className="bg-white text-transparent bg-clip-text text-[6vw] moire not-italic">
          80210
        </p>
      </div>
      <div className="flex w-full justify-end">
        {/* <GameDisplayStat/> */}
        <div className="flex justify-center bg-[#ffa640]/100 uppercase rounded-[4px] text-[5.5vw] text-black font-semibold px-3 tail-width">
          TAILS
        </div>
      </div>
    </div>
  );
}

export default GameFooter;
