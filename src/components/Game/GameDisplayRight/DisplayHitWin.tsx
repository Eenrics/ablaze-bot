import { BetoddToDisplay, dIndex } from "../../../services/gameService";
import HitWin from "./HitWin";
import { useTranslation } from "react-i18next";

function DisplayHitWin() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center w-5/6 mx-auto">
      <div className="w-full mx-2 flex flex-col gap-2">
        <div className="grid grid-cols-2 w-full">
          <h4 className="text-[#FFB800] font-extrabold text-center text-[5vw] ">
            {t("game.hits")}
          </h4>
          <h4 className="text-[#FFB800] font-extrabold text-center text-[5vw]">
            {t("game.win")}
          </h4>
        </div>

        {BetoddToDisplay[dIndex.value]
          .sort((a, b) => b.num - a.num)
          .map((hitWin, index) => {
            return (
              <HitWin hit={`${hitWin.num}`} win={`${hitWin.odd}`} key={index} />
            );
          })}
      </div>
    </div>
  );
}

export default DisplayHitWin;
