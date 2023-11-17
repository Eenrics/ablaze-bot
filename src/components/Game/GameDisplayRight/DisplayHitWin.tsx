import HitWin from "./HitWin";
import { useTranslation } from "react-i18next";

function DisplayHitWin() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center w-5/6 mx-auto">
      <h3 className="text-[#EB0908] font-extrabold text-[5vw]">
        {t("global.pick", { number: 7 })}
      </h3>
      <div className="w-full">
        <div className="grid grid-cols-2 w-full">
          <h4 className="text-[#FFB800] font-extrabold text-center text-[4vw]">
            {t("game.hits")}
          </h4>
          <h4 className="text-[#FFB800] font-extrabold text-center text-[4vw]">
            {t("game.win")}
          </h4>
        </div>

        <HitWin hit={"0"} win={"-"} />
        <HitWin hit={"4"} win={"6"} />
        <HitWin hit={"5"} win={"58"} />
        <HitWin hit={"6"} win={"80"} />
      </div>
    </div>
  );
}

export default DisplayHitWin;
